(this["webpackJsonppeleza-international"]=this["webpackJsonppeleza-international"]||[]).push([[23],{1588:function(e,t,a){"use strict";var s=a(5),i=a(7),n=a(13),c=a(0),l=a(6),r=a.n(l),o=a(86),d=a(178),m=a(127),x=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(a[s[i]]=e[s[i]])}return a},h=function(e){var t,a=e.prefixCls,n=e.className,l=e.checked,o=e.onChange,d=e.onClick,h=x(e,["prefixCls","className","checked","onChange","onClick"]),g=(0,c.useContext(m.b).getPrefixCls)("tag",a),p=r()(g,(t={},Object(s.a)(t,"".concat(g,"-checkable"),!0),Object(s.a)(t,"".concat(g,"-checkable-checked"),l),t),n);return c.createElement("span",Object(i.a)({},h,{className:p,onClick:function(e){null===o||void 0===o||o(!l),null===d||void 0===d||d(e)}}))},g=a(377),p=a(577),j=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(a[s[i]]=e[s[i]])}return a},b=new RegExp("^(".concat(g.a.join("|"),")(-inverse)?$")),u=new RegExp("^(".concat(g.b.join("|"),")$")),O=function(e,t){var a,l=e.prefixCls,x=e.className,h=e.style,g=e.children,O=e.icon,f=e.color,v=e.onClose,N=e.closeIcon,y=e.closable,w=void 0!==y&&y,k=j(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=c.useContext(m.b),S=C.getPrefixCls,T=C.direction,L=c.useState(!0),A=Object(n.a)(L,2),q=A[0],E=A[1];c.useEffect((function(){"visible"in k&&E(k.visible)}),[k.visible]);var D=function(){return!!f&&(b.test(f)||u.test(f))},P=Object(i.a)({backgroundColor:f&&!D()?f:void 0},h),J=D(),z=S("tag",l),W=r()(z,(a={},Object(s.a)(a,"".concat(z,"-").concat(f),J),Object(s.a)(a,"".concat(z,"-has-color"),f&&!J),Object(s.a)(a,"".concat(z,"-hidden"),!q),Object(s.a)(a,"".concat(z,"-rtl"),"rtl"===T),a),x),I=function(e){e.stopPropagation(),null===v||void 0===v||v(e),e.defaultPrevented||"visible"in k||E(!1)},F="onClick"in k||g&&"a"===g.type,M=Object(o.a)(k,["visible"]),$=O||null,B=$?c.createElement(c.Fragment,null,$,c.createElement("span",null,g)):g,K=c.createElement("span",Object(i.a)({},M,{ref:t,className:W,style:P}),B,w?N?c.createElement("span",{className:"".concat(z,"-close-icon"),onClick:I},N):c.createElement(d.a,{className:"".concat(z,"-close-icon"),onClick:I}):null);return F?c.createElement(p.a,null,K):K},f=c.forwardRef(O);f.displayName="Tag",f.CheckableTag=h;t.a=f},1599:function(e,t,a){"use strict";a(103),a(1634)},1611:function(e,t,a){"use strict";var s=a(7),i=a(5),n=a(0),c=a(6),l=a.n(c),r=a(200),o=a(127),d=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(a[s[i]]=e[s[i]])}return a},m=function(e){var t,a,c=e.prefixCls,r=e.className,m=e.color,x=void 0===m?"blue":m,h=e.dot,g=e.pending,p=void 0!==g&&g,j=(e.position,e.label),b=e.children,u=d(e,["prefixCls","className","color","dot","pending","position","label","children"]),O=(0,n.useContext(o.b).getPrefixCls)("timeline",c),f=l()((t={},Object(i.a)(t,"".concat(O,"-item"),!0),Object(i.a)(t,"".concat(O,"-item-pending"),p),t),r),v=l()((a={},Object(i.a)(a,"".concat(O,"-item-head"),!0),Object(i.a)(a,"".concat(O,"-item-head-custom"),!!h),Object(i.a)(a,"".concat(O,"-item-head-").concat(x),!0),a));return n.createElement("li",Object(s.a)({},u,{className:f}),j&&n.createElement("div",{className:"".concat(O,"-item-label")},j),n.createElement("div",{className:"".concat(O,"-item-tail")}),n.createElement("div",{className:v,style:{borderColor:/blue|red|green|gray/.test(x||"")?void 0:x}},h),n.createElement("div",{className:"".concat(O,"-item-content")},b))},x=a(66),h=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(a[s[i]]=e[s[i]])}return a},g=function(e){var t,a=n.useContext(o.b),c=a.getPrefixCls,d=a.direction,g=e.prefixCls,p=e.pending,j=void 0===p?null:p,b=e.pendingDot,u=e.children,O=e.className,f=e.reverse,v=void 0!==f&&f,N=e.mode,y=void 0===N?"":N,w=h(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),k=c("timeline",g),C="boolean"===typeof j?null:j,S=j?n.createElement(m,{pending:!!j,dot:b||n.createElement(r.a,null)},C):null,T=n.Children.toArray(u);T.push(S),v&&T.reverse();var L=function(e,t){return"alternate"===y?"right"===e.props.position?"".concat(k,"-item-right"):"left"===e.props.position?"".concat(k,"-item-left"):"".concat(k,t%2===0?"-item-left":"-item-right"):"left"===y?"".concat(k,"-item-left"):"right"===y||"right"===e.props.position?"".concat(k,"-item-right"):""},A=T.filter((function(e){return!!e})),q=n.Children.count(A),E="".concat(k,"-item-last"),D=n.Children.map(A,(function(e,t){var a=t===q-2?E:"",s=t===q-1?E:"";return Object(x.a)(e,{className:l()([e.props.className,!v&&j?a:s,L(e,t)])})})),P=T.some((function(e){var t;return!!(null===(t=null===e||void 0===e?void 0:e.props)||void 0===t?void 0:t.label)})),J=l()(k,(t={},Object(i.a)(t,"".concat(k,"-pending"),!!j),Object(i.a)(t,"".concat(k,"-reverse"),!!v),Object(i.a)(t,"".concat(k,"-").concat(y),!!y&&!P),Object(i.a)(t,"".concat(k,"-label"),P),Object(i.a)(t,"".concat(k,"-rtl"),"rtl"===d),t),O);return n.createElement("ul",Object(s.a)({},w,{className:J}),D)};g.Item=m;var p=g;t.a=p},1612:function(e,t,a){"use strict";a(103),a(1633)},1630:function(e,t,a){"use strict";a(0);var s=a(2),i=function(e){var t=e.title,a=e.extra,i=e.styleName;return Object(s.jsxs)("h2",{className:"gx-entry-title ".concat(i),children:[t,Object(s.jsx)("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block",children:a})]})};i.defaultProps={styleName:""},t.a=i},1633:function(e,t,a){},1634:function(e,t,a){},1673:function(e,t,a){"use strict";a.d(t,"g",(function(){return i})),a.d(t,"h",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return d})),a.d(t,"f",(function(){return m}));a(0);var s=a(2),i={id:"vUAqPRNWgYdS2DyJNAC1lV5KpJF21",name:"Chelsea Jones @chelsea",image:"https://via.placeholder.com/500x500",address:"Florida, USA",email:"@chelsea"},n={followers:"2k+",following:847,frinds:327,isFollow:!1},c=[{id:1,interest:"Music"},{id:2,interest:"Drawing"},{id:3,interest:"Sports"},{id:4,interest:"Graphic Designing"},{id:5,interest:"Tourism"}],l=[{id:1,image:"https://via.placeholder.com/150x150",name:"Chelsea",status:"online"},{id:2,image:"https://via.placeholder.com/150x150",name:"Kenery Thomson",status:"offline"},{id:3,image:"https://via.placeholder.com/150x150",name:"Amanda",status:"away"},{id:4,image:"https://via.placeholder.com/150x150",name:"Joshua",status:"away"},{id:5,image:"https://via.placeholder.com/150x150",name:"Alex Mulski",status:"away"},{id:6,image:"https://via.placeholder.com/150x150",name:"Stella Johnson",status:"away"}],r=[{id:1,text:"",user:{id:1,name:"Kenery Thomson",image:"https://via.placeholder.com/500x500"},date:"Sun Jul 22 2018 10:02:47 GMT+0530 (India Standard Time)",mediaList:[{image:"https://via.placeholder.com/600x400"},{image:"https://via.placeholder.com/600x400"}],viewCount:350,likeCount:150,isLike:!1,commentCount:0,commentList:[{user:{id:1,name:"Kenery Thomson",image:"https://via.placeholder.com/150x150"},comment:"Wow ! Excellent I particularly like the use of whitespace here Keep it up",date:"Mon Jul 23 2018 10:02:47 GMT+0530 (India Standard Time)",isLike:!0,likeCount:2,commentList:[]}]},{id:2,text:"",user:{id:1,name:"Kenery Thomson",image:"https://via.placeholder.com/150x150"},date:"Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)",mediaList:[{image:"https://via.placeholder.com/600x400"},{image:"https://via.placeholder.com/600x400"},{image:"https://via.placeholder.com/600x400"}],viewCount:350,likeCount:150,isLike:!0,commentCount:0,commentList:[{user:{id:6,name:"Kenery Thomson",image:"https://via.placeholder.com/150x150"},comment:"Wow ! Excellent I particularly like the use of whitespace here Keep it up",date:"Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)",likeCount:3,isLike:!1,commentList:[]}]},{id:3,text:"",user:{id:1,name:"Kenery Thomson",image:"https://via.placeholder.com/500x500"},date:"Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)",mediaList:[{image:"https://via.placeholder.com/600x400"}],viewCount:350,likeCount:150,isLike:!0,commentCount:0,commentList:[{user:{id:6,name:"Kenery Thomson",image:"https://via.placeholder.com/150x150"},comment:"Wow ! Excellent I particularly like the use of whitespace here Keep it up",date:"Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)",likeCount:3,isLike:!1,commentList:[]}]}],o=[{id:1,image:"https://via.placeholder.com/150x150"},{id:2,image:"https://via.placeholder.com/150x150"},{id:3,image:"https://via.placeholder.com/150x150"},{id:4,image:"https://via.placeholder.com/150x150"},{id:5,image:"https://via.placeholder.com/150x150"},{id:6,image:"https://via.placeholder.com/150x150"}],d=[{id:1,image:"https://via.placeholder.com/116x90",title:"Layers"},{id:2,image:"https://via.placeholder.com/116x90",title:"play"},{id:3,image:"https://via.placeholder.com/116x90",title:"Fun & Tourism"},{id:4,image:"https://via.placeholder.com/116x90",title:"Music Lovers"},{id:5,image:"https://via.placeholder.com/116x90",title:"Dancing"},{id:6,image:"https://via.placeholder.com/116x90",title:"Fitness"}],m=[{id:1,day:"Today",tasks:[{id:1,name:"Mila Alba",title:[Object(s.jsx)("span",{className:"gx-link",children:"Mila Alba"},1)," left a 5 star review on ",Object(s.jsx)("span",{className:"gx-link",children:"Albama\u2019s House"},2)],avatar:"https://via.placeholder.com/150x150",imageList:[]},{id:2,name:"Bob Builder",title:["Callback request from ",Object(s.jsx)("span",{className:"gx-link",children:"Bob Builder"},3)," for the property ",Object(s.jsx)("span",{className:"gx-link",children:"Dimitri House"},4)],avatar:"https://via.placeholder.com/150x150",imageList:[]},{id:3,name:"Tom Moody",title:["Congratulations to ",Object(s.jsx)("span",{className:"gx-link",children:"Tom Moody"},5)," for joining 10+ club "],avatar:"https://via.placeholder.com/150x150",imageList:[]},{id:4,name:"Norman Dolphi",title:["Norman Dolphi is looking for a house in New Jersy, USA"],avatar:"",imageList:[]}]},{id:2,day:"Yesterday",tasks:[{id:5,name:"Kily Johns",title:["Agent ",Object(s.jsx)("span",{className:"gx-link",children:"Kily Johns"},6)," has added 7 new photos to the property ",Object(s.jsx)("span",{className:"gx-link",children:"Albama\u2019s House"},7)],avatar:"",imageList:["https://via.placeholder.com/150x150","https://via.placeholder.com/150x150","https://via.placeholder.com/150x150"]},{id:6,name:"Tom Moody",title:["Welcome to a new agent ",Object(s.jsx)("span",{className:"gx-link",children:"Tom Moody in the Company"},8)],avatar:"https://via.placeholder.com/150x150",imageList:[]},{id:7,name:"Oliver Shorter",title:[Object(s.jsx)("span",{className:"gx-link",children:"Oliver Shorter"},9)," is looking for an office space in ",Object(s.jsx)("span",{className:"gx-link",children:"Colorado, USA"},10)],avatar:"https://via.placeholder.com/150x150",imageList:[]}]}]},1676:function(e,t,a){"use strict";var s=a(10),i=a(15),n=a(75),c=a(27),l=a(28),r=(a(274),a(132)),o=(a(1599),a(1611)),d=a(0),m=a.n(d),x=a(1630),h=a(105),g=a(2),p=function(e){var t=e.task;return Object(g.jsxs)(h.a,{children:[Object(g.jsx)("p",{className:"gx-mb-0",children:t.title}),t.imageList.length>0?Object(g.jsx)("ul",{className:"gx-list-inline gx-mb-3 gx-mt-2",children:t.imageList.map((function(e,a){return 2===a?Object(g.jsx)("li",{className:"gx-mb-1",children:Object(g.jsxs)("span",{className:"gx-link gx-img-more",children:[" +",t.imageList.length-2," More"]})},a):a>2?null:Object(g.jsx)("li",{className:"gx-mb-1",children:Object(g.jsx)(r.a,{shape:"square",className:"gx-size-40",src:e})},a)}))}):null]})},j=o.a.Item;function b(e,t){if(""===e.avatar){var a=e.name.split(" ");if(1===e.name.split(" ").length){var s=a[0].charAt(0).toUpperCase();return Object(g.jsx)(r.a,{shape:t,className:"gx-size-40 gx-bg-primary",children:s})}var i=a[0].charAt(0).toUpperCase()+a[1].charAt(0).toUpperCase();return Object(g.jsx)(r.a,{shape:t,className:"gx-size-40 gx-bg-cyan",children:i})}return Object(g.jsx)(r.a,{shape:t,className:"gx-size-40",src:e.avatar})}var u=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state={width:0,height:0,recentList:[],shape:"",limit:3},i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(n.a)(i)),i}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight+"px",width:window.innerWidth+"px",recentList:this.props.recentList,shape:this.props.shape}),window.innerWidth<575&&this.setState({limit:1})}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"onLoadMore",value:function(){this.setState((function(e){return{limit:e.limit+1}}))}},{key:"render",value:function(){var e=this.state,t=e.recentList,a=e.shape,s=e.limit;return Object(g.jsxs)("div",{className:"gx-entry-sec",children:[Object(g.jsx)(x.a,{title:"Recent Activities"}),t.slice(0,s).map((function(e,t){return Object(g.jsxs)("div",{className:"gx-timeline-info",children:[Object(g.jsx)("h4",{className:"gx-timeline-info-day",children:e.day}),Object(g.jsx)(o.a,{children:e.tasks.map((function(e,t){return Object(g.jsx)(j,{mode:"alternate",dot:b(e,a),children:Object(g.jsx)(p,{task:e})},"timeline"+t)}))})]},"activity"+t)})),Object(g.jsx)("span",{className:"gx-link gx-btn-link",onClick:this.onLoadMore.bind(this),children:"Load More"})]})}}]),a}(m.a.Component);t.a=u},2170:function(e,t,a){"use strict";a.r(t);a(165);var s=a(85),i=(a(164),a(42)),n=a(0),c=a.n(n),l=a(1566),r=a(1567),o=a(367),d=a(699),m=a(105),x=a(10),h=a(15),g=a(27),p=a(28),j=a(52),b=a(2),u=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={isHide:!1,children:"",chartProperties:{prize:"",title:"",bgColor:"",styleName:"",desc:"",percent:""}},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(t){return{chartProperties:e.props.chartProperties,children:e.props.children}}))}},{key:"handleToggle",value:function(){this.setState((function(e){return{isHide:!e.isHide}}))}},{key:"render",value:function(){var e=this.state,t=e.chartProperties,a=e.isHide,s=e.children,i=t.prize,n=t.title,c=t.styleName,l=t.desc,r=t.bgColor,o=t.percent;return Object(b.jsx)(j.a,{styleName:"gx-card-full",children:Object(b.jsxs)("div",{className:"gx-fillchart gx-bg-".concat(r,!0===a?" gx-fillchart-nocontent":" gx-overlay-fillchart"),children:[Object(b.jsx)("div",{className:"ant-card-head-title",children:n}),s,Object(b.jsxs)("div",{className:"gx-fillchart-content",children:[Object(b.jsx)("div",{className:"ant-card-head-title gx-mb-3",children:n}),Object(b.jsx)("h2",{className:"gx-mb-2 gx-fs-xxxl gx-font-weight-medium",children:i}),o>0,Object(b.jsxs)("p",{className:"gx-mb-0 gx-fs-sm",children:[Object(b.jsxs)("span",{className:"gx-font-weight-medium gx-fs-md gx-chart-".concat(c),children:[o,o>0?Object(b.jsx)("i",{className:"icon icon-menu-up gx-fs-sm"}):null]}),l]})]}),Object(b.jsx)("div",{className:"gx-fillchart-btn-close",onClick:this.handleToggle.bind(this),children:Object(b.jsx)("i",{className:"icon icon-close"})}),Object(b.jsx)("div",{className:"gx-fillchart-btn",onClick:this.handleToggle.bind(this),children:Object(b.jsx)("i",{className:"icon icon-stats gx-fs-xxxl"})})]})})}}]),a}(c.a.Component),O=u,f=a(195),v=a(1630),N=[{id:1,image:"https://via.placeholder.com/150x150",name:"Alex Johns",rating:"5.0",deals:"27 Deals"},{id:2,image:"https://via.placeholder.com/150x150",name:"Chelsea Johns",rating:"4.5",deals:"21 Deals"},{id:3,image:"https://via.placeholder.com/150x150",name:"Domnic Johns",rating:"5.0",deals:"27 Deals"},{id:4,image:"https://via.placeholder.com/150x150",name:"Ken Ramirez",rating:"5.0",deals:"27 Deals"},{id:5,image:"https://via.placeholder.com/150x150",name:"Zakie Chain",rating:"5.0",deals:"27 Deals"}],y=function(){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)(v.a,{styleName:"gx-flex-row",title:"Popular Agents",extra:Object(b.jsxs)("span",{children:["Go to agents list ",Object(b.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]})}),Object(b.jsx)("ul",{className:"gx-agents-list",children:N.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"gx-profileon gx-pointer",children:[Object(b.jsx)("div",{className:"gx-profileon-thumb",children:Object(b.jsx)("img",{alt:"...",src:e.image,className:"gx-rounded-lg"})}),Object(b.jsxs)("div",{className:"gx-profileon-content",children:[Object(b.jsx)("h5",{className:"gx-mb-1 gx-text-truncate",children:e.name}),Object(b.jsxs)("p",{className:"gx-mb-0 gx-fs-sm gx-text-truncate",children:[Object(b.jsx)("i",{className:"icon icon-star gx-text-orange gx-pr-1"})," ",e.rating," ",Object(b.jsx)("span",{className:"gx-px-sm-1",children:"|"})," ",e.deals]})]})]})},t)}))}),Object(b.jsxs)("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-mb-4 gx-d-block gx-d-sm-none",children:["Go to agents list ",Object(b.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]})]})},w=a(1676),k=a(1673),C=(a(116),a(60)),S=function(){return Object(b.jsx)(j.a,{title:Object(b.jsx)("h2",{className:"h4 gx-text-capitalize gx-mb-0",children:"Your Current Plan"}),extra:Object(b.jsxs)("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-oth-plans-up",children:["Other plans ",Object(b.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]}),children:Object(b.jsxs)("div",{className:"gx-currentplan-row",children:[Object(b.jsxs)("div",{className:"gx-currentplan-col",children:[Object(b.jsxs)("h2",{className:"gx-text-primary gx-fs-xlxl gx-font-weight-medium gx-mb-1",children:["$19",Object(b.jsx)("sub",{className:"gx-fs-md gx-bottom-0",children:"/month"})]}),Object(b.jsxs)("p",{className:"gx-mb-1",children:[Object(b.jsx)("span",{className:"gx-size-8 gx-bg-dark gx-rounded-xs gx-d-inline-block gx-mr-1"})," Max listing items 2K"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"gx-size-8 gx-bg-dark gx-rounded-xs gx-d-inline-block gx-mr-1"})," Max agents - 10"]})]}),Object(b.jsx)("div",{className:"gx-currentplan-col gx-currentplan-right",children:Object(b.jsxs)("div",{className:"gx-currentplan-right-content",children:[Object(b.jsx)("p",{className:"gx-text-red",children:"Expires in 80 days"}),Object(b.jsx)(C.a,{className:"gx-btn gx-btn-orange gx-mb-0 gx-mr-0 gx-text-uppercase",children:"Renew Plan"}),Object(b.jsxs)("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-mts-3 gx-oth-plans-down",children:["Other plans ",Object(b.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]})]})})]})})},T=(a(578),a(375)),L=a(1571),A=a(294),q=a(716),E=[{name:"JAN",closedDeals:200,queries:600},{name:"FEB",closedDeals:500,queries:900},{name:"MAR",closedDeals:700,queries:1200},{name:"APR",closedDeals:800,queries:1300},{name:"MAY",closedDeals:700,queries:1200},{name:"JUN",closedDeals:500,queries:900},{name:"JUL",closedDeals:600,queries:200},{name:"AUG",closedDeals:200,queries:800},{name:"SEP",closedDeals:400,queries:400},{name:"OCT",closedDeals:400,queries:500},{name:"NOV",closedDeals:400,queries:1200},{name:"DEC",closedDeals:200,queries:800}],D=function(){return Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{className:"gx-dealclose-header",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"h4 gx-mb-2",children:"927 Deals Closed"}),Object(b.jsx)("p",{className:"gx-text-grey",children:"This year"})]}),Object(b.jsxs)("div",{className:"gx-dealclose-header-right",children:[Object(b.jsxs)("p",{className:"gx-mb-2",children:[Object(b.jsx)(T.a,{className:"gx-mb-0",status:"warning"}),"Queries"]}),Object(b.jsxs)("p",{className:"gx-ml-2 gx-mb-2",children:[Object(b.jsx)(T.a,{className:"gx-mb-0",status:"processing"}),"Closed Deals"]})]})]}),Object(b.jsx)(l.a,{width:"100%",height:114,children:Object(b.jsxs)(L.a,{data:E,margin:{top:0,right:0,left:0,bottom:0},children:[Object(b.jsx)(o.a,{}),Object(b.jsx)(A.a,{dataKey:"name"}),Object(b.jsx)(q.a,{dataKey:"closedDeals",stackId:"a",fill:"#038FDE",barSize:8}),Object(b.jsx)(q.a,{dataKey:"queries",stackId:"a",fill:"#FE9E15",barSize:8})]})})]})},P=(a(871),a(217)),J=a(278),z=(a(1612),a(1588));var W=function(e){var t=e.data,a=t.image,s=t.title,i=t.subTitle,n=t.name,c=t.date,l=t.isFeatured,r=t.prize,o=t.sqft,d=t.bedrooms,m=t.baths,x=t.area,h=t.more;return Object(b.jsxs)("div",{className:"gx-media gx-featured-item",children:[!0===l?Object(b.jsx)(z.a,{color:"orange",children:Object(b.jsx)("span",{className:"gx-text-uppercase",children:"featured"})}):null,Object(b.jsxs)("div",{className:"gx-featured-thumb",children:[Object(b.jsx)("img",{className:"gx-rounded-lg gx-width-175",src:a,alt:"..."}),Object(b.jsx)(z.a,{className:"gx-rounded-xs gx-bg-orange gx-border-orange gx-text-white",children:"Featured"})]}),Object(b.jsxs)("div",{className:"gx-media-body gx-featured-content",children:[Object(b.jsxs)("div",{className:"gx-featured-content-left",children:[Object(b.jsx)(z.a,{className:"gx-rounded-xs",color:"#06BB8A",children:"FOR SALE"}),Object(b.jsx)("h3",{className:"gx-mb-2",children:s}),Object(b.jsx)("p",{className:"gx-text-grey gx-mb-1",children:i}),Object(b.jsxs)("div",{className:"ant-row-flex",children:[Object(b.jsxs)("p",{className:"gx-mr-3 gx-mb-1",children:[Object(b.jsx)("span",{className:"gx-text-grey",children:"Bedrooms:"})," ",d]}),Object(b.jsxs)("p",{className:"gx-mr-3 gx-mb-1",children:[Object(b.jsx)("span",{className:"gx-text-grey",children:"Baths:"})," ",m]}),Object(b.jsxs)("p",{className:"gx-mr-3 gx-mb-1",children:[Object(b.jsx)("span",{className:"gx-text-grey",children:"Area:"})," ",x]}),Object(b.jsxs)("a",{className:"gx-text-grey gx-text-underline gx-mb-2",href:"#/",children:[" + ",h," more"]})]}),Object(b.jsxs)("div",{className:"ant-row-flex",children:[Object(b.jsxs)("p",{className:"gx-text-grey gx-mb-1",children:[Object(b.jsx)("i",{className:"icon icon-user gx-fs-xs gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),n]}),Object(b.jsxs)("p",{className:"gx-text-grey gx-ml-4 gx-mb-1",children:[Object(b.jsx)("i",{className:"icon icon-datepicker gx-fs-xs gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),c]})]})]}),Object(b.jsxs)("div",{className:"gx-featured-content-right",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"gx-text-primary gx-mb-1 gx-font-weight-medium",children:r}),Object(b.jsx)("p",{className:"gx-text-grey gx-fs-sm",children:o})]}),Object(b.jsxs)("p",{className:"gx-text-primary gx-text-truncate gx-mt-auto gx-mb-0 gx-pointer",children:["Check in detail ",Object(b.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]})]})]})]})},I=[[{id:1,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"Beach side Villah ",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:3,baths:3,area:"1400 m2",more:1},{id:2,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"Luxury family home at beach side",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:2,baths:2,area:"1100 m2",more:2},{id:3,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"CB Jeni Lifestyle Homes",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:4,baths:1,area:"1300 m2",more:4}],[{id:1,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"Luxury family home at beach side",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:3,baths:3,area:"1400 m2",more:1},{id:2,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"CB Jeni Lifestyle Homes",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:2,baths:2,area:"1100 m2",more:2},{id:3,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"Beach side Villah ",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:4,baths:1,area:"1300 m2",more:4}],[{id:1,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"Luxury family home at beach side",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:3,baths:3,area:"1400 m2",more:1},{id:2,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"Beach side Villah ",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:2,baths:2,area:"1100 m2",more:2},{id:3,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"CB Jeni Lifestyle Homes",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:4,baths:1,area:"1300 m2",more:4}],[{id:1,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"Luxury family home at beach side",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:3,baths:3,area:"1400 m2",more:1},{id:2,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"Beach side Villah ",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:2,baths:2,area:"1100 m2",more:2},{id:3,image:"https://via.placeholder.com/1100x750",isFeatured:!1,title:"CB Jeni Lifestyle Homes",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:4,baths:1,area:"1300 m2",more:4}]],F=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={popular:I[0],loader:!1},e.handleChange=function(t){var a=t.target.value;e.setState({popular:I[a],loader:!0}),setTimeout((function(){e.setState({loader:!1})}),1500)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.loader,a=e.popular;return Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{className:"ant-row-flex gx-justify-content-between gx-mb-3 gx-mb-sm-4 gx-dash-search",children:[Object(b.jsx)("h2",{className:"h4 gx-mb-3 gx-mb-sm-1 gx-mr-2",children:"Properties"}),Object(b.jsx)("div",{className:"gx-mx-sm-2",children:Object(b.jsxs)(P.a.Group,{className:"gx-radio-group-link gx-radio-group-link-bg-light",defaultValue:0,onChange:this.handleChange,children:[Object(b.jsx)(P.a.Button,{value:0,className:"gx-mb-2",children:"Popular"}),Object(b.jsx)(P.a.Button,{value:1,className:"gx-mb-2",children:"New Jersy"}),Object(b.jsx)(P.a.Button,{value:2,className:"gx-mb-2",children:"Colorado"}),Object(b.jsx)(P.a.Button,{value:3,className:"gx-mb-2",children:"Albama"})]})}),Object(b.jsx)("span",{className:"gx-ml-2 gx-search-icon",children:Object(b.jsx)("i",{className:"icon icon-search-new gx-pointer gx-text-primary gx-fs-xxl"})})]}),t?Object(b.jsx)(J.a,{className:"gx-loader-400"}):a.map((function(e,t){return Object(b.jsx)(W,{data:e},t)}))]})}}]),a}(c.a.Component),M=F;t.default=function(){return Object(b.jsx)(m.a,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(i.a,{xl:6,lg:12,md:12,sm:12,xs:24,children:Object(b.jsx)(O,{chartProperties:{title:"PROPERTIES",prize:"26,873",icon:"stats",bgColor:"primary",styleName:"up",desc:"This week",percent:"03%"},children:Object(b.jsx)(l.a,{width:"100%",height:75,children:Object(b.jsxs)(r.a,{data:f.g,margin:{top:0,right:0,left:0,bottom:0},children:[Object(b.jsx)(o.a,{}),Object(b.jsx)(d.a,{dataKey:"properties",strokeWidth:0,stackId:"2",stroke:"#092453",fill:"#092453",fillOpacity:1})]})})})}),Object(b.jsx)(i.a,{xl:6,lg:12,md:12,sm:12,xs:24,children:Object(b.jsx)(O,{chartProperties:{title:"CITIES",prize:"3,840",icon:"stats",bgColor:"orange",styleName:"up",desc:"7 New cities this week",percent:""},children:Object(b.jsx)(l.a,{width:"100%",height:75,children:Object(b.jsxs)(r.a,{data:f.a,margin:{top:0,right:0,left:0,bottom:0},children:[Object(b.jsx)(o.a,{}),Object(b.jsx)(d.a,{dataKey:"cities",type:"monotone",strokeWidth:0,stackId:"2",stroke:"#C87000",fill:"#C87000",fillOpacity:1})]})})})}),Object(b.jsx)(i.a,{xl:6,lg:12,md:12,sm:12,xs:24,children:Object(b.jsx)(O,{chartProperties:{title:"ONLINE VISITS",prize:"84,729",icon:"stats",bgColor:"teal",styleName:"down",desc:"Avg. 327 visits daily",percent:""},children:Object(b.jsx)(l.a,{width:"100%",height:75,children:Object(b.jsxs)(r.a,{data:f.l,margin:{top:0,right:0,left:0,bottom:0},children:[Object(b.jsx)(o.a,{}),Object(b.jsx)(d.a,{dataKey:"visit",strokeWidth:0,stackId:"2",stroke:"#158765",fill:"#158765",fillOpacity:1})]})})})}),Object(b.jsx)(i.a,{xl:6,lg:12,md:12,sm:12,xs:24,children:Object(b.jsx)(O,{chartProperties:{title:"ONLINE QUERIES",prize:"87,239",icon:"stats",bgColor:"pink",styleName:"down",desc:"from past month",percent:"39"},children:Object(b.jsx)(l.a,{width:"100%",height:75,children:Object(b.jsxs)(r.a,{data:f.h,margin:{top:0,right:0,left:0,bottom:0},children:[Object(b.jsx)(o.a,{}),Object(b.jsx)(d.a,{dataKey:"queries",strokeWidth:0,stackId:"2",stroke:"#BB1258",fill:"#BB1258",fillOpacity:1})]})})})}),Object(b.jsx)(i.a,{xl:8,lg:24,md:24,sm:24,xs:24,className:"gx-order-lg-2",children:Object(b.jsx)(j.a,{children:Object(b.jsx)(w.a,{recentList:k.f})})}),Object(b.jsxs)(i.a,{xl:16,lg:24,md:24,sm:24,xs:24,className:"gx-order-lg-1",children:[Object(b.jsx)(y,{}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(i.a,{xl:12,lg:12,md:24,sm:24,xs:24,children:Object(b.jsx)(S,{})}),Object(b.jsx)(i.a,{xl:12,lg:12,md:24,sm:24,xs:24,children:Object(b.jsx)(D,{})})]}),Object(b.jsx)(M,{})]})]})})}}}]);
//# sourceMappingURL=23.e51f8452.chunk.js.map