(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={app:"App_app__xL_Rg"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=n(13),s=n(2),l=n(3),u=n(5),h=n(4),d=n(7),b=n(6),m=n.n(b),p=n(22),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props.onAdd;if((0,t.props.onCheckUnique)(t.state.name)){var o=Object(p.a)();t.setState({id:o}),r({id:o,name:a,number:c}),t.reset()}},t.reset=function(){t.setState({id:"",name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:m.a.form_contact,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"name",className:m.a.label_contact,children:"Name"}),Object(j.jsx)("input",{type:"text",className:m.a.input_contact,name:"name",value:this.state.name,placeholder:"Enter name",onChange:this.handleChange,required:!0})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"phone",className:m.a.label_contact,children:"Phone"}),Object(j.jsx)("input",{type:"tel",className:m.a.input_contact,name:"number",value:this.state.number,placeholder:"Enter phone XXX-XX-XX",pattern:"^(\\d{3})-\\d{2}-\\d{2}$",onChange:this.handleChange,required:!0})]}),Object(j.jsx)("button",{type:"submit",className:m.a.btn_add,onSubmit:this.handleSubmit,children:"Add contact"})]})}}]),n}(a.Component),_=n(8),O=n.n(_),v=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={filter:""},t.handleChange=function(e){var n=t.props.onSearch,a=t.state.filter,c=e.currentTarget,r=c.name,o=c.value;t.setState(Object(d.a)({},r,o)),n(a)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:O.a.form_search,children:[Object(j.jsx)("label",{htmlFor:"filter",className:O.a.label_search,children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"filter",className:O.a.input_search,placeholder:"Enter the name",onChange:this.handleChange})]})}}]),n}(a.Component);v.defaultProps={contactsListToShow:[],filter:""};var C=v,x=n(9),g=n.n(x),y=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.contacts,e=this.props.onDelete;return 0===t.length?Object(j.jsx)("div",{children:"Nothing found"}):Object(j.jsx)("ul",{className:g.a.contact_list,children:t.map((function(t){return Object(j.jsx)(S,{id:t.id,name:t.name,number:t.number,onDelete:e},t.id)}))})}}]),n}(a.Component);y.defaultProps={contacts:[]};var S=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleDelete=function(e){(0,t.props.onDelete)(e.target.parentNode.id)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.name,a=t.number;return Object(j.jsxs)("li",{className:g.a.contact_item,id:e,children:[" ",n," : ",a,Object(j.jsx)("button",{type:"button",className:g.a.btn_delete,onClick:this.handleDelete,children:"Delete"})]})}}]),n}(a.Component);S.defaultProps={id:"",name:"",number:""};var k=y,N=n(12),w=n.n(N),D=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContact=function(e){t.setState({filter:e})},t.getContactsListToShow=function(){var e=t.state,n=e.contacts,a=e.filter;return""===a?n:n.filter((function(t){return t.name.toUpperCase().includes(a.toUpperCase())}))},t.checkUnique=function(e){if(console.log("check unique"),!t.state.contacts.find((function(t){return t.name.toUpperCase()===e.toUpperCase()})))return!0;alert("".concat(e," is already in contacts!"))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.getContactsListToShow();return Object(j.jsxs)("div",{className:w.a.app,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onAdd:this.addContact,onCheckUnique:this.checkUnique}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(C,{filter:this.state.filter,onSearch:this.filterContact,contactsListToShow:t}),Object(j.jsx)(k,{contacts:t,onDelete:this.deleteContact})]})}}]),n}(a.Component);n(19);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={label_contact:"ContactForm_label_contact__2bRGj",input_contact:"ContactForm_input_contact__aZ8T7",form_contact:"ContactForm_form_contact__bGUBB",btn_add:"ContactForm_btn_add__jCnPm"}},8:function(t,e,n){t.exports={form_search:"Filter_form_search__2zQml",label_search:"Filter_label_search__2mPuj",input_search:"Filter_input_search__2zMWv"}},9:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__2ak7Q",contact_item:"ContactList_contact_item__zM3bj",btn_delete:"ContactList_btn_delete__3Dfl2"}}},[[20,1,2]]]);
//# sourceMappingURL=main.16a81761.chunk.js.map