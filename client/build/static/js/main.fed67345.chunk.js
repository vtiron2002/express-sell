(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(59),l=a(16),i=a(2);var s=function(){var e=Object(i.c)((function(e){return e})),t=e.cart,a=e.user;return r.a.createElement("div",{className:"header"},r.a.createElement("label",{htmlFor:"menu"},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("input",{type:"checkbox",name:"",id:"menu"}),r.a.createElement(l.b,{to:"/",className:"header__logo"},"Express ",r.a.createElement("strong",null,"Sell")),r.a.createElement("ul",null,r.a.createElement("div",{className:"header__buttons"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:"/profile"},a.name),r.a.createElement(l.b,{to:"/orders"},"My Orders")):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:"/signup"},"Sign Up"),r.a.createElement(l.b,{to:"/login"},"Login")),r.a.createElement(l.b,{to:"/cart"},0!==t.length&&r.a.createElement("span",{className:"amount"},t.length),r.a.createElement("i",{className:"fas fa-shopping-cart"})))))},o=a(12),m=a(5),u=a.n(m),d=a(13),p=a(4),E=a(14),h=a.n(E);var b=function(e){var t=e.history;return r.a.createElement("button",{onClick:function(){return t.goBack()},className:"go-back"},r.a.createElement("i",{className:"fas fa-chevron-left"}),"go back")},f=a(89),v=a(8),y=function(e){return new Array(e).fill(0).map((function(e,t){return t+1}))},g=function(e){return function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}(e.toFixed(2))},_=function e(){Object(f.a)(this,e)};_.login=v.a({email:v.c().email().required("Email is required"),password:v.c().required("Password is required")}),_.signUp=v.a({name:v.c().required("Name is required").min(3),email:v.c().email().required("Email is required"),password:v.c().min(8).required("Password is required"),confirmPassword:v.c().oneOf([v.b("password"),null],"Passwords must match")}),_.profileChange=v.a({name:v.c().min(3).required("Name cant be empty"),email:v.c().email().required(),password:v.c().min(8)}),_.shipping=v.a({address:v.c().required("Must provide address"),city:v.c().required("Must provide city"),state:v.c().required("Must provide state"),zipCode:v.c().min(5,"Must be at least 5 digits").required("Must provide zip code"),country:v.c().required("Must provide country")});var N=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,c,l,i,s,o,m,d,p,E,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.values,n=t.type,r=t.setError,c=t.dispatch,l=t.history,i=t.location,e.next=3,h.a.post("/auth/".concat(n),a);case 3:if(s=e.sent,!(o=s.data).err){e.next=7;break}return e.abrupt("return",r(o.err));case 7:m=o._id,d=o.isAdmin,p=o.name,E=o.email,b=o.token,r(""),c({type:"SET_USER",payload:{_id:m,isAdmin:d,name:p,email:E}}),localStorage.setItem("token",b),i.state?l.push("/checkout/shipping"):l.push("/");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O="Bearer ".concat(localStorage.token),S=a(6);var j=function(e){var t=Object(S.g)().id,a=Object(i.c)((function(e){return e})),c=a.item,l=a.cart,s=Object(i.b)(),m=Object(n.useState)(1),E=Object(p.a)(m,2),f=E[0],v=E[1],g=function(){var e=Object(d.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/products/".concat(t));case 2:a=e.sent,n=a.data,s({type:"SET_ITEM",payload:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return g(),function(){return s({type:"SET_ITEM",payload:{}})}}),[]);var _=0===c.qty,N=l.find((function(e){return e._id===c._id})),O=!!l.length&&!(!N&&!_);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{history:e.history}),c&&r.a.createElement("div",{className:"details"},r.a.createElement("img",{src:c.image,alt:"",className:"details__img"}),r.a.createElement("div",{className:"details__desc"},r.a.createElement("span",{className:"name"},c.name),r.a.createElement("div",{className:"price"},"$",c.price),r.a.createElement("p",{className:"description"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae tenetur veritatis minima esse dolore aut odio commodi magni ad!")),r.a.createElement("div",{className:"details__addToCart"},r.a.createElement("div",{className:"price"},"Price: $",c.price),r.a.createElement("div",{className:"availability"},"Availability: ",0!==c.qty?"".concat(c.qty," in stock"):"out of stock"),r.a.createElement("div",{className:"quantity"},"Quantity:"," ",r.a.createElement("select",{value:f,onChange:function(e){return v(e.target.value)}},y(c.qty).map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement("button",{disabled:O,onClick:function(){var e=Object(o.a)(Object(o.a)({},c),{},{selectedQty:Math.floor(f)});s({type:"ADD_TO_CART",payload:e})},className:"addToCart"},"Add to Cart"))))},w=a(29);var k=function(e){var t=e.i,a=e.props,n=e.cart.find((function(e){return e._id===t._id}));return r.a.createElement("div",{onClick:function(){return a.history.push("/details/".concat(t._id))},className:"item"},r.a.createElement("img",{src:t.image,alt:""}),r.a.createElement("div",{className:"item__body"},r.a.createElement("div",{className:"name"},t.name),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"price"},"$",t.price),n&&r.a.createElement("div",{className:"inCart"},"In cart"))))},C=function(e){var t=Object(i.c)((function(e){return e})),a=t.items,c=t.cart,l=Object(n.useRef)(),s=Object(i.b)(),o=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/products");case 2:t=e.sent,a=t.data,s({type:"SET_ITEMS",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){o()}),[]);var m=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=l.current.value){e.next=4;break}return e.abrupt("return",o());case 4:return e.next=6,h.a.get("/api/products/search/".concat(a));case 6:n=e.sent,r=n.data,s({type:"SET_ITEMS",payload:r});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"top__sort"},r.a.createElement("select",{onChange:function(e){var t=e.target.value,n=Object(w.a)(a).sort((function(e,a){return"lowHigh"===t?e.price>a.price:e.price<a.price}));s({type:"SET_ITEMS",payload:n})}},r.a.createElement("option",{value:""},"Sort by"),r.a.createElement("option",{value:"lowHigh"},"Low to High"),r.a.createElement("option",{value:"highLow"},"High to Low"))),r.a.createElement("form",{onSubmit:m,className:"top__searchbar"},r.a.createElement("input",{type:"text",placeholder:"search..",ref:l}),r.a.createElement("button",null,r.a.createElement("i",{className:"fas fa-search"})))),r.a.createElement("div",{className:"home__items"},a&&a.map((function(t){return r.a.createElement(k,{key:t._id,i:t,props:e,cart:c})}))))},T=a(19),x=a(70),A=function(e){var t=e.label,a=Object(x.a)(e,["label"]),n=Object(T.b)(a),c=Object(p.a)(n,2),l=c[0],i=c[1];return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:l.name},t),r.a.createElement("input",Object.assign({id:l.name,className:"form-control"},l,a)),i.touched&&i.error?r.a.createElement("div",{className:"error"},i.error):null)};var P=function(e){var t=e.location,a=e.history,c=Object(n.useState)(""),l=Object(p.a)(c,2),s=l[0],o=l[1],m=Object(i.b)();return r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"signup__container"},r.a.createElement("h2",{className:"signup__title"},"Create a new account"),r.a.createElement(T.a,{initialValues:{name:"",email:"",password:"",confirmPassword:""},onSubmit:function(e){N({values:e,type:"signup",setError:o,dispatch:m,history:a,location:t})},validationSchema:_.signUp},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(A,{name:"name",type:"text",label:"Name"}),r.a.createElement(A,{name:"email",type:"email",label:"Email"}),r.a.createElement(A,{name:"password",type:"password",label:"Password"}),r.a.createElement(A,{name:"confirmPassword",type:"password",label:"Confirm password"}),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"error"},s),r.a.createElement("br",null)),r.a.createElement("button",{className:"loginBtn"},"Create an account"))})),r.a.createElement("hr",null),r.a.createElement("p",null,"Already have an account?"),r.a.createElement("button",{className:"loginBtn",onClick:function(){if(t.state)return a.push("/login",{checkout:!0});a.push("/login")}},"Log in")))};var R=function(e){var t=e.history,a=e.location,c=Object(n.useState)(""),l=Object(p.a)(c,2),s=l[0],o=l[1],m=Object(i.b)();return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__container"},r.a.createElement("h2",{className:"login__title"},"Login"),r.a.createElement(T.a,{initialValues:{email:"",password:""},onSubmit:function(e,n){return N({values:e,type:"login",setError:o,dispatch:m,history:t,location:a})},validationSchema:_.login},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(A,{name:"email",type:"email",label:"Email"}),r.a.createElement(A,{name:"password",type:"password",label:"Password"}),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"error"},s),r.a.createElement("br",null)),r.a.createElement("button",{className:"mainBtn"},"Log in"))})),r.a.createElement("hr",null),r.a.createElement("p",null,"New to Express Sell?"),r.a.createElement("button",{className:"createAccountBtn",onClick:function(){if(a.state)return t.push("/signup",{checkout:!0});t.push("/signup")}},"Create an account")))};var q=function(e){var t=e.i,a=e.removeFromCart,c=e.cart,s=Object(n.useState)(t.selectedQty),m=Object(p.a)(s,2),u=m[0],d=m[1],E=Object(i.b)();return r.a.createElement("div",{className:"cart__item"},r.a.createElement("img",{src:t.image,alt:"",className:"cart__item__img"}),r.a.createElement("div",{className:"middle"},r.a.createElement(l.b,{to:"/details/".concat(t._id),className:"name"},t.name),r.a.createElement("div",{className:"qty"},"Qty:"," ",r.a.createElement("select",{onChange:function(e){var a=Math.floor(e.target.value);d(a);var n=c.map((function(e){return e._id===t._id?Object(o.a)(Object(o.a)({},e),{},{selectedQty:a}):Object(o.a)({},e)}));E({type:"SET_CART",payload:n})},value:u},y(t.qty).map((function(e){return r.a.createElement("option",{key:e},e)}))))),r.a.createElement("div",{className:"price"},"$",t.price,r.a.createElement("button",{onClick:function(){return a(t._id)}},"Remove")))},M=function(e){var t=Object(i.c)((function(e){return e})),a=t.cart,n=t.user,c=Object(i.b)(),l=function(e){c({type:"REMOVE_FROM_CART",payload:e})},s=a.reduce((function(e,t){return e+t.price*t.selectedQty}),0),o=0===a.length;return r.a.createElement("div",{className:"cart"},r.a.createElement(b,{history:e.history}),r.a.createElement("h2",null,"Shopping Cart (",a.length,")"),!o&&r.a.createElement("div",{className:"cart__grid"},r.a.createElement("div",{className:"cart__items"},r.a.createElement("div",{className:"price-title"},"Price"),a.map((function(e){return r.a.createElement(q,{key:e._id,i:e,removeFromCart:l,cart:a})}))),r.a.createElement("div",{className:"cart__subtotal"},r.a.createElement("h3",null,"Subtotal (",a.length," item",a.length>1&&"s","): $",g(s)),r.a.createElement("button",{onClick:function(){return c({type:"CLEAR_CART"})},className:"clearCart"},"\xd7 Clear Cart"),r.a.createElement("button",{onClick:function(){return e.history.push("/".concat(n?"checkout/shipping":"login"),{checkout:!0})},className:"proceedToCheckout"},"Proceed to checkout"))))};var I=function(e){var t=e.history,a=Object(i.b)(),n=Object(i.c)((function(e){return e})).checkout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{history:t}),r.a.createElement("div",{className:"shipping"},r.a.createElement("div",{className:"shipping__container"},r.a.createElement("h2",{className:"shipping__title"},"Shipping"),r.a.createElement(T.a,{initialValues:n.shipping,onSubmit:function(e,n){a({type:"SET_SHIPPING_ADDRESS",payload:e}),t.push("/checkout/payment")},validationSchema:_.shipping},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(A,{name:"address",type:"text",label:"Address"}),r.a.createElement(A,{name:"city",type:"text",label:"City"}),r.a.createElement(A,{name:"state",type:"text",label:"State"}),r.a.createElement(A,{name:"zipCode",type:"text",label:"Zip code"}),r.a.createElement(A,{name:"country",type:"text",label:"Country"}),r.a.createElement("button",{className:"nextBtn"},"Next"))})))))},D=function(e){var t=e.label,a=Object(x.a)(e,["label"]),n=Object(T.b)(a),c=Object(p.a)(n,1)[0];return r.a.createElement("div",{className:"radio-group"},r.a.createElement("input",Object.assign({id:a.value,className:"form-control",type:"radio"},c,a)),r.a.createElement("label",{htmlFor:a.value},t))};var F=function(e){var t=e.history,a=Object(n.useState)(!1),c=Object(p.a)(a,2),l=c[0],s=c[1],o=Object(i.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{history:t}),r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h2",{className:"payment__title"},"Payment"),r.a.createElement(T.a,{initialValues:{payment:""},onSubmit:function(e,a){if(!e.payment)return s(!0);o({type:"SET_PAYMENT_METHOD",payload:e}),t.push("/checkout/placeorder")}},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(D,{name:"payment",label:"PayPal",value:"PayPal"}),r.a.createElement(D,{name:"payment",label:"Credit Card",value:"Credit Card"}),r.a.createElement(D,{name:"payment",label:"Debit Card",value:"Debit Card"}),r.a.createElement("button",{className:"nextBtn"},"Next"))})),r.a.createElement("div",{className:"error"},l&&"Select a payment method"))))};var L=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],s=c[1],o=Object(i.b)(),m=Object(i.c)((function(e){return e})),E=m.cart,b=m.checkout,f=m.user,v=b.shipping,y=v.address,_=v.city,N=v.zipCode,S=v.country,j=v.state,w=E.reduce((function(e,t){return e+t.price*t.selectedQty}),0),k=w>100?0:10,C=.15*w,T=w+k+C,x=function(){var e=Object(d.a)(u.a.mark((function e(){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={user:f._id,shipping:b.shipping,payment:b.payment,total:parseFloat(T.toFixed(2)),products:E.map((function(e){return e._id}))},e.next=3,h.a.post("/api/orders/place",{order:a,itemsPlaced:E.map((function(e){return{id:e._id,selectedQty:e.selectedQty,qty:e.qty}}))},{headers:{Authorization:O}});case 3:n=e.sent,200===(r=n.data).status?(t.push("/checkout/orderplaced/".concat(r.order)),o({type:"CLEAR_CART"})):s("Order couldn't be placed.");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"placeOrder"},r.a.createElement("div",{className:"placeOrder__info"},r.a.createElement("div",{className:"shipping"},r.a.createElement("h4",{className:"title"},"Shipping"),r.a.createElement("ul",null,r.a.createElement("li",null,f.name),r.a.createElement("li",null,y),r.a.createElement("li",null,_,", ",j," ",N),r.a.createElement("li",null,S))),r.a.createElement("div",{className:"payment"},r.a.createElement("h4",{className:"title"},"Payment"),r.a.createElement("p",null,"Payment method: ",b.payment)),r.a.createElement("div",{className:"orders"},r.a.createElement("h4",{className:"title"},r.a.createElement("span",null,"Your orders (",E.length,")"),r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"ordersGrid"},E.map((function(e){return r.a.createElement(r.a.Fragment,{key:e._id},r.a.createElement("hr",null),r.a.createElement("div",{className:"order"},r.a.createElement("img",{src:e.image,alt:"",className:"order__img"}),r.a.createElement("div",{className:"order__info"},r.a.createElement("h5",{className:"name"},e.name),r.a.createElement("p",null,"Qty: ",e.selectedQty)),r.a.createElement("div",{className:"price"},"$",e.price)))}))))),r.a.createElement("div",{className:"placeOrder__summary"},l&&r.a.createElement("div",{className:"error"},l),r.a.createElement("button",{onClick:x,className:"placeOrderBtn"},"Place order"),r.a.createElement("h4",{className:"title"},"Order Summary"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Items"),r.a.createElement("span",null,"$",g(w))),r.a.createElement("li",null,r.a.createElement("span",null,"Shipping"),r.a.createElement("span",null,"$",g(k))),r.a.createElement("li",null,r.a.createElement("span",null,"Tax"),r.a.createElement("span",null,"$",g(C))),r.a.createElement("li",null,r.a.createElement("span",null,"Order Total"),r.a.createElement("span",null,"$",g(T))))))};var U=function(){var e=Object(S.g)().orderid,t=Object(n.useState)(null),a=Object(p.a)(t,2),c=a[0],i=a[1],s=function(){var t=Object(d.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/api/orders/".concat(e),{headers:{Authorization:O}});case 2:a=t.sent,n=a.data,i(n.order);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),c?r.a.createElement("div",{className:"orderplaced"},r.a.createElement("h1",null,"Thank you for your order."),r.a.createElement("h3",null,"Your order has been placed!"),r.a.createElement("p",null,"Order ID: ",c._id),r.a.createElement("br",null),"View your orders ",r.a.createElement(l.b,{to:"/orders"},"here")):null};var B=function(e){var t=e.mine,a=void 0!==t&&t,n=e.data;return r.a.createElement("div",{style:{overflowX:"auto"}},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,!a&&r.a.createElement("th",null,"User"),r.a.createElement("th",null,"Qty"),r.a.createElement("th",null,"Payment"),r.a.createElement("th",null,"Placed On"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Delivered"),r.a.createElement("th",null,"Total"))),r.a.createElement("tbody",null,Object(w.a)(n).reverse().map((function(e){return r.a.createElement("tr",{key:e._id},!a&&r.a.createElement("td",null,e.user.name),r.a.createElement("td",null,e.products.length),r.a.createElement("td",null,e.payment),r.a.createElement("td",null,new Date(e.placedOn).toLocaleDateString()),r.a.createElement("td",null,function(e){var t,a,n=e.address,r=e.city,c=e.zipCode,l=e.country,i=e.state;return t="".concat(n," ").concat(r,", ").concat(i," ").concat(c," ").concat(l),(a=11)<=3?t.slice(0,a)+"...":a>=t.length?t:(a-=3,t.slice(0,a)+"...")}(e.shipping)),r.a.createElement("td",null,e.delivered?"Yes":"No"),r.a.createElement("td",null,"$",g(e.total)))})))))},Q=function(e){e.history;var t=Object(i.c)((function(e){return e})).user,a=r.a.useState([]),n=Object(p.a)(a,2),c=n[0],l=n[1],s=r.a.useState([]),o=Object(p.a)(s,2),m=o[0],E=o[1],b=function(){var e=Object(d.a)(u.a.mark((function e(){var a,n,r,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>0&&void 0!==c[0]&&c[0],e.next=3,h.a.get("/api/orders/".concat(a?"mine/".concat(t._id):"all"),{headers:{Authorization:O}});case 3:if(n=e.sent,r=n.data,!a){e.next=7;break}return e.abrupt("return",E(r));case 7:return e.abrupt("return",l(r));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){t.isAdmin?(b(),b(!0)):b(!0)}),[]),r.a.createElement("div",{className:"orders"},r.a.createElement("div",{className:"your-orders"},r.a.createElement("h2",null,"My Orders"),r.a.createElement(B,{data:m,mine:!0})),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),t.isAdmin&&r.a.createElement("div",{className:"all-orders"},r.a.createElement("h2",null,"All Orders"),r.a.createElement(B,{data:c})))};var $=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(""),m=Object(p.a)(o,2),E=m[0],b=m[1],f=Object(i.b)(),v=Object(i.c)((function(e){return e})).user,y={name:v.name,email:v.email,password:""};return r.a.createElement("div",{className:"profile"},r.a.createElement("h2",null,"My profile"),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(T.a,{initialValues:y,validationSchema:_.profileChange,onSubmit:function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/auth/edit/".concat(v._id),t,{headers:{Authorization:O}});case 2:if(a=e.sent,!(n=a.data).err){e.next=6;break}return e.abrupt("return",s(n.err));case 6:f({type:"SET_USER",payload:n.newUser}),b("Profile Updated");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(A,{name:"name",type:"text",label:"Name"}),r.a.createElement(A,{name:"email",type:"email",label:"Email"}),r.a.createElement(A,{name:"password",type:"password",label:"Password"}),l&&r.a.createElement("div",{className:"error"},l),E&&r.a.createElement("div",{style:{color:"green"},className:"message"},E),r.a.createElement("button",null,"Save Changes"))})),r.a.createElement("button",{onClick:function(){delete localStorage.user,delete localStorage.token,t.push("/"),f({type:"CLEAR_USER"})},className:"signOutBtn"},"Sign out"))};var z=function(){var e=Object(i.c)((function(e){return e})),t=e.user,a=e.checkout,n=a.shipping,c=a.payment;return r.a.useEffect((function(){}),[]),r.a.createElement(l.a,null,r.a.createElement(s,null),r.a.createElement("div",{className:"container"},r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/",component:C}),r.a.createElement(S.b,{path:"/signup",render:function(e){return t?r.a.createElement(S.a,{to:"/"}):r.a.createElement(P,e)}}),r.a.createElement(S.b,{path:"/login",render:function(e){return t?r.a.createElement(S.a,{to:"/"}):r.a.createElement(R,e)}}),r.a.createElement(S.b,{path:"/cart",component:M}),r.a.createElement(S.b,{path:"/details/:id",component:j}),r.a.createElement(S.b,{path:"/checkout/shipping",component:I}),r.a.createElement(S.b,{path:"/checkout/payment",component:F}),r.a.createElement(S.b,{path:"/checkout/placeorder",render:function(e){return n&&c?r.a.createElement(L,e):r.a.createElement(S.a,{to:"/checkout/shipping"})}}),r.a.createElement(S.b,{path:"/checkout/orderplaced/:orderid",component:U}),r.a.createElement(S.b,{path:"/orders",render:function(){return t?r.a.createElement(Q,null):r.a.createElement(S.a,{to:"/"})}}),r.a.createElement(S.b,{path:"/profile",render:function(e){return t?r.a.createElement($,e):r.a.createElement(S.a,{to:"/login"})}}))))},V=(a(121),a(43)),H=function(e,t){localStorage.setItem(e,JSON.stringify(t))},J=JSON.parse(localStorage.getItem("cart"))||[],X=JSON.parse(localStorage.getItem("user"))||null,Y=JSON.parse(localStorage.getItem("shipping"))||{address:"",city:"",zipCode:"",country:"",state:""},G=Object(V.b)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEM":return Object(o.a)({},t.payload);default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEMS":return Object(w.a)(t.payload);default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=[].concat(Object(w.a)(e),[t.payload]);return H("cart",a),a;case"REMOVE_FROM_CART":var n=e.filter((function(e){return e._id!==t.payload}));return H("cart",n),n;case"SET_CART":return H("cart",t.payload),Object(w.a)(t.payload);case"CLEAR_CART":return localStorage.removeItem("cart"),[];default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return localStorage.setItem("user",JSON.stringify(Object(o.a)({},t.payload))),Object(o.a)({},t.payload);case"CLEAR_USER":return null;default:return e}},checkout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shipping:Y},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SHIPPING_ADDRESS":return localStorage.setItem("shipping",JSON.stringify(Object(o.a)({},t.payload))),Object(o.a)(Object(o.a)({},e),{},{shipping:t.payload});case"SET_PAYMENT_METHOD":return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}}),Z=Object(V.c)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(c.render)(r.a.createElement(i.a,{store:Z},r.a.createElement(z,null)),document.getElementById("root"))},93:function(e,t,a){e.exports=a(122)}},[[93,1,2]]]);
//# sourceMappingURL=main.fed67345.chunk.js.map