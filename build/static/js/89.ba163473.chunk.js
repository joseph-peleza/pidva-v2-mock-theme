(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1395:function(e,t,a){"use strict";var s=a(0),n=a.n(s);t.a=function(e){var t=e.title;e.match;return n.a.createElement("div",{className:"gx-page-heading"},n.a.createElement("h2",{className:"gx-page-title"},t))}},1851:function(e,t,a){"use strict";a.r(t);var s=a(33),n=a(34),l=a(35),r=a(36),c=a(20),m=a(0),o=a.n(m),i=a(1713),u=a.n(i),p=a(194),E=a(106),w=a(1372),d=a(113),f=a(1395),g=a(2);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,s=Object(c.a)(e);if(t){var n=Object(c.a)(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return Object(r.a)(this,a)}}var x=function(e){Object(l.a)(a,e);var t=h(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onConfirm=function(){e.setState({basic:!1,withDes:!1,success:!1,warning:!1,custom:!1,html:!1,prompt:!1,password:!1,style:!1})},e.deleteFile=function(){e.setState({warning:!1})},e.onCancelDelete=function(){e.setState({warning:!1})},e.onCancel=function(){e.setState({custom:!1,prompt:!1})},e.state={basic:!1,withDes:!1,success:!1,warning:!1,custom:!1,html:!1,prompt:!1,password:!1,style:!1},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.basic,s=t.withDes,n=t.success,l=t.warning,r=t.custom,c=t.html,m=t.prompt,i=t.password,h=t.style;return o.a.createElement("div",{className:"gx-main-content"},o.a.createElement(f.a,{title:o.a.createElement(g.a,{id:"extension.sweetAlerts"}),match:this.props.match}),o.a.createElement(p.a,null,o.a.createElement(E.a,{lg:8,md:12,sm:24,xs:24},o.a.createElement(w.a,{className:"gx-text-center"},o.a.createElement(d.a,{className:"gx-mb-0",type:"primary",onClick:function(){e.setState({basic:!0})}},o.a.createElement(g.a,{id:"sweetAlerts.basic"})))),o.a.createElement(E.a,{lg:8,md:12,sm:24,xs:24},o.a.createElement(w.a,{className:"gx-text-center"},o.a.createElement(d.a,{className:"gx-mb-0",type:"primary",onClick:function(){e.setState({withDes:!0})}},o.a.createElement(g.a,{id:"sweetAlerts.description"})))),o.a.createElement(E.a,{lg:8,md:12,sm:24,xs:24},o.a.createElement(w.a,{className:"gx-text-center"},o.a.createElement(d.a,{className:"gx-mb-0",type:"primary",onClick:function(){e.setState({success:!0})}},o.a.createElement(g.a,{id:"sweetAlerts.success"})))),o.a.createElement(E.a,{lg:8,md:12,sm:24,xs:24},o.a.createElement(w.a,{className:"gx-text-center"},o.a.createElement(d.a,{className:"gx-mb-0",type:"primary",onClick:function(){e.setState({warning:!0})}},o.a.createElement(g.a,{id:"sweetAlerts.warning"})))),o.a.createElement(E.a,{lg:8,md:12,sm:24,xs:24},o.a.createElement(w.a,{className:"gx-text-center"},o.a.createElement(d.a,{className:"gx-mb-0",type:"primary",onClick:function(){e.setState({custom:!0})}},o.a.createElement(g.a,{id:"sweetAlerts.custom"})))),o.a.createElement(E.a,{lg:8,md:12,sm:24,xs:24},o.a.createElement(w.a,{className:"gx-text-center"},o.a.createElement(d.a,{className:"gx-mb-0",type:"primary",onClick:function(){e.setState({html:!0})}},o.a.createElement(g.a,{id:"sweetAlerts.htmlTag"})))),o.a.createElement(E.a,{lg:8,md:12,sm:24,xs:24},o.a.createElement(w.a,{className:"gx-text-center"},o.a.createElement(d.a,{className:"gx-mb-0",type:"primary",onClick:function(){e.setState({prompt:!0})}},o.a.createElement(g.a,{id:"sweetAlerts.prompt"})))),o.a.createElement(E.a,{lg:8,md:12,sm:24,xs:24},o.a.createElement(w.a,{className:"gx-text-center"},o.a.createElement(d.a,{className:"gx-mb-0",type:"primary",onClick:function(){e.setState({password:!0})}},o.a.createElement(g.a,{id:"sweetAlerts.passwordPrompt"})))),o.a.createElement(E.a,{lg:8,md:12,sm:24,xs:24},o.a.createElement(w.a,{className:"gx-text-center"},o.a.createElement(d.a,{className:"gx-mb-0",type:"primary",onClick:function(){e.setState({style:!0})}},o.a.createElement(g.a,{id:"sweetAlerts.customStyle"}))))),o.a.createElement(u.a,{show:a,customClass:"gx-sweet-alert-top-space",title:o.a.createElement(g.a,{id:"sweetAlerts.hereIsaMessage"}),onConfirm:this.onConfirm}),o.a.createElement(u.a,{show:s,customClass:"gx-sweet-alert-top-space",title:o.a.createElement(g.a,{id:"sweetAlerts.hereIsaMessage"}),onConfirm:this.onConfirm},o.a.createElement(g.a,{id:"sweetAlerts.itPretty"})),o.a.createElement(u.a,{show:n,success:!0,title:o.a.createElement(g.a,{id:"sweetAlerts.goodJob"}),onConfirm:this.onConfirm},o.a.createElement(g.a,{id:"sweetAlerts.btnClicked"})),o.a.createElement(u.a,{show:l,warning:!0,showCancel:!0,confirmBtnText:o.a.createElement(g.a,{id:"sweetAlerts.yesDeleteIt"}),confirmBtnBsStyle:"danger",cancelBtnBsStyle:"default",title:o.a.createElement(g.a,{id:"sweetAlerts.areYouSure"}),onConfirm:this.deleteFile,onCancel:this.onCancelDelete},o.a.createElement(g.a,{id:"sweetAlerts.youWillNotAble"})),o.a.createElement(u.a,{show:r,custom:!0,showCancel:!0,confirmBtnText:o.a.createElement(g.a,{id:"button.yes"}),cancelBtnText:o.a.createElement(g.a,{id:"button.no"}),confirmBtnBsStyle:"primary",cancelBtnBsStyle:"default",customIcon:"https://via.placeholder.com/500x330",title:o.a.createElement(g.a,{id:"sweetAlerts.doYouLikeThumb"}),onConfirm:this.onConfirm,onCancel:this.onCancel},o.a.createElement(g.a,{id:"sweetAlerts.youWillFind"})),o.a.createElement(u.a,{show:c,customClass:"gx-sweet-alert-top-space",title:o.a.createElement("span",null,"HTML ",o.a.createElement("small",null,"Title"),"!"),onConfirm:this.onConfirm},o.a.createElement("span",null,"A custom ",o.a.createElement("span",{style:{color:"#F8BB86"}},"html")," message.")),o.a.createElement(u.a,{show:m,input:!0,showCancel:!0,cancelBtnBsStyle:"default",title:o.a.createElement(g.a,{id:"sweetAlerts.anInput"}),inputPlaceHolder:o.a.createElement(g.a,{id:"sweetAlerts.anInput"}),onConfirm:this.onConfirm,onCancel:this.onCancel,customClass:"gx-sweet-alert-top-space"},o.a.createElement(g.a,{id:"sweetAlerts.basic"}),o.a.createElement(g.a,{id:"sweetAlerts.writeSomething"})),o.a.createElement(u.a,{show:i,customClass:"gx-sweet-alert-top-space",input:!0,required:!0,inputType:"password",title:o.a.createElement(g.a,{id:"sweetAlerts.youMustEnterPassword"}),validationMsg:"You must enter your password!",onConfirm:this.onConfirm}),o.a.createElement(u.a,{show:h,title:"Yay!",customClass:"gx-custom-sweet-alert gx-sweet-alert-top-space",style:{backgroundColor:"#008000",color:"#ffffff"},onConfirm:this.onConfirm},o.a.createElement(g.a,{id:"sweetAlerts.itsBlue"})))}}]),a}(o.a.Component);t.default=x}}]);
//# sourceMappingURL=89.ba163473.chunk.js.map