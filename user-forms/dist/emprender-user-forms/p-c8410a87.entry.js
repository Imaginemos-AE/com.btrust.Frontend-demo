import{r as i,c as t,h as e,H as n}from"./p-da435823.js";import{s,l as a,a as o,b as r}from"./p-17204829.js";import{l,a as d}from"./p-0af3cd17.js";import"./p-e816e254.js";const p=[{tag:"personal-information",field:"personalInformation"},{tag:"personal-information-2",field:"personalInformation2"},{tag:"working-information",field:"workingInformation"},{tag:"financial-information",field:"financialInformation"},{tag:"references",field:"references"}],m=[{tag:"personal-information",field:"personalInformation"},{tag:"personal-information-2",field:"personalInformation2"},{tag:"company-information",field:"companyInformation"},{tag:"financial-company",field:"financialCompany"},{tag:"references",field:"references"}],f=class{constructor(n){i(this,n),this.infoSaved=t(this,"infoSaved",7),this.backSaved=t(this,"backSaved",7),this.flowType="employee",this.step=0,this.loading=!1,this._getFlow=()=>"employee"===this.flowType?p:m,this._getData=i=>{var t;return(null!==(t=s.currentUserInformation)&&void 0!==t?t:{})[i]},this.getLoadingGif=()=>e("div",{class:"lds-dual-ring"})}async componentWillLoad(){await l("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap"),await d("https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js","emprender-components-library","module"),a()}isLoading(){setTimeout((()=>this.loading=!0),800)}_renderCurrentStep(){if(this.step>=0&&this.step<this._getFlow().length){const{tag:i,field:t}=this._getFlow()[this.step];return e(`emprender-uf-${i}`,{model:this._getData(t),flow:this.flowType,onInfoSaved:i=>this.saveInfo(t,i.detail),onBack:i=>this.onBackPressed(t,i.detail)})}}_updateStep(i){if(this.loading=!1,"up"===i){const i=this._getFlow().length-1;this.step=this.step<i?this.step+1:i}else this.step=0!=this.step?this.step-1:0}saveInfo(i,t){o(i,t),this._updateStep("up"),this.infoSaved.emit(s.currentUserInformation),"references"===i&&r(this.flowType)}onBackPressed(i,t){o(i,t),this._updateStep("down"),this.backSaved.emit(s.currentUserInformation)}componentWillRender(){this.isLoading()}render(){return e(n,null,e("div",{class:"prueba"},this.loading?this._renderCurrentStep():this.getLoadingGif()))}};f.style=':host{display:block}.prueba{min-height:50VH;position:relative}.lds-dual-ring{display:inline-block;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:80px;height:80px}.lds-dual-ring:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #51215b;border-color:#51215b transparent #51215b transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';export{f as emprender_user_forms}