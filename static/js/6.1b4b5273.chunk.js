(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,a){e.exports=a.p+"static/media/salami.f7344463.svg"},104:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(101),i=a(90),s=a.n(i),c=a(112),l=a(34),d=r.a.memo(function(e){var t=e.type;console.log("PizzaIngredient");var n=Math.floor(10*Math.random())+10,o=Math.floor(55*Math.random())+15,i=Math.floor(55*Math.random())+15,s=Math.floor(360*Math.random()),d=Math.floor(10*Math.random()),m=r.a.createElement(c.a,{svgStyle:{width:"100%",height:"100%"},src:a(88)});return t&&(m=r.a.createElement(c.a,{svgStyle:{position:"absolute",width:"".concat(n,"%"),height:"".concat(n,"%"),top:"".concat(o,"%"),left:"".concat(i,"%"),transform:"rotate(".concat(s,"deg)"),zIndex:"".concat(d)},loading:function(){return r.a.createElement("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"20"}},r.a.createElement(l.a,null))},wrapper:"span",src:a(91)("./".concat(t,".svg"))})),m});t.a=function(e){var t=e.ingredients,a=[];for(var n in t)for(var i=0;i<Math.floor(t[n].amount/5);i++)a.push({id:n+i,type:n});var c=a.map(function(e){return r.a.createElement(o.CSSTransition,{key:e.id,classNames:{enter:s.a["fade-enter"],enterActive:s.a["fade-enter-active"],exit:s.a["fade-exit"],exitActive:s.a["fade-exit-active"]},timeout:300},r.a.createElement(d,{type:e.type}))});return r.a.createElement("div",{className:s.a.Pizza},r.a.createElement(d,null),r.a.createElement(o.TransitionGroup,null,c))}},134:function(e,t,a){e.exports={CheckOpen:"Checkout_CheckOpen__W1lRZ",openCheck:"Checkout_openCheck__1r-Bk",CheckClosed:"Checkout_CheckClosed__1LoM-",closeCheck:"Checkout_closeCheck__wFIXg"}},135:function(e,t,a){e.exports={OrderForm:"OrderForm_OrderForm__2UI8f",Field:"OrderForm_Field__3rdBh",ErrorMsg:"OrderForm_ErrorMsg__24pQz"}},136:function(e,t,a){e.exports={OrderCheck:"OrderCheck_OrderCheck__3g3iq",msg:"OrderCheck_msg__1OF3o",buttons:"OrderCheck_buttons__1abaX"}},141:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),o=a(22),i=a(21),s=a(23),c=a(0),l=a.n(c),d=a(11),m=a(12),u=a(101),p=a(134),h=a.n(p),f=a(104),v=a(135),g=a.n(v),_=a(111),b=a(35),E=a(86),C=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(_.d,{className:g.a.OrderForm,initialValues:{name:"",street:"",zipCode:"",country:"",email:"",phone:"",deliveryMethod:"cheapest"},onSubmit:function(t,a){var n=e.props.startedPrice;for(var r in e.props.ingredients)n+=e.props.ingredients[r].price;var o={ingredients:e.props.ingredients,orderData:t,userId:e.props.userId,totalPrice:n.toFixed(2)};e.props.onSubmitOrder(e.props.token,o)},validate:function(e){var t={};return e.name?e.name.length<3&&(t.name="Minimum 3 characters"):t.name="Name is required",e.street||(t.street="Street is required"),e.zipCode||(t.zipCode="Zipcode is required"),e.country||(t.country="Country is required"),e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(t.email="Invalid email address (xxx@xxx.xx)"),e.phone?isNaN(e.phone)?t.phone="Phone must be write in digits":e.phone.length<7&&(t.phone="Minimum 7 digits"):t.phone="Phone is required",t},render:function(e){var t=e.values,a=e.errors,n=e.touched,r=e.handleBlur,o=e.handleChange,i=e.handleSubmit;e.isSubmitting,e.isValidating;return l.a.createElement(_.c,{onSubmit:i,className:g.a.OrderForm},l.a.createElement("input",{className:g.a.Field,type:"text",onChange:o,onBlur:r,value:t.name,name:"name",placeholder:"name*"}),a.name&&n.name&&l.a.createElement("div",{className:g.a.ErrorMsg},a.name),l.a.createElement(_.b,{className:g.a.Field,type:"text",name:"street",placeholder:"street*"}),l.a.createElement(_.a,{name:"street",component:"div",className:g.a.ErrorMsg}),l.a.createElement(_.b,{className:g.a.Field,type:"text",name:"zipCode",placeholder:"zipCode*"}),l.a.createElement(_.a,{name:"zipCode",component:"div",className:g.a.ErrorMsg}),l.a.createElement(_.b,{className:g.a.Field,type:"text",name:"country",placeholder:"country*"}),l.a.createElement(_.a,{name:"country",component:"div",className:g.a.ErrorMsg}),l.a.createElement(_.b,{className:g.a.Field,type:"email",name:"email",placeholder:"email"}),l.a.createElement(_.a,{name:"email",component:"div",className:g.a.ErrorMsg}),l.a.createElement(_.b,{className:g.a.Field,type:"text",name:"phone",placeholder:"phone*"}),l.a.createElement(_.a,{name:"phone",component:"div",className:g.a.ErrorMsg}),l.a.createElement(_.b,{className:g.a.Field,component:"select",name:"deliveryMethod"},l.a.createElement("option",{value:"cheapest"},"Cheapest"),l.a.createElement("option",{value:"fastest"},"Fastest")),l.a.createElement(_.a,{name:"deliveryMethod",component:"div",className:g.a.ErrorMsg}),l.a.createElement(E.a,{btnType:"Primary"},"Submit"))}})}}]),t}(c.Component),y=Object(m.b)(function(e){return{ingredients:e.mp.ingredients,startedPrice:e.mp.startedPrice,token:e.auth.token,userId:e.auth.userId}},function(e){return{onSubmitOrder:function(t,a){return e(b.j(t,a))}}})(C),x=a(136),O=a.n(x),k=function(e){return l.a.createElement("div",{className:O.a.OrderCheck},l.a.createElement("h1",{className:O.a.msg},"Do you want to continue order?"),l.a.createElement("div",{className:O.a.buttons},l.a.createElement(E.a,{btnType:"Danger",clicked:e.cancel},"NO"),l.a.createElement(E.a,{btnType:"Primary",clicked:e.continue},"YES")))},N=a(34),M=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={showOrderCheck:!0},a.continueHandler=function(){var e=document.body.scrollHeight;a.props.history.push(a.props.match.url+"/order-form"),setTimeout(function(){return window.scrollTo(0,e)},100),a.setState(function(e){return{showOrderCheck:!e.showOrderCheck}})},a.cancelHandler=function(){a.props.history.push("/")},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.props.isAuth?this.props.ordered?l.a.createElement(d.a,{to:"/orders"}):this.props.loading?l.a.createElement(N.a,null):l.a.createElement("div",{className:h.a.Checkout},l.a.createElement(f.a,{ingredients:this.props.ingredients}),l.a.createElement(u.CSSTransition,{in:this.state.showOrderCheck,timeout:{enter:400,exit:1e3},mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:"",enterActive:h.a.CheckOpen,exit:"",exitActive:h.a.CheckClosed}},l.a.createElement(k,{ingredients:this.props.ingredients,continue:this.continueHandler,cancel:this.cancelHandler})),l.a.createElement(d.b,{path:this.props.match.url+"/order-form",component:y})):l.a.createElement(d.a,{to:"/"})}}]),t}(c.Component);t.default=Object(m.b)(function(e){return{ingredients:e.mp.ingredients,loading:e.order.loading,ordered:e.order.ordered,isAuth:null!==e.auth.token}})(M)},86:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(87),i=a.n(o);t.a=r.a.memo(function(e){return r.a.createElement("button",{className:[i.a.Button,i.a[e.btnType]].join(" "),type:"submit",onClick:e.clicked,disabled:e.disabled},e.children)})},87:function(e,t,a){e.exports={Button:"Button_Button__2bIZO",Primary:"Button_Primary__31ihf",Danger:"Button_Danger__1MG8u"}},88:function(e,t,a){e.exports=a.p+"static/media/basic.96deab51.svg"},90:function(e,t,a){e.exports={Pizza:"Pizza_Pizza__FsJCW","fade-enter":"Pizza_fade-enter__2flpu","fade-enter-active":"Pizza_fade-enter-active__1D0ry","fade-exit":"Pizza_fade-exit__1l0OZ","fade-exit-active":"Pizza_fade-exit-active__dQaYC"}},91:function(e,t,a){var n={"./basic.svg":88,"./basil.svg":92,"./dough.svg":93,"./greenPepper.svg":94,"./mushrooms.svg":95,"./olives.svg":96,"./onion.svg":97,"./pineapple.svg":98,"./redPepper.svg":99,"./salami.svg":100};function r(e){var t=o(e);return a(t)}function o(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=91},92:function(e,t,a){e.exports=a.p+"static/media/basil.186aab84.svg"},93:function(e,t,a){e.exports=a.p+"static/media/dough.f2f89bc3.svg"},94:function(e,t,a){e.exports=a.p+"static/media/greenPepper.61480653.svg"},95:function(e,t,a){e.exports=a.p+"static/media/mushrooms.a60c76e0.svg"},96:function(e,t,a){e.exports=a.p+"static/media/olives.466ae5e9.svg"},97:function(e,t,a){e.exports=a.p+"static/media/onion.df14f2c7.svg"},98:function(e,t,a){e.exports=a.p+"static/media/pineapple.0d1687bc.svg"},99:function(e,t,a){e.exports=a.p+"static/media/redPepper.04faaea7.svg"}}]);
//# sourceMappingURL=6.1b4b5273.chunk.js.map