(this["webpackJsonppeleza-international"]=this["webpackJsonppeleza-international"]||[]).push([[54],{1588:function(e,t,n){"use strict";var c=n(5),a=n(7),l=n(13),r=n(0),o=n(6),s=n.n(o),i=n(86),u=n(178),j=n(127),b=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},d=function(e){var t,n=e.prefixCls,l=e.className,o=e.checked,i=e.onChange,u=e.onClick,d=b(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,r.useContext(j.b).getPrefixCls)("tag",n),f=s()(h,(t={},Object(c.a)(t,"".concat(h,"-checkable"),!0),Object(c.a)(t,"".concat(h,"-checkable-checked"),o),t),l);return r.createElement("span",Object(a.a)({},d,{className:f,onClick:function(e){null===i||void 0===i||i(!o),null===u||void 0===u||u(e)}}))},h=n(377),f=n(577),O=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},p=new RegExp("^(".concat(h.a.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(h.b.join("|"),")$")),x=function(e,t){var n,o=e.prefixCls,b=e.className,d=e.style,h=e.children,x=e.icon,v=e.color,m=e.onClose,y=e.closeIcon,C=e.closable,k=void 0!==C&&C,w=O(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),N=r.useContext(j.b),T=N.getPrefixCls,E=N.direction,I=r.useState(!0),P=Object(l.a)(I,2),S=P[0],V=P[1];r.useEffect((function(){"visible"in w&&V(w.visible)}),[w.visible]);var R=function(){return!!v&&(p.test(v)||g.test(v))},B=Object(a.a)({backgroundColor:v&&!R()?v:void 0},d),z=R(),D=T("tag",o),M=s()(D,(n={},Object(c.a)(n,"".concat(D,"-").concat(v),z),Object(c.a)(n,"".concat(D,"-has-color"),v&&!z),Object(c.a)(n,"".concat(D,"-hidden"),!S),Object(c.a)(n,"".concat(D,"-rtl"),"rtl"===E),n),b),A=function(e){e.stopPropagation(),null===m||void 0===m||m(e),e.defaultPrevented||"visible"in w||V(!1)},J="onClick"in w||h&&"a"===h.type,$=Object(i.a)(w,["visible"]),F=x||null,H=F?r.createElement(r.Fragment,null,F,r.createElement("span",null,h)):h,L=r.createElement("span",Object(a.a)({},$,{ref:t,className:M,style:B}),H,k?y?r.createElement("span",{className:"".concat(D,"-close-icon"),onClick:A},y):r.createElement(u.a,{className:"".concat(D,"-close-icon"),onClick:A}):null);return J?r.createElement(f.a,null,L):L},v=r.forwardRef(x);v.displayName="Tag",v.CheckableTag=d;t.a=v},1612:function(e,t,n){"use strict";n(103),n(1633)},1633:function(e,t,n){},2196:function(e,t,n){"use strict";n.r(t);n(165);var c=n(85),a=(n(164),n(42)),l=n(10),r=n(15),o=n(27),s=n(28),i=n(0),u=n.n(i),j=(n(870),n(573)),b=(n(1612),n(1588)),d=n(2),h=function(){return Object(d.jsxs)(j.a,{title:"Basic",className:"gx-card",children:[Object(d.jsx)(b.a,{children:"Tag 1"}),Object(d.jsx)(b.a,{children:Object(d.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),Object(d.jsx)(b.a,{closable:!0,onClose:function(e){console.log(e)},children:"Tag 2"}),Object(d.jsx)(b.a,{closable:!0,onClose:function(e){e.preventDefault(),console.log("Clicked! But prevent CRM.")},children:"Prevent Default"})]})},f=function(){return Object(d.jsxs)(j.a,{title:"Color Tag",className:"gx-card",children:[Object(d.jsx)("h4",{style:{marginBottom:16},children:"Presets:"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(b.a,{color:"magenta",children:"magenta"}),Object(d.jsx)(b.a,{color:"red",children:"red"}),Object(d.jsx)(b.a,{color:"volcano",children:"volcano"}),Object(d.jsx)(b.a,{color:"orange",children:"orange"}),Object(d.jsx)(b.a,{color:"gold",children:"gold"}),Object(d.jsx)(b.a,{color:"lime",children:"lime"}),Object(d.jsx)(b.a,{color:"green",children:"green"}),Object(d.jsx)(b.a,{color:"cyan",children:"cyan"}),Object(d.jsx)(b.a,{color:"blue",children:"blue"}),Object(d.jsx)(b.a,{color:"geekblue",children:"geekblue"}),Object(d.jsx)(b.a,{color:"purple",children:"purple"})]}),Object(d.jsx)("h4",{style:{margin:"16px 0"},children:"Custom:"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(b.a,{color:"#f50",children:"#f50"}),Object(d.jsx)(b.a,{color:"#2db7f5",children:"#2db7f5"}),Object(d.jsx)(b.a,{color:"#87d068",children:"#87d068"}),Object(d.jsx)(b.a,{color:"#108ee9",children:"#108ee9"})]})]})},O=(n(471),n(198)),p=(n(873),n(373)),g=n(150),x=n(1573),v=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={tags:["Unremovable","Tag 2","Tag 3"],inputVisible:!1,inputValue:""},e.handleClose=function(t){var n=e.state.tags.filter((function(e){return e!==t}));console.log(n),e.setState({tags:n})},e.showInput=function(){e.setState({inputVisible:!0},(function(){return e.input.focus()}))},e.handleInputChange=function(t){e.setState({inputValue:t.target.value})},e.handleInputConfirm=function(){var t=e.state,n=t.inputValue,c=t.tags;n&&-1===c.indexOf(n)&&(c=[].concat(Object(g.a)(c),[n])),console.log(c),e.setState({tags:c,inputVisible:!1,inputValue:""})},e.saveInputRef=function(t){return e.input=t},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.tags,c=t.inputVisible,a=t.inputValue;return Object(d.jsxs)(j.a,{title:"Dynamic",className:"gx-card",children:[n.map((function(t,n){var c=t.length>20,a=Object(d.jsx)(b.a,{closable:0!==n,afterClose:function(){return e.handleClose(t)},children:c?"".concat(t.slice(0,20),"..."):t},t);return c?Object(d.jsx)(p.a,{title:t,children:a},t):a})),c&&Object(d.jsx)(O.a,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:a,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!c&&Object(d.jsxs)(b.a,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"},children:[Object(d.jsx)(x.a,{type:"plus"})," New Tag"]})]})}}]),n}(u.a.Component),m=v,y=b.a.CheckableTag,C=["Movies","Books","Music","Sports"],k=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={selectedTags:[]},e}return Object(r.a)(n,[{key:"handleChange",value:function(e,t){var n=this.state.selectedTags,c=t?[].concat(Object(g.a)(n),[e]):n.filter((function(t){return t!==e}));console.log("You are interested in: ",c),this.setState({selectedTags:c})}},{key:"render",value:function(){var e=this,t=this.state.selectedTags;return Object(d.jsxs)(j.a,{title:"Hot Tag",className:"gx-card",children:[Object(d.jsx)("h6",{style:{marginRight:8,display:"inline"},children:"Categories:"}),C.map((function(n){return Object(d.jsx)(y,{checked:t.indexOf(n)>-1,onChange:function(t){return e.handleChange(n,t)},children:n},n)}))]})}}]),n}(u.a.Component),w=k,N=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(a.a,{lg:12,md:12,sm:24,xs:24,children:[Object(d.jsx)(h,{}),Object(d.jsx)(f,{})]}),Object(d.jsxs)(a.a,{lg:12,md:12,sm:24,xs:24,children:[Object(d.jsx)(m,{}),Object(d.jsx)(w,{})]})]})}}]),n}(i.Component);t.default=N}}]);
//# sourceMappingURL=54.d0a461a2.chunk.js.map