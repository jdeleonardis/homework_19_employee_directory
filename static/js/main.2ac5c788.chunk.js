(this.webpackJsonphw19_emp_dir=this.webpackJsonphw19_emp_dir||[]).push([[0],{18:function(e,t,n){e.exports=n(47)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),l=n.n(o);n(23),n(24);var c=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};n(25);var i=function(){return r.a.createElement("header",{className:"header text-center"},r.a.createElement("h2",null,"Employee Directory"),r.a.createElement("p",null,"Click on column headers to filter by heading or use the search box to narrow your results"))},s=n(2),m=n(3),u=n(5),d=n(4),f=n(16),h=n.n(f),E=function(){return h.a.get("https://randomuser.me/api/?results=100&inc=name,phone,nat,email,picture,dob&nat=us")};n(43);var p=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 d-flex justify-content-center"},r.a.createElement("input",{value:e.search,type:"text",className:"form-control",onChange:e.handleSearchChange,placeholder:"Search"}))))};n(44);var y=function(e){var t=e.handleSearchChange;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},r.a.createElement("div",{className:"navbar-collapse row",id:"navbarNav"},r.a.createElement(p,{handleSearchChange:t})))},v=(n(45),n(17)),N=n.n(v);var b=function(e){return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"tr-header"},e.columns.map((function(t){return r.a.createElement("th",{onClick:function(){return e.handleSort(t.colName)},scope:"col",key:t.colName},t.colName," ",r.a.createElement("i",{className:"fa fa-fw fa-sort"}))})))),r.a.createElement("tbody",null,e.filteredEmployees.map((function(e){return r.a.createElement("tr",{className:"tr-stuff",key:e.email},r.a.createElement("td",null,r.a.createElement("img",{alt:"employee pic",src:e.picture.thumbnail})),r.a.createElement("td",null,e.name.first+" "+e.name.last),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,r.a.createElement("a",{href:e.email},e.email)),r.a.createElement("td",null,N()("".concat(e.dob.date),"mm/dd/yyyy")))}))))},g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={originalEmployees:[],filteredEmployees:[],columns:[{colName:"Picture",order:"D"},{colName:"Name",order:"D"},{colName:"Phone",order:"D"},{colName:"Email",order:"D"},{colName:"DOB",order:"D"}]},e.handleSearchChange=function(t){var n=e.state.originalEmployees.filter((function(e){return e.name.first.toLowerCase().includes(t.target.value.toLowerCase())||e.name.last.toLowerCase().includes(t.target.value.toLowerCase())}));e.setState({filteredEmployees:n})},e.loadEmployeeData=function(){E().then((function(t){return e.setState({originalEmployees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadEmployeeData()}},{key:"handleSort",value:function(e){var t,n=[],a=this.state.columns,r=this.state.columns.find((function(t){return t.colName===e})).order;switch(e){case"Name":"D"===r?(n=this.state.filteredEmployees.sort((function(e,t){return e.name.first>t.name.first?1:-1})),t=a.findIndex((function(e){return"Name"===e.colName})),a[t].order="A"):(n=this.state.filteredEmployees.sort((function(e,t){return e.name.first>t.name.first?-1:1})),t=a.findIndex((function(e){return"Name"===e.colName})),a[t].order="D");break;case"Phone":"D"===r?(n=this.state.filteredEmployees.sort((function(e,t){return e.phone>t.phone?1:-1})),t=a.findIndex((function(e){return"Phone"===e.colName})),a[t].order="A"):(n=this.state.filteredEmployees.sort((function(e,t){return e.phone>t.phone?-1:1})),t=a.findIndex((function(e){return"Phone"===e.colName})),a[t].order="D");break;case"Email":"D"===r?(n=this.state.filteredEmployees.sort((function(e,t){return e.email>t.email?1:-1})),t=a.findIndex((function(e){return"Email"===e.colName})),a[t].order="A"):(n=this.state.filteredEmployees.sort((function(e,t){return e.email>t.email?-1:1})),t=a.findIndex((function(e){return"Email"===e.colName})),a[t].order="D");break;case"DOB":"D"===r?(n=this.state.filteredEmployees.sort((function(e,t){return e.dob.date>t.dob.date?1:-1})),t=a.findIndex((function(e){return"DOB"===e.colName})),a[t].order="A"):(n=this.state.filteredEmployees.sort((function(e,t){return e.dob.date>t.dob.date?-1:1})),t=a.findIndex((function(e){return"DOB"===e.colName})),a[t].order="D");break;default:"D"===r?(n=this.state.filteredEmployees.sort((function(e,t){return e.name.first>t.name.first?1:-1})),t=a.findIndex((function(e){return"Picture"===e.colName})),a[t].order="A"):(n=this.state.filteredEmployees.sort((function(e,t){return e.name.first>t.name.first?-1:1})),t=a.findIndex((function(e){return"Picture"===e.colName})),a[t].order="D")}this.setState({filteredEmployees:n,columns:a})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{handleSearchChange:this.handleSearchChange}),r.a.createElement("div",{className:"col-sm-12 d-flex justify-content-center"},r.a.createElement(b,{filteredEmployees:this.state.filteredEmployees,handleSort:this.handleSort.bind(this),columns:this.state.columns})))}}]),n}(a.Component),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))}}]),n}(a.Component);n(46);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c,null,r.a.createElement(i,null),r.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2ac5c788.chunk.js.map