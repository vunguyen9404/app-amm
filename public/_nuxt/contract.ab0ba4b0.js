import{a as v,r as l,h as k,l as x,o as d,m,c as M,w as r,q as _,p as A,t as S,B as h,M as u}from"./entry.9486ca83.js";const B=v({setup(){const t=l(!1),e=l("");async function w(){await window.aptos.connect();const a=await window.aptos.account();e.value=a.address;const n=await window.aptos.isConnected();t.value=n,await window.aptos.network()}async function f(){await window.aptos.disconnect(),e.value="",t.value=!1}async function p(){await window.martian.connect();const a=await window.martian.account();e.value=a.address;const n=await window.martian.isConnected();t.value=n}async function i(){await window.martian.disconnect(),e.value="",t.value=!1}async function y(){const n=(await window.martian.connect()).address,o={arguments:[n,717],function:"0x1::coin::transfer",type:"entry_function_payload",type_arguments:["0x1::aptos_coin::AptosCoin"]},c=await window.martian.generateTransaction(n,o);await window.martian.signAndSubmitTransaction(c)}async function b(){const n=(await window.martian.connect()).address,o={type:"entry_function_payload",function:"0x01::coins::register",arguments:[],type_arguments:["0x2dd7a57e5637468c02c72df4af7397897f3bc8066372ecf79c90136fb4d16ab7::message::USDT "]},c=await window.martian.generateTransaction(n,o);await window.martian.signAndSubmitTransaction(c)}async function g(){const n=(await window.martian.connect()).address,o={type:"entry_function_payload",function:"0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::aubrium::faucet",arguments:[],type_arguments:[]},c=await window.martian.generateTransaction(n,o);await window.martian.signAndSubmitTransaction(c)}async function C(){const a={type:"entry_function_payload",function:"0x2dd7a57e5637468c02c72df4af7397897f3bc8066372ecf79c90136fb4d16ab7::message::mint_coin_2",arguments:["0x2dd7a57e5637468c02c72df4af7397897f3bc8066372ecf79c90136fb4d16ab7","0x83f44fc5763d1f5c2c75191642f222c8e1279e80fd24ce97e6bccef1dff93842","1"],type_arguments:["0x1::aptos_coin::TestCoin"]};await window.aptos.signAndSubmitTransaction(a)}const T=async()=>{const n=(await window.martian.connect()).address,o={type:"entry_function_payload",function:"0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::cetus_faucet::faucet",arguments:[],type_arguments:[]},c=await window.martian.generateTransaction(n,o);await window.martian.signAndSubmitTransaction(c)};return k(async()=>{try{const a=await window.martian.account();a&&(e.value=a.address);const n=await window.martian.isConnected();t.value=n}catch{}}),{t:123,isConnected:t,accountAddress:e,toConnect:w,toDisconnect:f,toTest:C,toConnectMartian:p,toDisconnectMartian:i,toTestMartianInstruction:y,toTestMartianRegister:b,toTestMartianFaucet:g,faucetCoin:T}}});const D={class:"contract-container"},$={key:1};function N(s,t,e,w,f,p){const i=h;return d(),m("div",D,[s.isConnected?(d(),m("div",$,[_(i,{onClick:s.toDisconnectMartian},{default:r(()=>[u("disconnect Martian wallet")]),_:1},8,["onClick"]),A("div",null,S(s.accountAddress),1),_(i,{onClick:s.faucetCoin},{default:r(()=>[u("USDT Faucet")]),_:1},8,["onClick"])])):(d(),M(i,{key:0,onClick:s.toConnectMartian},{default:r(()=>[u("connect Martian wallet")]),_:1},8,["onClick"]))])}const F=x(B,[["render",N],["__scopeId","data-v-9b437ac0"]]);export{F as default};
