"use strict";(self.webpackChunkduet_angular_template=self.webpackChunkduet_angular_template||[]).push([[261],{6261:(h,i,t)=>{t.r(i),t.d(i,{duet_card:()=>r});var n=t(5861),a=t(202),o=t(6065),p=t(6712),m=t(3026),s=t(682),g=t(8730),l_svg=(t(8256),'<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M.75 17.939a.752.752 0 0 1-.53-1.281L10.94 5.94c.283-.284.659-.44 1.059-.44.401 0 .777.156 1.06.438l10.721 10.72a.752.752 0 0 1-.53 1.281.743.743 0 0 1-.53-.22L12 7 1.28 17.719a.743.743 0 0 1-.53.22z"/></svg>');let r=class{constructor(d){(0,a.r)(this,d),this.duetToggle=(0,a.c)(this,"duetToggle",7),this.cardId=(0,o.c)("DuetCard"),this.heading="",this.secondaryHeading="",this.variation="default",this.collapsible=!1,this.open=!0,this.headingLevel="h2",this.background="gray-lightest",this.padding="small",this.margin="auto",this.theme="",this.togglePanel=e=>{e.preventDefault(),this.open=!this.open,this.duetToggle.emit({component:"duet-card",originalEvent:e})},this.handleKeyDown=e=>{(0,p.i)(e)&&this.togglePanel(e)}}componentWillLoad(){(0,s.i)(this),this.hasFooter=!!this.element.querySelector("[slot='footer']")}renderHeading(){const d=(0,m.s)(this.headingLevel);return(0,a.h)(d,Object.assign({class:"duet-card-heading"},this.collapsible?{role:"button",tabindex:"0","aria-controls":this.cardId,"aria-expanded":this.open?"true":"false",onClick:this.togglePanel,onKeyDown:this.handleKeyDown}:{}),(0,a.h)("div",{class:"duet-card-heading-grid"},this.icon&&(0,a.h)(a.F,null,(0,a.h)("duet-icon",{class:"duet-card-icon",name:this.icon,size:"medium",margin:"none",color:"currentColor"}),(0,a.h)("duet-spacer",{direction:"horizontal",size:"small"})),(0,a.h)("div",{class:"duet-card-heading-text"},this.heading),this.secondaryHeading&&(0,a.h)(a.F,null,(0,a.h)("duet-spacer",{direction:"horizontal",size:"small"}),(0,a.h)("div",{class:"duet-card-secondary-heading duet-card-secondary-heading--inline"},this.secondaryHeading)),this.collapsible&&(0,a.h)(a.F,null,(0,a.h)("duet-spacer",{direction:"horizontal",size:"small"}),(0,a.h)("duet-icon",{class:"duet-card-caret",icon:l_svg,size:"small",margin:"none",color:"currentColor"}))),this.secondaryHeading&&(0,a.h)("div",{class:"duet-card-secondary-heading duet-card-secondary-heading--new-line"},this.secondaryHeading),(0,a.h)("slot",{name:"below-heading"}))}setFocus(d){var e=this;return(0,n.Z)(function*(){e.nativeCard&&e.nativeCard.focus(d)})()}render(){const d=this.url?"a":"div",e={backgroundColor:(0,g.g)(this.background)};return(0,a.h)(a.H,{class:{"duet-m-0":"none"===this.margin,"duet-card-info":"info"===this.variation}},(0,a.h)(d,{href:this.url,style:e,ref:x=>this.nativeCard=x,"aria-label":this.accessibleLabel,class:{"duet-card":!0,[this.padding]:!0,[this.variation]:!0,"duet-p-0":"none"===this.padding,"duet-theme-turva":"turva"===this.theme,"duet-card-has-bg":"gray-lightest"!==this.background,"duet-card-has-icon":!!this.icon,"duet-card-collapsed":this.collapsible&&!this.open}},this.image&&(0,a.h)("div",{class:"duet-card-image-mask"},(0,a.h)("img",{src:this.image,class:"duet-card-image",loading:"lazy",alt:"","aria-hidden":"true"})),this.heading&&this.renderHeading(),(0,a.h)("div",{class:"duet-card-content",id:this.cardId},(0,a.h)("slot",null),this.hasFooter&&(0,a.h)("div",{class:"duet-card-footer"},(0,a.h)("slot",{name:"footer"})))))}get element(){return(0,a.g)(this)}};r.style='*,*::after,*::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}:host{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;margin-bottom:20px !important;display:flex;width:100%;vertical-align:top}:host(.duet-card-info){margin-bottom:16px !important}:host(.duet-m-0){margin:0 !important}.duet-card{padding:20px !important;position:relative;display:block;width:100%;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-style:normal;font-weight:400;line-height:1.5;color:#00294d;text-decoration:none;border-radius:4px;box-shadow:0 2px 6px 0 rgba(0, 41, 77, 0.07), 0 -1px 0 0 rgba(0, 0, 0, 0.09), -1px 0 0 0 rgba(0, 0, 0, 0.07), 1px 0 0 0 rgba(0, 0, 0, 0.07), 0 1px 0 0 rgba(0, 0, 0, 0.07)}.duet-card.duet-p-0{padding:0 !important}.duet-card.duet-m-0{margin:0 !important}.duet-card:focus{outline:0;box-shadow:0 0 0 4px rgba(0, 119, 179, 0.3), 0 0 0 1px #0077b3}.duet-theme-turva .duet-card:focus,.duet-card:focus.duet-theme-turva{box-shadow:0 0 0 4px rgba(23, 28, 58, 0.2), 0 0 0 1px #171c3a}@media (min-width: 36em){.duet-card{padding:28px !important}}.duet-card.duet-theme-turva{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a;box-shadow:0 2px 6px 0 rgba(117, 117, 117, 0.13), 0 -1px 0 0 rgba(0, 0, 0, 0.09), -1px 0 0 0 rgba(0, 0, 0, 0.07), 1px 0 0 0 rgba(0, 0, 0, 0.07), 0 1px 0 0 rgba(0, 0, 0, 0.07)}@media (min-width: 36em){.duet-card.x-small{padding:20px !important}}@media (min-width: 36em){.duet-card.medium{padding:28px !important}}@media (min-width: 48em){.duet-card.medium{padding:36px !important}}@media (min-width: 36em){.duet-card.large{padding:36px !important}}@media (min-width: 48em){.duet-card.large{padding:48px !important}}@media (min-width: 36em){.duet-card.x-large{padding:48px !important}}@media (min-width: 48em){.duet-card.x-large{padding:72px !important}}.duet-card.duet-card-collapsed{padding-bottom:0 !important}@media (min-width: 36em){.duet-card.duet-card-collapsed{padding-bottom:0 !important}}.duet-card.info{background:rgba(0, 80, 128, 0.04) !important;box-shadow:none}.duet-card.info.duet-theme-turva{background:rgba(23, 28, 58, 0.035) !important}.duet-card.plain{box-shadow:none}.duet-card.plain:not(.duet-card-has-bg){background:transparent !important}.duet-card-heading-grid{display:flex;flex-direction:row}.duet-card-icon{align-self:center}.duet-card-heading-text{flex:1;word-break:break-word}.duet-card-secondary-heading{font-size:1rem;font-weight:600;word-break:break-word}.duet-card-secondary-heading--inline{display:block;flex:1;align-self:flex-start;line-height:1.875;text-align:right}@media (max-width: 22.5em){.duet-card-secondary-heading--inline{display:none}}.duet-card-secondary-heading--new-line{display:none}@media (max-width: 22.5em){.duet-card-secondary-heading--new-line{display:block}}.duet-card-heading{position:relative;display:block;padding:16px 20px;margin:-20px -20px 20px;overflow:hidden;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1.25rem;font-weight:800;color:#00294d;border-bottom:1px solid #e1e3e6}@media (min-width: 36em){.duet-card-heading{padding:15px 28px 16px !important;margin:-28px -28px 20px}}.duet-card-heading[role=button]{-webkit-user-select:none;user-select:none;cursor:pointer;border-radius:4px;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;appearance:none}.duet-card-heading[role=button]:focus{outline:0}:host(.user-is-tabbing) .duet-card-heading[role=button]:focus{border-radius:4px;box-shadow:0 0 0 4px rgba(0, 119, 179, 0.3), 0 0 0 1px #0077b3}:host(.user-is-tabbing) .duet-theme-turva .duet-card-heading[role=button]:focus{box-shadow:0 0 0 4px rgba(23, 28, 58, 0.2), 0 0 0 1px #171c3a}.duet-card-collapsed .duet-card-heading{margin-bottom:0 !important;border-bottom:0 !important}.duet-theme-turva .duet-card-heading{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a;border-color:#e4e4e6}@media (min-width: 36em){.x-small .duet-card-heading{padding:10px 20px 11px !important;margin:-20px -20px 20px}}@media (min-width: 48em){.x-small .duet-card-heading{padding:10px 20px 11px !important;margin:-20px -20px 20px}}.medium .duet-card-heading{margin:-20px -20px 20px}@media (min-width: 36em){.medium .duet-card-heading{padding:15px 28px 16px !important;margin:-28px -28px 20px}}@media (min-width: 48em){.medium .duet-card-heading{padding:19px 36px 20px !important;margin:-36px -36px 28px}}.large .duet-card-heading{margin:-20px -20px 20px}@media (min-width: 36em){.large .duet-card-heading{padding:19px 36px 20px !important;margin:-36px -36px 28px}}@media (min-width: 48em){.large .duet-card-heading{padding:26px 48px 27px !important;margin:-48px -48px 36px}}.x-large .duet-card-heading{margin:-20px -20px 20px}@media (min-width: 36em){.x-large .duet-card-heading{padding:26px 48px 27px !important;margin:-48px -48px 36px}}@media (min-width: 48em){.x-large .duet-card-heading{padding:39px 72px 40px !important;margin:-72px -72px 48px}}.none .duet-card-heading{padding:0 0 20px !important;margin:0 0 20px}.duet-card-footer{padding:20px;margin:20px -20px -20px;font-size:0.875rem;line-height:1.25;background:#f5f8fa;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.duet-theme-turva .duet-card-footer{background:#f5f5f7}@media (min-width: 36em){.duet-card-footer{padding:15px 28px 16px !important;margin:20px -28px -28px}}@media (min-width: 48em){.duet-card-footer{padding:15px 28px 16px !important;margin:20px -28px -28px}}@media (min-width: 36em){.x-small .duet-card-footer{padding:15px 28px 16px !important;padding-left:20px !important;margin:20px -20px -20px}}@media (min-width: 36em){.medium .duet-card-footer{padding:15px 28px 16px !important;margin:20px -28px -28px}}@media (min-width: 48em){.medium .duet-card-footer{padding:19px 36px 20px !important;margin:28px -36px -36px}}@media (min-width: 36em){.large .duet-card-footer{padding:19px 36px 20px !important;margin:28px -36px -36px}}@media (min-width: 48em){.large .duet-card-footer{padding:26px 48px 27px !important;margin:36px -48px -48px}}@media (min-width: 36em){.x-large .duet-card-footer{padding:26px 48px 27px !important;margin:36px -48px -48px}}@media (min-width: 48em){.x-large .duet-card-footer{padding:39px 72px 40px !important;margin:48px -72px -72px}}.none .duet-card-footer{padding:12px 0 !important;margin:20px 0 0}.duet-card-content{width:100%}.duet-card-collapsed .duet-card-content{display:none}.duet-card-caret{position:relative;top:6px;align-self:flex-start;transition:300ms ease}[aria-expanded=false] .duet-card-caret{transform:rotate(-180deg)}.duet-card-image-mask{position:relative;width:calc(100% + 40px);margin:-20px 0 20px -20px;overflow:hidden;border-top-left-radius:4px;border-top-right-radius:4px}@media (min-width: 36em){.small .duet-card-image-mask{width:calc(100% + 56px);margin:-28px 0 28px -28px}}@media (min-width: 36em){.medium .duet-card-image-mask{width:calc(100% + 56px);margin:-28px 0 28px -28px}}@media (min-width: 48em){.medium .duet-card-image-mask{width:calc(100% + 72px);margin:-36px 0 28px -36px}}@media (min-width: 36em){.large .duet-card-image-mask{width:calc(100% + 72px);margin:-36px 0 36px -36px}}@media (min-width: 48em){.large .duet-card-image-mask{width:calc(100% + 96px);margin:-48px 0 36px -48px}}@media (min-width: 36em){.x-large .duet-card-image-mask{width:calc(100% + 96px);margin:-48px 0 36px -48px}}@media (min-width: 48em){.x-large .duet-card-image-mask{width:calc(100% + 144px);margin:-72px 0 36px -72px}}.none .duet-card-image-mask{width:100%;margin:0 0 20px}.duet-card-image{display:block;width:102%;min-width:1px;max-width:102%;height:auto;min-height:1px;margin-left:-1%;transition:transform 300ms ease;transform:scale(1.0001)}a.duet-card{transition:box-shadow 300ms ease, background-position 300ms ease}a.duet-card:hover{box-shadow:0 2px 6px 0 rgba(0, 41, 77, 0.07), 0 -1px 0 0 rgba(0, 0, 0, 0.09), -1px 0 0 0 rgba(0, 0, 0, 0.07), 1px 0 0 0 rgba(0, 0, 0, 0.07), 0 1px 0 0 rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 41, 77, 0.1)}a.duet-card:hover .duet-card-image{transform:scale(1.024)}.duet-theme-turva a.duet-card:hover{box-shadow:0 2px 6px 0 rgba(117, 117, 117, 0.13), 0 -1px 0 0 rgba(0, 0, 0, 0.09), -1px 0 0 0 rgba(0, 0, 0, 0.07), 1px 0 0 0 rgba(0, 0, 0, 0.07), 0 1px 0 0 rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(117, 117, 117, 0.15)}a.duet-card:active{transition:none;transform:translateY(1px)}'}}]);