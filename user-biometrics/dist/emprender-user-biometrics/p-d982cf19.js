let e,t,n=null,l=!1;const s="undefined"!=typeof window?window:{},o=s.document||{head:{}},r={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),u=new WeakMap,a=e=>"sc-"+e.o,f={},$=e=>"object"==(e=typeof e)||"function"===e,d=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!$(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?m(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=m(e,null);return i.u=t,r.length>0&&(i.$=r),i},m=(e,t)=>({t:0,m:e,i:t,p:null,$:null,u:null}),p={},y=(e,t,n,l,o,c)=>{if(n!==l){let i=G(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,s=b(n),o=b(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if(i||"o"!==t[0]||"n"!==t[1]){const s=$(l);if((i||s&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&c||o)&&!s&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):G(s,u)?u.slice(2):u[2]+t.slice(3),n&&r.rel(e,t,n,!1),l&&r.ael(e,t,l,!1)}},h=/\s/,b=e=>e?e.split(h):[],w=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||f,r=t.u||f;for(l in o)l in r||y(s,l,o[l],void 0,n,t.t);for(l in r)y(s,l,o[l],r[l],n,t.t)},S=(t,n,l)=>{let s,r,c=n.$[l],i=0;if(null!==c.i)s=c.p=o.createTextNode(c.i);else if(s=c.p=o.createElement(c.m),w(null,c,!1),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=S(t,c,i),r&&s.appendChild(r);return s},g=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=S(null,l,o),c&&(s[o].p=c,i.insertBefore(c,n)))},j=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},M=(e,t)=>e.m===t.m,v=(e,t)=>{const n=t.p=e.p,l=e.$,s=t.$,o=t.i;null===o?(w(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],u=t[c],a=l.length-1,f=l[0],$=l[a];for(;o<=c&&r<=a;)null==i?i=t[++o]:null==u?u=t[--c]:null==f?f=l[++r]:null==$?$=l[--a]:M(i,f)?(v(i,f),i=t[++o],f=l[++r]):M(u,$)?(v(u,$),u=t[--c],$=l[--a]):M(i,$)?(v(i,$),e.insertBefore(i.p,u.p.nextSibling),i=t[++o],$=l[--a]):M(u,f)?(v(u,f),e.insertBefore(u.p,i.p),u=t[--c],f=l[++r]):(s=S(t&&t[r],n,r),f=l[++r],s&&i.p.parentNode.insertBefore(s,i.p));o>c?g(e,null==l[a+1]?null:l[a+1].p,n,l,r,a):r>a&&j(t,o,c)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),g(n,null,t,s,0,s.length-1)):null!==l&&j(l,0,l.length-1)):e.i!==o&&(n.data=o)},k=(e,t,n)=>{const l=(e=>z(e).h)(e);return{emit:e=>C(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},C=(e,t,n)=>{const l=r.ce(t,n);return e.dispatchEvent(l),l},O=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},L=(e,t)=>{if(e.t|=16,!(4&e.t))return O(e,e.g),le((()=>P(e,t)));e.t|=512},P=(e,t)=>{const n=e.j;let l;return t&&(l=A(n,"componentWillLoad")),H(l,(()=>x(e,n,t)))},x=async(e,t,n)=>{const l=e.h,s=l["s-rc"];n&&(e=>{const t=e.M,n=e.h,l=t.t,s=((e,t)=>{let n=a(t),l=Q.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=u.get(e=e.head||e);s||u.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);E(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>T(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},E=(l,s)=>{try{n=s,s=s.render(),l.t&=-17,l.t|=2,((n,l)=>{const s=n.h,o=n.v||m(null,null),r=(e=>e&&e.m===p)(l)?l:d(null,null,l);t=s.tagName,r.m=null,r.t|=4,n.v=r,r.p=o.p=s.shadowRoot||s,e=s["s-sc"],v(o,r)})(l,s)}catch(e){I(e,l.h)}return n=null,null},R=()=>n,T=e=>{const t=e.h,n=e.g;64&e.t||(e.t|=64,q(t),e.k(t),n||W()),e.S&&(e.S(),e.S=void 0),512&e.t&&ne((()=>L(e,!1))),e.t&=-517},U=e=>{{const t=z(e),n=t.h.isConnected;return n&&2==(18&t.t)&&L(t,!1),n}},W=()=>{q(o.documentElement),ne((()=>C(s,"appload",{detail:{namespace:"emprender-user-biometrics"}})))},A=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){I(e)}},H=(e,t)=>e&&e.then?e.then(t):t(),q=e=>e.classList.add("hydrated"),F=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>z(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=z(e),o=s.O.get(t),r=s.t,c=s.j;n=((e,t)=>null==e||$(e)?e:1&t?e+"":e)(n,l.C[t][0]),8&r&&void 0!==o||n===o||(s.O.set(t,n),c&&2==(18&r)&&L(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){r.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},N=(e,t={})=>{const n=[],l=t.exclude||[],c=s.customElements,u=o.head,f=u.querySelector("meta[charset]"),$=o.createElement("style"),d=[];let m,p=!0;Object.assign(r,t),r.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>e[1].map((t=>{const s={t:t[0],o:t[1],C:t[2],L:t[3]};s.C=t[2];const o=s.o,u=class extends HTMLElement{constructor(e){super(e),D(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),p?d.push(this):r.jmp((()=>(e=>{if(0==(1&r.t)){const t=z(e),n=t.M,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){O(t,t.g=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=K(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(F(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){I(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=a(n);if(!Q.has(t)){const l=()=>{};((e,t,n)=>{let l=Q.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,r=()=>L(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){r.jmp((()=>{}))}componentOnReady(){return z(this).P}};s.R=e[0],l.includes(o)||c.get(o)||(n.push(o),c.define(o,F(u,s,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):r.jmp((()=>m=setTimeout(W,30)))},V=e=>{const t=new URL(e,r.l);return t.origin!==s.location.origin?t.href:t.pathname},_=new WeakMap,z=e=>_.get(e),B=(e,t)=>_.set(t.j=e,t),D=(e,t)=>{const n={t:0,h:e,M:t,O:new Map};return n.P=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],_.set(e,n)},G=(e,t)=>t in e,I=(e,t)=>(0,console.error)(e,t),J=new Map,K=e=>{const t=e.o.replace(/-/g,"_"),n=e.R,l=J.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(J.set(n,e),e[t])),I)},Q=new Map,X=[],Y=[],Z=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&r.t?ne(te):r.raf(te))},ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){I(e)}e.length=0},te=()=>{ee(X),ee(Y),(l=X.length>0)&&r.raf(te)},ne=e=>c().then(e),le=Z(Y,!0);export{p as H,V as a,N as b,k as c,U as f,R as g,d as h,c as p,B as r}