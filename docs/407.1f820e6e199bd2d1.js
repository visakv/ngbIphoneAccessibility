"use strict";(self.webpackChunkduet_angular_template=self.webpackChunkduet_angular_template||[]).push([[407],{3407:(y,b,r)=>{r.r(b),r.d(b,{duet_scrollable:()=>h,duet_tab:()=>p,duet_tab_group:()=>m});var l=r(5861),i=r(3671),c=r(290),u=r(3838),g=r(6065),d=r(8369);r(3995);const h=class{constructor(t){(0,i.r)(this,t),this.currentIndex=0,this.tabListElement=void 0,this.tabListClass="duet-scrollable-list",this.tablistAtStart=!0,this.isTabContentSmallerThanWrapper=!1,this.tablistAtEnd=!1,this.childrenData={},this.resizeObserver=new ResizeObserver(e=>{var a,o,s,n;if(1===(null==e?void 0:e.length)){const x=null===(o=null===(a=e[0])||void 0===a?void 0:a.target)||void 0===o?void 0:o.getBoundingClientRect().width,_=null===(n=null===(s=e[0])||void 0===s?void 0:s.target)||void 0===n?void 0:n.scrollWidth;this.isTabContentSmallerThanWrapper=_>x+5}}),this.theme="",this.identifier="",this.selected=0}watchPropHandler(t){this.scrollToTab(t,"center")}componentWillLoad(){(0,c.i)(this);const t=this.host.children;this.childrenData={hasChildren:t&&t.length>0,numberOfChildren:t&&t.length}}componentDidLoad(){this.resizeObserver.observe(this.tabListElement)}disconnectedCallback(){this.resizeObserver.disconnect()}getLastVisibleElement(){const t=this.tabListElement.clientWidth;return Array.from(this.host.querySelectorAll("button")).findIndex(a=>a.getBoundingClientRect().x>t)}getFirstVisibleElement(){const t=this.host.querySelectorAll("button");return Array.from(t).map(o=>o.getBoundingClientRect().x-o.getBoundingClientRect().width).findIndex(o=>o>0)}updateScrollButtons(t=this.tabListElement){t.scrollLeft<=0?this.tablistAtStart=!0:t.scrollLeft>0&&(this.tablistAtStart=!1),t.clientWidth+t.scrollLeft+10>=t.scrollWidth?this.tablistAtEnd=!0:t.clientWidth+t.scrollLeft+10<t.scrollWidth&&(this.tablistAtEnd=!1)}scrollToTab(t=this.currentIndex,e){if(!this.childrenData.hasChildren)return;t+1>=this.childrenData.numberOfChildren&&(t=this.childrenData.numberOfChildren-1),t<0&&(t=0);const a=this.host.querySelectorAll("button");let o=a[0].getBoundingClientRect().x,s=5;const n=()=>{if(a[0].getBoundingClientRect().x===o){if(s--,0!==s)return void window.requestAnimationFrame(n);this.updateScrollButtons()}else window.requestAnimationFrame(n),o=a[0].getBoundingClientRect().x};a[t].scrollIntoView({behavior:"smooth",inline:e}),window.requestAnimationFrame(n)}scrollLeft(){this.tablistAtEnd=!1;const t=this.getFirstVisibleElement()-1;this.scrollToTab(t,"center")}scrollRight(){this.tablistAtStart=!1;const t=this.getLastVisibleElement()+1;this.scrollToTab(t,"center")}render(){return(0,i.h)(i.H,{class:{"duet-theme-turva":"turva"===this.theme,"duet-theme-default":"default"===this.theme}},(0,i.h)("div",{class:"duet-scrollable-items"},(0,i.h)("button",{part:`${this.identifier}-button-left`,"aria-hidden":"true",class:{"duet-scrollable-button":!0,"duet-scrollable-button--left":!0,"duet-scrollable-button--occluded":!this.isTabContentSmallerThanWrapper},onClick:()=>this.scrollLeft(),disabled:this.tablistAtStart,tabindex:"-1"},(0,i.h)("duet-icon",{name:"action-arrow-left-small",size:"small",margin:"none"})),(0,i.h)("div",{class:this.tabListClass,onScroll:()=>this.updateScrollButtons(),ref:t=>this.tabListElement=t},(0,i.h)("slot",null)),(0,i.h)("button",{part:`${this.identifier}-button-right`,"aria-hidden":"true",class:{"duet-scrollable-button":!0,"duet-scrollable-button--right":!0,"duet-scrollable-button--occluded":!this.isTabContentSmallerThanWrapper},onClick:()=>this.scrollRight(),disabled:this.tablistAtEnd,tabindex:"-1"},(0,i.h)("duet-icon",{name:"action-arrow-right-small",size:"small",margin:"none"}))))}get host(){return(0,i.g)(this)}static get watchers(){return{selected:["watchPropHandler"]}}};h.style="*,*::after,*::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}:host{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent}:host{position:relative !important}:host .duet-scrollable-items{display:flex}:host .duet-scrollable-items .duet-scrollable-button{position:relative;flex:0 0 auto;flex-basis:40px;padding:10px;cursor:pointer}:host .duet-scrollable-items .duet-scrollable-button:active{transform:scale(0.8)}:host .duet-scrollable-items .duet-scrollable-button--left{left:-12px}:host .duet-scrollable-items .duet-scrollable-button--right{right:-12px}:host .duet-scrollable-items .duet-scrollable-button--occluded{display:none}:host .duet-scrollable-items .duet-scrollable-list{display:flex;flex-wrap:nowrap;gap:20px;padding-top:2px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;scroll-snap-type:x mandatory;scroll-behavior:smooth;scroll-margin:0 20px;-ms-overflow-style:-ms-autohiding-scrollbar;-webkit-overflow-scrolling:touch;}:host .duet-scrollable-items .duet-scrollable-list::-webkit-scrollbar{display:none}::slotted(*){scroll-snap-align:center;margin-left:0;-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out}";const p=class{constructor(t){(0,i.r)(this,t),this.accessibleDescriptionDefault=null,this.accessibleDescription=this.accessibleDescriptionDefault?(0,u.g)(this.accessibleDescriptionDefault):null}render(){return(0,i.h)("div",{role:"tabpanel",class:{"duet-tab":!0,selected:this.selected},"aria-description":this.accessibleDescription},(0,i.h)("slot",null))}};p.style=".sc-duet-tab-h{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;display:block;width:100%}.duet-tab.sc-duet-tab{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;display:none;width:100%}.duet-tab.selected.sc-duet-tab{display:block}";const m=class{constructor(t){(0,i.r)(this,t),this.duetChange=(0,i.c)(this,"duetChange",3),this.duetTabChange=(0,i.c)(this,"duetTabChange",7),this.id=(0,g.c)("DuetTabGroup"),this.tabs=[],this.selected=0,this.theme="",this.scrolls=!1,this.collapses=!0,this.accessibleLabel=void 0,this.variation="default",this.language=(0,u.a)(),this.labelDefaults={fi:"Valitse",en:"Choose",sv:"V\xe4lj"},this.label=(0,u.g)(this.labelDefaults,this.language),this.labelHidden=!0,this.identifier=this.id,this.margin="auto",this.padding="auto",this.handleKeyDown=e=>{let a;(0,d.d)(e)||(0,d.b)(e)?a=e.target.previousElementSibling:((0,d.a)(e)||(0,d.c)(e))&&(a=e.target.nextElementSibling),a&&(e.preventDefault(),a.click(),a.focus())},this.renderTab=()=>{const e=this.tabs.map((a,o)=>(0,i.h)("button",{role:"tab",id:this.getButtonId(o),"aria-controls":this.getTabId(o),"aria-selected":a.selected?"true":"false","aria-description":this.getAccessibleDescription(o),tabindex:0===o?"0":"-1",part:`${this.identifier}-button ${a.selected?`${this.identifier}-button--selected`:""}`,type:"button",class:{"duet-p-0":"none"===this.padding,"duet-tab-button":!0,selected:a.selected},onClick:()=>this.openTab(o),onKeyDown:s=>this.handleKeyDown(s)},a.label));return this.scrolls?(0,i.h)("duet-scrollable",{selected:this.selected,identifier:this.identifier},e):e}}connectedCallback(){var t=this;return(0,l.Z)(function*(){"undefined"!=typeof MutationObserver&&(t.mutationO=new MutationObserver(()=>{t.updateTabs()}),t.mutationO.observe(t.element,{attributes:!0,attributeFilter:["label"],childList:!0,characterData:!0,subtree:!0})),yield t.updateTabs()})()}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentWillLoad(){(0,c.i)(this)}openTab(t){var e=this;return(0,l.Z)(function*(){if(t>=e.tabs.length)throw new Error(`[duet-tabs] Index ${t} is out of bounds of tabs length`);e.selected=t,e.tabs.forEach((o,s)=>{o.selected=s===t});const a={value:t,component:"duet-tab-group"};e.duetChange.emit(a),e.duetTabChange.emit(a)})()}refresh(){return(0,l.Z)(function*(){console.log("[duet-tabs] Refresh method is deprecated and will be removed in the future version.")})()}getTabs(){const e=Array.from(this.element.querySelectorAll("duet-tab")).filter(a=>a.closest("duet-tab-group")===this.element);if(0===e.length)throw new Error("[duet-tabs] Must have at least one tab");return e}getButtonId(t){return`${this.id}-button-${t}`}getTabId(t){return`${this.id}-tab-${t}`}getAccessibleDescription(t){return this.tabs[t].getAttribute("accessible-description")||null}updateTabs(){var t=this;return(0,l.Z)(function*(){t.tabs=t.getTabs(),t.tabs.forEach((e,a)=>{e.id=t.getTabId(a),e.setAttribute("aria-labelledby",t.getButtonId(a)),e.selected&&(t.selected=a)})})()}render(){return(0,i.h)("div",{class:{"duet-tab-group":!0,"duet-theme-turva":"turva"===this.theme,[`duet-tab-variation-${this.variation}`]:!0,"duet-tab-group-scrolls":this.scrolls,"duet-tab-group-collapses":this.collapses},"aria-label":this.accessibleLabel},this.tabs.length>3&&this.collapses&&(0,i.h)("duet-select",{value:this.selected.toString(),expand:!0,label:this.label,labelHidden:this.labelHidden,theme:this.theme,onDuetChange:t=>this.openTab(Number(t.detail.value)),items:this.tabs.map((t,e)=>({label:t.label,value:e.toString()}))}),(0,i.h)("div",{role:"tablist",class:{"duet-m-0":"none"===this.margin,"duet-tab-group-tabs":!0,"duet-tab-group-hidden":this.tabs.length>3,"duet-tab-group-collapses":this.collapses}},this.renderTab()),(0,i.h)("div",{role:"tabpanel",tabindex:"0",class:{"duet-tab-group-content":!0,"duet-m-0":"none"===this.margin}},(0,i.h)("slot",null)))}get element(){return(0,i.g)(this)}};m.style='*,*::after,*::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}:host{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;display:block;width:100%}.duet-tab-group-tabs{margin-bottom:28px !important;display:block;width:100%;max-width:100%;padding-top:2px;list-style:none}.duet-tab-group-tabs.duet-m-0{margin:0 !important}.duet-tab-group-tabs.duet-tab-group-collapses.duet-tab-group-hidden{display:none}@media (min-width: 36em){.duet-tab-group-tabs.duet-tab-group-collapses.duet-tab-group-hidden{display:block}}.duet-tab-variation-plain .duet-tab-group-tabs{border-bottom:1px solid #e1e3e6}.duet-theme-turva.duet-tab-variation-plain .duet-tab-group-tabs{border-bottom-color:#e4e4e6}@media (min-width: 36em){duet-select{display:none !important}}.duet-tab-button{-webkit-user-select:none;user-select:none;position:relative;z-index:100;display:block;width:100%;padding:20px;margin-top:-2px;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:600;line-height:1.1;color:#00294d;text-align:left;text-decoration:none;cursor:pointer;background:white;border:2px solid #e1e3e6;border-radius:0;transition:150ms ease}.duet-tab-button.duet-p-0{padding:0 !important}.duet-tab-button.duet-m-0{margin:0 !important}.duet-theme-turva .duet-tab-button{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a;border-color:#e4e4e6}.duet-tab-button.duet-p-0{padding:0 !important}@media (min-width: 36em){.duet-tab-button{display:inline-block;width:auto;margin-left:-2px;border-right:2px solid #e1e3e6;border-radius:0}}.duet-tab-button:hover{z-index:200;border-color:#909599}.duet-theme-turva .duet-tab-button:hover{border-color:#747475}.duet-tab-button:active{opacity:0.75;transition:none}.duet-tab-button.selected{z-index:201;color:white;background:#00294d;border-color:#00294d;outline:0;box-shadow:none !important}.duet-theme-turva .duet-tab-button.selected{color:white;background-color:#171c3a;border-color:#171c3a}.duet-tab-button:focus{z-index:200;outline:0}:host(.user-is-tabbing) .duet-tab-button:focus{box-shadow:0 0 0 4px rgba(0, 119, 179, 0.3), 0 0 0 1px #0077b3 !important}:host(.user-is-tabbing) .duet-theme-turva .duet-tab-button:focus{box-shadow:0 0 0 4px rgba(23, 28, 58, 0.2), 0 0 0 1px #171c3a !important}.duet-tab-button:first-child{border-top-left-radius:4px;border-top-right-radius:4px}@media (min-width: 36em){.duet-tab-button:first-child{border-top-right-radius:0;border-bottom-left-radius:4px}}.duet-tab-button:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}@media (min-width: 36em){.duet-tab-button:last-child{border-radius:0;border-top-right-radius:4px;border-bottom-right-radius:4px}}.duet-tab-variation-plain .duet-tab-button{display:inline-block;width:auto;padding-right:0;padding-left:0;border:0;border-radius:0;transition:none}.duet-tab-variation-plain .duet-tab-button+.duet-tab-button{margin-left:36px}.duet-tab-variation-plain .duet-tab-button.selected{color:#0077b3;background:white;border-bottom:3px solid #0077b3}.duet-theme-turva.duet-tab-variation-plain .duet-tab-button.selected{color:#c60c30;border-bottom-color:#c60c30}.duet-tab-group-content{position:relative;width:100%;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#00294d;text-align:left}.duet-theme-turva .duet-tab-group-content{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a}'}}]);