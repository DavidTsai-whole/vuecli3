(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2440d066"],{"99af":function(e,t,c){"use strict";var o=c("23e7"),r=c("d039"),a=c("e8b5"),n=c("861d"),s=c("7b0b"),d=c("50c4"),i=c("8418"),l=c("65f0"),u=c("1dde"),p=c("b622"),b=c("2d00"),f=p("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",w=b>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),v=u("concat"),j=function(e){if(!n(e))return!1;var t=e[f];return void 0!==t?!!t:a(e)},O=!w||!v;o({target:"Array",proto:!0,forced:O},{concat:function(e){var t,c,o,r,a,n=s(this),u=l(n,0),p=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?n:arguments[t],j(a)){if(r=d(a.length),p+r>m)throw TypeError(h);for(c=0;c<r;c++,p++)c in a&&i(u,p,a[c])}else{if(p>=m)throw TypeError(h);i(u,p++,a)}return u.length=p,u}})},a55b:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),r={class:"container"},a={class:"main row"},n={class:"col-8 col-md-5 m-auto"},s={class:"loginForm p-5"},d=Object(o["createVNode"])("h1",{class:"fw-bold text-center"},"登入頁面",-1),i=Object(o["createVNode"])("label",{for:"account"},"帳號",-1),l=Object(o["createVNode"])("label",{for:"password"},"密碼",-1),u=Object(o["createVNode"])("div",{class:"form-check mt-3"},[Object(o["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(o["createVNode"])("label",{class:"form-check-label ms-1",for:"exampleCheck1"},"記住我")],-1),p={class:"d-grid mt-2"};function b(e,t,c,b,f,m){return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("form",s,[d,i,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"email",id:"account",placeholder:"email",class:"form-control mb-2","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.user.username=e})},null,512),[[o["vModelText"],f.user.username]]),l,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"password",id:"password",placeholder:"password",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return f.user.password=e})},null,512),[[o["vModelText"],f.user.password]]),u,Object(o["createVNode"])("div",p,[Object(o["createVNode"])("button",{class:"btn btn-lg btn-primary",onClick:t[3]||(t[3]=function(){return m.goToAdmin&&m.goToAdmin.apply(m,arguments)})},"登入")])])])])])}c("99af");var f={data:function(){return{user:{}}},methods:{goToAdmin:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(t,this.user).then((function(t){if(t.data.success){var c=t.data,o=c.token,r=c.expired;document.cookie="hexToken=".concat(o,";expires=").concat(new Date(r)),e.$router.push("/admin/products")}else alert(t.data.message)})).catch((function(e){console.log(e)}))}}};f.render=b;t["default"]=f}}]);
//# sourceMappingURL=chunk-2440d066.89632911.js.map