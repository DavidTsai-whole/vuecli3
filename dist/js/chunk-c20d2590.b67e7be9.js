(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c20d2590"],{"1d97":function(e,t,a){},"1dde":function(e,t,a){var c=a("d039"),i=a("b622"),o=a("2d00"),r=i("species");e.exports=function(e){return o>=51||!c((function(){var t=[],a=t.constructor={};return a[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},3593:function(e,t,a){"use strict";a("1d97")},8418:function(e,t,a){"use strict";var c=a("c04e"),i=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var r=c(t);r in e?i.f(e,r,o(0,a)):e[r]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),i=a("d039"),o=a("e8b5"),r=a("861d"),n=a("7b0b"),s=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),b=a("b622"),f=a("2d00"),h=b("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",p=f>=51||!i((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),j=u("concat"),O=function(e){if(!r(e))return!1;var t=e[h];return void 0!==t?!!t:o(e)},m=!p||!j;c({target:"Array",proto:!0,forced:m},{concat:function(e){var t,a,c,i,o,r=n(this),u=d(r,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?r:arguments[t],O(o)){if(i=s(o.length),b+i>v)throw TypeError(g);for(a=0;a<i;a++,b++)a in o&&l(u,b,o[a])}else{if(b>=v)throw TypeError(g);l(u,b++,o)}return u.length=b,u}})},de8a:function(e,t,a){"use strict";a.r(t);var c=a("7a23");function i(e,t,a,i,o,r){var n=Object(c["resolveComponent"])("Navbar"),s=Object(c["resolveComponent"])("router-view"),l=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(n),Object(c["createVNode"])(s),Object(c["createVNode"])(l)],64)}var o={class:"container-fluid d-flex align-items-center justify-content-between"},r={class:"menu d-flex list-unstyled fw-bold fs-5 mb-0",ref:"menu"},n=Object(c["createStaticVNode"])('<li><a href="#/products"><i class="bi bi-grid-fill"></i> 商品列表</a></li><li><a href="#/about"><i class="bi bi-chat-dots"></i> 關於我們</a></li><li><a href="#/question"><i class="bi bi-question-circle"></i> 常見問題</a></li>',3),s={class:"d-lg-none"},l={href:""},d=Object(c["createVNode"])("i",{class:"bi bi-cart"},null,-1),u=Object(c["createTextVNode"])(" 購物車"),b={class:"d-lg-none"},f={href:""},h=Object(c["createVNode"])("i",{class:"bi bi-heart-fill"},null,-1),v=Object(c["createTextVNode"])(" 商品清單"),g={class:"menu-icon d-lg-flex list-unstyled fs-5 mb-0 d-none"},p=Object(c["createVNode"])("i",{class:"bi bi-cart"},null,-1),j={key:0,class:"cartNum"},O=Object(c["createVNode"])("i",{class:"bi bi-heart-fill ms-2"},null,-1),m={class:"favoriteNum"},N=Object(c["createVNode"])("span",{class:"d-lg-none text-white ms-auto me-2 zindex-1"},"Menu",-1);function V(e,t,a,i,V,x){var w=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("nav",{class:["nav fixed-top",V.classList.bg]},[Object(c["createVNode"])("div",o,[Object(c["createVNode"])("a",{href:"#/",class:["h1 fw-bold font-family-indie-flower",V.classList.text]},"CHILLBURGER",2),Object(c["createVNode"])("ul",r,[n,Object(c["createVNode"])("li",s,[Object(c["createVNode"])("a",l,[d,u,Object(c["createVNode"])("span",null," ("+Object(c["toDisplayString"])(V.cartData.length)+")",1)])]),Object(c["createVNode"])("li",b,[Object(c["createVNode"])("a",f,[h,v,Object(c["createVNode"])("span",null," ("+Object(c["toDisplayString"])(V.favoriteData.length)+")",1)])])],512),Object(c["createVNode"])("ul",g,[Object(c["createVNode"])("li",null,[Object(c["createVNode"])(w,{to:"/cart"},{default:Object(c["withCtx"])((function(){return[p]})),_:1}),0!==V.cartData.length?(Object(c["openBlock"])(),Object(c["createBlock"])("span",j,Object(c["toDisplayString"])(V.cartData.length),1)):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])(w,{to:"/favorite"},{default:Object(c["withCtx"])((function(){return[O]})),_:1}),Object(c["createVNode"])("span",m,Object(c["toDisplayString"])(V.favoriteData.length),1)])]),N,Object(c["createVNode"])("div",{class:"menu-toggle d-lg-none",ref:"menuIcon",onClick:t[1]||(t[1]=function(){return x.toggleIcon&&x.toggleIcon.apply(x,arguments)})},null,512)])],2)}a("99af");var x={data:function(){return{classList:{},cartData:[],favoriteData:JSON.parse(localStorage.getItem("favorite"))||[]}},props:["data"],inject:["emitter"],methods:{toggleIcon:function(){var e=this.$refs.menuIcon,t=this.$refs.menu;e.classList.toggle("active"),t.classList.toggle("active")},getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cartData=t.data.data.carts)}))}},watch:{$route:function(e,t){"/"!==e.path?(this.classList.bg="bg-orange",this.classList.text="text-primary"):(this.classList.bg="",this.classList.text="")}},mounted:function(){var e=this;this.getCart(),this.emitter.on("update-cart",(function(){e.getCart()})),this.emitter.on("update-favorite",(function(){e.favoriteData=JSON.parse(localStorage.getItem("favorite"))||[]})),this.emitter.on("pushNavbar",(function(t){e.classList=t}))}};x.render=V;var w=x,y={class:"footer bg-orange py-3"},k=Object(c["createStaticVNode"])('<div class="container"><div class="row align-items-center"><div class="col"><p class="text-white fw-bold">Copyright © 2021 CHILLBURGER All Rights Reserved.</p></div><div class="col"><ul class="d-flex justify-content-end list-unstyled fs-4 m-0"><li><a href="#"><i class="bi bi-envelope"></i></a></li><li class="mx-2"><a href="#"><i class="bi bi-facebook"></i></a></li><li><a href="#"><i class="bi bi-instagram"></i></a></li></ul></div></div></div>',1);function C(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",y,[k])}const L={};L.render=C;var D=L,B={components:{Navbar:w,Footer:D}};a("3593");B.render=i;t["default"]=B}}]);
//# sourceMappingURL=chunk-c20d2590.b67e7be9.js.map