(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1393:function(e,a,l){"undefined"!==typeof window?(window.React=l(0),window.ReactDOM=l(11),window.createReactClass=l(290),l(1396),e.exports=window.AmCharts):e.exports={}},1395:function(e,a,l){"use strict";var t=l(0),r=l.n(t);a.a=function(e){var a=e.title;e.match;return r.a.createElement("div",{className:"gx-page-heading"},r.a.createElement("h2",{className:"gx-page-title"},a))}},1396:function(e,a){!function(){function e(e){return{}.toString.call(e)}function a(e,a){return{}.hasOwnProperty.call(e,a)}function l(t){switch(e(t)){case"[object Array]":return function(e){for(var a=e.length,t=new Array(a),r=0;r<a;++r)t[r]=l(e[r]);return t}(t);case"[object Object]":return function(e){var t={};for(var r in e)a(e,r)&&(t[r]=l(e[r]));return t}(t);case"[object Date]":return new Date(t.getTime());default:return t}}function t(e){return e!==e}function r(e,a,l){if(a!==l){null==a&&(a=[]),null==l&&(l=[]);for(var t=a.length,r=l.length,u=0;u<t;++u){for(var o=a[u],i=!1,d=0;d<r;++d){var n=l[d];if(o.event===n.event&&o.method===n.method){i=!0;break}}i||e.removeListener(e,o.event,o.method)}}}function u(r,i,d,n){var v=!1;if(d!==n&&a(r,i)){var s=e(d);if(s===e(n))switch(s){case"[object Array]":"groupToPeriods"===i?(r[i]=l(n),v=!0):function(e,a,t){var r=!1;if(a!==t){var o=a.length,i=t.length;o!==i&&(e.length=i,r=!0);for(var d=0;d<i;++d)d<o?u(e,d,a[d],t[d])&&(r=!0):(e[d]=l(t[d]),r=!0)}return r}(r[i],d,n)&&(v=!0);break;case"[object Object]":o(r[i],d,n)&&(v=!0);break;case"[object Date]":d.getTime()!==n.getTime()&&(r[i]=l(n),v=!0);break;case"[object Number]":(function(e,a){return e===a||t(e)&&t(a)})(d,n)||(r[i]=l(n),v=!0);break;default:r[i]=l(n),v=!0}else r[i]=l(n),v=!0}return v}function o(e,t,o){var i=!1;if(t!==o){for(var d in o)a(o,d)&&(a(t,d)?("listeners"===d&&r(e,t[d],o[d]),u(e,d,t[d],o[d])&&(i=!0)):(e[d]=l(o[d]),i=!0));for(var d in t)a(t,d)&&!a(o,d)&&("listeners"===d&&r(e,t[d],[]),delete e[d],i=!0)}return i}var i=0;AmCharts.React=createReactClass({getInitialState:function(){return{id:"__AmCharts_React_"+ ++i+"__",chart:null}},componentDidMount:function(){var e=l(this.props.options),a=AmCharts.makeChart(this.state.id,e,this.props.delay);this.setState({chart:a})},componentDidUpdate:function(e){this.state.chart&&(o(this.state.chart,e.options,this.props.options)&&this.state.chart.validateNow(!0))},componentWillUnmount:function(){this.state.chart&&this.state.chart.clear()},render:function(){return React.createElement("div",{id:this.state.id,className:this.props.className,style:this.props.style})}})}()},1471:function(e,a,l){"use strict";var t=l(0),r=l.n(t),u=l(1393),o=l.n(u);a.a=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:80,dataProvider:[{lineColor:"#b7e021",date:"2012-01-01",duration:408},{date:"2019-01-02",duration:482},{date:"2019-01-03",duration:562},{date:"2019-01-04",duration:379},{lineColor:"#fbd51a",date:"2019-01-05",duration:501},{date:"2019-01-06",duration:443},{date:"2019-01-07",duration:405},{date:"2019-01-08",duration:309,lineColor:"#2498d2"},{date:"2019-01-09",duration:287},{date:"2019-01-10",duration:485},{date:"2019-01-11",duration:890},{date:"2019-01-12",duration:810}],balloon:{cornerRadius:6,horizontalPadding:15,verticalPadding:10},valueAxes:[{duration:"mm",durationUnits:{hh:"h ",mm:"min"},axisAlpha:0}],graphs:[{bullet:"square",bulletBorderAlpha:1,bulletBorderThickness:1,fillAlphas:.3,fillColorsField:"lineColor",legendValueText:"[[value]]",lineColorField:"lineColor",title:"duration",valueField:"duration"}],chartScrollbar:{},chartCursor:{categoryBalloonDateFormat:"YYYY MMM DD",cursorAlpha:0,fullWidth:!0},dataDateFormat:"YYYY-MM-DD",categoryField:"date",categoryAxis:{dateFormats:[{period:"DD",format:"DD"},{period:"WW",format:"MMM DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}],parseDates:!0,autoGridCount:!1,axisColor:"#555555",gridAlpha:0,gridCount:50},export:{enabled:!0}}}))}},1867:function(e,a,l){"use strict";l.r(a);var t=l(0),r=l.n(t),u=l(194),o=l(106),i=l(1372),d=l(1393),n=l.n(d),v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:40,marginLeft:40,autoMarginOffset:20,mouseWheelZoomEnabled:!0,dataDateFormat:"YYYY-MM-DD",valueAxes:[{id:"v1",axisAlpha:0,position:"left",ignoreAxisWidth:!0}],balloon:{borderThickness:1,shadowAlpha:0},graphs:[{id:"g1",balloon:{drop:!0,adjustBorderColor:!1,color:"#ffffff"},bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",bulletSize:5,hideBulletsCount:50,lineThickness:2,title:"red line",useLineColorForBulletBorder:!0,valueField:"value",balloonText:"<span style='font-size:18px;'>[[value]]</span>"}],chartScrollbar:{graph:"g1",oppositeAxis:!1,offset:30,scrollbarHeight:80,backgroundAlpha:0,selectedBackgroundAlpha:.1,selectedBackgroundColor:"#888888",graphFillAlpha:0,graphLineAlpha:.5,selectedGraphFillAlpha:0,selectedGraphLineAlpha:1,autoGridCount:!0,color:"#AAAAAA"},chartCursor:{pan:!0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,cursorAlpha:1,cursorColor:"#258cbb",limitToGraph:"g1",valueLineAlpha:.2,valueZoomable:!0},valueScrollbar:{oppositeAxis:!1,offset:50,scrollbarHeight:10},categoryField:"date",categoryAxis:{parseDates:!0,dashLength:1,minorGridEnabled:!0},export:{enabled:!0},dataProvider:[{date:"2012-07-27",value:13},{date:"2012-07-28",value:11},{date:"2012-07-29",value:15},{date:"2012-07-30",value:16},{date:"2012-07-31",value:18},{date:"2012-08-01",value:13},{date:"2012-08-02",value:22},{date:"2012-08-03",value:23},{date:"2012-08-04",value:20},{date:"2012-08-05",value:17},{date:"2012-08-06",value:16},{date:"2012-08-07",value:18},{date:"2012-08-08",value:21},{date:"2012-08-09",value:26},{date:"2012-08-10",value:24},{date:"2012-08-11",value:29},{date:"2012-08-12",value:32},{date:"2012-08-13",value:18},{date:"2012-08-14",value:24},{date:"2012-08-15",value:22},{date:"2012-08-16",value:18},{date:"2012-08-17",value:19},{date:"2012-08-18",value:14},{date:"2012-08-19",value:15},{date:"2012-08-20",value:12},{date:"2012-08-21",value:8},{date:"2012-08-22",value:9},{date:"2012-08-23",value:8},{date:"2012-08-24",value:7},{date:"2012-08-25",value:5},{date:"2012-08-26",value:11},{date:"2012-08-27",value:13},{date:"2012-08-28",value:18},{date:"2012-08-29",value:20},{date:"2012-08-30",value:29},{date:"2012-08-31",value:33},{date:"2012-09-01",value:42},{date:"2012-09-02",value:35},{date:"2012-09-03",value:31},{date:"2012-09-04",value:47},{date:"2012-09-05",value:52},{date:"2012-09-06",value:46},{date:"2012-09-07",value:41},{date:"2012-09-08",value:43},{date:"2012-09-09",value:40},{date:"2012-09-10",value:39},{date:"2012-09-11",value:34},{date:"2012-09-12",value:29},{date:"2012-09-13",value:34},{date:"2012-09-14",value:37},{date:"2012-09-15",value:42},{date:"2012-09-16",value:49},{date:"2012-09-17",value:46},{date:"2012-09-18",value:47},{date:"2012-09-19",value:55},{date:"2012-09-20",value:59},{date:"2012-09-21",value:58},{date:"2012-09-22",value:57},{date:"2012-09-23",value:61},{date:"2012-09-24",value:59},{date:"2012-09-25",value:67},{date:"2012-09-26",value:65},{date:"2012-09-27",value:61},{date:"2012-09-28",value:66},{date:"2012-09-29",value:69},{date:"2012-09-30",value:71},{date:"2012-10-01",value:67},{date:"2012-10-02",value:63},{date:"2012-10-03",value:46},{date:"2012-10-04",value:32},{date:"2012-10-05",value:21},{date:"2012-10-06",value:18},{date:"2012-10-07",value:21},{date:"2012-10-08",value:28},{date:"2012-10-09",value:27},{date:"2012-10-10",value:36},{date:"2012-10-11",value:33},{date:"2012-10-12",value:31},{date:"2012-10-13",value:30},{date:"2012-10-14",value:34},{date:"2012-10-15",value:38},{date:"2012-10-16",value:37},{date:"2012-10-17",value:44},{date:"2012-10-18",value:49},{date:"2012-10-19",value:53},{date:"2012-10-20",value:57},{date:"2012-10-21",value:60},{date:"2012-10-22",value:61},{date:"2012-10-23",value:69},{date:"2012-10-24",value:67},{date:"2012-10-25",value:72},{date:"2012-10-26",value:77},{date:"2012-10-27",value:75},{date:"2012-10-28",value:70},{date:"2012-10-29",value:72},{date:"2012-10-30",value:70},{date:"2012-10-31",value:72},{date:"2012-11-01",value:73},{date:"2012-11-02",value:67},{date:"2012-11-03",value:68},{date:"2012-11-04",value:65},{date:"2012-11-05",value:71},{date:"2012-11-06",value:75},{date:"2012-11-07",value:74},{date:"2012-11-08",value:71},{date:"2012-11-09",value:76},{date:"2012-11-10",value:77},{date:"2012-11-11",value:81},{date:"2012-11-12",value:83},{date:"2012-11-13",value:80},{date:"2012-11-14",value:81},{date:"2012-11-15",value:87},{date:"2012-11-16",value:82},{date:"2012-11-17",value:86},{date:"2012-11-18",value:80},{date:"2012-11-19",value:87},{date:"2012-11-20",value:83},{date:"2012-11-21",value:85},{date:"2012-11-22",value:84},{date:"2012-11-23",value:82},{date:"2012-11-24",value:73},{date:"2012-11-25",value:71},{date:"2012-11-26",value:75},{date:"2012-11-27",value:79},{date:"2012-11-28",value:70},{date:"2012-11-29",value:73},{date:"2012-11-30",value:61},{date:"2012-12-01",value:62},{date:"2012-12-02",value:66},{date:"2012-12-03",value:65},{date:"2012-12-04",value:73},{date:"2012-12-05",value:79},{date:"2012-12-06",value:78},{date:"2012-12-07",value:78},{date:"2012-12-08",value:78},{date:"2012-12-09",value:74},{date:"2012-12-10",value:73},{date:"2012-12-11",value:75},{date:"2012-12-12",value:70},{date:"2012-12-13",value:77},{date:"2012-12-14",value:67},{date:"2012-12-15",value:62},{date:"2012-12-16",value:64},{date:"2012-12-17",value:61},{date:"2012-12-18",value:59},{date:"2012-12-19",value:53},{date:"2012-12-20",value:54},{date:"2012-12-21",value:56},{date:"2012-12-22",value:59},{date:"2012-12-23",value:58},{date:"2012-12-24",value:55},{date:"2012-12-25",value:52},{date:"2012-12-26",value:54},{date:"2012-12-27",value:50},{date:"2012-12-28",value:50},{date:"2012-12-29",value:51},{date:"2012-12-30",value:52},{date:"2012-12-31",value:58},{date:"2013-01-01",value:60},{date:"2013-01-02",value:67},{date:"2013-01-03",value:64},{date:"2013-01-04",value:66},{date:"2013-01-05",value:60},{date:"2013-01-06",value:63},{date:"2013-01-07",value:61},{date:"2013-01-08",value:60},{date:"2013-01-09",value:65},{date:"2013-01-10",value:75},{date:"2013-01-11",value:77},{date:"2013-01-12",value:78},{date:"2013-01-13",value:70},{date:"2013-01-14",value:70},{date:"2013-01-15",value:73},{date:"2013-01-16",value:71},{date:"2013-01-17",value:74},{date:"2013-01-18",value:78},{date:"2013-01-19",value:85},{date:"2013-01-20",value:82},{date:"2013-01-21",value:83},{date:"2013-01-22",value:88},{date:"2013-01-23",value:85},{date:"2013-01-24",value:85},{date:"2013-01-25",value:80},{date:"2013-01-26",value:87},{date:"2013-01-27",value:84},{date:"2013-01-28",value:83},{date:"2013-01-29",value:84},{date:"2013-01-30",value:81}]}}))},s=l(1395),c=l(2),h=function(){var e={type:"serial",theme:"light",marginRight:80,autoMarginOffset:20,marginTop:7,dataProvider:function(){var e=[],a=new Date;a.setDate(a.getDate()-5);for(var l=1200,t=0;t<1e3;t++){var r=new Date(a);r.setDate(r.getDate()+t),l+=Math.round((Math.random()<.5?1:-1)*Math.random()*10),e.push({date:r,visits:l})}return e}(),valueAxes:[{axisAlpha:.2,dashLength:1,position:"left"}],mouseWheelZoomEnabled:!0,graphs:[{id:"g1",balloonText:"[[value]]",bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",hideBulletsCount:50,title:"red line",valueField:"visits",useLineColorForBulletBorder:!0,balloon:{drop:!0}}],chartScrollbar:{autoGridCount:!0,graph:"g1",scrollbarHeight:40},chartCursor:{limitToGraph:"g1"},categoryField:"date",categoryAxis:{parseDates:!0,axisColor:"#DADADA",dashLength:1,minorGridEnabled:!0},export:{enabled:!0}};return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:e}))},p=function(){var e={theme:"light",type:"serial",marginRight:80,autoMarginOffset:20,marginTop:20,dataProvider:function(){var e=[],a=new Date;a.setDate(a.getDate()-150);for(var l=500,t=0;t<150;t++){var r=new Date(a);r.setDate(r.getDate()+t),l+=Math.round((Math.random()<.5?1:-1)*Math.random()*10),e.push({date:r,visits:l})}return e}(),valueAxes:[{id:"v1",axisAlpha:.1}],graphs:[{useNegativeColorIfDown:!0,balloonText:"[[category]]<br><b>value: [[value]]</b>",bullet:"round",bulletBorderAlpha:1,bulletBorderColor:"#FFFFFF",hideBulletsCount:50,lineThickness:2,lineColor:"#fdd400",negativeLineColor:"#67b7dc",valueField:"visits"}],chartScrollbar:{scrollbarHeight:5,backgroundAlpha:.1,backgroundColor:"#868686",selectedBackgroundColor:"#67b7dc",selectedBackgroundAlpha:1},chartCursor:{valueLineEnabled:!0,valueLineBalloonEnabled:!0},categoryField:"date",categoryAxis:{parseDates:!0,axisAlpha:0,minHorizontalGap:60},export:{enabled:!0}};return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:e}))},m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginTop:0,marginRight:80,dataProvider:[{year:"1950",value:-.307},{year:"1951",value:-.168},{year:"1952",value:-.073},{year:"1953",value:-.027},{year:"1954",value:-.251},{year:"1955",value:-.281},{year:"1956",value:-.348},{year:"1957",value:-.074},{year:"1958",value:-.011},{year:"1959",value:-.074},{year:"1960",value:-.124},{year:"1961",value:-.024},{year:"1962",value:-.022},{year:"1963",value:0},{year:"1964",value:-.296},{year:"1965",value:-.217},{year:"1966",value:-.147},{year:"1967",value:-.15},{year:"1968",value:-.16},{year:"1969",value:-.011},{year:"1970",value:-.068},{year:"1971",value:-.19},{year:"1972",value:-.056},{year:"1973",value:.077},{year:"1974",value:-.213},{year:"1975",value:-.17},{year:"1976",value:-.254},{year:"1977",value:.019},{year:"1978",value:-.063},{year:"1979",value:.05},{year:"1980",value:.077},{year:"1981",value:.12},{year:"1982",value:.011},{year:"1983",value:.177},{year:"1984",value:-.021},{year:"1985",value:-.037},{year:"1986",value:.03},{year:"1987",value:.179},{year:"1988",value:.18},{year:"1989",value:.104},{year:"1990",value:.255},{year:"1991",value:.21},{year:"1992",value:.065},{year:"1993",value:.11},{year:"1994",value:.172},{year:"1995",value:.269},{year:"1996",value:.141},{year:"1997",value:.353},{year:"1998",value:.548},{year:"1999",value:.298},{year:"2000",value:.267},{year:"2001",value:.411},{year:"2002",value:.462},{year:"2003",value:.47},{year:"2004",value:.445},{year:"2005",value:.47}],valueAxes:[{axisAlpha:0,position:"left"}],graphs:[{id:"g1",balloonText:"[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",bullet:"round",bulletSize:8,lineColor:"#d1655d",lineThickness:2,negativeLineColor:"#637bb6",type:"smoothedLine",valueField:"value"}],chartScrollbar:{graph:"g1",gridAlpha:0,color:"#888888",scrollbarHeight:55,backgroundAlpha:0,selectedBackgroundAlpha:.1,selectedBackgroundColor:"#888888",graphFillAlpha:0,autoGridCount:!0,selectedGraphFillAlpha:0,graphLineAlpha:.2,graphLineColor:"#c2c2c2",selectedGraphLineColor:"#888888",selectedGraphLineAlpha:1},chartCursor:{categoryBalloonDateFormat:"YYYY",cursorAlpha:0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.5,fullWidth:!0},dataDateFormat:"YYYY",categoryField:"year",categoryAxis:{minPeriod:"YYYY",parseDates:!0,minorGridAlpha:.1,minorGridEnabled:!0},export:{enabled:!0}}}))},g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:80,autoMarginOffset:20,dataDateFormat:"YYYY-MM-DD HH:NN",dataProvider:[{date:"2012-01-01",value:8},{date:"2012-01-02",color:"#CC0000",value:10},{date:"2012-01-03",value:12},{date:"2012-01-04",value:14},{date:"2012-01-05",value:11},{date:"2012-01-06",value:6},{date:"2012-01-07",value:7},{date:"2012-01-08",value:9},{date:"2012-01-09",value:13},{date:"2012-01-10",value:15},{date:"2012-01-11",color:"#CC0000",value:19},{date:"2012-01-12",value:21},{date:"2012-01-13",value:22},{date:"2012-01-14",value:20},{date:"2012-01-15",value:18},{date:"2012-01-16",value:14},{date:"2012-01-17",color:"#CC0000",value:16},{date:"2012-01-18",value:18},{date:"2012-01-19",value:17},{date:"2012-01-20",value:15},{date:"2012-01-21",value:12},{date:"2012-01-22",color:"#CC0000",value:10},{date:"2012-01-23",value:8}],valueAxes:[{axisAlpha:0,guides:[{fillAlpha:.1,fillColor:"#888888",lineAlpha:0,toValue:16,value:10}],position:"left",tickLength:0}],graphs:[{balloonText:"[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",bullet:"round",dashLength:3,colorField:"color",valueField:"value"}],trendLines:[{finalDate:"2012-01-11 12",finalValue:19,initialDate:"2012-01-02 12",initialValue:10,lineColor:"#CC0000"},{finalDate:"2012-01-22 12",finalValue:10,initialDate:"2012-01-17 12",initialValue:16,lineColor:"#CC0000"}],chartScrollbar:{scrollbarHeight:2,offset:-1,backgroundAlpha:.1,backgroundColor:"#888888",selectedBackgroundColor:"#67b7dc",selectedBackgroundAlpha:1},chartCursor:{fullWidth:!0,valueLineEabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.5,cursorAlpha:0},categoryField:"date",categoryAxis:{parseDates:!0,axisAlpha:0,gridAlpha:.1,minorGridAlpha:.1,minorGridEnabled:!0},export:{enabled:!0}}}))},y=l(1471),f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",autoMarginOffset:20,marginRight:80,dataProvider:[{date:"2009-10-01",value:3,fromValue:2,toValue:5},{date:"2009-10-02",value:5,fromValue:4,toValue:6},{date:"2009-10-03",value:15,fromValue:12,toValue:18},{date:"2009-10-04",value:13,fromValue:10.4,toValue:15.6},{date:"2009-10-05",value:17,fromValue:13.6,toValue:20.4},{date:"2009-10-06",value:15,fromValue:12,toValue:18},{date:"2009-10-09",value:19,fromValue:15.2,toValue:22.8},{date:"2009-10-10",value:21,fromValue:16.8,toValue:25.2},{date:"2009-10-11",value:20,fromValue:16,toValue:24},{date:"2009-10-12",value:20,fromValue:16,toValue:24},{date:"2009-10-13",value:19,fromValue:15.2,toValue:22.8},{date:"2009-10-16",value:25,fromValue:20,toValue:30},{date:"2009-10-17",value:24,fromValue:19.2,toValue:28.8},{date:"2009-10-18",value:26,fromValue:20.8,toValue:31.2},{date:"2009-10-19",value:27,fromValue:21.6,toValue:32.4},{date:"2009-10-20",value:25,fromValue:20,toValue:30},{date:"2009-10-23",value:29,fromValue:23.2,toValue:34.8},{date:"2009-10-24",value:28,fromValue:22.4,toValue:33.6},{date:"2009-10-25",value:30,fromValue:24,toValue:36},{date:"2009-10-26",value:72,fromValue:57.6,toValue:86.4},{date:"2009-10-27",value:43,fromValue:34.4,toValue:51.6},{date:"2009-10-30",value:31,fromValue:24.8,toValue:37.2},{date:"2009-11-01",value:30,fromValue:24,toValue:36},{date:"2009-11-02",value:29,fromValue:23.2,toValue:34.8},{date:"2009-11-03",value:27,fromValue:21.6,toValue:32.4},{date:"2009-11-04",value:26,fromValue:20.8,toValue:31.2}],valueAxes:[{axisAlpha:0,position:"left"}],graphs:[{id:"fromGraph",lineAlpha:0,showBalloon:!1,valueField:"fromValue",fillAlphas:0},{fillAlphas:.2,fillToGraph:"fromGraph",lineAlpha:0,showBalloon:!1,valueField:"toValue"},{valueField:"value",balloonText:"<div style='margin:10px; text-align:left'><span style='font-size:11px'>allowed: [[fromValue]] - [[toValue]]</span><br><span style='font-size:18px'>Value:[[value]]</span></div>",fillAlphas:0}],chartCursor:{fullWidth:!0,cursorAlpha:.05,valueLineEnabled:!0,valueLineAlpha:.5,valueLineBalloonEnabled:!0},dataDateFormat:"YYYY-MM-DD",categoryField:"date",categoryAxis:{position:"top",parseDates:!0,axisAlpha:0,minHorizontalGap:25,gridAlpha:0,tickLength:0,dateFormats:[{period:"fff",format:"JJ:NN:SS"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"DD"},{period:"WW",format:"DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}]},chartScrollbar:{},export:{enabled:!0}}}))},b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",titles:[{text:"Step Line Chart"}],theme:"light",autoMarginOffset:25,dataProvider:[{year:"1950",value:-.307},{year:"1951",value:-.168},{year:"1952",value:-.073},{year:"1953",value:-.027},{year:"1954",value:-.251},{year:"1955",value:-.281},{year:"1956",value:-.348},{year:"1957",value:-.074},{year:"1958",value:-.011},{year:"1959",value:-.074},{year:"1960",value:-.124},{year:"1961",value:-.024},{year:"1962",value:-.022},{year:"1963",value:0},{year:"1964",value:-.296},{year:"1965",value:-.217},{year:"1966",value:-.147},{year:"1967",value:-.15},{year:"1968",value:-.16},{year:"1969",value:-.011},{year:"1970",value:-.068},{year:"1971",value:-.19},{year:"1972",value:-.056},{year:"1973",value:.077},{year:"1974",value:-.213},{year:"1975",value:-.17},{year:"1976",value:-.254},{year:"1977",value:.019},{year:"1978",value:-.063},{year:"1979",value:.05},{year:"1980",value:.077},{year:"1981",value:.12},{year:"1982",value:.011},{year:"1983",value:.177},{year:"1984",value:-.021},{year:"1985",value:-.037},{year:"1986",value:.03},{year:"1987",value:.179},{year:"1988",value:.18},{year:"1989",value:.104},{year:"1990",value:.255},{year:"1991",value:.21},{year:"1992",value:.065},{year:"1993",value:.11},{year:"1994",value:.172},{year:"1995",value:.269},{year:"1996",value:.141},{year:"1997",value:.353},{year:"1998",value:.548},{year:"1999",value:.298},{year:"2000",value:.267},{year:"2001",value:.411},{year:"2002",value:.462},{year:"2003",value:.47},{year:"2004",value:.445},{year:"2005",value:.47}],valueAxes:[{axisAlpha:0,position:"right"}],graphs:[{id:"g1",balloonText:"[[category]]<br><b>[[value]] C</b>",type:"step",lineThickness:2,bullet:"square",bulletAlpha:0,bulletSize:4,bulletBorderAlpha:0,valueField:"value"}],chartScrollbar:{graph:"g1",gridAlpha:0,color:"#888888",scrollbarHeight:55,backgroundAlpha:0,selectedBackgroundAlpha:.1,selectedBackgroundColor:"#888888",graphFillAlpha:0,autoGridCount:!0,selectedGraphFillAlpha:0,graphLineAlpha:1,graphLineColor:"#c2c2c2",selectedGraphLineColor:"#888888",selectedGraphLineAlpha:1},chartCursor:{fullWidth:!0,categoryBalloonDateFormat:"YYYY",cursorAlpha:.05,graphBulletAlpha:1},dataDateFormat:"YYYY",categoryField:"year",categoryAxis:{minPeriod:"YYYY",parseDates:!0,gridAlpha:0},export:{enabled:!0}}}))},A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",dataProvider:[{date:"2009-10-02",value:5},{date:"2009-10-03",value:15},{date:"2009-10-04",value:13},{date:"2009-10-05",value:17},{date:"2009-10-06",value:15},{date:"2009-10-09",value:19},{date:"2009-10-10",value:21},{date:"2009-10-11",value:20},{date:"2009-10-12",value:20},{date:"2009-10-13",value:19},{date:"2009-10-16",value:25},{date:"2009-10-17",value:24},{date:"2009-10-18",value:26},{date:"2009-10-19",value:27},{date:"2009-10-20",value:25},{date:"2009-10-23",value:29},{date:"2009-10-24",value:28},{date:"2009-10-25",value:30},{date:"2009-10-26",value:72,customBullet:"https://www.amcharts.com/lib/3/images/redstar.png"},{date:"2009-10-27",value:43},{date:"2009-10-30",value:31},{date:"2009-11-01",value:30},{date:"2009-11-02",value:29},{date:"2009-11-03",value:27},{date:"2009-11-04",value:26}],valueAxes:[{axisAlpha:0,dashLength:4,position:"left"}],graphs:[{bulletSize:14,customBullet:"https://www.amcharts.com/lib/3/images/star.png?x",customBulletField:"customBullet",valueField:"value",balloonText:"<div style='margin:10px; text-align:left;'><span style='font-size:13px'>[[category]]</span><br><span style='font-size:18px'>Value:[[value]]</span>"}],marginTop:20,marginRight:70,marginLeft:40,marginBottom:20,chartCursor:{graphBulletSize:1.5,zoomable:!1,valueZoomable:!0,cursorAlpha:0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.2},autoMargins:!1,dataDateFormat:"YYYY-MM-DD",categoryField:"date",valueScrollbar:{offset:30},categoryAxis:{parseDates:!0,axisAlpha:0,gridAlpha:0,inside:!0,tickLength:0},export:{enabled:!0}}}))},x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:80,marginTop:24,dataDateFormat:"YYYY-MM-DD",rotate:!0,dataProvider:[{date:"2013-11-30",value:104},{date:"2013-12-01",value:108},{date:"2013-12-02",value:103},{date:"2013-12-03",value:105},{date:"2013-12-04",value:136},{date:"2013-12-05",value:138},{date:"2013-12-06",value:113},{date:"2013-12-07",value:131},{date:"2013-12-08",value:114},{date:"2013-12-09",value:124}],valueAxes:[{maximum:140,minimum:100,axisAlpha:0,guides:[{fillAlpha:.1,fillColor:"#99dc67",lineAlpha:0,toValue:120,value:0},{fillAlpha:.1,fillColor:"#67b7dc",lineAlpha:0,toValue:200,value:120}]}],graphs:[{bullet:"round",dashLength:4,valueField:"value"}],chartCursor:{cursorAlpha:0,categoryBalloonEnabled:!1},categoryField:"date",categoryAxis:{parseDates:!0},chartScrollbar:{scrollbarHeight:5,backgroundAlpha:.1,backgroundColor:"#868686",selectedBackgroundColor:"#67b7dc",selectedBackgroundAlpha:1},export:{enabled:!0}}}))},C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:70,autoMarginOffset:20,dataProvider:[{year:"1950",value:-.307},{year:"1951",value:-.168},{year:"1952",value:-.073},{year:"1953",value:-.027},{year:"1954",value:-.251},{year:"1955",value:-.281},{year:"1956",value:-.348},{year:"1957",value:-.074},{year:"1958",value:-.011},{year:"1959",value:-.074},{year:"1960",value:-.124},{year:"1961",value:-.024},{year:"1962",value:-.022},{year:"1963",value:0},{year:"1964",value:-.296},{year:"1965",value:-.217},{year:"1966",value:-.147},{year:"1971",value:-.19},{year:"1972",value:-.056},{year:"1973",value:.077},{year:"1974",value:-.213},{year:"1975",value:-.17},{year:"1976",value:-.254},{year:"1977",value:.019},{year:"1978",value:-.063},{year:"1979",value:.05},{year:"1980",value:.077},{year:"1981",value:.12},{year:"1982",value:.011},{year:"1983",value:.177},{year:"1989",value:.104},{year:"1990",value:.255},{year:"1991",value:.21},{year:"1992",value:.065},{year:"1993",value:.11},{year:"1994",value:.172},{year:"1995",value:.269},{year:"1996",value:.141},{year:"1997",value:.353},{year:"1998",value:.548},{year:"1999",value:.298},{year:"2000",value:.267},{year:"2001",value:.411},{year:"2002",value:.462},{year:"2003",value:.47},{year:"2004",value:.445},{year:"2005",value:.47}],balloon:{cornerRadius:6},valueAxes:[{axisAlpha:0}],graphs:[{balloonText:"[[category]]<br><b><span style='font-size:14px;'>[[value]] C</span></b>",bullet:"round",bulletSize:6,connect:!1,lineColor:"#b6d278",lineThickness:2,negativeLineColor:"#487dac",valueField:"value"}],chartCursor:{categoryBalloonDateFormat:"YYYY",cursorAlpha:.1,cursorColor:"#000000",fullWidth:!0,graphBulletSize:2},chartScrollbar:{},dataDateFormat:"YYYY",categoryField:"year",categoryAxis:{minPeriod:"YYYY",parseDates:!0,minorGridEnabled:!0},export:{enabled:!0}}}))},D=function(){var e={type:"serial",theme:"light",legend:{useGraphSettings:!0},dataProvider:function(){var e=[],a=new Date;a.setDate(a.getDate()-100);for(var l=1600,t=2900,r=8700,u=0;u<100;u++){var o=new Date(a);o.setDate(o.getDate()+u),l+=Math.round((Math.random()<.5?1:-1)*Math.random()*10),t+=Math.round((Math.random()<.5?1:-1)*Math.random()*10),r+=Math.round((Math.random()<.5?1:-1)*Math.random()*10),e.push({date:o,visits:l,hits:t,views:r})}return e}(),synchronizeGrid:!0,valueAxes:[{id:"v1",axisColor:"#FF6600",axisThickness:2,axisAlpha:1,position:"left"},{id:"v2",axisColor:"#FCD202",axisThickness:2,axisAlpha:1,position:"right"},{id:"v3",axisColor:"#B0DE09",axisThickness:2,gridAlpha:0,offset:50,axisAlpha:1,position:"left"}],graphs:[{valueAxis:"v1",lineColor:"#FF6600",bullet:"round",bulletBorderThickness:1,hideBulletsCount:30,title:"red line",valueField:"visits",fillAlphas:0},{valueAxis:"v2",lineColor:"#FCD202",bullet:"square",bulletBorderThickness:1,hideBulletsCount:30,title:"yellow line",valueField:"hits",fillAlphas:0},{valueAxis:"v3",lineColor:"#B0DE09",bullet:"triangleUp",bulletBorderThickness:1,hideBulletsCount:30,title:"green line",valueField:"views",fillAlphas:0}],chartScrollbar:{},chartCursor:{cursorPosition:"mouse"},categoryField:"date",categoryAxis:{parseDates:!0,axisColor:"#DADADA",minorGridEnabled:!0},export:{enabled:!0,position:"bottom-right"}};return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:e}))},E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:{type:"serial",theme:"light",marginRight:80,marginTop:17,autoMarginOffset:20,dataProvider:[{date:"2012-03-01",price:20},{date:"2012-03-02",price:75},{date:"2012-03-03",price:15},{date:"2012-03-04",price:75},{date:"2012-03-05",price:158},{date:"2012-03-06",price:57},{date:"2012-03-07",price:107},{date:"2012-03-08",price:89},{date:"2012-03-09",price:75},{date:"2012-03-10",price:132},{date:"2012-03-11",price:158},{date:"2012-03-12",price:56},{date:"2012-03-13",price:169},{date:"2012-03-14",price:24},{date:"2012-03-15",price:147}],valueAxes:[{logarithmic:!0,dashLength:1,guides:[{dashLength:6,inside:!0,label:"average",lineAlpha:1,value:90.4}],position:"left"}],graphs:[{bullet:"round",id:"g1",bulletBorderAlpha:1,bulletColor:"#FFFFFF",bulletSize:7,lineThickness:2,title:"Price",type:"smoothedLine",useLineColorForBulletBorder:!0,valueField:"price"}],chartScrollbar:{},chartCursor:{valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.5,fullWidth:!0,cursorAlpha:.05},dataDateFormat:"YYYY-MM-DD",categoryField:"date",categoryAxis:{parseDates:!0},export:{enabled:!0}}}))},F=function(){var e={theme:"light",type:"serial",dataProvider:function(){var e=[],a=new Date;a.setDate(a.getDate()-150);for(var l=-40,t=.6,r=0;r<150;r++){var u=new Date(a);u.setDate(u.getDate()+r),r>80&&(t=.4),l+=Math.round((Math.random()<t?1:-1)*Math.random()*10),e.push({date:u,visits:l})}return e}(),valueAxes:[{inside:!0,axisAlpha:0}],graphs:[{id:"g1",balloonText:"<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>",bullet:"round",bulletBorderAlpha:1,bulletBorderColor:"#FFFFFF",hideBulletsCount:50,lineThickness:2,lineColor:"#fdd400",negativeLineColor:"#67b7dc",valueField:"visits"}],chartScrollbar:{},chartCursor:{},categoryField:"date",categoryAxis:{parseDates:!0,axisAlpha:0,minHorizontalGap:55}};return r.a.createElement("div",{className:"App"},r.a.createElement(n.a.React,{style:{width:"100%",height:"500px"},options:e}))};a.default=function(e){var a=e.match;return r.a.createElement("div",{className:"gx-main-content"},r.a.createElement(s.a,{title:r.a.createElement(c.a,{id:"sidebar.chart.line"}),match:a}),r.a.createElement(u.a,null,r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Date Based Line Chart"},r.a.createElement(v,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Line Chart With Scroll And Zoom"},r.a.createElement(h,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Line With Different Colors"},r.a.createElement(p,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Fill Between Two Lines"},r.a.createElement(f,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Smoothed Line Chart"},r.a.createElement(m,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Line With Changing Color"},r.a.createElement(y.a,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Trend Lines chart"},r.a.createElement(g,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Step Line Chart"},r.a.createElement(b,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Line With Custom Bullets"},r.a.createElement(A,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Vertical Line Chart"},r.a.createElement(x,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Chart With Gaps In Data"},r.a.createElement(C,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Multiple Value Axes"},r.a.createElement(D,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Logarithmic Scale"},r.a.createElement(E,null))),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.a,{className:"gx-card",title:"Line With Different Negative Color"},r.a.createElement(F,null)))))}}}]);
//# sourceMappingURL=26.34c5e10b.chunk.js.map