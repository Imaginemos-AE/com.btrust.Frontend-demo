import{g as e,f as n,r as t,c as o,h as r,H as s}from"./p-7d663aaa.js";const i=e=>!("isConnected"in e)||e.isConnected,a=(()=>{let e;return(...n)=>{e&&clearTimeout(e),e=setTimeout((()=>{e=0,(e=>{for(let n of e.keys())e.set(n,e.get(n).filter(i))})(...n)}),2e3)}})();function c(){const e=sessionStorage.getItem("muiiUserFormInfo");return JSON.parse(e)}const{state:f}=(()=>{const t=((e,n=((e,n)=>e!==n))=>{let t=new Map(Object.entries(null!=e?e:{}));const o={dispose:[],get:[],set:[],reset:[]},r=()=>{t=new Map(Object.entries(null!=e?e:{})),o.reset.forEach((e=>e()))},s=e=>(o.get.forEach((n=>n(e))),t.get(e)),i=(e,r)=>{const s=t.get(e);n(r,s,e)&&(t.set(e,r),o.set.forEach((n=>n(e,r,s))))},a="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,n)=>s(n),ownKeys:()=>Array.from(t.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,n)=>t.has(n),set:(e,n,t)=>(i(n,t),!0)}),c=(e,n)=>(o[e].push(n),()=>{((e,n)=>{const t=e.indexOf(n);t>=0&&(e[t]=e[e.length-1],e.length--)})(o[e],n)});return{state:a,get:s,set:i,on:c,onChange:(n,t)=>{const o=c("set",((e,o)=>{e===n&&t(o)})),r=c("reset",(()=>t(e[n])));return()=>{o(),r()}},use:(...e)=>e.forEach((e=>{e.set&&c("set",e.set),e.get&&c("get",e.get),e.reset&&c("reset",e.reset)})),dispose:()=>{o.dispose.forEach((e=>e())),r()},reset:r,forceUpdate:e=>{const n=t.get(e);o.set.forEach((t=>t(e,n,n)))}}})({currentUserInformation:{}},void 0);return(({on:t})=>{const o=new Map;"function"==typeof e&&(t("dispose",(()=>{o.clear()})),t("get",(n=>{const t=e();t&&((e,n,t)=>{const o=e.get(n);o?o.includes(t)||o.push(t):e.set(n,[t])})(o,n,t)})),t("set",(e=>{const t=o.get(e);t&&o.set(e,t.filter(n)),a(o)})),t("reset",(()=>{o.forEach((e=>e.forEach(n))),a(o)})))})(t),t})();const l=[{tag:"personal-information",field:"personalInformation"},{tag:"personal-information-2",field:"personalInformation2"},{tag:"working-information",field:"workingInformation"},{tag:"financial-information",field:"financialInformation"},{tag:"references",field:"references"}],m=[{tag:"personal-information",field:"personalInformation"},{tag:"personal-information-2",field:"personalInformation2"},{tag:"working-information",field:"workingInformation"},{tag:"financial-information",field:"financialInformation"},{tag:"references",field:"references"}],d=class{constructor(e){t(this,e),this.infoSaved=o(this,"infoSaved",7),this.flowType="employee",this.step=0,this._getFlow=()=>"employee"===this.flowType?l:m,this._getData=e=>{var n;return(null!==(n=f.currentUserInformation)&&void 0!==n?n:{})[e]}}async componentWillLoad(){var e;await(e="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap",new Promise((n=>{const t=document.getElementsByTagName("link");if(Array.from(t).some((n=>n.href===e)))n(!0);else{const t=document.createElement("link");t.onload=n,t.href=e,t.rel="stylesheet",document.head.appendChild(t)}}))),await new Promise((e=>{document.body.appendChild(Object.assign(document.createElement("script"),{type:"module",async:!0,defer:!0,id:"emprender-components-library",src:"https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js",onload:e}))})),f.currentUserInformation=c()}_renderCurrentStep(){if(this.step>=0&&this.step<this._getFlow().length){const{tag:e,field:n}=this._getFlow()[this.step];return r(`emprender-uf-${e}`,{model:this._getData(n),onInfoSaved:e=>this.saveInfo(n,e.detail)})}}saveInfo(e,n){(function(e,n){f.currentUserInformation=Object.assign(Object.assign({},f.currentUserInformation),{[e]:n}),function(e){const n=c(),t=Object.assign(Object.assign({},n),e);sessionStorage.setItem("muiiUserFormInfo",JSON.stringify(t))}(f.currentUserInformation)})(e,n),this.step=this.step+1,this.infoSaved.emit(f.currentUserInformation)}render(){return r(s,null,this._renderCurrentStep())}};d.style=":host{display:block}";export{d as emprender_user_forms}