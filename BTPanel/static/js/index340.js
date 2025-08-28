import{a2 as s,L as a,e}from"./utils-lib.js?v=1756369731";import{c as t,r as o,w as r,a4 as l,q as i,v as m,e as u,x as n}from"./base-lib.js?v=1756369731";import{u as p,N as _}from"./useStore9.js?v=1756369731";import"./__commonjsHelpers__.js?v=1756369731";const d={class:"set-node-tabs"},b=e(t({__name:"index",setup(e){const{settingTabActive:t,isJump:b,setNodeInfo:v}=p(),{resetTab:c}=_(),f=o(t.value||"ssh"),{BtTabs:j}=s({type:"left-bg-card",value:f,options:[{label:"SSH",name:"ssh",lazy:!0,render:()=>a(()=>import("./index341.js?v=1756369731"),__vite__mapDeps([]),import.meta.url)}]});return r(()=>b.value,s=>{s&&(f.value=t.value,c())}),l(()=>{v.value={}}),(s,a)=>(i(),m("div",d,[u(n(j))]))}}),[["__scopeId","data-v-f48b8aed"]]);export{b as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
