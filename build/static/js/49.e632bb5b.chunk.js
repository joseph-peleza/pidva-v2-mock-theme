(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1579:function(e,t,n){},1876:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(194),l=n(106),c=n(413),i=n(4),s=n.n(i),u=n(96);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,a["Component"]);var t,n,r,o=h(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.apply(this,arguments)).renderCollapsePanel=function(t){var n,r,o,l=t.getPrefixCls,i=e.props,u=i.prefixCls,f=i.className,d=void 0===f?"":f,y=i.showArrow,h=void 0===y||y,m=l("collapse",u),b=s()((n={},r="".concat(m,"-no-arrow"),o=!h,r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n),d);return a.createElement(c.default.Panel,p({},e.props,{prefixCls:m,className:b}))},e}return t=l,(n=[{key:"render",value:function(){return a.createElement(u.a,null,this.renderCollapsePanel)}}])&&d(t.prototype,n),r&&d(t,r),l}(),E=n(41),g=n(176),w=n(45),v=n.n(w);function P(e,t,n){var a,r;return Object(g.default)(e,"ant-motion-collapse-legacy",{start:function(){t?(a=e.offsetHeight,e.style.height="0px",e.style.opacity="0"):(e.style.height="".concat(e.offsetHeight,"px"),e.style.opacity="1")},active:function(){r&&v.a.cancel(r),r=v()(function(){e.style.height="".concat(t?a:0,"px"),e.style.opacity=t?"1":"0"})},end:function(){r&&v.a.cancel(r),e.style.height="",e.style.opacity="",n()}})}var O={enter:function(e,t){return P(e,!0,t)},leave:function(e,t){return P(e,!1,t)},appear:function(e,t){return P(e,!0,t)}};function x(e){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=_(e);if(t){var r=_(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===x(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(l,a["Component"]);var t,n,r,o=A(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.apply(this,arguments)).renderExpandIcon=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=e.props.expandIcon,o=r?r(t):a.createElement(E.a,{type:"right",rotate:t.isActive?90:void 0});return a.isValidElement(o)?a.cloneElement(o,{className:s()(o.props.className,"".concat(n,"-arrow"))}):o},e.renderCollapse=function(t){var n,r=t.getPrefixCls,o=e.props,l=o.prefixCls,i=o.className,u=void 0===i?"":i,f=o.bordered,p=o.expandIconPosition,d=r("collapse",l),y=s()((T(n={},"".concat(d,"-borderless"),!f),T(n,"".concat(d,"-icon-position-").concat(p),!0),n),u);return a.createElement(c.default,k({},e.props,{expandIcon:function(t){return e.renderExpandIcon(t,d)},prefixCls:d,className:y}))},e}return t=l,(n=[{key:"render",value:function(){return a.createElement(u.a,null,this.renderCollapse)}}])&&j(t.prototype,n),r&&j(t,r),l}();N.Panel=b,N.defaultProps={bordered:!0,openAnimation:k(k({},O),{appear:function(){}}),expandIconPosition:"left"};var S=N,R=n(1372),K=(n(1579),S.Panel),I="\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n",D=function(){return r.a.createElement(R.a,{className:"gx-card",title:"Basic"},r.a.createElement(S,{defaultActiveKey:["1"],onChange:function(e){console.log(e)}},r.a.createElement(K,{header:"This is panel header 1",key:"1"},r.a.createElement("p",null,I)),r.a.createElement(K,{header:"This is panel header 2",key:"2"},r.a.createElement("p",null,I)),r.a.createElement(K,{header:"This is panel header 3",key:"3",disabled:!0},r.a.createElement("p",null,I))))},B=S.Panel,H="\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n",J=function(){return r.a.createElement(R.a,{className:"gx-card",title:"Accordion"},r.a.createElement(S,{accordion:!0},r.a.createElement(B,{header:"This is panel header 1",key:"1"},r.a.createElement("p",null,H)),r.a.createElement(B,{header:"This is panel header 2",key:"2"},r.a.createElement("p",null,H)),r.a.createElement(B,{header:"This is panel header 3",key:"3"},r.a.createElement("p",null,H))))},L=S.Panel,V="\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n",q=function(){return r.a.createElement(R.a,{className:"gx-card",title:"Nested Panel"},r.a.createElement(S,{onChange:function(e){console.log(e)}},r.a.createElement(L,{header:"This is panel header 1",key:"1"},r.a.createElement(S,{defaultActiveKey:"1"},r.a.createElement(L,{header:"This is panel nest panel",key:"1"},r.a.createElement("p",null,V)))),r.a.createElement(L,{header:"This is panel header 2",key:"2"},r.a.createElement("p",null,V)),r.a.createElement(L,{header:"This is panel header 3",key:"3"},r.a.createElement("p",null,V))))},z=S.Panel,F=r.a.createElement("p",{style:{paddingLeft:24}},"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),G=function(){return r.a.createElement(R.a,{className:"gx-card",title:"Borderless"},r.a.createElement(S,{bordered:!1,defaultActiveKey:["1"]},r.a.createElement(z,{header:"This is panel header 1",key:"1"},F),r.a.createElement(z,{header:"This is panel header 2",key:"2"},F),r.a.createElement(z,{header:"This is panel header 3",key:"3"},F)))},M=S.Panel,Q="\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n",U={borderRadius:4,border:0,overflow:"hidden"},W=function(){return r.a.createElement(R.a,{className:"gx-card",title:"Custom Panel"},r.a.createElement(S,{className:"gx-collapse-custom",bordered:!1,defaultActiveKey:["1"]},r.a.createElement(M,{header:"This is panel header 1",key:"1",style:U},r.a.createElement("p",null,Q)),r.a.createElement(M,{header:"This is panel header 2",key:"2",style:U},r.a.createElement("p",null,Q)),r.a.createElement(M,{header:"This is panel header 3",key:"3",style:U},r.a.createElement("p",null,Q))))},X=S.Panel,Y="\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n",Z=function(){return r.a.createElement(R.a,{className:"gx-card",title:"NoArrow"},r.a.createElement(S,{defaultActiveKey:["1"],onChange:function(e){console.log(e)}},r.a.createElement(X,{header:"This is panel header with arrow icon",key:"1"},r.a.createElement("p",null,Y)),r.a.createElement(X,{showArrow:!1,header:"This is panel header with no arrow icon",key:"2"},r.a.createElement("p",null,Y))))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{span:24},r.a.createElement(D,null)),r.a.createElement(l.a,{span:24},r.a.createElement(J,null)),r.a.createElement(l.a,{span:24},r.a.createElement(q,null)),r.a.createElement(l.a,{span:24},r.a.createElement(G,null)),r.a.createElement(l.a,{span:24},r.a.createElement(W,null)),r.a.createElement(l.a,{span:24},r.a.createElement(Z,null)))}}}]);
//# sourceMappingURL=49.e632bb5b.chunk.js.map