import{a as b,G as $,H as C,L as k,I as B,e as p,J as N,T as I,i as w,K as h,l as D,o as a,m as s,p as o,v as m,t as i,M as _,c as f,w as A,B as T,N as V,S as L,y as M,z as q}from"./entry.273748d4.js";import"./swap-setting.35eb33d9.js";const F=b({props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinAddress:{type:String,default:""},coinDecimals:{type:Number,default:6},removeBalance:{type:String,default:""},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},swapDirection:{type:String,default:""}},setup(e,t){const{t:v,locale:S}=$(),y=C(k,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function g(){this.$emit("onSelect")}const d=l=>{e.coinName=="USDC"||e.coinName=="USDT"?l.target.value=l.target.value.replace(/[^\d-]*(\d*(?:\.\d{0,6})?).*$/g,"$1"):l.target.value=l.target.value.replace(/[^\d-]*(\d*(?:\.\d{0,8})?).*$/g,"$1")},u=B();p(()=>u);const c=N(),n=p(()=>c),r=p(()=>n.value.connected?n.value.assets[e.coinAddress]&&n.value.assets[e.coinAddress].balance&&h(n.value.assets[e.coinAddress].balance,e.coinDecimals)||0:"--");return{indicator:y,inputChange:d,TOKENS:I,importIcon:w,selectCoin:g,balance:r,t:v,prettyAmount:h,max:()=>{e.swapDirection=="From"?t.emit("onMax","fromCoin",r):t.emit("onMax","toCoin",r)},connected:n.value.connected}}});const z=e=>(M("data-v-65e3e74e"),e=e(),q(),e),E={class:"card"},K={class:"top"},O=["src"],U={key:1,class:"icon","aria-hidden":"true"},G=z(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),H=[G],J={class:"right"},W={class:"balance"},j={class:"bottom"},P={key:1,class:"input-div"},Q={key:0};function R(e,t,v,S,y,g){const d=T,u=V,c=L;return a(),s("div",E,[o("div",K,[o("div",{class:"left",onClick:t[0]||(t[0]=n=>e.hasArrow?e.selectCoin():"")},[e.coinName?(a(),s("img",{key:0,src:e.importIcon(`/image/coins/${e.coinName.toLowerCase()}.png`)},null,8,O)):m("",!0),o("span",null,i(e.coinName?e.coinName:e.$t("modal.selectTokenModalTitle")),1),e.hasArrow?(a(),s("svg",U,H)):m("",!0)]),o("div",J,[_(i(e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),o("span",W,i(e.removeBalance?e.removeBalance:e.balance),1),e.havemax&&e.balance>0?(a(),f(d,{key:0,disabled:!e.coinName,class:"max-btn",onClick:e.max},{default:A(()=>[_(i(e.$t("button.max")),1)]),_:1},8,["disabled","onClick"])):m("",!0)])]),o("div",j,[e.inputDisabled?(a(),s("div",P,[e.inputValue?(a(),s("span",Q,i(e.inputValue),1)):(a(),f(c,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(a(),f(u,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.inputValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:t[1]||(t[1]=n=>e.$emit("onInput",n.target.value)),onFocus:t[2]||(t[2]=n=>e.$emit("onFocus"))},null,8,["value","disabled","onChange"]))])])}const x=D(F,[["render",R],["__scopeId","data-v-65e3e74e"]]);export{x as _};