import{_ as S}from"./back.0c96ec39.js";import{_ as f}from"./coin-pair-name.c1be1db6.js";import{_ as h}from"./status-block.c0a4a285.js";import{_ as N}from"./swap-setting.17484c88.js";import{v as e,i as V,I as C,C as w,B as b}from"../server.mjs";/* empty css              */import{_ as y}from"./_plugin-vue_export-helper.a1a6add7.js";import"#internal/nitro";const g=e.defineComponent({setup(){let t=e.ref(!1);const o=e.ref(!1),s=()=>{o.value=!0,setTimeout(()=>{o.value=!1},1e3)},d=[{name:"25%",value:25},{name:"50%",value:50},{name:"75%",value:75},{name:"MAX",value:100}],c=e.reactive({name:"CUSDT-CUSDC",fee:"0.0001",swap_account:"6jZ1KK9LephzTTTL4pRnHwL9qBG8ymHk5Biv7vFdNtrR",token_a:{symbol:"CUSDT",name:"CUSDT",token_mint:"Gcu9zjxrjez4xWGj8bi2gTLXYN8hD8Avu2tN8xfnV65Q",swap_token_account:"EPyDSacqb9PH4SoXFov21VPnVSdMBw4N4aQurC89k8ei",decimal:8,show_decimal:4,calculate_decimal:6},token_b:{symbol:"CUSDC",name:"CUSDC",token_mint:"GHStiPQDe4HEQxtDzyFFuNjP6Z6GqYhbPqJ6oiRFmGWT",swap_token_account:"EDSWfuCTcCNXM5WeMZntLkQUjZuXeCp6mEKe5FbEXNX",decimal:8,show_decimal:4,calculate_decimal:6},price_interval:{lower_price:"0.995",upper_price:"1.0004"},version:2,tokenSwapKey:"6jZ1KK9LephzTTTL4pRnHwL9qBG8ymHk5Biv7vFdNtrR",accountType:0,isInitialized:1,nonce:255,tokenProgramId:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",manager:"AYKFAKqx6ZWWC6Hkr4Csj3AcwLxCyLpq1tRk5TRWwqyz",managerTokenA:"FQEcvmkiiP95pkJ1s17qe6P5nGZtXFph45eeSggmQRni",managerTokenB:"Ch5BksXMFLGQ6CcL2dD8MACy1JsNAr5bQWfqKS5DEFTJ",swapTokenA:"EPyDSacqb9PH4SoXFov21VPnVSdMBw4N4aQurC89k8ei",swapTokenB:"EDSWfuCTcCNXM5WeMZntLkQUjZuXeCp6mEKe5FbEXNX",tokenAMint:"Gcu9zjxrjez4xWGj8bi2gTLXYN8hD8Avu2tN8xfnV65Q",tokenBMint:"GHStiPQDe4HEQxtDzyFFuNjP6Z6GqYhbPqJ6oiRFmGWT",ticksKey:"25SMMLkn91997idMeyHSQCKHLdyAK5xgc2xy9y1ErrRL",positionsKey:"CeLGR1idhpsdym3LFm9oodFa5fkWSmGjJ1CW9SGyfzvD",curveType:0,managerFee:"0.00002",tickSpace:1,currentSqrtPrice:"0.999768630519",currentLiquity:"246658087861075202",feeGrowthGlobal0:"0.0000133953863346",feeGrowthGlobal1:"0.0000126495577595",managerFeeA:"782334664",managerFeeB:"408082167",feeView:.01,currentPriceView:.9995373145698367,currentPriceViewReverse:"1.000462899607067",index:"58",positionId:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",lowerTick:-50,upperTick:4,liquity:"232423209336",feeGrowthInsideALast:"0.0000133914429271",feeGrowthInsideBLast:"0.0000126457075474",tokenAFee:"0",tokenBFee:"0",minPrice:"0.99501272792",maxPrice:"1.00040006000",nftTokenAccount:"7TNUCpcZfFoTNDPynwGHRpjuvZAz9sYAeoxz2JteioxF",nftTokenMint:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",nftTokenId:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",fromCoinAmount:"1.00265752",toCoinAmount:"5.26527690",tokenaFee:"0.0000091653942686965242",tokenbFee:"0.000008948786529063001656",amountUSD:"6.2674",feeUSD:"0.00001810994010336969776027693945159814",currentStatus:"Active",id:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",fromPercent:16,toPercent:84}),r=e.ref(50),a=e.ref(1);return{refresh:o,amountArr:d,sliderVal:r,currentPositionInfo:c,slippage:a,importIcon:V,clickRefresh:s,isShowSwapSetting:t}}});const i=t=>(e.pushScopeId("data-v-b882d79d"),t=t(),e.popScopeId(),t),E={class:"remove-liquidity"},F={class:"remove-liquidity-top"},L=i(()=>e.createElementVNode("div",{class:"remove-title"},"Remove Liquidity",-1)),P={class:"right title-right"},T=i(()=>e.createElementVNode("svg",{class:"icon","aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),D=i(()=>e.createElementVNode("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),B=[D],G={class:"remove-liquidity-center"},q={class:"top"},R={class:"bottom"},A={class:"add-amount"},j={class:"add-amount-header"},X=i(()=>e.createElementVNode("span",null,"Amount",-1)),I={class:"amount-list"},K=["onClick"],M={class:"slider-box"},U=e.createStaticVNode('<div class="induction remove-liquidity-bottom" data-v-b882d79d><div class="item" data-v-b882d79d><div class="induction-text" data-v-b882d79d>Liquidity</div><div class="induction-value" data-v-b882d79d>26.42 USDC \u2192 23.172 USDC</div></div><div class="item" data-v-b882d79d><div class="induction-text" data-v-b882d79d></div><div class="induction-value" data-v-b882d79d>0.02403 USDT \u2192 0.00821 USDT</div></div><div class="item" data-v-b882d79d><div class="induction-text" data-v-b882d79d>Fees Earned</div><div class="induction-value" data-v-b882d79d>26.42 USDC</div></div><div class="item" data-v-b882d79d><div class="induction-text" data-v-b882d79d></div><div class="induction-value" data-v-b882d79d>0.02403 USDT</div></div></div>',1),W=i(()=>e.createElementVNode("svg",{"aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":"#icon-icon-Remove"})],-1)),H=i(()=>e.createElementVNode("span",null,"Remove",-1));function Q(t,o,s,d,c,r){const a=S,l=f,u=h,m=C,v=w,p=b,_=N;return e.openBlock(),e.createElementBlock("div",E,[e.createVNode(a),e.createElementVNode("div",F,[L,e.createElementVNode("div",P,[e.createElementVNode("div",{class:"slippage-icon",onClick:o[0]||(o[0]=n=>t.isShowSwapSetting=!0)},[T,e.createElementVNode("span",null,e.toDisplayString(t.slippage)+"%",1)]),(e.openBlock(),e.createElementBlock("svg",{"aria-hidden":"true",class:e.normalizeClass(t.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[1]||(o[1]=(...n)=>t.clickRefresh&&t.clickRefresh(...n))},B,2))])]),e.createElementVNode("div",G,[e.createElementVNode("div",q,[t.currentPositionInfo?(e.openBlock(),e.createBlock(l,{key:0,"from-coin":t.currentPositionInfo.token_a,"to-coin":t.currentPositionInfo.token_b},null,8,["from-coin","to-coin"])):e.createCommentVNode("",!0),e.createVNode(u,{"current-status":t.currentPositionInfo&&t.currentPositionInfo.currentStatus},null,8,["current-status"])]),e.createElementVNode("div",R,[e.createElementVNode("div",A,[e.createElementVNode("div",j,[X,e.createElementVNode("div",I,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.amountArr,(n,k)=>(e.openBlock(),e.createElementBlock("div",{key:k,class:e.normalizeClass(["amount-item",t.sliderVal==n.value?"amount-item-active":""]),onClick:Z=>t.sliderVal=n.value},e.toDisplayString(n.name),11,K))),128))])]),e.createElementVNode("div",M,[e.createVNode(m,{value:t.sliderVal,"onUpdate:value":o[2]||(o[2]=n=>t.sliderVal=n),suffix:"%"},null,8,["value"]),e.createVNode(v,{value:t.sliderVal,"onUpdate:value":o[3]||(o[3]=n=>t.sliderVal=n)},null,8,["value"])])])])]),U,e.createVNode(p,{class:"remove-btn big-btn"},{default:e.withCtx(()=>[W,H]),_:1}),t.isShowSwapSetting?(e.openBlock(),e.createBlock(_,{key:0,onOnClose:o[4]||(o[4]=n=>t.isShowSwapSetting=!1)})):e.createCommentVNode("",!0)])}const oe=y(g,[["render",Q],["__scopeId","data-v-b882d79d"]]);export{oe as default};