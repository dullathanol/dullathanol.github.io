import{_ as S,u as D,a as I,b as R,r as g,g as T,c as f,o as p,d as m,e as s,f as x,h as t,S as y,w as P,i as k,p as F,j as b,k as M,t as C,A as U,l as r,B as $,m as _,n as A,q as L,F as B,s as N,v as V,x as q}from"./index-7b2ff614.js";import{P as z}from"./PlayListCover-68086b2b.js";import{M as j,g as E}from"./mvlist-79f8e2dc.js";import{C as Y}from"./Cover-d88aceba.js";const G=l=>(F("data-v-78cec144"),l=l(),b(),l),H=["src"],J=G(()=>s("div",{class:"container"},[s("div",{class:"title-box"},[s("div",{class:"title"},[s("span",null,"每"),s("span",null,"日"),s("span",null,"推"),s("span",null,"荐")])])],-1)),K=["onClick"],O={__name:"RecommendedDaily",setup(l){const i=D(),o=I(),n=R(),a=g(null);T();const d=()=>{i.push({name:"dailySongs"})},u=f(()=>{var h,e,v,w;if(a.value=Math.floor(Math.random()*n.recommendSong.length),(h=n.recommendSong[a.value])!=null&&h.picUrl)return(e=n.recommendSong[a.value])==null?void 0:e.picUrl;if((v=n.recommendSong[a.value])!=null&&v.al)return(w=n.recommendSong[a.value])==null?void 0:w.al.picUrl}),c=()=>{o.songList=n.recommendSong,k(n.recommendSong[a.value].id,a.value,!0)};return(h,e)=>(p(),m("div",{class:"recommended-daily",onClick:d},[s("img",{src:x(u)},null,8,H),J,s("button",{class:"play-button",onClick:P(c,["stop"])},[t(y,{"icon-class":"play"})],8,K)]))}},Q=S(O,[["__scopeId","data-v-78cec144"]]);const W={class:"fm"},X=["src"],Z={class:"right-part"},ss={class:"info"},ts={class:"title"},es={class:"artist"},os={class:"controls"},as={class:"buttons"},ns={class:"card-name"},ls={__name:"FMCard",setup(l){const i=I(),o=g([{}]);M().then(e=>{o.value=e.data});const n=f(()=>{var e,v;return(v=(e=o.value[0])==null?void 0:e.album)==null?void 0:v.picUrl}),a=f(()=>{var e;return(e=o.value[0])==null?void 0:e.name}),d=f(()=>{var e;return(e=o.value[0])==null?void 0:e.artists}),u=async()=>{A(o.value[0].id)},c=()=>{i.songList=o.value,k(o.value[0].id,0,!0)},h=()=>{M().then(e=>{o.value=e.data,i.songList=o.value,k(o.value[0].id,0,!0)})};return(e,v)=>(p(),m("div",W,[s("img",{class:"cover",src:x(n)},null,8,X),s("div",Z,[s("div",ss,[s("div",ts,C(x(a)),1),s("div",es,[t(U,{artists:x(d)},null,8,["artists"])])]),s("div",os,[s("div",as,[t($,{title:"不喜欢",onClick:u},{default:r(()=>[t(y,{"icon-class":"thumbs-down"})]),_:1}),t($,{title:"播放",onClick:c},{default:r(()=>[t(y,{"icon-class":"play"})]),_:1}),t($,{title:"下一页",onClick:h},{default:r(()=>[t(y,{"icon-class":"next"})]),_:1})]),s("div",ns,[t(y,{"icon-class":"fm"}),_(" 私人FM ")])])])]))}},cs=S(ls,[["__scopeId","data-v-a973e0be"]]);const is={class:"cover-row"},_s={class:"info"},rs={class:"cover-play"},ds={class:"play-count"},us={class:"cover-title"},vs={__name:"RankListCover",props:["toplist"],setup(l){return(i,o)=>{const n=L("router-link");return p(),m("div",is,[(p(!0),m(B,null,N(l.toplist,a=>(p(),m("div",{class:"item",key:a.id},[t(Y,{item:a,type:"coverImgUrl"},null,8,["item"]),s("div",_s,[s("div",rs,[s("span",ds,C(a.updateFrequency),1)]),s("div",us,[s("span",null,[t(n,{to:{name:"playlist",query:{id:a.id}}},{default:r(()=>[_(C(a.name),1)]),_:2},1032,["to"])])])])]))),128))])}}},ps=S(vs,[["__scopeId","data-v-386e3ed8"]]);const ms=l=>(F("data-v-860500ae"),l=l(),b(),l),hs={class:"home"},ys={class:"index-row"},gs=ms(()=>s("div",{class:"title"},"For You",-1)),fs={class:"for-you-row"},xs={class:"index-row"},Ss={class:"title"},$s={class:"index-row"},ks={class:"title"},Cs={class:"index-row"},ws={class:"title"},Ms={__name:"home",setup(l){const i=g([{}]),o=g([{}]),n=g([{}]);return(async()=>{const d=await V(6);i.value=d.result;const u=await E(10);o.value=u.data;const c=await q();n.value=c.list.slice(0,5)})(),(d,u)=>{const c=L("router-link");return p(),m("div",hs,[s("div",ys,[gs,s("div",fs,[t(Q),t(cs)])]),s("div",xs,[s("div",Ss,[_(" 推荐歌单 "),t(c,{to:"/expolore"},{default:r(()=>[_("查看更多")]),_:1})]),t(z,{playlist:i.value},null,8,["playlist"])]),s("div",$s,[s("div",ks,[_(" 推荐MV "),t(c,{to:"/expolore"},{default:r(()=>[_("查看更多")]),_:1})]),t(j,{class:"mv-row",mvlist:o.value},null,8,["mvlist"])]),s("div",Cs,[s("div",ws,[_(" 排行榜 "),t(c,{to:"/expolore"},{default:r(()=>[_("查看更多")]),_:1})]),t(ps,{toplist:n.value},null,8,["toplist"])])])}}},Ds=S(Ms,[["__scopeId","data-v-860500ae"]]);export{Ds as default};
