import{d as i,k as _}from"./theme.acef5bbd.js";import{d as l,b as p,w as c,k as u,o as f,c as b,_ as m}from"./framework.a1449d1e.js";const v=l({__name:"VPCarbonAds",props:{carbonAds:{}},setup(r){const{page:d}=i(),s=r.carbonAds,{isAsideEnabled:a}=_(),o=p();let n=!1;function t(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${s.code}&placement=${s.placement}`,e.async=!0,o.value.appendChild(e)}}return c(()=>d.value.relativePath,()=>{var e;n&&a.value&&((e=window._carbonads)==null||e.refresh())}),s&&u(()=>{a.value?t():c(a,e=>e&&t())}),(e,C)=>(f(),b("div",{class:"VPCarbonAds",ref_key:"container",ref:o},null,512))}});const P=m(v,[["__scopeId","data-v-07e9e14e"]]);export{P as default};