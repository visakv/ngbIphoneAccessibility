"use strict";(self.webpackChunkduet_angular_template=self.webpackChunkduet_angular_template||[]).push([[799],{9799:(m,n,a)=>{a.r(n),a.d(n,{duet_radio:()=>c,duet_radio_group:()=>h});var r=a(5861),i=a(3671),p=a(6065),u=a(290),l=a(7595);const c=class{constructor(e){(0,i.r)(this,e),this.duetChange=(0,i.c)(this,"duetChange",7),this.duetFocus=(0,i.c)(this,"duetFocus",7),this.duetBlur=(0,i.c)(this,"duetBlur",7),this.radioId=(0,p.c)("DuetRadio"),this.margin="auto",this.theme="",this.disabled=!1,this.required=!1,this.blockEvents=!1,this.label="label",this.onClick=t=>{t.stopPropagation()},this.onChange=t=>{this.checked=t.target.value,this.checked&&!this.blockEvents&&this.duetChange.emit({originalEvent:t,checked:this.checked,value:this.value,component:"duet-radio"})},this.onBlur=t=>{this.duetBlur.emit({originalEvent:t,checked:this.checked,value:this.value,component:"duet-radio"})},this.onFocus=t=>{this.duetFocus.emit({originalEvent:t,checked:this.checked,value:this.value,component:"duet-radio"})}}componentWillLoad(){(0,u.i)(this),void 0===this.value&&(this.value=this.identifier)}setFocus(e){var t=this;return(0,r.Z)(function*(){t.nativeInput.focus(e)})()}render(){const e=this.identifier||this.radioId;return(0,i.h)(i.H,{onClick:this.onClick,class:{horizontal:"horizontal"===this.groupDirection&&!this.groupResponsive,"horizontal-responsive":"horizontal"===this.groupDirection&&this.groupResponsive,"duet-m-0":"none"===this.margin}},(0,i.h)("div",{class:{"duet-radio-container":!0,"duet-theme-turva":"turva"===this.theme}},(0,i.h)("input",{type:"radio",onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange,value:this.value,tabindex:this.accessibleIndex,class:{"duet-radio":!0,disabled:this.disabled||this.groupDisabled},checked:this.checked,disabled:this.disabled||this.groupDisabled,required:this.required,"aria-controls":this.accessibleControls,"aria-activedescendant":this.accessibleActiveDescendant,"aria-owns":this.accessibleOwns,"aria-describedby":this.accessibleDescribedBy,role:this.role,name:this.name,id:e,ref:t=>this.nativeInput=t}),(0,i.h)("label",{class:"duet-label",htmlFor:e},(0,i.h)("span",null,this.label))))}get element(){return(0,i.g)(this)}};c.style='*.sc-duet-radio,*.sc-duet-radio::after,*.sc-duet-radio::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}.sc-duet-radio-h{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;margin-right:28px !important;margin-bottom:12px !important;display:inline-flex;width:100%;vertical-align:bottom;-webkit-tap-highlight-color:transparent}.sc-duet-radio-h:last-child,.sc-duet-radio-h:last-of-type{margin-right:0 !important}.vertical.sc-duet-radio-h{margin-right:0 !important}.horizontal.sc-duet-radio-h{margin-bottom:0 !important;width:auto}.horizontal.sc-duet-radio-h .duet-label.sc-duet-radio span.sc-duet-radio{max-width:100%}@media (min-width: 48em){.horizontal-responsive.sc-duet-radio-h{margin-right:28px !important;margin-bottom:0 !important;width:auto}.horizontal-responsive.sc-duet-radio-h:last-child,.horizontal-responsive.sc-duet-radio-h:last-of-type{margin-right:0 !important}.horizontal-responsive.sc-duet-radio-h .duet-label.sc-duet-radio span.sc-duet-radio{max-width:100%}}.duet-m-0.sc-duet-radio-h{margin:0 !important}.sc-duet-radio-h:last-child:not(:only-child){margin-right:0 !important;margin-bottom:0 !important}.duet-label.sc-duet-radio{position:relative;z-index:100;display:flex;width:100%;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#00294d;cursor:pointer;background:transparent}.duet-theme-turva.sc-duet-radio .duet-label.sc-duet-radio{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a}.duet-label.sc-duet-radio span.sc-duet-radio{flex-grow:1;font-size:1rem}.duet-label-hidden.sc-duet-radio .duet-label.sc-duet-radio{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);border:0}.duet-radio-container.sc-duet-radio{position:relative;width:100%;height:100%}.duet-radio.sc-duet-radio{padding:14px !important;position:absolute;top:0;left:0;z-index:200;width:100%;height:100%;cursor:pointer;opacity:0}.duet-radio.sc-duet-radio+label.sc-duet-radio::before{z-index:100;flex-shrink:0;width:20px;height:20px;margin:2px 10px 1px 1px;content:"";background:white;border:1px solid #00294d;border-radius:50%}.duet-theme-turva.sc-duet-radio .duet-radio.sc-duet-radio+label.sc-duet-radio::before{border-color:#171c3a}.duet-radio.sc-duet-radio:focus+label.sc-duet-radio::before{box-shadow:0 0 0 4px rgba(0, 119, 179, 0.3), 0 0 0 1px #0077b3}.duet-theme-turva.sc-duet-radio .duet-radio.sc-duet-radio:focus+label.sc-duet-radio::before{box-shadow:0 0 0 4px rgba(23, 28, 58, 0.2), 0 0 0 1px #171c3a}.duet-radio.sc-duet-radio:checked+label.sc-duet-radio::after{position:absolute;top:6px;left:5px;z-index:200;flex-shrink:0;width:12px;height:12px;content:"";background:#00294d;border-radius:50%}.duet-theme-turva.sc-duet-radio .duet-radio.sc-duet-radio:checked+label.sc-duet-radio::after{background:#171c3a}.duet-radio[disabled].sc-duet-radio{cursor:default}.duet-radio[disabled].sc-duet-radio+label.sc-duet-radio{color:#657787}.duet-theme-turva.sc-duet-radio .duet-radio[disabled].sc-duet-radio+label.sc-duet-radio{color:#747475}.duet-radio[disabled].sc-duet-radio+label.sc-duet-radio::before{border-color:#cfd2d4}.duet-theme-turva.sc-duet-radio .duet-radio[disabled].sc-duet-radio+label.sc-duet-radio::before{border-color:#cfcfd1}.duet-radio[disabled].sc-duet-radio:checked+label.sc-duet-radio::before{border:1px solid #657787}.duet-radio[disabled].sc-duet-radio:checked+label.sc-duet-radio::after{background:#657787}.duet-theme-turva.sc-duet-radio .duet-radio[disabled].sc-duet-radio:checked+label.sc-duet-radio::after{background:#747475;border-color:#747475}';const h=class{constructor(e){(0,i.r)(this,e),this.direction="vertical",this.margin="auto",this.theme="",this.error="",this.tooltip="",this.tooltipDirection="auto",this.label="Label",this.labelHidden=!1,this.caption="",this.responsive=!1,this.onSelect=t=>{const o=t.target;o&&(this.value=o.value),t.cancelBubble=!0}}connectedCallback(){var e=this;return(0,r.Z)(function*(){const t=e.element;if(void 0===e.value){const o=(0,l.f)(t,"duet-radio");void 0!==o&&(yield o.componentOnReady(),void 0===e.value&&(e.value=o.value))}e.mutationO=(0,l.w)(t,"duet-radio",o=>{void 0!==o?o.componentOnReady().then(()=>{e.value=o.value}):e.updateRadios()}),e.updateRadios()})()}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentWillLoad(){(0,u.i)(this)}updateRadios(){var e=this;return(0,r.Z)(function*(){const t=Array.from(e.element.querySelectorAll("duet-radio")),{value:o}=e;let s=!1;for(const d of t)d.name=e.name,d.groupDisabled=e.disabled,d.groupDirection=e.direction,d.groupResponsive=e.responsive,s||d.value!==o?d.checked=!1:(s=!0,d.checked=!0);s||(e.value=void 0)})()}render(){return(0,i.h)(i.H,{onDuetChange:this.onSelect,class:{horizontal:"horizontal"===this.direction}},(0,i.h)("duet-fieldset",{label:this.label,labelHidden:this.labelHidden,caption:this.caption,error:this.error,margin:this.margin,theme:this.theme},this.tooltip&&(0,i.h)("duet-tooltip",{slot:"tooltip",direction:this.tooltipDirection,accessibleInputLabel:this.label},this.tooltip),(0,i.h)("div",{class:{"duet-radio-group":!0,"duet-no-stacking":!this.responsive}},(0,i.h)("slot",null))))}get element(){return(0,i.g)(this)}static get watchers(){return{name:["updateRadios"],value:["updateRadios"],disabled:["updateRadios"],direction:["updateRadios"],responsive:["updateRadios"]}}};h.style="*.sc-duet-radio-group,*.sc-duet-radio-group::after,*.sc-duet-radio-group::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}.sc-duet-radio-group-h{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;display:block;width:100%}.horizontal.sc-duet-radio-group-h .duet-radio-group.sc-duet-radio-group{display:block}@media (min-width: 48em){.horizontal.sc-duet-radio-group-h .duet-radio-group.sc-duet-radio-group{display:flex}}.horizontal.sc-duet-radio-group-h .duet-radio-group.duet-no-stacking.sc-duet-radio-group{display:flex}.deut-radio-group.sc-duet-radio-group{width:100%}"}}]);