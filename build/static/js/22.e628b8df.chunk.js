(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1424:function(e,t,n){"use strict";var a=n(33),o=n(34),c=n(55),r=n(35),l=n(36),i=n(20),s=n(0),u=n.n(s);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var o=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var d=function(e){Object(r.a)(n,e);var t=m(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={popoverOpen:!1},e.toggle=e.toggle.bind(Object(c.a)(e)),e}return Object(o.a)(n,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.onChange,a=e.value;return u.a.createElement("div",{className:"gx-module-box-header-inner"},u.a.createElement("div",{className:"gx-search-bar gx-lt-icon-search-bar-lg gx-module-search-bar gx-d-none gx-d-sm-block"},u.a.createElement("div",{className:"gx-form-group"},u.a.createElement("input",{className:"ant-input gx-border-0",type:"search",placeholder:t,onChange:n,value:a}),u.a.createElement("span",{className:"gx-search-icon gx-pointer"},u.a.createElement("i",{className:"icon icon-search"})))),u.a.createElement("div",{className:"gx-module-box-header-right"},u.a.createElement("span",{className:"gx-fs-xl"}," ",u.a.createElement("i",{className:"icon icon-apps gx-icon-btn"})),u.a.createElement("span",{className:"gx-fs-xl"},u.a.createElement("i",{className:"icon icon-notification gx-icon-btn"}))))}}]),n}(u.a.Component);t.a=d,d.defaultProps={styleName:"",value:"",notification:!0,apps:!0}},1447:function(e,t,n){"use strict";var a=n(0),o=n(662),c=n(1),r=n(4),l=n.n(r),i=n(90),s=n(222),u=n(41),m=n(113),d=n(221),p=n(96);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},C=[];"undefined"!==typeof window&&window.document&&window.document.documentElement&&Object(i.a)(document.documentElement,"click",function(e){b={x:e.pageX,y:e.pageY},setTimeout(function(){return b=null},100)});var E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,a["Component"]);var t,n,c,r=v(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=r.apply(this,arguments)).handleCancel=function(t){var n=e.props.onCancel;n&&n(t)},e.handleOk=function(t){var n=e.props.onOk;n&&n(t)},e.renderFooter=function(t){var n=e.props,o=n.okText,c=n.okType,r=n.cancelText,l=n.confirmLoading;return a.createElement("div",null,a.createElement(m.a,A({onClick:e.handleCancel},e.props.cancelButtonProps),r||t.cancelText),a.createElement(m.a,A({type:c,loading:l,onClick:e.handleOk},e.props.okButtonProps),o||t.okText))},e.renderModal=function(t){var n,c,r,i=t.getPopupContainer,m=t.getPrefixCls,p=e.props,f=p.prefixCls,h=p.footer,g=p.visible,v=p.wrapClassName,y=p.centered,C=p.getContainer,E=p.closeIcon,O=x(p,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon"]),S=m("modal",f),k=a.createElement(d.a,{componentName:"Modal",defaultLocale:Object(s.b)()},e.renderFooter),j=a.createElement("span",{className:"".concat(S,"-close-x")},E||a.createElement(u.a,{className:"".concat(S,"-close-icon"),type:"close"}));return a.createElement(o.default,A({},O,{getContainer:void 0===C?i:C,prefixCls:S,wrapClassName:l()((n={},c="".concat(S,"-centered"),r=!!y,c in n?Object.defineProperty(n,c,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[c]=r,n),v),footer:void 0===h?k:h,visible:g,mousePosition:b,onClose:e.handleCancel,closeIcon:j}))},e}return t=i,(n=[{key:"render",value:function(){return a.createElement(p.a,null,this.renderModal)}}])&&h(t.prototype,n),c&&h(t,c),i}();E.defaultProps={width:520,transitionName:"zoom",maskTransitionName:"fade",confirmLoading:!1,visible:!1,okType:"primary"},E.propTypes={prefixCls:c.string,onOk:c.func,onCancel:c.func,okText:c.node,cancelText:c.node,centered:c.bool,width:c.oneOfType([c.number,c.string]),confirmLoading:c.bool,visible:c.bool,footer:c.node,title:c.node,closable:c.bool,closeIcon:c.node};var O=n(11);function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(r,a["Component"]);var t,n,o,c=w(r);function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=c.call(this,e)).onClick=function(){var e,n=t.props,a=n.actionFn,o=n.closeModal;a?(a.length?e=a(o):(e=a())||o(),e&&e.then&&(t.setState({loading:!0}),e.then(function(){o.apply(void 0,arguments)},function(e){console.error(e),t.setState({loading:!1})}))):o()},t.state={loading:!1},t}return t=r,(n=[{key:"componentDidMount",value:function(){if(this.props.autoFocus){var e=O.findDOMNode(this);this.timeoutId=setTimeout(function(){return e.focus()})}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.children,o=e.buttonProps,c=this.state.loading;return a.createElement(m.a,k({type:t,onClick:this.onClick,loading:c},o),n)}}])&&j(t.prototype,n),o&&j(t,o),r}(),M=n(43);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var P=!!O.createPortal,B=function(e){var t=e.onCancel,n=e.onOk,o=e.close,c=e.zIndex,r=e.afterClose,i=e.visible,m=e.keyboard,d=e.centered,p=e.getContainer,f=e.maskStyle,A=e.okButtonProps,h=e.cancelButtonProps,g=e.iconType,v=void 0===g?"question-circle":g;Object(M.a)(!("iconType"in e),"Modal","The property 'iconType' is deprecated. Use the property 'icon' instead.");var y,b,x,C=void 0===e.icon?v:e.icon,O=e.okType||"primary",S=e.prefixCls||"ant-modal",k="".concat(S,"-confirm"),j=!("okCancel"in e)||e.okCancel,N=e.width||416,w=e.style||{},R=void 0===e.mask||e.mask,D=void 0!==e.maskClosable&&e.maskClosable,P=Object(s.b)(),B=e.okText||(j?P.okText:P.justOkText),q=e.cancelText||P.cancelText,L=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),z=e.transitionName||"zoom",F=e.maskTransitionName||"fade",J=l()(k,"".concat(k,"-").concat(e.type),e.className),Q=j&&a.createElement(T,{actionFn:t,closeModal:o,autoFocus:"cancel"===L,buttonProps:h},q),I="string"===typeof C?a.createElement(u.a,{type:C}):C;return a.createElement(E,{prefixCls:S,className:J,wrapClassName:l()((y={},b="".concat(k,"-centered"),x=!!e.centered,b in y?Object.defineProperty(y,b,{value:x,enumerable:!0,configurable:!0,writable:!0}):y[b]=x,y)),onCancel:function(){return o({triggerCancel:!0})},visible:i,title:"",transitionName:z,footer:"",maskTransitionName:F,mask:R,maskClosable:D,maskStyle:f,style:w,width:N,zIndex:c,afterClose:r,keyboard:m,centered:d,getContainer:p},a.createElement("div",{className:"".concat(k,"-body-wrapper")},a.createElement("div",{className:"".concat(k,"-body")},I,void 0===e.title?null:a.createElement("span",{className:"".concat(k,"-title")},e.title),a.createElement("div",{className:"".concat(k,"-content")},e.content)),a.createElement("div",{className:"".concat(k,"-btns")},Q,a.createElement(T,{type:O,actionFn:n,closeModal:o,autoFocus:"ok"===L,buttonProps:A},B))))};function q(e){var t=document.createElement("div");document.body.appendChild(t);var n=D(D({},e),{close:r,visible:!0});function o(){O.unmountComponentAtNode(t)&&t.parentNode&&t.parentNode.removeChild(t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];var c=a.some(function(e){return e&&e.triggerCancel});e.onCancel&&c&&e.onCancel.apply(e,a);for(var l=0;l<C.length;l++){if(C[l]===r){C.splice(l,1);break}}}function c(e){O.render(a.createElement(B,e),t)}function r(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];n=D(D({},n),{visible:!1,afterClose:o.bind.apply(o,[this].concat(t))}),P?c(n):o.apply(void 0,t)}return c(n),C.push(r),{destroy:r,update:function(e){c(n=D(D({},n),e))}}}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function z(e){return q(L({type:"warning",icon:a.createElement(u.a,{type:"exclamation-circle"}),okCancel:!1},e))}E.info=function(e){return q(L({type:"info",icon:a.createElement(u.a,{type:"info-circle"}),okCancel:!1},e))},E.success=function(e){return q(L({type:"success",icon:a.createElement(u.a,{type:"check-circle"}),okCancel:!1},e))},E.error=function(e){return q(L({type:"error",icon:a.createElement(u.a,{type:"close-circle"}),okCancel:!1},e))},E.warning=z,E.warn=z,E.confirm=function(e){return q(L({type:"confirm",okCancel:!0},e))},E.destroyAll=function(){for(;C.length;){var e=C.pop();e&&e()}};t.a=E},1486:function(e,t,n){"use strict";t.a=[{id:1457690400,name:"Stella Johnson",thumb:"https://via.placeholder.com/150x150",email:"stella.johnson@example.com",phone:"+1-215-659-7529",designation:"CEO",selected:!1,starred:!1,frequently:!0},{id:1457690401,name:"Garry Sobars",thumb:"https://via.placeholder.com/150x150",email:"garry.sobars@example.com",phone:"+1-215-745-7529",designation:"CFO",selected:!1,starred:!1,frequently:!0},{id:1457690402,name:"Alex Dolgove",thumb:"https://via.placeholder.com/150x150",email:"alex.dolgove@example.com",phone:"+1-215-748-7855",designation:"Designer",selected:!1,starred:!1,frequently:!0},{id:1457690403,name:"Domnic Brown",thumb:"https://via.placeholder.com/150x150",email:"domnic.brown@example.com",phone:"+1-215-756-4579",designation:"PHP Developer",selected:!1,starred:!1,frequently:!0},{id:1457690404,name:"Kadir M",thumb:"https://via.placeholder.com/150x150",email:"kadir.m@example.com",phone:"+1-215-659-7586",designation:"HR Manager",selected:!1,starred:!1,frequently:!1},{id:1457690405,name:"John Smith",thumb:"https://via.placeholder.com/150x150",email:"john.smith@example.com",phone:"+1-215-876-8596",designation:"Marketing Head",selected:!1,starred:!1,frequently:!1},{id:1457690406,name:"Domnic Harris",thumb:"https://via.placeholder.com/150x150",email:"domnic.harris@example.com",phone:"+1-215-785-3841",designation:"BDO",selected:!1,starred:!0,frequently:!1},{id:1457690407,name:"Jimmy Jo",thumb:"https://via.placeholder.com/150x150",email:"jimmy.jo@example.com",phone:"+1-215-456-5863",designation:"CCO",selected:!1,starred:!1,frequently:!1},{id:1457690408,name:"Jimmy Jon",thumb:"https://via.placeholder.com/150x150",email:"jimmy.jon@example.com",phone:"+1-215-278-4558",designation:"Developer",selected:!1,starred:!0,frequently:!1},{id:1457690409,name:"Jeson Born",thumb:"https://via.placeholder.com/150x150",email:"jeson.born@example.com",phone:"+1-215-286-7551",designation:"UI-UX Designer",selected:!1,starred:!1,frequently:!1},{id:1457690410,name:"Steve Smith",thumb:"https://via.placeholder.com/150x150",email:"steve.smith@example.com",phone:"+1-215-586-5862",designation:"CEO",selected:!1,starred:!1,frequently:!1},{id:1457690500,name:"Stella Johnson",thumb:"https://via.placeholder.com/150x150",email:"stella.johnson@example.com",phone:"+1-215-659-7529",designation:"CEO",selected:!1,starred:!1,frequently:!0},{id:1457690501,name:"Garry Sobars",thumb:"https://via.placeholder.com/150x150",email:"garry.sobars@example.com",phone:"+1-215-745-7529",designation:"CFO",selected:!1,starred:!1,frequently:!0},{id:1457690502,name:"Alex Dolgove",thumb:"https://via.placeholder.com/150x150",email:"alex.dolgove@example.com",phone:"+1-215-748-7855",designation:"Designer",selected:!1,starred:!1,frequently:!0},{id:1457690503,name:"Domnic Brown",thumb:"https://via.placeholder.com/150x150",email:"domnic.brown@example.com",phone:"+1-215-756-4579",designation:"PHP Developer",selected:!1,starred:!1,frequently:!0},{id:1457690404,name:"Kadir M",thumb:"https://via.placeholder.com/150x150",email:"kadir.m@example.com",phone:"+1-215-659-7586",designation:"HR Manager",selected:!1,starred:!1,frequently:!1},{id:1457690505,name:"John Smith",thumb:"https://via.placeholder.com/150x150",email:"john.smith@example.com",phone:"+1-215-876-8596",designation:"Marketing Head",selected:!1,starred:!1,frequently:!1},{id:1457690506,name:"Domnic Harris",thumb:"https://via.placeholder.com/150x150",email:"domnic.harris@example.com",phone:"+1-215-785-3841",designation:"BDO",selected:!1,starred:!0,frequently:!1},{id:1457690507,name:"Jimmy Jo",thumb:"https://via.placeholder.com/150x150",email:"jimmy.jo@example.com",phone:"+1-215-456-5863",designation:"CCO",selected:!1,starred:!1,frequently:!1},{id:1457690508,name:"Jimmy Jon",thumb:"https://via.placeholder.com/150x150",email:"jimmy.jon@example.com",phone:"+1-215-278-4558",designation:"Developer",selected:!1,starred:!0,frequently:!1},{id:1457690509,name:"Jeson Born",thumb:"https://via.placeholder.com/150x150",email:"jeson.born@example.com",phone:"+1-215-286-7551",designation:"UI-UX Designer",selected:!1,starred:!1,frequently:!1},{id:1457690510,name:"Steve Smith",thumb:"https://via.placeholder.com/150x150",email:"steve.smith@example.com",phone:"+1-215-586-5862",designation:"CEO",selected:!1,starred:!1,frequently:!1}]},1489:function(e,t){e.exports="data:image/jpeg;base64,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"},1937:function(e,t,n){"use strict";n.r(t);var a=n(31),o=n(33),c=n(34),r=n(55),l=n(35),i=n(36),s=n(20),u=n(0),m=n.n(u),d=n(113),p=n(1384),f=n(1374),A=n(1385),h=n(71),g=n(1486),v=n(1376),y=n(1382),b=n(1377),x=n(1447),C=n(1373),E=n(2);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var S=function(e){Object(l.a)(a,e);var t=O(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var c=e.contact,r=c.id,l=c.thumb,i=c.name,s=c.email,u=c.phone,m=c.designation,d=c.selected,p=c.starred,f=c.frequently;return n.state={id:r,thumb:l,name:i,email:s,phone:u,designation:m,selected:d,starred:p,frequently:f},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSaveContact,o=t.onContactClose,c=t.open,r=t.contact,l=this.state,i=l.id,s=l.name,u=l.email,d=l.phone,p=l.designation,f=l.selected,A=l.starred,h=l.frequently,g=this.state.thumb;return g||(g=n(1489)),m.a.createElement(x.a,{title:""===r.name?m.a.createElement(E.a,{id:"contact.addContact"}):m.a.createElement(E.a,{id:"contact.saveContact"}),toggle:o,visible:c,closable:!1,onOk:function(){""!==s&&(o(),a({id:i,name:s,thumb:g,email:u,phone:d,designation:p,selected:f,starred:A,frequently:h}),e.setState({id:i+1,name:"",thumb:"",email:"",phone:"",designation:""}))},onCancel:o},m.a.createElement("div",{className:"gx-modal-box-row"},m.a.createElement("div",{className:"gx-modal-box-avatar"},m.a.createElement(y.a,{size:"large",src:g})),m.a.createElement("div",{className:"gx-modal-box-form-item"},m.a.createElement("div",{className:"gx-form-group"},m.a.createElement(C.a,{required:!0,placeholder:"Name",onChange:function(t){return e.setState({name:t.target.value})},defaultValue:s,margin:"none"})),m.a.createElement("div",{className:"gx-form-group"},m.a.createElement(C.a,{placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})},value:u,margin:"normal"})),m.a.createElement("div",{className:"gx-form-group"},m.a.createElement(C.a,{placeholder:"Phone",onChange:function(t){return e.setState({phone:t.target.value})},value:d,margin:"normal"})),m.a.createElement("div",{className:"gx-form-group"},m.a.createElement(C.a,{placeholder:"Designation",onChange:function(t){return e.setState({designation:t.target.value})},value:p,autosize:{minRows:2,maxRows:6},margin:"normal"})))))}}]),a}(m.a.Component);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var j=["Edit","Delete"],N=function(e){Object(l.a)(n,e);var t=k(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onContactClose=function(){e.setState({addContactState:!1})},e.onDeleteContact=function(t){e.setState({addContactState:!1}),e.props.onDeleteContact(t)},e.onEditContact=function(){e.setState({addContactState:!0})},e.menus=function(){return m.a.createElement(v.a,{onClick:function(t){"Edit"===t.key?e.onEditContact():e.onDeleteContact(e.props.contact)}},j.map(function(e){return m.a.createElement(v.a.Item,{key:e},e)}))},e.state={addContactState:!1},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.contact,n=e.addFavourite,a=e.onContactSelect,o=e.onSaveContact,c=this.state.addContactState,r=t.name,l=t.thumb,i=t.email,s=t.phone,u=t.designation,d=t.starred;return m.a.createElement("div",{className:"gx-contact-item"},m.a.createElement("div",{className:"gx-module-list-icon"},m.a.createElement(f.a,{className:"gx-icon-btn",checked:t.selected,value:"checkedF",onClick:function(){a(t)}}),m.a.createElement("div",{className:"gx-d-none gx-d-sm-flex",onClick:function(){n(t)}},d?m.a.createElement("i",{className:"gx-icon-btn icon icon-star"}):m.a.createElement("i",{className:"gx-icon-btn icon icon-star-o"})),m.a.createElement("div",{className:"gx-ml-2 gx-d-none gx-d-sm-flex"},null===l||""===l?m.a.createElement(y.a,{size:"large"},r.charAt(0).toUpperCase()):m.a.createElement(y.a,{size:"large",alt:r,src:l}))),m.a.createElement("div",{className:"gx-module-list-info gx-contact-list-info"},m.a.createElement("div",{className:"gx-module-contact-content"},m.a.createElement("p",{className:"gx-mb-1"},m.a.createElement("span",{className:"gx-text-truncate gx-contact-name"}," ",r," "),m.a.createElement("span",{className:"gx-toolbar-separator"},"\xa0"),m.a.createElement("span",{className:"gx-text-truncate gx-job-title"},u)),m.a.createElement("div",{className:"gx-text-muted"},m.a.createElement("span",{className:"gx-email gx-d-inline-block gx-mr-2"},i,","),m.a.createElement("span",{className:"gx-phone gx-d-inline-block"},s))),m.a.createElement("div",{className:"gx-module-contact-right"},m.a.createElement(b.a,{overlay:this.menus(),placement:"bottomRight",trigger:["click"]},m.a.createElement("i",{className:"gx-icon-btn icon icon-ellipse-v"})),c&&m.a.createElement(S,{open:c,contact:t,onSaveContact:o,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact}))))}}]),n}(m.a.Component),w=function(e){var t=e.contactList,n=e.addFavourite,a=e.onContactSelect,o=e.onSaveContact,c=e.onDeleteContact;return m.a.createElement("div",{className:"gx-contact-main-content"},t.map(function(e,t){return m.a.createElement(N,{key:t,contact:e,onDeleteContact:c,onSaveContact:o,addFavourite:n,onContactSelect:a})}))},R=n(1424);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var M=723812738,D=[{id:1,name:"All contacts",icon:"all-contacts"},{id:2,name:"Frequently contacted",icon:"frequent"},{id:3,name:"Starred contacts",icon:"star"}],P=function(e){Object(l.a)(n,e);var t=T(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).ContactSideBar=function(t){return m.a.createElement("div",{className:"gx-module-side"},m.a.createElement("div",{className:"gx-module-side-header"},m.a.createElement("div",{className:"gx-module-logo"},m.a.createElement("i",{className:"icon icon-contacts gx-mr-4"}),m.a.createElement("span",null,m.a.createElement(E.a,{id:"chat.contacts"})))),m.a.createElement("div",{className:"gx-module-side-content"},m.a.createElement(h.a,{className:"gx-module-side-scroll"},m.a.createElement("div",{className:"gx-module-add-task"},m.a.createElement(d.a,{className:"gx-btn-block ant-btn",type:"primary","aria-label":"add",onClick:e.onAddContact},m.a.createElement("i",{className:"icon icon-add gx-mr-2"}),m.a.createElement("span",null,"Add New Contact"))),m.a.createElement("div",{className:"gx-module-side-nav"},m.a.createElement("ul",{className:"gx-module-nav"},D.map(function(t){return m.a.createElement("li",{key:t.id,className:"gx-nav-item"},m.a.createElement("span",{className:"gx-link ".concat(t.id===e.state.selectedSectionId?"active":""),onClick:e.onFilterOptionSelect.bind(Object(r.a)(e),t)},m.a.createElement("i",{className:"icon icon-".concat(t.icon)}),m.a.createElement("span",null,t.name)))}))))))},e.addFavourite=function(t){e.setState({alertMessage:t.starred?"Contact removed as star":"Contact marked as star",showMessage:!0,contactList:e.state.contactList.map(function(e){return e.id===t.id?Object(a.a)({},e,{starred:!t.starred}):e}),allContact:e.state.allContact.map(function(e){return e.id===t.id?Object(a.a)({},e,{starred:!t.starred}):e})})},e.onContactSelect=function(t){t.selected=!t.selected;var n=0,a=e.state.contactList.map(function(e){return e.selected&&n++,e.id===t.id?(e.selected&&n++,t):e});e.setState({selectedContacts:n,contactList:a})},e.onAddContact=function(){e.setState({addContactState:!0})},e.onContactClose=function(){e.setState({addContactState:!1})},e.onFilterOptionSelect=function(t){switch(t.name){case"All contacts":e.setState({selectedSectionId:t.id,filterOption:t.name,contactList:e.state.allContact});break;case"Frequently contacted":e.setState({selectedSectionId:t.id,filterOption:t.name,contactList:e.state.allContact.filter(function(e){return e.frequently})});break;case"Starred contacts":e.setState({selectedSectionId:t.id,filterOption:t.name,contactList:e.state.allContact.filter(function(e){return e.starred})})}},e.onSaveContact=function(t){var n=!0,a=e.state.allContact.map(function(e){return e.id===t.id?(n=!1,t):e});n&&a.push(t),e.setState({alertMessage:n?"Contact Added Successfully":"Contact Updated Successfully",showMessage:!0,contactList:a,allContact:a})},e.onDeleteContact=function(t){e.setState({alertMessage:"Contact Deleted Successfully",showMessage:!0,allContact:e.state.allContact.filter(function(e){return e.id!==t.id}),contactList:e.state.allContact.filter(function(e){return e.id!==t.id})})},e.onDeleteSelectedContact=function(){var t=e.state.allContact.filter(function(e){return!e.selected});e.setState({alertMessage:"Contact Deleted Successfully",showMessage:!0,allContact:t,contactList:t,selectedContacts:0})},e.filterContact=function(t){var n=e.state.filterOption;if(""===t)e.setState({contactList:e.state.allContact});else{var a=e.state.allContact.filter(function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1});"All contacts"===n?e.setState({contactList:a}):"Frequently contacted"===n?e.setState({contactList:a.filter(function(e){return e.frequently})}):"Starred contacts"===n&&e.setState({contactList:a.filter(function(e){return e.starred})})}},e.handleRequestClose=function(){e.setState({showMessage:!1})},e.getAllContact=function(){var t=e.state.allContact.map(function(e){return e?Object(a.a)({},e,{selected:!0}):e});e.setState({selectedContacts:t.length,allContact:t,contactList:t})},e.getUnselectedAllContact=function(){var t=e.state.allContact.map(function(e){return e?Object(a.a)({},e,{selected:!1}):e});e.setState({selectedContacts:0,allContact:t,contactList:t})},e.state={noContentFoundMessage:"No Contact found in selected folder",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,user:{name:"Robert Johnson",email:"robert.johnson@example.com",avatar:"https://via.placeholder.com/150x150"},searchUser:"",filterOption:"All contacts",allContact:g.a,contactList:g.a,selectedContact:null,selectedContacts:0,addContactState:!1},e}return Object(c.a)(n,[{key:"onAllContactSelect",value:function(){this.state.selectedContacts<this.state.contactList.length?this.getAllContact():this.getUnselectedAllContact()}},{key:"updateContactUser",value:function(e){this.setState({searchUser:e.target.value}),this.filterContact(e.target.value)}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.contactList,a=e.addContactState,o=e.drawerState,c=e.selectedContacts,r=e.alertMessage,l=e.showMessage,i=e.noContentFoundMessage;return m.a.createElement("div",{className:"gx-main-content"},m.a.createElement("div",{className:"gx-app-module"},m.a.createElement("div",{className:"gx-d-block gx-d-lg-none"},m.a.createElement(p.a,{placement:"left",closable:!1,visible:o,onClose:this.onToggleDrawer.bind(this)},this.ContactSideBar())),m.a.createElement("div",{className:"gx-module-sidenav gx-d-none gx-d-lg-flex"},this.ContactSideBar(t)),m.a.createElement("div",{className:"gx-module-box"},m.a.createElement("div",{className:"gx-module-box-header"},m.a.createElement("span",{className:"gx-drawer-btn gx-d-flex gx-d-lg-none"},m.a.createElement("i",{className:"icon icon-menu gx-icon-btn","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)})),m.a.createElement(R.a,{placeholder:"Search contact",notification:!1,apps:!1,user:this.state.user,onChange:this.updateContactUser.bind(this),value:this.state.searchUser})),m.a.createElement("div",{className:"gx-module-box-content"},m.a.createElement("div",{className:"gx-module-box-topbar"},m.a.createElement(f.a,{color:"primary",className:"gx-icon-btn",indeterminate:c>0&&c<n.length,checked:c>0,onChange:this.onAllContactSelect.bind(this),value:"SelectMail"}),c>0&&m.a.createElement("i",{className:"gx-icon-btn icon icon-trash",onClick:this.onDeleteSelectedContact.bind(this)})),m.a.createElement(h.a,{className:"gx-module-content-scroll"},0===n.length?m.a.createElement("div",{className:"gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center"},i):m.a.createElement(w,{contactList:n,addFavourite:this.addFavourite.bind(this),onContactSelect:this.onContactSelect.bind(this),onDeleteContact:this.onDeleteContact.bind(this),onSaveContact:this.onSaveContact.bind(this)}))))),m.a.createElement(S,{open:a,contact:{id:M++,name:"",thumb:"",email:"",phone:"",designation:"",selected:!1,starred:!1,frequently:!1},onSaveContact:this.onSaveContact,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact}),l&&A.a.info(m.a.createElement("span",{id:"message-id"},r),3,this.handleRequestClose))}}]),n}(u.Component);t.default=P}}]);
//# sourceMappingURL=22.e628b8df.chunk.js.map