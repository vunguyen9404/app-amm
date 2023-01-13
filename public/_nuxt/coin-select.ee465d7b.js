import{a as ue,O as Ie,P as Oe,Q as V,R as ee,q as c,U as te,V as ne,W as _,X as r,Y as Ne,Z as O,$ as $e,a0 as Pe,a1 as Be,a2 as de,a3 as oe,a4 as Ae,a5 as Fe,a6 as Re,L as ze,G as De,r as P,b as ae,e as B,J as Me,I as je,a7 as M,h as We,a8 as qe,K as se,a9 as Ee,i as Ze,aa as E,l as Ge,ab as Z,o as v,c as Ke,w as j,p as i,D as Ue,ac as Je,m as C,v as le,ad as re,ae as ce,s as ie,t as A,af as Qe,y as Xe,z as Ye}from"./entry.273748d4.js";import{_ as He}from"./img-no-Positions_2x.7a5d8c0c.js";import{_ as Ve}from"./img-no-Positions_2x.46d8a631.js";function F(t){return typeof t=="function"?t():t}const et=ue({name:"ConfirmDialog",inheritAttrs:!1,props:["icon","onCancel","onOk","close","closable","zIndex","afterClose","visible","keyboard","centered","getContainer","maskStyle","okButtonProps","cancelButtonProps","okType","prefixCls","okCancel","width","mask","maskClosable","okText","cancelText","autoFocusButton","transitionName","maskTransitionName","type","title","content","direction","rootPrefixCls","bodyStyle","closeIcon","modalRender","focusTriggerAfterClose","wrapClassName"],setup:function(e,u){var m=u.attrs,d=Ie("Modal"),k=Oe(d,1),b=k[0];return function(){var g=e.icon,S=e.onCancel,y=e.onOk,n=e.close,o=e.closable,s=o===void 0?!1:o,f=e.zIndex,p=e.afterClose,L=e.visible,I=e.keyboard,T=e.centered,G=e.getContainer,l=e.maskStyle,N=e.okButtonProps,z=e.cancelButtonProps,$=e.okCancel,h=$===void 0?!0:$,a=e.width,x=a===void 0?416:a,K=e.mask,me=K===void 0?!0:K,U=e.maskClosable,ve=U===void 0?!1:U,J=e.type,Q=e.title,Ce=e.content,ke=e.direction,be=e.closeIcon,_e=e.modalRender,ye=e.focusTriggerAfterClose,D=e.rootPrefixCls,pe=e.bodyStyle,he=e.wrapClassName,we=e.okType||"primary",q=e.prefixCls||"ant-modal",w="".concat(q,"-confirm"),ge=m.style||{},xe=F(e.okText)||(h?b.value.okText:b.value.justOkText),Se=F(e.cancelText)||b.value.cancelText,X=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",Te=V(w,"".concat(w,"-").concat(J),"".concat(q,"-").concat(J),ee({},"".concat(w,"-rtl"),ke==="rtl"),m.class),Le=h&&c(te,{actionFn:S,close:n,autofocus:X==="cancel",buttonProps:z,prefixCls:"".concat(D,"-btn")},{default:function(){return[Se]}});return c(_,{prefixCls:q,class:Te,wrapClassName:V(ee({},"".concat(w,"-centered"),!!T),he),onCancel:function(H){return n({triggerCancel:!0},H)},visible:L,title:"",footer:"",transitionName:ne(D,"zoom",e.transitionName),maskTransitionName:ne(D,"fade",e.maskTransitionName),mask:me,maskClosable:ve,maskStyle:l,style:ge,bodyStyle:pe,width:x,zIndex:f,afterClose:p,keyboard:I,centered:T,getContainer:G,closable:s,closeIcon:be,modalRender:_e,focusTriggerAfterClose:ye},{default:function(){return[c("div",{class:"".concat(w,"-body-wrapper")},[c("div",{class:"".concat(w,"-body")},[F(g),Q===void 0?null:c("span",{class:"".concat(w,"-title")},[F(Q)]),c("div",{class:"".concat(w,"-content")},[F(Ce)])]),c("div",{class:"".concat(w,"-btns")},[Le,c(te,{type:we,actionFn:y,close:n,autofocus:X==="ok",buttonProps:N,prefixCls:"".concat(D,"-btn")},{default:function(){return[xe]}})])])]}})}}});var tt=function(e){var u=document.createDocumentFragment(),m=r(r({},Ne(e,["parentContext","appContext"])),{},{close:b,visible:!0}),d=null;function k(){d&&(oe(null,u),d.component.update(),d=null);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];var f=o.some(function(I){return I&&I.triggerCancel});e.onCancel&&f&&e.onCancel.apply(e,o);for(var p=0;p<O.length;p++){var L=O[p];if(L===b){O.splice(p,1);break}}}function b(){for(var n=this,o=arguments.length,s=new Array(o),f=0;f<o;f++)s[f]=arguments[f];m=r(r({},m),{},{visible:!1,afterClose:function(){typeof e.afterClose=="function"&&e.afterClose(),k.apply(n,s)}}),g(m)}function g(n){typeof n=="function"?m=n(m):m=r(r({},m),n),d&&(Ae(d.component.props,m),d.component.update())}var S=function(o){var s=Re,f=s.prefixCls,p=o.prefixCls||"".concat(f,"-modal");return c(Fe,r(r({},s),{},{notUpdateGlobalConfig:!0,prefixCls:f}),{default:function(){return[c(et,r(r({},o),{},{rootPrefixCls:f,prefixCls:p}),null)]}})};function y(n){var o=c(S,r({},n));return o.appContext=e.parentContext||e.appContext||o.appContext,oe(o,u),o}return d=y(m),O.push(b),{destroy:b,update:g}};const R=tt;function nt(t){return r(r({icon:function(){return c(de,null,null)},okCancel:!1},t),{},{type:"warning"})}function ot(t){return r(r({icon:function(){return c($e,null,null)},okCancel:!1},t),{},{type:"info"})}function at(t){return r(r({icon:function(){return c(Pe,null,null)},okCancel:!1},t),{},{type:"success"})}function st(t){return r(r({icon:function(){return c(Be,null,null)},okCancel:!1},t),{},{type:"error"})}function lt(t){return r(r({icon:function(){return c(de,null,null)},okCancel:!0},t),{},{type:"confirm"})}function fe(t){return R(nt(t))}_.info=function(e){return R(ot(e))};_.success=function(e){return R(at(e))};_.error=function(e){return R(st(e))};_.warning=fe;_.warn=fe;_.confirm=function(e){return R(lt(e))};_.destroyAll=function(){for(;O.length;){var e=O.pop();e&&e()}};_.install=function(t){return t.component(_.name,_),t};const rt=ue({components:{Modal:_,LoadingOutlined:ze},props:{existingCoins:{type:String,default:""},lastSelectCoin:{type:String,default:""}},setup(t,e){const{t:u}=De(),m=P([u("tab.all"),u("tab.native"),u("tab.layerZero"),u("tab.wormhole"),u("tab.celer")]),d=P(u("tab.all")),k=P(""),b=ae(),g=B(()=>b.chainName),S=Me(),y=B(()=>S),n=je(),o=B(()=>n),s=P([]),f=P(null),p=ae(),L=B(()=>y.value.assets),I=B(()=>p);M(()=>o.value.tokens,l=>{E(l)||(s.value=Object.values(l))},{immediate:!0}),M(f,l=>{T(l)}),M(d,l=>{l==u("tab.all")?k.value="":l==u("tab.layerZero")?k.value="z":l==u("tab.wormhole")?k.value="wo":l==u("tab.celer")?k.value="ce":l==u("tab.native")&&(k.value="native"),T(f.value)}),M(()=>o.value.tokens,l=>{E(l)||(s.value=Object.values(l))},{immediate:!0}),We(()=>{T("")});const T=l=>{let N=[];const z={...o.value.tokens};for(const h of Object.keys(z)){let a=qe(z[h]);t.lastSelectCoin&&a&&a.symbol===t.lastSelectCoin&&(a.unusable=!0);const x=y.value.assets&&y.value.assets[a.address]&&Number(se(y.value.assets[a.address].balance,a.decimals))||0;a={...a,balance:x},N.push(a)}const $=N.sort((h,a)=>a.balance-h.balance);if(l){const h=$.filter(a=>a.symbol.toLowerCase().indexOf(l.toLowerCase())!==-1||a.address.toLowerCase().indexOf(l.toLowerCase())!==-1);if(d.value){const a=h.filter(x=>d.value=="Native"?x.name.toLowerCase().indexOf("z")==-1&&x.name.toLowerCase().indexOf("wo")==-1&&x.name.toLowerCase().indexOf("ce")==-1:x.name.toLowerCase().includes(k.value.toLowerCase()));s.value=a}else s.value=h}else if(d.value){const h=$.filter(a=>d.value=="Native"?a.name.toLowerCase().indexOf("z")==-1&&a.name.toLowerCase().indexOf("wo")==-1&&a.name.toLowerCase().indexOf("ce")==-1:a.name.toLowerCase().includes(k.value.toLowerCase()));s.value=h}};return Ee(()=>{E(o.value.tokens)||T("")}),{chainName:g,tabList:m,currentTab:d,tokenList:s,importIcon:Ze,keyword:f,wallet:y,toSelect:(l,N)=>{e.emit("onSelect",l),e.emit("onClose")},store:I,assets:L,prettyAmount:se}}});const W=t=>(Xe("data-v-4e13ec0e"),t=t(),Ye(),t),ct=W(()=>i("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),it={class:"coin-select-modal"},ut={class:"search-input"},dt=["placeholder"],ft=W(()=>i("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),mt=[ft],vt={key:0,class:"tab-list"},Ct=["onClick"],kt={class:"item"},bt=W(()=>i("div",{class:"line"},null,-1)),_t={class:"coin-list-box"},yt={key:0,class:"coin-list"},pt=["onClick"],ht={class:"left"},wt=["src"],gt={class:"name-box"},xt={class:"balance-box"},St={class:"balance"},Tt={key:0},Lt={key:1},It={key:2},Ot=W(()=>i("p",null,null,-1)),Nt={key:1,class:"no-data"},$t={key:0,src:He},Pt={key:1,src:Ve};function Bt(t,e,u,m,d,k){const b=Z("loading-outlined"),g=Qe,S=Z("vue-scroll"),y=Z("Modal");return v(),Ke(y,{title:t.$t("modal.selectTokenModalTitle"),class:"select-mod",width:400,centered:"",visible:!0,footer:null,onCancel:e[2]||(e[2]=n=>t.$emit("onClose"))},{closeIcon:j(()=>[ct]),default:j(()=>[i("div",it,[i("div",ut,[Ue(i("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>t.keyword=n),onkeyup:"value=value.replace(/[^A-Za-z0-9]+$/g,'')",placeholder:t.$t("inputPlaceholder.selectTokenModalPlaceholder")},null,8,dt),[[Je,t.keyword]]),t.keyword?(v(),C("svg",{key:0,class:"clear-icon icon modal-icon-close","aria-hidden":"true",onClick:e[1]||(e[1]=n=>t.keyword="")},mt)):le("",!0)]),t.chainName!=="Sui"?(v(),C("div",vt,[(v(!0),C(re,null,ce(t.tabList,(n,o)=>(v(),C("div",{key:o,class:ie(["item-container",t.currentTab==n?"item-container-active item-container":"item-container"]),onClick:s=>t.currentTab=n},[i("div",kt,A(n),1)],10,Ct))),128))])):le("",!0),bt,i("div",_t,[c(S,null,{default:j(()=>[t.tokenList&&t.tokenList.length>0?(v(),C("ul",yt,[(v(!0),C(re,null,ce(t.tokenList,(n,o)=>(v(),C("li",{key:o,class:ie(n.unusable?"unusable":""),onClick:s=>t.toSelect(n)},[i("div",ht,[i("img",{src:n.icon||n.logoURI||t.importIcon(`/image/coins/${n.symbol.toLowerCase()}.png`)},null,8,wt),i("div",gt,[i("span",null,A(n.symbol),1),i("p",null,A(n.name),1)])]),i("div",xt,[i("div",St,[t.wallet.loading?(v(),C("div",Tt,[c(g,null,{default:j(()=>[c(b)]),_:1})])):t.wallet.connected&&t.assets[n.address]?(v(),C("div",Lt,A(t.prettyAmount(t.assets[n.address].balance,n.decimals)),1)):(v(),C("div",It,"0"))]),Ot])],10,pt))),128))])):(v(),C("div",Nt,[t.store.theme=="default"?(v(),C("img",$t)):(v(),C("img",Pt)),i("p",null,A(t.$t("common.noData")),1)]))]),_:1})])])]),_:1},8,["title"])}const zt=Ge(rt,[["render",Bt],["__scopeId","data-v-4e13ec0e"]]);export{zt as _};