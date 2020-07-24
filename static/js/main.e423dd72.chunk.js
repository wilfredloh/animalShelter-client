(this.webpackJsonpanimals=this.webpackJsonpanimals||[]).push([[0],{34:function(e,a,t){e.exports=t(63)},39:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),c=t.n(r),s=(t(39),t(7)),i=t.n(s),m=t(8),o=t(11),u=t(12),h=t(15),d=t(14),p=t(9),g=t.n(p);var b=function(e){return l.a.createElement("div",{className:"card name"},l.a.createElement("img",{src:e.animal.image,alt:"img",className:"card-img-top"}),l.a.createElement("div",{className:"card-header"},"Species: ",e.animal.species),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"Name: ",e.animal.name),l.a.createElement("li",{className:"list-group-item"},"Breed: ",e.animal.breed),l.a.createElement("li",{className:"list-group-item"},"Sex: ",e.animal.sex),l.a.createElement("li",{className:"list-group-item"},"Age: ",e.animal.age),l.a.createElement("li",{className:"list-group-item"},"Adopted: ",e.animal.adopted?"Yes":"No")),l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:e.handleDelete},"Delete"),l.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:e.handleUpdate},"Update"))},E=t(17),f=t(13),v=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).handleChange=function(a){var t=a.target,n=t.id,l=t.value;e.setState(Object(f.a)({},n,l))},e.handleChecked=function(a){e.setState({adopted:!e.state.adopted}),console.log(e.state.adopted)},e.handleSubmit=function(){var a=Object(m.a)(i.a.mark((function a(t){var n,l;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,n=Object(E.a)({},e.state),{},a.next=6,g.a.post("https://animal-shelterzz.herokuapp.com/",n);case 6:l=a.sent,console.log(l),l.data.success&&e.setState({name:"",species:"",breed:"",sex:"",image:"",age:0,adopted:!0}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),console.log(a.t0.res);case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}(),e.state={name:"",species:"",breed:"",sex:"",image:"",age:0,adopted:!0},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row pb-5 pt-5"},l.a.createElement("div",{className:"col-md-6 m-auto"},l.a.createElement("div",{className:"card card-body"},l.a.createElement("h1",null,"Create Form"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",id:"name",value:this.state.name,onChange:this.handleChange,required:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"species"},"Species"),l.a.createElement("input",{type:"text",id:"species",value:this.state.species,onChange:this.handleChange,required:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"breed"},"Breed"),l.a.createElement("input",{type:"text",id:"breed",value:this.state.breed,onChange:this.handleChange,required:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"image"},"Image"),l.a.createElement("input",{type:"text",id:"image",value:this.state.image,onChange:this.handleChange,required:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"age"},"Age"),l.a.createElement("input",{type:"number",id:"age",value:this.state.age,onChange:this.handleChange,required:!0,className:"form-control"})),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{type:"checkbox",id:"adopted",defaultChecked:!0,onChange:this.handleChecked,className:"form-check-input"}),l.a.createElement("label",{htmlFor:"adopted",className:"form-check-label"},"Adopted?")),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{type:"radio",id:"sex",value:"Female",checked:"Female"===this.state.sex,onChange:this.handleChange,className:"form-check-input"}),l.a.createElement("label",{htmlFor:"sex",className:"form-check-label"},"Female ")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{type:"radio",id:"sex",value:"Male",checked:"Male"===this.state.sex,onChange:this.handleChange,className:"form-check-input"}),l.a.createElement("label",{htmlFor:"sex",className:"form-check-label"}," Male "))),l.a.createElement("button",{className:"btn btn-primary"},"Create")))))}}]),t}(n.Component),C=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).handleDelete=function(){var a=Object(m.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,console.log(t),a.next=4,g.a.delete("https://animal-shelterzz.herokuapp.com/".concat(t));case 4:a.sent,e.getData(),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.res);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}(),e.handleUpdate=function(a){e.props.history.push("/".concat(a))},e.state={animal:[]},e}return Object(u.a)(t,[{key:"getData",value:function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://animal-shelterzz.herokuapp.com/");case 3:a=e.sent,console.log(a.data),this.setState({animal:a.data.data}),console.log(this.state.animal),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.res);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Animals Up for Adoption"),l.a.createElement("div",{className:"container row"},this.state.animal.map((function(a){return l.a.createElement(b,{animal:a,key:a._id,handleDelete:function(){return e.handleDelete(a._id)},handleUpdate:function(){return e.handleUpdate(a._id)}})}))),l.a.createElement(v,null))}}]),t}(n.Component),k=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).handleChange=function(a){var t=a.target,n=t.id,l=t.value;e.setState(Object(f.a)({},n,l))},e.handleChecked=function(a){e.setState({adopted:!e.state.adopted}),console.log(e.state.adopted)},e.handleSubmit=function(){var a=Object(m.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t.preventDefault(),n=Object(E.a)({},e.state),a.next=5,g.a.put("https://animal-shelterzz.herokuapp.com/".concat(e.props.match.params.index),n);case 5:a.sent.data.success&&e.props.history.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0.res);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}(),e.state={name:"",species:"",breed:"",sex:"",image:"",age:0,adopted:!0},e}return Object(u.a)(t,[{key:"render",value:function(){return console.log(this.props.match.params.index),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",id:"name",value:this.state.name,onChange:this.handleChange,required:!0}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"species"},"Species"),l.a.createElement("input",{type:"text",id:"species",value:this.state.species,onChange:this.handleChange,required:!0}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"breed"},"Breed"),l.a.createElement("input",{type:"text",id:"breed",value:this.state.breed,onChange:this.handleChange,required:!0}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"sex"},"Female"),l.a.createElement("input",{type:"radio",id:"sex",value:"Female",checked:"Female"===this.state.sex,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"sex"},"Male"),l.a.createElement("input",{type:"radio",id:"sex",value:"Male",checked:"Male"===this.state.sex,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"image"},"Image"),l.a.createElement("input",{type:"text",id:"image",value:this.state.image,onChange:this.handleChange,required:!0}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"age"},"Age"),l.a.createElement("input",{type:"number",id:"age",value:this.state.age,onChange:this.handleChange,required:!0}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"age"},"Adopted?"),l.a.createElement("input",{type:"checkbox",id:"adopted",defaultChecked:!0,onChange:this.handleChecked}),l.a.createElement("br",null),l.a.createElement("button",null,"Create"))}}]),t}(n.Component),x=t(32),N=t(1);var y=function(){return l.a.createElement(x.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(N.c,null,l.a.createElement(N.a,{exact:!0,path:"/",component:C}),l.a.createElement(N.a,{exact:!0,path:"/:index",component:k}))))};c.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e423dd72.chunk.js.map