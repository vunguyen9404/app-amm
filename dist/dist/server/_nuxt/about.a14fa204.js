import{_ as r}from"./swap-setting.17484c88.js";import{v as e}from"../server.mjs";import{_ as l}from"./_plugin-vue_export-helper.a1a6add7.js";import"#internal/nitro";function u(){const t=e.ref(null),o=e.ref(0);return{list:t,count:o,getList:()=>{setTimeout(()=>{t.value=[1,2,3],o.value+=1},2e3)}}}const m=e.defineComponent({setup(){const{count:t,list:o}=u(),n=e.reactive({symbol:"CUSDT",name:"CUSDT",token_mint:"Gcu9zjxrjez4xWGj8bi2gTLXYN8hD8Avu2tN8xfnV65Q",swap_token_account:"EPyDSacqb9PH4SoXFov21VPnVSdMBw4N4aQurC89k8ei",decimal:8,show_decimal:4,calculate_decimal:6}),s=e.reactive({symbol:"CUSDC",name:"CUSDC",token_mint:"GHStiPQDe4HEQxtDzyFFuNjP6Z6GqYhbPqJ6oiRFmGWT",swap_token_account:"EDSWfuCTcCNXM5WeMZntLkQUjZuXeCp6mEKe5FbEXNX",decimal:8,show_decimal:4,calculate_decimal:6});e.watchEffect(()=>{console.log("count####",t.value),console.log("list####",o.value)});const i=e.ref(!0),a=e.ref(!0),c=e.ref(!0);return{fromCoin:n,toCoin:s,isShowAddress:i,isShowSwapSetting:a,isShowCoinSelect:c}}});function p(t,o,n,s,i,a){const c=r;return e.openBlock(),e.createElementBlock("div",null,[t.isShowSwapSetting?(e.openBlock(),e.createBlock(c,{key:0,onOnClose:o[0]||(o[0]=_=>t.isShowSwapSetting=!1)})):e.createCommentVNode("",!0)])}const w=l(m,[["render",p]]);export{w as default};