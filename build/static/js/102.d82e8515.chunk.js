(this["webpackJsonppeleza-international"]=this["webpackJsonppeleza-international"]||[]).push([[102],{1653:function(t,e,n){"use strict";var a=n(10),c=n(15),s=n(75),o=n(27),i=n(28),l=n(0),r=n.n(l),d=n(2),u=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).state={popoverOpen:!1},t.toggle=t.toggle.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var t=this.props,e=t.placeholder,n=t.onChange,a=t.value;return Object(d.jsxs)("div",{className:"gx-module-box-header-inner",children:[Object(d.jsx)("div",{className:"gx-search-bar gx-lt-icon-search-bar-lg gx-module-search-bar gx-d-none gx-d-sm-block",children:Object(d.jsxs)("div",{className:"gx-form-group",children:[Object(d.jsx)("input",{className:"ant-input gx-border-0",type:"search",placeholder:e,onChange:n,value:a}),Object(d.jsx)("span",{className:"gx-search-icon gx-pointer",children:Object(d.jsx)("i",{className:"icon icon-search"})})]})}),Object(d.jsxs)("div",{className:"gx-module-box-header-right",children:[Object(d.jsxs)("span",{className:"gx-fs-xl",children:[" ",Object(d.jsx)("i",{className:"icon icon-apps gx-icon-btn"})]}),Object(d.jsx)("span",{className:"gx-fs-xl",children:Object(d.jsx)("i",{className:"icon icon-notification gx-icon-btn"})})]})]})}}]),n}(r.a.Component);e.a=u,u.defaultProps={styleName:"",value:"",notification:!0,apps:!0}},2186:function(t,e,n){"use strict";n.r(e);n(584);var a=n(380),c=(n(116),n(60)),s=n(10),o=n(15),i=n(75),l=n(27),r=n(28),d=n(0),u=n.n(d),j=n(106),x=n(1808),m=n.n(x),h=(n(275),n(156)),b=(n(274),n(132)),g=(n(214),n(12)),p=(n(1605),n(1609)),O=(n(471),n(198)),v=n(8),f=n(2),C=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(t){var a;Object(s.a)(this,n),a=e.call(this,t);var c=t.contact,o=c.id,i=c.thumb,l=c.name,r=c.email,d=c.phone,u=c.designation,j=c.starred,x=c.frequently;return a.state={id:o,thumb:i,name:l,email:r,phone:d,designation:u,starred:j,frequently:x},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.contactId,a=e.onSaveContact,c=e.onContactClose,s=e.open,o=e.contact,i=this.state,l=i.id,r=i.name,d=i.email,u=i.phone,j=i.designation,x=i.starred,m=i.frequently,h=this.state.thumb;return h||(h="src/assets/images/placeholder.jpg"),Object(f.jsx)(p.a,{title:""===o.name?Object(f.jsx)(v.a,{id:"contact.addContact"}):Object(f.jsx)(v.a,{id:"contact.saveContact"}),toggle:c,visible:s,closable:!1,onOk:function(){""!==r&&(c(),a(n,{id:l,name:r,thumb:h,email:d,phone:u,designation:j,starred:x,frequently:m}),t.setState({id:l+1,name:"",thumb:"",email:"",phone:"",designation:""}))},onCancel:c,children:Object(f.jsxs)("div",{className:"gx-modal-box-row",children:[Object(f.jsx)("div",{className:"gx-modal-box-avatar",children:Object(f.jsx)(b.a,{size:"large",src:h})}),Object(f.jsxs)("div",{className:"gx-modal-box-form-item",children:[Object(f.jsx)("div",{className:"gx-form-group",children:Object(f.jsx)(O.a,{required:!0,placeholder:"Name",onChange:function(e){return t.setState({name:e.target.value})},defaultValue:r,margin:"none"})}),Object(f.jsx)("div",{className:"gx-form-group",children:Object(f.jsx)(O.a,{placeholder:"Email",onChange:function(e){return t.setState({email:e.target.value})},value:d,margin:"normal"})}),Object(f.jsx)("div",{className:"gx-form-group",children:Object(f.jsx)(O.a,{placeholder:"Phone",onChange:function(e){return t.setState({phone:e.target.value})},value:u,margin:"normal"})}),Object(f.jsx)("div",{className:"gx-form-group",children:Object(f.jsx)(O.a,{placeholder:"Designation",onChange:function(e){return t.setState({designation:e.target.value})},value:j,autosize:{minRows:2,maxRows:6},margin:"normal"})})]})]})})}}]),n}(u.a.Component),N=["Edit","Delete"],S=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).onContactClose=function(){t.setState({addContactState:!1})},t.onDeleteContact=function(){t.setState({addContactState:!1}),t.props.onDeleteContact(t.props.id)},t.onEditContact=function(){t.setState({addContactState:!0})},t.menus=function(){return Object(f.jsx)(g.a,{onClick:function(e){"Edit"===e.key?t.onEditContact():t.onDeleteContact(t.props.id)},children:N.map((function(t){return Object(f.jsx)(g.a.Item,{children:t},t)}))})},t.state={addContactState:!1},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contact,n=t.addFavourite,a=t.id,c=t.onSaveContact,s=this.state.addContactState,o=e.name,i=e.thumb,l=e.email,r=e.phone,d=e.designation,u=e.starred;return Object(f.jsxs)("div",{className:"gx-contact-item",children:[Object(f.jsxs)("div",{className:"gx-module-list-icon",children:[Object(f.jsx)("div",{className:"gx-d-none gx-d-sm-flex",onClick:function(){n(a,e)},children:u?Object(f.jsx)("i",{className:"gx-icon-btn icon icon-star"}):Object(f.jsx)("i",{className:"gx-icon-btn icon icon-star-o"})}),Object(f.jsx)("div",{className:"gx-ml-2 gx-d-none gx-d-sm-flex",children:null===i||""===i?Object(f.jsx)(b.a,{size:"large",children:o.charAt(0).toUpperCase()}):Object(f.jsx)(b.a,{size:"large",alt:o,src:i})})]}),Object(f.jsxs)("div",{className:"gx-module-list-info gx-contact-list-info",children:[Object(f.jsxs)("div",{className:"gx-module-contact-content",children:[Object(f.jsxs)("p",{className:"gx-mb-1",children:[Object(f.jsxs)("span",{className:"gx-text-truncate gx-contact-name",children:[" ",o," "]}),Object(f.jsx)("span",{className:"gx-toolbar-separator",children:"\xa0"}),Object(f.jsx)("span",{className:"gx-text-truncate gx-job-title",children:d})]}),Object(f.jsxs)("div",{className:"gx-text-muted",children:[Object(f.jsxs)("span",{className:"gx-email gx-d-inline-block gx-mr-2",children:[l,","]}),Object(f.jsx)("span",{className:"gx-phone gx-d-inline-block",children:r})]})]}),Object(f.jsxs)("div",{className:"gx-module-contact-right",children:[Object(f.jsx)(h.a,{overlay:this.menus(),placement:"bottomRight",trigger:["click"],children:Object(f.jsx)("i",{className:"gx-icon-btn icon icon-ellipse-v"})}),s&&Object(f.jsx)(C,{open:s,contact:e,onSaveContact:c,contactId:a,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact})]})]})]})}}]),n}(u.a.Component),y=function(t){var e=t.contactList,n=t.addFavourite,a=t.onSaveContact,c=t.onDeleteContact;return Object(f.jsx)("div",{className:"gx-contact-main-content",children:m.a.map(e,(function(t,e){return Object(f.jsx)(S,{id:e,contact:t,onDeleteContact:c,onSaveContact:a,addFavourite:n},e)}))})},k=n(1653),L=(n(247),n(113)),w=n(278),D=n(105),q=n(59),F=n(646),A=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentWillReceiveProps",value:function(t){var e=this;(t.error||t.message)&&setTimeout((function(){e.props.hideMessage()}),3e3)}},{key:"render",value:function(){var t=this.props,e=t.error,n=t.loading,a=t.displayMessage;return console.log("loading,",n),Object(f.jsxs)(D.a,{children:[n&&Object(f.jsx)("div",{className:"gx-loader-view gx-loader-position",children:Object(f.jsx)(w.a,{})}),e&&L.b.error(Object(f.jsx)("span",{id:"message-id",children:e})),a&&L.b.info(Object(f.jsx)("span",{id:"message-id",children:a}))]})}}]),n}(u.a.Component),M=Object(q.c)((function(t){var e=t.common;return{error:e.error,loading:e.loading,displayMessage:e.message}}),{hideMessage:F.b})(A),U=n(43),I=n(129),R=723812738,z=[{id:1,name:"All contacts",icon:"all-contacts"},{id:2,name:"Frequently contacted",icon:"frequent"},{id:3,name:"Starred contacts",icon:"star"}],E=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).ContactSideBar=function(e){return Object(f.jsxs)("div",{className:"gx-module-side",children:[Object(f.jsx)("div",{className:"gx-module-side-header",children:Object(f.jsxs)("div",{className:"gx-module-logo",children:[Object(f.jsx)("i",{className:"icon icon-contacts gx-mr-4"}),Object(f.jsx)("span",{children:Object(f.jsx)(v.a,{id:"chat.contacts"})})]})}),Object(f.jsx)("div",{className:"gx-module-side-content",children:Object(f.jsxs)(j.a,{className:"gx-module-side-scroll",children:[Object(f.jsx)("div",{className:"gx-module-add-task",children:Object(f.jsxs)(c.a,{className:"gx-btn-block ant-btn",type:"primary","aria-label":"add",onClick:t.onAddContact,children:[Object(f.jsx)("i",{className:"icon icon-add gx-mr-2"}),Object(f.jsx)("span",{children:"Add New Contact"})]})}),Object(f.jsx)("div",{className:"gx-module-side-nav",children:Object(f.jsx)("ul",{className:"gx-module-nav",children:z.map((function(e){return Object(f.jsx)("li",{className:"gx-nav-item",children:Object(f.jsxs)("span",{className:"gx-link ".concat(e.id===t.state.selectedSectionId?"active":""),onClick:t.onFilterOptionSelect.bind(Object(i.a)(t),e),children:[Object(f.jsx)("i",{className:"icon icon-".concat(e.icon)}),Object(f.jsx)("span",{children:e.name})]})},e.id)}))})})]})})]})},t.addFavourite=function(e,n){var a=n;a.starred=!n.starred,t.props.onUpdateContact(e,a)},t.onAddContact=function(){t.setState({addContactState:!0})},t.onContactClose=function(){t.setState({addContactState:!1})},t.onFilterOptionSelect=function(e){switch(e.name){case"All contacts":t.setState({selectedSectionId:e.id,filterOption:e.name,contactList:t.state.allContact});break;case"Frequently contacted":t.setState({selectedSectionId:e.id,filterOption:e.name,contactList:m.a.filter(t.state.allContact,(function(t,e){return t.frequently}))});break;case"Starred contacts":t.setState({selectedSectionId:e.id,filterOption:e.name,contactList:m.a.filter(t.state.allContact,(function(t){return t.starred}))})}},t.onSaveContact=function(e,n){e?t.props.onUpdateContact(e,n):t.props.onAddContact(n)},t.onDeleteContact=function(e){t.props.onDeleteContact(e)},t.filterContact=function(e){var n=t.state.filterOption;if(""===e)t.setState({contactList:t.state.allContact});else{var a=m.a.filter(t.state.allContact,(function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}));"All contacts"===n?t.setState({contactList:a}):"Frequently contacted"===n?t.setState({contactList:a.filter((function(t){return t.frequently}))}):"Starred contacts"===n&&t.setState({contactList:a.filter((function(t){return t.starred}))})}},t.handleRequestClose=function(){t.setState({showMessage:!1})},t.state={noContentFoundMessage:"No Contact found in selected folder",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,user:{name:"Robert Johnson",email:"robert.johnson@example.com",avatar:"https://via.placeholder.com/150x150"},searchUser:"",filterOption:"All contacts",allContact:[],contactList:[],selectedContact:null,addContactState:!1},t}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.props.onGetAllContact()}},{key:"componentWillReceiveProps",value:function(t){console.log("contactList",t.contactList),t.contactList&&this.setState({allContact:t.contactList,contactList:t.contactList})}},{key:"updateContactUser",value:function(t){this.setState({searchUser:t.target.value}),this.filterContact(t.target.value)}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var t=this.state,e=t.user,n=t.contactList,c=t.addContactState,s=t.drawerState,o=t.noContentFoundMessage;return Object(f.jsxs)("div",{className:"gx-main-content",children:[Object(f.jsxs)("div",{className:"gx-app-module",children:[Object(f.jsx)("div",{className:"gx-d-block gx-d-lg-none",children:Object(f.jsx)(a.a,{placement:"left",closable:!1,visible:s,onClose:this.onToggleDrawer.bind(this),children:this.ContactSideBar()})}),Object(f.jsx)("div",{className:"gx-module-sidenav gx-d-none gx-d-lg-flex",children:this.ContactSideBar(e)}),Object(f.jsxs)("div",{className:"gx-module-box",children:[Object(f.jsxs)("div",{className:"gx-module-box-header",children:[Object(f.jsx)("span",{className:"gx-drawer-btn gx-d-flex gx-d-lg-none",children:Object(f.jsx)("i",{className:"icon icon-menu gx-icon-btn","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)})}),Object(f.jsx)(k.a,{placeholder:"Search contact",notification:!1,apps:!1,user:this.state.user,onChange:this.updateContactUser.bind(this),value:this.state.searchUser})]}),Object(f.jsxs)("div",{className:"gx-module-box-content",children:[Object(f.jsx)("div",{className:"gx-module-box-topbar"}),Object(f.jsx)(j.a,{className:"gx-module-content-scroll",children:0===n.length?Object(f.jsx)("div",{className:"gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center",children:o}):Object(f.jsx)(y,{contactList:n,addFavourite:this.addFavourite,onDeleteContact:this.onDeleteContact.bind(this),onSaveContact:this.onSaveContact.bind(this)})})]})]})]}),Object(f.jsx)(C,{open:c,contact:{id:R++,name:"",thumb:"",email:"",phone:"",designation:"",starred:!1,frequently:!1},onSaveContact:this.onSaveContact,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact}),Object(f.jsx)(M,{})]})}}]),n}(d.Component);e.default=Object(q.c)((function(t){var e=t.contact;return{contactList:e.contactList,selectedContact:e.selectedContact}}),{onGetAllContact:function(){return function(t){t({type:U.d}),I.b.ref("/contact").on("value",(function(e){t({type:U.e}),t({type:U.f,payload:e.val()})}))}},onAddContact:function(t){return function(e){return I.b.ref("/contact").push(t)}},onUpdateContact:function(t,e){return function(n){return I.b.ref("/contact").child(t).update(e)}},onDeleteContact:function(t){return function(e){return I.b.ref("/contact").child(t).remove()}}})(E)}}]);
//# sourceMappingURL=102.d82e8515.chunk.js.map