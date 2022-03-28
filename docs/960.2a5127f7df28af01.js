"use strict";(self.webpackChunkduet_angular_template=self.webpackChunkduet_angular_template||[]).push([[960],{960:(_,d,s)=>{s.r(d),s.d(d,{duet_number_input:()=>h});var c=s(5861),i=s(202),b=s(6065),r=s(6712),a=s(3025),m=s(682),p_svg=(s(3026),'<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M12 24a.75.75 0 0 1-.75-.75v-10.5H.75a.75.75 0 0 1 0-1.5h10.5V.75a.75.75 0 0 1 1.5 0v10.5h10.5a.75.75 0 0 1 0 1.5h-10.5v10.5A.75.75 0 0 1 12 24z"/></svg>');const o=(u,t)=>{switch(u=u.replace(/\s+/g,"").replace(/[^0-9\.,]+/g,""),t){case"fi-FI":case"sv-SE":u=u.replace(",",".");break;case"en-US":case"en-GB":u=u.replace(/,/g,"");break;default:throw new TypeError(`Unrecognised locale: ${t}`)}return parseFloat(u)},l=(u,t,n)=>Math.min(Math.max(u,t),n);let h=class{constructor(u){(0,i.r)(this,u),this.duetChange=(0,i.c)(this,"duetChange",3),this.duetInput=(0,i.c)(this,"duetInput",3),this.duetBlur=(0,i.c)(this,"duetBlur",7),this.duetFocus=(0,i.c)(this,"duetFocus",7),this.inputId=(0,b.c)("DuetInput"),this.language=(0,a.a)(),this.locale=(0,a.b)(this.language).locale,this.unit=(0,a.b)(this.language).money,this.accessibleLiveDefaults={fi:"{current} euroa valittuna",en:"{current} euros selected",sv:"{current} euro valt"},this.accessibleLive=(0,a.g)(this.accessibleLiveDefaults,this.language),this.accessibleLiveEnabled=!0,this.accessibleAddDefaults={fi:"Lis\xe4\xe4 summaan",en:"Add to the amount",sv:"L\xe4gg till beloppet"},this.accessibleAdd=(0,a.g)(this.accessibleAddDefaults,this.language),this.accessibleSubtractDefaults={fi:"V\xe4henn\xe4 summasta",en:"Subtract from the amount",sv:"Dra fr\xe5n beloppet"},this.accessibleSubtract=(0,a.g)(this.accessibleSubtractDefaults,this.language),this.theme="",this.margin="auto",this.expand=!1,this.min=0,this.labelDefaults={fi:"Nimilappu",en:"Label",sv:"Etikett"},this.label=(0,a.g)(this.labelDefaults,this.language),this.labelHidden=!1,this.max=1e6,this.error="",this.tooltip="",this.step=5e3,this.rounding=!0,this.disabled=!1,this.required=!1,this.handleFocus=()=>{this.focusedValue=this.value},this.handleKeyDown=t=>{(0,r.a)(t)||(0,r.b)(t)?this.add(t):(0,r.c)(t)||(0,r.d)(t)?this.subtract(t):(0,r.e)(t)&&this.clearValue()},this.handleChange=t=>{const n=t.target;if(n&&n.value){let e=this.cleanValue(n.value);(isNaN(e)||null==e)&&(e=this.min||0),this.setValue(e),this.duetInput.emit({component:"duet-number-input",originalEvent:t,value:this.cleanValue(this.value).toString(),valueAsNumber:e})}else this.duetInput.emit({component:"duet-number-input",originalEvent:t,value:null,valueAsNumber:null})},this.handleBlur=t=>{const n=t.target;if(n)if(n.value){let e=this.cleanValue(n.value);this.rounding&&(e=((u,t)=>Math.round(u/t)*t)(e,this.step)),e=l(e,this.min,this.max),(e!==this.cleanValue(this.value)||e!==this.cleanValue(this.focusedValue))&&(this.setValue(e),this.emitChange(t))}else this.duetChange.emit({originalEvent:t,value:null,valueAsNumber:null,component:"duet-number-input"})},this.emitChange=t=>{const n=this.cleanValue(this.value);this.duetChange.emit({originalEvent:t,value:n.toString(),valueAsNumber:n,component:"duet-number-input"})},this.cleanValue=t=>t?o(t,this.locale):null,this.localizeValue=t=>t.toLocaleString(this.locale),this.setValue=t=>{this.value=this.localizeValue(t),this.duetInputElement.value=`${this.value} ${this.unit}`},this.add=t=>{t&&t.preventDefault();const n=this.cleanValue(this.value);if(n===this.max)return;let e=null==n?this.min:n+this.step;e%this.step!=0&&(e-=e%this.step),e=l(e,this.min,this.max),this.value=this.localizeValue(e),this.emitChange(t)},this.subtract=t=>{t&&t.preventDefault();const n=this.cleanValue(this.value);if(n===this.min)return;let e=n-this.step;e%this.step!=0&&(e+=this.step-e%this.step),e=l(e,this.min,this.max),this.value=this.localizeValue(e),this.emitChange(t)}}componentWillLoad(){(0,m.i)(this),this.value&&(this.value=this.localizeValue(o(this.value,this.locale)))}setFocus(u){var t=this;return(0,c.Z)(function*(){t.duetInputElement.setFocus(u)})()}clearValue(){this.value=null,this.duetInputElement.value=""}formatAnnouncement(){const u=this.cleanValue(this.value);return null==u?"":this.accessibleLive.replace("{current}",u.toString(10))}render(){const u=this.identifier||this.inputId,t=`${this.localizeValue(this.max)} ${this.unit}`.length,n=this.cleanValue(this.value);return(0,i.h)(i.H,{class:{"duet-theme-turva":"turva"===this.theme,"duet-expand":this.expand,"duet-m-0":"none"===this.margin}},(0,i.h)("div",{class:"duet-number-container"},(0,i.h)("duet-input",{ref:e=>this.duetInputElement=e,onDuetChange:e=>this.handleChange(e),onDuetFocus:this.handleFocus,onDuetBlur:e=>this.handleBlur(e),onKeyDown:e=>this.handleKeyDown(e),label:this.label,value:this.value?`${this.value} ${this.unit}`:"",error:this.error,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":null!=n?n:"",maxlength:t,name:this.name,component:"number",required:this.required,disabled:this.disabled,role:this.role,labelHidden:this.labelHidden,tooltip:this.tooltip,identifier:u,theme:this.theme,margin:"none",expand:!0,numericKeyboard:!0,autoComplete:"off",type:"text",accessibleActiveDescendant:this.accessibleActiveDescendant,accessibleControls:this.accessibleControls,accessibleOwns:this.accessibleOwns,accessibleDescribedBy:this.accessibleDescribedBy},(0,i.h)("div",{class:{"duet-number-buttons":!0,"duet-no-label":this.labelHidden}},(0,i.h)("button",{"aria-controls":u,disabled:this.disabled,"aria-disabled":null==n||n===this.min?"true":"false",class:"duet-number-button duet-number-button-subtract",onClick:this.subtract,type:"button"},(0,i.h)("duet-visually-hidden",null,this.accessibleSubtract," ",this.step),(0,i.h)("duet-icon",{icon:'<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M.75 12.788a.75.75 0 0 1 0-1.5h22.5a.75.75 0 0 1 0 1.5z"/></svg>',size:"small",margin:"none",color:"turva"===this.theme?"secondary-turva":"secondary"})),(0,i.h)("button",{"aria-controls":u,disabled:this.disabled,"aria-disabled":n===this.max?"true":"false",class:"duet-number-button duet-number-button-add",onClick:this.add,type:"button"},(0,i.h)("duet-visually-hidden",null,this.accessibleAdd," ",this.step),(0,i.h)("duet-icon",{icon:p_svg,size:"small",margin:"none",color:"turva"===this.theme?"secondary-turva":"secondary"})))),this.accessibleLiveEnabled&&(0,i.h)("duet-visually-hidden",{"aria-live":"polite","aria-atomic":"true","aria-relevant":"all"},this.formatAnnouncement())))}get element(){return(0,i.g)(this)}};h.style='*.sc-duet-number-input,*.sc-duet-number-input::after,*.sc-duet-number-input::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}.sc-duet-number-input-h{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;margin-right:16px !important;margin-bottom:12px !important;display:inline-flex;width:100%;min-width:calc(33.333% - 8px);max-width:100%;line-height:1.25;text-align:left;vertical-align:bottom}.sc-duet-number-input-h:last-child,.sc-duet-number-input-h:last-of-type{margin-right:0 !important}@media (min-width: 36em){.sc-duet-number-input-h{width:calc(50% - 16px - 3px)}}.duet-expand.sc-duet-number-input-h{width:100% !important}.duet-m-0.sc-duet-number-input-h{margin:0 !important}.duet-number-container.sc-duet-number-input{position:relative;width:100%}.duet-number-buttons.sc-duet-number-input{-webkit-user-select:none;user-select:none;position:absolute;top:1px;right:1px;z-index:200;width:96px;height:calc(100% - 2px)}.duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input{position:relative;display:inline-flex;align-items:center;justify-content:center;width:50%;height:100%;text-align:center;cursor:pointer;background:transparent;-webkit-appearance:none;appearance:none}.duet-number-buttons.sc-duet-number-input .duet-number-button[aria-disabled=true].sc-duet-number-input,.duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:disabled{pointer-events:none}.duet-number-buttons.sc-duet-number-input .duet-number-button[aria-disabled=true].sc-duet-number-input duet-icon.sc-duet-number-input,.duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:disabled duet-icon.sc-duet-number-input{opacity:0.4}.duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:active duet-icon.sc-duet-number-input{transform:translateY(1px)}.duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:focus{outline:0}.user-is-tabbing.sc-duet-number-input-h .duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:focus{z-index:2;box-shadow:0 0 0 2px #0077b3}.duet-theme-turva .user-is-tabbing.sc-duet-number-input-h .duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:focus{box-shadow:0 0 0 2px #171c3a}.duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:first-of-type{border-left:1px solid #cfd2d4}.duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:first-of-type::before{position:absolute;top:0;left:-6px;width:6px;height:100%;content:"";background:linear-gradient(to left, rgba(207, 210, 212, 0.2) 0%, rgba(207, 210, 212, 0.2) 1px, rgba(207, 210, 212, 0.1) 1px, rgba(207, 210, 212, 0) 100%)}.duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:last-of-type{border-top-right-radius:4px;border-bottom-right-radius:4px}.duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:last-of-type::before{position:absolute;top:20%;left:0;width:1px;height:60%;content:"";background:#e1e3e6}.duet-theme-turva.sc-duet-number-input-h .duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:first-of-type::before{background:linear-gradient(to left, rgba(207, 207, 209, 0.2) 0%, rgba(207, 207, 209, 0.2) 1px, rgba(207, 207, 209, 0.1) 1px, rgba(207, 207, 209, 0) 100%)}.duet-theme-turva.sc-duet-number-input-h .duet-number-buttons.sc-duet-number-input .duet-number-button.sc-duet-number-input:last-of-type::before{background:#e4e4e6}'}}]);