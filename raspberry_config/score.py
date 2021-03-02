from math import *
from scipy.signal import hilbert, argrelextrema

import numpy as np


A = []
h = 0
N = 0


def score(time, dx, dy, dz):
    global N
    global h

    N = len(time)
    h = (time[N - 1] - time[0]) / (N - 1)

    dX = data_filtering(dx, h)
    dY = data_filtering(dy, h)
    dZ = data_filtering(dz, h)

    scores, freq_mean = compute_score(time, dX, dY, dZ)
    print(scores)

    return scores, freq_mean


def data_filtering(data, dt):
    freq = np.fft.rfftfreq(len(data), dt)
    for f in freq:
        if f > 2:
            index = freq.tolist().index(f)
            break
    fftdata = np.fft.rfft(data)

    fftdata[0:index] = 0

    treated_signal = [0]
    treated_signal[1:] = np.fft.irfft(fftdata)

    return treated_signal


def gravity_compensate(q, acc):
    g = [0.0, 0.0, 0.0]

    # get expected direction of gravity
    g[0] = 2 * (q[1] * q[3] - q[0] * q[2])
    g[1] = 2 * (q[0] * q[1] + q[2] * q[3])
    g[2] = q[0] * q[0] - q[1] * q[1] - q[2] * q[2] + q[3] * q[3]

    # compensate accelerometer readings with the expected direction of gravity
    return [acc[0] - g[0], acc[1] - g[1], acc[2] - g[2]]


def compute_score(time, dX, dY, dZ):
    t_score = []

    f_score, m_score, freq_mean = mag_freq_score_calculation(time, dX, dY, dZ)

    print(len(f_score), len(m_score))
    for i in range(0, len(f_score)):
        if floor((f_score[i] + m_score[i]) / 2) > 4:
            t_score.append(4)
        else:
            t_score.append(floor((f_score[i] + m_score[i]) / 2))

    return t_score, freq_mean


def mag_freq_score_calculation(time, dX, dY, dZ, Fmax=12, Mmax=0.02):
    global A

    # On crée une variable qui récupère la taille (en nb d'éléments) de notre intervalle de temps (i.e. intervalle d'étude)
    interval = 0
    max_raw = []
    module = []
    f_score = []
    m_score = []
    f_mean = []

    A = -(1 / (h ** 2)) * tridiag(N - 2)  # On peut eviter de recalculer à chaque fois

    ux = []
    ux.append(0)
    ux[1:] = accel_to_dist(dX[1:N - 1])
    ux.append(0)

    uy = []
    uy.append(0)
    uy[1:] = accel_to_dist(dY[1:N - 1])
    uy.append(0)

    uz = []
    uz.append(0)
    uz[1:] = accel_to_dist(dZ[1:N - 1])
    uz.append(0)
    # On parcourt les tableaux de raw data
    for i in range(0, N):

        # Pour chaque ligne on recherche le maximum des trois axes
        module.append(sqrt(ux[i] ** 2 + uy[i] ** 2 + uz[i] ** 2))

        # On calcule l'intervalle de temps
        if (time[i] - time[0]) < 1:
            interval = interval + 1

    module = np.array(module)
    
    for i in range(0, N):
        if (i + interval <= N - 1):

            # On étudie le signal sur l'intervalle d'étude
            m_score.append(mean(module[i: i + interval]) / Mmax * 4)

            max_m = argrelextrema(module[i: i + interval], np.greater)[0]

            f = freq[idx]
            f_mean.append(f)
            # On calcule la fréquence de tremblements sur l'intervalle que l'on associe à l'indice de la valeur
            # A la fin de l'intervalle de temps
            # Les n premières valeurs de f_trem (pour intervalle de temps <10) devraient être à 0
            f_score.append(f / Fmax * 4)
        else:
            f_score.append(0)
            m_score.append(0)
            f_mean.append(0)

    # On retroune le tableau de tremblements
    return f_score, m_score, f_mean


def get_max_enveloppe_index(d1, d2, d3):
    fft = []
    hfft = []
    fft = np.fft.rfft(d1) + np.fft.rfft(d2) + np.fft.rfft(d3) / 3
    hfft = np.abs(hilbert(np.abs(fft)))

    return hfft.tolist().index(max(hfft))


def tridiag(n):
    return np.diag([1 for _ in range(0, n - 1)], -1) + np.diag([-2 for _ in range(0, n)], 0) + np.diag(
        [1 for _ in range(0, n - 1)], 1)


def accel_to_dist(accel):

    L = np.linalg.cholesky(A)
    L2 = L.transpose()
    x = triang_inf(L, accel)
    y = triang_sup(L2, x)

    for i in range(0,N):
        if abs(y[i]) <0.001:
            y[i] = 0

    return y


def triang_inf(a, b):
    n = len(b)
    x = [b[0] / a[0][0]]

    for i in range(1, n):
        S = 0
        for j in range(0, i):
            S = S + A[i][j] * x[j]
        x.append((b[i] - S) / A[i][i])

    return x


def triang_sup(a, b):
    n = len(b)
    x = [0 for _ in range(0, n)]

    x[n - 1] = b[n - 1] / a[n - 1][n - 1]

    for i in range(0, n - 1):
        it = n - 2 - i
        S = 0
        for j in range(it + 1, n):
            S = S + a[it][j] * x[j]
        x[it] = (b[it] - S) / a[it][it]
    return x


def mean(x):
    return np.sum(x) / len(x)
