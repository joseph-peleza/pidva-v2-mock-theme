(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1392:function(e,a,t){"undefined"!==typeof window?(window.React=t(0),window.ReactDOM=t(11),window.createReactClass=t(290),t(1395),e.exports=window.AmCharts):e.exports={}},1394:function(e,a,t){"use strict";var l=t(0),r=t.n(l);a.a=function(e){var a=e.title;e.match;return r.a.createElement("div",{className:"gx-page-heading"},r.a.createElement("h2",{className:"gx-page-title"},a))}},1395:function(e,a){!function(){function e(e){return{}.toString.call(e)}function a(e,a){return{}.hasOwnProperty.call(e,a)}function t(l){switch(e(l)){case"[object Array]":return function(e){for(var a=e.length,l=new Array(a),r=0;r<a;++r)l[r]=t(e[r]);return l}(l);case"[object Object]":return function(e){var l={};for(var r in e)a(e,r)&&(l[r]=t(e[r]));return l}(l);case"[object Date]":return new Date(l.getTime());default:return l}}function l(e){return e!==e}function r(e,a,t){if(a!==t){null==a&&(a=[]),null==t&&(t=[]);for(var l=a.length,r=t.length,c=0;c<l;++c){for(var i=a[c],o=!1,s=0;s<r;++s){var d=t[s];if(i.event===d.event&&i.method===d.method){o=!0;break}}o||e.removeListener(e,i.event,i.method)}}}function c(r,o,s,d){var u=!1;if(s!==d&&a(r,o)){var n=e(s);if(n===e(d))switch(n){case"[object Array]":"groupToPeriods"===o?(r[o]=t(d),u=!0):function(e,a,l){var r=!1;if(a!==l){var i=a.length,o=l.length;i!==o&&(e.length=o,r=!0);for(var s=0;s<o;++s)s<i?c(e,s,a[s],l[s])&&(r=!0):(e[s]=t(l[s]),r=!0)}return r}(r[o],s,d)&&(u=!0);break;case"[object Object]":i(r[o],s,d)&&(u=!0);break;case"[object Date]":s.getTime()!==d.getTime()&&(r[o]=t(d),u=!0);break;case"[object Number]":(function(e,a){return e===a||l(e)&&l(a)})(s,d)||(r[o]=t(d),u=!0);break;default:r[o]=t(d),u=!0}else r[o]=t(d),u=!0}return u}function i(e,l,i){var o=!1;if(l!==i){for(var s in i)a(i,s)&&(a(l,s)?("listeners"===s&&r(e,l[s],i[s]),c(e,s,l[s],i[s])&&(o=!0)):(e[s]=t(i[s]),o=!0));for(var s in l)a(l,s)&&!a(i,s)&&("listeners"===s&&r(e,l[s],[]),delete e[s],o=!0)}return o}var o=0;AmCharts.React=createReactClass({getInitialState:function(){return{id:"__AmCharts_React_"+ ++o+"__",chart:null}},componentDidMount:function(){var e=t(this.props.options),a=AmCharts.makeChart(this.state.id,e,this.props.delay);this.setState({chart:a})},componentDidUpdate:function(e){this.state.chart&&(i(this.state.chart,e.options,this.props.options)&&this.state.chart.validateNow(!0))},componentWillUnmount:function(){this.state.chart&&this.state.chart.clear()},render:function(){return React.createElement("div",{id:this.state.id,className:this.props.className,style:this.props.style})}})}()},1470:function(e,a,t){"use strict";var l=t(0),r=t.n(l),c=t(1392),i=t.n(c);a.a=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:80,dataProvider:[{lineColor:"#b7e021",date:"2012-01-01",duration:408},{date:"2019-01-02",duration:482},{date:"2019-01-03",duration:562},{date:"2019-01-04",duration:379},{lineColor:"#fbd51a",date:"2019-01-05",duration:501},{date:"2019-01-06",duration:443},{date:"2019-01-07",duration:405},{date:"2019-01-08",duration:309,lineColor:"#2498d2"},{date:"2019-01-09",duration:287},{date:"2019-01-10",duration:485},{date:"2019-01-11",duration:890},{date:"2019-01-12",duration:810}],balloon:{cornerRadius:6,horizontalPadding:15,verticalPadding:10},valueAxes:[{duration:"mm",durationUnits:{hh:"h ",mm:"min"},axisAlpha:0}],graphs:[{bullet:"square",bulletBorderAlpha:1,bulletBorderThickness:1,fillAlphas:.3,fillColorsField:"lineColor",legendValueText:"[[value]]",lineColorField:"lineColor",title:"duration",valueField:"duration"}],chartScrollbar:{},chartCursor:{categoryBalloonDateFormat:"YYYY MMM DD",cursorAlpha:0,fullWidth:!0},dataDateFormat:"YYYY-MM-DD",categoryField:"date",categoryAxis:{dateFormats:[{period:"DD",format:"DD"},{period:"WW",format:"MMM DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}],parseDates:!0,autoGridCount:!1,axisColor:"#555555",gridAlpha:0,gridCount:50},export:{enabled:!0}}}))}},1934:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),c=t(194),i=t(106),o=t(1371),s=t(1392),d=t.n(s),u=function(){var e={type:"serial",theme:"light",marginRight:80,dataProvider:function(){var e=[],a=new Date;a.setMinutes(a.getDate()-1e3);for(var t=500,l=0;l<500;l++){var r=new Date(a);r.setMinutes(r.getMinutes()+l),t+=Math.round((Math.random()<.5?1:-1)*Math.random()*10),e.push({date:r,visits:t})}return e}(),valueAxes:[{position:"left",title:"Unique visitors"}],graphs:[{id:"g1",fillAlphas:.4,valueField:"visits",balloonText:"<div style='margin:5px; font-size:19px;'>Visits:<b>[[value]]</b></div>"}],chartScrollbar:{graph:"g1",scrollbarHeight:80,backgroundAlpha:0,selectedBackgroundAlpha:.1,selectedBackgroundColor:"#888888",graphFillAlpha:0,graphLineAlpha:.5,selectedGraphFillAlpha:0,selectedGraphLineAlpha:1,autoGridCount:!0,color:"#AAAAAA"},chartCursor:{categoryBalloonDateFormat:"JJ:NN, DD MMMM",cursorPosition:"mouse"},categoryField:"date",categoryAxis:{minPeriod:"mm",parseDates:!0},export:{enabled:!0,dateFormat:"YYYY-MM-DD HH:NN:SS"}};return r.a.createElement("div",{className:"App"},r.a.createElement(d.a.React,{style:{width:"100%",height:"500px"},options:e}))},n=t(1470),v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:30,legend:{equalWidths:!1,periodValueText:"total: [[value.sum]]",position:"top",valueAlign:"left",valueWidth:100},dataProvider:[{year:1994,cars:1587,motorcycles:650,bicycles:121},{year:1995,cars:1567,motorcycles:683,bicycles:146},{year:1996,cars:1617,motorcycles:691,bicycles:138},{year:1997,cars:1630,motorcycles:642,bicycles:127},{year:1998,cars:1660,motorcycles:699,bicycles:105},{year:1999,cars:1683,motorcycles:721,bicycles:109},{year:2e3,cars:1691,motorcycles:737,bicycles:112},{year:2001,cars:1298,motorcycles:680,bicycles:101},{year:2002,cars:1275,motorcycles:664,bicycles:97},{year:2003,cars:1246,motorcycles:648,bicycles:93},{year:2004,cars:1318,motorcycles:697,bicycles:111},{year:2005,cars:1213,motorcycles:633,bicycles:87},{year:2006,cars:1199,motorcycles:621,bicycles:79},{year:2007,cars:1110,motorcycles:210,bicycles:81},{year:2008,cars:1165,motorcycles:232,bicycles:75},{year:2009,cars:1145,motorcycles:219,bicycles:88},{year:2010,cars:1163,motorcycles:201,bicycles:82},{year:2011,cars:1180,motorcycles:285,bicycles:87},{year:2012,cars:1159,motorcycles:277,bicycles:71}],valueAxes:[{stackType:"regular",gridAlpha:.07,position:"left",title:"Traffic incidents"}],graphs:[{balloonText:"<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",fillAlphas:.6,hidden:!0,lineAlpha:.4,title:"Cars",valueField:"cars"},{balloonText:"<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",fillAlphas:.6,lineAlpha:.4,title:"Motorcycles",valueField:"motorcycles"},{balloonText:"<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",fillAlphas:.6,lineAlpha:.4,title:"Bicycles",valueField:"bicycles"}],plotAreaBorderAlpha:0,marginTop:10,marginLeft:0,marginBottom:0,chartScrollbar:{},chartCursor:{cursorAlpha:0},categoryField:"year",categoryAxis:{startOnAxis:!0,axisColor:"#DADADA",gridAlpha:.07,title:"Year",guides:[{category:"2001",toCategory:"2003",lineColor:"#CC0000",lineAlpha:1,fillAlpha:.2,fillColor:"#CC0000",dashLength:2,inside:!0,labelRotation:90,label:"fines for speeding increased"},{category:"2007",lineColor:"#CC0000",lineAlpha:1,dashLength:2,inside:!0,labelRotation:90,label:"motorcycle fee introduced"}]},export:{enabled:!0}}}))},m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",titles:[{text:"Traffic incidents per year",size:15}],legend:{align:"center",equalWidths:!1,periodValueText:"total: [[value.sum]]",valueAlign:"left",valueText:"[[value]] ([[percents]]%)",valueWidth:100},dataProvider:[{year:"2000",cars:1587,motorcycles:650,bicycles:121},{year:"1995",cars:1567,motorcycles:683,bicycles:146},{year:"1996",cars:1617,motorcycles:691,bicycles:138},{year:"1997",cars:1630,motorcycles:642,bicycles:127},{year:"1998",cars:1660,motorcycles:699,bicycles:105},{year:"1999",cars:1683,motorcycles:721,bicycles:109},{year:"2000",cars:1691,motorcycles:737,bicycles:112},{year:"2001",cars:1298,motorcycles:680,bicycles:101},{year:"2002",cars:1275,motorcycles:664,bicycles:97},{year:"2003",cars:1246,motorcycles:648,bicycles:93},{year:"2004",cars:1218,motorcycles:637,bicycles:101},{year:"2005",cars:1213,motorcycles:633,bicycles:87},{year:"2006",cars:1199,motorcycles:621,bicycles:79},{year:"2007",cars:1110,motorcycles:210,bicycles:81},{year:"2008",cars:1165,motorcycles:232,bicycles:75},{year:"2009",cars:1145,motorcycles:219,bicycles:88},{year:"2010",cars:1163,motorcycles:201,bicycles:82},{year:"2011",cars:1180,motorcycles:285,bicycles:87},{year:"2012",cars:1159,motorcycles:277,bicycles:71}],valueAxes:[{stackType:"100%",gridAlpha:.07,position:"left",title:"percent"}],graphs:[{balloonText:"<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",fillAlphas:.5,lineAlpha:.5,title:"Cars",valueField:"cars"},{balloonText:"<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",fillAlphas:.5,lineAlpha:.5,title:"Motorcycles",valueField:"motorcycles"},{balloonText:"<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",fillAlphas:.5,lineAlpha:.5,title:"Bicycles",valueField:"bicycles"}],plotAreaBorderAlpha:0,marginLeft:0,marginBottom:0,chartCursor:{cursorAlpha:0,zoomable:!1},categoryField:"year",categoryAxis:{startOnAxis:!0,axisColor:"#DADADA",gridAlpha:.07},export:{enabled:!0}}}))},h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:40,marginLeft:40,autoMarginOffset:20,dataDateFormat:"YYYY-MM-DD",valueAxes:[{id:"v1",axisAlpha:0,position:"left",ignoreAxisWidth:!0}],balloon:{borderThickness:1,shadowAlpha:0},graphs:[{id:"g1",balloon:{drop:!0,adjustBorderColor:!1,color:"#ffffff",type:"smoothedLine"},fillAlphas:.2,bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",bulletSize:5,hideBulletsCount:50,lineThickness:2,title:"red line",useLineColorForBulletBorder:!0,valueField:"value",balloonText:"<span style='font-size:18px;'>[[value]]</span>"}],chartCursor:{valueLineEnabled:!0,valueLineBalloonEnabled:!0,cursorAlpha:0,zoomable:!1,valueZoomable:!0,valueLineAlpha:.5},valueScrollbar:{autoGridCount:!0,color:"#000000",scrollbarHeight:50},categoryField:"date",categoryAxis:{parseDates:!0,dashLength:1,minorGridEnabled:!0},export:{enabled:!0},dataProvider:[{date:"2012-07-27",value:13},{date:"2012-07-28",value:11},{date:"2012-07-29",value:15},{date:"2012-07-30",value:16},{date:"2012-07-31",value:18},{date:"2012-08-01",value:13},{date:"2012-08-02",value:22},{date:"2012-08-03",value:23},{date:"2012-08-04",value:20},{date:"2012-08-05",value:17},{date:"2012-08-06",value:16},{date:"2012-08-07",value:18},{date:"2012-08-08",value:21},{date:"2012-08-09",value:26},{date:"2012-08-10",value:24},{date:"2012-08-11",value:29},{date:"2012-08-12",value:32},{date:"2012-08-13",value:18},{date:"2012-08-14",value:24},{date:"2012-08-15",value:22},{date:"2012-08-16",value:18},{date:"2012-08-17",value:19},{date:"2012-08-18",value:14},{date:"2012-08-19",value:15},{date:"2012-08-20",value:12},{date:"2012-08-21",value:8},{date:"2012-08-22",value:9},{date:"2012-08-23",value:8},{date:"2012-08-24",value:7},{date:"2012-08-25",value:5},{date:"2012-08-26",value:11},{date:"2012-08-27",value:13},{date:"2012-08-28",value:18},{date:"2012-08-29",value:20},{date:"2012-08-30",value:29},{date:"2012-08-31",value:33},{date:"2012-09-01",value:42},{date:"2012-09-02",value:35},{date:"2012-09-03",value:31},{date:"2012-09-04",value:47},{date:"2012-09-05",value:52},{date:"2012-09-06",value:46},{date:"2012-09-07",value:41},{date:"2012-09-08",value:43},{date:"2012-09-09",value:40},{date:"2012-09-10",value:39},{date:"2012-09-11",value:34},{date:"2012-09-12",value:29},{date:"2012-09-13",value:34},{date:"2012-09-14",value:37},{date:"2012-09-15",value:42},{date:"2012-09-16",value:49},{date:"2012-09-17",value:46},{date:"2012-09-18",value:47},{date:"2012-09-19",value:55},{date:"2012-09-20",value:59},{date:"2012-09-21",value:58},{date:"2012-09-22",value:57},{date:"2012-09-23",value:61},{date:"2012-09-24",value:59},{date:"2012-09-25",value:67},{date:"2012-09-26",value:65},{date:"2012-09-27",value:61},{date:"2012-09-28",value:66},{date:"2012-09-29",value:69},{date:"2012-09-30",value:71},{date:"2012-10-01",value:67},{date:"2012-10-02",value:63},{date:"2012-10-03",value:46},{date:"2012-10-04",value:32},{date:"2012-10-05",value:21},{date:"2012-10-06",value:18},{date:"2012-10-07",value:21},{date:"2012-10-08",value:28},{date:"2012-10-09",value:27},{date:"2012-10-10",value:36},{date:"2012-10-11",value:33},{date:"2012-10-12",value:31},{date:"2012-10-13",value:30},{date:"2012-10-14",value:34},{date:"2012-10-15",value:38},{date:"2012-10-16",value:37},{date:"2012-10-17",value:44},{date:"2012-10-18",value:49},{date:"2012-10-19",value:53},{date:"2012-10-20",value:57},{date:"2012-10-21",value:60},{date:"2012-10-22",value:61},{date:"2012-10-23",value:69},{date:"2012-10-24",value:67},{date:"2012-10-25",value:72},{date:"2012-10-26",value:77},{date:"2012-10-27",value:75},{date:"2012-10-28",value:70},{date:"2012-10-29",value:72},{date:"2012-10-30",value:70},{date:"2012-10-31",value:72},{date:"2012-11-01",value:73},{date:"2012-11-02",value:67},{date:"2012-11-03",value:68},{date:"2012-11-04",value:65},{date:"2012-11-05",value:71},{date:"2012-11-06",value:75},{date:"2012-11-07",value:74},{date:"2012-11-08",value:71},{date:"2012-11-09",value:76},{date:"2012-11-10",value:77},{date:"2012-11-11",value:81},{date:"2012-11-12",value:83},{date:"2012-11-13",value:80},{date:"2012-11-14",value:81},{date:"2012-11-15",value:87},{date:"2012-11-16",value:82},{date:"2012-11-17",value:86},{date:"2012-11-18",value:80},{date:"2012-11-19",value:87},{date:"2012-11-20",value:83},{date:"2012-11-21",value:85},{date:"2012-11-22",value:84},{date:"2012-11-23",value:82},{date:"2012-11-24",value:73},{date:"2012-11-25",value:71},{date:"2012-11-26",value:75},{date:"2012-11-27",value:79},{date:"2012-11-28",value:70},{date:"2012-11-29",value:73},{date:"2012-11-30",value:61},{date:"2012-12-01",value:62},{date:"2012-12-02",value:66},{date:"2012-12-03",value:65},{date:"2012-12-04",value:73},{date:"2012-12-05",value:79},{date:"2012-12-06",value:78},{date:"2012-12-07",value:78},{date:"2012-12-08",value:78},{date:"2012-12-09",value:74},{date:"2012-12-10",value:73},{date:"2012-12-11",value:75},{date:"2012-12-12",value:70},{date:"2012-12-13",value:77},{date:"2012-12-14",value:67},{date:"2012-12-15",value:62},{date:"2012-12-16",value:64},{date:"2012-12-17",value:61},{date:"2012-12-18",value:59},{date:"2012-12-19",value:53},{date:"2012-12-20",value:54},{date:"2012-12-21",value:56},{date:"2012-12-22",value:59},{date:"2012-12-23",value:58},{date:"2012-12-24",value:55},{date:"2012-12-25",value:52},{date:"2012-12-26",value:54},{date:"2012-12-27",value:50},{date:"2012-12-28",value:50},{date:"2012-12-29",value:51},{date:"2012-12-30",value:52},{date:"2012-12-31",value:58},{date:"2013-01-01",value:60},{date:"2013-01-02",value:67},{date:"2013-01-03",value:64},{date:"2013-01-04",value:66},{date:"2013-01-05",value:60},{date:"2013-01-06",value:63},{date:"2013-01-07",value:61},{date:"2013-01-08",value:60},{date:"2013-01-09",value:65},{date:"2013-01-10",value:75},{date:"2013-01-11",value:77},{date:"2013-01-12",value:78},{date:"2013-01-13",value:70},{date:"2013-01-14",value:70},{date:"2013-01-15",value:73},{date:"2013-01-16",value:71},{date:"2013-01-17",value:74},{date:"2013-01-18",value:78},{date:"2013-01-19",value:85},{date:"2013-01-20",value:82},{date:"2013-01-21",value:83},{date:"2013-01-22",value:88},{date:"2013-01-23",value:85},{date:"2013-01-24",value:85},{date:"2013-01-25",value:80},{date:"2013-01-26",value:87},{date:"2013-01-27",value:84},{date:"2013-01-28",value:83},{date:"2013-01-29",value:84},{date:"2013-01-30",value:81}]}}))},p=t(1394),y=t(2);a.default=function(e){var a=e.match;return r.a.createElement("div",{className:"gx-main-content"},r.a.createElement(p.a,{title:r.a.createElement(y.a,{id:"sidebar.chart.area"}),match:a}),r.a.createElement(c.a,null,r.a.createElement(i.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Simple Area Chart"},r.a.createElement(u,null))),r.a.createElement(i.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Percent Area Chart"},r.a.createElement(h,null))),r.a.createElement(i.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"AreaChart Connect Nulls"},r.a.createElement(v,null))),r.a.createElement(i.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Synchronized Area Chart"},r.a.createElement(m,null))),r.a.createElement(i.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.a,{className:"gx-card",title:"Stacked Area Chart"},r.a.createElement(n.a,null)))))}}}]);
//# sourceMappingURL=25.9a3b97a2.chunk.js.map