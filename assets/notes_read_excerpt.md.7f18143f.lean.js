import{f as y,L as W,b as E,j,k as I,e as P,w as N,g as O,h as V,d as $,o as m,c as g,x,t as k,A as w,F as M,M as B,a3 as S,D as C,Q as F}from"./chunks/framework.7251957a.js";function D(e){return j()?(I(e),!0):!1}function v(e){return typeof e=="function"?e():E(e)}const q=typeof window<"u"&&typeof document<"u",L=Object.prototype.toString,z=e=>L.call(e)==="[object Object]",G=()=>{};function R(e,t,i={}){const{immediate:l=!0}=i,o=y(!1);let n=null;function p(){n&&(clearTimeout(n),n=null)}function s(){o.value=!1,p()}function r(...d){p(),o.value=!0,n=setTimeout(()=>{o.value=!1,n=null,e(...d)},v(t))}return l&&(o.value=!0,q&&r()),D(s),{isPending:W(o),start:r,stop:s}}function U(e){var t;const i=v(e);return(t=i==null?void 0:i.$el)!=null?t:i}const H=q?window:void 0,J=q?window.navigator:void 0;function Q(...e){let t,i,l,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([i,l,o]=e,t=H):[t,i,l,o]=e,!t)return G;Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]);const n=[],p=()=>{n.forEach(u=>u()),n.length=0},s=(u,h,b,f)=>(u.addEventListener(h,b,f),()=>u.removeEventListener(h,b,f)),r=N(()=>[U(t),v(o)],([u,h])=>{if(p(),!u)return;const b=z(h)?{...h}:h;n.push(...i.flatMap(f=>l.map(_=>s(u,f,_,b))))},{immediate:!0,flush:"post"}),d=()=>{r(),p()};return D(d),d}function K(){const e=y(!1);return O()&&V(()=>{e.value=!0}),e}function X(e){const t=K();return P(()=>(t.value,!!e()))}function Y(e={}){const{navigator:t=J,read:i=!1,source:l,copiedDuring:o=1500,legacy:n=!1}=e,p=X(()=>t&&"clipboard"in t),s=P(()=>p.value||n),r=y(""),d=y(!1),u=R(()=>d.value=!1,o);function h(){p.value?t.clipboard.readText().then(a=>{r.value=a}):r.value=_()}s.value&&i&&Q(["copy","cut"],h);async function b(a=v(l)){s.value&&a!=null&&(p.value?await t.clipboard.writeText(a):f(a),r.value=a,d.value=!0,u.start())}function f(a){const c=document.createElement("textarea");c.value=a??"",c.style.position="absolute",c.style.opacity="0",document.body.appendChild(c),c.select(),document.execCommand("copy"),c.remove()}function _(){var a,c,A;return(A=(c=(a=document==null?void 0:document.getSelection)==null?void 0:a.call(document))==null?void 0:c.toString())!=null?A:""}return{isSupported:s,text:r,copied:d,copy:b}}const Z={class:"demo"},ee={key:0,style:{fontSize:"20px",fontWeight:"bold",textAlign:"center"}},te={key:1,style:{fontSize:"14px",textAlign:"center"}},ie={key:2,style:{textAlign:"center"}},T=$({__name:"PoemsContainer",props:{title:{default:""},author:{default:""},content:{default:()=>[]}},setup(e){const{title:t,author:i,content:l}=e,o=y(`${t} ${i} ${l.join("")}`),{copy:n}=Y({source:o});return(p,s)=>(m(),g("div",Z,[x("span",{class:"demo-copy",onClick:s[0]||(s[0]=r=>E(n)(o.value))},"copy"),t?(m(),g("p",ee,k(t))):w("",!0),i?(m(),g("p",te,k(i))):w("",!0),l.length?(m(),g("div",ie,[(m(),g(M,null,B(l,r=>x("p",null,k(r),1)),64))])):w("",!0)]))}}),le=F("",8),oe=x("p",{align:"center"},"2.",-1),ae=JSON.parse('{"title":"Excerpt","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"notes/read/excerpt.md"}'),ne={name:"notes/read/excerpt.md"},se=Object.assign(ne,{setup(e){const t=S(["芦叶满汀洲，寒沙带浅流。二十年重过南楼。","柳下系船犹未稳，能几日，又中秋。","黄鹤断矶头，故人曾到否？旧江山浑是新愁。","欲买桂花同载酒，终不似，少年游。"]),i=S(["风乍起，吹皱一池春水。闲引鸳鸯香径里，手挼红杏蕊。","斗鸭阑干独倚，碧玉搔头斜坠。终日望君君不至，举头闻鹊喜。"]);return(l,o)=>(m(),g("div",null,[le,C(T,{title:"唐多令·芦叶满汀洲",author:"宋·刘过",content:t},null,8,["content"]),oe,C(T,{title:"谒金门·风乍起",author:"五代·冯延巳",content:i},null,8,["content"])]))}});export{ae as __pageData,se as default};