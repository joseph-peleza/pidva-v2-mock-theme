(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1579:function(e,t,n){},1917:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(194),i=n(106),o=(n(1579),n(1371)),c=n(99),u=n.n(c),s=n(96),f=n(43);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var l=E(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if("undefined"!==typeof window){window.matchMedia||(window.matchMedia=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}})}var y=n(690).default,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,r["Component"]);var t,n,l,a=v(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).saveSlick=function(e){t.slick=e},t.onWindowResized=function(){t.props.autoplay&&t.slick&&t.slick.innerSlider&&t.slick.innerSlider.autoPlay&&t.slick.innerSlider.autoPlay()},t.renderCarousel=function(e){var n=e.getPrefixCls,l=m({},t.props);"fade"===l.effect&&(l.fade=!0);var a=n("carousel",l.prefixCls),i=t.getDotPosition();return l.vertical="left"===i||"right"===i,l.dotsClass="".concat("slick-dots"," ").concat("slick-dots","-").concat(i||"bottom"),l.vertical&&(a="".concat(a," ").concat(a,"-vertical")),r.createElement("div",{className:a},r.createElement(y,m({ref:t.saveSlick},l)))},t.onWindowResized=u()(t.onWindowResized,500,{leading:!1}),"vertical"in t.props&&Object(f.a)(!t.props.vertical,"Carousel","`vertical` is deprecated, please use `dotPosition` instead."),t}return t=i,(n=[{key:"componentDidMount",value:function(){this.props.autoplay&&window.addEventListener("resize",this.onWindowResized),this.innerSlider=this.slick&&this.slick.innerSlider}},{key:"componentDidUpdate",value:function(e){r.Children.count(this.props.children)!==r.Children.count(e.children)&&this.goTo(this.props.initialSlide||0,!1)}},{key:"componentWillUnmount",value:function(){this.props.autoplay&&(window.removeEventListener("resize",this.onWindowResized),this.onWindowResized.cancel())}},{key:"getDotPosition",value:function(){return this.props.dotPosition?this.props.dotPosition:"vertical"in this.props&&this.props.vertical?"right":"bottom"}},{key:"next",value:function(){this.slick.slickNext()}},{key:"prev",value:function(){this.slick.slickPrev()}},{key:"goTo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.slick.slickGoTo(e,t)}},{key:"render",value:function(){return r.createElement(s.a,null,this.renderCarousel)}}])&&p(t.prototype,n),l&&p(t,l),i}();w.defaultProps={dots:!0,arrows:!1,draggable:!1};var b=function(){return l.a.createElement(o.a,{className:"gx-card",title:"Basic"},l.a.createElement(w,{afterChange:function(e,t,n){console.log(e,t,n)}},l.a.createElement("div",null,l.a.createElement("h3",null,"1")),l.a.createElement("div",null,l.a.createElement("h3",null,"2")),l.a.createElement("div",null,l.a.createElement("h3",null,"3")),l.a.createElement("div",null,l.a.createElement("h3",null,"4"))))},g=function(){return l.a.createElement(o.a,{className:"gx-card",title:"Vertical"},l.a.createElement(w,{vertical:!0,className:"gx-vertical-slide"},l.a.createElement("div",null,l.a.createElement("h3",null,"1")),l.a.createElement("div",null,l.a.createElement("h3",null,"2")),l.a.createElement("div",null,l.a.createElement("h3",null,"3")),l.a.createElement("div",null,l.a.createElement("h3",null,"4"))))},k=function(){return l.a.createElement(o.a,{className:"gx-card",title:"Fade In"},l.a.createElement(w,{effect:"fade"},l.a.createElement("div",null,l.a.createElement("h3",null,"1")),l.a.createElement("div",null,l.a.createElement("h3",null,"2")),l.a.createElement("div",null,l.a.createElement("h3",null,"3")),l.a.createElement("div",null,l.a.createElement("h3",null,"4"))))},P=function(){return l.a.createElement(o.a,{className:"gx-card",title:"Scroll Automatically"},l.a.createElement(w,{autoplay:!0},l.a.createElement("div",null,l.a.createElement("h3",null,"1")),l.a.createElement("div",null,l.a.createElement("h3",null,"2")),l.a.createElement("div",null,l.a.createElement("h3",null,"3")),l.a.createElement("div",null,l.a.createElement("h3",null,"4"))))};t.default=function(){return l.a.createElement(a.a,null,l.a.createElement(i.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(b,null),l.a.createElement(g,null)),l.a.createElement(i.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(k,null),l.a.createElement(P,null)))}}}]);
//# sourceMappingURL=48.2bc3b2fe.chunk.js.map