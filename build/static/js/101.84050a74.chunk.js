(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1426:function(e,t,n){"use strict";n.d(t,"a",function(){return x});var r=n(0),o=n(1),a=n(661),c=n.n(a),l=n(4),i=n.n(l),u=n(21),s=n(398),f=n(41),p=n(96),m=n(43);function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,r["Component"]);var t,n,o,a=g(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).saveSwitch=function(e){t.rcSwitch=e},t.renderSwitch=function(e){var n,o=e.getPrefixCls,a=t.props,l=a.prefixCls,p=a.size,m=a.loading,y=a.className,v=void 0===y?"":y,d=a.disabled,g=o("switch",l),E=i()(v,(h(n={},"".concat(g,"-small"),"small"===p),h(n,"".concat(g,"-loading"),m),n)),x=m?r.createElement(f.a,{type:"loading",className:"".concat(g,"-loading-icon")}):null;return r.createElement(s.a,{insertExtraNode:!0},r.createElement(c.a,b({},Object(u.default)(t.props,["loading"]),{prefixCls:g,className:E,disabled:d||m,ref:t.saveSwitch,loadingIcon:x})))},Object(m.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),t}return t=l,(n=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return r.createElement(p.a,null,this.renderSwitch)}}])&&v(t.prototype,n),o&&v(t,o),l}();x.__ANT_SWITCH=!0,x.propTypes={prefixCls:o.string,size:o.oneOf(["small","default","large"]),className:o.string}},1924:function(e,t,n){"use strict";n.r(t);var r=n(33),o=n(34),a=n(35),c=n(36),l=n(20),i=n(0),u=n.n(i),s=n(194),f=n(106),p=n(1386),m=n(1372),y=n(10),b=n(225),h=n(41),v=n(113),d=n(221),g=n(197),E=n(96);function x(e){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===x(t)||"function"===typeof t))return t;return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(a,i["Component"]);var t,n,r,o=k(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).onConfirm=function(e){t.setVisible(!1,e);var n=t.props.onConfirm;n&&n.call(w(t),e)},t.onCancel=function(e){t.setVisible(!1,e);var n=t.props.onCancel;n&&n.call(w(t),e)},t.onVisibleChange=function(e){t.props.disabled||t.setVisible(e)},t.saveTooltip=function(e){t.tooltip=e},t.renderOverlay=function(e,n){var r=t.props,o=r.okButtonProps,a=r.cancelButtonProps,c=r.title,l=r.cancelText,u=r.okText,s=r.okType,f=r.icon;return i.createElement("div",null,i.createElement("div",{className:"".concat(e,"-inner-content")},i.createElement("div",{className:"".concat(e,"-message")},f,i.createElement("div",{className:"".concat(e,"-message-title")},c)),i.createElement("div",{className:"".concat(e,"-buttons")},i.createElement(v.a,C({onClick:t.onCancel,size:"small"},a),l||n.cancelText),i.createElement(v.a,C({onClick:t.onConfirm,type:s,size:"small"},o),u||n.okText))))},t.renderConfirm=function(e){var n=e.getPrefixCls,r=t.props,o=r.prefixCls,a=r.placement,c=j(r,["prefixCls","placement"]),l=n("popover",o),u=i.createElement(d.a,{componentName:"Popconfirm",defaultLocale:g.a.Popconfirm},function(e){return t.renderOverlay(l,e)});return i.createElement(b.a,C({},c,{prefixCls:l,placement:a,onVisibleChange:t.onVisibleChange,visible:t.state.visible,overlay:u,ref:t.saveTooltip}))},t.state={visible:e.visible},t}return t=a,r=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(n=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var n=this.props;"visible"in n||this.setState({visible:e});var r=n.onVisibleChange;r&&r(e,t)}},{key:"render",value:function(){return i.createElement(E.a,null,this.renderConfirm)}}])&&O(t.prototype,n),r&&O(t,r),a}();S.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:i.createElement(h.a,{type:"exclamation-circle",theme:"filled"}),disabled:!1},Object(y.polyfill)(S);var P=S,R=function(){return u.a.createElement(m.a,{title:"Basic",className:"gx-card"},u.a.createElement(P,{title:"Are you sure delete this task?",onConfirm:function(e){console.log(e),p.a.success("Click on Yes")},onCancel:function(e){console.log(e),p.a.error("Click on No")},okText:"Yes",cancelText:"No"},u.a.createElement("span",{className:"gx-link"},"Delete")))},_=function(){return u.a.createElement(m.a,{title:"Locale Text",className:"gx-card"},u.a.createElement(P,{title:"Are you sure\uff1f",okText:"Yes",cancelText:"No"},u.a.createElement("span",{className:"gx-link"},"Delete")))},Y="Are you sure delete this task?",B=function(){function e(){p.a.info("Click on Yes.")}return u.a.createElement(m.a,{title:"Placement",className:"gx-card"},u.a.createElement("div",{className:"gx-overflow-auto"},u.a.createElement("div",{style:{marginLeft:70,whiteSpace:"nowrap"}},u.a.createElement(P,{placement:"topLeft",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"TL")),u.a.createElement(P,{placement:"top",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"Top")),u.a.createElement(P,{placement:"topRight",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"TR"))),u.a.createElement("div",{style:{width:70,float:"left"}},u.a.createElement(P,{placement:"leftTop",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"LT")),u.a.createElement(P,{placement:"left",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"Left")),u.a.createElement(P,{placement:"leftBottom",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"LB"))),u.a.createElement("div",{style:{width:70,marginLeft:304}},u.a.createElement(P,{placement:"rightTop",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"RT")),u.a.createElement(P,{placement:"right",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"Right")),u.a.createElement(P,{placement:"rightBottom",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"RB"))),u.a.createElement("div",{style:{marginLeft:70,clear:"both",whiteSpace:"nowrap"}},u.a.createElement(P,{placement:"bottomLeft",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"BL")),u.a.createElement(P,{placement:"bottom",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"Bottom")),u.a.createElement(P,{placement:"bottomRight",title:Y,onConfirm:e,okText:"Yes",cancelText:"No"},u.a.createElement(v.a,null,"BR")))))},V=n(1426);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var D=function(e){Object(a.a)(n,e);var t=L(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={visible:!1,condition:!0},e.changeCondition=function(t){e.setState({condition:t})},e.confirm=function(){e.setState({visible:!1}),p.a.success("Next step.")},e.cancel=function(){e.setState({visible:!1}),p.a.error("Click on cancel.")},e.handleVisibleChange=function(t){t?(console.log(e.state.condition),e.state.condition?e.confirm():e.setState({visible:t})):e.setState({visible:t})},e}return Object(o.a)(n,[{key:"render",value:function(){return u.a.createElement(m.a,{title:"Conditional Trigger",className:"gx-card"},u.a.createElement(P,{title:"Are you sure delete this task?",visible:this.state.visible,onVisibleChange:this.handleVisibleChange,onConfirm:this.confirm,onCancel:this.cancel,okText:"Yes",cancelText:"No"},u.a.createElement("a",{className:"gx-mb-3 gx-d-block",href:"/"},"Delete a task")),"Whether directly execute\uff1a",u.a.createElement(V.a,{defaultChecked:!0,onChange:this.changeCondition}))}}]),n}(u.a.Component);function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var z=function(e){Object(a.a)(n,e);var t=A(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return u.a.createElement(s.a,null,u.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},u.a.createElement(R,null),u.a.createElement(_,null),u.a.createElement(D,null)),u.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},u.a.createElement(B,null)))}}]),n}(i.Component);t.default=z}}]);
//# sourceMappingURL=101.84050a74.chunk.js.map