(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1466:function(e,t,n){"use strict";var r=n(0),o=n(4),a=n.n(o),i=n(21),c=n(96);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=function(e){return r.createElement(c.a,null,function(t){var n,o,c=t.getPrefixCls,p=e.prefixCls,f=e.className,d=e.color,m=void 0===d?"":d,y=e.children,b=e.pending,g=e.dot,h=s(e,["prefixCls","className","color","children","pending","dot"]),v=c("timeline",p),O=a()((u(n={},"".concat(v,"-item"),!0),u(n,"".concat(v,"-item-pending"),b),n),f),w=a()((u(o={},"".concat(v,"-item-head"),!0),u(o,"".concat(v,"-item-head-custom"),g),u(o,"".concat(v,"-item-head-").concat(m),!0),o));return r.createElement("li",l({},Object(i.default)(h,["position"]),{className:O}),r.createElement("div",{className:"".concat(v,"-item-tail")}),r.createElement("div",{className:w,style:{borderColor:/blue|red|green|gray/.test(m)?void 0:m}},g),r.createElement("div",{className:"".concat(v,"-item-content")},y))})};p.defaultProps={color:"blue",pending:!1,position:""};var f=p,d=n(41);function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(l,r["Component"]);var t,n,o,i=w(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=i.apply(this,arguments)).renderTimeline=function(t){var n,o=t.getPrefixCls,i=e.props,c=i.prefixCls,l=i.pending,u=void 0===l?null:l,s=i.pendingDot,p=i.children,m=i.className,g=i.reverse,v=i.mode,O=E(i,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),w=o("timeline",c),j="boolean"===typeof u?null:u,x=a()(w,(h(n={},"".concat(w,"-pending"),!!u),h(n,"".concat(w,"-reverse"),!!g),h(n,"".concat(w,"-").concat(v),!!v),n),m),P=u?r.createElement(f,{pending:!!u,dot:s||r.createElement(d.a,{type:"loading"})},j):null,S=g?[P].concat(b(r.Children.toArray(p).reverse())):[].concat(b(r.Children.toArray(p)),[P]),A=function(e,t){return"alternate"===v?"right"===e.props.position?"".concat(w,"-item-right"):"left"===e.props.position?"".concat(w,"-item-left"):"".concat(w,t%2===0?"-item-left":"-item-right"):"left"===v?"".concat(w,"-item-left"):"right"===v?"".concat(w,"-item-right"):"right"===e.props.position?"".concat(w,"-item-right"):""},C=S.filter(function(e){return!!e}),N=r.Children.count(C),I="".concat(w,"-item-last"),R=r.Children.map(C,function(e,t){var n=t===N-2?I:"",o=t===N-1?I:"";return r.cloneElement(e,{className:a()([e.props.className,!g&&u?n:o,A(e,t)])})});return r.createElement("ul",y({},O,{className:x}),R)},e}return t=l,(n=[{key:"render",value:function(){return r.createElement(c.a,null,this.renderTimeline)}}])&&v(t.prototype,n),o&&v(t,o),l}();x.Item=f,x.defaultProps={reverse:!1,mode:""};t.a=x},1950:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1466),i=n(28),c=n(2),l=[{id:1,title:"Initial Release",date:"Jan 21, 2019",logs:[{description:"Initial release version 1.3"}]},{id:2,title:"V-1.4 ",date:"Jan 22, 2019",logs:[{description:"Added 2 Starter Templates"}]},{id:3,title:"V-1.5 ",date:"Jan 26, 2019",logs:[{description:"Updated to CRA-2"}]},{id:4,title:"V-1.6 ",date:"Mar 30, 2019",logs:[{type:"add",description:"Added jwt Auth starter-template"},{type:"add",description:"Added Sticky app"}]},{id:5,title:"V-1.7 ",date:"Apr 2, 2019",logs:[{type:"add",description:"Added Firebase CRUD with redux-thunk"},{type:"add",description:"Added HTML version"}]}],u=function(e){var t=e.changeLog;return o.a.createElement(a.a.Item,null,o.a.createElement("h4",{className:"gx-text-truncate"},t.title),o.a.createElement("p",{className:"gx-fs-sm"},t.date),o.a.createElement("ul",null,t.logs.map(function(e,t){return o.a.createElement("li",{key:t,className:"gx-fs-sm gx-text-grey"},void 0!==e.type?o.a.createElement("span",{className:"gx-badge gx-mb-1 gx-text-white gx-badge-red"},e.type):null," ",e.description)})))};t.default=function(){return o.a.createElement(i.a,{title:o.a.createElement(c.a,{id:"sidebar.documents.changelog"})},o.a.createElement(a.a,null,l.map(function(e,t){return o.a.createElement(u,{key:t,changeLog:e})})))}}}]);
//# sourceMappingURL=107.bd04b06d.chunk.js.map