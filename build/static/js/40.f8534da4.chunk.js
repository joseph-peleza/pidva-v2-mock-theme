(this["webpackJsonppeleza-international"]=this["webpackJsonppeleza-international"]||[]).push([[40],{1648:function(t,e,r){"use strict";function c(t){return null!==t&&void 0!==t&&t===t.window}function b(t,e){var r;if("undefined"===typeof window)return 0;var b=e?"scrollTop":"scrollLeft",j=0;return c(t)?j=t[e?"pageYOffset":"pageXOffset"]:t instanceof Document?j=t.documentElement[b]:t&&(j=t[b]),t&&!c(t)&&"number"!==typeof j&&(j=null===(r=(t.ownerDocument||t).documentElement)||void 0===r?void 0:r[b]),j}r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return b}))},1664:function(t,e,r){"use strict";r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return n}));var c=r(23),b=r(54);function j(t){var e,r=function(r){return function(){e=null,t.apply(void 0,Object(c.a)(r))}},j=function(){if(null==e){for(var t=arguments.length,c=new Array(t),j=0;j<t;j++)c[j]=arguments[j];e=Object(b.a)(r(c))}};return j.cancel=function(){return b.a.cancel(e)},j}function n(){return function(t,e,r){var c=r.value,b=!1;return{configurable:!0,get:function(){if(b||this===t.prototype||this.hasOwnProperty(e))return c;var r=j(c.bind(this));return b=!0,Object.defineProperty(this,e,{value:r,configurable:!0,writable:!0}),b=!1,r}}}}},1678:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var c=r(54),b=r(1648);function j(t,e,r,c){var b=r-e;return(t/=c/2)<1?b/2*t*t*t+e:b/2*((t-=2)*t*t+2)+e}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.getContainer,n=void 0===r?function(){return window}:r,s=e.callback,i=e.duration,o=void 0===i?450:i,O=n(),a=Object(b.a)(O,!0),x=Date.now(),u=function e(){var r=Date.now()-x,n=j(r>o?o:r,a,t,o);Object(b.b)(O)?O.scrollTo(window.pageXOffset,n):O instanceof HTMLDocument||"HTMLDocument"===O.constructor.name?O.documentElement.scrollTop=n:O.scrollTop=n,r<o?Object(c.a)(e):"function"===typeof s&&s()};Object(c.a)(u)}},1861:function(t,e,r){},2199:function(t,e,r){"use strict";r.r(e);r(165);var c=r(85),b=(r(164),r(42)),j=r(0),n=(r(870),r(573)),s=(r(103),r(1861),r(7)),i=r(5),o=r(13),O=r(80),a=r(90),x=r(62),u=r(6),l=r.n(u),f=r(86),d=r(638),m=r(1664),v=r(127),p=r(1648),g=r(1678),h=r(66),w=function(t){var e=Object(x.a)(!1,{value:t.visible}),r=Object(o.a)(e,2),c=r[0],b=r[1],n=j.createRef(),u=j.useRef(),w=function(){return n.current&&n.current.ownerDocument?n.current.ownerDocument:window},y=Object(m.a)((function(e){var r=t.visibilityHeight,c=Object(p.a)(e.target,!0);b(c>r)}));j.useEffect((function(){return function(){var e=(t.target||w)();u.current=Object(a.a)(e,"scroll",(function(t){y(t)})),y({target:e})}(),function(){u.current&&u.current.remove(),y.cancel()}}),[t.target]);var N=j.useContext(v.b),C=N.getPrefixCls,E=N.direction,k=t.prefixCls,D=t.className,P=void 0===D?"":D,T=C("back-top",k),H=C(),L=l()(T,Object(i.a)({},"".concat(T,"-rtl"),"rtl"===E),P),z=Object(f.a)(t,["prefixCls","className","children","visibilityHeight","target","visible"]);return j.createElement("div",Object(s.a)({},z,{className:L,onClick:function(e){var r=t.onClick,c=t.target,b=t.duration,j=void 0===b?450:b;Object(g.a)(0,{getContainer:c||w,duration:j}),"function"===typeof r&&r(e)},ref:n}),function(e){var r=e.prefixCls,b=e.rootPrefixCls,n=t.children,s=j.createElement("div",{className:"".concat(r,"-content")},j.createElement("div",{className:"".concat(r,"-icon")},j.createElement(d.a,null)));return j.createElement(O.default,{visible:c,motionName:"".concat(b,"-fade")},(function(t){var e=t.className;return Object(h.a)(n||s,(function(t){var r=t.className;return{className:l()(e,r)}}))}))}({prefixCls:T,rootPrefixCls:H}))};w.defaultProps={visibilityHeight:400};var y=j.memo(w),N=r(2),C=function(){return Object(N.jsxs)(n.a,{title:"Basic",className:"gx-card",children:[Object(N.jsx)(y,{}),"Scroll down to see the bottom-right",Object(N.jsx)("strong",{className:"gx-text-grey",children:" gray "}),"button."]})},E=function(){return Object(N.jsxs)(n.a,{id:"components-back-top-demo-custom",title:"Custom",className:"gx-card",children:[Object(N.jsx)(y,{children:Object(N.jsx)("div",{className:"ant-back-top-inner",children:"UP"})}),"Scroll down to see the bottom-right",Object(N.jsx)("strong",{className:"gx-text-primary",children:" blue "}),"button."]})};e.default=function(){return Object(N.jsxs)(c.a,{children:[Object(N.jsx)(b.a,{lg:12,md:12,sm:24,xs:24,children:Object(N.jsx)(C,{})}),Object(N.jsx)(b.a,{lg:12,md:12,sm:24,xs:24,children:Object(N.jsx)(E,{})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{})]})]})}}}]);
//# sourceMappingURL=40.f8534da4.chunk.js.map