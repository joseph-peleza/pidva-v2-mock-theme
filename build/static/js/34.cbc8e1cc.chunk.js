(this["webpackJsonppeleza-international"]=this["webpackJsonppeleza-international"]||[]).push([[34],{1602:function(e,a,t){"use strict";t(103),t(1647)},1603:function(e,a,t){"use strict";var n=t(7),c=t(5),r=t(0),s=t(6),l=t.n(s),o=t(880),i=t(590),u=t(378),d=t(127),b=t(112),j=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)a.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(t[n[c]]=e[n[c]])}return t},m=r.forwardRef((function(e,a){var t,s=r.useContext(d.b),m=s.getPrefixCls,f=s.direction,x=r.useContext(b.b),O=e.className,g=e.size,p=e.prefixCls,h=e.bordered,y=void 0===h||h,C=e.readOnly,N=j(e,["className","size","prefixCls","bordered","readOnly"]),v=m("input-number",p),w=r.createElement(i.a,{className:"".concat(v,"-handler-up-inner")}),z=r.createElement(u.a,{className:"".concat(v,"-handler-down-inner")}),V=g||x,k=l()((t={},Object(c.a)(t,"".concat(v,"-lg"),"large"===V),Object(c.a)(t,"".concat(v,"-sm"),"small"===V),Object(c.a)(t,"".concat(v,"-rtl"),"rtl"===f),Object(c.a)(t,"".concat(v,"-readonly"),C),Object(c.a)(t,"".concat(v,"-borderless"),!y),t),O);return r.createElement(o.default,Object(n.a)({ref:a,className:k,upHandler:w,downHandler:z,prefixCls:v,readOnly:C},N))}));a.a=m},1647:function(e,a,t){},1844:function(e,a,t){},2189:function(e,a,t){"use strict";t.r(a);t(165);var n=t(85),c=(t(164),t(42)),r=t(10),s=t(15),l=t(27),o=t(28),i=t(0),u=t.n(i),d=(t(870),t(573)),b=(t(1602),t(1603)),j=t(2),m=function(){return Object(j.jsx)(d.a,{className:"gx-card",title:"Basic",children:Object(j.jsx)(b.a,{min:1,max:10,defaultValue:3,onChange:function(e){console.log("changed",e)}})})},f=(t(1844),function(){function e(e){console.log("changed",e)}return Object(j.jsxs)(d.a,{className:"gx-card",title:"Size",children:[Object(j.jsx)(b.a,{className:"gx-mb-3",size:"large",min:1,max:1e5,defaultValue:3,onChange:e}),Object(j.jsx)(b.a,{className:"gx-mb-3",min:1,max:1e5,defaultValue:3,onChange:e}),Object(j.jsx)(b.a,{className:"gx-mb-3",size:"small",min:1,max:1e5,defaultValue:3,onChange:e})]})}),x=function(){function e(e){console.log("changed",e)}return Object(j.jsxs)(d.a,{className:"gx-card",title:"Formatter",children:[Object(j.jsx)(b.a,{className:"gx-mb-3",defaultValue:1e3,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:e}),Object(j.jsx)(b.a,{className:"gx-mb-3",defaultValue:100,min:0,max:100,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")},onChange:e})]})},O=function(){return Object(j.jsx)(d.a,{className:"gx-card",title:"Decimal",children:Object(j.jsx)(b.a,{min:0,max:10,step:.1,onChange:function(e){console.log("changed",e)}})})},g=(t(116),t(60)),p=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={disabled:!0},e.toggle=function(){e.setState({disabled:!e.state.disabled})},e}return Object(s.a)(t,[{key:"render",value:function(){return Object(j.jsxs)(d.a,{className:"gx-card",title:"Disabled",children:[Object(j.jsx)(b.a,{min:1,max:10,disabled:this.state.disabled,defaultValue:3}),Object(j.jsx)("div",{style:{marginTop:20},children:Object(j.jsx)(g.a,{onClick:this.toggle,type:"primary",children:"Toggle disabled"})})]})}}]),t}(u.a.Component),h=p,y=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(j.jsxs)(n.a,{children:[Object(j.jsxs)(c.a,{lg:12,md:12,sm:24,xs:24,children:[Object(j.jsx)(m,{}),Object(j.jsx)(f,{}),Object(j.jsx)(x,{})]}),Object(j.jsxs)(c.a,{lg:12,md:12,sm:24,xs:24,children:[Object(j.jsx)(O,{}),Object(j.jsx)(h,{})]})]})}}]),t}(i.Component);a.default=y}}]);
//# sourceMappingURL=34.cbc8e1cc.chunk.js.map