import{_ as p}from"./coin-pair-name.c1be1db6.js";import{_ as u}from"./status-block.c0a4a285.js";import{_ as C}from"./coin-tab.c42d257f.js";import{v as e,M as f,i as _,f as D,g as y,B as k}from"../server.mjs";import{_ as h}from"./_plugin-vue_export-helper.a1a6add7.js";const E=e.defineComponent({components:{Modal:f},props:{isIncrease:{type:Boolean,required:!1}},setup(){const o=e.reactive({fromCoin:{symbol:"CUSDT",name:"CUSDT",token_mint:"Gcu9zjxrjez4xWGj8bi2gTLXYN8hD8Avu2tN8xfnV65Q",swap_token_account:"EPyDSacqb9PH4SoXFov21VPnVSdMBw4N4aQurC89k8ei",decimal:8,show_decimal:4,calculate_decimal:6,tokenAccountAddress:"EFVNcMQwxzwsGq4uhRDPeZHy4LUY1R7EPzGK8dFngZNu",balance:{decimals:8,_decimals:"100000000",wei:"60195129396"}},toCoin:{symbol:"CUSDC",name:"CUSDC",token_mint:"GHStiPQDe4HEQxtDzyFFuNjP6Z6GqYhbPqJ6oiRFmGWT",swap_token_account:"EDSWfuCTcCNXM5WeMZntLkQUjZuXeCp6mEKe5FbEXNX",decimal:8,show_decimal:4,calculate_decimal:6,tokenAccountAddress:"HCcBQYAh6kTw5CL58urZCWdFevsU2SWSxaHYmVf3bo2Q",balance:{decimals:8,_decimals:"100000000",wei:"76482100375"}},fromCoinAmount:"1",toCoinAmount:"5.25132139",currentPrice:.9995373145698367,minPrice:"0.9950127279292509038664997734721554603704755158639167078309052856",maxPrice:"1.0004000600040001",showFromCoinLock:!1,showToCoinLock:!1,currentStatus:"Active",feeTier:"0.01%"}),t=e.ref(!0);function i(s){t.value=s}return{secondConfirmData:o,importIcon:_,fixD:D,decimalFormat:y,direct:t,changeDirect:i}}});const n=o=>(e.pushScopeId("data-v-9ada9351"),o=o(),e.popScopeId(),o),S=n(()=>e.createElementVNode("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),v={class:"add-liquidity-container"},b={class:"top"},g={class:"induction info"},N={class:"item"},B={class:"induction-text"},V={key:0,class:"induction-value"},P={key:1,class:"induction-value"},w={class:"item"},A={class:"induction-text"},F={key:0,class:"induction-value"},T={key:1,class:"induction-value"},q={class:"item"},M=n(()=>e.createElementVNode("span",{class:"induction-text"},"Fee Tier",-1)),I={class:"induction-value"},L={class:"range-box"},Q=n(()=>e.createElementVNode("div",{class:"range-title"},[e.createElementVNode("h3",null,"Selected Range")],-1)),G={class:"current-price"},U={key:0},Y={key:1},$={class:"price-range-block"},j={class:"price-item"},H=n(()=>e.createElementVNode("div",{class:"title"},"Min Price",-1)),W={key:0,class:"price"},X={key:1,class:"price"},Z={key:2,class:"text"},z={key:3,class:"text"},R={class:"price-item"},K=n(()=>e.createElementVNode("div",{class:"title"},"Max Price",-1)),O={key:0,class:"price"},J={key:1,class:"price"},x={key:2,class:"text"},ee={key:3,class:"text"},oe={class:"text-block"},te={class:"note"},ne={class:"note"},ie=n(()=>e.createElementVNode("svg",{class:"icon","aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":"#icon-icon-add"})],-1));function se(o,t,i,s,ae,ce){const c=p,r=u,l=C,d=k,m=e.resolveComponent("Modal");return e.openBlock(),e.createBlock(m,{width:"440px",visible:!0,footer:null,title:"Add Liquidity",class:"add-liquidity-modal",onCancel:t[1]||(t[1]=a=>o.$emit("onClose"))},{closeIcon:e.withCtx(()=>[S]),default:e.withCtx(()=>[e.createElementVNode("div",v,[e.createElementVNode("div",b,[e.createVNode(c,{"from-coin":o.secondConfirmData.fromCoin,"to-coin":o.secondConfirmData.toCoin},null,8,["from-coin","to-coin"]),e.createVNode(r,{"current-status":o.secondConfirmData.currentStatus},null,8,["current-status"])]),e.createElementVNode("div",g,[e.createElementVNode("div",N,[e.createElementVNode("span",B,e.toDisplayString(o.secondConfirmData.fromCoin.symbol),1),o.isIncrease?(e.openBlock(),e.createElementBlock("span",P,e.toDisplayString(o.secondConfirmData.fromCoinAmount||0)+" \u2192 3.1212",1)):(e.openBlock(),e.createElementBlock("span",V,e.toDisplayString(o.secondConfirmData.fromCoinAmount||0),1))]),e.createElementVNode("div",w,[e.createElementVNode("span",A,e.toDisplayString(o.secondConfirmData.toCoin.symbol),1),o.isIncrease?(e.openBlock(),e.createElementBlock("span",T,e.toDisplayString(o.secondConfirmData.toCoinAmount||0)+" \u2192 7.99212",1)):(e.openBlock(),e.createElementBlock("span",F,e.toDisplayString(o.secondConfirmData.toCoinAmount||0),1))]),e.createElementVNode("div",q,[M,e.createElementVNode("span",I,e.toDisplayString(o.secondConfirmData.feeTier),1)])]),e.createElementVNode("div",L,[Q,e.createElementVNode("div",G,[o.direct?(e.openBlock(),e.createElementBlock("div",U," 1 "+e.toDisplayString(o.secondConfirmData.fromCoin.symbol)+" \u2248 "+e.toDisplayString(o.fixD(o.secondConfirmData.currentPrice,o.secondConfirmData.toCoin.decimal))+" "+e.toDisplayString(o.secondConfirmData.toCoin.symbol),1)):(e.openBlock(),e.createElementBlock("div",Y," 1 "+e.toDisplayString(o.secondConfirmData.toCoin.symbol)+" \u2248 "+e.toDisplayString(o.fixD(1/o.secondConfirmData.currentPrice,o.secondConfirmData.toCoin.decimal))+" "+e.toDisplayString(o.secondConfirmData.fromCoin.symbol),1)),e.createVNode(l,{direct:o.direct,"form-coin-symbol":o.secondConfirmData.fromCoin.symbol,"to-coin-symbol":o.secondConfirmData.toCoin.symbol,onChangeDirect:t[0]||(t[0]=a=>o.direct=a)},null,8,["direct","form-coin-symbol","to-coin-symbol"])]),e.createElementVNode("div",$,[e.createElementVNode("div",j,[H,o.direct?(e.openBlock(),e.createElementBlock("p",W,e.toDisplayString(o.decimalFormat(o.secondConfirmData.minPrice,6)),1)):(e.openBlock(),e.createElementBlock("p",X,e.toDisplayString(o.decimalFormat(1/o.secondConfirmData.maxPrice,6)),1)),o.direct?(e.openBlock(),e.createElementBlock("div",z,e.toDisplayString(o.secondConfirmData.toCoin.symbol)+" per "+e.toDisplayString(o.secondConfirmData.fromCoin.symbol),1)):(e.openBlock(),e.createElementBlock("div",Z,e.toDisplayString(o.secondConfirmData.fromCoin.symbol)+" per "+e.toDisplayString(o.secondConfirmData.toCoin.symbol),1))]),e.createElementVNode("div",R,[K,o.direct?(e.openBlock(),e.createElementBlock("p",O,e.toDisplayString(o.secondConfirmData.maxPrice.indexOf("\u221E")>-1?"\u221E":o.decimalFormat(o.secondConfirmData.maxPrice,6)),1)):(e.openBlock(),e.createElementBlock("p",J,e.toDisplayString(o.secondConfirmData.maxPrice.indexOf("\u221E")>-1?"\u221E":o.decimalFormat(1/o.secondConfirmData.minPrice,6)),1)),o.direct?(e.openBlock(),e.createElementBlock("div",ee,e.toDisplayString(o.secondConfirmData.toCoin.symbol)+" per "+e.toDisplayString(o.secondConfirmData.fromCoin.symbol),1)):(e.openBlock(),e.createElementBlock("div",x,e.toDisplayString(o.secondConfirmData.fromCoin.symbol)+" per "+e.toDisplayString(o.secondConfirmData.toCoin.symbol),1))])]),e.createElementVNode("div",oe,[e.createElementVNode("div",te," Your position will be 100% composed of "+e.toDisplayString(o.secondConfirmData.fromCoin.symbol)+" at this price ",1),e.createElementVNode("div",ne," Your position will be 100% composed of "+e.toDisplayString(o.secondConfirmData.toCoin.symbol)+" at this price ",1)])])]),e.createVNode(d,{class:"big-btn liquidity-btn"},{default:e.withCtx(()=>[ie,e.createTextVNode(" "+e.toDisplayString(o.isIncrease?"Add More":"Add Liquidity"),1)]),_:1})]),_:1})}const ue=h(E,[["render",se],["__scopeId","data-v-9ada9351"]]);export{ue as _};