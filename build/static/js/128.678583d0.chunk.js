(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1881:function(e,t,n){"use strict";n.r(t);var o=n(33),a=n(34),r=n(35),c=n(36),i=n(20),u=n(0),l=n.n(u),s=n(194),f=n(106),p=n(698),g=n(10),h=n(4),m=n.n(h),y=n(41),d=n(43),v=n(96);function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=R(e);if(t){var a=R(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(r,u["Component"]);var t,n,o,a=E(r);function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=a.call(this,e)).mentionRef=function(e){t.mentionEle=e},t.onSearchChange=function(e,n){return t.props.onSearchChange?t.props.onSearchChange(e,n):t.defaultSearchChange(e)},t.onChange=function(e){t.props.onChange&&t.props.onChange(e)},t.onFocus=function(e){t.setState({focus:!0}),t.props.onFocus&&t.props.onFocus(e)},t.onBlur=function(e){t.setState({focus:!1}),t.props.onBlur&&t.props.onBlur(e)},t.focus=function(){t.mentionEle._editor.focusEditor()},t.renderMention=function(e){var n,o=e.getPrefixCls,a=t.props,r=a.prefixCls,c=a.className,i=void 0===c?"":c,l=a.loading,s=a.placement,f=a.suggestions,g=t.state,h=g.filteredSuggestions,d=g.focus,v=o("mention",r),b=m()(i,(S(n={},"".concat(v,"-active"),d),S(n,"".concat(v,"-placement-top"),"top"===s),n)),C=l?u.createElement(y.a,{type:"loading"}):t.props.notFoundContent;return u.createElement(p.default,j({},t.props,{prefixCls:v,className:b,ref:t.mentionRef,onSearchChange:t.onSearchChange,onChange:t.onChange,onFocus:t.onFocus,onBlur:t.onBlur,suggestions:f||h,notFoundContent:C}))},t.state={filteredSuggestions:e.defaultSuggestions,focus:!1},Object(d.a)(!1,"Mention","Mention component is deprecated. Please use Mentions component instead."),t}return t=r,(n=[{key:"defaultSearchChange",value:function(e){var t=e.toLowerCase(),n=(this.props.defaultSuggestions||[]).filter(function(e){return"string"===typeof e?-1!==e.toLowerCase().indexOf(t):!(!e.type||e.type!==p.Nav)&&(!e.props.value||-1!==e.props.value.toLowerCase().indexOf(t))});this.setState({filteredSuggestions:n})}},{key:"render",value:function(){return u.createElement(v.a,null,this.renderMention)}}])&&C(t.prototype,n),o&&C(t,o),r}();w.getMentions=p.getMentions,w.defaultProps={notFoundContent:"No matches found",loading:!1,multiLines:!1,placement:"bottom"},w.Nav=p.Nav,w.toString=p.toString,w.toContentState=p.toEditorState,Object(g.polyfill)(w);var x=w,P=n(1372),B=x.toString,N=x.toContentState,k=function(){return l.a.createElement(P.a,{className:"gx-card",title:"Basic"},l.a.createElement(x,{style:{width:"100%"},onChange:function(e){console.log(B(e))},defaultValue:N("@afc163"),suggestions:["afc163","benjycui","yiminghe","RaoHai","\u4e2d\u6587","\u306b\u307b\u3093\u3054"],onSelect:function(e){console.log("onSelect",e)}}))},L=x.toString,M=function(){return l.a.createElement(P.a,{className:"gx-card",title:"Placement"},l.a.createElement(x,{style:{width:"100%"},onChange:function(e){console.log(L(e))},suggestions:["afc163","benjycui","yiminghe","RaoHai","\u4e2d\u6587","\u306b\u307b\u3093\u3054"],onSelect:function(e){console.log("onSelect",e)},placement:"top"}))};function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var J=["afc163","benjycui","yiminghe","jljsj33","dqaria","RaoHai"],A=function(e){Object(r.a)(n,e);var t=F(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={suggestions:[],loading:!1},e.fetchSuggestions=function(e,t){setTimeout(function(){t(J.filter(function(t){return-1!==t.indexOf(e)}))},500)},e.onSearchChange=function(t){e.fetchSuggestions(t,function(t){e.setState({suggestions:t,loading:!1})}),e.setState({loading:!0})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state,t=e.suggestions,n=e.loading;return l.a.createElement(P.a,{className:"gx-card",title:"Asynchronous Loading"},l.a.createElement(x,{style:{width:"100%"},loading:n,suggestions:t,onSearchChange:this.onSearchChange}))}}]),n}(l.a.Component);function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var _=x.Nav,z=[{name:"React",type:"JavaScript"},{name:"Angular",type:"JavaScript"},{name:"Laravel",type:"PHP",disabled:!0},{name:"Flask",type:"Python"},{name:"Django",type:"Python"}];function H(e,t){console.log("onSelect",e,t)}var T=function(e){Object(r.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={suggestions:[]},e.onSearchChange=function(t){var n=t.toLowerCase(),o=z.filter(function(e){return-1!==e.name.toLowerCase().indexOf(n)}).map(function(e){return l.a.createElement(_,{value:e.name,data:e},l.a.createElement("span",null,e.name," - ",e.type))});e.setState({suggestions:o})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.suggestions;return l.a.createElement(P.a,{className:"gx-card",title:"Customize Suggestions"},l.a.createElement(x,{placeholder:"@someone",style:{width:"100%"},suggestions:e,onSearchChange:this.onSearchChange,onSelect:H}))}}]),n}(l.a.Component),I=n(1383);function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var q=x.Nav,U=[{name:"React",type:"JavaScript",icon:"https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg"},{name:"Angular",type:"JavaScript",icon:"https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png"},{name:"Dva",type:"Javascript",icon:"https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png"},{name:"Flask",type:"Python",icon:"https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png"}],Y=function(e){Object(r.a)(n,e);var t=V(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={suggestions:[]},e.onSearchChange=function(t){var n=t.toLowerCase(),o=U.filter(function(e){return-1!==e.name.toLowerCase().indexOf(n)}).map(function(e){return l.a.createElement(q,{value:e.name,data:e,disabled:e.disabled},l.a.createElement(I.a,{src:e.icon,size:"small",style:{width:14,height:14,marginRight:8,top:2,position:"relative"}}),e.name," - ",e.type)});e.setState({suggestions:o})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.suggestions;return l.a.createElement(P.a,{className:"gx-card",title:"Icon Image"},l.a.createElement(x,{style:{width:"100%"},suggestions:e,onSearchChange:this.onSearchChange}))}}]),n}(l.a.Component);function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var W=x.toContentState,X=function(e){Object(r.a)(n,e);var t=K(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:W("@afc163")},e.handleChange=function(t){e.setState({value:t})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.mention.focus()}},{key:"render",value:function(){var e=this;return l.a.createElement(P.a,{className:"gx-card",title:"Controlled"},l.a.createElement(x,{ref:function(t){return e.mention=t},suggestions:["afc163","benjycui","yiminghe","RaoHai","\u4e2d\u6587","\u306b\u307b\u3093\u3054"],value:this.state.value,onChange:this.handleChange}))}}]),n}(l.a.Component),Z=x.toString,G=function(){return l.a.createElement(P.a,{className:"gx-card",title:"Multiline Mode"},l.a.createElement(x,{style:{width:"100%",height:100},onChange:function(e){console.log(Z(e))},suggestions:["afc163","benjycui","yiminghe","jljsj33","dqaria","RaoHai"],multiLines:!0}))},Q=n(1382),$=n(113);function ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var te=x.toString,ne=x.toContentState;function oe(e){console.log(te(e))}function ae(e){console.log("onSelect",e)}var re=function(e){Object(r.a)(n,e);var t=ee(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getSuggestionContainer=function(){return e.popover.getPopupDomNode()},e.visibleChange=function(t){t&&e.mention&&e.mention.focus()},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=l.a.createElement(x,{ref:function(t){return e.mention=t},style:{width:"100%"},onChange:oe,defaultValue:ne("@afc163"),suggestions:["afc163","benjycui","yiminghe","RaoHai","\u4e2d\u6587","\u306b\u307b\u3093\u3054"],onSelect:ae,getSuggestionContainer:this.getSuggestionContainer});return l.a.createElement(P.a,{className:"gx-card",title:"Suggestion Container"},l.a.createElement(Q.a,{trigger:"click",content:t,title:"Title",ref:function(t){return e.popover=t},onVisibleChange:this.visibleChange},l.a.createElement($.a,{type:"primary"},"Click Me")))}}]),n}(l.a.Component),ce=x.toString,ie=["afc163","benjycui","yiminghe","jljsj33","dqaria","RaoHai"];var ue=function(){function e(e){console.log(ce(e))}return l.a.createElement(P.a,{className:"gx-card",title:"Disabled"},l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(x,{style:{width:"100%"},onChange:e,placeholder:"this is disabled Mention",suggestions:ie,disabled:!0})),l.a.createElement(x,{style:{width:"100%"},onChange:e,placeholder:"this is readOnly Mention",suggestions:ie,readOnly:!0}))};function le(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var se=function(e){Object(r.a)(n,e);var t=le(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(k,null),l.a.createElement(M,null),l.a.createElement(A,null),l.a.createElement(T,null),l.a.createElement(Y,null)),l.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(X,null),l.a.createElement(G,null),l.a.createElement(re,null),l.a.createElement(ue,null)))}}]),n}(u.Component);t.default=se}}]);
//# sourceMappingURL=128.678583d0.chunk.js.map