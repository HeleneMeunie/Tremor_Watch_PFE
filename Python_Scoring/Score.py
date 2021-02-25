"""
This program computes the tremor score using the acceleration magnitude 
and frequency of recorded movements

The time of acquisition is also used for the computation

The score - Interval = [| 0; 4 |] - is calculated 
with a weigthed mean of 2 components : 

- The Magnitude score : Which consists in integrating accelerometer 
  values with finites differences over 1s of data acquisition 
  to extract the displacement :
  
  a(t) = d²disp/dt² 
  Magscore = 4 * disp/referenced max displacement value

- The frequency score : Extrected from the raw signal FFT 
  Freqscore = frequency / referenced max frequency value 
"""

from math import *
import numpy as np
from scipy.signal import hilbert, chirp, argrelextrema
import matplotlib.pyplot as plt


A = []
h = 0
N = 0
dx = [] 
dy = [] 
dz = [] 
wc = 2

def score(time, dx, dy, dz):
        
    global N 
    global h 
    dX = []
    dY = []
    dZ = []
    
    scores = []
    f_mean = []
    
    
    N = len(time)
    h = (time[N-1]-time[0])/((N-1))
    
    dX = dataFiltering(dx,h)
    dY = dataFiltering(dy,h)
    dZ = dataFiltering(dz,h)
    
    scores, f_mean = compute_score(time,dX,dY,dZ)
    print(scores,f_mean)
    return scores, f_mean
    
def dataFiltering(data,dT):
    freq = np.fft.rfftfreq(len(data),dT)
   
    for f in freq : 
        if f > wc : 
            index = freq.tolist().index(f)
            break
            
    fftdata = np.fft.rfft(data)
    h_fftdata = np.abs(hilbert(np.abs(fftdata)))
    
    fftdata[0:index] = 0
    
    treated_signal = []
    treated_signal.append(0)
    treated_signal[1:] = np.fft.irfft(fftdata)
    
    return treated_signal

def compute_score(time, dX, dY,dZ):
    
    f_score = []
    m_score = []
    t_score = []
    f_mean = []
    f_score, m_score, f_mean = mag_freq_score_calculation(time, dX, dY,dZ)
    
    
    for i in range(0,len(f_score)):
        if(floor((f_score[i]+m_score[i])/2)>4):
            t_score.append(4)
        else:
            t_score.append(floor((f_score[i]+m_score[i])/2))
    #print(t_score,f_mean)
    return t_score, f_mean
  
        
def mag_freq_score_calculation(time, dX, dY,dZ,Fmax=12,Mmax=0.02):
    
    global A
    
    #On crée une variable qui récupère la taille (en nb d'éléments) de notre intervalle de temps (i.e. intervalle d'étude)
    interval = 0
    max_raw = []
    module  = []
    f_score = []
    m_score = []
    f_mean = []
    
    A = -(1 / (h**2)) * tridiag(N-2) #On peut eviter de recalculer à chaque fois
    
    ux =[]
    ux.append(0)
    ux[1:] = accel_to_dist(dX[1:N-1]) 
    ux.append(0)
    
    uy =[]
    uy.append(0)
    uy[1:] = accel_to_dist(dY[1:N-1]) 
    uy.append(0)
    
    uz =[]
    uz.append(0)
    uz[1:] = accel_to_dist(dZ[1:N-1]) 
    uz.append(0) 
    
    #On parcourt les tableaux de raw data
    for i in range(0,N):
        
        #Pour chaque ligne on recherche le maximum des trois axes 
        module.append(sqrt(ux[i]**2 + uy[i]**2 + uz[i]**2))
        
        #On calcule l'intervalle de temps 
        if (time[i]-time[0])<1 :
            interval = interval + 1
    
    module = np.array(module)
    
    print(module.tolist())
    
    for i in range(0,N) :
        if(i + interval <= N-1 ):
            
            
            # On étudie le signal sur l'intervalle d'étude 
            
            m_score.append(mean(module[i : i + interval]) / Mmax * 4)   
            
            
            
            maxm = argrelextrema(module[i : i+interval], np.greater)[0]
            
            f = len(maxm)/(time[i+interval]-time[i])/2
            f_mean.append(f)
            # On calcule la fréquence de tremblements sur l'intervalle que l'on associe à l'indice de la valeur
            # A la fin de l'intervalle de temps 
            # Les n premières valeurs de f_trem (pour intervalle de temps <10) devraient être à 0 
            f_score.append(f / Fmax * 4)
        else :
            f_score.append(0)
            m_score.append(0)
            f_mean.append(0)
            
    # On retroune le tableau de tremblements
    return f_score, m_score, f_mean


def get_max_enveloppe_index(d1,d2,d3):
    
    fft = []
    hfft = []
    fft = (np.fft.rfft(d1)+np.fft.rfft(d2)+np.fft.rfft(d3))/3
    hfft = np.abs(hilbert(np.abs(fft)))
    
    return hfft.tolist().index(max(hfft))

def tridiag(N):
    return np.diag([1 for _ in range(0,N-1)],-1) + np.diag([-2 for _ in range(0,N)],0) + np.diag([1 for _ in range(0,N-1)],1)

def accel_to_dist(Accel):
    
    L = np.linalg.cholesky(A)
    L2 = L.transpose()
    x = triang_inf(L,Accel)
    y = triang_sup(L2,x)
    
    for i in range (0,N-2):
        if abs(y[i])<0.0005:
            y[i]=0
    
    return y
    

def triang_inf(A,b):
    
    n = len(b)    
    x = []
    x.append(b[0]/A[0][0])
    
    for i in range(1,n):
        S=0;
        for j in range (0,i):
            S = S + A[i][j] * x[j]
        x.append((b[i]-S)/A[i][i])
    
    return x 

def triang_sup(A,b):
    n = len(b)
    x = [0 for _ in range(0,n)]
    
    x[n-1] = b[n-1]/A[n-1][n-1]
    
    for i in range(0,n-1):
        it = n-2-i
        S=0     
        for j in range(it+1,n):
            S = S + A[it][j] * x[j]
        x[it] = (b[it]-S)/A[it][it]
    return x

def mean(x):
    return np.sum(x)/len(x)

