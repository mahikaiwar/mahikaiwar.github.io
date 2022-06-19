(function(){"use strict";var e={86:function(e,t,n){n.d(t,{j:function(){return i},q:function(){return o}});const o=[{id:"tnwa",title:"Twelfth Night Webtoon Adaptation",description:"This project was for a literature course on performance, where we had to make a creative adaptation of Shakespeare's 'Twelfth Night' in any medium. As a collaboration with a friend, this project explores the idea of love and the self in a modern webtoon adaptation of Act II Scene IV. Here are a few snippets from the project. Here is the link to the whole project (it is designed to be read from a smartphone) : https://www.webtoons.com/en/challenge/twelfth-night-act-ii-scene-iv/list?title_no=762533",heroImage:"tnwacover.jpg",images:[{img:"tnwaopen.jpg",title:"",description:""},{img:"tnwagae.jpg",title:"",description:""},{img:"tnwasetting.jpg",title:"",description:""},{img:"tnwaolivia.jpg",title:"",description:""},{img:"tnwasimp.jpg",title:"",description:""},{img:"tnwaviola.jpg",title:"",description:""},{img:"tnwaresign.jpg",title:"",description:""},{img:"tnwaoops.jpg",title:"",description:""},{img:"tnwapass.jpg",title:"",description:""},{img:"tnwapinkies.jpg",title:"",description:""}]},{id:"mags",title:"Manga-ACK Graphic Short Story",description:"One of my courses, 'Creative Expression,' gave me the chance to take up a creative/research based project related to absolutely anything. I immediately knew that I wanted to create a short visual narration. I studied the different ways that stories were told in Amar Chitra Kathas, and in manga, and created a self-contained short story that alternated between the styles.",heroImage:"magscover.jpg",images:[{img:"magsman1.jpeg",title:"",description:""},{img:"magsack1.jpg",title:"",description:""},{img:"magsman2.jpg",title:"",description:""},{img:"magsack2.jpg",title:"",description:""},{img:"magsman3.jpg",title:"",description:""},{img:"magsmandes.jpg",title:"",description:""},{img:"magsackdes.jpg",title:"",description:""}]}],i={name:"Mahi Kaiwar",shortDescription:"Art, Illustration, Design, Animation",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque nulla, suscipit vitae convallis vel, lobortis in erat. Aenean diam tortor, vulputate ac nisl quis, iaculis molestie lorem. Nam non iaculis quam. Fusce at lobortis magna. Maecenas tempus est eget velit suscipit pulvinar. Donec non facilisis sem. Maecenas sollicitudin purus ante, a maximus nibh rhoncus sit amet",socialLinks:[{type:"instagram",url:"https://instagram.com"},{type:"deviant-art",url:"https://deviant-art.com"}]}},8561:function(e,t,n){var o=n(9242),i=n(3396);function r(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var a=n(89);const s={},c=(0,a.Z)(s,[["render",r]]);var l=c,u=n(678),p=n(7139);const d={class:"bg-black/60 w-3/12 px-6 py-6 h-full overflow-y-auto"},m={class:"info-tile text-center"},g=(0,i._)("img",{src:"/logo.png",alt:"Logo",class:"block w-6/12 mx-auto my-4"},null,-1),f={class:"font-bold text-2xl my-2"},h={class:"my-2"},v={class:"social-links flex justify-center items-center my-4 text-lg"},b=["href"],w=(0,i._)("div",{class:"h-0 border my-8"},null,-1),j=["innerHTML"],y={class:"content h-full overflow-y-auto flex-1 bg-black/60 px-10 py-10"},k={class:""},x=(0,i._)("h1",{class:"text-6xl m-5"}," Recent Work ",-1),_={class:"projects flex flex-wrap"},I=["src","alt"],O={class:"absolute inset-x-0 bottom-0 bg-black/60 invisible group-hover:visible p-2"},A=(0,i._)("div",{class:"tinter absolute top-0 left-0 w-full h-full bg-pink-900/80 group-hover:invisible"},null,-1);function M(e,t,n,o,r,a){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("main",{class:"h-screen bg-center bg-cover text-red-100 flex",style:(0,p.j5)({backgroundImage:a.backgroundImage})},[(0,i._)("aside",d,[(0,i._)("div",m,[g,(0,i._)("h1",f,(0,p.zw)(a.about.name),1),(0,i._)("p",h,(0,p.zw)(a.about.shortDescription),1),(0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.about.socialLinks,(e=>((0,i.wg)(),(0,i.iD)("a",{key:e.type,href:e.url,class:"hover:text-pink-400 mx-2"},[((0,i.wg)(),(0,i.j4)((0,i.LL)(`${e.type}-icon`)))],8,b)))),128))]),w,(0,i._)("div",{class:"prose",innerHTML:a.about.description},null,8,j)])]),(0,i._)("section",y,[(0,i._)("div",k,[x,(0,i._)("div",_,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.projects,(e=>((0,i.wg)(),(0,i.j4)(s,{to:{name:"project",params:{projectId:e.id}},key:e.id,class:"project w-3/12 m-10 group relative cursor-pointer overflow-hidden transition-all",onMouseenter:t=>r.hoveredProject=e,onMouseleave:t[0]||(t[0]=e=>r.hoveredProject=null)},{default:(0,i.w5)((()=>[(0,i._)("img",{src:`/projects/${e.id}/${e.heroImage}`,alt:`${e.name} image`,class:"block w-full object-cover object-center grayscale group-hover:grayscale-0 aspect-square"},null,8,I),(0,i._)("div",O,(0,p.zw)(e.title),1),A])),_:2},1032,["to","onMouseenter"])))),128))])])])],4)}var P=n(86),T=n(4527),L=n(9922),C={name:"HomeView",components:{InstagramIcon:T.Z,DeviantArtIcon:L.Z},methods:{openProject(e){this.$router.push({name:"project",params:{projectId:e}})}},data(){return{hoveredProject:null}},computed:{projects(){return P.q},about(){return P.j},backgroundImage(){const{hoveredProject:e}=this;if(!e)return"url('/Banner.png')";const{id:t,heroImage:n}=e;return`url('/projects/${t}/${n}')`}}};const D=(0,a.Z)(C,[["render",M]]);var S=D;const q=[{path:"/",name:"home",component:S},{path:"/project/:projectId",name:"project",component:()=>n.e(443).then(n.bind(n,4544))}],E=(0,u.p7)({history:(0,u.PO)("/"),routes:q});var H=E;(0,o.ri)(l).use(H).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.ee93b943.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+r){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[i];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,i[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(t&&t(o);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8561)}));o=n.O(o)})();
//# sourceMappingURL=app.a276e495.js.map