"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[501],{501:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var a=t(2658),n=t(4524),i=t(7363),o=t.n(i),s=t(2327),c=t(1233),l=t(4272),u=t(4771),v=t(6486),f=[{reservoir:"新山水庫",areas:["基隆"]},{reservoir:"翡翠水庫",areas:["台北","新北"]},{reservoir:"石門水庫",areas:["新北","桃園","新北"]},{reservoir:"寶山水庫",areas:["新竹"]},{reservoir:"永和山水庫",areas:["新竹","苗栗"]},{reservoir:"寶山第二水庫",areas:["新竹"]},{reservoir:"明德水庫",areas:["苗栗"]},{reservoir:"鯉魚潭水庫",areas:["苗栗","台中"]},{reservoir:"德基水庫",areas:["台中"]},{reservoir:"石岡壩",areas:["台中"]},{reservoir:"日月潭水庫",areas:["南投"]},{reservoir:"霧社水庫",areas:["南投"]},{reservoir:"湖山水庫",areas:["雲林","彰化","嘉義"]},{reservoir:"仁義潭水庫",areas:["嘉義"]},{reservoir:"蘭潭水庫",areas:["嘉義"]},{reservoir:"白河水庫",areas:["台南"]},{reservoir:"曾文水庫",areas:["嘉義","台南"]},{reservoir:"烏山頭水庫",areas:["台南"]},{reservoir:"南化水庫",areas:["台南","高雄"]},{reservoir:"阿公店水庫",areas:["高雄"]},{reservoir:"牡丹水庫",areas:["屏東"]}],m=function(){return m=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},m.apply(this,arguments)},d=function(e,r,t){if(t||2===arguments.length)for(var a,n=0,i=r.length;n<i;n++)!a&&n in r||(a||(a=Array.prototype.slice.call(r,0,n)),a[n]=r[n]);return e.concat(a||Array.prototype.slice.call(r))};function p(e,r,t){var a=e.responseData,n=r.responseData,i=a.reduce((function(e,r,t,a){var n;return a[t].ReservoirIdentifier!==(null===(n=a[t+1])||void 0===n?void 0:n.ReservoirIdentifier)?d(d([],e,!0),[r],!1):e}),[]).reduce((function(e,r){var t=n.find((function(e){return e.ReservoirIdentifier===r.ReservoirIdentifier}));if(null==t?void 0:t.EffectiveCapacity){var a=Number(r.EffectiveWaterStorageCapacity)/Number(null==t?void 0:t.EffectiveCapacity),i=r.ObservationTime.replace(/...../,"").replace("T"," ").replace("-","/");return d(d([],e,!0),[m(m({},r),{ObservationTime:i,ReservoirName:null==t?void 0:t.ReservoirName,EffectiveCapacity:null==t?void 0:t.EffectiveCapacity,ratio:Math.round(1e3*a)/1e3})],!1)}return e}),[]),o="none"!==t.sortChosen[0]?(0,v.orderBy)(i,"ratio",t.sortChosen[0]):i,s="none"!==t.areaChosen[0]?function(e,r){var t=r.areaChosen[0],a=f.reduce((function(e,r){return r.areas.includes(t)?d(d([],e,!0),[r.reservoir],!1):e}),[]);return e.filter((function(e){return a.includes(e.ReservoirName)}))}(o,t):o,c=t.reservoirChosen.length>0?function(e,r){var t=r.reservoirChosen;return e.filter((function(e){return t.includes(e.ReservoirName)}))}(s,t):s;return c}var h=t(611);function C(){var e=(0,l.v)().data,r=(0,l.P)().data,t=(0,h.C)((function(e){return e.water.condition})),a=e&&r?p(e,r,t):[],i=(0,h.C)((function(e){return e.theme.mode}));return o().createElement(n.Z,{container:!0,columns:12},null==a?void 0:a.map((function(e,r){return o().createElement(n.Z,{mb:1,xs:12,sm:6,md:4,key:r},o().createElement(u.U,null,o().createElement(c.K,{mode:i,name:e.ReservoirName,percent:e.ratio,time:e.ObservationTime,width:300,height:300})))})))}var g=t(4212),b=t(6495),y=t(9449);function E(){var e=(0,l.v)().data,r=(0,l.P)().data,t=(0,h.C)((function(e){return e.water.condition})),a=e&&r?p(e,r,t):[],n=(0,h.C)((function(e){return e.theme.mode})),i=function(e){var r=e.map((function(e){return 100*e.ratio}));return{labels:e.map((function(e){return e.ReservoirName})),datasets:[{fill:!0,backgroundColor:"blue",pointBackgroundColor:"aqua",pointRadius:6,data:r}]}}(a),c=(0,s.$)("water").t;return o().createElement(o().Fragment,null,o().createElement(b.x1,{options:{scales:{x:{title:{padding:20,display:!0,text:c("reservoir"),color:"light"===n?"#1b1b1f":"#e3e2e6",font:{size:32,family:"sans-serif, 'Noto Sans TC'"}},ticks:{color:"light"===n?"#1b1b1f":"#e3e2e6",font:{size:20,family:"sans-serif, 'Noto Sans TC'"}}},y:{offset:!0,ticks:{color:"light"===n?"#1b1b1f":"#e3e2e6",callback:function(e){return"".concat(e,"%")}},max:100,min:0}},plugins:{legend:{display:!1}}},data:i}))}function k(){var e=(0,s.$)("water").t,r=(0,h.C)((function(e){return e.water.condition.modeChosen}));return o().createElement(o().Fragment,null,o().createElement(a.Z,{variant:"h1"},e("storage-ratio")),o().createElement(g.WY,null),o().createElement(n.Z,{container:!0,columns:12},o().createElement(n.Z,{xs:12},o().createElement(a.Z,{variant:"h2"},e("single"===r[0]?"single":"compare")))),"single"===r[0]?o().createElement(C,null):o().createElement(E,null))}y.kL.register(y.uw,y.f$,y.od,y.jn,y.Dx,y.u,y.De,y.Gu)}}]);