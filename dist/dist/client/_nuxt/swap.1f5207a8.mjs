import{_ as B}from"./refresh-icon.23cc43db.mjs";import{_ as M}from"./assets-card.a7fbee93.mjs";import{_ as R}from"./coin-select.c9bea5d5.mjs";import{_ as V,a as _}from"./img-leverage_2x.14c7f432.mjs";import{_ as D}from"./swap-setting.a98a4d64.mjs";import{l as $,R as P,J as L,o as t,c as d,w as f,p as n,t as e,m as a,q as p,G as m,B as g,y as b,z as w,T as E,s as h,v as u,S as q}from"./entry.feb8c63f.mjs";const r=o=>(b("data-v-f20977a9"),o=o(),w(),o),z=r(()=>n("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),U={class:"swap-confirm-container"},W={class:"card-content"},G={class:"top"},J={class:"coin"},j=["src"],H=m(" \xA0\xA0 "),K=r(()=>n("div",{class:"svg-box"},[n("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-swap2"})])],-1)),Q={class:"coin"},X=["src"],Y=m(" \xA0\xA0 "),Z={class:"bottom"},x={class:"induction"},oo={class:"item"},no=r(()=>n("div",{class:"induction-text"},"Rate",-1)),io={class:"induction-value induction-value-change"},eo={key:0},so={key:1},to=r(()=>n("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),ao=[to],lo={class:"item"},mo=r(()=>n("div",{class:"induction-text"},"Slippage Tolerance",-1)),ro={class:"induction-value"},uo={class:"item"},co={class:"induction-text"},po={class:"induction-value"},Co={class:"item"},fo=r(()=>n("div",{class:"induction-text"},"Price Impact",-1)),vo={class:"induction-value"},ho={class:"item"},$o=r(()=>n("div",{class:"induction-text"},"Fee",-1)),go={class:"induction-value"},bo=m(e("Confirm Swap"));function wo(o,i,S,A,k,y){const v=g,C=L("Modal");return t(),d(C,{width:"440px",visible:!0,footer:null,title:"Swap",class:"swap-confirm-modal",onCancel:i[2]||(i[2]=c=>o.$emit("on-close"))},{closeIcon:f(()=>[z]),default:f(()=>[n("div",U,[n("div",W,[n("div",G,[n("div",J,[n("img",{src:o.fromCoin.icon||o.importIcon(`/image/coins/${o.fromCoin.symbol.toLowerCase()}.png`)},null,8,j),n("p",null,e(o.fromCoinAmount),1),H,n("p",null,e(o.fromCoin.symbol),1)]),K,n("div",Q,[n("img",{src:o.toCoin.icon||o.importIcon(`/image/coins/${o.toCoin.symbol.toLowerCase()}.png`)},null,8,X),n("p",null,e(o.toCoinAmount),1),Y,n("p",null,e(o.toCoin.symbol),1)])]),n("div",Z,[n("div",x,[n("div",oo,[no,n("div",io,[o.rateChange?(t(),a("span",so," 1 "+e(o.toCoin.symbol)+" \u2248 "+e(o.fixD(Number(o.fromCoinAmount)/Number(o.toCoinAmount),o.toCoin.decimals))+" "+e(o.toCoin.symbol),1)):(t(),a("span",eo," 1 "+e(o.fromCoin.symbol)+" \u2248 "+e(o.fixD(Number(o.toCoinAmount)/Number(o.fromCoinAmount),o.toCoin.decimals))+" "+e(o.toCoin.symbol),1)),(t(),a("svg",{class:"icon-change","aria-hidden":"true",onClick:i[0]||(i[0]=c=>o.rateChange=!o.rateChange)},ao))])]),n("div",lo,[mo,n("div",ro,e(o.slippage)+"%",1)]),n("div",uo,[n("div",co,e(o.fixedFromCoin?"Minimum Received":" Maximum Sold"),1),n("div",po,e(o.fixedFromCoin?o.fixD(o.toCoinAmount-Number(o.toCoinAmount)*Number(o.slippage)/100,o.toCoin.decimals):o.fixD(Number(o.fromCoinAmount)*Number(o.slippage)/100+Number(o.fromCoinAmount),o.fromCoin.decimals))+" "+e(o.fixedFromCoin?o.toCoin.symbol:o.fromCoin.symbol),1)]),n("div",Co,[fo,n("div",vo,e(o.impact)+" %",1)]),n("div",ho,[$o,n("div",go,e(o.liquidityProviderFee)+" "+e(o.fromCoin.symbol),1)])])])])]),p(v,{class:"big-btn swap-confirm-btn",onClick:i[1]||(i[1]=c=>o.clickNextBtn())},{default:f(()=>[bo]),_:1})]),_:1})}const So=$(P,[["render",wo],["__scopeId","data-v-f20977a9"]]),l=o=>(b("data-v-04bce4e1"),o=o(),w(),o),Ao={class:"swap-container"},ko={class:"title"},yo=l(()=>n("div",{class:"left"},"Swap",-1)),No={class:"right title-right"},Fo=l(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Io=l(()=>n("use",{"xlink:href":"#icon-icon-information"},null,-1)),Oo=[Io],To={class:"swap-card"},Bo={class:"card-container"},Mo={class:"card-item"},Ro={class:"card-item"},Vo=l(()=>n("use",{"xlink:href":"#icon-icon-swap1"},null,-1)),_o=[Vo],Do={key:0,class:"induction"},Po={class:"item"},Lo=l(()=>n("div",{class:"induction-text"},"Exchange Rate",-1)),Eo={key:0},qo={key:0},zo={key:1},Uo={key:0},Wo=l(()=>n("svg",{class:"icon-change","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-change2"})],-1)),Go={class:"item"},Jo=l(()=>n("div",{class:"induction-text"},"Price Impact",-1)),jo={class:"induction-value"},Ho={class:"item"},Ko={class:"induction-text"},Qo={class:"induction-value"},Xo={class:"item"},Yo=l(()=>n("div",{class:"induction-text"},"Fee",-1)),Zo={class:"induction-value"},xo={key:0,class:"icon","aria-hidden":"true"},on=l(()=>n("use",{"xlink:href":"#icon-icon-swap"},null,-1)),nn=[on];function en(o,i,S,A,k,y){const v=B,C=M,c=q,N=g,F=R,I=_,O=D,T=So;return t(),a("div",Ao,[n("div",ko,[yo,n("div",No,[n("div",{class:"slippage-icon",onClick:i[0]||(i[0]=s=>o.isShowSwapSetting=!0)},[Fo,n("span",null,e(o.slippage)+"%",1)]),(t(),a("svg",{class:"icon information-icon","aria-hidden":"true",onClick:i[1]||(i[1]=s=>o.isShowAddress=!0)},Oo)),p(v,{loading:o.refresh,"auto-refresh-time":o.autoRefreshTime,countdown:o.countdown,onClickRefresh:o.clickRefresh},null,8,["loading","auto-refresh-time","countdown","onClickRefresh"])])]),n("div",To,[n("div",Bo,[n("div",Mo,[p(C,{modelValue:o.fromCoinAmount,"onUpdate:modelValue":i[2]||(i[2]=s=>o.fromCoinAmount=s),"input-value":o.fromCoinAmount,"coin-name":o.fromCoin?o.fromCoin.symbol:null,balance:o.fromCoin?o.fromCoin.balance:null,"coin-icon":o.fromCoin?o.fromCoin.icon:"","swap-direction":"From",onOnMax:i[3]||(i[3]=s=>o.maxBtnSelect("fromCoin")),onOnInput:i[4]||(i[4]=s=>o.fromCoinAmount=s),onOnFocus:i[5]||(i[5]=()=>{o.fixedFromCoin=!0}),onOnSelect:i[6]||(i[6]=s=>o.openCoinSelect("fromCoin"))},null,8,["modelValue","input-value","coin-name","balance","coin-icon"])]),n("div",Ro,[p(C,{modelValue:o.toCoinAmount,"onUpdate:modelValue":i[7]||(i[7]=s=>o.toCoinAmount=s),"input-value":o.toCoinAmount,havemax:!1,"coin-name":o.toCoin?o.toCoin.symbol:"",balance:o.toCoin?o.toCoin.balance:null,"swap-direction":"To","coin-icon":o.toCoin?o.toCoin.icon:"",onOnInput:i[8]||(i[8]=s=>o.toCoinAmount=s),onOnFocus:i[9]||(i[9]=()=>{o.fixedFromCoin=!1}),onOnSelect:i[10]||(i[10]=s=>o.openCoinSelect("toCoin"))},null,8,["modelValue","input-value","coin-name","balance","coin-icon"])]),n("img",{class:h(o.change?"gang animationex":"gang"),src:V,alt:""},null,2),n("div",{class:"exchange",onClick:i[11]||(i[11]=s=>o.clickExchange())},[(t(),a("svg",{class:h(o.change?"icon animationex":"icon"),"aria-hidden":"true"},_o,2))])]),o.currentLP&&o.fromCoinAmount&&o.toCoinAmount&&o.fromCoinAmount!=="0"&&o.toCoinAmount!=="0"&&o.impact!==""&&o.swapBtnText!=="Pool not found"?(t(),a("div",Do,[n("div",Po,[Lo,n("div",{class:"induction-value induction-value-change",onClick:i[12]||(i[12]=s=>o.rateChange=!o.rateChange)},[o.rateChange?(t(),a("span",zo,[m(" 1 "+e(o.toCoin.symbol)+" \u2248 ",1),o.oneFromAmount?(t(),a("span",Uo,e(o.decimalFormat(o.oneFromAmount,o.fromCoin.decimals))+"\xA0",1)):(t(),d(c,{key:1,indicator:o.indicator},null,8,["indicator"])),m(e(o.fromCoin.symbol),1)])):(t(),a("span",Eo,[m(" 1 "+e(o.fromCoin.symbol)+" \u2248 ",1),o.oneToAmount?(t(),a("span",qo,e(o.decimalFormat(o.oneToAmount,o.toCoin.decimals))+"\xA0",1)):(t(),d(c,{key:1,indicator:o.indicator},null,8,["indicator"])),m(e(o.toCoin.symbol),1)])),Wo])]),n("div",Go,[Jo,n("div",jo,e(o.impact)+"%",1)]),n("div",Ho,[n("div",Ko,e(o.fixedFromCoin?"Minimum Received":" Maximum Sold"),1),n("div",Qo,e(o.fixedFromCoin?o.fixD(o.toCoinAmount-Number(o.toCoinAmount)*Number(o.slippage)/100,o.toCoin.decimals):o.fixD(Number(o.fromCoinAmount)*Number(o.slippage)/100+Number(o.fromCoinAmount),o.fromCoin.decimals))+" "+e(o.fixedFromCoin?o.toCoin.symbol:o.fromCoin.symbol),1)]),n("div",Xo,[Yo,n("div",Zo,e(o.currentLP.fee)+"%",1)])])):u("",!0)]),p(N,{disabled:o.wallet.connected?o.swaping||!o.fromCoin||!o.toCoin||!Number(o.fromCoinAmount)||!Number(o.toCoinAmount)||Number(o.fromCoinAmount)>o.fromCoin.balance||o.swapBtnText=="Pool not found":!1,class:"big-btn",onClick:i[13]||(i[13]=s=>o.wallet.connected?o.isSwapConfirmMpdal=!0:o.wallet.setIsShowWalletModal(!0))},{default:f(()=>[o.wallet.connected?(t(),a("svg",xo,nn)):u("",!0),n("span",null,e(o.wallet.connected?o.swapBtnText:"Connect Wallet"),1)]),_:1},8,["disabled"]),o.showCoinSelect?(t(),d(F,{key:0,"existing-coins":o.existingCoins,"last-select-coin":o.lastSelectCoin,onOnSelect:o.onCoinSelect,onOnClose:i[14]||(i[14]=s=>o.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","onOnSelect"])):u("",!0),o.isShowAddress?(t(),d(I,{key:1,"from-coins":o.fromCoin,"to-coins":o.toCoin,onOnClose:i[15]||(i[15]=s=>o.isShowAddress=!1)},null,8,["from-coins","to-coins"])):u("",!0),o.isShowSwapSetting?(t(),d(O,{key:2,onOnClose:i[16]||(i[16]=s=>o.isShowSwapSetting=!1)})):u("",!0),o.isSwapConfirmMpdal?(t(),d(T,{key:3,"fixed-from-coin":o.fixedFromCoin,"from-coin":o.fromCoin,"to-coin":o.toCoin,"from-coin-amount":o.fromCoinAmount,"to-coin-amount":o.toCoinAmount,impact:o.impact,fee:.4,onImpact:i[17]||(i[17]=s=>o.onImpact()),onOnClose:i[18]||(i[18]=s=>o.isSwapConfirmMpdal=!1),onToSwap:o.toSwap},null,8,["fixed-from-coin","from-coin","to-coin","from-coin-amount","to-coin-amount","impact","fee","onToSwap"])):u("",!0)])}const rn=$(E,[["render",en],["__scopeId","data-v-04bce4e1"]]);export{rn as default};