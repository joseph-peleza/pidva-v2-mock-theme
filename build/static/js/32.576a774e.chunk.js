(this["webpackJsonppeleza-international"]=this["webpackJsonppeleza-international"]||[]).push([[32],{1684:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n(0),i=n.n(r),o=n(6),a=n.n(o),c=n(47);function u(t){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var i=v(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function m(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var g=function(t){return t&&t.x===+t.x&&t.y===+t.y},x=function(t,e){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[[]];return t.forEach((function(t){g(t)?e[e.length-1].push(t):e[e.length-1].length>0&&e.push([])})),g(t[0])&&e[e.length-1].push(t[0]),e[e.length-1].length<=0&&(e=e.slice(0,-1)),e}(t);e&&(n=[n.reduce((function(t,e){return[].concat(m(t),m(e))}),[])]);var r=n.map((function(t){return t.reduce((function(t,e,n){return"".concat(t).concat(0===n?"M":"L").concat(e.x,",").concat(e.y)}),"")})).join("");return 1===n.length?"".concat(r,"Z"):r},O=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(u,t);var e,n,r,o=d(u);function u(){return h(this,u),o.apply(this,arguments)}return e=u,(n=[{key:"render",value:function(){var t=this.props,e=t.points,n=t.className,r=t.baseLinePoints,o=t.connectNulls,u=s(t,["points","className","baseLinePoints","connectNulls"]);if(!e||!e.length)return null;var h=a()("recharts-polygon",n);if(r&&r.length){var f=u.stroke&&"none"!==u.stroke,p=function(t,e,n){var r=x(t,n);return"".concat("Z"===r.slice(-1)?r.slice(0,-1):r,"L").concat(x(e.reverse(),n).slice(1))}(e,r,o);return i.a.createElement("g",{className:h},i.a.createElement("path",l({},Object(c.c)(u,!0),{fill:"Z"===p.slice(-1)?u.fill:"none",stroke:"none",d:p})),f?i.a.createElement("path",l({},Object(c.c)(u,!0),{fill:"none",d:x(e,o)})):null,f?i.a.createElement("path",l({},Object(c.c)(u,!0),{fill:"none",d:x(r,o)})):null)}var d=x(e,o);return i.a.createElement("path",l({},Object(c.c)(u,!0),{fill:"Z"===d.slice(-1)?u.fill:"none",className:h,d:d}))}}])&&f(e.prototype,n),r&&f(e,r),u}(r.PureComponent)},1868:function(t,e,n){var r=n(393),i=n(904),o=n(1869),a=n(476),c=n(381),u=n(1871),l=n(1872),s=n(906),h=l((function(t,e){var n={};if(null==t)return n;var l=!1;e=r(e,(function(e){return e=a(e,t),l||(l=e.length>1),e})),c(t,s(t),n),l&&(n=i(n,7,u));for(var h=e.length;h--;)o(n,e[h]);return n}));t.exports=h},1869:function(t,e,n){var r=n(476),i=n(620),o=n(1870),a=n(330);t.exports=function(t,e){return e=r(e,t),null==(t=o(t,e))||delete t[a(i(e))]}},1870:function(t,e,n){var r=n(482),i=n(898);t.exports=function(t,e){return e.length<2?t:r(t,i(e,0,-1))}},1871:function(t,e,n){var r=n(879);t.exports=function(t){return r(t)?void 0:t}},1872:function(t,e,n){var r=n(1873),i=n(895),o=n(887);t.exports=function(t){return o(i(t,void 0,r),t+"")}},1873:function(t,e,n){var r=n(618);t.exports=function(t){return(null==t?0:t.length)?r(t,1):[]}},2224:function(t,e,n){"use strict";n.d(e,"a",(function(){return V}));var r=n(83),i=n.n(r),o=n(1868),a=n.n(o),c=n(50),u=n.n(c),l=n(237),s=n.n(l),h=n(0),f=n.n(h),p=n(157),d=n(6),y=n.n(d),v=n(350),m=n(71),b=n(264),g=n(61),x=n(139),O=n(367),w=n(1684),j=n(45),E=["#1890FF","#66B5FF","#41D9C7","#2FC25B","#6EDB8F","#9AE65C","#FACC14","#E6965C","#57AD71","#223273","#738AE6","#7564CC","#8543E0","#A877ED","#5C8EE6","#13C2C2","#70E0E0","#5CA3E6","#3436C7","#8082FF","#DD81E6","#F04864","#FA7D92","#D598D9"],A=n(163),S=n(19),k=n(47);function P(t){return P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function R(){return R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},R.apply(this,arguments)}function N(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e){return M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},M(t,e)}function D(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_(t);if(e){var i=_(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return F(this,n)}}function F(t,e){return!e||"object"!==P(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var L="value",z=function t(e){var n,r,i=e.depth,o=e.node,a=e.index,c=e.valueKey,u=o.children,l=i+1,h=u&&u.length?u.map((function(e,n){return t({depth:l,node:e,index:n,valueKey:c})})):null;return r=u&&u.length?h.reduce((function(t,e){return t+e.value}),0):s()(o[c])||o[c]<=0?0:o[c],T(T({},o),{},(B(n={children:h},L,r),B(n,"depth",i),B(n,"index",a),n))},U=function(t,e,n){var r=e*e,i=t.area*t.area,o=t.reduce((function(t,e){return{min:Math.min(t.min,e.area),max:Math.max(t.max,e.area)}}),{min:1/0,max:0}),a=o.min,c=o.max;return i?Math.max(r*c*n/i,i/(r*a*n)):1/0},Z=function(t,e,n,r){return e===n.width?function(t,e,n,r){var i=e?Math.round(t.area/e):0;(r||i>n.height)&&(i=n.height);for(var o,a=n.x,c=0,u=t.length;c<u;c++)(o=t[c]).x=a,o.y=n.y,o.height=i,o.width=Math.min(i?Math.round(o.area/i):0,n.x+n.width-a),a+=o.width;return o.z=!0,o.width+=n.x+n.width-a,T(T({},n),{},{y:n.y+i,height:n.height-i})}(t,e,n,r):function(t,e,n,r){var i=e?Math.round(t.area/e):0;(r||i>n.width)&&(i=n.width);for(var o,a=n.y,c=0,u=t.length;c<u;c++)(o=t[c]).x=n.x,o.y=a,o.width=i,o.height=Math.min(i?Math.round(o.area/i):0,n.y+n.height-a),a+=o.height;return o&&(o.z=!1,o.height+=n.y+n.height-a),T(T({},n),{},{x:n.x+i,width:n.width-i})}(t,e,n,r)},H=function t(e,n){var r=e.children;if(r&&r.length){var i,o,a=function(t){return{x:t.x,y:t.y,width:t.width,height:t.height}}(e),c=[],u=1/0,l=Math.min(a.width,a.height),h=function(t,e){var n=e<0?0:e;return t.map((function(t){var e=t.value*n;return T(T({},t),{},{area:s()(e)||e<=0?0:e})}))}(r,a.width*a.height/e.value),f=h.slice();for(c.area=0;f.length>0;)c.push(i=f[0]),c.area+=i.area,(o=U(c,l,n))<=u?(f.shift(),u=o):(c.area-=c.pop().area,a=Z(c,l,a,!1),l=Math.min(a.width,a.height),c.length=c.area=0,u=1/0);return c.length&&(a=Z(c,l,a,!0),c.length=c.area=0),T(T({},e),{},{children:h.map((function(e){return t(e,n)}))})}return e},J={isTooltipActive:!1,isAnimationFinished:!1,activeNode:null,formatRoot:null,currentRoot:null,nestIndex:[]},V=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(c,t);var e,n,r,o=D(c);function c(){var t;C(this,c);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=o.call.apply(o,[this].concat(n))).state=T({},J),t.handleAnimationEnd=function(){var e=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),u()(e)&&e()},t.handleAnimationStart=function(){var e=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),u()(e)&&e()},t}return e=c,r=[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.prevData||t.type!==e.prevType||t.width!==e.prevWidth||t.height!==e.prevHeight||t.dataKey!==e.prevDataKey||t.aspectRatio!==e.prevAspectRatio){var n=z({depth:0,node:{children:t.data,x:0,y:0,width:t.width,height:t.height},index:0,valueKey:t.dataKey}),r=H(n,t.aspectRatio);return T(T({},J),{},{formatRoot:r,currentRoot:n,nestIndex:[n],prevAspectRatio:t.aspectRatio,prevData:t.data,prevWidth:t.width,prevHeight:t.height,prevDataKey:t.dataKey,prevType:t.type})}return null}},{key:"renderContentItem",value:function(t,e,n,r){if(f.a.isValidElement(t))return f.a.cloneElement(t,e);if(u()(t))return t(e);var i=e.x,o=e.y,c=e.width,l=e.height,s=e.index,h=null;c>10&&l>10&&e.children&&"nest"===n&&(h=f.a.createElement(w.a,{points:[{x:i+2,y:o+l/2},{x:i+6,y:o+l/2+3},{x:i+2,y:o+l/2+6}]}));var p=null,d=Object(A.c)(e.name);c>20&&l>20&&d.width<c&&d.height<l&&(p=f.a.createElement("text",{x:i+8,y:o+l/2+7,fontSize:14},e.name));var y=r||E;return f.a.createElement("g",null,f.a.createElement(b.a,R({fill:e.depth<2?y[s%y.length]:"rgba(255,255,255,0)",stroke:"#fff"},a()(e,"children"))),h,p)}}],(n=[{key:"handleMouseEnter",value:function(t,e){var n=this.props,r=n.onMouseEnter,i=n.children;Object(g.c)(i,O.a.displayName)?this.setState({isTooltipActive:!0,activeNode:t},(function(){r&&r(t,e)})):r&&r(t,e)}},{key:"handleMouseLeave",value:function(t,e){var n=this.props,r=n.onMouseLeave,i=n.children;Object(g.c)(i,O.a.displayName)?this.setState({isTooltipActive:!1,activeNode:null},(function(){r&&r(t,e)})):r&&r(t,e)}},{key:"handleClick",value:function(t){var e=this.props,n=e.onClick;if("nest"===e.type&&t.children){var r=this.props,i=r.width,o=r.height,a=r.dataKey,c=r.aspectRatio,u=z({depth:0,node:T(T({},t),{},{x:0,y:0,width:i,height:o}),index:0,valueKey:a}),l=H(u,c),s=this.state.nestIndex;s.push(t),this.setState({formatRoot:l,currentRoot:u,nestIndex:s})}n&&n(t)}},{key:"handleNestIndex",value:function(t,e){var n=this.state.nestIndex,r=this.props,i=r.width,o=r.height,a=r.dataKey,c=r.aspectRatio,u=z({depth:0,node:T(T({},t),{},{x:0,y:0,width:i,height:o}),index:0,valueKey:a}),l=H(u,c);n=n.slice(0,e+1),this.setState({formatRoot:l,currentRoot:t,nestIndex:n})}},{key:"renderItem",value:function(t,e,n){var r=this,i=this.props,o=i.isAnimationActive,a=i.animationBegin,c=i.animationDuration,u=i.animationEasing,l=i.isUpdateAnimationActive,s=i.type,h=i.animationId,d=i.colorPanel,y=this.state.isAnimationFinished,v=e.width,b=e.height,g=e.x,x=e.y,O=e.depth,w=parseInt("".concat((2*Math.random()-1)*v),10),j={};return(n||"nest"===s)&&(j={onMouseEnter:this.handleMouseEnter.bind(this,e),onMouseLeave:this.handleMouseLeave.bind(this,e),onClick:this.handleClick.bind(this,e)}),o?f.a.createElement(p.a,{begin:a,duration:c,isActive:o,easing:u,key:"treemap-".concat(h),from:{x:g,y:x,width:v,height:b},to:{x:g,y:x,width:v,height:b},onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},(function(n){var i=n.x,h=n.y,v=n.width,b=n.height;return f.a.createElement(p.a,{from:"translate(".concat(w,"px, ").concat(w,"px)"),to:"translate(0, 0)",attributeName:"transform",begin:a,easing:u,isActive:o,duration:c},f.a.createElement(m.a,j,O>2&&!y?null:r.constructor.renderContentItem(t,T(T({},e),{},{isAnimationActive:o,isUpdateAnimationActive:!l,width:v,height:b,x:i,y:h}),s,d)))})):f.a.createElement(m.a,j,this.constructor.renderContentItem(t,T(T({},e),{},{isAnimationActive:!1,isUpdateAnimationActive:!1,width:v,height:b,x:g,y:x}),s,d))}},{key:"renderNode",value:function(t,e,n){var r=this,i=this.props,o=i.content,a=i.type,c=T(T(T({},Object(k.c)(this.props)),e),{},{root:t}),u=!e.children||!e.children.length;return!(this.state.currentRoot.children||[]).filter((function(t){return t.depth===e.depth&&t.name===e.name})).length&&t.depth&&"nest"===a?null:f.a.createElement(m.a,{key:"recharts-treemap-node-".concat(n),className:"recharts-treemap-depth-".concat(e.depth)},this.renderItem(o,c,u),e.children&&e.children.length?e.children.map((function(t,n){return r.renderNode(e,t,n)})):null)}},{key:"renderAllNodes",value:function(){var t=this.state.formatRoot;return t?this.renderNode(t,t,0):null}},{key:"renderTooltip",value:function(){var t=this.props,e=t.children,n=t.nameKey,r=Object(g.c)(e,O.a.displayName);if(!r)return null;var i=this.props,o=i.width,a=i.height,c=this.state,u=c.isTooltipActive,l=c.activeNode,s={x:0,y:0,width:o,height:a},h=l?{x:l.x+l.width/2,y:l.y+l.height/2}:null,p=u&&l?[{payload:l,name:Object(j.w)(l,n,""),value:Object(j.w)(l,L)}]:[];return f.a.cloneElement(r,{viewBox:s,active:u,coordinate:h,label:"",payload:p})}},{key:"renderNestIndex",value:function(){var t=this,e=this.props,n=e.nameKey,r=e.nestIndexContent,o=this.state.nestIndex;return f.a.createElement("div",{className:"recharts-treemap-nest-index-wrapper",style:{marginTop:"8px",textAlign:"center"}},o.map((function(e,o){var a=i()(e,n,"root"),c=null;return f.a.isValidElement(r)&&(c=f.a.cloneElement(r,e,o)),c=u()(r)?r(e,o):a,f.a.createElement("div",{onClick:t.handleNestIndex.bind(t,e,o),key:"nest-index-".concat(Object(S.k)()),className:"recharts-treemap-nest-index-box",style:{cursor:"pointer",display:"inline-block",padding:"0 7px",background:"#000",color:"#fff",marginRight:"3px"}},c)})))}},{key:"render",value:function(){if(!Object(g.i)(this))return null;var t=this.props,e=t.width,n=t.height,r=t.className,i=t.style,o=t.children,a=t.type,c=N(t,["width","height","className","style","children","type"]),u=Object(k.c)(c);return f.a.createElement("div",{className:y()("recharts-wrapper",r),style:T(T({},i),{},{position:"relative",cursor:"default",width:e,height:n})},f.a.createElement(v.a,R({},u,{width:e,height:"nest"===a?n-30:n}),this.renderAllNodes(),Object(g.a)(o)),this.renderTooltip(),"nest"===a&&this.renderNestIndex())}}])&&I(e.prototype,n),r&&I(e,r),c}(h.PureComponent);V.displayName="Treemap",V.defaultProps={aspectRatio:.5*(1+Math.sqrt(5)),dataKey:"value",type:"flat",isAnimationActive:!x.a.isSsr,isUpdateAnimationActive:!x.a.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"linear"}}}]);
//# sourceMappingURL=32.576a774e.chunk.js.map