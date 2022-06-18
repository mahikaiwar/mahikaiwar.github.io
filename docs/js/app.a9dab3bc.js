(function(){"use strict";var e={86:function(e,t,n){n.d(t,{q:function(){return i}});const i=[{id:"tnwa",title:"Twelfth Night Webtoon Adaptation",description:"This project was for a literature course on performance, where we had to make a creative adaptation of Shakespeare's 'Twelfth Night' in any medium. As a collaboration with a friend, this project explores the idea of love and the self in a modern webtoon adaptation of Act II Scene IV. Here are a few snippets from the project. Here is the link to the whole project (it is designed to be read from a smartphone) : https://www.webtoons.com/en/challenge/twelfth-night-act-ii-scene-iv/list?title_no=762533",heroImage:"tnwacover.jpg",images:[{img:"tnwaopen.jpg",title:"",description:""},{img:"tnwagae.jpg",title:"",description:""},{img:"tnwasetting.jpg",title:"",description:""},{img:"tnwaolivia.jpg",title:"",description:""},{img:"tnwasimp.jpg",title:"",description:""},{img:"tnwaviola.jpg",title:"",description:""},{img:"tnwaresign.jpg",title:"",description:""},{img:"tnwaoops.jpg",title:"",description:""},{img:"tnwapass.jpg",title:"",description:""},{img:"tnwapinkies.jpg",title:"",description:""}]},{id:"mags",title:"Manga-ACK Graphic Short Story",description:"One of my courses, 'Creative Expression,' gave me the chance to take up a creative/research based project related to absolutely anything. I immediately knew that I wanted to create a short visual narration. I studied the different ways that stories were told in Amar Chitra Kathas, and in manga, and created a self-contained short story that alternated between the styles.",heroImage:"magscover.jpg",images:[{img:"magsman1.jpeg",title:"",description:""},{img:"magsack1.jpg",title:"",description:""},{img:"magsman2.jpg",title:"",description:""},{img:"magsack2.jpg",title:"",description:""},{img:"magsman3.jpg",title:"",description:""},{img:"magsmandes.jpg",title:"",description:""},{img:"magsackdes.jpg",title:"",description:""}]}]},4e3:function(e,t,n){var i=n(9242),o=n(3396);function r(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(89);const c={},s=(0,a.Z)(c,[["render",r]]);var u=s,l=n(678),p=n(7139);const d=(0,o._)("header",null,[(0,o._)("div",{class:"content"},[(0,o._)("p",{class:"title"}," Hi, I'm Mahi "),(0,o._)("div",{class:"cta"},[(0,o._)("a",{class:"btn",href:"#work"},"Nice to meet you!")])])],-1),f={id:"work"},g=(0,o._)("h1",null,"My Work",-1),m={class:"gallery"},h=["onClick"],v={class:"title"},w=(0,o._)("footer",null," Footer ",-1);function j(e,t,n,i,r,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[d,(0,o._)("main",null,[(0,o._)("section",f,[g,(0,o._)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.projects,(e=>((0,o.wg)(),(0,o.iD)("div",{onClick:t=>a.openProject(e.id),class:"project",key:e.id},[(0,o._)("div",{class:"image",style:(0,p.j5)({backgroundImage:`url('/projects/${e.id}/${e.heroImage}')`})},null,4),(0,o._)("div",v,(0,p.zw)(e.title),1)],8,h)))),128))])])]),w],64)}var b=n(86),y={name:"HomeView",components:{},methods:{openProject(e){this.$router.push({name:"project",params:{projectId:e}})}},computed:{projects(){return b.q}}};const k=(0,a.Z)(y,[["render",j]]);var _=k;const O=[{path:"/",name:"home",component:_},{path:"/project/:projectId",name:"project",component:()=>n.e(443).then(n.bind(n,6259))}],I=(0,l.p7)({history:(0,l.PO)("/"),routes:O});var C=I;(0,i.ri)(u).use(C).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,r){if(!i){var a=1/0;for(l=0;l<e.length;l++){i=e[l][0],o=e[l][1],r=e[l][2];for(var c=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(c=!1,r<a&&(a=r));if(c){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[i,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.ce9f6cd8.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio:";n.l=function(i,o,r,a){if(e[i])e[i].push(o);else{var c,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==t+r){c=p;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+r),c.src=i),e[i]=[o];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var o=e[i];if(delete e[i],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,i){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var r=new Promise((function(n,i){o=e[t]=[n,i]}));i.push(o[2]=r);var a=n.p+n.u(t),c=new Error,s=function(i){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,o[1](c)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,r,a=i[0],c=i[1],s=i[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(t&&t(i);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4e3)}));i=n.O(i)})();
//# sourceMappingURL=app.a9dab3bc.js.map