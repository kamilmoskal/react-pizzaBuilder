(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){e.exports=n.p+"static/media/salami.f7344463.svg"},102:function(e,t,n){e.exports={Modal:"Modal_Modal__1sqFf",Success:"Modal_Success__3vdL2",Error:"Modal_Error__3-DGc"}},103:function(e,t,n){"use strict";var a=n(19),r=n(20),i=n(22),o=n(21),s=n(23),c=n(0),l=n.n(c),u=n(102),p=n.n(u),m=function(e){return l.a.createElement("div",{className:[p.a.Modal,p.a[e.modalType]].join(" ")},e.children)};t.a=function(e,t){return function(n){function c(e){var n;return Object(a.a)(this,c),(n=Object(i.a)(this,Object(o.a)(c).call(this,e))).reqInteceptor=t.interceptors.request.use(function(e){return n.setState({error:!1}),e}),n.resInteceptor=t.interceptors.response.use(function(e){return e},function(e){n.setState({error:!0},function(){setTimeout(function(){n.setState({error:!1})},2e3)})}),n.state={error:!1},n}return Object(s.a)(c,n),Object(r.a)(c,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInteceptor),t.interceptors.response.eject(this.resInteceptor)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.error?l.a.createElement(m,{modalType:"Error"},"Failed to connect to server. Try again later"):null,l.a.createElement(e,this.props))}}]),c}(c.Component)}},104:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(101),o=n(90),s=n.n(o),c=n(112),l=n(34),u=r.a.memo(function(e){var t=e.type;console.log("PizzaIngredient");var a=Math.floor(10*Math.random())+10,i=Math.floor(55*Math.random())+15,o=Math.floor(55*Math.random())+15,s=Math.floor(360*Math.random()),u=Math.floor(10*Math.random()),p=r.a.createElement(c.a,{svgStyle:{width:"100%",height:"100%"},src:n(88)});return t&&(p=r.a.createElement(c.a,{svgStyle:{position:"absolute",width:"".concat(a,"%"),height:"".concat(a,"%"),top:"".concat(i,"%"),left:"".concat(o,"%"),transform:"rotate(".concat(s,"deg)"),zIndex:"".concat(u)},loading:function(){return r.a.createElement("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"20"}},r.a.createElement(l.a,null))},wrapper:"span",src:n(91)("./".concat(t,".svg"))})),p});t.a=function(e){var t=e.ingredients,n=[];for(var a in t)for(var o=0;o<Math.floor(t[a].amount/5);o++)n.push({id:a+o,type:a});var c=n.map(function(e){return r.a.createElement(i.CSSTransition,{key:e.id,classNames:{enter:s.a["fade-enter"],enterActive:s.a["fade-enter-active"],exit:s.a["fade-exit"],exitActive:s.a["fade-exit-active"]},timeout:300},r.a.createElement(u,{type:e.type}))});return r.a.createElement("div",{className:s.a.Pizza},r.a.createElement(u,null),r.a.createElement(i.TransitionGroup,null,c))}},119:function(e,t,n){e.exports={MakingPizza:"MakingPizza_MakingPizza__dyjnB"}},132:function(e,t,n){e.exports={OrderSummary:"OrderSummary_OrderSummary__2A4xL",ingredient:"OrderSummary_ingredient__32vQj",price:"OrderSummary_price__PIhx5"}},133:function(e,t,n){e.exports={PizzaControls:"PizzaControls_PizzaControls__1vu-W",select:"PizzaControls_select__3ukg9",slider:"PizzaControls_slider__2a-eA"}},140:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(20),i=n(22),o=n(21),s=n(23),c=n(0),l=n.n(c),u=n(12),p=n(119),m=n.n(p),d=n(35),f=n(104),g=n(132),v=n.n(g),h=n(86),E=n(11),y=Object(E.f)(function(e){var t=e.ingredients,n=[];for(var a in t)n.push({type:a,amount:t[a].amount,price:t[a].price});var r=n.filter(function(e){return 0!==e.amount}).map(function(e){return l.a.createElement("p",{key:e.type,className:v.a.ingredient},l.a.createElement("strong",null,e.type,":")," ",e.amount," g,",l.a.createElement("strong",null,"$",e.price.toFixed(2)))}),i=e.startedPrice;return n.forEach(function(e){return i+=e.price}),0===r.length&&(r=l.a.createElement("p",{style:{textAlign:"center"}},"ADD INGREDIENTS")),l.a.createElement("div",{className:v.a.OrderSummary},l.a.createElement("div",null,l.a.createElement("p",{className:v.a.ingredient},l.a.createElement("strong",null,"dought:")," 300 g,",l.a.createElement("strong",null,"$7")),l.a.createElement("p",{className:v.a.ingredient},l.a.createElement("strong",null,"cheese:")," 60 g,",l.a.createElement("strong",null,"$5")),l.a.createElement("p",{className:v.a.ingredient},l.a.createElement("strong",null,"tomato:")," 20 g,",l.a.createElement("strong",null,"$2")),r),l.a.createElement("div",null,l.a.createElement("p",{className:v.a.price},"total price: ",l.a.createElement("strong",{style:{fontSize:"20px"}},i.toFixed(2))),e.isAuth?l.a.createElement(h.a,{btnType:"Primary",clicked:function(){return e.history.push("/checkout")},disabled:!1},"Make a order"):l.a.createElement(h.a,{btnType:"Primary",clicked:function(){return e.history.push("/auth")},disabled:!1},"Log In to make a order")))});function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(c){r=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=n(133),b=n.n(z),P=function(e){var t=_(Object(c.useState)("onion"),2),n=t[0],a=t[1];return l.a.createElement("div",{className:b.a.PizzaControls},l.a.createElement("select",{className:b.a.select,value:n,onChange:function(e){a(e.target.value)}},l.a.createElement("option",{value:"onion"},"onion"),l.a.createElement("option",{value:"salami"},"salami"),l.a.createElement("option",{value:"mushrooms"},"mushrooms"),l.a.createElement("option",{value:"olives"},"olives"),l.a.createElement("option",{value:"basil"},"basil"),l.a.createElement("option",{value:"pineapple"},"pineapple"),l.a.createElement("option",{value:"redPepper"},"red pepper"),l.a.createElement("option",{value:"greenPepper"},"green pepper")),l.a.createElement("input",{type:"range",min:"0",max:"100",value:e.ingredients[n].amount,className:b.a.slider,onChange:function(t){return e.onChangeRange(t.target.value,n)}}),l.a.createElement(h.a,{btnType:"Primary",clicked:e.resetIng},"Reset"),l.a.createElement("p",{style:{margin:"auto 10px"}},e.ingredients[n].amount," grams"),l.a.createElement(h.a,{btnType:"Primary",clicked:e.randomPizza},"Make random Pizza"))},x=n(34),k=n(103),M=n(14),O=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=this.props.error?l.a.createElement("p",null,"Something went wrong: ",this.props.error.message):l.a.createElement(x.a,null);return this.props.ingredients&&(e=l.a.createElement(l.a.Fragment,null,l.a.createElement(P,{onChangeRange:this.props.onChangeIngredient,ingredients:this.props.ingredients,resetIng:this.props.onResetIngredients,randomPizza:this.props.onRandomPizza}),l.a.createElement(f.a,{ingredients:this.props.ingredients}),l.a.createElement(y,{ingredients:this.props.ingredients,startedPrice:this.props.startedPrice,isAuth:this.props.isAuth}))),l.a.createElement("div",{className:m.a.MakingPizza},e)}}]),t}(c.Component);t.default=Object(u.b)(function(e){return{ingredients:e.mp.ingredients,startedPrice:e.mp.startedPrice,error:e.mp.error,isAuth:null!==e.auth.token}},function(e){return{onInitIngredients:function(){return e(d.f())},onChangeIngredient:function(t,n){return e(d.b(t,n))},onResetIngredients:function(){return e(d.i())},onRandomPizza:function(){return e(d.h())}}})(Object(k.a)(O,M.a))},86:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(87),o=n.n(i);t.a=r.a.memo(function(e){return r.a.createElement("button",{className:[o.a.Button,o.a[e.btnType]].join(" "),type:"submit",onClick:e.clicked,disabled:e.disabled},e.children)})},87:function(e,t,n){e.exports={Button:"Button_Button__2bIZO",Primary:"Button_Primary__31ihf",Danger:"Button_Danger__1MG8u"}},88:function(e,t,n){e.exports=n.p+"static/media/basic.96deab51.svg"},90:function(e,t,n){e.exports={Pizza:"Pizza_Pizza__FsJCW","fade-enter":"Pizza_fade-enter__2flpu","fade-enter-active":"Pizza_fade-enter-active__1D0ry","fade-exit":"Pizza_fade-exit__1l0OZ","fade-exit-active":"Pizza_fade-exit-active__dQaYC"}},91:function(e,t,n){var a={"./basic.svg":88,"./basil.svg":92,"./dough.svg":93,"./greenPepper.svg":94,"./mushrooms.svg":95,"./olives.svg":96,"./onion.svg":97,"./pineapple.svg":98,"./redPepper.svg":99,"./salami.svg":100};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=91},92:function(e,t,n){e.exports=n.p+"static/media/basil.186aab84.svg"},93:function(e,t,n){e.exports=n.p+"static/media/dough.f2f89bc3.svg"},94:function(e,t,n){e.exports=n.p+"static/media/greenPepper.61480653.svg"},95:function(e,t,n){e.exports=n.p+"static/media/mushrooms.a60c76e0.svg"},96:function(e,t,n){e.exports=n.p+"static/media/olives.466ae5e9.svg"},97:function(e,t,n){e.exports=n.p+"static/media/onion.df14f2c7.svg"},98:function(e,t,n){e.exports=n.p+"static/media/pineapple.0d1687bc.svg"},99:function(e,t,n){e.exports=n.p+"static/media/redPepper.04faaea7.svg"}}]);
//# sourceMappingURL=5.b76a315b.chunk.js.map