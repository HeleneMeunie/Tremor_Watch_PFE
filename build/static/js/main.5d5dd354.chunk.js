(this["webpackJsonptremor-watch"]=this["webpackJsonptremor-watch"]||[]).push([[0],{20:function(e,t,n){},217:function(e,t){},218:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),o=n.n(a),r=n(30),c=n.n(r),i=(n(90),n(5)),l=n(6),d=n(8),h=n(7),b=(n(20),n(55),n(19)),j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("head",{children:[Object(s.jsx)("meta",{charset:"utf-8"}),Object(s.jsx)("link",{rel:"icon",href:"%PUBLIC_URL%/dev-logo.png"}),Object(s.jsx)("meta",{name:"theme-color",content:"#000000"}),Object(s.jsx)("title",{children:"CoderGuides"})]}),Object(s.jsx)("nav",{class:"navbar navbar-expand-sm bg-primary navbar-dark",children:Object(s.jsxs)("ul",{class:"navbar-nav",children:[Object(s.jsx)("li",{class:"nav-item active h-elem",children:Object(s.jsx)(b.b,{class:"nav-link",style:{color:"inherit",textDecoration:"inherit"},to:"/",children:"Accueil"})}),Object(s.jsx)("li",{class:"nav-item h-elem",children:Object(s.jsx)(b.b,{class:"nav-link",style:{color:"inherit",textDecoration:"inherit"},to:"/courbes-simples",children:"Courbes simples"})}),Object(s.jsx)("li",{class:"nav-item h-elem",children:Object(s.jsx)(b.b,{class:"nav-link",style:{color:"inherit",textDecoration:"inherit"},to:"/donut",children:"Moyennes"})}),Object(s.jsx)("li",{class:"nav-item h-elem",children:Object(s.jsx)(b.b,{class:"nav-link",style:{color:"inherit",textDecoration:"inherit"},to:"/score",children:"Score"})})]})}),Object(s.jsx)("h1",{className:"titre",children:"Interface Tremor Watch"})]})}}]),n}(o.a.Component),u=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{class:"jumbotron text-center",children:[Object(s.jsx)("p",{children:"Projet d'\xe9tudiants de l'ECE Paris en collaboration avec le Centre de Recherche Interdisciplinaire de Paris (CRI), ann\xe9e scolaire 2020-2021"}),Object(s.jsx)("li",{children:"Projet tutor\xe9 par Frederic Ravaut (tuteur ECE), Vladimir Hermand (tuteur CRI) et K\xe9vin Lhoste (Responsable du MakerLab et tuteur CRI)"}),Object(s.jsx)("li",{children:"Equipe : H\xe9l\xe8ne Meunier, M\xe9linda Vachon, Arnaud Bretxa, Xavier Koczan, Guillaume Le Loher et Laura Flaquer"})]})}}]),n}(o.a.Component),x=n(4),O=n(2),p=(n.p,n(95),n(40)),v=(n(83),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={lab:[],data:{labels:["9:15","9:20","9:30","9:35","9:40","9:45","9:50","9:55","10:00","10:05","10:10","10:15","10:20","10:25"],datasets:[{label:" X Tremor",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40,65,59,80,81,56,55,40]},{label:"Y Tremor",fill:!1,lineTension:.1,backgroundColor:"rgba(75,0,192,0.4)",borderColor:"rgba(75,0,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,0,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,0,192,1)",pointHoverBorderColor:"rgba(220,0,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[80,70,40,31,60,50,59,70,35,40,80,56,60,70]},{label:"Z Tremor",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,0,0.4)",borderColor:"rgba(75,192,0,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,0,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,0,1)",pointHoverBorderColor:"rgba(220,220,0,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[30,50,88,83,40,30,45,50,53,88,80,70,55,31]}]},options:{maintainAspectRatio:!0,responsive:!0,legend:{position:"top"},scales:{yAxes:[{ticks:{beginAtZero:!1}}]},plugins:{zoom:{pan:{enabled:!0,mode:"x",speed:1,threshold:0,sensitivity:0},zoom:{enabled:!0,drag:!1,mode:"x",speed:100,threshold:0,sensitivity:.2}}}}},e.actu=function(){var t=e.props.datax,n=e.props.datay,s=e.props.dataz,a=e.props.labo,o=e.state.data;o.datasets[0].data=t,o.datasets[1].data=n,o.datasets[2].data=s,o.labels=a,e.setState({data:o})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{padding:"0.5em"},children:Object(s.jsx)("button",{onClick:this.actu,children:"Afficher les donn\xe9es"})}),Object(s.jsxs)("div",{style:{width:"85%",height:"85%"},children:[Object(s.jsx)("p",{children:"(m.s^\u22122)"}),Object(s.jsx)(p.Line,{data:this.state.data,options:this.state.options}),Object(s.jsx)("p",{class:"x-axe",children:"(Date UTC)"})]})]})}}]),n}(o.a.Component)),y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).showFile=function(){if(s.v=[5,6],window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.getElementById("show-text"),t=document.querySelector("input[type=file]").files[0],n=new FileReader;t.type.match(/text.*/)?n.onload=function(t){e.innerHTML=t.target.result,s.v=t.target.result,s.setState({variable1:String(s.v)})}:e.innerHTML="<span class='error'>It doesn't seem to be a text file!</span>",n.readAsText(t)}else alert("Your browser is too old to support HTML5 File API")},s.showKlicKlic=function(){console.log("tableau",s.state.tableau);for(var e=s.state.variable1.split("\n"),t=Object(O.a)(s.state.tableau),n=Object(O.a)(s.state.heure),a=Object(O.a)(s.state.x),o=Object(O.a)(s.state.y),r=Object(O.a)(s.state.z),c=Object(O.a)(s.state.score),i=1;i<e.length;i++){var l=e[i];console.log(typeof e[i]),console.log(l.split(","));var d=l.split(",");console.log(d[0]),1==i?(t=[{heure:d[0],x:d[1],y:d[2],z:d[3],score:d[4]}],n=[d[0]],a=[d[1]],o=[d[2]],r=[d[3]],c=[d[4]]):(t=[].concat(Object(O.a)(t),[{heure:d[0],x:d[1],y:d[2],z:d[3],score:d[4]}]),n=[].concat(Object(O.a)(n),[d[0]]),a=[].concat(Object(O.a)(a),[d[1]]),o=[].concat(Object(O.a)(o),[d[2]]),r=[].concat(Object(O.a)(r),[d[3]]),c=[].concat(Object(O.a)(c),[d[4]]))}s.setState({heure:n,x:a,y:o,z:r,score:c,tableau:t})},s.state={selectedFile:null,variable1:"",tableau:[],heure:[],x:[],y:[],z:[],score:[]},console.log(s.state.tableau),s}return Object(l.a)(n,[{key:"render",value:function(){return console.log("xxxx",this.state.x),console.log("score",this.state.score),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Charger le fichier pour afficher les donn\xe9es !"}),Object(s.jsx)("input",{type:"file",onChange:this.showFile.bind(this)}),Object(s.jsx)("button",{onClick:this.showKlicKlic.bind(this),children:"Charger Donn\xe9es"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"centrer",children:"Graphique des tremblements"}),Object(s.jsx)(v,{title:this.state.title,datax:this.state.x,datay:this.state.y,dataz:this.state.z,labo:this.state.heure})]}),Object(s.jsx)("p",{style:{display:"none"},children:"Donn\xe9es : "}),Object(s.jsx)("div",{style:{display:"none"},id:"show-text"}),Object(s.jsx)("div",{})]})}}]),n}(o.a.Component),m=n(41),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).actu=function(){e.props.labo;var t=e.state.chartData;e.setState({data:t})},e.state={},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{padding:"0.5em"}}),Object(s.jsxs)("div",{style:{padding:"2em",align:"center",width:"50%",height:"50%"},children:[Object(s.jsx)("h4",{style:{padding:"1em"},children:"Moyennes des tremblements"}),Object(s.jsx)("p",{children:"L\xe9gende :"}),Object(s.jsxs)("div",{class:"haha",children:[Object(s.jsx)("div",{class:"hehe, box_col1",children:"X"}),Object(s.jsx)("div",{class:"hehehe, box_col2",children:"Y"}),Object(s.jsx)("div",{class:"hehehehe, box_col3",children:"Z"})]}),Object(s.jsx)(m.PieChart,{data:[{title:"X",value:this.props.moyennex,color:"#E38627"},{title:"Y",value:this.props.moyenney,color:"#C13C37"},{title:"Z",value:this.props.moyennez,color:"#6A2135"}],label:function(e){return e.dataEntry.value}})]})]})}}]),n}(a.Component),g=n(221),w=(n(207),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).showFile=function(){if(s.v=[5,6],window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.getElementById("show-text"),t=document.querySelector("input[type=file]").files[0],n=new FileReader;t.type.match(/text.*/)?n.onload=function(t){e.innerHTML=t.target.result,s.v=t.target.result,s.setState({variable1:String(s.v)})}:e.innerHTML="<span class='error'>It doesn't seem to be a text file!</span>",n.readAsText(t)}else alert("Your browser is too old to support HTML5 File API")},s.showKlicKlic=function(){console.log("tableau",s.state.tableau);for(var e=s.state.variable1.split("\n"),t=Object(O.a)(s.state.tableau),n=Object(O.a)(s.state.heure),a=Object(O.a)(s.state.x),o=Object(O.a)(s.state.y),r=Object(O.a)(s.state.z),c=Object(O.a)(s.state.score),i=0,l=0,d=0,h=0,b=0,j=0,u=0,x=0,p=0,v=1;v<e.length;v++){var y=e[v];console.log(typeof e[v]),console.log(y.split(","));var m=y.split(",");console.log(m[0]),1===v?(t=[{heure:m[0],x:m[1],y:m[2],z:m[3],score:m[4]}],n=[m[0]],a=[m[1]],o=[m[2]],r=[m[3]],c=[m[4]]):(t=[].concat(Object(O.a)(t),[{heure:m[0],x:m[1],y:m[2],z:m[3],score:m[4]}]),n=[].concat(Object(O.a)(n),[m[0]]),a=[].concat(Object(O.a)(a),[m[1]]),o=[].concat(Object(O.a)(o),[m[2]]),r=[].concat(Object(O.a)(r),[m[3]]),c=[].concat(Object(O.a)(c),[m[4]]))}h=a[0],b=a[0],j=o[0],u=o[0],x=r[0],p=r[0];for(v=0;v<=a.length-1;v++)i+=parseInt(a[v]),l+=parseInt(o[v]),d+=parseInt(r[v]),h>a[v]&&(h=a[v]),b<a[v]&&(b=a[v]),j>o[v]&&(j=o[v]),u<o[v]&&(u=o[v]),x>r[v]&&(x=r[v]),p<r[v]&&(p=r[v]);var f=i=parseFloat((i/a.length).toFixed(2)),w=l=parseFloat((l/o.length).toFixed(2)),C=d=parseFloat((d/r.length).toFixed(2));console.log("moyennex:",i),console.log("moyenney:",l),console.log("moyennez:",d),i=Object(g.a)(i*i),l=Object(g.a)(l*l),d=Object(g.a)(d*d),s.setState({heure:n,x:a,y:o,z:r,score:c,tableau:t,moyennex:i,moyenney:l,moyennez:d,moyennexv:f,moyenneyv:w,moyennezv:C,minx:h,maxx:b,miny:j,maxy:u,minz:x,maxz:p})},s.state={selectedFile:null,variable1:"",tableau:[],heure:[],x:[],minx:0,maxx:0,y:[],miny:0,maxy:0,z:[],minz:0,maxz:0,score:[],moyennex:"",moyenney:"",moyennez:"",moyennexv:"",moyenneyv:"",moyennezv:""},console.log(s.state.tableau),s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Charger le fichier pour afficher les donn\xe9es !"}),Object(s.jsx)("input",{type:"file",onChange:this.showFile.bind(this)}),Object(s.jsx)("button",{class:"lapin",onClick:this.showKlicKlic.bind(this),children:"Charger Donn\xe9es"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"centrer",children:"Camembert des tremblements (en valeur absolue)"}),Object(s.jsxs)("div",{class:"wrapper",children:[Object(s.jsx)("div",{class:"one",children:Object(s.jsx)(f,{moyennex:this.state.moyennex,moyenney:this.state.moyenney,moyennez:this.state.moyennez,labo:this.state.heure})}),Object(s.jsxs)("div",{class:"two",children:[Object(s.jsx)("h4",{children:"Valeurs:"}),Object(s.jsxs)("div",{class:"ha",children:[Object(s.jsxs)("div",{class:"hehe",children:[Object(s.jsx)("h5",{children:"Tremor X"}),Object(s.jsxs)("p",{children:["Moyenne : ",this.state.moyennexv]}),Object(s.jsxs)("p",{children:["Min : ",this.state.minx]}),Object(s.jsxs)("p",{children:["Max : ",this.state.maxx]})]}),Object(s.jsxs)("div",{class:"hehehe",children:[Object(s.jsx)("h5",{children:"Tremor Y"}),Object(s.jsxs)("p",{children:["Moyenne : ",this.state.moyenneyv]}),Object(s.jsxs)("p",{children:["Min : ",this.state.miny]}),Object(s.jsxs)("p",{children:["Max : ",this.state.maxy]})]}),Object(s.jsxs)("div",{class:"hehehehe",children:[Object(s.jsx)("h5",{children:"Tremor Z"}),Object(s.jsxs)("p",{children:["Moyenne : ",this.state.moyennezv]}),Object(s.jsxs)("p",{children:["Min : ",this.state.minz]}),Object(s.jsxs)("p",{children:["Max : ",this.state.maxz]})]})]})]})]})]}),Object(s.jsx)("p",{style:{display:"none"},children:"Donn\xe9es : "}),Object(s.jsx)("div",{style:{display:"none"},id:"show-text"}),Object(s.jsx)("div",{})]})}}]),n}(a.Component)),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={lab:[],data:{labels:["9:15","9:20","9:30","9:35","9:40","9:45","9:50","9:55","10:00","10:05","10:10","10:15","10:20","10:25"],datasets:[{label:"Score",fill:!1,lineTension:.1,backgroundColor:"rgba(75,12,0,0.4)",borderColor:"rgba(75,12,0,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,12,0,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,12,0,1)",pointHoverBorderColor:"rgba(220,20,0,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},options:{maintainAspectRatio:!0,responsive:!0,legend:{position:"top"},scales:{yAxes:[{ticks:{beginAtZero:!1}}]},plugins:{zoom:{pan:{enabled:!0,mode:"x",speed:1,threshold:0,sensitivity:0},zoom:{enabled:!0,drag:!1,mode:"x",speed:100,threshold:0,sensitivity:.2}}}}},e.actu=function(){var t=e.props.labo,n=e.state.data,s=e.props.score;n.datasets[0].data=s,n.labels=t,e.setState({data:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{padding:"0.5em"},children:Object(s.jsx)("button",{onClick:this.actu,children:"Afficher les donn\xe9es"})}),Object(s.jsx)("div",{style:{width:"85%",height:"85%"},children:Object(s.jsx)(p.Line,{data:this.state.data})})]})}}]),n}(o.a.Component),z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).showFile=function(){if(s.v=[5,6],window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.getElementById("show-text"),t=document.querySelector("input[type=file]").files[0],n=new FileReader;t.type.match(/text.*/)?n.onload=function(t){e.innerHTML=t.target.result,s.v=t.target.result,s.setState({variable1:String(s.v)})}:e.innerHTML="<span class='error'>It doesn't seem to be a text file!</span>",n.readAsText(t)}else alert("Your browser is too old to support HTML5 File API")},s.showKlicKlic=function(){console.log("tableau",s.state.tableau);for(var e=s.state.variable1.split("\n"),t=Object(O.a)(s.state.tableau),n=Object(O.a)(s.state.heure),a=Object(O.a)(s.state.x),o=Object(O.a)(s.state.y),r=Object(O.a)(s.state.z),c=Object(O.a)(s.state.score),i=0,l=0,d=0,h=0,b=0,j=1;j<e.length;j++){var u=e[j];console.log(typeof e[j]),console.log(u.split(","));var x=u.split(",");console.log(x[0]),1===j?(t=[{heure:x[0],x:x[1],y:x[2],z:x[3],score:x[4]}],n=[x[0]],a=[x[1]],o=[x[2]],r=[x[3]],c=[x[4]]):(t=[].concat(Object(O.a)(t),[{heure:x[0],x:x[1],y:x[2],z:x[3],score:x[4]}]),n=[].concat(Object(O.a)(n),[x[0]]),a=[].concat(Object(O.a)(a),[x[1]]),o=[].concat(Object(O.a)(o),[x[2]]),r=[].concat(Object(O.a)(r),[x[3]]),c=[].concat(Object(O.a)(c),[x[4]]))}for(j=0;j<c.length;j++)"0"===c[j]&&(i+=1),1===parseInt(c[j])&&(l+=1),2===parseInt(c[j])&&(d+=1),3===parseInt(c[j])&&(h+=1),4===parseInt(c[j])&&(b+=1);console.log(c),console.log("cpt1:",i),console.log("cpt2:",l),console.log("cpt3:",d),console.log("cpt4:",h),console.log("cpt5:",b),s.setState({heure:n,x:a,y:o,z:r,score:c,tableau:t,moyenne1:i,moyenne2:l,moyenne3:d,moyenne4:h,moyenne5:b})},s.state={selectedFile:null,variable1:"",tableau:[],heure:[],x:[],y:[],z:[],score:[],moyenne1:"",moyenne2:"",moyenne3:"",moyenne4:"",moyenne5:""},console.log(s.state.tableau),s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Charger le fichier pour afficher les donn\xe9es !"}),Object(s.jsx)("input",{type:"file",onChange:this.showFile.bind(this)}),Object(s.jsx)("button",{onClick:this.showKlicKlic.bind(this),children:"Charger Donn\xe9es"}),Object(s.jsxs)("div",{style:{display:"none"},children:[Object(s.jsx)("h3",{className:"centrer",children:"Line chart du score"}),Object(s.jsx)(C,{score:this.state.score,labo:this.state.heure})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"centrer",children:"Camembert du score"}),Object(s.jsxs)("div",{class:"wrapper",children:[Object(s.jsx)("div",{class:"one",children:Object(s.jsxs)("div",{style:{padding:"2em",align:"center",width:"50%",height:"50%"},children:[Object(s.jsx)("h4",{style:{padding:"1em"},children:"Occurrences des scores"}),Object(s.jsx)("p",{children:"L\xe9gende :"}),Object(s.jsxs)("div",{class:"hoho",children:[Object(s.jsx)("div",{class:"hi, box_col1",children:"0"}),Object(s.jsx)("div",{class:"hihi, box_col2",children:"1"}),Object(s.jsx)("div",{class:"hihihi, box_col3",children:"2"}),Object(s.jsx)("div",{class:"hihihihi, box_col4",children:"3"}),Object(s.jsx)("div",{class:"hihihihihi, box_col5",children:"4"})]}),Object(s.jsx)(m.PieChart,{data:[{title:"0",value:this.state.moyenne1,color:"#E38627"},{title:"1",value:this.state.moyenne2,color:"#C13C37"},{title:"2",value:this.state.moyenne3,color:"#6A2135"},{title:"3",value:this.state.moyenne4,color:"#256698"},{title:"4",value:this.state.moyenne5,color:"#155508"}],label:function(e){return e.dataEntry.value}})]})}),Object(s.jsxs)("div",{class:"two",children:[Object(s.jsx)("h4",{children:"Valeurs:"}),Object(s.jsxs)("div",{class:"ha",children:[Object(s.jsxs)("div",{class:"hehe",children:[Object(s.jsxs)("h5",{children:["Score 0: ",this.state.moyenne1]}),Object(s.jsxs)("h5",{children:["Score 3: ",this.state.moyenne4]})]}),Object(s.jsxs)("div",{class:"hehehe",children:[Object(s.jsxs)("h5",{children:["Score 1: ",this.state.moyenne2]}),Object(s.jsxs)("h5",{children:["Score 4: ",this.state.moyenne5]})]}),Object(s.jsx)("div",{class:"hehehehe",children:Object(s.jsxs)("h5",{children:["Score 2: ",this.state.moyenne3]})})]})]})]})]}),Object(s.jsx)("p",{style:{display:"none"},children:"Donn\xe9es : "}),Object(s.jsx)("div",{style:{display:"none"},id:"show-text"}),Object(s.jsx)("div",{})]})}}]),n}(a.Component),k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).showFile=function(){if(s.v=[5,6],window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.getElementById("show-text"),t=document.querySelector("input[type=file]").files[0],n=new FileReader;t.type.match(/text.*/)?n.onload=function(t){e.innerHTML=t.target.result,s.v=t.target.result,s.setState({variable1:String(s.v)})}:e.innerHTML="<span class='error'>It doesn't seem to be a text file!</span>",n.readAsText(t)}else alert("Your browser is too old to support HTML5 File API")},s.showKlicKlic=function(){console.log("tableau",s.state.tableau);for(var e=s.state.variable1.split("\n"),t=Object(O.a)(s.state.tableau),n=Object(O.a)(s.state.heure),a=Object(O.a)(s.state.x),o=Object(O.a)(s.state.y),r=Object(O.a)(s.state.z),c=Object(O.a)(s.state.score),i=1;i<e.length;i++){var l=e[i];console.log(typeof e[i]),console.log(l.split(","));var d=l.split(",");console.log(d[0]),1===i?(t=[{heure:d[0],x:d[1],y:d[2],z:d[3],score:d[4]}],n=[d[0]],a=[d[1]],o=[d[2]],r=[d[3]],c=[d[4]]):(t=[].concat(Object(O.a)(t),[{heure:d[0],x:d[1],y:d[2],z:d[3],score:d[4]}]),n=[].concat(Object(O.a)(n),[d[0]]),a=[].concat(Object(O.a)(a),[d[1]]),o=[].concat(Object(O.a)(o),[d[2]]),r=[].concat(Object(O.a)(r),[d[3]]),c=[].concat(Object(O.a)(c),[d[4]]))}s.setState({heure:n,x:a,y:o,z:r,score:c,tableau:t})},s.act=function(){window.location.reload()},s.state={selectedFile:null,variable1:"",tableau:[],heure:[],x:[],y:[],z:[],score:[]},console.log(s.state.tableau),s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Charger le fichier pour afficher les donn\xe9es !"}),Object(s.jsx)("input",{type:"file",onChange:this.showFile.bind(this)}),Object(s.jsx)("button",{onClick:this.showKlicKlic.bind(this),children:"Charger Donn\xe9es"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"centrer",children:"Tremor X"}),Object(s.jsx)(v,{datax:this.state.x,labo:this.state.heure})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"centrer",children:"Tremor Y"}),Object(s.jsx)(v,{datay:this.state.y,labo:this.state.heure})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"centrer",children:"Tremor Z"}),Object(s.jsx)(v,{dataz:this.state.z,labo:this.state.heure})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"centrer",children:"Score"}),Object(s.jsx)(v,{score:this.state.score,labo:this.state.heure})]}),Object(s.jsx)("p",{style:{display:"none"},children:"Donn\xe9es : "}),Object(s.jsx)("div",{style:{display:"none"},id:"show-text"}),Object(s.jsx)("div",{})]})}}]),n}(o.a.Component),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(b.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{}),Object(s.jsxs)(x.c,{children:[Object(s.jsx)(x.a,{exact:!0,path:"/",children:Object(s.jsx)(y,{})}),Object(s.jsx)(x.a,{path:"/courbes-simples",children:Object(s.jsx)(k,{})}),Object(s.jsx)(x.a,{path:"/donut",children:Object(s.jsx)(w,{})}),Object(s.jsx)(x.a,{path:"/score",children:Object(s.jsx)(z,{})})]})]})}),Object(s.jsx)(u,{})]})}}]),n}(o.a.Component);c.a.render(Object(s.jsx)(b.a,{children:Object(s.jsx)(F,{})}),document.getElementById("root"))},90:function(e,t,n){}},[[218,1,2]]]);
//# sourceMappingURL=main.5d5dd354.chunk.js.map