(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1429:function(e,t,a){"use strict";a.d(t,"a",function(){return x});var n=a(0),r=a(1),c=a(662),l=a.n(c),o=a(4),s=a.n(o),u=a(21),i=a(398),m=a(41),f=a(96),p=a(43);function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=v(e);if(t){var r=v(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,a)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(o,n["Component"]);var t,a,r,c=g(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=c.call(this,e)).saveSwitch=function(e){t.rcSwitch=e},t.renderSwitch=function(e){var a,r=e.getPrefixCls,c=t.props,o=c.prefixCls,f=c.size,p=c.loading,E=c.className,y=void 0===E?"":E,b=c.disabled,g=r("switch",o),v=s()(y,(h(a={},"".concat(g,"-small"),"small"===f),h(a,"".concat(g,"-loading"),p),a)),x=p?n.createElement(m.a,{type:"loading",className:"".concat(g,"-loading-icon")}):null;return n.createElement(i.a,{insertExtraNode:!0},n.createElement(l.a,d({},Object(u.default)(t.props,["loading"]),{prefixCls:g,className:v,disabled:b||p,ref:t.saveSwitch,loadingIcon:x})))},Object(p.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),t}return t=o,(a=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return n.createElement(f.a,null,this.renderSwitch)}}])&&y(t.prototype,a),r&&y(t,r),o}();x.__ANT_SWITCH=!0,x.propTypes={prefixCls:r.string,size:r.oneOf(["small","default","large"]),className:r.string}},1895:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(194),l=a(106),o=a(1373),s=a(1393),u=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Basic"},r.a.createElement(s.a,{count:5},r.a.createElement("span",{className:"head-example"})),r.a.createElement(s.a,{count:0,showZero:!0},r.a.createElement("span",{className:"head-example"})))},i=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Stand Alone"},r.a.createElement(s.a,{count:25}),r.a.createElement(s.a,{count:4,style:{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}}),r.a.createElement(s.a,{count:109,style:{backgroundColor:"#52c41a"}}))},m=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Overflow Count"},r.a.createElement(s.a,{className:"gx-mt-3",count:99},r.a.createElement("span",{className:"head-example"})),r.a.createElement(s.a,{className:"gx-mt-3",count:100},r.a.createElement("span",{className:"head-example"})),r.a.createElement(s.a,{className:"gx-mt-3",count:99,overflowCount:10},r.a.createElement("span",{className:"head-example"})),r.a.createElement(s.a,{className:"gx-mt-3",count:1e3,overflowCount:999},r.a.createElement("span",{className:"head-example"})))},f=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Status"},r.a.createElement(s.a,{status:"success"}),r.a.createElement(s.a,{status:"error"}),r.a.createElement(s.a,{status:"default"}),r.a.createElement(s.a,{status:"processing"}),r.a.createElement(s.a,{status:"warning"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"success",text:"Success"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"error",text:"Error"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"default",text:"Default"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"processing",text:"Processing"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"warning",text:"Warning"}))},p=a(33),E=a(34),d=a(35),h=a(36),y=a(20),b=a(113),g=a(41),v=a(1429);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(y.a)(e);if(t){var r=Object(y.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(h.a)(this,a)}}var w=b.a.Group,N=function(e){Object(d.a)(a,e);var t=x(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={count:5,show:!0},e.increase=function(){var t=e.state.count+1;e.setState({count:t})},e.decline=function(){var t=e.state.count-1;t<0&&(t=0),e.setState({count:t})},e.onChange=function(t){e.setState({show:t})},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(o.a,{className:"gx-card",title:"Dynamic"},r.a.createElement("div",null,r.a.createElement(s.a,{count:this.state.count},r.a.createElement("div",{className:"head-example"})),r.a.createElement(w,null,r.a.createElement(b.a,{onClick:this.decline},r.a.createElement(g.a,{type:"minus"})),r.a.createElement(b.a,{onClick:this.increase},r.a.createElement(g.a,{type:"plus"})))),r.a.createElement("div",{style:{marginTop:10}},r.a.createElement(s.a,{dot:this.state.show},r.a.createElement("div",{className:"head-example"})),r.a.createElement(v.a,{onChange:this.onChange,checked:this.state.show})))}}]),a}(r.a.Component),O=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Red Badge"},r.a.createElement(s.a,{dot:!0},r.a.createElement(g.a,{type:"notification"})),r.a.createElement(s.a,{count:0,dot:!0},r.a.createElement(g.a,{type:"notification"})),r.a.createElement(s.a,{dot:!0},r.a.createElement("a",{href:"/"},"Link something")))},S=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Clickable"},r.a.createElement("span",{className:"gx-link"},r.a.createElement(s.a,{count:5},r.a.createElement("span",{className:"head-example"}))))};t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(u,null),r.a.createElement(i,null),r.a.createElement(m,null),r.a.createElement(f,null)),r.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(N,null),r.a.createElement(O,null),r.a.createElement(S,null)))}}}]);
//# sourceMappingURL=93.cb060540.chunk.js.map