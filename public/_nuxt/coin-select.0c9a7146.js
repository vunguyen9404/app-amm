import{a as ue,O as Ie,P as Oe,Q as V,R as ee,q as u,U as te,V as ne,W as h,X as r,Y as Ne,Z as A,$ as $e,a0 as Ae,a1 as Pe,a2 as de,a3 as oe,a4 as Be,a5 as Fe,a6 as Re,L as ze,G as De,r as P,b as ae,e as B,J as Me,I as je,a7 as j,h as We,a8 as qe,K as se,a9 as Ee,i as Ue,aa as U,l as Ze,ab as Z,o as b,c as Ge,w as W,p as d,D as Ke,ac as Je,m as k,v as le,ad as re,ae as ce,s as ie,t as F,af as Qe,y as Xe,z as Ye}from"./entry.dbaad074.js";import{_ as He}from"./img-no-Positions_2x.7a5d8c0c.js";import{_ as Ve}from"./img-no-Positions_2x.46d8a631.js";function R(t){return typeof t=="function"?t():t}const et=ue({name:"ConfirmDialog",inheritAttrs:!1,props:["icon","onCancel","onOk","close","closable","zIndex","afterClose","visible","keyboard","centered","getContainer","maskStyle","okButtonProps","cancelButtonProps","okType","prefixCls","okCancel","width","mask","maskClosable","okText","cancelText","autoFocusButton","transitionName","maskTransitionName","type","title","content","direction","rootPrefixCls","bodyStyle","closeIcon","modalRender","focusTriggerAfterClose","wrapClassName"],setup:function(e,f){var C=f.attrs,m=Ie("Modal"),y=Oe(m,1),p=y[0];return function(){var g=e.icon,S=e.onCancel,_=e.onOk,o=e.close,a=e.closable,s=a===void 0?!1:a,v=e.zIndex,w=e.afterClose,I=e.visible,O=e.keyboard,L=e.centered,G=e.getContainer,l=e.maskStyle,N=e.okButtonProps,D=e.cancelButtonProps,x=e.okCancel,i=x===void 0?!0:x,n=e.width,c=n===void 0?416:n,$=e.mask,me=$===void 0?!0:$,K=e.maskClosable,ve=K===void 0?!1:K,J=e.type,Q=e.title,Ce=e.content,be=e.direction,ke=e.closeIcon,ye=e.modalRender,pe=e.focusTriggerAfterClose,M=e.rootPrefixCls,_e=e.bodyStyle,he=e.wrapClassName,we=e.okType||"primary",E=e.prefixCls||"ant-modal",T="".concat(E,"-confirm"),ge=C.style||{},Te=R(e.okText)||(i?p.value.okText:p.value.justOkText),xe=R(e.cancelText)||p.value.cancelText,X=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",Se=V(T,"".concat(T,"-").concat(J),"".concat(E,"-").concat(J),ee({},"".concat(T,"-rtl"),be==="rtl"),C.class),Le=i&&u(te,{actionFn:S,close:o,autofocus:X==="cancel",buttonProps:D,prefixCls:"".concat(M,"-btn")},{default:function(){return[xe]}});return u(h,{prefixCls:E,class:Se,wrapClassName:V(ee({},"".concat(T,"-centered"),!!L),he),onCancel:function(H){return o({triggerCancel:!0},H)},visible:I,title:"",footer:"",transitionName:ne(M,"zoom",e.transitionName),maskTransitionName:ne(M,"fade",e.maskTransitionName),mask:me,maskClosable:ve,maskStyle:l,style:ge,bodyStyle:_e,width:c,zIndex:v,afterClose:w,keyboard:O,centered:L,getContainer:G,closable:s,closeIcon:ke,modalRender:ye,focusTriggerAfterClose:pe},{default:function(){return[u("div",{class:"".concat(T,"-body-wrapper")},[u("div",{class:"".concat(T,"-body")},[R(g),Q===void 0?null:u("span",{class:"".concat(T,"-title")},[R(Q)]),u("div",{class:"".concat(T,"-content")},[R(Ce)])]),u("div",{class:"".concat(T,"-btns")},[Le,u(te,{type:we,actionFn:_,close:o,autofocus:X==="ok",buttonProps:N,prefixCls:"".concat(M,"-btn")},{default:function(){return[Te]}})])])]}})}}});var tt=function(e){var f=document.createDocumentFragment(),C=r(r({},Ne(e,["parentContext","appContext"])),{},{close:p,visible:!0}),m=null;function y(){m&&(oe(null,f),m.component.update(),m=null);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];var v=a.some(function(O){return O&&O.triggerCancel});e.onCancel&&v&&e.onCancel.apply(e,a);for(var w=0;w<A.length;w++){var I=A[w];if(I===p){A.splice(w,1);break}}}function p(){for(var o=this,a=arguments.length,s=new Array(a),v=0;v<a;v++)s[v]=arguments[v];C=r(r({},C),{},{visible:!1,afterClose:function(){typeof e.afterClose=="function"&&e.afterClose(),y.apply(o,s)}}),g(C)}function g(o){typeof o=="function"?C=o(C):C=r(r({},C),o),m&&(Be(m.component.props,C),m.component.update())}var S=function(a){var s=Re,v=s.prefixCls,w=a.prefixCls||"".concat(v,"-modal");return u(Fe,r(r({},s),{},{notUpdateGlobalConfig:!0,prefixCls:v}),{default:function(){return[u(et,r(r({},a),{},{rootPrefixCls:v,prefixCls:w}),null)]}})};function _(o){var a=u(S,r({},o));return a.appContext=e.parentContext||e.appContext||a.appContext,oe(a,f),a}return m=_(C),A.push(p),{destroy:p,update:g}};const z=tt;function nt(t){return r(r({icon:function(){return u(de,null,null)},okCancel:!1},t),{},{type:"warning"})}function ot(t){return r(r({icon:function(){return u($e,null,null)},okCancel:!1},t),{},{type:"info"})}function at(t){return r(r({icon:function(){return u(Ae,null,null)},okCancel:!1},t),{},{type:"success"})}function st(t){return r(r({icon:function(){return u(Pe,null,null)},okCancel:!1},t),{},{type:"error"})}function lt(t){return r(r({icon:function(){return u(de,null,null)},okCancel:!0},t),{},{type:"confirm"})}function fe(t){return z(nt(t))}h.info=function(e){return z(ot(e))};h.success=function(e){return z(at(e))};h.error=function(e){return z(st(e))};h.warning=fe;h.warn=fe;h.confirm=function(e){return z(lt(e))};h.destroyAll=function(){for(;A.length;){var e=A.pop();e&&e()}};h.install=function(t){return t.component(h.name,h),t};const rt=ue({components:{Modal:h,LoadingOutlined:ze},props:{existingCoins:{type:String,default:""},lastSelectCoin:{type:String,default:""}},setup(t,e){const{t:f}=De(),C=P([f("tab.all"),f("tab.native"),f("tab.layerZero"),f("tab.wormhole"),f("tab.celer")]),m=P(f("tab.all")),y=P(""),p=ae(),g=B(()=>p.chainName),S=Me(),_=B(()=>S),o=je(),a=B(()=>o),s=P([]),v=P(null),w=ae(),I=B(()=>_.value.assets),O=B(()=>w);j(()=>a.value.tokens,l=>{U(l)||(s.value=Object.values(l))},{immediate:!0}),j(v,l=>{L(l)}),j(m,l=>{l==f("tab.all")?y.value="":l==f("tab.layerZero")?y.value="z":l==f("tab.wormhole")?y.value="wo":l==f("tab.celer")?y.value="ce":l==f("tab.native")&&(y.value="native"),L(v.value)}),j(()=>a.value.tokens,l=>{U(l)||(s.value=Object.values(l))},{immediate:!0}),We(()=>{L("")});const L=l=>{let N=[];const D={...a.value.tokens};for(const i of Object.keys(D)){let n=qe(D[i]);n.symbol.toUpperCase()==="SUI"&&g.value!=="Aptos"?n.sortToken=!0:n.sortToken=!1,t.lastSelectCoin&&n&&n.symbol===t.lastSelectCoin?n.unusable=!0:n.unusable=!1;const c=_.value.assets&&_.value.assets[n.address]&&Number(se(_.value.assets[n.address].balance,n.decimals))||0;n={...n,balance:c},N.push(n)}let x;if(_.value.address?x=N.sort((i,n)=>i.symbol.charCodeAt(0)-n.symbol.charCodeAt(0)).sort((i,n)=>n.balance-i.balance):x=N.sort((i,n)=>i.symbol.charCodeAt(0)-n.symbol.charCodeAt(0)),l){const i=x.filter(n=>n.symbol.toLowerCase().indexOf(l.toLowerCase())!==-1||n.address.toLowerCase().indexOf(l.toLowerCase())!==-1);if(m.value){const n=i.filter(c=>m.value=="Native"?c.name.toLowerCase().indexOf("z")==-1&&c.name.toLowerCase().indexOf("wo")==-1&&c.name.toLowerCase().indexOf("ce")==-1:c.name.toLowerCase().includes(y.value.toLowerCase()));s.value=n.sort((c,$)=>$.sortToken-c.sortToken).sort((c,$)=>$.unusable-c.unusable)}else s.value=i.sort((n,c)=>c.sortToken-n.sortToken).sort((n,c)=>c.unusable-n.unusable)}else if(m.value){const i=x.filter(n=>m.value=="Native"?n.name.toLowerCase().indexOf("z")==-1&&n.name.toLowerCase().indexOf("wo")==-1&&n.name.toLowerCase().indexOf("ce")==-1:n.name.toLowerCase().includes(y.value.toLowerCase()));s.value=i.sort((n,c)=>c.sortToken-n.sortToken).sort((n,c)=>c.unusable-n.unusable)}else s.value=x.sort((i,n)=>n.sortToken-i.sortToken).sort((i,n)=>n.unusable-i.unusable)};return Ee(()=>{U(a.value.tokens)||L("")}),{chainName:g,tabList:C,currentTab:m,tokenList:s,importIcon:Ue,keyword:v,wallet:_,toSelect:(l,N)=>{e.emit("onSelect",l),e.emit("onClose")},store:O,assets:I,prettyAmount:se}}});const q=t=>(Xe("data-v-04212424"),t=t(),Ye(),t),ct=q(()=>d("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[d("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),it={class:"coin-select-modal"},ut={class:"search-input"},dt=["placeholder"],ft=q(()=>d("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),mt=[ft],vt={key:0,class:"tab-list"},Ct=["onClick"],bt={class:"item"},kt=q(()=>d("div",{class:"line"},null,-1)),yt={class:"coin-list-box"},pt={key:0,class:"coin-list"},_t=["onClick"],ht={class:"left"},wt=["src"],gt={class:"name-box"},Tt={class:"balance-box"},xt={class:"balance"},St={key:0},Lt={key:1},It={key:2},Ot=q(()=>d("p",null,null,-1)),Nt={key:1,class:"no-data"},$t={key:0,src:He},At={key:1,src:Ve};function Pt(t,e,f,C,m,y){const p=Z("loading-outlined"),g=Qe,S=Z("vue-scroll"),_=Z("Modal");return b(),Ge(_,{title:t.$t("modal.selectTokenModalTitle"),class:"select-mod",width:400,centered:"",visible:!0,footer:null,onCancel:e[2]||(e[2]=o=>t.$emit("onClose"))},{closeIcon:W(()=>[ct]),default:W(()=>[d("div",it,[d("div",ut,[Ke(d("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.keyword=o),onkeyup:"value=value.replace(/[^A-Za-z0-9]+$/g,'')",placeholder:t.$t("inputPlaceholder.selectTokenModalPlaceholder")},null,8,dt),[[Je,t.keyword]]),t.keyword?(b(),k("svg",{key:0,class:"clear-icon icon modal-icon-close","aria-hidden":"true",onClick:e[1]||(e[1]=o=>t.keyword="")},mt)):le("",!0)]),t.chainName==="Aptos"?(b(),k("div",vt,[(b(!0),k(re,null,ce(t.tabList,(o,a)=>(b(),k("div",{key:a,class:ie(["item-container",t.currentTab==o?"item-container-active item-container":"item-container"]),onClick:s=>t.currentTab=o},[d("div",bt,F(o),1)],10,Ct))),128))])):le("",!0),kt,d("div",yt,[u(S,null,{default:W(()=>[t.tokenList&&t.tokenList.length>0?(b(),k("ul",pt,[(b(!0),k(re,null,ce(t.tokenList,(o,a)=>(b(),k("li",{key:a,class:ie(o.unusable?"unusable":""),onClick:s=>t.toSelect(o)},[d("div",ht,[d("img",{src:o.icon||o.logoURI||t.importIcon(`/image/coins/${o.symbol.toLowerCase()}.png`)},null,8,wt),d("div",gt,[d("span",null,F(o.symbol),1),d("p",null,F(o.name),1)])]),d("div",Tt,[d("div",xt,[t.wallet.loading?(b(),k("div",St,[u(g,null,{default:W(()=>[u(p)]),_:1})])):t.wallet.connected&&t.assets[o.address]?(b(),k("div",Lt,F(t.prettyAmount(t.assets[o.address].balance,o.decimals)),1)):(b(),k("div",It,"0"))]),Ot])],10,_t))),128))])):(b(),k("div",Nt,[t.store.theme=="default"?(b(),k("img",$t)):(b(),k("img",At)),d("p",null,F(t.$t("common.noData")),1)]))]),_:1})])])]),_:1},8,["title"])}const zt=Ze(rt,[["render",Pt],["__scopeId","data-v-04212424"]]);export{zt as _};