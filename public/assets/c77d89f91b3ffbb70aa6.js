"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[568],{6818:(e,t,n)=>{n.d(t,{XF:()=>i,m1:()=>u,Nf:()=>E,bh:()=>m,FU:()=>v});var r=n(7363),a=n.n(r),o=n(1687),l=n(6867);function i(e){var t=e.onClick;return a().createElement(l.Z,{onClick:t,"aria-label":"create"},a().createElement(o.Z,{fontSize:"large",htmlColor:"var(--md-sys-color-primary)"}))}var c=n(8364);function u(e){var t=e.onClick;return a().createElement(l.Z,{sx:{background:"var(--md-sys-color-error)","&:hover":{background:"var(--md-sys-color-error)"}},onClick:t,"aria-label":"delete"},a().createElement(c.Z,{htmlColor:"var(--md-sys-color-on-error)",fontSize:"small"}))}var s=n(7957);function m(e){var t=e.onClick;return a().createElement(l.Z,{sx:{background:"var(--md-sys-color-tertiary)","&:hover":{background:"var(--md-sys-color-tertiary)"}},onClick:t,"aria-label":"modify"},a().createElement(s.Z,{fontSize:"small",htmlColor:"var(--md-sys-color-on-tertiary)"}))}var d=n(9776),f=n(7966),p=f.t.injectEndpoints({endpoints:function(e){return{uploadSimpleContent:e.mutation({query:function(e){return{url:"/contents/upload",method:"POST",body:JSON.stringify(e)}},invalidatesTags:["GetSimpleContent"],onQueryStarted:function(e,t){var n,r,a,o,l=t.queryFulfilled;return n=void 0,r=void 0,o=function(){return function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(e){switch(e.label){case 0:return(0,d.V)("UploadSimpleContent","method: POST"),[4,l];case 1:return e.sent().data.status?(alert("success"),(0,d.Q)("UploadSimpleContent","")):(alert("error"),(0,d.Q)("UploadSimpleContent","")),[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function l(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(l,i)}c((o=o.apply(n,r||[])).next())}))}})}}}).useUploadSimpleContentMutation,y=n(4105),h=n(6914),b=n(2327);function v(){var e=p()[0],t=(0,b.$)("simple-content-management").t;return a().createElement(h.Z,{variant:"contained",component:"label"},t("upload"),a().createElement("input",{onChange:function(t){var n=t.currentTarget.files;if(n){var r=new FileReader;r.readAsBinaryString(n[0]),r.onload=function(t){var n,r=null===(n=t.target)||void 0===n?void 0:n.result,a=y.ZP.read(r,{type:"binary"}),o=a.SheetNames[0],l=a.Sheets[o],i=y.ZP.utils.sheet_to_json(l);e(i).unwrap()}}},type:"file",hidden:!0}))}var g=n(5196);function E(e){var t=e.onClick;return a().createElement(l.Z,{sx:{background:"var(--md-sys-color-primary)","&:hover":{background:"var(--md-sys-color-primary)"}},onClick:t,"aria-label":"delete"},a().createElement(g.Z,{htmlColor:"var(--md-sys-color-on-primary)",fontSize:"small"}))}},9568:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ue});var r=n(2658),a=n(1508),o=n(7363),l=n.n(o),i=n(4524),c=n(2327),u=n(9449),s=n(6495),m=n(611),d=n(6914),f=n(2607),p=n(7535);function y(e){var t=0,n=0,r=[];return e.forEach((function(e){t+=e.price*e.quantity,n+=e.quantity;var a=r.find((function(t){return e.type===t.type}));a?(a.totalCost+=e.price*e.quantity,a.totalQuantity+=e.quantity):r.push({type:e.type,totalCost:e.price*e.quantity,totalQuantity:e.quantity})})),r.map((function(e){return{type:e.type,"quantity-percentage":Math.round(e.totalQuantity/n*100)/100,"cost-percentage":Math.round(e.totalCost/t*100)/100}}))}var h=n(7869),b={a:(0,h.m)(),b:(0,h.m)(),c:(0,h.m)()},v=function(e,t,n,r){return"polarArea"!==e?{maintainAspectRatio:!1,responsive:!0,scales:{y:{max:1,min:0,offset:!0,title:{display:!0,text:"%",color:"light"===t?"#1b1b1f":"#e3e2e6",font:{size:32}},ticks:{color:"light"===t?"#1b1b1f":"#e3e2e6",callback:function(e){return"".concat(100*e)}},grid:{display:!1}},x:{ticks:{color:"light"===t?"#1b1b1f":"#e3e2e6"},title:{display:!0,text:r(n),color:"light"===t?"#1b1b1f":"#e3e2e6",font:{size:32,family:"sans-serif, 'Noto Sans TC'"}},grid:{display:!1}}},plugins:{legend:{display:!1}}}:{maintainAspectRatio:!1,responsive:!0,scales:{r:{ticks:{color:"light"===t?"#1b1b1f":"#e3e2e6",backdropColor:"transparent",callback:function(e){return"".concat(100*e,"%")}}}},plugins:{legend:{display:!1}}}},g=n(9776),E=n(7966),w=E.t.injectEndpoints({endpoints:function(e){return{getSimpleContent:e.query({query:function(e){var t=e.type,n=e.searchString;return"/contents?type=".concat(t,"&searchString=").concat(n)},providesTags:["GetSimpleContent"],onQueryStarted:function(e,t){var n,r,a,o,l=t.queryFulfilled;return n=void 0,r=void 0,o=function(){return function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(t){switch(t.label){case 0:return(0,g.V)("GetSimpleContent","method: GET, type: ".concat(e.type,", searchString: ").concat(e.searchString)),[4,l];case 1:return t.sent(),(0,g.Q)("GetSimpleContent"),[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function l(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(l,i)}c((o=o.apply(n,r||[])).next())}))}})}}}),Z=(w.useGetSimpleContentQuery,w.useLazyGetSimpleContentQuery),S=w.endpoints.getSimpleContent.useQueryState;u.kL.register(u.qi,u.ZL,u.uw,u.f$,u.od,u.jn,u.l7,u.Dx,u.u,u.De,u.Gu);var C=function(e){return l().createElement(a.Z,{px:1},e.children)};function k(){var e=(0,o.useRef)(),t=(0,m.C)((function(e){return e.theme.mode})),n=(0,o.useState)("line"),r=n[0],i=n[1],u=(0,o.useState)("cost-percentage"),h=u[0],g=u[1],E=(0,m.C)((function(e){return e.listCondition})),w=S({type:E.type,searchString:E.searchString}).data,Z=(0,c.$)("simple-content-management").t,k=(0,o.useCallback)((function(e){i(e)}),[]),x=function(e,t,n){return{labels:e.map((function(e){return e.type})),datasets:[{fill:!0,data:e.map((function(e){return e[t]})),backgroundColor:"line"===n?"blue":e.map((function(e){return b[e.type]}))}]}}(w?y(w.data):[],h,r),q=(0,o.useCallback)((function(e){g(e)}),[]);return l().createElement(a.Z,{height:600},l().createElement(f.i,{height:"100px"},l().createElement(p.h,{margin:"0 -0.5rem"},l().createElement(C,null,l().createElement(d.Z,{color:"primary",onClick:function(){q("cost-percentage")},variant:"contained"},Z("cost"))),l().createElement(C,null,l().createElement(d.Z,{color:"primary",onClick:function(){q("quantity-percentage")},variant:"contained"},Z("quantity")))),l().createElement(p.h,{margin:"0 -0.5rem"},l().createElement(C,null,l().createElement(d.Z,{color:"info",onClick:function(){k("line")},variant:"contained"},Z("line"))),l().createElement(C,null,l().createElement(d.Z,{color:"info",className:"",onClick:function(){k("bar")},variant:"contained"},Z("bar"))),l().createElement(C,null,l().createElement(d.Z,{color:"info",className:"",onClick:function(){k("polarArea")},variant:"contained"},Z("polar-area"))))),l().createElement(a.Z,{position:"relative",height:"500px",width:"100%"},l().createElement(s.kL,{type:r,ref:e,data:x,options:v(r,t,h,Z)})))}var x=n(4680),q=n(9573),O=n(7896),P=n(8732),T=n(3694),Q=n(6926),j=n(1658),F=n(6818),V=n(6011),$=n(5558),A=n(3113),L=function(e){var t=e.columns,n=e.order,r=e.orderBy,o=e.onRequestSort,i=e.action,u=(0,c.$)("simple-content-management").t;return l().createElement(V.Z,null,l().createElement(T.Z,null,t.map((function(e,t){return l().createElement(Q.Z,{key:t,align:e.numeric?"right":"left",sortDirection:r===e.dataKey&&n},e.sortable?l().createElement($.Z,{active:r===e.dataKey,direction:r===e.dataKey?n:"asc",onClick:(i=e.dataKey,function(e){o(e,i)})},e.label,r===e.dataKey?l().createElement(a.Z,{component:"span",sx:A.Z},"desc"===n?"sorted descending":"sorted ascending"):null):e.label);var i})),i?l().createElement(Q.Z,{align:"center"},u("action")):null))},M=n(2734),G=n(6867),D=n(8066),K=n(1290),R=n(6172),U=n(8317),N=function(e){var t=(0,M.Z)(),n=e.count,r=e.page,o=e.rowsPerPage,i=e.onPageChange;return l().createElement(a.Z,{sx:{flexShrink:0,ml:2.5}},l().createElement(G.Z,{onClick:function(e){i(e,0)},disabled:0===r,"aria-label":"first page"},"rtl"===t.direction?l().createElement(K.Z,null):l().createElement(D.Z,null)),l().createElement(G.Z,{onClick:function(e){i(e,r-1)},disabled:0===r,"aria-label":"previous page"},"rtl"===t.direction?l().createElement(U.Z,null):l().createElement(R.Z,null)),l().createElement(G.Z,{onClick:function(e){i(e,r+1)},disabled:r>=Math.ceil(n/o)-1,"aria-label":"next page"},"rtl"===t.direction?l().createElement(R.Z,null):l().createElement(U.Z,null)),l().createElement(G.Z,{onClick:function(e){i(e,Math.max(0,Math.ceil(n/o)-1))},disabled:r>=Math.ceil(n/o)-1,"aria-label":"last page"},"rtl"===t.direction?l().createElement(D.Z,null):l().createElement(K.Z,null)))},z=n(7101),I=n(7536),_=n(3672),B=n(5116),J=n(445),W=n(594),X=n(2677),H=E.t.injectEndpoints({endpoints:function(e){return{updateSimpleContent:e.mutation({query:function(e){return e.append("_method","PUT"),{url:"/contents/".concat(e.get("id")),method:"POST",body:e}},invalidatesTags:["GetSimpleContent"],onQueryStarted:function(e,t){var n,r,a,o,l=t.queryFulfilled,i=t.dispatch;return n=void 0,r=void 0,o=function(){return function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(e){switch(e.label){case 0:return(0,g.V)("UpdateSimpleContent","method: POST(coloumn _method: PUT)"),[4,l];case 1:return e.sent(),i((0,z.$k)(!1)),(0,g.Q)("UpdateSimpleContent"),[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function l(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(l,i)}c((o=o.apply(n,r||[])).next())}))}})}}}).useUpdateSimpleContentMutation,Y=n(4970),ee=n(1e3),te=function(){return te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},te.apply(this,arguments)},ne=[{name:"name",condition:{required:{value:!0,message:"name-is-required"}}},{name:"type",condition:{required:{value:!0,message:"type-is-required"}}},{name:"price",condition:{required:{value:!0,message:"price-is-required"},pattern:{value:/^(0|[1-9][0-9]*)$/,message:"price-must-be-number"}}},{name:"quantity",condition:{required:{value:!0,message:"quantity-is-required"},pattern:{value:/^(0|[1-9][0-9]*)$/,message:"quantity-must-be-number"}}}],re=function(){var e,t=(0,m.T)(),n=function(){return t((0,z.$k)(!1))},u=(0,m.C)((function(e){return e.listAction.updateModalShown})),s=(0,m.C)((function(e){return e.listAction.updateModalContentId})),p=(0,c.$)("simple-content-management").t,y=(0,m.C)((function(e){return e.listCondition})),h=S({type:y.type,searchString:y.searchString}).data,b=l().useState(""),v=b[0],g=b[1],E=H()[0];u&&s&&h&&(e=h.data.find((function(e){return e.id===s})));var w=(0,I.cI)({defaultValues:e,mode:"onBlur"}),Z=w.handleSubmit,C=w.control,k=w.reset,x=w.register,q=w.formState.errors,O=e?Object.keys(e):[];ne.forEach((function(e){x(e.name,e.condition)}));var P=function(e){var t=e.currentTarget.files;if(t){var n=t[0],r=new FileReader;r.addEventListener("load",(function(){var e=r.result;"string"==typeof e&&g(e)})),r.readAsDataURL(n)}},T=x("image"),Q=T.onChange,j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(T,["onChange"]);return(0,o.useEffect)((function(){e&&k(e),(null==e?void 0:e.image)&&u&&g(e.image.replace("public","https://frontenddeveloper.url.tw/public"))}),[u]),l().createElement(_.Z,{open:u,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},l().createElement(a.Z,{component:"form",autoComplete:"off",onSubmit:Z((function(e){var t=new FormData;Object.keys(e).forEach((function(n){"image"!==n&&t.append(n,e[n])})),Array.from(e.image).forEach((function(e){t.append("image[]",e)})),E(t)})),sx:ee.V},l().createElement(f.i,null,l().createElement(r.Z,{mt:2,mb:2,id:"modal-modal-title",variant:"h6",component:"h2"},p("update")),l().createElement(X.d,null,l().createElement(W.Z,{onClick:n}))),v?l().createElement("label",null,l().createElement("img",{width:"30%",src:v}),l().createElement("input",te({},j,{type:"file",multiple:!0,accept:"image/*",hidden:!0,onChange:function(e){Q(e),P(e)}}))):l().createElement(d.Z,{variant:"contained",component:"label",startIcon:l().createElement(Y.Z,null)},l().createElement("input",te({},j,{type:"file",multiple:!0,accept:"image/*",hidden:!0,onChange:function(e){Q(e),P(e)}})),p("select-image")),l().createElement(r.Z,{mt:2,mb:2,id:"modal-modal-title",variant:"h3",component:"h2"},e?e.name:""),l().createElement(i.Z,{container:!0,columns:3},O.map((function(e,t){var n,r=null===(n=q[e])||void 0===n?void 0:n.message;return l().createElement(i.Z,{mb:2,xs:3,sm:3,key:t},"image"!==e?l().createElement(I.Qr,{name:e,control:C,render:function(t){var n=t.field;return l().createElement(B.Z,te({disabled:"id"===e,error:!!q[e]},n,{margin:"normal",name:e,label:p(e),variant:"outlined",helperText:r?p(r):""}))}}):null)}))),l().createElement(J.N,{mt:2},l().createElement(d.Z,{type:"submit",variant:"contained"},p("submit")))))},ae=E.t.injectEndpoints({endpoints:function(e){return{deleteSimpleContent:e.mutation({query:function(e){var t=e.id;return{url:"/contents/".concat(t),method:"DELETE"}},invalidatesTags:["GetSimpleContent"],onQueryStarted:function(e,t){var n,r,a,o,l=t.queryFulfilled;return n=void 0,r=void 0,o=function(){return function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(t){switch(t.label){case 0:return(0,g.V)("DeleteSimpleContent","mothod: delete, id: ".concat(e.id)),[4,l];case 1:return t.sent(),(0,g.Q)("DeleteSimpleContent",""),[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function l(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(l,i)}c((o=o.apply(n,r||[])).next())}))}})}}}).useDeleteSimpleContentMutation,oe=n(743),le=n(468),ie=n(8422),ce=function(){var e,t,n=(0,m.C)((function(e){return e.listAction.contentDetailModalId})),o=(0,c.$)("simple-content-management").t,u=(0,m.C)((function(e){return e.listAction.contentDetailModalShown})),s=(0,m.C)((function(e){return e.listCondition})),d=S({type:s.type,searchString:s.searchString}).data,f=null==d?void 0:d.data.find((function(e){return e.id===n})),p=(0,oe.I0)(),y=f?le.D.map((function(e){return{column:e,content:f[e]}})):[],h=null===(e=y.find((function(e){return"name"===e.column})))||void 0===e?void 0:e.content,b=null===(t=y.find((function(e){return"image"===e.column})))||void 0===t?void 0:t.content;return l().createElement(_.Z,{open:u,onClose:function(){return p((0,z.nm)(!1))},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},l().createElement(a.Z,{sx:ee.V},b&&"null"!==b?l().createElement("img",{width:"30%",src:b.replace("public","https://frontenddeveloper.url.tw/public")}):l().createElement(ie.Z,{fontSize:"large"}),l().createElement(r.Z,{mt:2,mb:2,id:"modal-modal-title",variant:"h3",component:"h2"},h),y.map((function(e,t){if("image"!==e.column)return l().createElement(i.Z,{mb:2,key:t,container:!0,columns:3},l().createElement(i.Z,{xs:3,sm:1},o(e.column)),l().createElement(i.Z,{xs:3,sm:2},e.content))}))))},ue=n(4771);function se(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}function me(e,t){return"desc"===e?function(e,n){return de(e,n,t)}:function(e,n){return-de(e,n,t)}}function de(e,t,n){if(n){if(t[n]<e[n])return-1;if(t[n]>e[n])return 1}return 0}var fe=function(){return fe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},fe.apply(this,arguments)},pe=[{width:200,label:"name",dataKey:"name",type:"display"},{width:120,label:"type",dataKey:"type",numeric:!0,type:"display"},{width:120,label:"price",dataKey:"price",numeric:!0,type:"display",sortable:!0},{width:120,label:"quantity",dataKey:"quantity",numeric:!0,type:"display",sortable:!0}],ye=function(){var e=l().useState("asc"),t=e[0],n=e[1],r=l().useState(""),i=r[0],u=r[1],s=(0,m.T)(),d=l().useState(0),f=d[0],p=d[1],y=l().useState(5),h=y[0],b=y[1],v=(0,m.C)((function(e){return e.listCondition})),g=(0,o.useRef)(),E=Z(),w=E[0],S=E[1],C=S.data,k=S.isUninitialized,V=ae()[0],$=(0,c.$)("simple-content-management").t,A=se(C?C.data:[],me(t,i));return(0,o.useEffect)((function(){clearTimeout(g.current),g.current=setTimeout((function(){w({type:v.type,searchString:v.searchString})}),1e3)}),[v.searchString]),(0,o.useEffect)((function(){k||w({type:v.type,searchString:v.searchString})}),[v.type]),l().createElement(l().Fragment,null,l().createElement(O.Z,{component:x.Z},l().createElement(q.Z,{sx:{minWidth:650},"aria-label":"simple table"},l().createElement(L,{columns:pe.map((function(e){return fe(fe({},e),{label:$(e.label)})})),order:t,orderBy:i,onRequestSort:function(e,r){n(i===r&&"asc"===t?"desc":"asc"),u(r)},rowCount:A.length,action:!0}),l().createElement(P.Z,null,A.slice(f*h,f*h+h).map((function(e,t){return l().createElement(T.Z,{key:t},pe.map((function(t,n){return l().createElement(Q.Z,{key:n,align:t.numeric?"right":"left"},e[t.dataKey])})),l().createElement(Q.Z,{align:"center"},l().createElement(ue.U,null,l().createElement(a.Z,{mr:1},l().createElement(F.Nf,{onClick:function(){return s((0,z.KQ)(e.id))}})),l().createElement(a.Z,{mr:1},l().createElement(F.bh,{onClick:function(){return s((0,z.sw)(e.id))}})),l().createElement(a.Z,null,l().createElement(F.m1,{onClick:function(){return V({id:e.id})}})))))}))))),l().createElement(j.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:A.length,rowsPerPage:h,page:f,onPageChange:function(e,t){p(t)},onRowsPerPageChange:function(e){b(parseInt(e.target.value,10)),p(0)},ActionsComponent:N,labelRowsPerPage:$("rows-per-page")}),l().createElement(re,null),l().createElement(ce,null))},he=function(){return he=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},he.apply(this,arguments)},be=[{width:100,label:"type",dataKey:"type",type:"display"},{width:120,label:"quantity-percentage",dataKey:"quantity-percentage",numeric:!0,type:"display",sortable:!0},{width:120,label:"cost-percentage",dataKey:"cost-percentage",numeric:!0,type:"display",sortable:!0}];const ve=l().memo((function(){var e=l().useState("asc"),t=e[0],n=e[1],r=l().useState(""),a=r[0],o=r[1],i=(0,c.$)("simple-content-management").t,u=(0,m.C)((function(e){return e.listCondition})),s=S({type:u.type,searchString:u.searchString}).data,d=se(s?y(s.data):[],me(t,a));return l().createElement(l().Fragment,null,l().createElement(O.Z,{sx:{height:"100%"},component:x.Z},l().createElement(q.Z,{"aria-label":"simple table"},l().createElement(L,{columns:be.map((function(e){return he(he({},e),{label:i(e.label)})})),order:t,orderBy:a,onRequestSort:function(e,r){n(a===r&&"asc"===t?"desc":"asc"),o(r)},rowCount:d.length}),l().createElement(P.Z,null,d.map((function(e,t){return l().createElement(T.Z,{key:t},be.map((function(t,n){var r=e[t.dataKey];return l().createElement(Q.Z,{key:n,align:t.numeric?"right":"left"},"number"==typeof r?"".concat(100*r,"%"):r)})))}))))))}));var ge=n(9356),Ee=n(6673),we=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))},Ze=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},Se=ge.iJ.injectEndpoints({endpoints:function(e){return{checkLogin:e.mutation({query:function(){return{url:"/checkLogin",method:"POST"}},onQueryStarted:function(e,t){var n=t.queryFulfilled,r=t.dispatch;return we(void 0,void 0,void 0,(function(){var e,t,a;return Ze(this,(function(o){switch(o.label){case 0:return(0,g.V)("CheckLogin",""),[4,n];case 1:return(e=o.sent()).data.errors||(t=e.data.user.name,a=e.data.user.email,r((0,Ee.Dj)({user:{name:t,email:a}}))),(0,g.Q)("CheckLogin",""),[2]}}))}))}}),login:e.mutation({query:function(e){return{url:"/login",method:"POST",body:JSON.stringify(e)}},onQueryStarted:function(e,t){var n=t.queryFulfilled,r=t.dispatch;return we(void 0,void 0,void 0,(function(){var t,a,o;return Ze(this,(function(l){switch(l.label){case 0:return(0,g.V)("Login","method: POST, email: ".concat(e.email,", password: ").concat(e.password)),[4,n];case 1:return(t=l.sent()).data.errors||(a=t.data.user.name,o=t.data.user.email,r((0,Ee.Dj)({user:{name:a,email:o}}))),(0,g.Q)("Login",""),[2]}}))}))}})}}}),Ce=Se.useLoginMutation,ke=Se.useCheckLoginMutation,xe=function(){return xe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},xe.apply(this,arguments)};const qe=function(){var e=(0,c.$)("simple-content-management").t,t=(0,I.cI)({defaultValues:{email:"",password:""},mode:"onBlur"}),n=t.handleSubmit,o=t.control,i=t.register,u=t.formState,s=t.getValues,m=Ce()[0],f=l().useState(!1),p=f[0],y=f[1],h=l().useState(!1)[0],b=function(){y(!1)};i("email",{required:{value:!0,message:"email-is-required"},pattern:{value:/\S+@\S+\.\S+/,message:"wrong-email-format"}}),i("password",{required:{value:!0,message:"password-is-required"}});var v=u.errors;return l().createElement(l().Fragment,null,l().createElement(d.Z,{variant:"contained",onClick:function(){y(!0)}},e("login")),l().createElement(_.Z,{open:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},l().createElement(a.Z,{sx:ee.V},l().createElement(r.Z,{mt:2,mb:2,variant:"h6",component:"h2"},"Error"),l().createElement(r.Z,{mt:2,mb:2,variant:"body1",component:"span"},"Error"))),l().createElement(_.Z,{open:p,onClose:b},l().createElement(a.Z,{sx:ee.V,component:"form",autoComplete:"off",onSubmit:n((function(){try{m(s()).unwrap().catch().finally((function(){b()}))}catch(e){console.log(e)}}))},l().createElement(r.Z,{variant:"h6",component:"h2"},e("login")),l().createElement(I.Qr,{name:"email",control:o,render:function(t){var n=t.field;return l().createElement(B.Z,xe({error:!!v.email},n,{margin:"normal",name:e("email"),label:e("email"),variant:"outlined",helperText:v.email?e(v.email.message):""}))}}),l().createElement(I.Qr,{name:"password",control:o,render:function(t){var n=t.field;return l().createElement(B.Z,xe({error:!!v.password},n,{margin:"normal",name:e("password"),label:e("password"),variant:"outlined",type:"password",helperText:v.password?e(v.password.message):""}))}}),l().createElement(J.N,{mt:2},l().createElement(d.Z,{type:"submit",variant:"contained"},e("login"))))))};var Oe=ge.iJ.injectEndpoints({endpoints:function(e){return{logout:e.mutation({query:function(){return{url:"/logout",method:"POST"}},onQueryStarted:function(e,t){var n,r,a,o,l=t.queryFulfilled,i=t.dispatch;return n=void 0,r=void 0,o=function(){return function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(e){switch(e.label){case 0:return(0,g.V)("Logout","method: POST"),[4,l];case 1:return e.sent(),i((0,Ee.h$)()),(0,g.Q)("Logout",""),[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function l(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(l,i)}c((o=o.apply(n,r||[])).next())}))}})}}}).useLogoutMutation;const Pe=function(){var e=Oe()[0],t=(0,c.$)("simple-content-management").t,n=(0,m.C)((function(e){return e.auth.user}));return l().createElement(l().Fragment,null,n?l().createElement(d.Z,{onClick:function(){e()},variant:"contained"},t("logout")):null)};var Te=ge.iJ.injectEndpoints({endpoints:function(e){return{register:e.mutation({query:function(e){return{url:"/register",method:"POST",body:JSON.stringify(e)}},onQueryStarted:function(e,t){var n,r,a,o,l=t.queryFulfilled,i=t.dispatch;return n=void 0,r=void 0,o=function(){var t,n,r;return function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(a){switch(a.label){case 0:return(0,g.V)("Register","method: POST, email: ".concat(e.email,", password: ").concat(e.password)),[4,l];case 1:return t=a.sent(),n=t.data.user.name,r=t.data.user.email,i((0,Ee.Dj)({user:{name:n,email:r}})),(0,g.Q)("Register"),[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function l(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(l,i)}c((o=o.apply(n,r||[])).next())}))}})}}}).useRegisterMutation,Qe=function(){return Qe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Qe.apply(this,arguments)};const je=function(){var e=(0,c.$)("simple-content-management").t,t=(0,m.C)((function(e){return e.auth.user})),n=(0,I.cI)({defaultValues:{email:"",name:"",password:"",password_confirmation:""},mode:"onBlur"}),o=n.handleSubmit,i=n.control,u=n.register,s=n.formState.errors,f=n.getValues,p=Te()[0],y=l().useState(!1),h=y[0],b=y[1],v=l().useState(!1)[0],g=function(){b(!1)};return u("name",{required:{value:!0,message:"name-is-required"}}),u("password",{required:{value:!0,message:"password-is-required"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,message:"password-column-message"}}),u("password_confirmation",{required:{value:!0,message:"password-is-required"},validate:{same:function(e){return f().password===e||"should-password-same"}}}),u("email",{required:{value:!0,message:"email-is-required"},pattern:{value:/\S+@\S+\.\S+/,message:"wrong-email-format"}}),l().createElement(l().Fragment,null,null===t?l().createElement(l().Fragment,null," ",l().createElement(d.Z,{variant:"contained",onClick:function(){b(!0)}},e("register")),l().createElement(_.Z,{open:v,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},l().createElement(a.Z,{sx:ee.V},l().createElement(r.Z,{mt:2,mb:2,variant:"h6",component:"h2"},"Error"),l().createElement(r.Z,{mt:2,mb:2,variant:"body1",component:"span"},"Error"))),l().createElement(_.Z,{open:h,onClose:g},l().createElement(a.Z,{sx:ee.V,component:"form",autoComplete:"off",onSubmit:o((function(){p(f()).unwrap().catch().finally((function(){g()}))}))},l().createElement(r.Z,{variant:"h6",component:"h2"},e("register")),l().createElement(I.Qr,{name:"email",control:i,render:function(t){var n=t.field;return l().createElement(B.Z,Qe({error:!!s.email},n,{margin:"normal",name:e("email"),label:e("email"),variant:"outlined",helperText:s.email?e(s.email.message):""}))}}),l().createElement(I.Qr,{name:"name",control:i,render:function(t){var n=t.field;return l().createElement(B.Z,Qe({error:!!s.name},n,{margin:"normal",name:e("name"),label:e("name"),variant:"outlined",helperText:s.name?e(s.name.message):""}))}}),l().createElement(I.Qr,{name:"password",control:i,render:function(t){var n=t.field;return l().createElement(B.Z,Qe({error:!!s.password},n,{margin:"normal",name:e("password"),label:e("password"),variant:"outlined",helperText:s.password?e(s.password.message):"",type:"password"}))}}),l().createElement(I.Qr,{name:"password_confirmation",control:i,render:function(t){var n=t.field;return l().createElement(B.Z,Qe({error:!!s.password_confirmation},n,{margin:"normal",name:e("password-confirmation"),label:e("password-confirmation"),variant:"outlined",type:"password",helperText:s.password_confirmation?e(s.password_confirmation.message):""}))}}),l().createElement(J.N,{mt:2},l().createElement(d.Z,{type:"submit",variant:"contained"},e("register")))))):null)};var Fe=n(3069),Ve=n(2640),$e=n(270),Ae=n(2761),Le=n(2441),Me=function(){return Me=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Me.apply(this,arguments)};function Ge(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var De=[{label:"",value:0},{label:"a",value:1},{label:"b",value:2},{label:"c",value:3}],Ke=l().memo((function(){var e,t=(0,c.$)("simple-content-management").t,n=(0,m.C)((function(e){return e.listCondition})),r=(0,m.T)(),i=(0,o.useCallback)((function(e,t){var n=De.find((function(e){return e.value===t}));n&&r((0,Le.Cw)(n.label))}),[]),u=(0,o.useCallback)((function(e){r((0,Le.Dy)(e.currentTarget.value))}),[]),s=null===(e=De.find((function(e){return e.label===n.type})))||void 0===e?void 0:e.value;return l().createElement(f.i,{mb:3},l().createElement("div",null,l().createElement(a.Z,{sx:{width:"100%"}},l().createElement(a.Z,{sx:{borderBottom:1,borderColor:"divider"}},l().createElement(Fe.Z,{color:"secondary",value:s,onChange:i,"aria-label":"basic tabs example"},l().createElement(Ve.Z,Me({label:"All"},Ge(""))),l().createElement(Ve.Z,Me({label:"A"},Ge("a"))),l().createElement(Ve.Z,Me({label:"B"},Ge("b"))),l().createElement(Ve.Z,Me({label:"C"},Ge("c"))))))),l().createElement("div",null,l().createElement(B.Z,{value:n.searchString,onChange:u,id:"input-with-icon-textfield",label:t("search"),InputProps:{startAdornment:l().createElement($e.Z,{position:"start"},l().createElement(Ae.Z,{htmlColor:"var(--md-sys-color-secondary)"}))}})))})),Re=n(6969);function Ue(){var e=(0,c.$)("simple-content-management").t,t=(0,m.C)((function(e){return e.auth.user})),n=(0,ge.q5)().isSuccess,u=ke()[0];return(0,o.useEffect)((function(){n&&u()}),[n]),l().createElement(l().Fragment,null,l().createElement(r.Z,{variant:"h1"},e("simple-content-management")),l().createElement(X.d,{mb:2},l().createElement(a.Z,{mr:2},l().createElement(r.Z,{variant:"h3"},t?t.name:e("guest"))),t?l().createElement(a.Z,{mr:2},l().createElement(Pe,null)):null,t?null:l().createElement(l().Fragment,null,l().createElement(a.Z,{mr:2},l().createElement(qe,null)),l().createElement(a.Z,{mr:2},l().createElement(je,null)))),t?l().createElement("div",null,l().createElement(p.h,{mb:2},l().createElement(a.Z,{mr:2},l().createElement(F.FU,null)),l().createElement(a.Z,{mr:2},l().createElement(Re.A,null))),l().createElement(Ke,null),l().createElement(i.Z,{container:!0,columns:12},l().createElement(i.Z,{xs:12},l().createElement(ye,null))),l().createElement(i.Z,{container:!0,columns:12},l().createElement(i.Z,{xs:12,md:6},l().createElement(ve,null)),l().createElement(i.Z,{xs:12,md:6},l().createElement(k,null)))):null)}},7869:(e,t,n)=>{function r(){return"#"+(16777215*Math.random()<<0).toString(16)}n.d(t,{m:()=>r})}}]);