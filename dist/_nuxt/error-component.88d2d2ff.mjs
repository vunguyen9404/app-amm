import{d as a,_ as c,o as E,c as f,n as k,g as P,u as t}from"./entry.e8957190.mjs";const v={__name:"nuxt-error-page",props:{error:Object},setup(p){var o;const e=p.error;(e.stack||"").split(`
`).splice(1).map(s=>({text:s.replace("webpack:/","").replace(".vue",".js").trim(),internal:s.includes("node_modules")&&!s.includes(".cache")||s.includes("internal")||s.includes("new Promise")})).map(s=>`<span class="stack${s.internal?" internal":""}">${s.text}</span>`).join(`
`);const r=String(e.statusCode||500),n=r==="404",i=(o=e.statusMessage)!=null?o:n?"Page Not Found":"Internal Server Error",u=e.message||e.toString(),_=void 0,d=a(()=>c(()=>import("./error-404.483a9a80.mjs"),["_nuxt/error-404.483a9a80.mjs","_nuxt/error-404.8778dcd4.css","_nuxt/entry.e8957190.mjs","_nuxt/entry.ac433bac.css"])),l=a(()=>c(()=>import("./error-500.6b7d4503.mjs"),["_nuxt/error-500.6b7d4503.mjs","_nuxt/error-500.afe386a3.css","_nuxt/entry.e8957190.mjs","_nuxt/entry.ac433bac.css"])),m=n?d:l;return(s,g)=>(E(),f(t(m),k(P({statusCode:t(r),statusMessage:t(i),description:t(u),stack:t(_)})),null,16))}},j=v;export{j as default};