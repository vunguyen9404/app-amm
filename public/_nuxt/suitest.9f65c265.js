var d=Object.defineProperty;var p=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var o=(t,e,n)=>(p(t,typeof e!="symbol"?e+"":e,n),n);import{a as _,r as w,ax as f,l as h,o as g,m,p as a,q as l,w as r,t as C,B as v,M as u,y as W,z as x}from"./entry.dbaad074.js";class y{constructor(){o(this,"connecting");o(this,"connected");o(this,"name","Sui Wallet");o(this,"url","https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil");this.connected=!1,this.connecting=!1}getAccounts(){return window.suiWallet.getAccounts()}executeMoveCall(e){return window.suiWallet.executeMoveCall(e)}executeSerializedMoveCall(e){return window.suiWallet.executeSerializedMoveCall(e)}signAndExecuteTransaction(e){return window.suiWallet.signAndExecuteTransaction(e)}async connect(){if(this.connecting=!0,window.suiWallet){const e=window.suiWallet;try{const n=await e.requestPermissions(),c=["viewAccount"],s=await e.hasPermissions(c);this.connected=!0}catch(n){console.error(n)}finally{this.connecting=!1}}}async disconnect(){this.connected==!0&&(this.connected=!1)}}const S=_({setup(){const t=w("");let e;return(s=>{s.VIEW_ACCOUNT="viewAccount",s.SUGGEST_TX="suggestTransactions"})(e||(e={})),new f,{address:t,toConnect:async()=>{await new y().connect()},toDisconnect:async()=>{await window.__suiet__.disconnect()}}}});const A=t=>(W("data-v-4379a5f9"),t=t(),x(),t),T={class:"suitest-container"},k=A(()=>a("h3",null,"sui test",-1));function b(t,e,n,c,s,B){const i=v;return g(),m("div",T,[k,a("div",null,[l(i,{onClick:t.toConnect},{default:r(()=>[u("connect")]),_:1},8,["onClick"]),l(i,{onClick:t.toDisconnect},{default:r(()=>[u("disconnect")]),_:1},8,["onClick"])]),a("p",null,C(t.address),1)])}const M=h(S,[["render",b],["__scopeId","data-v-4379a5f9"]]);export{M as default};