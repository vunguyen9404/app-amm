import{a as h,r as _,h as M,l as v,o as r,m,c as k,w as u,q as g,p as A,t as H,B as S,G as l}from"./entry.feb8c63f.mjs";const D=h({setup(){const e=_(!1),s=_("");async function w(){const t=await window.aptos.connect();console.log("toConnect###result###",t);const n=await window.aptos.account();s.value=n.address,console.log("toConnect###address####",n);const a=await window.aptos.isConnected();console.log("toConnect###status###",a),e.value=a;const o=await window.aptos.network();console.log("toConnect###network###",o)}async function f(){const t=await window.aptos.disconnect();console.log("disconnect###reuslt###",t),s.value="",e.value=!1}async function p(){const t=await window.martian.connect();console.log("toConnectMartian###result###",t);const n=await window.martian.account();s.value=n.address,console.log("toConnectMartian###address####",n);const a=await window.martian.isConnected();console.log("toConnectMartian###status###",a),e.value=a}async function d(){const t=await window.martian.disconnect();console.log("toDisconnectMartian###reuslt###",t),s.value="",e.value=!1}async function y(){const n=(await window.martian.connect()).address;console.log("toTestMartianInstruction####sender####",n);const a={arguments:[n,717],function:"0x1::coin::transfer",type:"entry_function_payload",type_arguments:["0x1::aptos_coin::AptosCoin"]},o=await window.martian.generateTransaction(n,a),c=await window.martian.signAndSubmitTransaction(o);console.log("txnHash###",c)}async function b(){const n=(await window.martian.connect()).address,a={type:"entry_function_payload",function:"0x01::coins::register",arguments:[],type_arguments:["0x1ce98d89494e9d3d7935bc3bd5fc714fc2abb99db3f024162552c4ba172f4d28::message::USDT "]},o=await window.martian.generateTransaction(n,a),c=await window.martian.signAndSubmitTransaction(o);console.log("toTestMartianRegister##txnHash###",c)}async function C(){const n=(await window.martian.connect()).address,a={type:"entry_function_payload",function:"0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::aubrium::faucet",arguments:[],type_arguments:[]},o=await window.martian.generateTransaction(n,a),c=await window.martian.signAndSubmitTransaction(o);console.log("toTestMartianFaucet####txnHash####",c)}async function T(){const t={type:"entry_function_payload",function:"0x1ce98d89494e9d3d7935bc3bd5fc714fc2abb99db3f024162552c4ba172f4d28::message::mint_coin_2",arguments:["0x1ce98d89494e9d3d7935bc3bd5fc714fc2abb99db3f024162552c4ba172f4d28","0x83f44fc5763d1f5c2c75191642f222c8e1279e80fd24ce97e6bccef1dff93842","1"],type_arguments:["0x1::aptos_coin::TestCoin"]},n=await window.aptos.signAndSubmitTransaction(t);console.log("response####",n)}const x=async()=>{const n=(await window.martian.connect()).address,a={type:"entry_function_payload",function:"0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::cetus_faucet::faucet",arguments:[],type_arguments:[]},o=await window.martian.generateTransaction(n,a),c=await window.martian.signAndSubmitTransaction(o);console.log("faucetCoin####txnHash####",c)};return M(async()=>{try{const t=await window.martian.account();t&&(s.value=t.address);const n=await window.martian.isConnected();e.value=n}catch(t){console.log("err###",t)}}),{t:123,isConnected:e,accountAddress:s,toConnect:w,toDisconnect:f,toTest:T,toConnectMartian:p,toDisconnectMartian:d,toTestMartianInstruction:y,toTestMartianRegister:b,toTestMartianFaucet:C,faucetCoin:x}}});const B={class:"contract-container"},$=l("connect Martian wallet"),F={key:1},I=l("disconnect Martian wallet"),N=l("USDT Faucet");function V(i,e,s,w,f,p){const d=S;return r(),m("div",B,[i.isConnected?(r(),m("div",F,[g(d,{onClick:i.toDisconnectMartian},{default:u(()=>[I]),_:1},8,["onClick"]),A("div",null,H(i.accountAddress),1),g(d,{onClick:i.faucetCoin},{default:u(()=>[N]),_:1},8,["onClick"])])):(r(),k(d,{key:0,onClick:i.toConnectMartian},{default:u(()=>[$]),_:1},8,["onClick"]))])}const U=v(D,[["render",V],["__scopeId","data-v-c73607f9"]]);export{U as default};