"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[443],{1955:function(e,t,o){o.r(t),o.d(t,{default:function(){return I}});var l=o(3396),r=o(7139);const s={class:"bg-black/60 lg:w-3/12 px-6 py-6 lg:h-full lg:overflow-y-auto"},c={class:"back"},i=(0,l.Uk)("Home"),n={class:"info-tile text-center"},a=["src"],u={class:"font-bold text-5xl my-2"},p=(0,l._)("div",{class:"h-0 border my-8"},null,-1),g=["innerHTML"],d={class:"content h-full overflow-y-auto flex-1 bg-black/60 px-10 py-10 cursor-pointer"},m={class:"images columns-1 md:columns-2 lg:columns-3"},b=["onMouseenter"],v=["src","alt"],f={key:0,class:"absolute inset-x-0 bottom-0 w-100 bg-black/60 visible lg:invisible group-hover:visible p-4"},w={class:"font-bold"},j=["innerHTML"];function k(e,t,o,k,h,x){const _=(0,l.up)("router-link"),y=(0,l.Q2)("viewer");return(0,l.wg)(),(0,l.iD)("main",{id:"project-view",class:"lg:h-screen bg-center bg-cover text-red-100 lg:flex overflow-x-wrap",style:(0,r.j5)({backgroundImage:x.backgroundImage})},[(0,l._)("aside",s,[(0,l._)("div",c,[(0,l.Wm)(_,{to:{name:"home"}},{default:(0,l.w5)((()=>[i])),_:1})]),(0,l._)("div",n,[(0,l._)("img",{src:`/projects/${x.project.id}/${x.project.heroImage}`,alt:"Logo",class:"block w-6/12 mx-auto my-4 aspect-square object-cover object-center rounded-full"},null,8,a),(0,l._)("h1",u,(0,r.zw)(x.project.title),1),p,(0,l._)("div",{class:"prose text-2xl",innerHTML:x.project.description},null,8,g)])]),(0,l._)("section",d,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",m,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(x.project.images,((o,s)=>((0,l.wg)(),(0,l.iD)("div",{key:o.img,class:"m-2 group hover:scale-105 relative",onMouseenter:t=>e.selectedImage=o,onMouseleave:t[0]||(t[0]=t=>e.selectedImage=null)},[(0,l._)("img",{src:`/projects/${x.project.id}/${o.img}`,alt:o.title||`${x.project.title} Image: ${s+1}`},null,8,v),o.title||o.description?((0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("h4",w,(0,r.zw)(o.title),1),(0,l._)("p",{innerHTML:o.description,class:"prose text-sm"},null,8,j)])):(0,l.kq)("",!0)],40,b)))),128))])),[[y]])])],4)}var h=o(86),x={name:"ProjectView",computed:{project(){return h.q.find((e=>e.id===this.$route.params.projectId))},backgroundImage(){const{project:{id:e,heroImage:t}}=this;return`url('/projects/${e}/${t}')`}}},_=o(89);const y=(0,_.Z)(x,[["render",k]]);var I=y}}]);
//# sourceMappingURL=about.35922c58.js.map