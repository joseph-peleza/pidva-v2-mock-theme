(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1592:function(e,t,n){},1882:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(194),c=n(106),o=n(1),s=n(700),l=n(41),u=n(96);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(c,r["Component"]);var t,n,a,i=d(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.apply(this,arguments)).renderSteps=function(t){var n=t.getPrefixCls,a=n("steps",e.props.prefixCls),i=n("",e.props.iconPrefix),c={finish:r.createElement(l.a,{type:"check",className:"".concat(a,"-finish-icon")}),error:r.createElement(l.a,{type:"close",className:"".concat(a,"-error-icon")})};return r.createElement(s.default,f({icons:c},e.props,{prefixCls:a,iconPrefix:i}))},e}return t=c,(n=[{key:"render",value:function(){return r.createElement(u.a,null,this.renderSteps)}}])&&m(t.prototype,n),a&&m(t,a),c}();y.Step=s.default.Step,y.defaultProps={current:0},y.propTypes={prefixCls:o.string,iconPrefix:o.string,current:o.number};var v=n(1372),g=y.Step,b=function(){return a.a.createElement(v.a,{className:"gx-card",title:"Basic"},a.a.createElement(y,{current:1},a.a.createElement(g,{title:"Finished",description:"This is a description."}),a.a.createElement(g,{title:"In Progress",description:"This is a description."}),a.a.createElement(g,{title:"Waiting",description:"This is a description."})))},S=n(33),x=n(34),P=n(35),O=n(36),T=n(20),w=n(113),j=n(1386);n(1592);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(T.a)(e);if(t){var a=Object(T.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(O.a)(this,n)}}var k=y.Step,C=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}],R=function(e){Object(P.a)(n,e);var t=N(n);function n(e){var r;return Object(S.a)(this,n),(r=t.call(this,e)).state={current:0},r}return Object(x.a)(n,[{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e})}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"render",value:function(){var e=this,t=this.state.current;return a.a.createElement(v.a,{className:"gx-card",title:"Switch Step"},a.a.createElement(y,{current:t},C.map(function(e){return a.a.createElement(k,{key:e.title,title:e.title})})),a.a.createElement("div",{className:"steps-content"},C[this.state.current].content),a.a.createElement("div",{className:"steps-action"},this.state.current<C.length-1&&a.a.createElement(w.a,{type:"primary",onClick:function(){return e.next()}},"Next"),this.state.current===C.length-1&&a.a.createElement(w.a,{type:"primary",onClick:function(){return j.a.success("Processing complete!")}},"Done"),this.state.current>0&&a.a.createElement(w.a,{style:{marginLeft:8},onClick:function(){return e.prev()}},"Previous")))}}]),n}(r.Component),F=y.Step,W=function(){return a.a.createElement(v.a,{className:"gx-card",title:"Mini Version"},a.a.createElement(y,{size:"small",current:1},a.a.createElement(F,{title:"Finished"}),a.a.createElement(F,{title:"In Progress"}),a.a.createElement(F,{title:"Waiting"})))},D=y.Step,I=function(){return a.a.createElement(v.a,{className:"gx-card",title:"With Icon"},a.a.createElement(y,null,a.a.createElement(D,{status:"finish",title:"Login",icon:a.a.createElement(l.a,{type:"user"})}),a.a.createElement(D,{status:"finish",title:"Verification",icon:a.a.createElement(l.a,{type:"solution"})}),a.a.createElement(D,{status:"process",title:"Pay",icon:a.a.createElement(l.a,{type:"loading"})}),a.a.createElement(D,{status:"wait",title:"Done",icon:a.a.createElement(l.a,{type:"smile-o"})})))},_=y.Step,V=function(){return a.a.createElement(v.a,{className:"gx-card",title:"Vertical"},a.a.createElement(y,{direction:"vertical",current:1},a.a.createElement(_,{title:"Finished",description:"This is a description."}),a.a.createElement(_,{title:"In Progress",description:"This is a description."}),a.a.createElement(_,{title:"Waiting",description:"This is a description."})))},L=y.Step,Y=function(){return a.a.createElement(v.a,{className:"gx-card",title:"Vertical Version"},a.a.createElement(y,{direction:"vertical",size:"small",current:1},a.a.createElement(L,{title:"Finished",description:"This is a description."}),a.a.createElement(L,{title:"In Progress",description:"This is a description."}),a.a.createElement(L,{title:"Waiting",description:"This is a description."})))},z=y.Step,B=function(){return a.a.createElement(v.a,{className:"gx-card",title:"ErrorStatus"},a.a.createElement(y,{current:1,status:"error"},a.a.createElement(z,{title:"Finished",description:"This is a description"}),a.a.createElement(z,{title:"In Process",description:"This is a description"}),a.a.createElement(z,{title:"Waiting",description:"This is a description"})))},J=y.Step,M=function(){return a.a.createElement(v.a,{className:"gx-card",title:"Dot Style"},a.a.createElement(y,{progressDot:!0,current:1},a.a.createElement(J,{title:"Finished",description:"This is a description."}),a.a.createElement(J,{title:"In Progress",description:"This is a description."}),a.a.createElement(J,{title:"Waiting",description:"This is a description."})))},q=n(1382),A=y.Step,G=function(e,t){var n=t.status,r=t.index;return a.a.createElement(q.a,{content:a.a.createElement("span",null,"step ",r," status: ",n)},e)},H=function(){return a.a.createElement(v.a,{className:"gx-card",title:"Customized DotS tyle"},a.a.createElement(y,{current:1,progressDot:G},a.a.createElement(A,{title:"Finished",description:"You can hover on the dot."}),a.a.createElement(A,{title:"In Progress",description:"You can hover on the dot."}),a.a.createElement(A,{title:"Waiting",description:"You can hover on the dot."}),a.a.createElement(A,{title:"Waiting",description:"You can hover on the dot."})))};t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(c.a,{span:24},a.a.createElement(b,null)),a.a.createElement(c.a,{span:24},a.a.createElement(W,null)),a.a.createElement(c.a,{span:24},a.a.createElement(I,null)),a.a.createElement(c.a,{span:24},a.a.createElement(R,null)),a.a.createElement(c.a,{span:24},a.a.createElement(V,null)),a.a.createElement(c.a,{span:24},a.a.createElement(Y,null)),a.a.createElement(c.a,{span:24},a.a.createElement(B,null)),a.a.createElement(c.a,{span:24},a.a.createElement(M,null)),a.a.createElement(c.a,{span:24},a.a.createElement(H,null)))}}}]);
//# sourceMappingURL=56.1bfead5c.chunk.js.map