import{l as f,O as N,J as $,o as n,c as b,w as i,p as s,q as p,G as r,t,m as l,L as k,M as C,s as c,v as d,P as w,I,B as y,y as S,z as B}from"./entry.e1134fe4.js";const u=e=>(S("data-v-b856a2df"),e=e(),B(),e),T=u(()=>s("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),M={class:"setting-container"},V={class:"title"},z={class:"tag-list"},A={class:"input-box"},L={class:"custom"},q={key:0,class:"icon modal-icon-close","aria-hidden":"true"},D=u(()=>s("use",{"xlink:href":"#icon-icon-tips"},null,-1)),E=[D],F={key:1,class:"icon modal-icon-close","aria-hidden":"true"},G=u(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),J=[G],O={class:"footer"};function P(e,a,U,j,H,K){const h=w,_=I,g=y,v=$("Modal");return n(),b(v,{title:e.$t("modal.settingModalTitle"),class:"setting",centered:"",visible:!0,width:"400px",onCancel:a[2]||(a[2]=o=>e.$emit("onClose"))},{closeIcon:i(()=>[T]),footer:i(()=>[s("div",O,[p(g,{type:"cancel",class:"cancel-btn",onClick:a[1]||(a[1]=o=>e.$emit("onClose"))},{default:i(()=>[r(t(e.$t("button.cancel")),1)]),_:1}),p(g,{class:"confirmbtn",disabled:Number(e.slippage)==0||Number(e.slippage)>100,onClick:e.confirm},{default:i(()=>[r(t(e.$t("button.confirm")),1)]),_:1},8,["disabled","onClick"])])]),default:i(()=>[s("div",M,[s("div",V,t(e.$t("modal.slippageTolerance")),1),s("div",z,[(n(!0),l(k,null,C(e.settingArr,(o,m)=>(n(),b(h,{key:m,class:c(o==e.slippage?"tag-active":""),onClick:Q=>e.changeActiveIndex(m,o)},{default:i(()=>[r(t(o)+"% ",1)]),_:2},1032,["class","onClick"]))),128))]),s("div",A,[p(_,{value:e.slippage,"onUpdate:value":a[0]||(a[0]=o=>e.slippage=o),placeholder:"",suffix:"%",class:c(["slippage-input",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-input-waring":Number(e.slippage)>50?"slippage-input-error":""])},null,8,["value","class"]),s("span",L,t(e.$t("modal.customSlippage")),1)])]),e.slippage?(n(),l("div",{key:0,class:c(["slippage-hint",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-hint-waring":Number(e.slippage)>50?"slippage-hint-error":""])},[Number(e.slippage)>1&&50>=Number(e.slippage)?(n(),l("svg",q,E)):d("",!0),Number(e.slippage)>50?(n(),l("svg",F,J)):d("",!0),s("p",null,t(Number(e.slippage)>1&&50>=Number(e.slippage)?e.$t("tips.slippageTolerance2"):Number(e.slippage)>50?e.$t("tips.slippageTolerance1"):""),1)],2)):d("",!0)]),_:1},8,["title"])}const W=f(N,[["render",P],["__scopeId","data-v-b856a2df"]]);export{W as _};
