"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93],{6818:(e,n,t)=>{t.d(n,{XF:()=>u,m1:()=>c,Nf:()=>x,bh:()=>f,FU:()=>h});var r=t(7363),a=t.n(r),o=t(1687),l=t(6867);function u(e){var n=e.onClick;return a().createElement(l.Z,{onClick:n,"aria-label":"create"},a().createElement(o.Z,{fontSize:"large",htmlColor:"var(--md-sys-color-primary)"}))}var i=t(8364);function c(e){var n=e.onClick;return a().createElement(l.Z,{sx:{background:"var(--md-sys-color-error)","&:hover":{background:"var(--md-sys-color-error)"}},onClick:n,"aria-label":"delete"},a().createElement(i.Z,{htmlColor:"var(--md-sys-color-on-error)",fontSize:"small"}))}var d=t(7957);function f(e){var n=e.onClick;return a().createElement(l.Z,{sx:{background:"var(--md-sys-color-tertiary)","&:hover":{background:"var(--md-sys-color-tertiary)"}},onClick:n,"aria-label":"modify"},a().createElement(d.Z,{fontSize:"small",htmlColor:"var(--md-sys-color-on-tertiary)"}))}var s=t(9776),p=t(7966),m=p.t.injectEndpoints({endpoints:function(e){return{uploadSimpleContent:e.mutation({query:function(e){return{url:"/contents/upload",method:"POST",body:JSON.stringify(e)}},invalidatesTags:["GetSimpleContent"],onQueryStarted:function(e,n){var t,r,a,o,l=n.queryFulfilled;return t=void 0,r=void 0,o=function(){return function(e,n){var t,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(i){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(l=0)),l;)try{if(t=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return l.label++,{value:u[1],done:!1};case 5:l.label++,r=u[1],u=[0];continue;case 7:u=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){l=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){l.label=u[1];break}if(6===u[0]&&l.label<a[1]){l.label=a[1],a=u;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(u);break}a[2]&&l.ops.pop(),l.trys.pop();continue}u=n.call(e,l)}catch(e){u=[6,e],r=0}finally{t=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}(this,(function(e){switch(e.label){case 0:return(0,s.V)("UploadSimpleContent","method: POST"),[4,l];case 1:return e.sent().data.status?(alert("success"),(0,s.Q)("UploadSimpleContent","")):(alert("error"),(0,s.Q)("UploadSimpleContent","")),[2]}}))},new((a=void 0)||(a=Promise))((function(e,n){function l(e){try{i(o.next(e))}catch(e){n(e)}}function u(e){try{i(o.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,u)}i((o=o.apply(t,r||[])).next())}))}})}}}).useUploadSimpleContentMutation,v=t(4105),y=t(6914),b=t(2327);function h(){var e=m()[0],n=(0,b.$)("simple-content-management").t;return a().createElement(y.Z,{variant:"contained",component:"label"},n("upload"),a().createElement("input",{onChange:function(n){var t=n.currentTarget.files;if(t){var r=new FileReader;r.readAsBinaryString(t[0]),r.onload=function(n){var t,r=null===(t=n.target)||void 0===t?void 0:t.result,a=v.ZP.read(r,{type:"binary"}),o=a.SheetNames[0],l=a.Sheets[o],u=v.ZP.utils.sheet_to_json(l);e(u).unwrap()}}},type:"file",hidden:!0}))}var g=t(5196);function x(e){var n=e.onClick;return a().createElement(l.Z,{sx:{background:"var(--md-sys-color-primary)","&:hover":{background:"var(--md-sys-color-primary)"}},onClick:n,"aria-label":"delete"},a().createElement(g.Z,{htmlColor:"var(--md-sys-color-on-primary)",fontSize:"small"}))}},7093:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ee});var r=t(7363),a=t.n(r),o=t(9152),l=t(2327),u=t(2658),i=t(4524),c=t(9449),d=t(6495),f=t(3063),s=t(165),p=t(542),m=t(6446),v=t(1508),y=t(476),b=t(7869),h=function(){return h=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},h.apply(this,arguments)},g=["宜蘭縣","花蓮縣","臺東縣","澎湖縣","金門縣","連江縣","臺北市","新北市","桃園市","臺中市","臺南市","高雄市","基隆市","新竹縣","新竹市","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","嘉義市","屏東縣"],x=["T","MinT","MaxT"],E=["none","average","moving-average","difference"],k=["max","min","up-trend","up-trend-overlap","down-trend","down-trend-overlap"],C=x.reduce((function(e,n){var t;return h(h({},e),((t={})[n]={backgroundColor:(0,b.m)()},t))}),{}),w=g.reduce((function(e,n){var t;return h(h({},e),((t={})[n]={backgroundColor:(0,b.m)()},t))}),{}),S=t(3875),Z=t(1499),O=t(9776),T=Z.A.injectEndpoints({endpoints:function(e){return{getWeatherForcast:e.query({query:function(e){var n=e.locations,t=e.elements;return"F-D0047-091?Authorization=".concat("CWB-99433185-8573-4C40-A443-1B0D612515FF","&locationName=").concat(n.join(","),"&elementName=").concat(t.join(","))},providesTags:["GetWeather"],onQueryStarted:function(e,n){var t,r,a,o,l=n.queryFulfilled;return t=void 0,r=void 0,o=function(){return function(e,n){var t,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(i){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(l=0)),l;)try{if(t=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return l.label++,{value:u[1],done:!1};case 5:l.label++,r=u[1],u=[0];continue;case 7:u=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){l=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){l.label=u[1];break}if(6===u[0]&&l.label<a[1]){l.label=a[1],a=u;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(u);break}a[2]&&l.ops.pop(),l.trys.pop();continue}u=n.call(e,l)}catch(e){u=[6,e],r=0}finally{t=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}(this,(function(n){switch(n.label){case 0:return(0,O.V)("GetWeather","method: GET, locations: ".concat(e.locations.join(","),", elements: ").concat(e.elements.join(","))),[4,l];case 1:return n.sent(),(0,O.Q)("GetWeather"),[2]}}))},new((a=void 0)||(a=Promise))((function(e,n){function l(e){try{i(o.next(e))}catch(e){n(e)}}function u(e){try{i(o.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,u)}i((o=o.apply(t,r||[])).next())}))}})}}}),I=T.useGetWeatherForcastQuery;function N(e,n,t){return e.p0.parsed.y<e.p1.parsed.y?n:t}function F(e,n){var t=n.downTrands,r=n.upTrands,a=e.datasetIndex,o=e.p0DataIndex,l=!0,u=!0;return t[a][o]?t.forEach((function(e){!1===e[o]&&(l=!1)})):l=!1,r[a][o]?r.forEach((function(e){!1===e[o]&&(u=!1)})):u=!1,l?"green":u?"red":void 0}var M=function(e,n,t){if(t||2===arguments.length)for(var r,a=0,o=n.length;a<o;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))};function j(e){var n=Math.max.apply(Math,e);return e.reduce((function(e,t,r){return t===n?M(M([],e,!0),[r],!1):e}),[])}function A(e){var n=Math.min.apply(Math,e);return e.reduce((function(e,t,r){return t===n?M(M([],e,!0),[r],!1):e}),[])}var P=function(){return P=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},P.apply(this,arguments)},q=function(e,n,t){if(t||2===arguments.length)for(var r,a=0,o=n.length;a<o;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))},R=function(e,n,t){if(t||2===arguments.length)for(var r,a=0,o=n.length;a<o;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))},D=function(e,n){return"moving-average"===n?"".concat(e,": 2個資料移動平均"):"average"===n?"".concat(e,": 平均"):void 0},G=function(e){return"".concat(e[0]," - ").concat(e[1])},L={average:function(e){var n=e.map((function(e){var n=e.data.reduce((function(e,n){return e+Number(n.y)}),0)/e.data.length;return{label:D(e.label,"average"),data:e.data.map((function(e){return{x:e.x,y:n}}))}}));return R(R([],e,!0),n,!0)},difference:function(e,n){var t=[];return n.forEach((function(n){var r=e.find((function(e){return e.label===n[0]})),a=e.find((function(e){return e.label===n[1]}));if(r&&a){var o=r.data.map((function(e,n){return{x:e.x,y:Number(e.y)-Number(a.data[n].y)}}));t.push({label:G(n),data:o})}})),R(R([],e,!0),t,!0)},"moving-average":function(e){var n=e.map((function(e){return{label:D(e.label,"moving-average"),data:e.data.map((function(n,t){var r=0!==t?(Number(e.data[t].y)+Number(e.data[t-1].y))/2:null;return{x:n.x,y:r}}))}}));return R(R([],e,!0),n,!0)}},z=t(1229),B=t(9220),U=t(5778),Q={id:"chartLegend",afterUpdate:function(e){var n,t,r,a,o=null===(a=null===(r=null===(t=null===(n=null==e?void 0:e.options.plugins)||void 0===n?void 0:n.legend)||void 0===t?void 0:t.labels)||void 0===r?void 0:r.generateLabels)||void 0===a?void 0:a.call(r,e);if(o){var l=e.data.datasets.map((function(e){return o.find((function(n){return n.text===e.label}))}));o&&U.h.dispatch(B.o.actions.setLegendItems(l))}}},W=function(){return W=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},W.apply(this,arguments)},V=function(e,n,t){if(t||2===arguments.length)for(var r,a=0,o=n.length;a<o;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))},$=t(611),X=t(4771),_=t(6818),H=t(2677),J=t(7535),K=function(){return K=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},K.apply(this,arguments)},Y=function(e,n,t){if(t||2===arguments.length)for(var r,a=0,o=n.length;a<o;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))};c.kL.register(c.uw,c.f$,c.od,c.jn,c.Dx,c.u,c.De,c.Gu);const ee=function(){var e=(0,l.$)("weather-forecast"),n=e.i18n,t=e.t,c=e.ready,h=(0,r.useState)("location"),Z=h[0],O=h[1],T=(0,r.useState)(["臺北市"]),M=T[0],U=T[1],ee=(0,r.useState)(["MaxT"]),ne=ee[0],te=ee[1],re=(0,r.useState)([]),ae=re[0],oe=re[1],le=(0,r.useState)([]),ue=le[0],ie=le[1],ce=(0,r.useState)([]),de=ce[0],fe=ce[1],se=(0,r.useRef)(),pe=(0,$.C)((function(e){return e.theme.mode})),me=I({locations:M,elements:ne}).data,ve=(0,r.useMemo)((function(){return(0,S.F)(g,t)}),[c]),ye=(0,r.useMemo)((function(){return(0,S.F)(x,t)}),[c]),be=(0,r.useMemo)((function(){return(0,S.F)(k,t)}),[c,n.language]),he=(0,r.useMemo)((function(){return(0,S.F)(E,t)}),[c,n.language]),ge=(0,r.useMemo)((function(){return"location"===Z?(0,S.F)(M,t):(0,S.F)(ne,t)}),[Z,ne.length,M.length]),xe=(0,$.C)((function(e){return e.weatherLegend.topLayerDatasetIndex})),Ee="element"===Z?M[0]:ne[0],ke=(0,r.useCallback)((function(e){O(e.currentTarget.value),U(["臺北市"]),te(["MaxT"])}),[]),Ce=(0,r.useCallback)((function(e){U("string"==typeof e?[e]:e)}),[]),we=(0,r.useCallback)((function(e,n,t){fe((function(r){return r.map((function(r,a){if(a===e){var o=Y([],r,!0);return o[n]=t,o}return r}))}))}),[]),Se=(0,r.useCallback)((function(){fe((function(e){return Y(Y([],e,!0),[["",""]],!1)}))}),[]),Ze=(0,r.useCallback)((function(e){fe((function(n){return n.filter((function(n,t){return t!==e}))}))}),[]),Oe=(0,r.useCallback)((function(e){te("string"==typeof e?[e]:e)}),[]),Te=(0,r.useCallback)((function(e){oe(e)}),[]),Ie=(0,r.useCallback)((function(e){ie([e])}),[]),Ne=function(){var e=(0,r.useState)(C);return[e[0],e[1]]}(),Fe=Ne[0],Me=Ne[1],je=function(){var e=(0,r.useState)(w);return[e[0],e[1]]}(),Ae=je[0],Pe=je[1],qe=(0,r.useMemo)((function(){return function(e,n){var t;if(!e)return[];var r=null===(t=e.records.locations.find((function(e){return"台灣"===e.locationsName})))||void 0===t?void 0:t.location;return r&&"location"===n?function(e){var n=e.map((function(e){return{label:e.locationName,data:e.weatherElement[0].time.map((function(e){var n;return{x:e.startTime,y:Number(null===(n=e.elementValue[0])||void 0===n?void 0:n.value)}}))}}));return n}(r):r&&"element"===n?function(e){var n=e[0]?e[0].weatherElement.map((function(e){return{label:e.elementName,data:e.time.map((function(e){var n;return{x:e.startTime,y:Number(null===(n=e.elementValue[0])||void 0===n?void 0:n.value)}}))}})):[];return n}(r):[]}(me,Z)}),[me,Z]),Re=(0,r.useMemo)((function(){return n=ue,t=de,r=R([],e=qe,!0),n.forEach((function(n){L[n]&&(r=L[n](e,t))})),r;var e,n,t,r}),[qe,ue,de]),De=(0,r.useMemo)((function(){return n=ae,t="element"===Z?Fe:Ae,(e=Re).reduce((function(r,a){var o,l=a.label,u=null===(o=t[l])||void 0===o?void 0:o.backgroundColor,i=P(P({},a),{fill:!0,tension:.2,backgroundColor:u,pointStyle:function(){return"circle"},pointRadius:function(){return 3},pointBackgroundColor:function(){return u},pointHoverRadius:20,segment:{}}),c=function(e,n){var t=n.map((function(e){return e.data.map((function(e,n,t){var r;return Number(e.y)<Number(null===(r=t[n+1])||void 0===r?void 0:r.y)}))})),r=n.map((function(e){return e.data.map((function(e,n,t){var r;return Number(e.y)>Number(null===(r=t[n+1])||void 0===r?void 0:r.y)}))}));return{"up-trend":{borderColor:function(n){return e.includes("down-trend")?N(n,"red","blue"):function(e,n){return e.p0.parsed.y<e.p1.parsed.y?"red":void 0}(n)}},"down-trend":{borderColor:function(n){return e.includes("up-trend")?N(n,"red","blue"):function(e,n){return e.p0.parsed.y>e.p1.parsed.y?"blue":void 0}(n)}},"up-trend-overlap":{isOverlap:!1,upTrands:t,downTrands:r,backgroundColor:e.includes("down-trend-overlap")?F:function(e,n){var t=n.upTrands,r=e.datasetIndex,a=e.p0DataIndex,o=!0;return t[r][a]?t.forEach((function(e){!1===e[a]&&(o=!1)})):o=!1,o?"red":void 0}},"down-trend-overlap":{isOverlap:!1,upTrands:t,downTrands:r,backgroundColor:e.includes("up-trend-overlap")?F:function(e,n){var t=n.downTrands,r=e.datasetIndex,a=e.p0DataIndex,o=!0;return t[r][a]?t.forEach((function(e){!1===e[a]&&(o=!1)})):o=!1,o?"green":void 0}},"overlap-of-downtrends-and-uptrends":{isOverlap:!1,downTrands:r,upTrands:t,backgroundColor:function(e,n){var t=n.downTrands,r=n.upTrands,a=e.datasetIndex,o=e.p0DataIndex,l=!0,u=!0;return t[a][o]?t.forEach((function(e){!1===e[o]&&(l=!1)})):l=!1,r[a][o]?r.forEach((function(e){!1===e[o]&&(u=!1)})):u=!1,l?"rgba(0, 0, 100, 0.3)":u?"rgba(100, 0, 0, 0.3)":void 0}}}}(n,e);return n.forEach((function(e){if(e in c&&(i.segment=P({},c[e])),"min"===e&&n.includes("max")){var t=A(i.data.map((function(e){return e.y?e.y:0}))),r=j(i.data.map((function(e){return e.y?e.y:0})));i.pointStyle=function(e){return-1!==t.indexOf(e.dataIndex)||-1!==r.indexOf(e.dataIndex)?"rectRot":"circle"},i.pointRadius=function(e){return-1!==t.indexOf(e.dataIndex)||-1!==r.indexOf(e.dataIndex)?12:3},i.pointBackgroundColor=function(e){return-1!==t.indexOf(e.dataIndex)?"green":-1!==r.indexOf(e.dataIndex)?"red":i.backgroundColor}}else if("min"===e){var a=A(i.data.map((function(e){return e.y?e.y:0})));i.pointStyle=function(e){return-1!==a.indexOf(e.dataIndex)?"rectRot":"circle"},i.pointBackgroundColor=function(e){return-1!==a.indexOf(e.dataIndex)?"green":i.backgroundColor},i.pointRadius=function(e){return-1!==a.indexOf(e.dataIndex)?12:3}}else if("max"===e){var o=j(i.data.map((function(e){return e.y?e.y:0})));i.pointStyle=function(e){return-1!==o.indexOf(e.dataIndex)?"rectRot":"circle"},i.pointRadius=function(e){return-1!==o.indexOf(e.dataIndex)?12:3},i.pointBackgroundColor=function(e){return-1!==o.indexOf(e.dataIndex)?"red":i.backgroundColor}}})),q(q([],r,!0),[i],!1)}),[]);var e,n,t}),[Re,ae,Z,Fe,Ae]),Ge=(0,r.useMemo)((function(){return function(e,n){var t=e.map((function(e,n){return W(W({},e),{order:n+1})}));return e.length>0&&-1!==n?t.reduce((function(e,t,r){return V(V([],e,!0),r===n?[W(W({},t),{order:1})]:r<n?[W(W({},t),{order:r+2})]:[W(W({},t),{order:r+1})],!1)}),[]):t}(De,xe)}),[De,xe]);return(0,r.useEffect)((function(){var e,n;if(0!==de.length){var t=G(de[de.length-1]);"location"===Z&&Ae[t]||"element"===Z&&Fe[t]||("element"===Z?Me(K(K({},Fe),((e={})[t]={backgroundColor:(0,b.m)()},e))):Pe(K(K({},Ae),((n={})[t]={backgroundColor:(0,b.m)()},n))))}}),[de]),(0,r.useEffect)((function(){var e;if(0!==ue.length){var n;n="element"===Z?Fe:Ae;for(var t=0;t<qe.length;t++){var r=D(qe[t].label,ue[0]);r&&n[r]||r&&(n=K(K({},n),((e={})[r]={backgroundColor:(0,b.m)()},e)))}"element"===Z?Me(n):Pe(n)}}),[ue]),a().createElement(a().Fragment,null,a().createElement(u.Z,{variant:"h1"},t("weather-forecast")),a().createElement(i.Z,{container:!0,columns:12},a().createElement(i.Z,{xs:12},a().createElement(u.Z,{variant:"h3"},t("compare")),a().createElement(m.Z,null,a().createElement(s.Z,{row:!0,"aria-labelledby":"compare",name:"compare-group",value:Z,onChange:ke},a().createElement(p.Z,{value:"location",control:a().createElement(f.Z,null),label:t("location")}),a().createElement(p.Z,{value:"element",control:a().createElement(f.Z,null),label:t("element")}))))),a().createElement(i.Z,{container:!0,columns:12},a().createElement(i.Z,{xs:12},a().createElement(y.Z,{id:"compare"},a().createElement(u.Z,{variant:"h3"},t("condition"))))),a().createElement(i.Z,{container:!0,columns:12},a().createElement(i.Z,{xs:12,md:3},"location"===Z?a().createElement(o.i,{label:t("location-multiple"),defaultSelected:M,options:ve,callback:Ce}):a().createElement(z.q,{label:t("location"),defaultSelected:M[0],options:ve,callback:Ce})),a().createElement(i.Z,{xs:12,md:3},"element"===Z?a().createElement(o.i,{label:t("element-multiple"),options:ye,defaultSelected:ne,callback:Oe}):a().createElement(z.q,{label:t("element"),options:ye,defaultSelected:ne[0],callback:Oe})),a().createElement(i.Z,{xs:12,md:3},a().createElement(o.i,{label:t("label"),options:be,value:ae,callback:Te})),a().createElement(i.Z,{xs:12,md:3},a().createElement(z.q,{label:t("derivatives"),value:ue,options:he,callback:Ie}),ue.includes("difference")?a().createElement(v.Z,{mt:2},a().createElement("div",null,de.map((function(e,n){return a().createElement(J.h,{mb:2,key:n},a().createElement(z.q,{defaultSelected:e[0],options:ge,callback:function(e){we(n,0,e)}}),a().createElement("div",null,"-"),a().createElement(z.q,{defaultSelected:e[1],options:ge,callback:function(e){we(n,1,e)}}),a().createElement(H.d,null,a().createElement(_.m1,{onClick:function(){return Ze(n)}})))})),a().createElement("div",null,a().createElement(_.XF,{onClick:Se})))):null)),a().createElement(i.Z,{container:!0},a().createElement(i.Z,{xs:12},a().createElement(X.U,null,a().createElement(u.Z,{variant:"h2"},Ee)),a().createElement(B.K,{chart:se.current}),a().createElement(d.kL,{type:"line",ref:se,data:{datasets:Ge},options:{scales:{y:{labels:["1"],offset:!0,title:{display:!0,text:"°C",color:"light"===pe?"#1b1b1f":"#e3e2e6",font:{size:32}},ticks:{color:"light"===pe?"#1b1b1f":"#e3e2e6"},grid:{display:!1}},x:{alignToPixels:!0,offset:!0,ticks:{color:"light"===pe?"#1b1b1f":"#e3e2e6",callback:function(e,n){var t=this.getLabelForValue(n).split("-");return t.shift(),t.join("/")}},title:{display:!0,text:t("time"),color:"light"===pe?"#1b1b1f":"#e3e2e6",font:{size:32,family:"sans-serif, 'Noto Sans TC'"}},grid:{display:!1}}},plugins:{legend:{display:!1}}},plugins:[Q]}))))}},7869:(e,n,t)=>{function r(){return"#"+(16777215*Math.random()<<0).toString(16)}t.d(n,{m:()=>r})}}]);