"use strict";(self.webpackChunkduet_angular_template=self.webpackChunkduet_angular_template||[]).push([[913],{5913:(p,n,i)=>{i.r(n),i.d(n,{duet_upload_aria_status:()=>d});var a=i(3671);const d=class{constructor(r){(0,a.r)(this,r),this.statusMessage=null,this.statusMessageLabel=null,this.accessibleAriaLive="polite",this.valid=void 0,this.total=void 0,this.invalid=void 0,this.inprogress=void 0,this.replacePlaceHolders=e=>{const s=t=>t>1?`${t} ${this.statusMessageLabel.files}`:`${t} ${this.statusMessageLabel.file}`;return e.replace("{filesUploaded}",s(this.valid)).replace("{filesInProgress}",s(this.inprogress)).replace("{filesTotal}",s(this.total)).replace("{filesWithErrors}",s(this.invalid))},this.getStatusMessage=()=>{const{done:e,inProgress:s,doneWithErrors:t,inProgressWithErrors:o}=this.statusMessageLabel,h=this.invalid>0,l=this.inprogress>0,g=this.valid+this.invalid===this.total&&!l;this.valid!==this.total||l||h?this.inprogress>0&&h?this.statusMessage=this.replacePlaceHolders(o):l?this.statusMessage=this.replacePlaceHolders(s):g&&(this.statusMessage=this.replacePlaceHolders(t)):this.statusMessage=this.replacePlaceHolders(e)}}watchHandler(r,e){r!==e&&this.getStatusMessage()}render(){return(0,a.h)(a.H,{role:"status","aria-live":"assertive","aria-atomic":"true","aria-relevant":"all"},(0,a.h)("duet-visually-hidden",null,this.statusMessage))}static get watchers(){return{valid:["watchHandler"],invalid:["watchHandler"],inprogress:["watchHandler"],total:["watchHandler"]}}}}}]);