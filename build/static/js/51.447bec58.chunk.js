(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1414:function(e,n,t){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(n,"a",function(){return a})},1502:function(e,n,t){"use strict";var a=t(0),l=t(669),o=t(169),r=t.n(o),i=t(4),u=t.n(i),c=t(21),s=t(13),p=t(10),h=t(1374),f=t(41),d=t(96),m=t(221),v=t(43);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function j(e,n){return(j=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function C(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,a=x(e);if(n){var l=x(this).constructor;t=Reflect.construct(a,arguments,l)}else t=a.apply(this,arguments);return function(e,n){if(n&&("object"===g(n)||"function"===typeof n))return n;return O(e)}(this,t)}}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t};function k(e,n,t){return n.some(function(n){return n[t.label].indexOf(e)>-1})}function w(e,n,t,l){return n.map(function(n,o){var r=n[l.label],i=r.indexOf(e)>-1?function(e,n,t){return e.split(n).map(function(e,l){return 0===l?e:[a.createElement("span",{className:"".concat(t,"-menu-item-keyword"),key:"seperator"},n),e]})}(r,e,t):r;return 0===o?i:[" / ",i]})}function P(e,n,t,a){function l(e){return e[a.label].indexOf(t)>-1}return e.findIndex(l)-n.findIndex(l)}function V(e){var n=function(e){var n=e.fieldNames,t=e.filedNames;return"filedNames"in e?t:n}(e)||{};return{children:n.children||"children",label:n.label||"label",value:n.value||"value"}}function S(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=V(n),l=[],o=a.children;return e.forEach(function(e){var a=t.concat(e);!n.changeOnSelect&&e[o]&&e[o].length||l.push(a),e[o]&&(l=l.concat(S(e[o],n,a)))}),l}var z=function(e){return e.join(" / ")};var I=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&j(e,n)}(p,a["Component"]);var n,t,o,i=C(p);function p(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(n=i.call(this,e)).cachedOptions=[],n.setValue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];"value"in n.props||n.setState({value:e});var a=n.props.onChange;a&&a(e,t)},n.saveInput=function(e){n.input=e},n.handleChange=function(e,t){if(n.setState({inputValue:""}),t[0].__IS_FILTERED_OPTION){var a=e[0],l=t[0].path;n.setValue(a,l)}else n.setValue(e,t)},n.handlePopupVisibleChange=function(e){"popupVisible"in n.props||n.setState(function(n){return{popupVisible:e,inputFocused:e,inputValue:e?n.inputValue:""}});var t=n.props.onPopupVisibleChange;t&&t(e)},n.handleInputBlur=function(){n.setState({inputFocused:!1})},n.handleInputClick=function(e){var t=n.state,a=t.inputFocused,l=t.popupVisible;(a||l)&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation())},n.handleKeyDown=function(e){e.keyCode!==s.a.BACKSPACE&&e.keyCode!==s.a.SPACE||e.stopPropagation()},n.handleInputChange=function(e){var t=e.target.value;n.setState({inputValue:t})},n.clearSelection=function(e){e.preventDefault(),e.stopPropagation(),n.state.inputValue?n.setState({inputValue:""}):(n.setValue([]),n.handlePopupVisibleChange(!1))},n.renderCascader=function(e,t){var o,r,i,s,p,d=e.getPopupContainer,m=e.getPrefixCls,v=e.renderEmpty,g=O(n),E=g.props,j=g.state,C=E.prefixCls,x=E.inputPrefixCls,k=E.children,w=E.placeholder,P=void 0===w?t.placeholder||"Please select":w,S=E.size,z=E.disabled,I=E.className,R=E.style,_=E.allowClear,D=E.showSearch,L=void 0!==D&&D,A=E.suffixIcon,F=E.notFoundContent,T=N(E,["prefixCls","inputPrefixCls","children","placeholder","size","disabled","className","style","allowClear","showSearch","suffixIcon","notFoundContent"]),H=j.value,Z=j.inputFocused,M=m("cascader",C),W=m("input",x),B=u()((y(o={},"".concat(W,"-lg"),"large"===S),y(o,"".concat(W,"-sm"),"small"===S),o)),J=_&&!z&&H.length>0||j.inputValue?a.createElement(f.a,{type:"close-circle",theme:"filled",className:"".concat(M,"-picker-clear"),onClick:n.clearSelection}):null,K=u()((y(r={},"".concat(M,"-picker-arrow"),!0),y(r,"".concat(M,"-picker-arrow-expand"),j.popupVisible),r)),q=u()(I,"".concat(M,"-picker"),(y(i={},"".concat(M,"-picker-with-value"),j.inputValue),y(i,"".concat(M,"-picker-disabled"),z),y(i,"".concat(M,"-picker-").concat(S),!!S),y(i,"".concat(M,"-picker-show-search"),!!L),y(i,"".concat(M,"-picker-focused"),Z),i)),U=Object(c.default)(T,["onChange","options","popupPlacement","transitionName","displayRender","onPopupVisibleChange","changeOnSelect","expandTrigger","popupVisible","getPopupContainer","loadData","popupClassName","filterOption","renderFilteredOption","sortFilteredOption","notFoundContent","fieldNames","filedNames"]),X=E.options,G=V(n.props);X&&X.length>0?j.inputValue&&(X=n.generateFilteredOptions(M,v)):X=[(p={},y(p,G.value,"ANT_CASCADER_NOT_FOUND"),y(p,G.label,F||v("Cascader")),y(p,"disabled",!0),y(p,"isEmptyNode",!0),p)];j.popupVisible?n.cachedOptions=X:X=n.cachedOptions;var Q={},Y=1===(X||[]).length&&X[0].isEmptyNode;Y&&(Q.height="auto"),!1!==L.matchInputWidth&&(j.inputValue||Y)&&n.input&&(Q.width=n.input.input.offsetWidth);var $=A&&(a.isValidElement(A)?a.cloneElement(A,{className:u()((s={},y(s,A.props.className,A.props.className),y(s,"".concat(M,"-picker-arrow"),!0),s))}):a.createElement("span",{className:"".concat(M,"-picker-arrow")},A))||a.createElement(f.a,{type:"down",className:K}),ee=k||a.createElement("span",{style:R,className:q},a.createElement("span",{className:"".concat(M,"-picker-label")},n.getLabel()),a.createElement(h.a,b({},U,{tabIndex:"-1",ref:n.saveInput,prefixCls:W,placeholder:H&&H.length>0?void 0:P,className:"".concat(M,"-input ").concat(B),value:j.inputValue,disabled:z,readOnly:!L,autoComplete:U.autoComplete||"off",onClick:L?n.handleInputClick:void 0,onBlur:L?n.handleInputBlur:void 0,onKeyDown:n.handleKeyDown,onChange:L?n.handleInputChange:void 0})),J,$),ne=a.createElement(f.a,{type:"right"}),te=a.createElement("span",{className:"".concat(M,"-menu-item-loading-icon")},a.createElement(f.a,{type:"redo",spin:!0})),ae=E.getPopupContainer||d,le=Object(c.default)(E,["inputIcon","expandIcon","loadingIcon"]);return a.createElement(l.default,b({},le,{prefixCls:M,getPopupContainer:ae,options:X,value:H,popupVisible:j.popupVisible,onPopupVisibleChange:n.handlePopupVisibleChange,onChange:n.handleChange,dropdownMenuColumnStyle:Q,expandIcon:ne,loadingIcon:te}),ee)},n.state={value:e.value||e.defaultValue||[],inputValue:"",inputFocused:!1,popupVisible:e.popupVisible,flattenOptions:e.showSearch?S(e.options,e):void 0,prevProps:e},n}return n=p,o=[{key:"getDerivedStateFromProps",value:function(e,n){var t=n.prevProps,a={prevProps:e};return"value"in e&&(a.value=e.value||[]),"popupVisible"in e&&(a.popupVisible=e.popupVisible),e.showSearch&&t.options!==e.options&&(a.flattenOptions=S(e.options,e)),a}}],(t=[{key:"getLabel",value:function(){var e=this.props,n=e.options,t=e.displayRender,a=void 0===t?z:t,l=V(this.props),o=this.state.value,i=Array.isArray(o[0])?o[0]:o,u=r()(n,function(e,n){return e[l.value]===i[n]},{childrenKeyName:l.children});return a(u.map(function(e){return e[l.label]}),u)}},{key:"generateFilteredOptions",value:function(e,n){var t,a,l=this,o=this.props,r=o.showSearch,i=o.notFoundContent,u=V(this.props),c=r.filter,s=void 0===c?k:c,p=r.render,h=void 0===p?w:p,f=r.sort,d=void 0===f?P:f,m=r.limit,g=void 0===m?50:m,b=this.state,E=b.flattenOptions,j=void 0===E?[]:E,C=b.inputValue;if(g>0){a=[];var O=0;j.some(function(e){return s(l.state.inputValue,e,u)&&(a.push(e),O+=1),O>=g})}else Object(v.a)("number"!==typeof g,"Cascader","'limit' of showSearch should be positive number or false."),a=j.filter(function(e){return s(l.state.inputValue,e,u)});return a.sort(function(e,n){return d(e,n,C,u)}),a.length>0?a.map(function(n){var t;return y(t={__IS_FILTERED_OPTION:!0,path:n},u.value,n.map(function(e){return e[u.value]})),y(t,u.label,h(C,n,e,u)),y(t,"disabled",n.some(function(e){return!!e.disabled})),y(t,"isEmptyNode",!0),t}):[(t={},y(t,u.value,"ANT_CASCADER_NOT_FOUND"),y(t,u.label,i||n("Cascader")),y(t,"disabled",!0),y(t,"isEmptyNode",!0),t)]}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e=this;return a.createElement(d.a,null,function(n){return a.createElement(m.a,null,function(t){return e.renderCascader(n,t)})})}}])&&E(n.prototype,t),o&&E(n,o),p}();I.defaultProps={transitionName:"slide-up",popupPlacement:"bottomLeft",options:[],disabled:!1,allowClear:!0},Object(p.polyfill)(I),n.a=I},1879:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(194),r=t(106),i=t(1372),u=t(1502),c=[{value:"zhejiang",label:"Menu",children:[{value:"jumbo",label:"jquery",children:[{value:"opstion",label:"West Lake"}]}]},{value:"menu",label:"Menu 1",children:[{value:"opstion 1",label:"jumbo",children:[{value:"opstion 2",label:"react"}]}]}];function s(e){console.log(e)}var p=function(){return l.a.createElement(i.a,{className:"gx-card",title:"Basic"},l.a.createElement(u.a,{options:c,onChange:s,placeholder:"Please select"}))},h=[{value:"menu",label:"Menu",children:[{value:"jumbo",label:"jquery",children:[{value:"opstion",label:"West Lake"}]}]},{value:"menu",label:"Menu 1",children:[{value:"opstion 1",label:"jumbo",children:[{value:"opstion 2",label:"react"}]}]}];function f(e){console.log(e)}var d=function(){return l.a.createElement(i.a,{className:"gx-card",title:"Default Value"},l.a.createElement(u.a,{defaultValue:["menu","jumbo","opstion"],options:h,onChange:f}))},m=t(33),v=t(34),g=t(35),b=t(36),y=t(20);function E(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,a=Object(y.a)(e);if(n){var l=Object(y.a)(this).constructor;t=Reflect.construct(a,arguments,l)}else t=a.apply(this,arguments);return Object(b.a)(this,t)}}var j=[{value:"menu",label:"Menu",children:[{value:"jumbo",label:"jquery",children:[{value:"opstion",label:"West Lake"}]}]},{value:"menu",label:"Menu 1",children:[{value:"opstion 1",label:"jumbo",children:[{value:"opstion 2",label:"react"}]}]}],C=function(e){Object(g.a)(t,e);var n=E(t);function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=n.call.apply(n,[this].concat(l))).state={text:"Unselect"},e.onChange=function(n,t){e.setState({text:t.map(function(e){return e.label}).join(", ")})},e}return Object(v.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,{className:"gx-card",title:"Custom Trigger"},this.state.text,"\xa0",l.a.createElement(u.a,{options:j,onChange:this.onChange},l.a.createElement("span",{className:"gx-link"},"Change city")))}}]),t}(a.Component),O=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function x(e){console.log(e)}function N(e){return e[e.length-1]}var k=function(){return l.a.createElement(i.a,{className:"gx-card",title:"Hover"},l.a.createElement(u.a,{options:O,expandTrigger:"hover",displayRender:N,onChange:x}))},w=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",disabled:!0,children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function P(e){console.log(e)}var V=function(){return l.a.createElement(i.a,{className:"gx-card",title:"Disabled Option"},l.a.createElement(u.a,{options:w,onChange:P}))},S=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:752100}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",code:453400}]}]}];var z=function(){return l.a.createElement(i.a,{className:"gx-card",title:"Change On Select"},l.a.createElement(u.a,{options:S,defaultValue:["zhejiang","hangzhou","xihu"],displayRender:function(e,n){return e.map(function(t,a){var o=n[a];return a===e.length-1?l.a.createElement("span",{key:o.value},t," (",l.a.createElement("span",{className:"gx-link",onClick:function(e){return function(e,n,t){e.stopPropagation(),console.log("clicked",n,t)}(e,t,o)}},o.code),")"):l.a.createElement("span",{key:o.value},t," / ")})},style:{width:"100%"}}))},I=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function R(e){console.log(e)}var _=function(){return l.a.createElement(i.a,{className:"gx-card",title:"Size"},l.a.createElement(u.a,{size:"large",options:I,onChange:R}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.a,{options:I,onChange:R}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.a,{size:"small",options:I,onChange:R}),l.a.createElement("br",null),l.a.createElement("br",null))},D=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:752100}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",code:453400}]}]}];var L=function(){return l.a.createElement(i.a,{className:"gx-card",title:"CustomRender"},l.a.createElement(u.a,{options:D,defaultValue:["zhejiang","hangzhou","xihu"],displayRender:function(e,n){return e.map(function(t,a){var o=n[a];return a===e.length-1?l.a.createElement("span",{key:o.value},t," (",l.a.createElement("span",{className:"gx-link",onClick:function(e){return function(e,n,t){e.stopPropagation(),console.log("clicked",n,t)}(e,t,o)}},o.code),")"):l.a.createElement("span",{key:o.value},t," / ")})},style:{width:"100%"}}))},A=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua men"}]}]}];function F(e,n){console.log(e,n)}function T(e,n){return n.some(function(n){return n.label.toLowerCase().indexOf(e.toLowerCase())>-1})}var H=function(){return l.a.createElement(i.a,{className:"gx-card",title:"Search"},l.a.createElement(u.a,{options:A,onChange:F,placeholder:"Please select",showSearch:{filter:T}}))},Z=t(1414);function M(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,a=Object(y.a)(e);if(n){var l=Object(y.a)(this).constructor;t=Reflect.construct(a,arguments,l)}else t=a.apply(this,arguments);return Object(b.a)(this,t)}}var W=[{value:"zhejiang",label:"Zhejiang",isLeaf:!1},{value:"jiangsu",label:"Jiangsu",isLeaf:!1}],B=function(e){Object(g.a)(t,e);var n=M(t);function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=n.call.apply(n,[this].concat(l))).state={options:W},e.onChange=function(e,n){console.log(e,n)},e.loadData=function(n){var t=n[n.length-1];t.loading=!0,setTimeout(function(){t.loading=!1,t.children=[{label:"".concat(t.label," Dynamic 1"),value:"dynamic1"},{label:"".concat(t.label," Dynamic 2"),value:"dynamic2"}],e.setState({options:Object(Z.a)(e.state.options)})},1e3)},e}return Object(v.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,{className:"gx-card",title:"LoadOptions"},l.a.createElement(u.a,{options:this.state.options,loadData:this.loadData,onChange:this.onChange,changeOnSelect:!0}))}}]),t}(a.Component);n.default=function(){return l.a.createElement(o.a,null,l.a.createElement(r.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(p,null),l.a.createElement(d,null),l.a.createElement(C,null),l.a.createElement(k,null),l.a.createElement(V,null),l.a.createElement(B,null)),l.a.createElement(r.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(z,null),l.a.createElement(_,null),l.a.createElement(L,null),l.a.createElement(H,null)))}}}]);
//# sourceMappingURL=51.447bec58.chunk.js.map