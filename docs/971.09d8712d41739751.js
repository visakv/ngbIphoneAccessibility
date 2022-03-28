"use strict";(self.webpackChunkduet_angular_template=self.webpackChunkduet_angular_template||[]).push([[971],{9971:(f,s,r)=>{r.r(s),r.d(s,{duet_range_slider:()=>n});var o=r(5861),e=r(202),i=r(8256),c=r(6065),g=r(5240),h=r(682);const m={turva:{active:i.c,inactive:i.a},default:{active:i.b,inactive:i.d}};let n=class{constructor(a){(0,e.r)(this,a),this.duetChange=(0,e.c)(this,"duetChange",3),this.duetInput=(0,e.c)(this,"duetInput",7),this.rangeId=(0,c.c)("DuetRange"),this.theme="",this.margin="auto",this.expand=!1,this.required=!1,this.disabled=!1,this.min=0,this.label="label",this.labelHidden=!1,this.unit="",this.max=100,this.step=1,this.locale="fi-FI",this.value=0,this.debounce=0,this.onInput=t=>{const d=t.target;d&&(this.value=parseFloat(d.value)||0),this.duetInput.emit({originalEvent:t,value:this.value,component:"duet-range-slider"})},this.onChange=t=>{const d=t.target;d&&(this.value=parseFloat(d.value)||0),clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.duetChange.emit({originalEvent:t,value:this.value,component:"duet-range-slider"})},this.debounce)}}componentWillLoad(){(0,h.i)(this)}setFocus(a){var t=this;return(0,o.Z)(function*(){t.nativeInput.focus(a)})()}calculatePercentage(){return(this.value-this.min)/(this.max-this.min)*100}render(){const a=this.identifier||this.rangeId,t="turva"===this.theme?"turva":"default",{inactive:d,active:u}=m[t],l=this.calculatePercentage(),p={background:`-webkit-linear-gradient(left,${u} 0%,${u} ${l}%,${d} ${l}%)`};return(0,e.h)(e.H,{class:{"duet-m-0":"none"===this.margin,"duet-expand":this.expand}},(0,e.h)("div",{class:{"duet-range-container":!0,"duet-label-hidden":this.labelHidden,"duet-theme-turva":"turva"===this.theme,"duet-ie":(0,g.i)(),"duet-range-disabled":this.disabled}},(0,e.h)("duet-label",{theme:t,margin:"small",for:a},this.label),(0,e.h)("output",{"aria-hidden":"true",htmlFor:a,class:"duet-output"},this.value.toLocaleString(this.locale),this.unit),(0,e.h)("input",{onInput:this.onInput,onChange:this.onChange,ref:v=>this.nativeInput=v,type:"range",min:this.min,max:this.max,step:this.step,value:this.value,style:p,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.value,"aria-valuetext":`${this.value} ${this.unit}`,"aria-controls":this.accessibleControls,"aria-activedescendant":this.accessibleActiveDescendant,"aria-owns":this.accessibleOwns,"aria-describedby":this.accessibleDescribedBy,id:a,name:this.name,disabled:this.disabled,required:this.required,class:"duet-range"})))}get element(){return(0,e.g)(this)}};n.style='*.sc-duet-range-slider,*.sc-duet-range-slider::after,*.sc-duet-range-slider::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}.sc-duet-range-slider-h{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;margin-right:16px !important;margin-bottom:12px !important;display:inline-flex;width:100%;max-width:100%;text-align:left;vertical-align:bottom}.sc-duet-range-slider-h:last-child,.sc-duet-range-slider-h:last-of-type{margin-right:0 !important}@media (min-width: 36em){.sc-duet-range-slider-h{width:calc(50% - 16px - 3px)}.duet-expand.sc-duet-range-slider-h{width:100% !important}}.duet-m-0.sc-duet-range-slider-h{margin:0 !important}.duet-range-container.sc-duet-range-slider{position:relative;width:100%}.duet-output.sc-duet-range-slider{position:absolute;top:12px;right:0;z-index:200;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:0.875rem;font-weight:400;font-variant-numeric:tabular-nums;line-height:1.25;color:#00294d;background:white}.duet-theme-turva.sc-duet-range-slider .duet-output.sc-duet-range-slider{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a}.duet-range-disabled.sc-duet-range-slider .duet-output.sc-duet-range-slider{color:#909599}.duet-range-disabled.duet-theme-turva.sc-duet-range-slider .duet-output.sc-duet-range-slider{color:#747475}.duet-range.sc-duet-range-slider{position:relative;z-index:100;width:100%;height:4px;background:#cfd2d4;border-radius:4px}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider{background:#cfcfd1}.duet-ie.sc-duet-range-slider .duet-range.sc-duet-range-slider{display:block;width:auto;height:26px;background:transparent !important}.duet-range.sc-duet-range-slider::-moz-range-track{height:1px;background:transparent !important;border:0;-moz-appearance:none}.duet-range.sc-duet-range-slider::-ms-track{color:transparent;background:transparent;border:0}.duet-range.sc-duet-range-slider:focus,.duet-range.sc-duet-range-slider:active{outline:0}.user-is-tabbing.sc-duet-range-slider-h .duet-range.sc-duet-range-slider:focus{box-shadow:0 0 0 1px white, 0 0 0 3px rgba(0, 119, 179, 0.75)}.user-is-tabbing.sc-duet-range-slider-h .duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider:focus{box-shadow:0 0 0 1px white, 0 0 0 3px #171c3a}.duet-range.sc-duet-range-slider::-webkit-slider-runnable-track{background:transparent}.duet-range.sc-duet-range-slider::-webkit-slider-thumb{position:relative;width:24px;height:24px;cursor:-webkit-grab;background:white;border:1px solid #909599;border-radius:50%;transition:box-shadow 300ms ease;-webkit-appearance:none}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-webkit-slider-thumb{border-color:#747475}.duet-range.sc-duet-range-slider:active::-webkit-slider-thumb{cursor:-webkit-grabbing}.duet-range.sc-duet-range-slider::-moz-range-thumb{position:relative;width:24px;height:24px;cursor:-moz-grab;background:white;border:1px solid #909599;border-radius:50%;appearance:none}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-moz-range-thumb{border-color:#747475}.duet-range.sc-duet-range-slider:active::-moz-range-thumb{cursor:-moz-grabbing}.duet-range.sc-duet-range-slider::-ms-thumb{position:relative;width:24px;height:24px;overflow:visible;background:white;border:1px solid #909599;border-radius:50%}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-ms-thumb{border-color:#747475}.duet-range.sc-duet-range-slider:disabled{background:#cfd2d4 !important}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider:disabled{background:#cfcfd1 !important}.duet-range.sc-duet-range-slider:disabled::-webkit-slider-thumb{cursor:default;background:#cfd2d4;border-color:transparent}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider:disabled::-webkit-slider-thumb{background:#cfcfd1;border-color:transparent}.duet-range.sc-duet-range-slider:disabled::-moz-range-thumb{cursor:default;background:#cfd2d4;border-color:transparent}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider:disabled::-moz-range-thumb{background:#cfcfd1;border-color:transparent}.duet-range.sc-duet-range-slider:disabled::-ms-thumb{cursor:default;background:#cfd2d4;border-color:transparent}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider:disabled::-ms-thumb{background:#cfcfd1;border-color:transparent}.duet-range.sc-duet-range-slider::-ms-fill-lower{height:4px;background:#0077b3}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-ms-fill-lower{background:#c60c30}.duet-range.sc-duet-range-slider::-ms-fill-upper{height:4px;background:#cfd2d4}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-ms-fill-upper{background:#cfcfd1}.duet-label-hidden.sc-duet-range-slider duet-label.sc-duet-range-slider,.duet-label-hidden.sc-duet-range-slider output.sc-duet-range-slider{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);border:0}'}}]);