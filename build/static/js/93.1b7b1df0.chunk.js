(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1465:function(e,t,n){"use strict";var r=n(0),a=n(4),o=n.n(a),l=n(21),c=n(96);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=function(e){return r.createElement(c.a,null,function(t){var n,a,c=t.getPrefixCls,m=e.prefixCls,f=e.className,p=e.color,y=void 0===p?"":p,d=e.children,b=e.pending,g=e.dot,v=s(e,["prefixCls","className","color","children","pending","dot"]),h=c("timeline",m),E=o()((u(n={},"".concat(h,"-item"),!0),u(n,"".concat(h,"-item-pending"),b),n),f),O=o()((u(a={},"".concat(h,"-item-head"),!0),u(a,"".concat(h,"-item-head-custom"),g),u(a,"".concat(h,"-item-head-").concat(y),!0),a));return r.createElement("li",i({},Object(l.default)(v,["position"]),{className:E}),r.createElement("div",{className:"".concat(h,"-item-tail")}),r.createElement("div",{className:O,style:{borderColor:/blue|red|green|gray/.test(y)?void 0:y}},g),r.createElement("div",{className:"".concat(h,"-item-content")},d))})};m.defaultProps={color:"blue",pending:!1,position:""};var f=m,p=n(41);function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(i,r["Component"]);var t,n,a,l=O(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=l.apply(this,arguments)).renderTimeline=function(t){var n,a=t.getPrefixCls,l=e.props,c=l.prefixCls,i=l.pending,u=void 0===i?null:i,s=l.pendingDot,m=l.children,y=l.className,g=l.reverse,h=l.mode,E=j(l,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),O=a("timeline",c),w="boolean"===typeof u?null:u,S=o()(O,(v(n={},"".concat(O,"-pending"),!!u),v(n,"".concat(O,"-reverse"),!!g),v(n,"".concat(O,"-").concat(h),!!h),n),y),C=u?r.createElement(f,{pending:!!u,dot:s||r.createElement(p.a,{type:"loading"})},w):null,I=g?[C].concat(b(r.Children.toArray(m).reverse())):[].concat(b(r.Children.toArray(m)),[C]),P=function(e,t){return"alternate"===h?"right"===e.props.position?"".concat(O,"-item-right"):"left"===e.props.position?"".concat(O,"-item-left"):"".concat(O,t%2===0?"-item-left":"-item-right"):"left"===h?"".concat(O,"-item-left"):"right"===h?"".concat(O,"-item-right"):"right"===e.props.position?"".concat(O,"-item-right"):""},x=I.filter(function(e){return!!e}),N=r.Children.count(x),k="".concat(O,"-item-last"),T=r.Children.map(x,function(e,t){var n=t===N-2?k:"",a=t===N-1?k:"";return r.cloneElement(e,{className:o()([e.props.className,!g&&u?n:a,P(e,t)])})});return r.createElement("ul",d({},E,{className:S}),T)},e}return t=i,(n=[{key:"render",value:function(){return r.createElement(c.a,null,this.renderTimeline)}}])&&h(t.prototype,n),a&&h(t,a),i}();S.Item=f,S.defaultProps={reverse:!1,mode:""};t.a=S},1929:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(194),l=n(106),c=n(1371),i=n(1465),u=function(){return a.a.createElement(c.a,{title:"Basic",className:"gx-card"},a.a.createElement(i.a,null,a.a.createElement(i.a.Item,null,"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,null,"Solve initial network problems 2015-09-01"),a.a.createElement(i.a.Item,null,"Technical testing 2015-09-01"),a.a.createElement(i.a.Item,null,"Network problems being solved 2015-09-01")))},s=function(){return a.a.createElement(c.a,{title:"Color",className:"gx-card"},a.a.createElement(i.a,null,a.a.createElement(i.a.Item,{color:"green"},"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,{color:"green"},"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,{color:"red"},a.a.createElement("p",null,"Solve initial network problems 1"),a.a.createElement("p",null,"Solve initial network problems 2"),a.a.createElement("p",null,"Solve initial network problems 3 2015-09-01")),a.a.createElement(i.a.Item,null,a.a.createElement("p",null,"Technical testing 1"),a.a.createElement("p",null,"Technical testing 2"),a.a.createElement("p",null,"Technical testing 3 2015-09-01"))))},m=function(){return a.a.createElement(c.a,{title:"Last Node",className:"gx-card"},a.a.createElement(i.a,{pending:"Recording..."},a.a.createElement(i.a.Item,null,"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,null,"Solve initial network problems 2015-09-01"),a.a.createElement(i.a.Item,null,"Technical testing 2015-09-01")))},f=n(41),p=function(){return a.a.createElement(c.a,{title:"Custom",className:"gx-card"},a.a.createElement(i.a,null,a.a.createElement(i.a.Item,null,"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,null,"Solve initial network problems 2015-09-01"),a.a.createElement(i.a.Item,{dot:a.a.createElement(f.a,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),a.a.createElement(i.a.Item,null,"Network problems being solved 2015-09-01")))};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},a.a.createElement(u,null),a.a.createElement(s,null)),a.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},a.a.createElement(m,null),a.a.createElement(p,null)))}}}]);
//# sourceMappingURL=93.1b7b1df0.chunk.js.map