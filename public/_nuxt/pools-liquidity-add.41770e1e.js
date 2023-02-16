import{_ as Ke}from"./back.9e630f37.js";import{_ as Ge}from"./refresh-icon.def229c9.js";import{_ as Je}from"./assets-card.8feab721.js";import{_ as He}from"./network-tips.93f2a227.js";import{_ as Qe}from"./coin-select.0888c6b2.js";import{_ as Ze,a as xe}from"./img-leverage_2x.28a0a972.js";import{_ as eo}from"./swap-setting.6eaa92b5.js";import{a as Te,W as oo,b as Ne,r as u,e as N,i as Oe,j as re,k as de,ak as Y,l as Be,ab as no,o as d,c as W,w as Z,p as o,t as n,m as f,q as O,M as so,B as _e,y as Re,z as Me,J as io,I as to,A as ao,al as lo,a9 as Le,a7 as V,G as uo,h as ro,am as mo,an as le,ao as co,K as ue,aa as U,ap as Ie,s as qe,v as A}from"./entry.7249c795.js";/* empty css              */import"./img-no-Positions_2x.7a5d8c0c.js";import"./img-no-Positions_2x.46d8a631.js";const vo=Te({components:{Modal:oo},props:{isIncrease:{type:Boolean,required:!1},fromCoin:{type:Object,required:!0},toCoin:{type:Object,required:!0},fromCoinAmount:{type:String,required:!0},toCoinAmount:{type:String,required:!0},fixedFromCoin:{type:Boolean,required:!0},currentLpInfo:{type:Object,required:!0},share:{type:String,required:!0},rate:{type:String,required:!0},currentRecivedLp:{type:String,required:!0}},emits:["to-add","on-close"],setup(e,s){const F=Ne(),m=u(F.slippage||.5),I=u(!0),b=u(!1);function C(w){I.value=w}const l=async()=>{s.emit("to-add")},k=N(()=>{if(e.currentLpInfo){const w=Y(e.currentLpInfo.balanceOrigin).plus(Y(e.currentRecivedLp).mul(Math.pow(10,6))),q=Y(e.currentLpInfo.lpSupply).plus(Y(e.currentRecivedLp).mul(Math.pow(10,6))),B=w.div(q).mul(100).toString();return Number(B)>.01?re(B,2)||"":"<0.01"}return""});return{importIcon:Oe,fixD:re,decimalFormat:de,direct:I,changeDirect:C,rateChange:b,clickNextBtn:l,slippage:m,newShare:k}}});const me=e=>(Re("data-v-a185f6e6"),e=e(),Me(),e),fo=me(()=>o("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),po={class:"add-confirm-container"},ho={class:"card-content"},Co={class:"top"},yo={class:"coin"},bo=["src"],go=["src"],$o={class:"bottom"},Ao={class:"induction"},wo={class:"item"},So={class:"induction-text"},ko={class:"induction-value induction-value-change"},Lo={key:0},Io={key:1},qo=me(()=>o("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),To=[qo],No={class:"item"},Oo={class:"induction-text"},Bo={class:"induction-value"},_o={class:"item"},Ro={class:"induction-text"},Mo={key:0,class:"induction-value"},Po={key:1,class:"induction-value"},Vo={class:"item liquidity-item"},Yo=me(()=>o("div",{class:"induction-text"},null,-1)),Fo={key:0,class:"induction-value"},Xo={key:1,class:"induction-value"},jo={class:"item"},Do={class:"induction-text"},Uo={key:0,class:"induction-value"},Wo={key:1,class:"induction-value"};function Eo(e,s,F,m,I,b){const C=_e,l=no("Modal");return d(),W(l,{width:"440px",visible:!0,footer:null,title:e.$t("modal.addLiquidityModalTitle"),class:"add-confirm-modal",onCancel:s[1]||(s[1]=k=>e.$emit("on-close"))},{closeIcon:Z(()=>[fo]),default:Z(()=>[o("div",po,[o("div",ho,[o("div",Co,[o("div",yo,[o("img",{src:e.fromCoin.logoURI||e.importIcon(`/image/coins/${e.fromCoin.symbol.toLowerCase()}.png`)},null,8,bo),o("img",{src:e.toCoin.logoURI||e.importIcon(`/image/coins/${e.toCoin.symbol.toLowerCase()}.png`)},null,8,go),o("p",null,n(e.currentRecivedLp)+" LP",1)])]),o("div",$o,[o("div",Ao,[o("div",wo,[o("div",So,n(e.$t("common.rate")),1),o("div",ko,[e.rateChange?(d(),f("span",Io,"1 "+n(e.toCoin.symbol)+" \u2248 "+n(e.fixD(1/e.rate,e.fromCoin.decimals))+" "+n(e.fromCoin.symbol),1)):(d(),f("span",Lo,"1 "+n(e.fromCoin.symbol)+" \u2248 "+n(e.fixD(e.rate,e.toCoin.decimals))+" "+n(e.toCoin.symbol),1)),(d(),f("svg",{class:"icon-change","aria-hidden":"true",onClick:s[0]||(s[0]=k=>e.rateChange=!e.rateChange)},To))])]),o("div",No,[o("div",Oo,n(e.$t("modal.slippageTolerance")),1),o("div",Bo,n(e.slippage)+"%",1)]),o("div",_o,[o("div",Ro,n(e.$t("common.liquidityDeposited")),1),e.isIncrease?(d(),f("div",Po,n(e.fixD(e.currentLpInfo.myCoinXAmount,e.fromCoin.decimals))+" \u2192 "+n(e.fixD(Number(e.currentLpInfo.myCoinXAmount)+Number(e.fromCoinAmount),e.fromCoin.decimals))+" "+n(e.fromCoin.symbol),1)):(d(),f("div",Mo,n(e.fromCoinAmount)+" "+n(e.fromCoin.symbol),1))]),o("div",Vo,[Yo,e.isIncrease?(d(),f("div",Xo,n(e.fixD(e.currentLpInfo.myCoinYAmount,e.toCoin.decimals))+" \u2192 "+n(e.fixD(Number(e.currentLpInfo.myCoinYAmount)+Number(e.toCoinAmount),e.toCoin.decimals))+" "+n(e.toCoin.symbol),1)):(d(),f("div",Fo,n(e.toCoinAmount)+" "+n(e.toCoin.symbol),1))]),o("div",jo,[o("div",Do,n(e.$t("common.shareOfPool")),1),e.isIncrease?(d(),f("div",Wo,n(e.currentLpInfo.myshareOfPool)+"% \u2192 "+n(e.newShare)+"%",1)):(d(),f("div",Uo,n(e.share)+"%",1))])])])])]),O(C,{class:"big-btn swap-confirm-btn",onClick:e.clickNextBtn},{default:Z(()=>[so(n(e.$t("button.confirmSupply")),1)]),_:1},8,["onClick"])]),_:1},8,["title"])}const zo=Be(vo,[["render",Eo],["__scopeId","data-v-a185f6e6"]]),Ko=Te({setup(e,s){var be,ge,$e,Ae,we,Se;const F=io(),m=N(()=>F),I=Ne(),b=N(()=>I),C=to(),l=N(()=>C);let k=u(!0),w=u(!1),q=u(!1),B=u(!1),x=u(!1),ee=u(!1);const X=u("fromCoin"),_=u(""),R=u(""),c=u(!1),oe=u(!1),y=u(!0),ce=u(!1),ne=u(!1),p=u(""),h=u(""),se=u(20),M=u(0),z=u(null),S=ao(),Pe=lo(),K=(($e=(ge=(be=S==null?void 0:S.currentRoute)==null?void 0:be.value)==null?void 0:ge.query)==null?void 0:$e.from)||Object.values(l.value.lpTokens)[0].coinA,G=((Se=(we=(Ae=S==null?void 0:S.currentRoute)==null?void 0:Ae.value)==null?void 0:we.query)==null?void 0:Se.to)||Object.values(l.value.lpTokens)[0].coinB,t=u(""),a=u("");Le(()=>{!U(l.value.lpTokens)&&!U(C.tokens)&&!t.value&&!a.value&&(t.value=C.tokens[K]||Object.values(l.value.lpTokens)[0].coinA,a.value=C.tokens[G]||Object.values(l.value.lpTokens)[0].coinB)}),V(()=>[b.value.chainName,l.value.lpTokens],([i,r],[v,$])=>{i&&!U(r)&&(t.value=C.tokens[K]||Object.values(r)[0].coinA,a.value=C.tokens[G]||Object.values(r)[0].coinB)});const j=u(""),{t:g}=uo(),Ve=N(()=>b.value.slippage),ve=N(()=>{if(!Ie(t.value&&t.value.symbol,a.value&&a.value.symbol,C.lpTokens))return g("button.poolNotFound");if(m.value.assets&&m.value.assets[t.value.address]){if(t.value&&Number(p.value)>Number(ue(m.value.assets[t.value.address].balance,t.value.decimals)))return g("button.insufficientBalance",{name:t.value.symbol})}else if(m.value.assets&&!m.value.assets[t.value.address])return g("button.insufficientBalance",{name:t.value.symbol});if(m.value.assets&&m.value.assets[a.value.address]){if(a.value&&Number(h.value)>Number(ue(m.value.assets[a.value.address].balance,a.value.decimals)))return g("button.insufficientBalance",{name:a.value.symbol})}else if(m.value.assets&&!m.value.assets[a.value.address])return g("button.insufficientBalance",{name:a.value.symbol});return Number(p.value)?g("button.addToPool"):g("button.enterAmount")}),Ye=i=>{var r,v,$,T;X.value=i,i==="fromCoin"?(_.value=((r=a.value)==null?void 0:r.symbol)||"",R.value=((v=t.value)==null?void 0:v.symbol)||""):(_.value=(($=t.value)==null?void 0:$.symbol)||"",R.value=((T=a.value)==null?void 0:T.symbol)||""),c.value=!0},Fe=i=>{p.value="",h.value="",X.value==="fromCoin"?(a.value&&i.symbol.toLowerCase()===(a==null?void 0:a.value.symbol.toLowerCase())&&(a.value=null),t.value=i):(t.value&&i.symbol.toLowerCase()===(t==null?void 0:t.value.symbol.toLowerCase())&&(t.value=null),a.value=i),c.value=!1},Xe=(i,r)=>{i==="fromCoin"?(y.value=!0,p.value=r.value):(y.value=!1,h.value=r.value)};ro(async()=>{S.currentRoute.value.query.from,S.currentRoute.value.query.to,pe()}),V(()=>[l.value.myLplist,t.value,a.value],async([i,r,v])=>{!U(i)&&r&&v&&(j.value=await L.getPrice({coinX:l.value.tokens[r.symbol],coinY:l.value.tokens[v.symbol]})||"")});const fe=async()=>{M.value=0,q.value=!0,setTimeout(()=>{q.value=!1},1e3),m.value.address&&C.setMyLplist(m.value.address),j.value=await L.getPrice({coinX:l.value.tokens[K],coinY:l.value.tokens[G]})},je=()=>{const i=t.value;t.value=a.value,a.value=i,w.value=!0,Pe.query={},setTimeout(()=>{w.value=!1},300)},pe=()=>{z.value=setInterval(()=>{ce.value||M.value<se.value&&(M.value+=1,M.value===se.value&&(M.value=0,z.value=null,window.clearInterval(z.value),ae(y.value?p.value:h.value)))},1e3)},De=async()=>{oe.value=!0},L=mo();V(y,le((i,r)=>{y.value=i},800)),V(p,le((i,r)=>{i&&y.value&&ae(i),i==""&&y.value&&(h.value="")},500)),V(h,le((i,r)=>{i&&!y.value&&ae(i),i==""&&!y.value&&(p.value="")},500));const ie=u(""),te=u(""),ae=async i=>{const r=u({});if(i!==""&&ve.value!==g("common.poolNotFound")){if(y.value?r.value={coinX:l.value.tokens[t.value.symbol],coinY:l.value.tokens[a.value.symbol],amount:i}:r.value={coinX:l.value.tokens[a.value.symbol],coinY:l.value.tokens[t.value.symbol],amount:i},r.value)try{const v=await L.getLiquidityAndCoinYByCoinX(r.value);if(v==-1){te.value="100";const T=Y(p.value).mul(Math.pow(10,t.value.decimals)),H=Y(h.value).mul(Math.pow(10,a.value.decimals));ie.value=de(T.mul(H).sqrt().div(Math.pow(10,6)).toString(),6)||"",p.value&&h.value?j.value=String(Number(h.value)/Number(p.value)):j.value="0";return}y.value?h.value=v.coinYAmount:p.value=v.coinYAmount,ie.value=v.lpAmountView;const $=await L.getShareOfPool({coinX:l.value.tokens[t.value.symbol],coinY:l.value.tokens[a.value.symbol],currentLpVal:v.lpAmount});te.value=$}catch(v){console.log("pools-liquidity-add###getAmount###share##error###",v)}}else y.value?h.value="":p.value=""},he=u({});V(()=>[b.value.chainName,m.value.address,l.value.lpTokens],([i,r,v])=>{i&&!U(v)&&C.setMyLplist(r)},{immediate:!0}),Le(()=>{if(t.value&&a.value&&l.value.myLplist&&l.value.myLplist.length>0&&m.value.address){const i=l.value.myLplist;let r;if(t.value.symbol&&a.value.symbol&&(r=Ie(t.value.symbol,a.value.symbol,l.value.lpTokens)),r){const v=i.filter($=>$.symbol===r.symbol)[0];he.value=v}}});const{setIsShowSuccess:Ue,setIsShowRejected:Ce,setIsShowWaiting:J,setTransactionDesc:We,setTransactionTxid:ye}=I,Ee=async()=>{var i,r,v,$,T,H;oe.value=!1,ye(""),We(g("tips.addLiquiditySuccessText",{from:`${p.value} ${(i=t.value)==null?void 0:i.symbol}`,to:`${h.value} ${(r=a.value)==null?void 0:r.symbol}`})),J(!0);try{const D=u({});y.value?D.value={coinX:l.value.tokens[t.value.symbol],coinY:l.value.tokens[a.value.symbol],coinXAmount:p.value,coinYAmount:h.value,slippage:Number(b.value.slippage)/100}:D.value={coinX:l.value.tokens[a.value.symbol],coinY:l.value.tokens[t.value.symbol],coinXAmount:h.value,coinYAmount:p.value,slippage:Number(b.value.slippage)/100};const ke=await L.createAddLiquidityTransactionPayload(D.value);let P;if(b.value.chainName!=="Aptos"){const Q=await m.value.currentWallet.signAndExecuteTransaction(ke);P=L.handleTx(Q)}else P=await m.value.currentWallet.signAndSubmitTransaction(ke);if(P&&P.hash){ye(P.hash),J(!1),Ue(!0);const Q={title:g("common.addLiquidity"),desc:g("tips.increaseLiquiditySuccess",{from:`${p.value} ${(v=t.value)==null?void 0:v.symbol}`,to:`${h.value} ${($=a.value)==null?void 0:$.symbol}`}),hash:P.hash,descTransactions:`Add ${p.value} ${(T=t.value)==null?void 0:T.symbol} and ${h.value} ${(H=a.value)==null?void 0:H.symbol} 
         to the pool`,sender:m.value.address,chainName:b.value.chainName};L.showTransitionPending(Q),await L.watchTransaction(Q)&&setTimeout(()=>{fe()},1e3)}else J(!1),Ce(!0);ne.value=!1,h.value="",p.value=""}catch(D){console.log("0208###toAdd###error####",D),ne.value=!1,J(!1),Ce(!0),h.value="",p.value=""}},ze=N(()=>m.value.assets);return{addCommom:co,share:te,prettyAmount:ue,fixD:re,decimalFormat:de,currentLpInfo:he,lpAmountView:ie,coinfrom:K,cointo:G,router:S,wallet:m,hasLiquidity:k,importIcon:Oe,clickExchange:je,clickRefresh:fe,refresh:q,change:w,isShowAddress:B,isShowSwapSetting:x,fromCoin:t,toCoin:a,slippage:Ve,openCoinSelect:Ye,onCoinSelect:Fe,existingCoins:_,lastSelectCoin:R,currentCoinKey:X,showCoinSelect:c,fromCoinAmount:p,toCoinAmount:h,maxBtnSelect:Xe,fixedFromCoin:y,BtnText:ve,clickBtn:De,loading:ce,swaping:ne,autoRefreshTime:se,countdown:M,setMarketTimer:pe,marketTimer:z,rateChange:ee,isShowAddConfirm:oe,rate:j,toAdd:Ee,assets:ze}}});const E=e=>(Re("data-v-1376245e"),e=e(),Me(),e),Go={class:"linquidity-add-container"},Jo={class:"title"},Ho={class:"left"},Qo={class:"right title-right"},Zo=E(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),xo=E(()=>o("use",{"xlink:href":"#icon-icon-information"},null,-1)),en=[xo],on={class:"swap-card"},nn={class:"card-container"},sn={class:"card-item"},tn={class:"card-item"},an={class:"exchange"},ln=E(()=>o("use",{"xlink:href":"#icon-icon-add1"},null,-1)),un=[ln],rn={key:0,class:"induction"},dn={key:0,class:"item"},mn={class:"induction-text"},cn={class:"induction-value induction-value-change"},vn={key:0},fn={key:1},pn=E(()=>o("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),hn=[pn],Cn={key:1,class:"item"},yn={class:"induction-text"},bn={class:"induction-value"},gn={key:2,class:"item"},$n={class:"induction-text"},An={class:"induction-value"},wn={key:0,class:"icon","aria-hidden":"true"},Sn=E(()=>o("use",{"xlink:href":"#icon-icon-add"},null,-1)),kn=[Sn],Ln={key:0,class:"showMyLiquidity"},In={class:"myLiquidity"},qn={class:"left"},Tn={class:"right"},Nn={class:"liquidityAsset"},On={class:"item"},Bn={class:"left"},_n=["src"],Rn={class:"coin-name"},Mn={class:"right"},Pn={class:"item"},Vn={class:"left"},Yn=["src"],Fn={class:"coin-name"},Xn={class:"right"},jn={class:"induction induction-liquidity"},Dn={class:"item"},Un={class:"induction-text"},Wn={class:"induction-value"};function En(e,s,F,m,I,b){var _,R;const C=Ke,l=Ge,k=Je,w=_e,q=He,B=Qe,x=xe,ee=eo,X=zo;return d(),f("div",Go,[O(C),o("div",Jo,[o("div",Ho,n(e.$t("common.addLiquidity")),1),o("div",Qo,[o("div",{class:"slippage-icon",onClick:s[0]||(s[0]=c=>e.isShowSwapSetting=!0)},[Zo,o("span",null,n(e.slippage)+"%",1)]),(d(),f("svg",{class:"icon information-icon","aria-hidden":"true",onClick:s[1]||(s[1]=c=>e.isShowAddress=!0)},en)),O(l,{loading:e.refresh,"auto-refresh-time":e.autoRefreshTime,countdown:e.countdown,onClickRefresh:e.clickRefresh},null,8,["loading","auto-refresh-time","countdown","onClickRefresh"])])]),o("div",on,[o("div",nn,[o("div",sn,[O(k,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":s[2]||(s[2]=c=>e.fromCoinAmount=c),"input-value":e.fromCoinAmount,"coin-name":e.fromCoin?e.fromCoin.symbol:"","coin-address":e.fromCoin?e.fromCoin.address:"","coin-decimals":e.fromCoin?e.fromCoin.decimals:6,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"","swap-direction":"From",onOnMax:e.maxBtnSelect,onOnInput:s[3]||(s[3]=c=>e.fromCoinAmount=c),onOnFocus:s[4]||(s[4]=()=>{e.fixedFromCoin=!0}),onOnSelect:s[5]||(s[5]=c=>e.openCoinSelect("fromCoin"))},null,8,["modelValue","input-value","coin-name","coin-address","coin-decimals","coin-icon","onOnMax"])]),o("div",tn,[O(k,{modelValue:e.toCoinAmount,"onUpdate:modelValue":s[6]||(s[6]=c=>e.toCoinAmount=c),"input-value":e.toCoinAmount,"coin-name":e.toCoin?e.toCoin.symbol:"","coin-address":e.toCoin?e.toCoin.address:"","coin-decimals":e.toCoin?e.toCoin.decimals:6,"swap-direction":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",onOnMax:e.maxBtnSelect,onOnInput:s[7]||(s[7]=c=>e.toCoinAmount=c),onOnFocus:s[8]||(s[8]=()=>{e.fixedFromCoin=!1}),onOnSelect:s[9]||(s[9]=c=>e.openCoinSelect("toCoin"))},null,8,["modelValue","input-value","coin-name","coin-address","coin-decimals","coin-icon","onOnMax"])]),o("img",{class:qe(e.change?"gang animationex":"gang"),src:Ze,alt:""},null,2),o("div",an,[(d(),f("svg",{class:qe(e.change?"icon animationex":"icon"),"aria-hidden":"true"},un,2))])]),e.BtnText!=="Pool not found"?(d(),f("div",rn,[e.fromCoin&&e.toCoin?(d(),f("div",dn,[o("div",mn,n(e.$t("common.rate")),1),o("div",cn,[e.rateChange?(d(),f("span",fn,"1 "+n(e.toCoin.symbol)+" \u2248 "+n(e.decimalFormat(String(1/Number(e.rate)),e.fromCoin.decimals))+" "+n(e.fromCoin.symbol),1)):(d(),f("span",vn,"1 "+n(e.fromCoin.symbol)+" \u2248 "+n(e.decimalFormat(e.rate,e.toCoin.decimals))+" "+n(e.toCoin.symbol),1)),(d(),f("svg",{class:"icon-change","aria-hidden":"true",onClick:s[10]||(s[10]=c=>e.rateChange=!e.rateChange)},hn))])])):A("",!0),e.fromCoinAmount&&e.toCoinAmount?(d(),f("div",Cn,[o("div",yn,n(e.$t("common.shareOfPool")),1),o("div",bn,n(e.share)+"%",1)])):A("",!0),e.fromCoinAmount&&e.toCoinAmount&&e.lpAmountView?(d(),f("div",gn,[o("div",$n,n(e.$t("common.lPTokensReceived")),1),o("div",An,n(e.lpAmountView),1)])):A("",!0)])):A("",!0)]),O(w,{disabled:e.wallet.connected?e.loading||e.swaping||!e.fromCoin||!e.toCoin||!Number(e.fromCoinAmount)||!Number(e.toCoinAmount)||e.swapBtnText==e.$t("button.poolNotFound")||!e.assets[e.fromCoin.address]||Number(e.fromCoinAmount)>e.prettyAmount(e.assets[e.fromCoin.address].balance,e.fromCoin.decimals)||Number(e.toCoinAmount)>e.prettyAmount(e.assets[e.toCoin.address].balance,e.toCoin.decimals):!1,loading:e.swaping,class:"big-btn",onClick:s[11]||(s[11]=c=>e.wallet.connected?e.isShowAddConfirm=!0:e.wallet.setIsShowWalletModal(!0))},{default:Z(()=>[e.wallet.connected?(d(),f("svg",wn,kn)):A("",!0),o("span",null,n(e.wallet.connected?e.BtnText:e.$t("button.connectWallet")),1)]),_:1},8,["disabled","loading"]),O(q),e.currentLpInfo&&e.currentLpInfo.myLpBalance&&Number(e.currentLpInfo.balance)!==0&&e.wallet.connected&&e.BtnText!==e.$t("button.poolNotFound")?(d(),f("div",Ln,[o("div",In,[o("div",qn,n(e.$t("common.yourLiquidity")),1),o("div",Tn,[o("p",null,n(e.currentLpInfo.myLpBalance)+" LP",1),o("span",null,"\u2248 $"+n(e.addCommom(e.currentLpInfo.myBalanceUSD,2)),1)])]),o("div",Nn,[o("div",On,[o("div",Bn,[o("img",{src:e.fromCoin.logoURI||e.importIcon(`/image/coins/${e.fromCoin.symbol.toLowerCase()}.png`),alt:""},null,8,_n),o("span",null,n(e.fromCoin.symbol),1),o("span",Rn,n((_=e.fromCoin)==null?void 0:_.name),1)]),o("div",Mn,n(e.addCommom(e.currentLpInfo.myCoinXAmount,e.fromCoin.decimals)),1)]),o("div",Pn,[o("div",Vn,[o("img",{src:e.toCoin.logoURI||e.importIcon(`/image/coins/${e.toCoin.symbol.toLowerCase()}.png`),alt:""},null,8,Yn),o("span",null,n(e.toCoin.symbol),1),o("span",Fn,n((R=e.toCoin)==null?void 0:R.name),1)]),o("div",Xn,n(e.addCommom(e.currentLpInfo.myCoinYAmount,e.toCoin.decimals)),1)])]),o("div",jn,[o("div",Dn,[o("div",Un,n(e.$t("common.shareOfPool")),1),o("div",Wn,n(e.currentLpInfo.myshareOfPool)+" %",1)])])])):A("",!0),e.showCoinSelect?(d(),W(B,{key:1,"existing-coins":e.existingCoins,"last-select-coin":e.lastSelectCoin,onOnSelect:e.onCoinSelect,onOnClose:s[12]||(s[12]=c=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","onOnSelect"])):A("",!0),e.isShowAddress?(d(),W(x,{key:2,"from-coins":e.fromCoin,"to-coins":e.toCoin,onOnClose:s[13]||(s[13]=c=>e.isShowAddress=!1)},null,8,["from-coins","to-coins"])):A("",!0),e.isShowSwapSetting?(d(),W(ee,{key:3,onOnClose:s[14]||(s[14]=c=>e.isShowSwapSetting=!1)})):A("",!0),e.isShowAddConfirm?(d(),W(X,{key:4,"current-lp-info":e.currentLpInfo,"is-increase":!!(e.currentLpInfo&&e.currentLpInfo.balance),"fixed-from-coin":e.fixedFromCoin,"from-coin":e.fromCoin,"to-coin":e.toCoin,share:e.share,rate:e.rate,"lp-amount":e.lpAmountView,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"current-recived-lp":e.lpAmountView,onOnClose:s[15]||(s[15]=c=>e.isShowAddConfirm=!1),onToAdd:e.toAdd},null,8,["current-lp-info","is-increase","fixed-from-coin","from-coin","to-coin","share","rate","lp-amount","from-coin-amount","to-coin-amount","current-recived-lp","onToAdd"])):A("",!0)])}const is=Be(Ko,[["render",En],["__scopeId","data-v-1376245e"]]);export{is as default};