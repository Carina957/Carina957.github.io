import{f as y,L as W,b as E,j,k as I,e as P,w as N,g as O,h as V,d as $,o as m,c as g,x as A,t as w,A as k,F as M,M as B,a3 as C,D as T,Q as L}from"./chunks/framework.7251957a.js";function D(e){return j()?(I(e),!0):!1}function v(e){return typeof e=="function"?e():E(e)}const x=typeof window<"u"&&typeof document<"u",F=Object.prototype.toString,z=e=>F.call(e)==="[object Object]",G=()=>{};function R(e,t,n={}){const{immediate:o=!0}=n,r=y(!1);let s=null;function u(){s&&(clearTimeout(s),s=null)}function p(){r.value=!1,u()}function a(...d){u(),r.value=!0,s=setTimeout(()=>{r.value=!1,s=null,e(...d)},v(t))}return o&&(r.value=!0,x&&a()),D(p),{isPending:W(r),start:a,stop:p}}function U(e){var t;const n=v(e);return(t=n==null?void 0:n.$el)!=null?t:n}const H=x?window:void 0,J=x?window.navigator:void 0;function Q(...e){let t,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,t=H):[t,n,o,r]=e,!t)return G;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],u=()=>{s.forEach(l=>l()),s.length=0},p=(l,h,f,b)=>(l.addEventListener(h,f,b),()=>l.removeEventListener(h,f,b)),a=N(()=>[U(t),v(r)],([l,h])=>{if(u(),!l)return;const f=z(h)?{...h}:h;s.push(...n.flatMap(b=>o.map(_=>p(l,b,_,f))))},{immediate:!0,flush:"post"}),d=()=>{a(),u()};return D(d),d}function K(){const e=y(!1);return O()&&V(()=>{e.value=!0}),e}function X(e){const t=K();return P(()=>(t.value,!!e()))}function Y(e={}){const{navigator:t=J,read:n=!1,source:o,copiedDuring:r=1500,legacy:s=!1}=e,u=X(()=>t&&"clipboard"in t),p=P(()=>u.value||s),a=y(""),d=y(!1),l=R(()=>d.value=!1,r);function h(){u.value?t.clipboard.readText().then(i=>{a.value=i}):a.value=_()}p.value&&n&&Q(["copy","cut"],h);async function f(i=v(o)){p.value&&i!=null&&(u.value?await t.clipboard.writeText(i):b(i),a.value=i,d.value=!0,l.start())}function b(i){const c=document.createElement("textarea");c.value=i??"",c.style.position="absolute",c.style.opacity="0",document.body.appendChild(c),c.select(),document.execCommand("copy"),c.remove()}function _(){var i,c,S;return(S=(c=(i=document==null?void 0:document.getSelection)==null?void 0:i.call(document))==null?void 0:c.toString())!=null?S:""}return{isSupported:p,text:a,copied:d,copy:f}}const Z={class:"demo"},ee={key:0,style:{fontSize:"20px",fontWeight:"bold",textAlign:"center"}},te={key:1,style:{fontSize:"14px",textAlign:"center"}},ne={key:2,style:{textAlign:"center"}},q=$({__name:"PoemsContainer",props:{title:{default:""},author:{default:""},content:{default:()=>[]}},setup(e){const{title:t,author:n,content:o}=e,r=y(`${t} ${n} ${o.join("")}`),{copy:s}=Y({source:r});return(u,p)=>(m(),g("div",Z,[A("span",{class:"demo-copy",onClick:p[0]||(p[0]=a=>E(s)(r.value))},"copy"),t?(m(),g("p",ee,w(t))):k("",!0),n?(m(),g("p",te,w(n))):k("",!0),o.length?(m(),g("div",ne,[(m(),g(M,null,B(o,a=>A("p",null,w(a),1)),64))])):k("",!0)]))}}),oe=L("",48),ae=JSON.parse('{"title":"Excerpt","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"notes/read/excerpt.md"}'),re={name:"notes/read/excerpt.md"},ie=Object.assign(re,{setup(e){const t=C(["芦叶满汀洲，寒沙带浅流。二十年重过南楼。","柳下系船犹未稳，能几日，又中秋。","黄鹤断矶头，故人曾到否？旧江山浑是新愁。","欲买桂花同载酒，终不似，少年游。"]),n=C(["风乍起，吹皱一池春水。闲引鸳鸯香径里，手挼红杏蕊。","斗鸭阑干独倚，碧玉搔头斜坠。终日望君君不至，举头闻鹊喜。"]);return(o,r)=>(m(),g("div",null,[oe,T(q,{title:"唐多令·芦叶满汀洲",author:"宋·刘过",content:t},null,8,["content"]),T(q,{title:"谒金门·风乍起",author:"五代·冯延巳",content:n},null,8,["content"])]))}});export{ae as __pageData,ie as default};