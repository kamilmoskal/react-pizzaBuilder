(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.d(t,"l",function(){return r}),n.d(t,"k",function(){return a}),n.d(t,"e",function(){return o}),n.d(t,"n",function(){return i}),n.d(t,"m",function(){return c}),n.d(t,"p",function(){return u}),n.d(t,"q",function(){return l}),n.d(t,"o",function(){return s}),n.d(t,"i",function(){return d}),n.d(t,"j",function(){return f}),n.d(t,"h",function(){return m}),n.d(t,"g",function(){return g}),n.d(t,"f",function(){return p}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return h}),n.d(t,"a",function(){return b}),n.d(t,"b",function(){return _});var r="INIT_INGREDIENTS",a="INIT_INGREDIENTS_ERROR",o="CHANGE_INGREDIENT",i="RESET_INGREDIENTS",c="RANDOM_PIZZA",u="SUBMIT_ORDER_START",l="SUBMIT_ORDER_SUCCESS",s="SUBMIT_ORDER_ERROR",d="FETCH_ORDERS_START",f="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_ERROR",g="DELETE_ORDERS_SUCCESS",p="DELETE_ORDERS_ERROR",E="AUTH_START",h="AUTH_SUCCESS",b="AUTH_ERROR",_="AUTH_LOGOUT"},14:function(e,t,n){"use strict";var r=n(21),a=n.n(r).a.create({baseURL:"https://react-makingpizza.firebaseio.com/"});t.a=a},18:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__6EMQh",Open:"SideDrawer_Open__19zK1",Close:"SideDrawer_Close__3h6ul"}},22:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__1MwEt",active:"NavigationItem_active__34pUc"}},26:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1GZfc",DesktopOnly:"Toolbar_DesktopOnly__3sCgd"}},28:function(e,t,n){e.exports={Link:"Logo_Link__1VxRV",Logo:"Logo_Logo__2AGIc"}},29:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(49),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Spinner})}},30:function(e,t,n){"use strict";var r=n(14),a=n(1),o=function(){return function(e,t){r.a.get("/ingredients.json").then(function(t){e({type:a.l,ingredients:t.data})}).catch(function(t){e({type:a.k,error:t})})}},i=function(e,t){return{type:a.e,value:e,ingType:t}},c=function(){return{type:a.n}},u=function(){return function(e){e(c()),e({type:a.m})}},l=n(2),s=function(e,t){return function(n){n({type:a.p}),r.a.post("/orders.json?auth="+e,t).then(function(e){return n({type:a.q})}).catch(function(e){return n({type:a.o,error:e})})}},d=function(e,t){return function(n){n({type:a.i}),r.a.get("/orders.json?auth="+e+'&orderBy="userId"&equalTo="'+t+'"').then(function(e){var t=[];for(var r in e.data)t.push(Object(l.a)({},e.data[r],{id:r}));n({type:a.j,orders:t})}).catch(function(e){return n({type:a.h,error:e})})}},f=function(e,t){return function(n){r.a.delete("/orders/"+t+".json?auth="+e).then(function(e){n({type:a.g,id:t})}).catch(function(e){return n({type:a.f,error:e})})}},m=n(21),g=n.n(m),p=function(e,t,n,r){return function(o){o({type:a.c});var i={email:e,password:t,returnSecureToken:!0},c="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAGeTjdqblz2Z5tDZ8eY4G7H2wtnTV0N9Q";n||(c="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAGeTjdqblz2Z5tDZ8eY4G7H2wtnTV0N9Q"),g.a.post(c,i).then(function(e){if(r){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);sessionStorage.setItem("token",e.data.idToken),sessionStorage.setItem("userId",e.data.localId),sessionStorage.setItem("expirationDate",t)}o({type:a.d,token:e.data.idToken,userId:e.data.localId}),o(h(e.data.expiresIn))}).catch(function(e){o({type:a.a,error:e.response.data.error})})}},E=function(){return sessionStorage.removeItem("token"),sessionStorage.removeItem("userId"),sessionStorage.removeItem("expirationDate"),{type:a.b}},h=function(e){return function(t){setTimeout(function(){t(E())},1e3*e)}},b=function(){return function(e){var t=sessionStorage.getItem("token");if(t){var n=sessionStorage.getItem("userId"),r=new Date(sessionStorage.getItem("expirationDate"));new Date<r?e({type:a.d,token:t,userId:n}):e(E())}}};n.d(t,"f",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"i",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"j",function(){return s}),n.d(t,"e",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"a",function(){return p}),n.d(t,"g",function(){return E}),n.d(t,"c",function(){return b})},47:function(e,t,n){e.exports={BurgerToggle:"BurgerToggle_BurgerToggle__2sT92"}},48:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3JmOX"}},49:function(e,t,n){e.exports={Spinner:"Spinner_Spinner__2lIk4",load4:"Spinner_load4__llAEN"}},52:function(e,t,n){e.exports=n(85)},57:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(34),i=n.n(o),c=(n(57),n(35)),u=n(36),l=n(39),s=n(37),d=n(38),f=n(12),m=n(13),g=n(11),p=n(31),E=n(26),h=n.n(E),b=n(47),_=n.n(b),v=function(e){return a.a.createElement("div",{onClick:e.clicked,className:_.a.BurgerToggle},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},O=n(48),S=n.n(O),I=n(22),y=n.n(I),T=function(e){return a.a.createElement("li",{className:y.a.NavigationItem},a.a.createElement(m.c,{to:e.link,exact:e.exact,className:y.a.NavigationItem,activeClassName:y.a.active},e.children))},k=function(e){var t=e.isAuth;return a.a.createElement("ul",{className:S.a.NavigationItems},a.a.createElement(T,{link:"/",exact:!0},"Make Pizza"),a.a.createElement(T,{link:"/orders"},"Orders"),t?a.a.createElement(T,{link:"/logout"},"Logout"):a.a.createElement(T,{link:"/auth"},"Log In"))},j=n(28),R=n.n(j),D=function(){return a.a.createElement(m.b,{to:"/",className:R.a.Link},a.a.createElement("h1",{className:R.a.Logo},"makeYourPizza"))},N=function(e){return a.a.createElement("header",{className:h.a.Toolbar},a.a.createElement(D,null),a.a.createElement(v,{clicked:e.toggleSideDrawer}),a.a.createElement("nav",{className:h.a.DesktopOnly},a.a.createElement(k,{isAuth:e.isAuth})))},w=n(18),A=n.n(w),C=function(e){var t=[A.a.SideDrawer,A.a.Close];return e.open&&(t=[A.a.SideDrawer,A.a.Open]),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{style:{marginBottom:"40px"},onClick:e.closed},a.a.createElement(D,null)),a.a.createElement("nav",{onClick:e.closed},a.a.createElement(k,{isAuth:e.isAuth})))},x=Object(f.b)(function(e){return{isAuth:null!==e.auth.token}})(function(e){var t=Object(r.useState)(!1),n=Object(p.a)(t,2),o=n[0],i=n[1],c=function(){i(!o)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{toggleSideDrawer:c,isAuth:e.isAuth}),a.a.createElement(C,{open:o,closed:c,isAuth:e.isAuth}),a.a.createElement("main",null,e.children))}),z=n(30),U=n(29),L=a.a.lazy(function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,143))}),M=a.a.lazy(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,142))}),G=a.a.lazy(function(){return Promise.all([n.e(1),n.e(0),n.e(6)]).then(n.bind(null,141))}),B=a.a.lazy(function(){return n.e(7).then(n.bind(null,144))}),H=a.a.lazy(function(){return n.e(9).then(n.bind(null,140))}),P=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onCheckAuthentication()}},{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement(x,null,a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(U.a,null)},a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/",exact:!0,component:M}),a.a.createElement(g.b,{path:"/auth",component:L}),a.a.createElement(g.b,{path:"/logout",component:H}),a.a.createElement(g.b,{path:"/checkout",component:G}),a.a.createElement(g.b,{path:"/orders",component:B}),a.a.createElement(g.a,{to:"/"})))))}}]),t}(r.Component),Z=Object(f.b)(null,function(e){return{onCheckAuthentication:function(){return e(z.c())}}})(P),q=n(10),F=n(2),V=n(1),J={token:null,userId:null,loading:!1,error:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.c:return Object(F.a)({},e,{loading:!0});case V.d:return Object(F.a)({},e,{token:t.token,userId:t.userId,loading:!1,error:null});case V.a:return Object(F.a)({},e,{loading:!1,error:t.error});case V.b:return Object(F.a)({},e,{token:null,userId:null});default:return e}},Y=n(17),K={onion:.07,salami:.1,mushrooms:.08,olives:.09,basil:.09,pineapple:.1,redPepper:.07,greenPepper:.07},X={ingredients:null,startedPrice:14,ingSelected:!1,error:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.l:return Object(F.a)({},e,{ingredients:t.ingredients});case V.k:return Object(F.a)({},e,{error:t.error});case V.e:return Object(F.a)({},e,{ingredients:Object(F.a)({},e.ingredients,Object(Y.a)({},t.ingType,{amount:t.value,price:t.value*K[t.ingType]})),ingSelected:!0});case V.n:var n={};for(var r in e.ingredients)n[r]={amount:0,price:0};return Object(F.a)({},e,{ingredients:n,ingSelected:!1});case V.m:var a=[];for(var o in e.ingredients)a.push(o);for(var i=Math.floor(8*Math.random())+1,c={},u=function(e){var t=Math.floor(60*Math.random())+20,n=a[Math.floor(Math.random()*a.length)];c=Object(F.a)({},c,Object(Y.a)({},n,{amount:t,price:t*K[n]})),a=a.filter(function(e){return e!==n})},l=0;l<i;l++)u();return console.log(i),Object(F.a)({},e,{ingredients:Object(F.a)({},e.ingredients,c),ingSelected:!0});default:return e}},$={orders:[],loading:!1,error:null,ordered:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.p:return Object(F.a)({},e,{loading:!0});case V.q:return Object(F.a)({},e,{loading:!1,error:null,ordered:!0});case V.o:return Object(F.a)({},e,{loading:!1,error:t.error,ordered:!1});case V.i:return Object(F.a)({},e,{loading:!0});case V.j:return Object(F.a)({},e,{orders:t.orders,ordered:!1,loading:!1,error:null});case V.h:return Object(F.a)({},e,{ordered:!1,loading:!1,error:t.error});case V.g:return Object(F.a)({},e,{orders:e.orders.filter(function(e){return e.id!==t.id}),loading:!1,error:null});case V.f:return Object(F.a)({},e,{loading:!1,error:t.error});default:return e}},te=Object(q.c)({auth:Q,mp:W,order:ee}),ne=n(50),re=q.d,ae=Object(q.e)(te,re(Object(q.a)(ne.a)));i.a.render(a.a.createElement(f.a,{store:ae},a.a.createElement(Z,null)),document.getElementById("root"))}},[[52,3,4]]]);
//# sourceMappingURL=main.d009deb4.chunk.js.map