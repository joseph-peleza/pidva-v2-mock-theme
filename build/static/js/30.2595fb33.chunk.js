(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1392:function(e,t,a){"undefined"!==typeof window?(window.React=a(0),window.ReactDOM=a(11),window.createReactClass=a(290),a(1395),e.exports=window.AmCharts):e.exports={}},1394:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.title;e.match;return n.a.createElement("div",{className:"gx-page-heading"},n.a.createElement("h2",{className:"gx-page-title"},t))}},1395:function(e,t){!function(){function e(e){return{}.toString.call(e)}function t(e,t){return{}.hasOwnProperty.call(e,t)}function a(r){switch(e(r)){case"[object Array]":return function(e){for(var t=e.length,r=new Array(t),n=0;n<t;++n)r[n]=a(e[n]);return r}(r);case"[object Object]":return function(e){var r={};for(var n in e)t(e,n)&&(r[n]=a(e[n]));return r}(r);case"[object Date]":return new Date(r.getTime());default:return r}}function r(e){return e!==e}function n(e,t,a){if(t!==a){null==t&&(t=[]),null==a&&(a=[]);for(var r=t.length,n=a.length,i=0;i<r;++i){for(var l=t[i],c=!1,s=0;s<n;++s){var o=a[s];if(l.event===o.event&&l.method===o.method){c=!0;break}}c||e.removeListener(e,l.event,l.method)}}}function i(n,c,s,o){var u=!1;if(s!==o&&t(n,c)){var d=e(s);if(d===e(o))switch(d){case"[object Array]":"groupToPeriods"===c?(n[c]=a(o),u=!0):function(e,t,r){var n=!1;if(t!==r){var l=t.length,c=r.length;l!==c&&(e.length=c,n=!0);for(var s=0;s<c;++s)s<l?i(e,s,t[s],r[s])&&(n=!0):(e[s]=a(r[s]),n=!0)}return n}(n[c],s,o)&&(u=!0);break;case"[object Object]":l(n[c],s,o)&&(u=!0);break;case"[object Date]":s.getTime()!==o.getTime()&&(n[c]=a(o),u=!0);break;case"[object Number]":(function(e,t){return e===t||r(e)&&r(t)})(s,o)||(n[c]=a(o),u=!0);break;default:n[c]=a(o),u=!0}else n[c]=a(o),u=!0}return u}function l(e,r,l){var c=!1;if(r!==l){for(var s in l)t(l,s)&&(t(r,s)?("listeners"===s&&n(e,r[s],l[s]),i(e,s,r[s],l[s])&&(c=!0)):(e[s]=a(l[s]),c=!0));for(var s in r)t(r,s)&&!t(l,s)&&("listeners"===s&&n(e,r[s],[]),delete e[s],c=!0)}return c}var c=0;AmCharts.React=createReactClass({getInitialState:function(){return{id:"__AmCharts_React_"+ ++c+"__",chart:null}},componentDidMount:function(){var e=a(this.props.options),t=AmCharts.makeChart(this.state.id,e,this.props.delay);this.setState({chart:t})},componentDidUpdate:function(e){this.state.chart&&(l(this.state.chart,e.options,this.props.options)&&this.state.chart.validateNow(!0))},componentWillUnmount:function(){this.state.chart&&this.state.chart.clear()},render:function(){return React.createElement("div",{id:this.state.id,className:this.props.className,style:this.props.style})}})}()},1912:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(194),l=a(106),c=a(1371),s=a(1392),o=a.n(s),u=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a.React,{style:{width:"100%",height:"300px"},options:{type:"pie",theme:"light",dataProvider:[{title:"New",value:4852},{title:"Returning",value:9899}],titleField:"title",valueField:"value",labelRadius:5,radius:"42%",innerRadius:"60%",labelText:"[[title]]",export:{enabled:!0}}}))},d=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a.React,{style:{width:"100%",height:"500px"},options:{type:"pie",theme:"light",titles:[{text:"Visitors countries",size:16}],dataProvider:[{country:"United States",visits:7252},{country:"China",visits:3882},{country:"Japan",visits:1809},{country:"Germany",visits:1322},{country:"United Kingdom",visits:1122},{country:"France",visits:414},{country:"India",visits:384},{country:"Spain",visits:211}],valueField:"visits",titleField:"country",startEffect:"elastic",startDuration:2,labelRadius:15,innerRadius:"50%",depth3D:10,balloonText:"[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",angle:15,export:{enabled:!0}}}))},p=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a.React,{style:{width:"100%",height:"500px"},options:{type:"pie",theme:"light",innerRadius:"40%",gradientRatio:[-.4,-.4,-.4,-.4,-.4,-.4,0,.1,.2,.1,0,-.2,-.5],dataProvider:[{country:"Lithuania",litres:501.9},{country:"Czech Republic",litres:301.9},{country:"Ireland",litres:201.1},{country:"Germany",litres:165.8},{country:"Australia",litres:139.9},{country:"Austria",litres:128.3}],balloonText:"[[value]]",valueField:"litres",titleField:"country",balloon:{drop:!0,adjustBorderColor:!1,color:"#FFFFFF",fontSize:16},export:{enabled:!0}}}))},m=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a.React,{style:{width:"100%",height:"500px"},options:{type:"pie",theme:"light",dataProvider:[{country:"Lithuania",value:260},{country:"Ireland",value:201},{country:"Germany",value:65},{country:"Australia",value:39},{country:"UK",value:19},{country:"Latvia",value:10}],valueField:"value",titleField:"country",outlineAlpha:.4,depth3D:15,balloonText:"[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",angle:30,export:{enabled:!0}}}))},h=function(){var e,t=[{type:"Fossil Energy",percent:70,color:"#ff9e01",subs:[{type:"Oil",percent:15},{type:"Coal",percent:35},{type:"Nuclear",percent:20}]},{type:"Green Energy",percent:30,color:"#b0de09",subs:[{type:"Hydro",percent:15},{type:"Wind",percent:10},{type:"Other",percent:5}]}];function a(){for(var a=[],r=0;r<t.length;r++)if(r===e)for(var n=0;n<t[r].subs.length;n++)a.push({type:t[r].subs[n].type,percent:t[r].subs[n].percent,color:t[r].color,pulled:!0});else a.push({type:t[r].type,percent:t[r].percent,color:t[r].color,id:r});return a}var r={type:"pie",theme:"light",dataProvider:a(),labelText:"[[title]]: [[value]]",balloonText:"[[title]]: [[value]]",titleField:"type",valueField:"percent",outlineColor:"#FFFFFF",outlineAlpha:.8,outlineThickness:2,colorField:"color",pulledField:"pulled",titles:[{text:"Click a slice to see the details"}],listeners:[{event:"clickSlice",method:function(t){var r=t.chart;e=void 0!==t.dataItem.dataContext.id?t.dataItem.dataContext.id:void 0,r.dataProvider=a(),r.validateData()}}],export:{enabled:!0}};return n.a.createElement("div",{className:"App"},n.a.createElement(o.a.React,{style:{width:"100%",height:"500px"},options:r}))},v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a.React,{style:{width:"100%",height:"500px"},options:{type:"pie",theme:"light",dataProvider:[{country:"Lithuania",litres:501.9},{country:"Czech Republic",litres:301.9},{country:"Ireland",litres:201.1},{country:"Germany",litres:165.8},{country:"Australia",litres:139.9},{country:"Austria",litres:128.3},{country:"UK",litres:99},{country:"Belgium",litres:60},{country:"The Netherlands",litres:50}],valueField:"litres",titleField:"country",balloon:{fixedPosition:!0},export:{enabled:!0}}}))},y=a(1394),f=a(2);t.default=function(e){var t=e.match;return n.a.createElement("div",{className:"gx-main-content"},n.a.createElement(y.a,{title:n.a.createElement(f.a,{id:"sidebar.chart.pie"}),match:t}),n.a.createElement(i.a,null,n.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},n.a.createElement(c.a,{className:"gx-card",title:"Simple Pie Chart"},n.a.createElement(v,null))),n.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},n.a.createElement(c.a,{className:"gx-card",title:"Donut Chart"},n.a.createElement(u,null))),n.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},n.a.createElement(c.a,{className:"gx-card",title:"3D Donut Chart"},n.a.createElement(d,null))),n.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},n.a.createElement(c.a,{className:"gx-card",title:"Donut With Radial Gradient"},n.a.createElement(p,null))),n.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},n.a.createElement(c.a,{className:"gx-card",title:"3D Pie Chart"},n.a.createElement(m,null))),n.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},n.a.createElement(c.a,{className:"gx-card",title:"Pie Chart With Broken Down Slices"},n.a.createElement(h,null)))))}}}]);
//# sourceMappingURL=30.2595fb33.chunk.js.map