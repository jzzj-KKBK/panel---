import{L as e}from"./utils-lib.js?v=1756369731";const n=async n=>{const{enable:i,type:a}=t();if(!i)return!1;if(a.includes("tencent")){const{default:t}=await e(()=>import("./index146.js?v=1756369731"),__vite__mapDeps([]),import.meta.url);return new t({name:"腾讯云专项版",dependencies:n})}if(a.includes("aliyun")){const{default:t}=await e(()=>import("./index147.js?v=1756369731"),__vite__mapDeps([]),import.meta.url);return new t({name:"阿里云专项版",dependencies:n})}return!1},t=()=>{const e=window.vite_public_panel_type,n=["tencent","aliyun"].find(n=>e.includes(n))||"";return{enable:Boolean(n),type:n}};export{t as c,n as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
