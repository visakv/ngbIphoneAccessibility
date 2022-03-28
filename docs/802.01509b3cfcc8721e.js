"use strict";(self.webpackChunkduet_angular_template=self.webpackChunkduet_angular_template||[]).push([[802],{7802:(f,r,a)=>{a.r(r),a.d(r,{duet_modal:()=>c});var m=a(5861),e=a(202),d=a(5467),u=a(6065),l=a(2455),p=a(6712),h=a(3025),g=a(682);a(3026);let c=class{constructor(t){var o,i;(0,e.r)(this,t),this.duetOpen=(0,e.c)(this,"duetOpen",7),this.duetClose=(0,e.c)(this,"duetClose",7),this.duetBeforeClose=(0,e.c)(this,"duetBeforeClose",7),this.modalId=(0,u.c)("DuetModal"),this.slotDefaultId=(0,u.c)("DuetModal-default-slot"),this.isAndroidDevice=(null===(i=null===(o=null==navigator?void 0:navigator.userAgent)||void 0===o?void 0:o.toLowerCase())||void 0===i?void 0:i.indexOf("android"))>-1||null,this.isSafariBrowser=/^((?!chrome|android).)*safari/i.test(null==navigator?void 0:navigator.userAgent),this.handleAndroidResizeEvents=()=>{"INPUT"==document.activeElement.tagName&&window.setTimeout(function(){var n;try{null===(n=null==document?void 0:document.activeElement)||void 0===n||n.scrollIntoViewIfNeeded(!0)}catch(_){}},100)},this.open=!1,this.language=(0,h.a)(),this.accessibleCloseLabelDefaults={fi:"Sulje ikkuna",sv:"St\xe4ng f\xf6nstret",en:"Close the dialog"},this.accessibleCloseLabel=(0,h.g)(this.accessibleCloseLabelDefaults,this.language),this.size="medium",this.gutterSize="medium",this.theme="",this.heading="",this.headingLevel="h3",this.icon="",this.color="",this.active=!1,this.closeOnBlur=!1}openChanged(){this.open?(this.modalEl&&this.modalEl.scrollTop&&(this.modalEl.scrollTop=0),this.focusedElBeforeOpen=document.activeElement,(0,d.d)(this.modalEl,{reserveScrollBarGap:!0}),setTimeout(()=>{this.buttonEl.setFocus()},600),setTimeout(()=>{this.modalEl.classList.add("duet-disable-transitions")},800),this.isAndroidDevice&&window.addEventListener("resize",this.handleAndroidResizeEvents),this.duetOpen.emit()):(this.modalEl.classList.remove("duet-disable-transitions"),(0,d.e)(this.modalEl),this.duetClose.emit(),setTimeout(()=>{(0,l.f)(this.focusedElBeforeOpen)},600),this.isAndroidDevice&&window.removeEventListener("resize",this.handleAndroidResizeEvents))}activeChanged(){this.open=this.active}componentWillLoad(){(0,g.i)(this)}componentDidLoad(){this.active&&(this.open=!0,this.modalEl.classList.add("duet-disable-transitions"))}disconnectedCallback(){(0,d.e)(this.modalEl)}handleKeyUp(t){this.open&&(0,p.f)(t)&&this.closeModal(t)}show(){var t=this;return(0,m.Z)(function*(){t.open=!0})()}hide(){var t=this;return(0,m.Z)(function*(){t.open=!1})()}closeModal(t){this.duetBeforeClose.emit({originalEvent:t,component:"duet-modal"}),t.defaultPrevented||setTimeout(()=>{this.hide()},1)}render(){let t="primary",o="secondary";return"turva"===this.theme&&(t="primary-turva",o="secondary-turva"),(0,e.h)("div",{ref:i=>this.modalEl=i,"aria-labelledby":!!this.heading&&this.modalId,"aria-describedby":this.slotDefaultId,role:"dialog","aria-modal":!this.isSafariBrowser,tabindex:"-1","aria-flowto":this.slotDefaultId,class:{"duet-modal-overlay":!0,"duet-theme-turva":"turva"===this.theme,"duet-modal-active":this.open}},(0,e.h)(l.F,{moveFocusTo:this.buttonEl}),(0,e.h)("div",{class:{"duet-modal-inner":!0,"duet-modal-large":"large"===this.size},role:"document",onClick:i=>{this.closeOnBlur&&this.closeModal(i)}},(0,e.h)("div",{class:{"duet-modal":!0,[this.size]:!0},onClick:i=>{this.closeOnBlur&&i.stopPropagation()}},(0,e.h)("duet-spacer",null),(0,e.h)("div",{class:"duet-modal-close"},(0,e.h)("duet-button",{ref:i=>this.buttonEl=i,variation:"plain",accessibleLabel:this.accessibleCloseLabel,color:o,iconSize:"large",icon:"navigation-close",iconOnly:!0,margin:"none",theme:this.theme,onClick:i=>this.closeModal(i),fixed:!0})),(0,e.h)("div",{class:{"duet-modal-body":!0,"duet-modal-gutter-small":"small"===this.gutterSize,"duet-modal-gutter-medium":"medium"===this.gutterSize,"duet-modal-gutter-large":"large"===this.gutterSize}},(0,e.h)("div",{class:"duet-modal-header"},(0,e.h)("span",{class:"duet-modal-inner-slot-top"},(0,e.h)("slot",{name:"top"})),this.icon&&(0,e.h)("duet-icon",{name:this.icon,size:"xx-large",color:this.color||t}),this.heading&&(0,e.h)("duet-heading",{level:this.headingLevel,theme:this.theme,id:this.modalId},this.heading)),(0,e.h)("span",{class:"duet-modal-inner-slot-default",id:this.slotDefaultId},(0,e.h)("slot",null))))),(0,e.h)(l.F,{moveFocusTo:this.buttonEl}))}get element(){return(0,e.g)(this)}static get watchers(){return{open:["openChanged"],active:["activeChanged"]}}};c.style='*,*::after,*::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}:host{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}.duet-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:900;max-height:100vh;overflow-y:auto;visibility:hidden;background:rgba(0, 41, 77, 0.85);opacity:0;transition:300ms ease;transition-delay:200ms}.duet-modal-overlay.duet-theme-turva{background:rgba(23, 28, 58, 0.85)}.duet-modal-overlay.duet-modal-active{visibility:visible;opacity:1;transition:300ms ease;transition-delay:0s}.duet-modal-overlay.duet-disable-transitions{transition:none}::slotted(img){width:100%}.duet-modal-inner{display:flex;align-items:center;width:100%;min-height:100%;padding:20px 16px}@media (min-width: 36em){.duet-modal-inner{padding:48px 16px}}@media (max-width: 35.9375em){.duet-modal-inner.duet-modal-large{padding-right:0;padding-left:0}}.duet-modal{position:relative;width:100%;max-width:686px;margin:auto;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight:400;font-variant-numeric:tabular-nums;line-height:1.5;color:#00294d;background:white;border-radius:4px;opacity:0;transition:300ms ease;transition-delay:0ms;transform:scale(0.96)}.duet-theme-turva .duet-modal{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a}.duet-modal-active .duet-modal{opacity:1;transition:300ms ease;transition-delay:200ms;transform:none}.duet-disable-transitions .duet-modal{transition:none}.duet-modal.small{max-width:545px}.duet-modal.large{max-width:100%}@media (min-width: 36em){.duet-modal.large{max-width:1110px}}.duet-modal:focus{outline:0}.duet-modal-body{width:100%;padding:36px 28px}.duet-modal-body.duet-modal-gutter-small{padding:36px 20px}.duet-modal-body.duet-modal-gutter-large{padding:48px 36px}@media (max-width: 22.5em){.duet-modal-body{padding:36px 20px}.duet-modal-body.duet-modal-gutter-large{padding:48px 28px}}@media (max-width: 35.9375em){.duet-modal-body{padding:36px 20px}.duet-modal-body.duet-modal-gutter-large{padding:48px 36px}}@media (min-width: 36em){.duet-modal-body{padding:36px}.duet-modal-body.duet-modal-gutter-large{padding:28px 72px}}@media (min-width: 48em){.duet-modal-body{padding:36px 72px}.duet-modal-body.duet-modal-gutter-large{padding:36px 72px}}@media (min-width: 76.25em){.duet-modal-body{padding:36px 48px 48px}.duet-modal-body.duet-modal-gutter-large{padding:48px 94px}.small .duet-modal-body{padding:36px 48px}}.duet-modal-header{text-align:center}.duet-modal-close{position:absolute;top:12px;right:12px}.duet-modal-heading{width:100%;padding-right:60px;overflow:hidden;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1.25rem;font-style:normal;font-weight:600;font-variant-numeric:tabular-nums;line-height:1.25;color:#00294d;text-decoration:none;text-overflow:ellipsis;letter-spacing:-0.01rem;white-space:nowrap}.duet-modal-heading.duet-p-0{padding:0 !important}.duet-modal-heading.duet-m-0{margin:0 !important}'}}]);