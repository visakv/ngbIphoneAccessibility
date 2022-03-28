"use strict";(self.webpackChunkduet_angular_template=self.webpackChunkduet_angular_template||[]).push([[40],{8040:(N,_,p)=>{p.r(_),p.d(_,{duet_editable_table:()=>T,duet_table:()=>w,duet_upload:()=>z});var y=p(5861),a=p(202),v=p(7226),F=p(6712),r=p(3025),E=p(682),m=p(8256),D=p(6065);p(3026);const C=({data:s,groupId:t,alignment:e},i)=>{const l=`duet-editable-table duet-editable-table-content-${t}`;return"string"==typeof s?(0,a.h)("td",{innerHTML:s,class:l,part:`${t}content`,style:{verticalAlign:e}}):(0,a.h)("td",{class:l,part:`${t}content`,style:{verticalAlign:e}},s)};let T=class{constructor(s){(0,a.r)(this,s),this.duetTableToggle=(0,a.c)(this,"duetTableToggle",7),this.duetMenuClick=(0,a.c)(this,"duetMenuClick",7),this.margin="auto",this.variation="striped",this.sticky=!1,this.stickyDistance="with-links",this.breakpoint="small",this.actions=void 0,this.columns=void 0,this.rows=void 0,this.sortable=!1,this.groupId="",this.theme="",this.accessibleRole=void 0,this.sortableDefaultLabel={fi:"J\xe4rjest\xe4",en:"Click to sort",sv:"Klicka f\xf6r att sortera"},this.actionColumnLabel={en:"Actions for rows",fi:"Toiminnot rivill\xe4",sv:"\xc5tg\xe4rder f\xf6r rader"},this.toggleColumn=(t,e)=>{e.preventDefault();const{sort_order:i,direction:l,index:o,key:n}=t;this.duetTableToggle.emit({sort_order:i,index:o,direction:l,key:n,component:"duet-editable-table",originalEvent:e})},this.handleKeyDown=(t,e)=>{(0,F.i)(e)&&this.toggleColumn(t,e)}}componentWillLoad(){(0,E.i)(this)}createLabel(s){const{sort_order:t,direction:e,index:i,label:l}=s,o=(0,r.g)(l);return this.sortable?(0,a.h)("span",{class:"duet-table-label","data-index":i},(0,a.h)("duet-button",{size:"small",icon:t&&1===e?"action-arrow-down-small":t&&-1===e?"action-arrow-up-small":"action-subtract-small","icon-size":"medium-small","accessible-label":(0,r.g)(this.sortableDefaultLabel),variation:"plain",margin:"none","icon-right":!0,onClick:d=>this.toggleColumn(s,d),onKeyDown:d=>this.handleKeyDown(s,d)},o)):o}getSortedColumns(){return[...this.columns].sort((0,v.f)(["index"]))}getRowSortOrder(){return[...this.columns].sort((0,v.f)(["sort_order"])).filter(t=>t.sort_order).map(t=>-1===t.direction?`-${t.key}`:t.key)}renderTableHeader(){if(!this.columns)return;const s=this.getSortedColumns();return(0,a.h)("tr",{class:{"duet-table-action-header":!!this.actions}},s.map(t=>{if(!1!==t.display)return(0,a.h)("th",{scope:"col"},this.createLabel(t))}),this.actions&&(0,a.h)("th",{scope:"col",class:"duet-table-action-header-heading"},this.actions&&(0,a.h)("duet-visually-hidden",null,(0,r.g)(this.actionColumnLabel))))}renderActions(s,t){if(this.actions)return(0,a.h)("td",{class:"duet-text-right"},this.actions.map(e=>(0,a.h)("duet-action-button",{actionMeta:Object.assign({},(null==s?void 0:s.meta)||{},{index:t}),actionId:(null==s?void 0:s.uid)||(null==s?void 0:s.id)||null,actionName:e.name,theme:this.theme,iconName:e.icon,iconColor:e.color,iconSize:e.size,background:e.background})))}renderTableBody(){const s=this.getSortedColumns(),t=this.getRowSortOrder();return[...this.rows].sort((0,v.f)(t)).map((i,l)=>(0,a.h)("tr",{class:{"duet-table-action-row":!!this.actions,"duet-editable-table-row":!0,[`duet-editable-table-row-${this.groupId}`]:!0},"data-meta":JSON.stringify(i.meta)},s.map(o=>{if(!1!==o.display)return(0,a.h)(C,{data:i[o.key]?i[o.key]:i.item,groupId:this.groupId})}),this.actions&&this.renderActions(i,l)))}render(){return(0,a.h)(a.H,{class:{[`duet-editable-table-${this.variation}`]:!0,[`duet-editable-table-${this.theme}`]:!0,"duet-editable-table-scrollable":"none-scrollable"===this.breakpoint,"duet-editable-table-sortable":this.sortable,"duet-editable-table-actions":!!this.actions,"duet-m-0":"none"===this.margin,"duet-theme-turva":"turva"===this.theme}},(0,a.h)("duet-table",{sticky:this.sticky,stickyDistance:this.stickyDistance,margin:this.margin,theme:this.theme,variation:this.variation,breakpoint:this.breakpoint},(0,a.h)("table",{role:this.accessibleRole},(0,a.h)("caption",null,(0,a.h)("slot",{name:"tcaption"})),(0,a.h)("thead",null,(0,a.h)("tr",null,(0,a.h)("td",{class:"duet-editable-table-actions-menu",colSpan:99},(0,a.h)("slot",{name:"thead-first"}))),this.renderTableHeader(),(0,a.h)("tr",null,(0,a.h)("td",{class:"duet-editable-table-actions-menu",colSpan:99},(0,a.h)("slot",{name:"thead-last"})))),(0,a.h)("tbody",null,this.renderTableBody()),(0,a.h)("tfoot",null,(0,a.h)("tr",null,(0,a.h)("th",{class:"duet-editable-table-footer-menu",colSpan:99},(0,a.h)("slot",{name:"tfoot"})))))))}get element(){return(0,a.g)(this)}};T.style=".sc-duet-editable-table-h{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}.duet-editable-table-actions-menu.sc-duet-editable-table{position:relative;padding:0 !important;margin:0}.duet-editable-table-actions-menu-button.sc-duet-editable-table{position:relative;right:-16px;float:right;padding:0}.duet-editable-table-actions-menu-icon.sc-duet-editable-table .duet-icon.sc-duet-editable-table{max-width:16px;max-height:16px}.duet-editable-table-row.duet-table-action-row.sc-duet-editable-table .duet-text-right.sc-duet-editable-table{text-align:right}.duet-editable-table-header.sc-duet-editable-table tr.sc-duet-editable-table .duet-editable-table-header-hidden.sc-duet-editable-table{padding:0 !important;font-size:0;border-bottom:0}";const x=s=>s.substring(1,s.length-1),A={none:"all","none-scrollable":"all",small:x(m.l),medium:x(m.m),large:x(m.h),"x-large":x(m.i),"xx-large":x(m.j),"xxx-large":x(m.k)},B={none:0,"with-links":16*parseFloat(m.n),"without-links":16*parseFloat(m.s)};let w=class{constructor(s){(0,a.r)(this,s),this.matchesBreakpoint=!0,this.margin="auto",this.variation="striped",this.sticky=!1,this.stickyDistance="with-links",this.breakpoint="small",this.handleMediaQueryChange=t=>{this.matchesBreakpoint=t.matches}}connectedCallback(){this.mq=matchMedia(A[this.breakpoint]),this.mq.addEventListener("change",(0,v.d)(this.handleMediaQueryChange,50)),this.handleMediaQueryChange(this.mq),this.observer=new MutationObserver(()=>(0,v.d)(this.copyHeadingsToCells(),50)),this.observer.observe(this.element,{childList:!0,subtree:!0})}componentWillLoad(){if((0,E.i)(this),this.copyHeadingsToCells(),this.sticky&&"none-scrollable"===this.breakpoint&&console.warn('[DUET WARNING]: sticky and breakpoint="none-scrollable" are incompatible. Scrollable takes precedence'),this.sticky){const s=B[this.stickyDistance];this.element.querySelectorAll("thead th").forEach(e=>e.style.top=`${s}px`)}}componentDidLoad(){this.observer.takeRecords()}disconnectedCallback(){this.observer.disconnect(),this.observer=null,this.mq.removeListener(this.handleMediaQueryChange),this.mq=null,this.matchesBreakpoint=!0}copyHeadingsToCells(){const s=this.element.querySelectorAll("thead th"),t=this.element.querySelectorAll("tbody tr"),e=Array.from(s).map(i=>i.textContent.trim());t.forEach(i=>{i.querySelectorAll("td").forEach((l,o)=>{e[o]&&(l.dataset.heading=e[o])})})}render(){return(0,a.h)(a.H,{class:{[`duet-table-${this.variation}`]:!0,"duet-table-flattened":!this.matchesBreakpoint,"duet-table-sticky":this.matchesBreakpoint&&this.sticky,"duet-table-scrollable":"none-scrollable"===this.breakpoint,"duet-m-0":"none"===this.margin,"duet-theme-turva":"turva"===this.theme}},(0,a.h)("slot",null))}get element(){return(0,a.g)(this)}};w.style='duet-table{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;margin-bottom:20px !important;display:block;font-variant-numeric:tabular-nums}duet-table table,duet-table thead,duet-table tbody,duet-table tfoot,duet-table th,duet-table td,duet-table tr{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}duet-table.duet-m-0{margin:0 !important}duet-table table{width:100%;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;text-align:left;border-spacing:0;border-collapse:separate}duet-table.duet-theme-turva table{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}duet-table td{-webkit-hyphens:auto;hyphens:auto;color:#00294d}duet-table.duet-theme-turva td{color:#171c3a}duet-table th{font-weight:600;line-height:1.25;color:#657787;text-align:left}duet-table.duet-theme-turva th{color:#747475}duet-table tbody th{font-weight:600;color:#00294d}duet-table.duet-theme-turva tbody th{color:#171c3a}duet-table .duet-table-action-row td:last-child{justify-self:end;padding-right:20px !important;white-space:nowrap}.duet-table-flattened tbody tr{display:grid;grid-template-columns:repeat(2, 1fr);grid-auto-rows:auto;gap:10px}.duet-table-flattened tbody tr.duet-table-action-row td:last-child::before{padding:0;content:""}.duet-table-flattened thead tr{position:absolute !important;top:0;width:1px !important;height:1px !important;padding:0 !important;overflow:hidden !important;clip:rect(1px, 1px, 1px, 1px) !important;border:0 !important}.duet-table-flattened td{grid-column:1/2;line-height:1.25}.duet-table-flattened td:not(:last-child){margin-bottom:16px !important}.duet-table-flattened td:first-child{grid-row:1;grid-column:1}.duet-table-flattened td:last-child{grid-row:1;grid-column:2}.duet-table-flattened tbody td,.duet-table-flattened tbody th,.duet-table-flattened tfoot td{padding:0 !important;text-align:left !important}.duet-table-flattened tbody th{font-weight:600;line-height:1.25;color:#657787;text-align:left}.duet-table-flattened td[data-heading]::before{margin-bottom:4px !important;display:block;font-size:1rem;font-weight:600;color:#00294d;content:attr(data-heading)}.duet-table-flattened.duet-theme-turva td[data-heading]::before{color:#171c3a}.duet-table-sticky thead th{position:sticky;top:0;background:white}.duet-table-striped td,.duet-table-striped th{padding:20px !important}@media (max-width: 35.9375em){.duet-table-striped td,.duet-table-striped th{padding:20px 12px !important}}.duet-table-striped tbody th{background:white}.duet-table-striped.duet-table-sticky thead th{border-bottom:1px solid #e1e3e6}.duet-table-striped.duet-table-sticky.duet-theme-turva thead th{border-bottom-color:#e4e4e6}.duet-table-striped tbody:not(:first-of-type) th{padding-top:40px !important}.duet-table-striped tbody:only-of-type tr:nth-of-type(odd){background:rgba(0, 80, 128, 0.04)}.duet-table-striped.duet-theme-turva tbody:only-of-type tr:nth-of-type(odd){background:rgba(23, 28, 58, 0.04)}.duet-table-striped tbody:not(:only-of-type) tr:nth-of-type(even){background:rgba(0, 80, 128, 0.04)}.duet-table-striped.duet-theme-turva tbody:not(:only-of-type) tr:nth-of-type(even){background:rgba(23, 28, 58, 0.04)}.duet-table-striped tfoot td{border-top:1px solid #e1e3e6}.duet-table-striped.duet-theme-turva tfoot td{border-top-color:#e4e4e6}.duet-table-striped.duet-table-flattened tbody:not(:first-of-type) th{padding-top:20px !important}.duet-table-striped.duet-table-flattened tr{padding:20px !important}.duet-table-striped.duet-table-flattened tfoot td{border-top:0}.duet-table-striped.duet-table-flattened tfoot tr{border-top:1px solid #e1e3e6}.duet-table-striped.duet-table-flattened.duet-theme-turva tfoot tr{border-top-color:#e4e4e6}.duet-table-fixed th,.duet-table-minimal th,.duet-table-plain th{padding:16px !important;border-bottom:1px solid #657787}.duet-table-fixed th:first-child,.duet-table-minimal th:first-child,.duet-table-plain th:first-child{padding-left:0 !important}.duet-table-fixed th:last-child,.duet-table-minimal th:last-child,.duet-table-plain th:last-child{padding-right:0 !important}.duet-theme-turva.duet-table-fixed th,.duet-theme-turva.duet-table-minimal th,.duet-theme-turva.duet-table-plain th{border-bottom-color:#444445}.duet-table-fixed tbody th,.duet-table-minimal tbody th,.duet-table-plain tbody th{padding-top:40px !important;border-bottom-color:#e1e3e6}.duet-theme-turva.duet-table-fixed tbody th,.duet-theme-turva.duet-table-minimal tbody th,.duet-theme-turva.duet-table-plain tbody th{border-bottom-color:#e4e4e6}.duet-table-fixed td,.duet-table-minimal td,.duet-table-plain td{padding:16px !important}.duet-table-fixed td:first-child,.duet-table-minimal td:first-child,.duet-table-plain td:first-child{padding-left:0 !important}.duet-table-fixed td:last-child,.duet-table-minimal td:last-child,.duet-table-plain td:last-child{padding-right:0 !important}.duet-table-fixed tbody td,.duet-table-minimal tbody td,.duet-table-plain tbody td{border-bottom:1px solid #e1e3e6}.duet-theme-turva.duet-table-fixed tbody td,.duet-theme-turva.duet-table-minimal tbody td,.duet-theme-turva.duet-table-plain tbody td{border-bottom-color:#e4e4e6}.duet-table-flattened.duet-table-fixed tbody:first-of-type th,.duet-table-flattened.duet-table-minimal tbody:first-of-type th,.duet-table-flattened.duet-table-plain tbody:first-of-type th{padding-top:0 !important}.duet-table-flattened.duet-table-fixed td,.duet-table-flattened.duet-table-minimal td,.duet-table-flattened.duet-table-plain td,.duet-table-flattened.duet-table-fixed tbody th,.duet-table-flattened.duet-table-minimal tbody th,.duet-table-flattened.duet-table-plain tbody th{border-bottom:0}.duet-table-flattened.duet-table-fixed tr,.duet-table-flattened.duet-table-minimal tr,.duet-table-flattened.duet-table-plain tr{padding:20px 0 !important}.duet-table-flattened.duet-table-fixed tbody th,.duet-table-flattened.duet-table-minimal tbody th,.duet-table-flattened.duet-table-plain tbody th{padding-top:20px !important}.duet-table-flattened.duet-table-fixed tfoot td,.duet-table-flattened.duet-table-minimal tfoot td,.duet-table-flattened.duet-table-plain tfoot td{margin-bottom:4px !important}.duet-table-flattened.duet-table-fixed tbody:not(:only-of-type) tr:first-child,.duet-table-flattened.duet-table-minimal tbody:not(:only-of-type) tr:first-child,.duet-table-flattened.duet-table-plain tbody:not(:only-of-type) tr:first-child{border-bottom:0}.duet-table-plain.duet-table-flattened tbody tr{border-bottom:1px solid #e1e3e6}.duet-table-plain.duet-table-flattened.duet-theme-turva tbody tr{border-bottom-color:#e4e4e6}.duet-table-minimal tbody tr,.duet-table-minimal tbody tr td{vertical-align:top;border-bottom:0 none}.duet-table-minimal tbody tr:last-of-type,.duet-table-minimal tbody tr:last-of-type td{border-bottom:1px solid #e1e3e6}.duet-table-minimal.duet-table-flattened tbody tr,.duet-table-minimal.duet-table-flattened tbody tr td{border-bottom:0 none}.duet-table-minimal.duet-table-flattened tbody tr td[data-heading]::before{display:none}.duet-table-minimal.duet-table-flattened tfoot{border-top:1px solid #e1e3e6}.duet-table-minimal.duet-table-flattened.duet-theme-turva tfoot{border-top-color:#e4e4e6}.duet-table-fixed table{table-layout:fixed}.duet-table-fixed tbody tr,.duet-table-fixed tbody tr td,.duet-table-fixed tbody tr td:first-child{padding:4px !important;vertical-align:text-bottom;border-bottom:0 none}.duet-table-fixed thead{display:none}.duet-table-fixed tbody tr,.duet-table-fixed tbody tr td{border-bottom:0 none}.duet-table-fixed:not(.duet-table-flattened) tfoot{border-top:1px solid #e1e3e6}.duet-table-fixed:not(.duet-table-flattened).duet-theme-turva tfoot{border-top-color:#e4e4e6}.duet-table-scrollable{position:relative;width:100%;overflow-x:auto;background:linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0)), linear-gradient(-90deg, #fff 0%, rgba(255, 255, 255, 0)) 100% 0, radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)) 100% 0%;background-repeat:no-repeat;background-attachment:local, local, scroll, scroll;background-size:100px 100%, 100px 100%, 12px 100%, 12px 100%}.duet-table-selected-column{background:rgba(0, 119, 179, 0.08)}.duet-theme-turva .duet-table-selected-column{background:rgba(68, 68, 69, 0.08)}.duet-table-sortable tbody tr td:first-child,.duet-table-sortable thead tr th:first-child{padding:20px}.duet-table-sortable:not(.duet-table-flattened) tfoot{border-top:1px solid #e1e3e6}.duet-table-sortable:not(.duet-table-flattened).duet-theme-turva tfoot{border-top-color:#e4e4e6}.duet-table-actions table{table-layout:auto}.duet-table-actions thead th:last-child{width:1px;white-space:nowrap}';const I=[{type:"default",system_message:"unknown error",message:{fi:"Tapahtui tuntematon virhe, ole hyv\xe4 ja yrit\xe4 uudelleen.",sv:"Ett ok\xe4nt fel uppstod, f\xf6rs\xf6k igen.",en:"An unknown error occured, please try again."}},{type:"400",system_message:"Bad Request: The server could not understand the request due to invalid syntax.",message:{fi:"Tiedostoa ei hyv\xe4ksytty.",sv:"Servern avvisade din fil.",en:"The server rejected your file."}},{type:"401",system_message:"Not Authenticated: The client must authenticate itself to get the requested response...",message:{fi:"Vain kirjautunut k\xe4ytt\xe4j\xe4 voi l\xe4hett\xe4\xe4 tiedostoja.",sv:"Du m\xe5ste vara inloggad f\xf6r att ladda upp filer.",en:"You need to be logged in to upload files."}},{type:"403",system_message:"No Access: The client does not have access rights to the content.",message:{fi:"Ei oikeuksia l\xe4hett\xe4\xe4 tiedostoja.",sv:"Du har inte r\xe4tt \xe5tkomstr\xe4ttigheter f\xf6r att ladda upp filer.",en:"You do not have the correct access rights to upload files."}},{type:"413",system_message:"Payload too large",message:{fi:"Tiedosto oli liian vastaanotettavaksi.",sv:"Filen var f\xf6r stor f\xf6r servern att hantera.",en:"The file was to large for the server to handle."}},{type:"415",system_message:"Unsupported media type",message:{fi:"Tiedoston tyyppi oli v\xe4\xe4r\xe4.",sv:"Servern avvisade filen eftersom den hade fel typ.",en:"The server rejected the file because it had the wrong type."}},{type:"429",system_message:"Too many request from same address",message:{fi:"Liian monta yrityst\xe4, ole hyv\xe4 ja yrit\xe4 my\xf6hemmin uudelleen.",sv:"Servern har f\xe5tt m\xe5nga f\xf6rfr\xe5gningar fr\xe5n dig, f\xf6rs\xf6k igen senare.",en:"The server has received to many request from you, please try again later."}},{type:"500",system_message:"Internal Server Error",message:{fi:"Palvelin ilmoitti tuntemattomasta virheest\xe4 ja lataus ep\xe4onnistui.",sv:"Servern rapporterade ett ok\xe4nt fel och uppladdningen misslyckades.",en:"The server reported an unknown error and the upload failed."}},{type:"duet-upload-100",system_message:"File extension not allowed",message:{fi:"Tiedoston tyyppi ei ole sallittu.",sv:"Du kan inte ladda upp filer av den type.",en:"You cannot upload files with that extension."}},{type:"duet-upload-001",system_message:"File transfer failed",message:{fi:"Tiedoston l\xe4hetys keskeytyi, ole hyv\xe4 ja yrit\xe4 uudelleen.",sv:"Din anslutning till servern avbr\xf6ts, f\xf6rs\xf6k igen.",en:"Your connection to the server was interrupted, try again."}},{type:"duet-upload-101",system_message:"File mimetype not allowed",message:{fi:"Tiedoston tyyppi ei ole sallittu.",sv:"Du kan inte ladda upp filer av den typ.",en:"You cannot upload files of that type."}},{type:"duet-upload-201",system_message:"File is too large",message:{fi:"Tiedosto on liian iso.",sv:"Filen \xe4r st\xf6rre \xe4n till\xe5tet.",en:"The file is larger than permitted."}},{type:"duet-upload-202",system_message:"The combined size of all files is too large",message:{fi:"Tiedostojen yhteenlaskettu koko on liian iso.",sv:"Du har n\xe5tt den maximala kombinerade filstorleken.",en:"You have reached the maximum combined filesize."}},{type:"duet-upload-301",system_message:"The maximum file limit has been reached",message:{fi:"Liitteiden maksimim\xe4\xe4r\xe4 saavutettu.",sv:"Maximalt antal bilagor har uppn\xe5tts.",en:"Maximum number of attachments reached."}}],g=s=>{let t={type:void 0,system_message:void 0,message:void 0};return t=I.filter(e=>e.type==s)[0],t||(t=I.filter(e=>"default"===e.type)[0]),t},M=s=>{const t=g(s),e=(0,r.g)(t.message);return""!==e&&e?e:t.system_message},R=({data:s})=>{const{item:t,error:e}=s,{name:i}=t,{type:l}=e;return(0,a.h)("span",{class:"duet-upload-item-error",role:"status"},(0,a.h)("duet-paragraph",{class:"duet-upload-item-name",color:"danger",margin:"none",weight:"semi-bold"},(0,a.h)("duet-icon",{margin:"none",size:"xx-small",name:"messaging-attachment"})," ",i),(0,a.h)("duet-paragraph",{class:"duet-upload-item-error-label",size:"small",margin:"none",color:"danger"},M(l)))},U=({progress:s,name:t})=>(0,a.h)("span",null,(0,a.h)("duet-paragraph",{color:"secondary",margin:"none",size:"small"},t),(0,a.h)("duet-spacer",{size:"xx-small"}),(0,a.h)("duet-progress",{progress:Math.ceil(s),"aria-hidden":!0})),O=({data:s,showLinks:t})=>{const{item:e,size:i,uploaded:l,url:o,meta:n}=s,{name:d}=e,u=(0,a.h)("span",{class:"duet-upload-item-name"},(0,a.h)("duet-icon",{margin:"none",size:"xx-small",name:"messaging-attachment"}),(0,a.h)("duet-spacer",{size:"xx-small",direction:"horizontal"}),d),h=(0,a.h)("span",{class:"duet-upload-item-size",style:{fontSize:"14px",fontWeight:"400"}},"(",((s,t=2)=>{if(0===s)return"0 Bytes";const i=t<0?0:t,o=Math.floor(Math.log(s)/Math.log(1024));return parseFloat((s/Math.pow(1024,o)).toFixed(i))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o]})(i),")"),c=(0,a.h)("duet-paragraph",{color:"secondary",margin:"none",weight:"semi-bold"},l&&o&&t?(0,a.h)("duet-link",{url:o,external:!0},u):u,(0,a.h)("duet-spacer",{size:"xx-small",direction:"horizontal"}),h),b=n&&n.badges?(0,a.h)("span",null,(0,a.h)("duet-spacer",{size:"xx-small"}),n.badges.map(f=>(0,a.h)("duet-badge",{color:"primary"},f))):void 0;return(0,a.h)("span",{class:"duet-upload-item-success"},(0,a.h)("div",null,c),b)},G=(s,t)=>{const{allowedMimetypes:e,allowedExtensions:i,maxBytes:l}=t;let o=!1,n=g("default");if(s){const{name:d,type:u,size:h}=s,c=((s,t)=>{if(!t||!s)return!0;const e=t.split(",");let i=!1;return e.forEach(l=>{const o=l.split("/"),n=s.split("/");o[0]===n[0]&&(o[1]===n[1]||"*"===o[1])&&(i=!0)}),i})(u,e),b=((s,t)=>{if(!t)return!0;const e=s.split(".");return t.split(",").includes(e[e.length-1])})(d.toLowerCase(),i),f=((s,t)=>!t||!s||t>=s)(h,l);c||(n=g("duet-upload-101")),b||(n=g("duet-upload-100")),f||(n=g("duet-upload-201")),o=c&&b&&f}else o=!1;return{valid:o,errorMessage:o?void 0:(0,r.g)(n.message),errorSystem:o?void 0:n.system_message,errorType:o?void 0:n.type}},L=({payload:s,options:t,onFailure:e,onSuccess:i,onProgress:l})=>{const{type:o="POST",xhr:n,uri:d,argument:u=null,headers:h=null}=t;n.open(o,`${d}${u||""}`,!0);const{data:c,name:b}=s;return h&&Object.keys(h).forEach(f=>{n.setRequestHeader(f,h[f])}),"POST"===o&&(n.onreadystatechange=()=>{n.readyState===XMLHttpRequest.DONE&&n.status>=200&&n.status<300&&i(n,b,n.status),n.readyState===XMLHttpRequest.DONE&&n.status>=300&&n.status<999&&e(n,b,n.status)},l(b)),n.send(c),n};let z=class{constructor(s){var t=this;(0,a.r)(this,s),this.duetChange=(0,a.c)(this,"duetChange",3),this.duetBlur=(0,a.c)(this,"duetBlur",7),this.duetFocus=(0,a.c)(this,"duetFocus",7),this.duetDone=(0,a.c)(this,"duetDone",3),this.duetState=(0,a.c)(this,"duetState",3),this.duetDelete=(0,a.c)(this,"duetDelete",3),this.duetCancel=(0,a.c)(this,"duetCancel",3),this.duetProgress=(0,a.c)(this,"duetProgress",3),this.duetUpload=(0,a.c)(this,"duetUpload",3),this.tick=Date.now(),this.external=!1,this.hideButton=!1,this.actions=[{icon:"action-delete",color:"color-danger",size:"x-small",background:"gray-lightest",name:"delete",map:["success","failure"],label:{fi:"Poista tiedosto",en:"Poista tiedosto",sv:"Ta bort filen"}},{icon:"navigation-close",color:"primary",size:"x-small",background:"gray-lightest",name:"cancel",map:["inprogress"],label:{fi:"Keskeyt\xe4 l\xe4hetys",en:"Cancel the upload",sv:"Stop \xf6verf\xf6ringen"}}],this.showLinks=!1,this.statusLabelDefaults={fi:{inProgress:"L\xe4hetet\xe4\xe4n {filesUploaded} l\xe4hetett\xe4v\xe4st\xe4 {filesTotal} tiedostosta",inProgressWithErrors:"L\xe4hetet\xe4\xe4n {filesInProgress} tiedostoa, l\xe4hetetty {filesUploaded} l\xe4hetett\xe4v\xe4st\xe4 {filesTotal} tiedostosta, {filesWithErrors} tiedostossa on virheit\xe4",done:"Kaikki {filesTotal} tiedostoa l\xe4hetetty onnistuneesti",doneWithErrors:"L\xe4hetys valmis, {filesUploaded} tiedostoa on l\xe4hetetty onnistuneesti, {filesWithErrors} tiedostossa oli virheit\xe4",files:"tiedostot",file:"tiedosto"},sv:{inProgress:"Adding {filesUploaded} of {filesTotal}",inProgressWithErrors:"Laddar upp {filesInProgress}, {filesUploaded} uppladdad av {filesTotal}, {filesWithErrors} misslyckades",done:"Alla {filesTotal} har lagts till",doneWithErrors:"Handling slutf\xf6rd, {filesUploaded} har lagts till, {filesWithErrors} misslyckades",files:"filer",file:"fil"},en:{inProgress:"Adding {filesUploaded} of {filesTotal}",inProgressWithErrors:"Uploading {filesInProgress}, {filesUploaded} uploaded of {filesTotal}, {filesWithErrors} failed",done:"All {filesTotal} added successfully",doneWithErrors:"Action completed, {filesUploaded} has been added successfully, {filesWithErrors} had errors",files:"File",file:"file"}},this.statusMessageLabel=(0,r.g)(this.statusLabelDefaults),this.buttonLabelDefaults={fi:"Lis\xe4\xe4 liite",sv:"L\xe4gg till en bilaga",en:"Add an attachment"},this.buttonLabel=(0,r.g)(this.buttonLabelDefaults),this.accessibleButtonLabel=void 0,this.theme="",this.disabled=!1,this.margin="auto",this.required=!1,this.alignment="middle",this.hideGroups=!1,this.files=new Map,this.valid=!this.required,this.labelDefaults={fi:"Lis\xe4\xe4 liite",sv:"L\xe4gg till en bilaga",en:"Add attachments"},this.label=(0,r.g)(this.labelDefaults),this.descriptionDefaults={fi:"Voit liitt\xe4\xe4 {filetypes}-muotoisia tiedostoja sek\xe4 yleisimpi\xe4 videotiedostoja. Voit l\xe4hett\xe4\xe4 {maxbytes} verran tiedostoja yhdell\xe4 kertaa, ja lis\xe4t\xe4 enint\xe4\xe4n {maxfiles} liitett\xe4 kerrallaan.",sv:"Du kan bifoga filer i flg. formater {filetypes} samt de vanligaste videofilerna. Du kan ladda upp {maxbytes} filer \xe5t g\xe5ngen och l\xe4gga till upp till {maxfiles} bilagor \xe5t g\xe5ngen.",en:"You may attach the following filetypes: {filetypes} - as well as the most common video files. You can upload {maxbytes} of files at a time, and add up to {maxfiles} attachments at a time."},this.description=(0,r.g)(this.descriptionDefaults),this.fileListEmptyDefaults={fi:"Ei viel\xe4 lis\xe4ttyj\xe4 tiedostoja.",sv:"Inga filer har lagts till \xe4nnu.",en:"No files added yet."},this.fileListEmpty=(0,r.g)(this.fileListEmptyDefaults),this.error="",this.maxBytes=2e8,this.maxBytesTotal=void 0,this.maxFiles=99,this.allowedExtensions="all",this.allowedMimetypes="*",this.multiple=!0,this.limitSelection=!1,this.buttonId=(0,D.c)("DuetButton"),this.labelId=(0,D.c)("DuetLabel"),this.uploadId=(0,D.c)("DuetUpload"),this.filesInProgress=new Map,this.fileMaxReached=!1,this.bytesMaxReached=!1,this.internalStatusMessageLabel=void 0,this.DefaultGroups={inprogress:"inprogress",success:"success",failure:"failure"},this.groups=[{id:this.DefaultGroups.inprogress,label:{fi:"Kesken olevat tiedostot",sv:"Filer inprogress",en:"Files inprogress"}},{id:this.DefaultGroups.success,label:{fi:"Valmiit tiedostot",sv:"Files success",en:"Files success"}},{id:this.DefaultGroups.failure,label:{fi:"Tiedostot, joissa on virheit\xe4",sv:"Filer med fel",en:"Files with errors"}}],this.kick=(0,v.d)(()=>{this.tick=Date.now()},30),this.listenForActionEvents=()=>{this.element.addEventListener("duetActionEvent",e=>{const i=e.detail,{action:l,id:o,originalEvent:n}=i;switch(console.log(e),l){case"delete":this.onDelete(o,n);break;case"cancel":this.onCancel(o,n)}})},this.verifyValidity=()=>{const{invalid:e,valid:i}=this.getFilesAsArray(),l=this.valid;this.valid=0===e.length&&0!==i.length,this.valid!==l&&this.duetState.emit({originalEvent:void 0,data:{valid:this.valid,from:"componentWillRender"},component:"duet-upload"})},this.getGroupFromItemData=e=>e.valid&&100===e.progress?e.group?e.group:this.DefaultGroups.success:e.progress>0&&100!==e.progress?this.DefaultGroups.inprogress:e.valid?e.group?e.group:"none":this.DefaultGroups.failure,this.getItemHTMLFromItemData=(e,i)=>i===this.DefaultGroups.success?(0,a.h)(O,{data:e,showLinks:this.showLinks}):i===this.DefaultGroups.inprogress?(0,a.h)(U,{progress:e.progress,name:e.item.name}):i===this.DefaultGroups.failure?(0,a.h)(R,{data:e}):e.group?e.html:"none",this.genHashName=()=>Date.now().toString(36)+Math.random(),this.updateValueInMap=(e,i,l,o=!0)=>{const n=this.files.get(e);n[i]=l,this.files.set(e,n),o&&this.kick()},this.updateProgress=(e,i)=>{e.lengthComputable?(o=>{this.updateValueInMap(i,"progress",o),this.onProgress(i,o,e)})(e.loaded/e.total*100):console.log("cant read progress")},this.trackProgress=(e,i=!1)=>{i?this.filesInProgress.delete(e):this.filesInProgress.set(e,"inprogress"),0===this.filesInProgress.size&&this.onDone()},this.getFilesAsArray=()=>{const e=[],i=[];return this.files.forEach(l=>{l.valid&&!l.deleted?e.push(l):!l.valid&&!l.deleted&&i.push(l)}),{valid:e,invalid:i}},this.resetFormFields=()=>{this.nativeInput.value=""},this.startUpload=function(){var e=(0,y.Z)(function*(i,l){t.metaData=l,t.nativeInput.click(),t.onUpload(i,l),i.stopPropagation(),i.preventDefault()});return function(i){return e.apply(this,arguments)}}(),this.transferComplete=e=>{this.updateValueInMap(e,"progress",100,!1),this.trackProgress(e,!0)},this.transferDone=(e,i,l)=>{this.updateValueInMap(i,"status",l,!1),this.updateValueInMap(i,"uploaded",!0,!1);try{const o=JSON.parse(e.response);this.updateValueInMap(i,"url",o.url)}catch(o){this.updateValueInMap(i,"url",null),console.error("Server did not respond with expected response {url: string}")}},this.transferDoneWithFailure=(e,i,l)=>{try{const{error:o}=JSON.parse(e.response);this.updateValueInMap(i,"error",{message:o.message,type:o.type},!1)}catch(o){console.error("Server did not respond with expected response error:{message: string, type: int}"),this.updateValueInMap(i,"error",{type:l},!1)}this.updateValueInMap(i,"valid",!1,!0)},this.transferFailed=e=>{this.updateValueInMap(e,"error",g("duet-upload-001"))},this.transferCanceled=e=>{this.files.delete(e),this.validateTotals(e),this.kick()},this.validateTotals=e=>{const i=((s,t)=>{let e=0;return!!(t&&(this.files.forEach(i=>{i.valid&&i.size&&(e+=i.size)}),e<t))})(0,this.maxBytesTotal),l=((s,t)=>{let e=0;return!!(t&&(this.files.forEach(i=>{i.valid&&e++}),e>t))})(0,this.maxFiles);return i&&e&&this.updateValueInMap(e,"error",g("duet-upload-202"),!1),l&&e&&this.updateValueInMap(e,"error",g("duet-upload-301"),!1),this.bytesMaxReached=i,this.fileMaxReached=l,{bytesMaxReached:i,fileMaxReached:l}},this.getItemFromUID=e=>{for(const[i,l]of this.files.entries())if(l.uid===e)return{value:l,key:i};return null},this.onDelete=(e,i)=>{const l=this.getItemFromUID(e).key,o=this.files.get(l);this.files.delete(l),this.validateTotals(),this.kick(),this.duetDelete.emit({originalEvent:i,data:{deletion:o},component:"duet-upload"}),this.external||this.makeXHRDeleteRequest(o),this.resetFormFields()},this.onCancel=(e,i)=>{const l=this.getItemFromUID(e).key,o=this.files.get(l);if(this.files.delete(l),this.external)this.kick();else{const{xhr:n}=o;n.abort()}this.resetFormFields(),this.duetCancel.emit({originalEvent:i,data:{cancelled:o},component:"duet-upload"})},this.onUpload=(e,i)=>{this.duetUpload.emit({originalEvent:e,metaData:i,component:"duet-upload"})},this.onBlur=e=>{this.duetBlur.emit({originalEvent:e,component:"duet-upload"})},this.onProgress=(e,i,l)=>{this.duetChange.emit({originalEvent:l,data:{key:e,percentComplete:i},component:"duet-upload"})},this.onFocus=e=>{this.duetFocus.emit({originalEvent:e,component:"duet-upload"})},this.onDone=()=>{this.duetDone.emit({component:"duet-upload",data:{files:this.files}})},this.filterMap=()=>{const e=[...this.files.values()],i=[],l=[],o=[];return e.forEach(n=>{const d=this.getGroupFromItemData(n),u=this.getItemHTMLFromItemData(n,d);d===this.DefaultGroups.success?o.push({uid:n.uid,item:u,group:d}):d===this.DefaultGroups.inprogress?i.push({uid:n.uid,item:u,group:d}):d===this.DefaultGroups.failure?l.push({uid:n.uid,item:u,group:d}):n.group&&i.push({uid:n.uid,item:u,group:n.group})}),{inprogress:i,failure:l,success:o}},this.getColumns=e=>[{sort_order:1,direction:1,index:0,key:e.id,label:e.label}],this.getActions=e=>this.actions.filter(i=>i.map.includes(e)),this.renderEditableTableGroups=()=>{const e=this.filterMap();return this.groups.map(l=>{const o=e[l.id];if(null==o?void 0:o.length)return(0,a.h)("duet-table",{variation:"plain",breakpoint:"none",role:"log",margin:this.hideGroups?"none":"auto"},(0,a.h)("table",{class:"duet-upload-editable-table"},(0,a.h)("thead",{class:"duet-upload-editable-table-header"},(0,a.h)("tr",null,(0,a.h)("th",{class:{"duet-upload-editable-table-header-hidden":this.hideGroups}},this.hideGroups?(0,a.h)("duet-visually-hidden",null,(0,r.g)(l.label)):(0,r.g)(l.label)))),(0,a.h)("tbody",null,(0,a.h)("tr",null,(0,a.h)("td",{class:"duet-upload-editable-table-data"},(0,a.h)("duet-editable-table",{breakpoint:"none",variation:"plain",groupId:l.id,columns:this.getColumns(l),actions:this.getActions(l.id),margin:"none",rows:o}))))))})}}watchValidHandler(s,t){s!==t&&this.kick()}componentWillLoad(){this.internalStatusMessageLabel="string"==typeof this.statusMessageLabel?(0,r.s)(this.groups):this.statusMessageLabel,(0,E.i)(this),this.listenForActionEvents()}componentWillRender(){this.verifyValidity()}setFocus(s){var t=this;return(0,y.Z)(function*(){t.nativeInput&&t.nativeInput.focus(s)})()}upload(s){var t=this;return(0,y.Z)(function*(){yield t.setFocus(),t.metaData=s,t.nativeInput.click()})()}refresh(){var s=this;return(0,y.Z)(function*(){s.kick(),yield s.setFocus()})()}getFiles(){var s=this;return(0,y.Z)(function*(){return!(!s.files||0===s.files.size)&&s.getFilesAsArray()})()}updateValue(s,t,e){var i=this;return(0,y.Z)(function*(){i.updateValueInMap(s,t,e)})()}render(){const s=this.identifier||this.uploadId;let t=this.description.replace(/{maxfiles}/g,this.maxFiles.toString());return t=t.replace(/{maxbytes}/g,`${Math.floor(this.maxBytes/1024/1024)} MB`),t=t.replace(/{filetypes}/g,this.allowedExtensions.split(",").join(", ")),(0,a.h)(a.H,{class:{"duet-m-0":"none"===this.margin}},(0,a.h)("duet-fieldset",{label:this.label,caption:t},(0,a.h)("slot",{name:"header"}),!this.files.size&&(0,a.h)("duet-label",{part:this.identifier?`${this.identifier}-empty-state`:"duet-upload-empty-state",theme:"turva"===this.theme?"turva":"default",size:"small",class:{"duet-upload-filelist-empty":!this.files.size,"duet-upload-filelist":!0,"duet-upload-filelist-filled":this.files.size},id:this.labelId,for:s},this.fileListEmpty),!!this.files.size&&(0,a.h)("slot",{name:"fileheader"}),!!this.files.size&&(0,a.h)("duet-upload-aria-status",{invalid:this.getFilesAsArray().invalid.length,valid:this.getFilesAsArray().valid.length,inprogress:this.filesInProgress.size,total:this.files.size,statusMessageLabel:this.internalStatusMessageLabel}),!!this.files.size&&this.renderEditableTableGroups(),!!this.files.size&&(0,a.h)("slot",{name:"filefooter"}),(0,a.h)("duet-spacer",{size:"large"}),!this.hideButton&&(0,a.h)("duet-button",{id:this.buttonId,onClick:this.startUpload,"accessible-controls":s,disabled:this.fileMaxReached,"accessible-label":this.accessibleButtonLabel,"accessible-owns":s,size:"small",variation:"secondary",fixed:!0,icon:"action-add-circle",part:this.identifier?`${this.identifier}-button-upload`:"duet-upload-button-upload"},this.buttonLabel),(0,a.h)("duet-spacer",{size:"medium"}),(this.fileMaxReached||this.bytesMaxReached)&&(0,a.h)("duet-alert",{part:this.identifier?`${this.identifier}-error-notification`:"duet-upload-error-notification"},this.fileMaxReached&&M("duet-upload-301"),this.bytesMaxReached&&M("duet-upload-202")),(0,a.h)("duet-spacer",{size:"medium"}),(0,a.h)("duet-visually-hidden",null,(0,a.h)("input",{ref:e=>{this.nativeInput=e},accept:this.limitSelection?`${this.allowedMimetypes},${this.allowedExtensions}`:void 0,onBlur:this.onBlur,onFocus:this.onFocus,onChange:e=>this.onChange(e),type:"file",class:{"duet-upload":!0},disabled:this.disabled,"aria-hidden":"true",required:this.required,name:this.name,id:this.identifier,multiple:this.multiple,capture:"user"}))))}makeXHRPostRequest(s){const t=new XMLHttpRequest,e=s.get("name");return t.upload.addEventListener("progress",i=>{this.updateProgress(i,e)}),t.upload.addEventListener("load",()=>{this.transferComplete(e)}),t.upload.addEventListener("error",()=>{this.transferFailed(e)}),t.upload.addEventListener("abort",()=>{this.transferCanceled(e)}),L({payload:{data:s,name:e},options:{type:"POST",uri:this.uri,xhr:t,argument:null,headers:null},onFailure:this.transferDoneWithFailure,onSuccess:this.transferDone,onProgress:this.trackProgress})}makeXHRDeleteRequest(s){const{uid:t,item:e}=s,i=new XMLHttpRequest;return L({payload:{data:null,name},options:{type:"DELETE",xhr:i,uri:this.uri,arguments:`?key=${t}&name=${e.name}`,headers:{"x-fileuid":t,"x-filename":e.name}},onFailure:this.transferDoneWithFailure,onSuccess:this.transferDone,onProgress:this.trackProgress})}onChange(s){var t=this;return(0,y.Z)(function*(){var e;const i=Array.from(null===(e=t.nativeInput)||void 0===e?void 0:e.files);if(i)for(const l of i){const{valid:o,errorMessage:n,errorType:d,errorSystem:u}=G(l,{maxBytes:t.maxBytes,allowedExtensions:t.allowedExtensions,allowedMimetypes:t.allowedMimetypes}),h=t.genHashName(),c={uid:h,item:l,size:l.size,meta:t.metaData,uploaded:!1,valid:o,error:{type:o?void 0:d,message:o?void 0:n,system_message:o?void 0:u},progress:0,deleted:!1,xhr:!1,url:!1};t.files.set(l.name,c);const{bytesMaxReached:b,fileMaxReached:f}=t.validateTotals(l.name);if(b)t.updateValueInMap(l.name,"valid",!1,!1);else if(f)t.updateValueInMap(l.name,"valid",!1,!1);else if(o&&!t.external){const k=new FormData;k.append("file",l),k.append("uid",h),k.append("name",l.name),k.append("metadata",JSON.stringify({uid:h,url:t.uri,size:l.size,meta:c.meta}));try{c.xhr=yield t.makeXHRPostRequest(k)}catch(Y){t.updateValueInMap(l.name,"valid",!1,!1)}}t.kick()}t.resetFormFields(),t.metaData=void 0,t.duetChange.emit({originalEvent:s,data:{files:t.files},component:"duet-upload"})})()}get element(){return(0,a.g)(this)}static get watchers(){return{valid:["watchValidHandler"]}}};z.style="*,*::after,*::before{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}:host{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}::slotted([slot=header]){margin-bottom:16px}::slotted([slot=fileheader]){margin:16px 0 0 0}::slotted([slot=filefooter]){margin-top:16px}.duet-upload{box-sizing:border-box;padding:0;margin:0;background:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}.duet-upload-item-size{font-size:0.75rem;font-weight:400}.duet-upload-filelist{margin-bottom:25px}.duet-upload-filelist-empty{display:flex;align-items:center;justify-content:center;width:100%;height:75px;margin:0 auto;font-size:1rem;font-weight:400;background-color:#f5f8fa}.duet-upload-editable-table-header-hidden{display:none}.duet-upload-editable-table tbody .duet-upload-editable-table-data{padding:0 !important;border:0}.duet-upload-editable-table duet-editable-table tfoot,.duet-upload-editable-table duet-editable-table thead{display:none}.duet-upload-editable-table duet-editable-table .duet-editable-table-content{padding-right:0 !important;padding-left:0 !important}.duet-upload-editable-table duet-editable-table duet-table .duet-table-action-row td{padding:0.75rem 0 !important}.duet-upload-editable-table duet-editable-table duet-table .duet-table-action-row td:last-child{padding-right:0 !important}.duet-upload-editable-table duet-editable-table .duet-editable-table-row-inprogress duet-action-button::part(button){border:0}"}}]);