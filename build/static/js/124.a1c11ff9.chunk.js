(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1908:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a(34),c=a(35),o=a(36),l=a(20),u=a(0),i=a.n(u),f=a(194),s=a(106),b=a(395),m=a(1372),y=b.a.TabPane,v=function(){return i.a.createElement(m.a,{className:"gx-card",title:"Basic"},i.a.createElement(b.a,{defaultActiveKey:"1",onChange:function(e){console.log(e)}},i.a.createElement(y,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),i.a.createElement(y,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),i.a.createElement(y,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3")))},h=a(1376);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var E=b.a.TabPane,d=function(e){Object(c.a)(a,e);var t=p(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleModeChange=function(e){var t=e.target.value;r.setState({mode:t})},r.state={mode:"top"},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.mode;return i.a.createElement(m.a,{className:"gx-card",title:"Slide"},i.a.createElement(h.a.Group,{onChange:this.handleModeChange,value:e,className:"gx-mb-2"},i.a.createElement(h.a.Button,{value:"top"},"Horizontal"),i.a.createElement(h.a.Button,{value:"left"},"Vertical")),i.a.createElement(b.a,{defaultActiveKey:"1",tabPosition:e,style:{height:220}},i.a.createElement(E,{tab:"Tab 1",key:"1"},"Content of tab 1"),i.a.createElement(E,{tab:"Tab 2",key:"2"},"Content of tab 2"),i.a.createElement(E,{tab:"Tab 3",key:"3"},"Content of tab 3"),i.a.createElement(E,{tab:"Tab 4",key:"4"},"Content of tab 4"),i.a.createElement(E,{tab:"Tab 5",key:"5"},"Content of tab 5"),i.a.createElement(E,{tab:"Tab 6",key:"6"},"Content of tab 6"),i.a.createElement(E,{tab:"Tab 7",key:"7"},"Content of tab 7"),i.a.createElement(E,{tab:"Tab 8",key:"8"},"Content of tab 8"),i.a.createElement(E,{tab:"Tab 9",key:"9"},"Content of tab 9"),i.a.createElement(E,{tab:"Tab 10",key:"10"},"Content of tab 10"),i.a.createElement(E,{tab:"Tab 11",key:"11"},"Content of tab 11")))}}]),a}(i.a.Component);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var C=b.a.TabPane,k=function(e){Object(c.a)(a,e);var t=T(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={size:"small"},e.onChange=function(t){e.setState({size:t.target.value})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.size;return i.a.createElement(m.a,{className:"gx-card",title:"Size"},i.a.createElement(h.a.Group,{value:e,onChange:this.onChange,className:"gx-mb-3"},i.a.createElement(h.a.Button,{value:"small"},"Small"),i.a.createElement(h.a.Button,{value:"default"},"Default"),i.a.createElement(h.a.Button,{value:"large"},"Large")),i.a.createElement(b.a,{defaultActiveKey:"1",size:e},i.a.createElement(C,{tab:"Tab 1",key:"1"},"Content of tab 1"),i.a.createElement(C,{tab:"Tab 2",key:"2"},"Content of tab 2"),i.a.createElement(C,{tab:"Tab 3",key:"3"},"Content of tab 3")))}}]),a}(i.a.Component),g=a(1373);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var j=b.a.TabPane,P=g.a.Option,R=function(e){Object(c.a)(a,e);var t=O(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={tabPosition:"top"},e.changeTabPosition=function(t){e.setState({tabPosition:t})},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,{className:"gx-card",title:"Position"},i.a.createElement("div",{className:"gx-mb-3"},"Tab position\uff1a",i.a.createElement(g.a,{value:this.state.tabPosition,onChange:this.changeTabPosition,dropdownMatchSelectWidth:!1},i.a.createElement(P,{value:"top"},"top"),i.a.createElement(P,{value:"bottom"},"bottom"),i.a.createElement(P,{value:"left"},"left"),i.a.createElement(P,{value:"right"},"right"))),i.a.createElement(b.a,{tabPosition:this.state.tabPosition},i.a.createElement(j,{tab:"Tab 1",key:"1"},"Content of Tab 1"),i.a.createElement(j,{tab:"Tab 2",key:"2"},"Content of Tab 2"),i.a.createElement(j,{tab:"Tab 3",key:"3"},"Content of Tab 3")))}}]),a}(i.a.Component),x=b.a.TabPane,B=function(){return i.a.createElement(m.a,{className:"gx-card",title:"Card Tab"},i.a.createElement(b.a,{onChange:function(e){console.log(e)},type:"card"},i.a.createElement(x,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),i.a.createElement(x,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),i.a.createElement(x,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3")))},w=a(113);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var K=b.a.TabPane,S=function(e){Object(c.a)(a,e);var t=N(a);function a(e){var r;Object(n.a)(this,a),(r=t.call(this,e)).onChange=function(e){r.setState({activeKey:e})},r.onEdit=function(e,t){r[t](e)},r.add=function(){var e=r.state.panes,t="newTab".concat(r.newTabIndex++);e.push({title:"New Tab",content:"New Tab Pane",key:t}),r.setState({panes:e,activeKey:t})},r.remove=function(e){var t,a=r.state.activeKey;r.state.panes.forEach(function(a,n){a.key===e&&(t=n-1)});var n=r.state.panes.filter(function(t){return t.key!==e});t>=0&&a===e&&(a=n[t].key),r.setState({panes:n,activeKey:a})},r.newTabIndex=0;var c=[{title:"Tab 1",content:"Content of Tab Pane 1",key:"1"},{title:"Tab 2",content:"Content of Tab Pane 2",key:"2"}];return r.state={activeKey:c[0].key,panes:c},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,{className:"gx-card",title:"Customize Trigger"},i.a.createElement("div",{className:"gx-mb-3"},i.a.createElement(w.a,{onClick:this.add},"ADD")),i.a.createElement(b.a,{hideAdd:!0,onChange:this.onChange,activeKey:this.state.activeKey,type:"editable-card",onEdit:this.onEdit},this.state.panes.map(function(e){return i.a.createElement(K,{tab:e.title,key:e.key},e.content)})))}}]),a}(i.a.Component);function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var A=function(e){Object(c.a)(a,e);var t=z(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(f.a,null,i.a.createElement(s.a,{span:24},i.a.createElement(v,null),i.a.createElement(d,null),i.a.createElement(k,null)),i.a.createElement(s.a,{span:24},i.a.createElement(R,null),i.a.createElement(B,null),i.a.createElement(S,null)))}}]),a}(u.Component);t.default=A}}]);
//# sourceMappingURL=124.a1c11ff9.chunk.js.map