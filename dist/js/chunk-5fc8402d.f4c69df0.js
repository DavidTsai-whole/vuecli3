(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fc8402d"],{"1dde":function(e,t,c){var o=c("d039"),s=c("b622"),a=c("2d00"),r=s("species");e.exports=function(e){return a>=51||!o((function(){var t=[],c=t.constructor={};return c[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,c){"use strict";var o=c("c04e"),s=c("9bf2"),a=c("5c6c");e.exports=function(e,t,c){var r=o(t);r in e?s.f(e,r,a(0,c)):e[r]=c}},"99af":function(e,t,c){"use strict";var o=c("23e7"),s=c("d039"),a=c("e8b5"),r=c("861d"),n=c("7b0b"),l=c("50c4"),i=c("8418"),d=c("65f0"),b=c("1dde"),f=c("b622"),u=c("2d00"),j=f("isConcatSpreadable"),p=9007199254740991,O="Maximum allowed index exceeded",h=u>=51||!s((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),y=b("concat"),N=function(e){if(!r(e))return!1;var t=e[j];return void 0!==t?!!t:a(e)},V=!h||!y;o({target:"Array",proto:!0,forced:V},{concat:function(e){var t,c,o,s,a,r=n(this),b=d(r,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?r:arguments[t],N(a)){if(s=l(a.length),f+s>p)throw TypeError(O);for(c=0;c<s;c++,f++)c in a&&i(b,f,a[c])}else{if(f>=p)throw TypeError(O);i(b,f++,a)}return b.length=f,b}})},b0c0:function(e,t,c){var o=c("83ab"),s=c("9bf2").f,a=Function.prototype,r=a.toString,n=/^\s*function ([^ (]*)/,l="name";o&&!(l in a)&&s(a,l,{configurable:!0,get:function(){try{return r.call(this).match(n)[1]}catch(e){return""}}})},cf2a:function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),s={class:"finalOrder"},a={key:0,class:"banner bg-cover"},r={key:1,class:"bannerSuccess bg-cover"},n=Object(o["createVNode"])("section",{class:"d-flex flex-column align-items-center py-5"},[Object(o["createVNode"])("h1",{class:"fw-bold text-white fs-7"},"訂單完成"),Object(o["createVNode"])("p",{class:"fw-bold text-white fs-2"},"謝謝您的訂購 !"),Object(o["createVNode"])("p",{class:"fw-bold text-white fs-2"},"訂單預計在1 ~ 2個小時內送達。")],-1),l={class:"container my-5"},i={class:"row d-flex justify-content-center"},d={class:"col-md-7"},b={class:"information text-center"},f=Object(o["createVNode"])("h2",{class:"fw-bold"},"訂單資訊",-1),u=Object(o["createVNode"])("hr",{class:"bg-dark",style:{opacity:"1"}},null,-1),j={class:"list-unstyled"},p={class:"d-flex justify-content-between mb-1"},O=Object(o["createVNode"])("span",{class:"fs-5 fw-bold"},"顧客姓名",-1),h={class:"fs-5 fw-bold"},y={class:"d-flex justify-content-between mb-1"},N=Object(o["createVNode"])("span",{class:"fs-5 fw-bold"},"電子信箱",-1),V={class:"fs-5 fw-bold"},w={class:"d-flex justify-content-between mb-1"},v=Object(o["createVNode"])("span",{class:"fs-5 fw-bold"},"聯絡方式",-1),g={class:"fs-5 fw-bold"},x={class:"d-flex justify-content-between"},k=Object(o["createVNode"])("span",{class:"fs-5 fw-bold"},"送達地址",-1),m={class:"fs-5 fw-bold"},B=Object(o["createVNode"])("hr",null,null,-1),S={class:"list-unstyled"},L={class:"d-flex justify-content-between mb-1"},D=Object(o["createVNode"])("span",{class:"fs-5 fw-bold"},"付款金額",-1),$={class:"fs-5 fw-bold"},T={class:"d-flex justify-content-between"},C=Object(o["createVNode"])("span",{class:"fs-5 fw-bold"},"付款狀態",-1),z={key:0,class:"fs-5 fw-bold text-danger"},E={key:1,class:"fs-5 fw-bold text-success"},F=Object(o["createVNode"])("hr",null,null,-1),J={key:0,class:"btn d-flex justify-content-between"},M=Object(o["createVNode"])("a",{href:"#/",class:"btn-custom2 hvr-shutter-out-horizontal"},[Object(o["createVNode"])("i",{class:"bi bi-reply-fill"}),Object(o["createTextVNode"])("回首頁")],-1),A={key:1,class:"btn text-center"},I=Object(o["createVNode"])("a",{href:"#/",class:"btn-custom2 hvr-shutter-out-horizontal"},[Object(o["createVNode"])("i",{class:"bi bi-reply-fill"}),Object(o["createTextVNode"])("回首頁")],-1);function q(e,t,c,q,G,H){var K=Object(o["resolveComponent"])("Loading");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(K,{active:G.isLoading},null,8,["active"]),Object(o["createVNode"])("div",s,[!1===G.paySuccess?(Object(o["openBlock"])(),Object(o["createBlock"])("div",a)):(Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[n])),Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])("div",d,[Object(o["createVNode"])("div",b,[f,u,Object(o["createVNode"])("ul",j,[Object(o["createVNode"])("li",p,[O,Object(o["createVNode"])("span",h,Object(o["toDisplayString"])(G.order.user.name),1)]),Object(o["createVNode"])("li",y,[N,Object(o["createVNode"])("span",V,Object(o["toDisplayString"])(G.order.user.email),1)]),Object(o["createVNode"])("li",w,[v,Object(o["createVNode"])("span",g,Object(o["toDisplayString"])(G.order.user.tel),1)]),Object(o["createVNode"])("li",x,[k,Object(o["createVNode"])("span",m,Object(o["toDisplayString"])(G.order.user.address),1)])]),B,Object(o["createVNode"])("ul",S,[Object(o["createVNode"])("li",L,[D,Object(o["createVNode"])("span",$,"$"+Object(o["toDisplayString"])(G.order.total),1)]),Object(o["createVNode"])("li",T,[C,!1===G.paySuccess?(Object(o["openBlock"])(),Object(o["createBlock"])("span",z,"尚未付款")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",E,"付款完成"))])]),F,!1===G.paySuccess?(Object(o["openBlock"])(),Object(o["createBlock"])("div",J,[M,Object(o["createVNode"])("a",{href:"#",class:"btn-custom hvr-bounce-to-right",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(){return H.pay&&H.pay.apply(H,arguments)}),["prevent"]))},"確認付款")])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",A,[I]))])])])])])],64)}c("99af");var G={data:function(){return{order:[],isLoading:!1,paySuccess:!1}},methods:{getOrder:function(e){var t=this;e=this.$route.params.id,this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/order/").concat(e);this.$http.get(c).then((function(e){t.isLoading=!1,t.order=e.data.order}))},pay:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/pay/").concat(this.orderId);this.$http.post(t).then((function(t){e.$sweetalert2(t),e.paySuccess=!0,e.isLoading=!1}))}},created:function(){this.getOrder()}};G.render=q;t["default"]=G}}]);
//# sourceMappingURL=chunk-5fc8402d.f4c69df0.js.map