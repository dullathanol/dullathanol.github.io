import{_ as w,r as o,o as r,d as u,e,v as p,g as m,x as q,y as L,F as g,n as f,z as P,q as x,C as D,s as $,S as I,t as h,D as S}from"./index-678c6325.js";import{P as B}from"./PlayListCover-8064eeba.js";import"./Cover-bc69e3da.js";/* empty css                                                              */const N={class:"expolore-playlist"},U={class:"buttons"},F={class:"panel"},H={class:"name"},T={class:"cats"},V=["onClick"],E={class:"playlists"},O={__name:"playlist",setup(j){const i=o(!1),l=o("personalized"),c=o("personalized"),v=o([{}]),d=o([{}]),y=o([{}]);(async()=>{const s=await P();d.value=s;for(const a in d.value.categories){const t={name:d.value.categories[a]};t.sub=d.value.sub.filter(n=>n.category===Number(a)),y.value.push(t)}_("personalized")})();const k=async(s,a)=>{const t=await S(s,a);v.value=t.playlists},_=async s=>{i.value=!1,l.value=s,c.value="picUrl";const a=await x(48);v.value=a.result},C=async s=>{i.value=!1,l.value=s,c.value="coverImgUrl";const a=await D(48);v.value=a.playlists},z=async s=>{i.value=!1,l.value=s,c.value="coverImgUrl";const a=await $();v.value=a.list},b=async s=>{l.value=s.name,c.value="highquality",k(48,s.name)};return(s,a)=>(r(),u("div",N,[e("div",U,[e("div",{class:p(["button",{active:l.value==="personalized"}]),onClick:a[0]||(a[0]=t=>_("personalized"))},"推荐歌单 ",2),e("div",{class:p(["button",{active:l.value==="highquality"}]),onClick:a[1]||(a[1]=t=>C("highquality"))},"精品歌单",2),e("div",{class:p(["button",{active:l.value==="rank"}]),onClick:a[2]||(a[2]=t=>z("rank"))},"排行榜",2),e("div",{class:p(["button",{active:i.value}]),onClick:a[3]||(a[3]=t=>i.value=!i.value)},[m(I,{"icon-class":"more"})],2)]),q(e("div",F,[(r(!0),u(g,null,f(y.value,t=>(r(),u("div",{class:"big-cat",key:t.name},[e("div",H,h(t.name),1),e("div",T,[(r(!0),u(g,null,f(t.sub,n=>(r(),u("div",{class:"cat",key:n.name,onClick:G=>b(n)},[e("span",{class:p({active:l.value===n.name})},h(n.name),3)],8,V))),128))])]))),128))],512),[[L,i.value]]),e("div",E,[m(B,{playlist:v.value,type:c.value},null,8,["playlist","type"])])]))}},R=w(O,[["__scopeId","data-v-4f97cb86"]]);export{R as default};
