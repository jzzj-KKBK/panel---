import{L as e,al as a}from"./utils-lib.js?v=1756369731";import{c as t,r as l,p as s,q as r,M as o,x as m,P as p}from"./base-lib.js?v=1756369731";import"./__commonjsHelpers__.js?v=1756369731";const n=t({__name:"index",props:{compData:{default:()=>{}}},setup(t){const n=t,i=l("string"==typeof n.compData?n.compData:"setDefaultPage"),u=l([{label:"页面模板",name:"setDefaultPage",lazy:!0,render:()=>e(()=>import("./default-page.js?v=1756369731"),__vite__mapDeps([]),import.meta.url)},{label:"默认站点",name:"defaultSite",lazy:!0,render:()=>e(()=>import("./defalut-site.js?v=1756369731"),__vite__mapDeps([]),import.meta.url)},{label:"HTTPS防窜站",name:"httpsOfficersSite",lazy:!0,render:()=>e(()=>import("./anti-channel-site.js?v=1756369731"),__vite__mapDeps([]),import.meta.url)}]);return s(()=>{}),(e,t)=>{const l=a;return r(),o(l,{class:"w-full h-full",type:"left-bg-card",modelValue:m(i),"onUpdate:modelValue":t[0]||(t[0]=e=>p(i)?i.value=e:null),options:m(u)},null,8,["modelValue","options"])}}});export{n as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
