(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1841:function(e,a,t){"use strict";t.r(a);var r=t(33),n=t(34),l=t(35),o=t(36),c=t(20),s=t(0),i=t.n(s),u=t(1388),m=t(1374),p=t(41),f=t(1375),g=t(113),d=t(1381);function E(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r=Object(c.a)(e);if(a){var n=Object(c.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(o.a)(this,t)}}var h=u.a.Item,y=function(e){Object(l.a)(t,e);var a=E(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields(function(e,a){console.log("values",a)})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this,a=this.props.form.getFieldDecorator;return i.a.createElement("div",{className:"gx-login-container"},i.a.createElement("div",{className:"gx-login-content"},i.a.createElement("div",{className:"gx-login-header gx-text-center"},i.a.createElement("h1",{className:"gx-login-title"},"Sign Up")),i.a.createElement(u.a,{onSubmit:this.handleSubmit,className:"gx-login-form gx-form-row0"},i.a.createElement(h,null,a("uaername",{rules:[{required:!0,message:"Please input your username!"}]})(i.a.createElement(m.a,{prefix:i.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),i.a.createElement(h,null,a("email",{rules:[{required:!0,message:"Please input your username!"}]})(i.a.createElement(m.a,{prefix:i.a.createElement(p.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email address"}))),i.a.createElement(h,null,a("password",{rules:[{required:!0,message:"Please input your Password!"}]})(i.a.createElement(m.a,{prefix:i.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),i.a.createElement(h,null,a("confirm-password",{rules:[{required:!0,message:"Please input your Password!"}]})(i.a.createElement(m.a,{prefix:i.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Confirm Password"}))),i.a.createElement(h,null,a("remember",{valuePropName:"checked",initialValue:!0})(i.a.createElement(f.a,null,"Remember me")),i.a.createElement(d.a,{className:"gx-login-form-forgot",to:"/custom-views/user-auth/forgot-password"},"Forgot password")),i.a.createElement(h,{className:"gx-text-center"},i.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Sign Up"))),i.a.createElement("div",{className:"gx-flex-row"},i.a.createElement("span",{className:"gx-mb-2 gx-mr-3"},"or Sign up using: "),i.a.createElement("ul",{className:"gx-social-link"},i.a.createElement("li",null,i.a.createElement(p.a,{type:"google",onClick:function(){e.props.showAuthLoader(),e.props.userGoogleSignIn()}})),i.a.createElement("li",null,i.a.createElement(p.a,{type:"facebook",onClick:function(){e.props.showAuthLoader(),e.props.userFacebookSignIn()}})),i.a.createElement("li",null,i.a.createElement(p.a,{type:"github",onClick:function(){e.props.showAuthLoader(),e.props.userGithubSignIn()}})),i.a.createElement("li",null,i.a.createElement(p.a,{type:"twitter",onClick:function(){e.props.showAuthLoader(),e.props.userTwitterSignIn()}}))))))}}]),t}(s.Component),w=u.a.create()(y);a.default=w}}]);
//# sourceMappingURL=146.59ac9402.chunk.js.map