import{f as y,L as D,b as S,j as q,k as W,e as T,w as I,g as N,h as V,d as M,o as g,c as v,x as A,t as b,A as w,F as B,M as L,a3 as O,D as $,Q as j}from"./chunks/framework.199f640a.js";function C(e){return q()?(W(e),!0):!1}function _(e){return typeof e=="function"?e():S(e)}const x=typeof window<"u",F=()=>{};function z(e,t,n={}){const{immediate:o=!0}=n,s=y(!1);let r=null;function d(){r&&(clearTimeout(r),r=null)}function i(){s.value=!1,d()}function u(...c){d(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,e(...c)},_(t))}return o&&(s.value=!0,x&&u()),C(i),{isPending:D(s),start:u,stop:i}}function G(e){var t;const n=_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const R=x?window:void 0,U=x?window.navigator:void 0;function H(...e){let t,n,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,s]=e,t=R):[t,n,o,s]=e,!t)return F;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],d=()=>{r.forEach(l=>l()),r.length=0},i=(l,f,h,m)=>(l.addEventListener(f,h,m),()=>l.removeEventListener(f,h,m)),u=I(()=>[G(t),_(s)],([l,f])=>{d(),l&&r.push(...n.flatMap(h=>o.map(m=>i(l,h,m,f))))},{immediate:!0,flush:"post"}),c=()=>{u(),d()};return C(c),c}function J(){const e=y(!1);return N()&&V(()=>{e.value=!0}),e}function Q(e){const t=J();return T(()=>(t.value,!!e()))}function K(e={}){const{navigator:t=U,read:n=!1,source:o,copiedDuring:s=1500,legacy:r=!1}=e,d=["copy","cut"],i=Q(()=>t&&"clipboard"in t),u=T(()=>i.value||r),c=y(""),l=y(!1),f=z(()=>l.value=!1,s);function h(){i.value?t.clipboard.readText().then(a=>{c.value=a}):c.value=P()}if(u.value&&n)for(const a of d)H(a,h);async function m(a=_(o)){u.value&&a!=null&&(i.value?await t.clipboard.writeText(a):E(a),c.value=a,l.value=!0,f.start())}function E(a){const p=document.createElement("textarea");p.value=a??"",p.style.position="absolute",p.style.opacity="0",document.body.appendChild(p),p.select(),document.execCommand("copy"),p.remove()}function P(){var a,p,k;return(k=(p=(a=document==null?void 0:document.getSelection)==null?void 0:a.call(document))==null?void 0:p.toString())!=null?k:""}return{isSupported:u,text:c,copied:l,copy:m}}const X={class:"demo"},Y={key:0,style:{fontSize:"20px",fontWeight:"bold",textAlign:"center"}},Z={key:1,style:{fontSize:"14px",textAlign:"center"}},ee={key:2,style:{textAlign:"center"}},te=M({__name:"PoemsContainer",props:{title:{default:""},author:{default:""},content:{default:()=>[]}},setup(e){const{title:t,author:n,content:o}=e,s=y(t+" "+n+" "+o.join("")),{copy:r}=K({source:s});return(d,i)=>(g(),v("div",X,[A("span",{class:"demo-copy",onClick:i[0]||(i[0]=u=>S(r)(s.value))},"copy"),t?(g(),v("p",Y,b(t))):w("",!0),n?(g(),v("p",Z,b(n))):w("",!0),o.length?(g(),v("div",ee,[(g(),v(B,null,L(o,u=>A("p",null,b(u),1)),64))])):w("",!0)]))}}),ne=j('<h1 id="excerpt" tabindex="-1">Excerpt <a class="header-anchor" href="#excerpt" aria-label="Permalink to &quot;Excerpt&quot;">​</a></h1><h2 id="good-sentences-25" tabindex="-1">Good sentences(25) <a class="header-anchor" href="#good-sentences-25" aria-label="Permalink to &quot;Good sentences(25)&quot;">​</a></h2><p>仓央嘉措说：“我以为别人尊重我，是因为我很优秀。慢慢的我明白了，别人尊重我，是因为别人很优秀。”</p><p>“我从未如此深刻的感受到，与灵魂相距甚远，而我的存在却如此真实。” ——加缪</p><p>我们的年轻人，受舆论影响，认为女性是下贱的，妓女，婊子，可以任人玩弄，欺凌，蹂躏，羞辱。这简直是大规模的毁灭。在我们余下的生命中，一天 24 小时，都会驱使我们努力工作，使我们在沉默中灭亡。 所以，为了保护我们的思想不受侵害，能够与侵入我们思想使我们日渐沉默的力量抗衡。我们必须学会阅读，以此来激活自身的想象力，去培养我们自己的意识和信仰。我们需要这些技能，来保卫和维护自己的思想。 ——《超脱》</p><p>Our young men, today, are being told that women are whores, bitches, things to be scrolled, beaten, shit on, ashamed. This is a marking holocaust. 24 hours a day, for the rest of our lives, the power that be are hard at work, dumbing us to death. So, to defend ourselves and fight against the stimulating of these dumbs into our thought processes. We must learn to read, to stimulate our own imaginations, to cultivate our own consciousness, our own belief systems. We all need these skills, to defend, to preserve our minds. —— Detachment</p><p>勇敢的人，先享受世界</p><p>“不论你做什么事情，一定要尽力去做好，在努力做的过程中，你一定会学到一些东西，这样日积月累下来，你的人生就会发生质变。如果你只是简单应付了事，那么你将可能一无所获，反而让你做事的态度也会变得简单应付了事，而且关键还会浪费时间。你怎样对待生活，生活也会怎样对待你。”</p><p>世间万物皆美好，你是往事的遗书,是日落的余情未了,是路人脚下不停生长的风。</p><p>没有回应的山谷，不值得纵身一跃。 没有回应的热情，要懂得适可而止。</p><p>人这一生，恰似钟摆，要么在欲求不满的痛苦中挣扎，要么在欲望满足的无聊中迷失。—— 叔本华</p><p>人生天地间，忽如远行客，能寻慷慨赴死伴侣，生亦何欢，死亦何苦？</p><p>玉可碎，而不可改其白。竹可焚，而不可毁其节。身虽死，名可垂于竹帛也！又何惧哉？</p><p>毒物疯长，蝉死八年别，倒在我大雪封山之前。</p><p>你患得患失，太在意从前，又太担心将来，昨天，是段历史，明天，是个谜团，而今天，是天赐的礼物，像珍惜礼物那样珍惜今天！</p><p>世界上有两个我，一个在文字里，白马春衫慢慢行。一个在生活里，蝇营狗苟兀穷年。</p><p>君子不立于危墙之下</p><p>君子色而不淫，发乎情，止乎礼。</p><p>欲买桂花同载酒，总不似，少年游。便邀东方齐揽月，春不许，再回头。</p><p>定在有隙，中在得横；滞在双重，通在单轻；虚在当守，实在必冲。</p><p>世间万物皆美好，你是往事的遗书，是日落的余情未了，是路人脚下不停生长的风。</p><p>其实每个人有每个人的活法 不要过度去追捧别人 也别去诋毁一个奋斗者 时间总能给我们带来最真实的答案</p><p>During the whole of a dull, dark soundless day. In the autumn of that year. When the clouds hung oppressively low in heaven. I have been passing alone on the horse&#39;s back. Through the Singularly, dreary tract in the country. At at length found myself, as the shades of the evening drew on. Within the view of melancholy House of Usher. I konw not how it was. But with the first glimpse of the building, A sence of insufferable gloom pervaded my spirit, I looked upon some blank scape for domain. Upon the bleak walls, upon the white trunks of decayed trees. With the utter depression souls. There was an iceness. A sinking. A sickening of the heart.</p><blockquote><p>那年的秋天，阴沉而寂寥 沉重的云层低悬于天穹之上 我独自一人策马前行 穿过这片阴沉的，异域般的乡间土地 最终，当夜幕缓缓降临的时候 厄舍府清冷的景色展现在我眼前 我未曾目睹它过往的模样 但仅凭方才的一瞥 某种难以忍受的阴郁便浸透了我的内心 我望着宅邸周围稀疏的景物 围墙荒芜，衰败的树遍体透着白色 我的灵魂失语了 我的心在冷却，下沉 显出疲软的病态</p></blockquote><p>“那年的秋天，阴沉而寂寥，云朵低低压在天际，我独自一人，策马而行，穿过这阴郁的乡土……我未曾目睹它过往的模样……围墙荒芜，衰败的树遍体透着白色，我的灵魂失语了，我的心在冷却、下沉，显出疲软的病态。” ——爱伦·坡 《厄舍府的倒塌》</p><h2 id="poems-4" tabindex="-1">Poems(4) <a class="header-anchor" href="#poems-4" aria-label="Permalink to &quot;Poems(4)&quot;">​</a></h2><p>玉楼冰簟鸳鸯锦，粉融香汗流山枕。帘外辘轳声，敛眉含笑惊。柳阴烟漠漠，低鬓蝉钗落。须作一生拼，尽君今日欢。</p><p>相见休言有泪珠，酒阑重得叙欢娱，凤屏鸳枕宿金铺。兰麝细香闻喘息，绮罗纤缕见肌肤，此时还恨薄情无？</p><p>你曾热爱的那个人，这一生也不会再见面。你等在这文化的废墟上，已没人觉得你狂野。那些让人敬仰的神殿，只在无知的人心中灵验。我住在属于我的猪圈，这一夜无眠。</p>',29),ae=JSON.parse('{"title":"Excerpt","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"notes/read/excerpt.md"}'),oe={name:"notes/read/excerpt.md"},re=Object.assign(oe,{setup(e){const t=O(["芦叶满汀洲，寒沙带浅流。二十年重过南楼。","柳下系船犹未稳，能几日，又中秋。","黄鹤断矶头，故人曾到否？旧江山浑是新愁。","欲买桂花同载酒，终不似，少年游。"]);return(n,o)=>(g(),v("div",null,[ne,$(te,{title:"唐多令·芦叶满汀洲",author:"宋·刘过",content:t},null,8,["content"])]))}});export{ae as __pageData,re as default};