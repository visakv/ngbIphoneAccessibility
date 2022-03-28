"use strict";(self.webpackChunkduet_angular_template=self.webpackChunkduet_angular_template||[]).push([[351],{5351:(p,n,a)=>{a.r(n),a.d(n,{duet_notification:()=>s,duet_notification_drawer:()=>l});var o=a(5861),e=a(202),r=a(3025),d=a(682),u=a(6301);a(3026);let s=class{constructor(t){(0,e.r)(this,t),this.language=(0,r.a)(),this.accessibleLabelUnreadDefaults={en:"Unread",fi:"Lukematon",sv:"Ol\xe4st"},this.accessibleLabelUnread=(0,r.g)(this.accessibleLabelUnreadDefaults,this.language),this.url="#",this.date="",this.highlight=!1,this.external=!1,this.theme=""}componentWillLoad(){(0,d.i)(this)}setFocus(t){var i=this;return(0,o.Z)(function*(){i.linkElement.focus(t)})()}render(){return(0,e.h)("div",{role:"listitem",class:{"duet-notification":!0,"duet-notification-highlight":this.highlight,"duet-theme-turva":"turva"===this.theme}},(0,e.h)("a",{ref:t=>this.linkElement=t,href:this.url,target:this.external?"_blank":"_self"},(0,e.h)("div",{class:"duet-notification-container"},(0,e.h)("div",{class:"duet-notification-badge-container"},this.highlight&&(0,e.h)("div",{class:"duet-notification-badge"},(0,e.h)("duet-visually-hidden",null,this.accessibleLabelUnread,":"))),(0,e.h)("div",{class:"duet-notification-content"},(0,e.h)("slot",null)),(0,e.h)("div",{class:"duet-notification-date"},this.date))))}get element(){return(0,e.g)(this)}};s.style="*,*::after,*::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}:host{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;display:block;width:100%}.duet-notification{display:block;padding:16px;color:#00294d;cursor:pointer;border-bottom:1px solid #e1e3e6;transition:300ms ease}:host(:last-of-type) .duet-notification{border-bottom:0}.duet-notification.duet-theme-turva{color:#171c3a;border-bottom-color:#e4e4e6}.duet-notification.duet-notification-highlight{font-weight:600;background:#f3f9fc}.duet-notification.duet-notification-highlight.duet-theme-turva{background:#fcf3f4}@media (min-width: 62em){.duet-notification:hover{background:#f3f9fc}.duet-notification:hover.duet-theme-turva{background:#fcf3f4}}.duet-notification a{text-decoration:none}.duet-notification a:focus{outline:0}:host(.user-is-tabbing) .duet-notification:focus-within{z-index:1;box-shadow:0 0 0 4px rgba(0, 119, 179, 0.3), 0 0 0 1px #0077b3}:host(.user-is-tabbing) .duet-notification:focus-within.duet-theme-turva{box-shadow:0 0 0 4px rgba(23, 28, 58, 0.2), 0 0 0 1px #171c3a}.duet-notification-container{position:relative;display:flex}.duet-notification-badge-container{position:relative;width:16px}.duet-notification-badge{position:absolute;top:6px;left:-2px;width:8px;height:8px;background:#0077b3;border-radius:50%}.duet-theme-turva .duet-notification-badge{background:#c60c30}.duet-notification-content{flex:1}.duet-notification-date{position:absolute;top:2px;right:0;width:96px;font-size:0.75rem;font-weight:600;line-height:1.25;color:#657787;text-align:right;text-transform:uppercase}@media (max-width: 35.9375em){.duet-notification-date{width:auto}}.duet-theme-turva .duet-notification-date{color:#444445}::slotted(duet-heading){padding-right:80px !important}::slotted(duet-paragraph){margin-bottom:2px !important}";let l=class{constructor(t){(0,e.r)(this,t),this.isOpen=!1,this.icon="",this.label="Label",this.language=(0,r.a)(),this.accessibleLabelNotificationsDefaults={en:"No notifications",fi:"Ei ilmoituksia",sv:"Inga notifikationer"},this.accessibleLabelNotifications=(0,r.g)(this.accessibleLabelNotificationsDefaults),this.badge=!1,this.theme="",this.direction="left",this.handleKeyDown=i=>{this.isOpen&&27===i.keyCode&&this.close()},this.toggleMenu=i=>{i.stopPropagation(),this.isOpen?this.close():this.open()},this.updateNotificationState=()=>{this.hasNotifications=this.element.children.length>0}}componentWillLoad(){(0,d.i)(this),this.updateNotificationState()}connectedCallback(){this.observer=new MutationObserver(this.updateNotificationState),this.observer.observe(this.element,{childList:!0})}disconnectedCallback(){this.observer.disconnect(),this.observer=null}handleClickFocusOutside(t){this.isOpen&&!this.element.contains(t.target)&&this.close(!1)}setFocus(t){var i=this;return(0,o.Z)(function*(){i.drawerButtonEl.focus(t)})()}open(){var t=this;return(0,o.Z)(function*(){const i=t.element.closest("duet-header");i&&i.closeMenus(),t.isOpen=!0,t.drawerContentEl.scrollTop=0})()}close(t=!0){var i=this;return(0,o.Z)(function*(){i.isOpen=!1,t&&i.setFocus({preventScroll:!0})})()}render(){return(0,e.h)("div",{class:{"duet-drawer":!0,"duet-theme-turva":"turva"===this.theme},onKeyDown:this.handleKeyDown},(0,e.h)("button",{ref:t=>this.drawerButtonEl=t,type:"button",class:"duet-drawer-toggle",id:"duet-drawer-toggle","aria-controls":"duet-drawer-content","aria-expanded":this.isOpen?"true":"false",onClick:this.toggleMenu},this.icon&&(0,e.h)("div",{class:"duet-drawer-icon"},(0,e.h)("duet-icon",{margin:"none",size:"x-small",name:this.icon,color:"currentColor"}),this.badge&&(0,e.h)("div",{class:"duet-drawer-badge"})),(0,e.h)("span",{class:"duet-drawer-label"},this.label),(0,e.h)("div",{class:"duet-drawer-caret"},(0,e.h)("duet-icon",{margin:"none",size:"auto",icon:u.a.svg,color:"currentColor"}))),(0,e.h)("div",{id:"duet-drawer-content",class:{"duet-drawer-content":!0,"duet-drawer-right":"right"===this.direction,"duet-drawer-left":"left"===this.direction,"duet-drawer-open":this.isOpen},ref:t=>this.drawerContentEl=t},this.hasNotifications?(0,e.h)("div",{role:"list"},(0,e.h)("slot",null)):(0,e.h)("duet-empty-state",{size:"small"},(0,e.h)("duet-paragraph",{size:"small",margin:"none"},this.accessibleLabelNotifications))))}get element(){return(0,e.g)(this)}};l.style='*,*::after,*::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}:host{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;display:block;width:100%}.duet-drawer{position:relative}@media (min-width: 62em){.duet-drawer{display:inline-block}}.duet-drawer-toggle{position:relative;display:flex;align-items:center;width:100%;height:48px;padding:0 20px;overflow:hidden;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;font-variant-numeric:tabular-nums;line-height:48px;color:#00294d;text-align:left;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;background-color:white;border-bottom:1px solid #e1e3e6;border-radius:0;-webkit-appearance:none;appearance:none}@media (min-width: 62em){.duet-drawer-toggle{z-index:200;width:auto;max-width:200px;padding:0 30px 0 12px;overflow:hidden;font-size:0.875rem;line-height:4rem;border:0;border-radius:4px;transition:border 300ms ease}}.duet-theme-turva .duet-drawer-toggle{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a;background-color:white;border-color:#e4e4e6}.duet-drawer-toggle:active{opacity:0.75}.duet-drawer-toggle:focus{outline:0}:host(.user-is-tabbing) .duet-drawer-toggle:focus{box-shadow:0 0 0 4px rgba(0, 119, 179, 0.3), 0 0 0 1px #0077b3}:host(.user-is-tabbing) .duet-theme-turva .duet-drawer-toggle:focus{box-shadow:0 0 0 4px rgba(23, 28, 58, 0.2), 0 0 0 1px #171c3a}.duet-drawer-toggle:hover{color:#004d80}.duet-theme-turva .duet-drawer-toggle:hover{color:#444445}.duet-drawer-toggle::after{display:none !important}@media (min-width: 62em){.duet-drawer-toggle::after{position:absolute;top:auto;bottom:0;left:0;display:block !important;width:100%;height:3px;content:"";background:#0077b3;transition:300ms ease;transform:translateY(3px)}.duet-theme-turva .duet-drawer-toggle::after{background:#c60c30}}.duet-drawer-toggle[aria-expanded=true],.duet-drawer-toggle[aria-expanded=true]:hover{color:#004d80;border-bottom:1px solid #f5f8fa;border-radius:0}.duet-theme-turva .duet-drawer-toggle[aria-expanded=true],.duet-theme-turva .duet-drawer-toggle[aria-expanded=true]:hover{color:#444445;border-color:#f5f5f7}@media (min-width: 62em){.duet-drawer-toggle[aria-expanded=true],.duet-drawer-toggle[aria-expanded=true]:hover{border:0}.duet-drawer-toggle[aria-expanded=true]::after,.duet-drawer-toggle[aria-expanded=true]:hover::after{left:0;width:100%;transform:translateY(0)}}.duet-drawer-icon{position:relative;display:inline-flex;min-width:12px;margin-right:12px;font-size:0;line-height:normal;vertical-align:baseline}@media (min-width: 62em){.duet-drawer-icon{margin-right:8px}}.duet-drawer-label{line-height:1}.duet-drawer-caret{position:absolute;top:50%;right:20px;display:flex;width:10px;height:10px;margin-left:8px;line-height:normal;pointer-events:none;transition:300ms ease;transform:translateY(-50%);transform-origin:50% 50%}@media (min-width: 62em){.duet-drawer-caret{right:16px;width:7px;height:7px}}.duet-drawer-caret duet-icon{width:10px}.duet-drawer-toggle[aria-expanded=true] .duet-drawer-caret{transform:translateY(-50%) rotate(180deg)}.duet-drawer-badge{position:absolute;top:0;right:0;display:inline-block;width:6px;height:6px;background:#f7b228;border-radius:50%;box-shadow:0 0 0 1px #c18b1f}.duet-theme-turva .duet-drawer-badge{background:#faa40f}.duet-drawer-content{display:none;background-color:white;border-bottom:1px solid #e1e3e6}.duet-drawer-content:focus{outline:0}.duet-theme-turva .duet-drawer-content{background-color:white;border-color:#e1e3e6}@media (min-width: 62em){.duet-drawer-content{position:absolute;top:100%;z-index:600;display:block;width:450px;max-height:420px;padding-left:0;overflow-y:auto;visibility:hidden;background-color:white;border:1px solid #e1e3e6;border-radius:4px;border-top-left-radius:0;border-top-right-radius:0;box-shadow:0 4px 10px 0 rgba(0, 41, 77, 0.15);opacity:0;transition:300ms ease;transform:scale(0.95) translateZ(0) translateY(-10px);transform-origin:50% 0;scrollbar-width:none}.duet-drawer-content::-webkit-scrollbar{display:none}.duet-theme-turva .duet-drawer-content{background-color:white}.duet-drawer-content.duet-drawer-left{right:0}.duet-drawer-content.duet-drawer-right{left:0}}.duet-drawer-content.duet-drawer-open{display:block}@media (min-width: 62em){.duet-drawer-content.duet-drawer-open{visibility:visible;opacity:1;transform:scale(1) translateZ(0) translateY(0)}}'}}]);