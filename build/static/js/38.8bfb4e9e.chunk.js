(this["webpackJsonppeleza-international"]=this["webpackJsonppeleza-international"]||[]).push([[38],{1840:function(e,a,t){},1841:function(e,a,t){},1843:function(e,a,t){},2135:function(e,a,t){"use strict";t.r(a);t(165);var r=t(85),c=(t(164),t(42)),s=t(0),l=t.n(s),n=(t(870),t(573)),i=(t(116),t(60)),o=(t(471),t(198)),j=t(10),b=t(15),d=t(27),u=t(28),h=t(1574),m=t(1573),O=(t(370),t(2)),p=h.a.Item;var x=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields((function(e,a){e||console.log("Received values of form: ",a)}))},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,a=this.props.form,t=a.getFieldDecorator,r=a.getFieldsError,c=a.getFieldError,s=a.isFieldTouched,l=s("userName")&&c("userName"),j=s("password")&&c("password");return Object(O.jsx)(n.a,{className:"gx-card",title:"Basic",children:Object(O.jsxs)(h.a,{layout:"inline",onSubmit:this.handleSubmit,children:[Object(O.jsx)(p,{validateStatus:l?"error":"",help:l||"",children:t("userName",{rules:[{required:!0,message:"Please input your username!"}]})(Object(O.jsx)(o.a,{prefix:Object(O.jsx)(m.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))}),Object(O.jsx)(p,{validateStatus:j?"error":"",help:j||"",children:t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(Object(O.jsx)(o.a,{prefix:Object(O.jsx)(m.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))}),Object(O.jsx)(p,{children:Object(O.jsx)(i.a,{className:"gx-mb-0",type:"primary",htmlType:"submit",disabled:(e=r(),Object.keys(e).some((function(a){return e[a]}))),children:"Log in"})})]})})}}]),t}(s.Component),g=h.a.create()(x),f=(t(247),t(113)),v=(t(574),t(371)),y=t(59),k=t(58),w=(t(1840),t(278)),C=h.a.Item,S=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(j.a)(this,t),(e=a.call(this)).handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields((function(a,t){console.log("values",t),a||(e.props.showAuthLoader(),e.props.userSignIn(t))}))},e.state={email:"demo@example.com",password:"demo#123"},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.props,t=a.showMessage,r=a.loader,c=a.alertMessage;return Object(O.jsxs)(n.a,{className:"gx-card",title:"Horizontal Login Form",children:[Object(O.jsxs)(h.a,{onSubmit:this.handleSubmit,className:"gx-login-form gx-form-row0",children:[Object(O.jsx)(C,{children:e("email",{rules:[{required:!0,message:"Please input your email!"}]})(Object(O.jsx)(o.a,{prefix:Object(O.jsx)(m.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))}),Object(O.jsx)(C,{children:e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(Object(O.jsx)(o.a,{prefix:Object(O.jsx)(m.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))}),Object(O.jsxs)(C,{children:[e("remember",{valuePropName:"checked",initialValue:!0})(Object(O.jsx)(v.a,{children:"Remember me"})),Object(O.jsx)("span",{className:"gx-link login-form-forgot",children:"Forgot password"}),Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"}),"Or ",Object(O.jsx)("span",{className:"gx-link",children:"register now!"})]})]}),r&&Object(O.jsx)("div",{className:"gx-loader-view",children:Object(O.jsx)(w.a,{})}),t&&f.b.error(c)]})}}]),t}(s.Component),F=h.a.create()(S),N=Object(y.c)((function(e){var a=e.auth;return{loader:a.loader,alertMessage:a.alertMessage,showMessage:a.showMessage,authUser:a.authUser}}),{userSignIn:k.k,hideMessage:k.a,showAuthLoader:k.c,userFacebookSignIn:k.e,userGoogleSignIn:k.i,userGithubSignIn:k.g,userTwitterSignIn:k.q})(F),P=(t(1600),t(1601)),D=(t(873),t(373)),Y=t(35),M=(t(1635),t(1636)),R=(t(369),t(155)),T=h.a.Item,q=R.a.Option,I=M.a.Option,V=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],z=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={confirmDirty:!1,autoCompleteResult:[]},e.handleSubmit=function(a){a.preventDefault(),e.props.form.validateFieldsAndScroll((function(e,a){e||console.log("Received values of form: ",a)}))},e.handleConfirmBlur=function(a){var t=a.target.value;e.setState({confirmDirty:e.state.confirmDirty||!!t})},e.compareToFirstPassword=function(a,t,r){var c=e.props.form;t&&t!==c.getFieldValue("password")?r("Two passwords that you enter is inconsistent!"):r()},e.validateToNextPassword=function(a,t,r){var c=e.props.form;t&&e.state.confirmDirty&&c.validateFields(["confirm"],{force:!0}),r()},e.handleWebsiteChange=function(a){var t;t=a?[".com",".org",".net"].map((function(e){return"".concat(a).concat(e)})):[],e.setState({autoCompleteResult:t})},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.state.autoCompleteResult,t={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},s={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},l=e("prefix",{initialValue:"86"})(Object(O.jsxs)(R.a,{style:{width:70},children:[Object(O.jsx)(q,{value:"86",children:"+86"}),Object(O.jsx)(q,{value:"87",children:"+87"})]})),j=a.map((function(e){return Object(O.jsx)(I,{children:e},e)}));return Object(O.jsx)(n.a,{className:"gx-card",title:"Registration Form",children:Object(O.jsxs)(h.a,{onSubmit:this.handleSubmit,children:[Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},t),{},{label:"E-mail",children:e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(Object(O.jsx)(o.a,{id:"email1"}))})),Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},t),{},{label:"Password",children:e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(Object(O.jsx)(o.a,{type:"password"}))})),Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},t),{},{label:"Confirm Password",children:e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(Object(O.jsx)(o.a,{type:"password",onBlur:this.handleConfirmBlur}))})),Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},t),{},{label:Object(O.jsxs)("span",{children:["Nickname\xa0",Object(O.jsx)(D.a,{title:"What do you want others to call you?",children:Object(O.jsx)(m.a,{type:"question-circle-o"})})]}),children:e("nickname",{rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]})(Object(O.jsx)(o.a,{}))})),Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},t),{},{label:"Habitual Residence",children:e("residence",{initialValue:["zhejiang","hangzhou","xihu"],rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}]})(Object(O.jsx)(P.a,{options:V}))})),Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},t),{},{label:"Phone Number",children:e("phone",{rules:[{required:!0,message:"Please input your phone number!"}]})(Object(O.jsx)(o.a,{addonBefore:l,style:{width:"100%"}}))})),Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},t),{},{label:"Website",children:e("website",{rules:[{required:!0,message:"Please input website!"}]})(Object(O.jsx)(M.a,{dataSource:j,onChange:this.handleWebsiteChange,placeholder:"website",children:Object(O.jsx)(o.a,{})}))})),Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},t),{},{label:"Captcha",extra:"We must make sure that your are a human.",children:Object(O.jsxs)(r.a,{children:[Object(O.jsx)(c.a,{span:24,sm:12,children:e("captcha",{rules:[{required:!0,message:"Please input the captcha you got!"}]})(Object(O.jsx)(o.a,{}))}),Object(O.jsx)(c.a,{span:24,sm:12,children:Object(O.jsx)(i.a,{children:"Get captcha"})})]})})),Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},s),{},{children:e("agreement",{valuePropName:"checked"})(Object(O.jsxs)(v.a,{children:["I have read the ",Object(O.jsx)("span",{className:"gx-link",children:"agreement"})]}))})),Object(O.jsx)(T,Object(Y.a)(Object(Y.a)({},s),{},{children:Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",children:"Register"})}))]})})}}]),t}(s.Component),A=h.a.create()(z),H=h.a.Item,L=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={expand:!1},e.handleSearch=function(a){a.preventDefault(),e.props.form.validateFields((function(e,a){console.log("Received values of form: ",a)}))},e.handleReset=function(){e.props.form.resetFields()},e.toggle=function(){var a=e.state.expand;e.setState({expand:!a})},e}return Object(b.a)(t,[{key:"getFields",value:function(){for(var e=this.state.expand?10:6,a=this.props.form.getFieldDecorator,t=[],r=0;r<10;r++)t.push(Object(O.jsx)(c.a,{lg:8,md:8,sm:12,xs:24,style:{display:r<e?"block":"none"},children:Object(O.jsx)("div",{className:"gx-form-row0",children:Object(O.jsx)(H,{label:"Field ".concat(r),children:a("field-".concat(r))(Object(O.jsx)(o.a,{placeholder:"placeholder"}))})})},r));return t}},{key:"render",value:function(){return Object(O.jsx)(n.a,{className:"gx-card",title:"Advanced Search",children:Object(O.jsx)(h.a,{className:"ant-advanced-search-form",onSubmit:this.handleSearch,children:Object(O.jsxs)(r.a,{children:[this.getFields(),Object(O.jsxs)(c.a,{span:24,className:"gx-text-right",children:[Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",children:"Search"}),Object(O.jsx)(i.a,{style:{marginLeft:8},onClick:this.handleReset,children:"Clear"}),Object(O.jsxs)("span",{className:"gx-link gx-btn-link gx-ml-2",onClick:this.toggle,children:["Collapse ",Object(O.jsx)(m.a,{type:this.state.expand?"up":"down"})]})]})]})})})}}]),t}(s.Component),B=h.a.create()(L),W=(t(1841),h.a.Item),E=0,G=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).remove=function(a){var t=e.props.form,r=t.getFieldValue("keys");1!==r.length&&t.setFieldsValue({keys:r.filter((function(e){return e!==a}))})},e.add=function(){var a=e.props.form,t=a.getFieldValue("keys").concat(E);E++,a.setFieldsValue({keys:t})},e.handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields((function(e,a){e||console.log("Received values of form: ",a)}))},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this,a=this.props.form,t=a.getFieldDecorator,r=a.getFieldValue,c={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},l={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}};t("keys",{initialValue:[]});var j=r("keys"),b=j.map((function(a,r){return Object(s.createElement)(W,Object(Y.a)(Object(Y.a)({},0===r?c:l),{},{label:0===r?"Passengers":"",required:!1,key:a}),t("names[".concat(a,"]"),{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input passenger's name or delete this field."}]})(Object(O.jsx)(o.a,{placeholder:"passenger name",style:{width:"60%",marginRight:8}})),j.length>1?Object(O.jsx)(m.a,{className:"dynamic-delete-button",type:"minus-circle-o",disabled:1===j.length,onClick:function(){return e.remove(a)}}):null)}));return Object(O.jsx)(n.a,{className:"gx-card",title:"Dynamic Form Item",children:Object(O.jsxs)(h.a,{onSubmit:this.handleSubmit,children:[b,Object(O.jsx)(W,Object(Y.a)(Object(Y.a)({},l),{},{children:Object(O.jsxs)(i.a,{type:"dashed",onClick:this.add,style:{width:"60%"},children:[Object(O.jsx)(m.a,{type:"plus"})," Add field"]})})),Object(O.jsx)(W,Object(Y.a)(Object(Y.a)({},l),{},{children:Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]})})}}]),t}(s.Component),U=h.a.create()(G),J=(t(1625),t(1626)),Z=(t(1591),t(1587)),K=h.a.Item,Q=Z.a.MonthPicker,X=Z.a.RangePicker,$=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields((function(e,a){if(!e){var t=a["range-picker"],r=a["range-time-picker"],c=Object(Y.a)(Object(Y.a)({},a),{},{"date-picker":a["date-picker"].format("YYYY-MM-DD"),"date-time-picker":a["date-time-picker"].format("YYYY-MM-DD HH:mm:ss"),"month-picker":a["month-picker"].format("YYYY-MM"),"range-picker":[t[0].format("YYYY-MM-DD"),t[1].format("YYYY-MM-DD")],"range-time-picker":[r[0].format("YYYY-MM-DD HH:mm:ss"),r[1].format("YYYY-MM-DD HH:mm:ss")],"time-picker":a["time-picker"].format("HH:mm:ss")});console.log("Received values of form: ",c)}}))},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},t={rules:[{type:"object",required:!0,message:"Please select time!"}]},r={rules:[{type:"array",required:!0,message:"Please select time!"}]};return Object(O.jsx)(n.a,{className:"gx-card",title:"Time Related Controls",children:Object(O.jsxs)(h.a,{onSubmit:this.handleSubmit,children:[Object(O.jsx)(K,Object(Y.a)(Object(Y.a)({},a),{},{label:"DatePicker",children:e("date-picker",t)(Object(O.jsx)(Z.a,{className:"gx-mb-3 gx-w-100"}))})),Object(O.jsx)(K,Object(Y.a)(Object(Y.a)({},a),{},{label:"DatePicker[showTime]",children:e("date-time-picker",t)(Object(O.jsx)(Z.a,{className:"gx-mb-3 gx-w-100",showTime:!0,format:"YYYY-MM-DD HH:mm:ss"}))})),Object(O.jsx)(K,Object(Y.a)(Object(Y.a)({},a),{},{label:"MonthPicker",children:e("month-picker",t)(Object(O.jsx)(Q,{className:"gx-mb-3 gx-w-100"}))})),Object(O.jsx)(K,Object(Y.a)(Object(Y.a)({},a),{},{label:"RangePicker",children:e("range-picker",r)(Object(O.jsx)(X,{className:"gx-mb-3 gx-w-100"}))})),Object(O.jsx)(K,Object(Y.a)(Object(Y.a)({},a),{},{label:"RangePicker[showTime]",children:e("range-time-picker",r)(Object(O.jsx)(X,{className:"gx-mb-3 gx-w-100",showTime:!0,format:"YYYY-MM-DD HH:mm:ss"}))})),Object(O.jsx)(K,Object(Y.a)(Object(Y.a)({},a),{},{label:"TimePicker",children:e("time-picker",t)(Object(O.jsx)(J.a,{className:"gx-mb-3 gx-w-100"}))})),Object(O.jsx)(K,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}},children:Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}}]),t}(s.Component),_=h.a.create()($),ee=h.a.Item,ae=R.a.Option,te=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var r;Object(j.a)(this,t),(r=a.call(this,e)).handleNumberChange=function(e){var a=parseInt(e.target.value||0,10);isNaN(a)||("value"in r.props||r.setState({number:a}),r.triggerChange({number:a}))},r.handleCurrencyChange=function(e){"value"in r.props||r.setState({currency:e}),r.triggerChange({currency:e})},r.triggerChange=function(e){var a=r.props.onChange;a&&a(Object.assign({},r.state,e))};var c=e.value||{};return r.state={number:c.number||0,currency:c.currency||"rmb"},r}return Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e){if("value"in e){var a=e.value;this.setState(a)}}},{key:"render",value:function(){var e=this.props.size,a=this.state;return Object(O.jsxs)("span",{children:[Object(O.jsx)(o.a,{type:"text",size:e,value:a.number,onChange:this.handleNumberChange,style:{width:"63%",marginRight:"5%"}}),Object(O.jsxs)(R.a,{value:a.currency,size:e,style:{width:"32%"},onChange:this.handleCurrencyChange,children:[Object(O.jsx)(ae,{value:"rmb",children:"RMB"}),Object(O.jsx)(ae,{value:"dollar",children:"Dollar"})]})]})}}]),t}(l.a.Component),re=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields((function(e,a){e||console.log("Received values of form: ",a)}))},e.checkPrice=function(e,a,t){a.number>0?t():t("Price must greater than zero!")},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return Object(O.jsx)(n.a,{className:"gx-card",title:"Customized Form Controls",children:Object(O.jsxs)(h.a,{layout:"inline",onSubmit:this.handleSubmit,children:[Object(O.jsx)(ee,{label:"Price",children:e("price",{initialValue:{number:0,currency:"rmb"},rules:[{validator:this.checkPrice}]})(Object(O.jsx)(te,{}))}),Object(O.jsx)(ee,{children:Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}}]),t}(l.a.Component),ce=h.a.create()(re),se=h.a.Item,le=h.a.create({onFieldsChange:function(e,a){e.onChange(a)},mapPropsToFields:function(e){return{username:h.a.createFormField(Object(Y.a)(Object(Y.a)({},e.username),{},{value:e.username.value}))}},onValuesChange:function(e,a){console.log(a)}})((function(e){var a=e.form.getFieldDecorator;return Object(O.jsx)(h.a,{layout:"inline",children:Object(O.jsx)(se,{label:"Username",children:a("username",{rules:[{required:!0,message:"Username is required!"}]})(Object(O.jsx)(o.a,{}))})})})),ne=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={fields:{username:{value:"benjycui"}}},e.handleFormChange=function(a){e.setState({fields:Object(Y.a)(Object(Y.a)({},e.state.fields),a)})},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.state.fields;return Object(O.jsxs)(n.a,{className:"gx-card",title:"Store Form Data",children:[Object(O.jsx)(le,Object(Y.a)(Object(Y.a)({},e),{},{onChange:this.handleFormChange})),Object(O.jsx)("pre",{className:"language-bash",children:JSON.stringify(e,null,2)})]})}}]),t}(s.Component),ie=ne,oe=(t(1602),t(1603)),je=h.a.Item,be=R.a.Option,de={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:18},md:{span:16},lg:{span:12}}},ue=function(){return Object(O.jsx)(n.a,{className:"gx-card",title:"Customized Validation",children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Fail",validateStatus:"error",help:"Should be combination of numbers & alphabets",children:Object(O.jsx)(o.a,{placeholder:"unavailable choice",id:"error"})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Warning",validateStatus:"warning",children:Object(O.jsx)(o.a,{placeholder:"Warning",id:"warning-1"})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated...",children:Object(O.jsx)(o.a,{placeholder:"I'm the content is being validated",id:"validating"})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Success",hasFeedback:!0,validateStatus:"success",children:Object(O.jsx)(o.a,{placeholder:"I'm the content",id:"success"})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Warning",hasFeedback:!0,validateStatus:"warning",children:Object(O.jsx)(o.a,{placeholder:"Warning",id:"warning"})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Fail",hasFeedback:!0,validateStatus:"error",help:"Should be combination of numbers & alphabets",children:Object(O.jsx)(o.a,{placeholder:"unavailable choice",id:"error-1"})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Success",hasFeedback:!0,validateStatus:"success",children:Object(O.jsx)(Z.a,{style:{width:"100%"}})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Warning",hasFeedback:!0,validateStatus:"warning",children:Object(O.jsx)(J.a,{style:{width:"100%"}})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Error",hasFeedback:!0,validateStatus:"error",children:Object(O.jsxs)(R.a,{defaultValue:"1",children:[Object(O.jsx)(be,{value:"1",children:"Option 1"}),Object(O.jsx)(be,{value:"2",children:"Option 2"}),Object(O.jsx)(be,{value:"3",children:"Option 3"})]})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated...",children:Object(O.jsx)(P.a,{defaultValue:["1"],options:[]})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({label:"inline"},de),{},{children:Object(O.jsxs)("div",{className:"ant-row gx-form-row0",children:[Object(O.jsx)(c.a,{xs:24,sm:11,children:Object(O.jsx)(je,{validateStatus:"error",help:"Please select the correct date",children:Object(O.jsx)(Z.a,{})})}),Object(O.jsx)(c.a,{xs:24,sm:2,children:Object(O.jsx)("span",{style:{display:"inline-block",width:"100%",textAlign:"center"},children:"-"})}),Object(O.jsx)(c.a,{xs:24,sm:11,children:Object(O.jsx)(je,{children:Object(O.jsx)(Z.a,{})})})]})})),Object(O.jsx)(je,Object(Y.a)(Object(Y.a)({},de),{},{label:"Success",hasFeedback:!0,validateStatus:"success",children:Object(O.jsx)(oe.a,{style:{width:"100%"}})}))]})})},he=h.a.Item,me=R.a.Option,Oe=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields((function(e,a){e||console.log("Received values of form: ",a)}))},e.handleSelectChange=function(a){console.log(a),e.props.form.setFieldsValue({note:"Hi, ".concat("male"===a?"man":"lady","!")})},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return Object(O.jsx)(n.a,{className:"gx-card",title:"Coordinated Controls",children:Object(O.jsxs)(h.a,{onSubmit:this.handleSubmit,children:[Object(O.jsx)(he,{label:"Note",labelCol:{xs:24,sm:5},wrapperCol:{xs:24,sm:12},children:e("note",{rules:[{required:!0,message:"Please input your note!"}]})(Object(O.jsx)(o.a,{}))}),Object(O.jsx)(he,{label:"Gender",labelCol:{xs:24,sm:5},wrapperCol:{xs:24,sm:12},children:e("gender",{rules:[{required:!0,message:"Please select your gender!"}]})(Object(O.jsxs)(R.a,{placeholder:"Select a option and change input text above",onChange:this.handleSelectChange,children:[Object(O.jsx)(me,{value:"male",children:"male"}),Object(O.jsx)(me,{value:"female",children:"female"})]}))}),Object(O.jsx)(he,{wrapperCol:{xs:24,sm:{span:12,offset:5}},children:Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}}]),t}(s.Component),pe=h.a.create()(Oe),xe=(t(871),t(217)),ge=h.a.Item,fe=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(j.a)(this,t),(e=a.call(this)).handleFormLayoutChange=function(a){e.setState({formLayout:a.target.value})},e.state={formLayout:"horizontal"},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.state.formLayout,a="horizontal"===e?{labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:14}}:null,t="horizontal"===e?{wrapperCol:{xs:24,sm:{span:14,offset:6}}}:null;return Object(O.jsx)(n.a,{className:"gx-card",title:"Form Layout",children:Object(O.jsxs)(h.a,{layout:e,children:[Object(O.jsx)(ge,Object(Y.a)(Object(Y.a)({label:"Form Layout"},a),{},{children:Object(O.jsxs)(xe.a.Group,{defaultValue:"horizontal",onChange:this.handleFormLayoutChange,children:[Object(O.jsx)(xe.a.Button,{value:"horizontal",children:"Horizontal"}),Object(O.jsx)(xe.a.Button,{value:"vertical",children:"Vertical"}),Object(O.jsx)(xe.a.Button,{value:"inline",children:"Inline"})]})})),Object(O.jsx)(ge,Object(Y.a)(Object(Y.a)({label:"Field A"},a),{},{children:Object(O.jsx)(o.a,{placeholder:"input placeholder"})})),Object(O.jsx)(ge,Object(Y.a)(Object(Y.a)({label:"Field B"},a),{},{children:Object(O.jsx)(o.a,{placeholder:"input placeholder"})})),Object(O.jsx)(ge,Object(Y.a)(Object(Y.a)({},t),{},{children:Object(O.jsx)(i.a,{type:"primary",children:"Submit"})}))]})})}}]),t}(s.Component),ve=h.a.Item,ye={labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:14}},ke={labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:{span:14,offset:6}}},we=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={checkNick:!1},e.check=function(){e.props.form.validateFields((function(e){e||console.info("success")}))},e.handleChange=function(a){e.setState({checkNick:a.target.checked},(function(){e.props.form.validateFields(["nickname"],{force:!0})}))},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return Object(O.jsx)(n.a,{className:"gx-card",title:"Dynamic Rules",children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(ve,Object(Y.a)(Object(Y.a)({},ye),{},{label:"Name",children:e("username",{rules:[{required:!0,message:"Please input your name"}]})(Object(O.jsx)(o.a,{placeholder:"Please input your name"}))})),Object(O.jsx)(ve,Object(Y.a)(Object(Y.a)({},ye),{},{label:"Nickname",children:e("nickname-1",{rules:[{required:this.state.checkNick,message:"Please input your nickname"}]})(Object(O.jsx)(o.a,{placeholder:"Please input your nickname"}))})),Object(O.jsx)(ve,Object(Y.a)(Object(Y.a)({},ke),{},{children:Object(O.jsx)(v.a,{value:this.state.checkNick,onChange:this.handleChange,children:"Nickname is required"})})),Object(O.jsx)(ve,Object(Y.a)(Object(Y.a)({},ke),{},{children:Object(O.jsx)(i.a,{type:"primary",onClick:this.check,children:"Check"})}))]})})}}]),t}(s.Component),Ce=h.a.create()(we),Se=(t(1627),t(1631)),Fe=(t(1640),t(1641)),Ne=(t(1628),t(1632)),Pe=(t(1584),t(1585)),De=(t(1843),h.a.Item),Ye=R.a.Option,Me=xe.a.Button,Re=xe.a.Group,Te=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields((function(e,a){e||console.log("Received values of form: ",a)}))},e.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a={labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:14}};return Object(O.jsx)(n.a,{className:"gx-card",title:"Other Form Controls",children:Object(O.jsxs)(h.a,{onSubmit:this.handleSubmit,children:[Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Plain Text",children:Object(O.jsx)("span",{className:"ant-form-text",children:"China"})})),Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Select",hasFeedback:!0,children:e("select",{rules:[{required:!0,message:"Please select your country!"}]})(Object(O.jsxs)(R.a,{placeholder:"Please select a country",children:[Object(O.jsx)(Ye,{value:"china",children:"China"}),Object(O.jsx)(Ye,{value:"use",children:"U.S.A"})]}))})),Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Select[multiple]",children:e("select-multiple",{rules:[{required:!0,message:"Please select your favourite colors!",type:"array"}]})(Object(O.jsxs)(R.a,{mode:"multiple",placeholder:"Please select favourite colors",children:[Object(O.jsx)(Ye,{value:"red",children:"Red"}),Object(O.jsx)(Ye,{value:"green",children:"Green"}),Object(O.jsx)(Ye,{value:"blue",children:"Blue"})]}))})),Object(O.jsxs)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"InputNumber",children:[e("input-number",{initialValue:3})(Object(O.jsx)(oe.a,{min:1,max:10})),Object(O.jsx)("span",{className:"ant-form-text",children:" machines"})]})),Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Switch",children:e("switch",{valuePropName:"checked"})(Object(O.jsx)(Pe.a,{}))})),Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Slider",children:e("slider")(Object(O.jsx)(Ne.a,{marks:{0:"A",20:"B",40:"C",60:"D",80:"E",100:"F"}}))})),Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Radio.Group",children:e("radio-group")(Object(O.jsxs)(Re,{children:[Object(O.jsx)(xe.a,{value:"a",children:"item 1"}),Object(O.jsx)(xe.a,{value:"b",children:"item 2"}),Object(O.jsx)(xe.a,{value:"c",children:"item 3"})]}))})),Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Radio.Button",children:e("radio-button")(Object(O.jsxs)(Re,{children:[Object(O.jsx)(Me,{value:"a",children:"item 1"}),Object(O.jsx)(Me,{value:"b",children:"item 2"}),Object(O.jsx)(Me,{value:"c",children:"item 3"})]}))})),Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Rate",children:e("rate",{initialValue:3.5})(Object(O.jsx)(Fe.a,{}))})),Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Upload",extra:"longgggggggggggggggggggggggggggggggggg",children:e("upload",{valuePropName:"fileList",getValueFromEvent:this.normFile})(Object(O.jsx)(Se.a,{name:"logo",action:"/upload.do",listType:"picture",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(m.a,{type:"upload"})," Click to upload"]})}))})),Object(O.jsx)(De,Object(Y.a)(Object(Y.a)({},a),{},{label:"Dragger",children:Object(O.jsx)("div",{className:"dropbox",children:e("dragger",{valuePropName:"fileList",getValueFromEvent:this.normFile})(Object(O.jsxs)(Se.a.Dragger,{name:"files",action:"/upload.do",children:[Object(O.jsx)("p",{className:"ant-upload-drag-icon",children:Object(O.jsx)(m.a,{type:"inbox"})}),Object(O.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(O.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload."})]}))})})),Object(O.jsx)(De,{wrapperCol:{xs:24,sm:{span:14,offset:6}},children:Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}}]),t}(s.Component),qe=h.a.create()(Te);a.default=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(g,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(N,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(A,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(B,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(U,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(_,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(ce,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(ie,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(ue,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(pe,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(fe,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(Ce,{})}),Object(O.jsx)(c.a,{span:24,children:Object(O.jsx)(qe,{})})]})}}}]);
//# sourceMappingURL=38.8bfb4e9e.chunk.js.map