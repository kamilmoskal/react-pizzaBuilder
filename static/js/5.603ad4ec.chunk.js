(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){e.exports=n.p+"static/media/redPepper.04faaea7.svg"},101:function(e,t,n){e.exports=n.p+"static/media/salami.f7344463.svg"},103:function(e,t,n){e.exports={Modal:"Modal_Modal__1sqFf",Success:"Modal_Success__3vdL2",Error:"Modal_Error__3-DGc"}},104:function(e,t,n){"use strict";var a=n(35),r=n(36),i=n(39),o=n(37),c=n(38),s=n(0),l=n.n(s),u=n(103),m=n.n(u),p=function(e){return l.a.createElement("div",{className:[m.a.Modal,m.a[e.modalType]].join(" ")},e.children)};t.a=function(e,t){return function(n){function s(e){var n;return Object(a.a)(this,s),(n=Object(i.a)(this,Object(o.a)(s).call(this,e))).reqInteceptor=t.interceptors.request.use(function(e){return n.setState({error:!1}),e}),n.resInteceptor=t.interceptors.response.use(function(e){return e},function(e){n.setState({error:!0},function(){setTimeout(function(){n.setState({error:!1})},2e3)})}),n.state={error:!1},n}return Object(c.a)(s,n),Object(r.a)(s,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInteceptor),t.interceptors.response.eject(this.resInteceptor)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.error?l.a.createElement(p,{modalType:"Error"},"Failed to connect to server. Try again later"):null,l.a.createElement(e,this.props))}}]),s}(s.Component)}},105:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(102),o=n(91),c=n.n(o),s=n(113),l=n(29),u=r.a.memo(function(e){var t=e.type;console.log("PizzaIngredient");var a=Math.floor(10*Math.random())+10,i=Math.floor(55*Math.random())+15,o=Math.floor(55*Math.random())+15,c=Math.floor(360*Math.random()),u=Math.floor(10*Math.random()),m=r.a.createElement(s.a,{svgStyle:{width:"100%",height:"100%"},src:n(89)});return t&&(m=r.a.createElement(s.a,{svgStyle:{position:"absolute",width:"".concat(a,"%"),height:"".concat(a,"%"),top:"".concat(i,"%"),left:"".concat(o,"%"),transform:"rotate(".concat(c,"deg)"),zIndex:"".concat(u)},loading:function(){return r.a.createElement("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"20"}},r.a.createElement(l.a,null))},wrapper:"span",src:n(92)("./".concat(t,".svg"))})),m});t.a=function(e){var t=e.ingredients,n=[];for(var a in t)for(var o=0;o<Math.floor(t[a].amount/5);o++)n.push({id:a+o,type:a});var s=n.map(function(e){return r.a.createElement(i.CSSTransition,{key:e.id,classNames:{enter:c.a["fade-enter"],enterActive:c.a["fade-enter-active"],exit:c.a["fade-exit"],exitActive:c.a["fade-exit-active"]},timeout:300},r.a.createElement(u,{type:e.type}))});return r.a.createElement("div",{className:c.a.Pizza},r.a.createElement(u,null),r.a.createElement(i.TransitionGroup,null,s))}},120:function(e,t,n){e.exports={MakingPizza:"MakingPizza_MakingPizza__dyjnB"}},133:function(e,t,n){e.exports={OrderSummary:"OrderSummary_OrderSummary__2A4xL",ingredient:"OrderSummary_ingredient__32vQj",price:"OrderSummary_price__PIhx5"}},134:function(e,t,n){e.exports={PizzaControls:"PizzaControls_PizzaControls__1vu-W",select:"PizzaControls_select__3ukg9",slider:"PizzaControls_slider__2a-eA",gramValue:"PizzaControls_gramValue__3ZzJF"}},142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n(120),c=n.n(o),s=n(30),l=n(105),u=n(133),m=n.n(u),p=n(87),d=n(11),g=Object(d.f)(function(e){var t=e.ingredients,n=[];for(var a in t)n.push({type:a,amount:t[a].amount,price:t[a].price});var i=n.filter(function(e){return 0!==e.amount}).map(function(e){return r.a.createElement("p",{key:e.type,className:m.a.ingredient},r.a.createElement("strong",null,e.type,":")," ",e.amount," g,",r.a.createElement("strong",null,"$",e.price.toFixed(2)))}),o=e.startedPrice;return n.forEach(function(e){return o+=e.price}),0===i.length&&(i=r.a.createElement("p",{style:{textAlign:"center"}},"ADD INGREDIENTS")),r.a.createElement("div",{className:m.a.OrderSummary},r.a.createElement("div",null,r.a.createElement("p",{className:m.a.ingredient},r.a.createElement("strong",null,"dought:")," 300 g,",r.a.createElement("strong",null,"$7")),r.a.createElement("p",{className:m.a.ingredient},r.a.createElement("strong",null,"cheese:")," 60 g,",r.a.createElement("strong",null,"$5")),r.a.createElement("p",{className:m.a.ingredient},r.a.createElement("strong",null,"tomato:")," 20 g,",r.a.createElement("strong",null,"$2")),i),r.a.createElement("div",null,r.a.createElement("p",{className:m.a.price},"total price: ",r.a.createElement("strong",{style:{fontSize:"20px"}},o.toFixed(2))),e.isAuth?r.a.createElement(p.a,{btnType:"Primary",clicked:function(){return e.history.push("/checkout")},disabled:!1},"Make a order"):r.a.createElement(p.a,{btnType:"Primary",clicked:function(){return e.history.push("/auth")},disabled:!1},"Log In to make a order")))}),f=n(31),v=n(134),E=n.n(v),h=function(e){var t=Object(a.useState)("onion"),n=Object(f.a)(t,2),i=n[0],o=n[1];return r.a.createElement("div",{className:E.a.PizzaControls},r.a.createElement("select",{className:E.a.select,value:i,onChange:function(e){o(e.target.value)}},r.a.createElement("option",{value:"onion"},"onion"),r.a.createElement("option",{value:"salami"},"salami"),r.a.createElement("option",{value:"mushrooms"},"mushrooms"),r.a.createElement("option",{value:"olives"},"olives"),r.a.createElement("option",{value:"basil"},"basil"),r.a.createElement("option",{value:"pineapple"},"pineapple"),r.a.createElement("option",{value:"redPepper"},"red pepper"),r.a.createElement("option",{value:"greenPepper"},"green pepper")),r.a.createElement("input",{type:"range",min:"0",max:"100",value:e.ingredients[i].amount,className:E.a.slider,onChange:function(t){return e.onChangeRange(t.target.value,i)}}),r.a.createElement("p",{className:E.a.gramValue},e.ingredients[i].amount," grams"),r.a.createElement(p.a,{btnType:"Primary",clicked:e.resetIng},"Reset"),r.a.createElement(p.a,{btnType:"Primary",clicked:e.randomPizza},"Make random Pizza"))},_=n(29),z=n(104),y=n(14);t.default=Object(i.b)(function(e){return{ingredients:e.mp.ingredients,startedPrice:e.mp.startedPrice,error:e.mp.error,isAuth:null!==e.auth.token}},function(e){return{onInitIngredients:function(){return e(s.f())},onChangeIngredient:function(t,n){return e(s.b(t,n))},onResetIngredients:function(){return e(s.i())},onRandomPizza:function(){return e(s.h())}}})(Object(z.a)(function(e){Object(a.useEffect)(function(){e.onInitIngredients()},[]);var t=e.error?r.a.createElement("p",null,"Something went wrong: ",e.error.message):r.a.createElement(_.a,null);return e.ingredients&&(t=r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{onChangeRange:e.onChangeIngredient,ingredients:e.ingredients,resetIng:e.onResetIngredients,randomPizza:e.onRandomPizza}),r.a.createElement(l.a,{ingredients:e.ingredients}),r.a.createElement(g,{ingredients:e.ingredients,startedPrice:e.startedPrice,isAuth:e.isAuth}))),r.a.createElement("div",{className:c.a.MakingPizza},t)},y.a))},87:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(88),o=n.n(i);t.a=r.a.memo(function(e){return r.a.createElement("button",{className:[o.a.Button,o.a[e.btnType]].join(" "),type:"submit",onClick:e.clicked,disabled:e.disabled},e.children)})},88:function(e,t,n){e.exports={Button:"Button_Button__2bIZO",Primary:"Button_Primary__31ihf",Danger:"Button_Danger__1MG8u"}},89:function(e,t,n){e.exports=n.p+"static/media/basic.96deab51.svg"},91:function(e,t,n){e.exports={Pizza:"Pizza_Pizza__FsJCW","fade-enter":"Pizza_fade-enter__2flpu","fade-enter-active":"Pizza_fade-enter-active__1D0ry","fade-exit":"Pizza_fade-exit__1l0OZ","fade-exit-active":"Pizza_fade-exit-active__dQaYC"}},92:function(e,t,n){var a={"./basic.svg":89,"./basil.svg":93,"./dough.svg":94,"./greenPepper.svg":95,"./mushrooms.svg":96,"./olives.svg":97,"./onion.svg":98,"./pineapple.svg":99,"./redPepper.svg":100,"./salami.svg":101};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=92},93:function(e,t,n){e.exports=n.p+"static/media/basil.186aab84.svg"},94:function(e,t,n){e.exports=n.p+"static/media/dough.f2f89bc3.svg"},95:function(e,t,n){e.exports=n.p+"static/media/greenPepper.61480653.svg"},96:function(e,t,n){e.exports=n.p+"static/media/mushrooms.a60c76e0.svg"},97:function(e,t,n){e.exports=n.p+"static/media/olives.466ae5e9.svg"},98:function(e,t,n){e.exports=n.p+"static/media/onion.df14f2c7.svg"},99:function(e,t,n){e.exports=n.p+"static/media/pineapple.0d1687bc.svg"}}]);
//# sourceMappingURL=5.603ad4ec.chunk.js.map