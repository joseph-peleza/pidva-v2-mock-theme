(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1893:function(t,e,n){"use strict";n.r(e);var o=n(33),i=n(34),a=n(35),c=n(36),r=n(20),l=n(0),s=n.n(l),f=n(194),u=n(106),m=n(264),p=n(41);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var d,g,y={},N=4.5,E=24,b=24,v="topRight";function C(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;switch(t){case"topLeft":e={left:0,top:n,bottom:"auto"};break;case"topRight":e={right:0,top:n,bottom:"auto"};break;case"bottomLeft":e={left:0,top:"auto",bottom:o};break;default:e={right:0,top:"auto",bottom:o}}return e}var k={success:"check-circle-o",info:"info-circle-o",error:"close-circle-o",warning:"exclamation-circle-o"};var x={open:function(t){var e=t.prefixCls||"ant-notification",n="".concat(e,"-notice"),o=void 0===t.duration?N:t.duration,i=null;if(t.icon)i=l.createElement("span",{className:"".concat(n,"-icon")},t.icon);else if(t.type){var a=k[t.type];i=l.createElement(p.a,{className:"".concat(n,"-icon ").concat(n,"-icon-").concat(t.type),type:a})}var c=!t.description&&i?l.createElement("span",{className:"".concat(n,"-message-single-line-auto-margin")}):null;!function(t,e){var n=t.prefixCls,o=t.placement,i=void 0===o?v:o,a=t.getContainer,c=void 0===a?d:a,r=t.top,s=t.bottom,f=t.closeIcon,u=void 0===f?g:f,h="".concat(n,"-").concat(i);if(y[h])e(y[h]);else{var N=l.createElement("span",{className:"".concat(n,"-close-x")},u||l.createElement(p.a,{className:"".concat(n,"-close-icon"),type:"close"}));m.default.newInstance({prefixCls:n,className:"".concat(n,"-").concat(i),style:C(i,r,s),getContainer:c,closeIcon:N},function(t){y[h]=t,e(t)})}}({prefixCls:e,placement:t.placement,top:t.top,bottom:t.bottom,getContainer:t.getContainer,closeIcon:t.closeIcon},function(e){e.notice({content:l.createElement("div",{className:i?"".concat(n,"-with-icon"):""},i,l.createElement("div",{className:"".concat(n,"-message")},c,t.message),l.createElement("div",{className:"".concat(n,"-description")},t.description),t.btn?l.createElement("span",{className:"".concat(n,"-btn")},t.btn):null),duration:o,closable:!0,onClose:t.onClose,onClick:t.onClick,key:t.key,style:t.style||{},className:t.className})})},close:function(t){Object.keys(y).forEach(function(e){return y[e].removeNotice(t)})},config:function(t){var e=t.duration,n=t.placement,o=t.bottom,i=t.top,a=t.getContainer,c=t.closeIcon;void 0!==e&&(N=e),void 0!==n&&(v=n),void 0!==o&&(b=o),void 0!==i&&(E=i),void 0!==a&&(d=a),void 0!==c&&(g=c)},destroy:function(){Object.keys(y).forEach(function(t){y[t].destroy(),delete y[t]})}};["success","info","warning","error"].forEach(function(t){x[t]=function(e){return x.open(h(h({},e),{type:t}))}}),x.warn=x.warning;var w=x,T=n(1371),O=n(113),I=function(){w.open({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification."})},j=function(){return s.a.createElement(T.a,{title:"Basic",className:"gx-card"},s.a.createElement(O.a,{type:"primary",onClick:I},"Open the notification box"))},R=function(){w.open({message:"Notification Title",description:"I will never close automatically. I will be close automatically. I will never close automatically.",duration:0})},L=function(){return s.a.createElement(T.a,{title:"Duration",className:"gx-card"},s.a.createElement(O.a,{type:"primary",onClick:R},"Open the notification box"))},P=function(t){w[t]({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification."})},B=function(){return s.a.createElement(T.a,{title:"With Icon",className:"gx-card"},s.a.createElement(O.a,{onClick:function(){return P("success")}},"Success"),s.a.createElement(O.a,{onClick:function(){return P("info")}},"Info"),s.a.createElement(O.a,{onClick:function(){return P("warning")}},"Warning"),s.a.createElement(O.a,{onClick:function(){return P("error")}},"Error"))},z=function(){console.log("Notification was closed. Either the close button was clicked or duration time elapsed.")},D=function(){var t="open".concat(Date.now()),e=s.a.createElement(O.a,{type:"primary",size:"small",onClick:function(){return w.close(t)}},"Confirm");w.open({message:"Notification Title",description:'A function will be be called after the Notification is closed (automatically after the "duration" time of manually).',btn:e,key:t,onClose:z})},J=function(){return s.a.createElement(T.a,{title:"Custom Close",className:"gx-card"},s.a.createElement(O.a,{type:"primary",onClick:D},"Open the notification box"))},W=function(){w.open({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.",icon:s.a.createElement(p.a,{type:"smile-circle",style:{color:"#108ee9"}})})},A=function(){return s.a.createElement(T.a,{title:"Customize Icon",className:"gx-card"},s.a.createElement(O.a,{type:"primary",onClick:W},"Open the notification box"))},S=n(1372),V=S.a.Option,q=["topLeft","topRight","bottomLeft","bottomRight"],F=function(){w.open({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification."})},G=function(){return s.a.createElement(T.a,{title:"Placement",className:"gx-card"},s.a.createElement(S.a,{className:"gx-mb-2 gx-mr-2 gx-vertical-align-top",defaultValue:"topLeft",style:{width:120},onChange:function(t){w.config({placement:t})}},q.map(function(t){return s.a.createElement(V,{key:t,value:t},t)})),s.a.createElement(O.a,{type:"primary",className:"gx-mb-2",onClick:F},"Open the notification box"))},H=function(){w.open({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.",style:{width:600,marginLeft:-265}})},K=function(){return s.a.createElement(T.a,{title:"Placement",className:"gx-card"},s.a.createElement(O.a,{type:"primary",onClick:H},"Open the notification box"))};function M(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=Object(r.a)(t);if(e){var i=Object(r.a)(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var Q=function(t){Object(a.a)(n,t);var e=M(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return s.a.createElement(f.a,null,s.a.createElement(u.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(j,null),s.a.createElement(L,null),s.a.createElement(B,null),s.a.createElement(J,null)),s.a.createElement(u.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(A,null),s.a.createElement(G,null),s.a.createElement(K,null)))}}]),n}(l.Component);e.default=Q}}]);
//# sourceMappingURL=133.c62626ca.chunk.js.map