(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1396:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.title;e.match;return l.a.createElement("div",{className:"gx-page-heading"},l.a.createElement("h2",{className:"gx-page-title"},a))}},1913:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(194),c=t(106),m=t(1373),o=t(23),i=[{name:"Ken",uv:4e3,price:2400,amt:2400},{name:"Nephat",uv:3e3,price:1398,amt:2210},{name:"Angel",uv:2e3,price:9800,amt:2290},{name:"Cynthia",uv:2780,price:3908,amt:2e3},{name:"Joseph",uv:1890,price:4800,amt:2181},{name:"Derrick",uv:2390,price:3800,amt:2500},{name:"Catherine",uv:3490,price:4300,amt:2100}],E=function(){return l.a.createElement(o.v,{width:"100%",height:200},l.a.createElement(o.b,{data:i,margin:{top:10,right:0,left:-15,bottom:0}},l.a.createElement(o.B,{dataKey:"name"}),l.a.createElement(o.C,null),l.a.createElement(o.f,{strokeDasharray:"3 3"}),l.a.createElement(o.z,null),l.a.createElement(o.a,{type:"monotone",dataKey:"uv",fillOpacity:1,stroke:"#003366",fill:"#003366"})))},s=function(){return l.a.createElement(o.v,{width:"100%",height:200},l.a.createElement(o.b,{data:i,margin:{top:10,right:0,left:-15,bottom:0}},l.a.createElement(o.B,{dataKey:"name"}),l.a.createElement(o.C,null),l.a.createElement(o.f,{strokeDasharray:"3 3"}),l.a.createElement(o.z,null),l.a.createElement(o.a,{type:"monotone",dataKey:"uv",stackId:"1",fillOpacity:1,stroke:"#003366",fill:"#003366"}),l.a.createElement(o.a,{type:"monotone",dataKey:"price",stackId:"1",fillOpacity:1,stroke:"#59AA2B",fill:"#59AA2B"}),l.a.createElement(o.a,{type:"monotone",dataKey:"amt",stackId:"1",fillOpacity:1,stroke:"#FE9E15",fill:"#FE9E15"})))},d=[{month:"2015.01",a:4e3,b:2400,c:2400},{month:"2015.02",a:3e3,b:1398,c:2210},{month:"2015.03",a:2e3,b:9800,c:2290},{month:"2015.04",a:2780,b:3908,c:2e3},{month:"2015.05",a:1890,b:4800,c:2181},{month:"2015.06",a:2390,b:3800,c:2500},{month:"2015.07",a:3490,b:4300,c:2100}],u=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"".concat((100*e).toFixed(a),"%")},h=function(e){var a=e.payload,t=e.label,n=a.reduce(function(e,a){return e+a.value},0);return l.a.createElement("div",{className:"customized-tooltip-content"},l.a.createElement("p",{className:"total"},"".concat(t," (Total: ").concat(n,")")),l.a.createElement("ul",{className:"list"},a.map(function(e,a){return l.a.createElement("li",{key:"item-".concat(a),style:{color:e.color}},"".concat(e.name,": ").concat(e.value,"(").concat(function(e,a){return u(a>0?e/a:0,2)}(e.value,n),")"))})))},y=function(){return l.a.createElement(o.v,{width:"100%",height:200},l.a.createElement(o.b,{data:d,stackOffset:"expand",margin:{top:10,right:0,left:-15,bottom:0}},l.a.createElement(o.B,{dataKey:"month"}),l.a.createElement(o.C,{tickFormatter:u}),l.a.createElement(o.f,{strokeDasharray:"3 3"}),l.a.createElement(o.z,{content:h}),l.a.createElement(o.a,{type:"monotone",dataKey:"a",stackId:"1",fillOpacity:1,stroke:"#003366",fill:"#003366"}),l.a.createElement(o.a,{type:"monotone",dataKey:"b",stackId:"1",fillOpacity:1,stroke:"#59AA2B",fill:"#59AA2B"}),l.a.createElement(o.a,{type:"monotone",dataKey:"c",stackId:"1",fillOpacity:1,stroke:"#FE9E15",fill:"#FE9E15"})))},p=[{name:"Ken",uv:4e3},{name:"Nephat",uv:3e3},{name:"Angel",uv:2e3},{name:"Cynthia"},{name:"Joseph",uv:1890},{name:"Derrick",uv:2390},{name:"Catherine",uv:3490}],f=function(){return l.a.createElement(o.v,{width:"100%"},l.a.createElement("div",null,l.a.createElement("div",{className:"mb-5"},l.a.createElement(o.v,{width:"100%",height:200},l.a.createElement(o.b,{data:p,margin:{top:10,right:0,left:-15,bottom:0}},l.a.createElement(o.B,{dataKey:"name"}),l.a.createElement(o.C,null),l.a.createElement(o.f,{strokeDasharray:"3 3"}),l.a.createElement(o.z,null),l.a.createElement(o.a,{type:"monotone",dataKey:"uv",fillOpacity:1,stroke:"#003366",fill:"#003366"})))),l.a.createElement("div",{className:"mb-4"},l.a.createElement(o.v,{width:"100%",height:200},l.a.createElement(o.b,{data:p,margin:{top:10,right:0,left:-15,bottom:0}},l.a.createElement(o.B,{dataKey:"name"}),l.a.createElement(o.C,null),l.a.createElement(o.f,{strokeDasharray:"3 3"}),l.a.createElement(o.z,null),l.a.createElement(o.a,{connectNulls:!0,type:"monotone",dataKey:"uv",fillOpacity:1,stroke:"#003366",fill:"#003366"}))))))},v=function(){return l.a.createElement(o.v,{width:"100%"},l.a.createElement("div",null,l.a.createElement("p",{className:"mb-4"},"A demo of synchronized AreaCharts"),l.a.createElement("div",{className:"mb-4"},l.a.createElement(o.v,{width:"100%",height:200},l.a.createElement(o.b,{data:i,syncId:"anyId",margin:{top:10,right:0,left:-15,bottom:0}},l.a.createElement(o.B,{dataKey:"name"}),l.a.createElement(o.C,null),l.a.createElement(o.f,{strokeDasharray:"3 3"}),l.a.createElement(o.z,null),l.a.createElement(o.a,{type:"monotone",dataKey:"uv",fillOpacity:1,stroke:"#003366",fill:"#003366"})))),l.a.createElement("p",{className:"mb-4"},"Maybe some other content"),l.a.createElement("div",{className:"mb-4"},l.a.createElement(o.v,{width:"100%",height:200},l.a.createElement(o.b,{data:i,syncId:"anyId",margin:{top:10,right:0,left:-15,bottom:0}},l.a.createElement(o.B,{dataKey:"name"}),l.a.createElement(o.C,null),l.a.createElement(o.f,{strokeDasharray:"3 3"}),l.a.createElement(o.z,null),l.a.createElement(o.a,{type:"monotone",dataKey:"price",fillOpacity:1,stroke:"#FE9E15",fill:"#FE9E15"}))))))},g=t(1396),b=t(2);a.default=function(e){var a=e.match;return l.a.createElement("div",{className:"gx-main-content"},l.a.createElement(g.a,{title:l.a.createElement(b.a,{id:"sidebar.chart.area"}),match:a}),l.a.createElement(r.a,null,l.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(m.a,{className:"gx-card",title:"Simple Area Chart"},l.a.createElement(E,null))),l.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(m.a,{className:"gx-card",title:"Stacked Area Chart"},l.a.createElement(s,null))),l.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(m.a,{className:"gx-card",title:"AreaChart Connect Nulls"},l.a.createElement(f,null))),l.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(m.a,{className:"gx-card",title:"Synchronized Area Chart"},l.a.createElement(v,null))),l.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(m.a,{className:"gx-card",title:"Percent Area Chart"},l.a.createElement(y,null)))))}}}]);
//# sourceMappingURL=82.b027bb49.chunk.js.map