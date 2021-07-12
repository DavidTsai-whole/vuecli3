(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-611cdbc2"],{1799:function(e,t,c){"use strict";var o=c("7a23"),a={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},l=Object(o["createVNode"])("span",{"aria-hidden":"true"},"«",-1),n=Object(o["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,c,d,i,s){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",a,[Object(o["createVNode"])("ul",r,[Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_pre}]},[Object(o["createVNode"])("a",{class:"page-link",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.$emit("update-page",c.pages.current_page-1)}),["prevent"])),href:"#","aria-label":"Previous"},[l])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item",{active:c.pages.current_page===t}],key:t},[Object(o["createVNode"])("a",{class:"page-link",onClick:Object(o["withModifiers"])((function(c){return e.$emit("update-page",t)}),["prevent"]),href:"#"},Object(o["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(o["createVNode"])("a",{class:"page-link",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(t){return e.$emit("update-page",c.pages.current_page+1)}),["prevent"])),href:"#","aria-label":"Next"},[n])],2)])])}var i={props:["pages"]};i.render=d;t["a"]=i},d416:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={class:"DashMain"},r={class:"container"},l={class:"text-end"},n={class:"table-responsive"},d={class:"table table-success table-striped table-hover mt-1"},i=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",null,"產品種類"),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",null,"原價"),Object(o["createVNode"])("th",null,"售價"),Object(o["createVNode"])("th",null,"是否啟用"),Object(o["createVNode"])("th",{class:"text-center"},"編輯")])],-1),s={key:0,class:"text-success"},u={key:1,class:"text-danger"},p={class:"text-center"},b={class:"btn-group"};function m(e,t,c,m,j,O){var f=Object(o["resolveComponent"])("Loading"),h=Object(o["resolveComponent"])("pagination"),N=Object(o["resolveComponent"])("ProductModal"),g=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(f,{active:j.isLoading},null,8,["active"]),Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary mt-5",onClick:t[1]||(t[1]=function(e){return O.openModal(!0)})},"新增產品")]),Object(o["createVNode"])("div",n,[Object(o["createVNode"])("table",d,[i,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(j.products,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.category),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.origin_price),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.price),1),Object(o["createVNode"])("td",null,[e.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",s,"啟用")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",u,"停用"))]),Object(o["createVNode"])("td",p,[Object(o["createVNode"])("div",b,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-secondary",onClick:function(t){return O.openModal(!1,e)}},"編輯",8,["onClick"]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-danger",onClick:function(t){return O.delModal(e)}},"刪除",8,["onClick"])])])])})),128))])])]),Object(o["createVNode"])(h,{pages:j.pagination,onUpdatePage:O.getProducts},null,8,["pages","onUpdatePage"])]),Object(o["createVNode"])(N,{ref:"productModal",product:j.tempProduct,isNew:j.isNew,onUpdateProducts:O.updateProducts},null,8,["product","isNew","onUpdateProducts"]),Object(o["createVNode"])(g,{ref:"dpModal",data:j.tempProduct,onUpdateDelete:O.updateDelete},null,8,["data","onUpdateDelete"])])],64)}var j=c("5530"),O=(c("99af"),c("a4d3"),c("e01a"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),f={class:"modal-dialog modal-xl",role:"document"},h={class:"modal-content border-0"},N={class:"modal-header bg-dark text-white"},g={class:"modal-title",id:"exampleModalLabel"},v={key:0},V={key:1},k=Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),y={class:"modal-body"},P={class:"row"},x={class:"col-sm-4"},M={class:"mb-3"},w=Object(o["createVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),B={class:"mb-3"},D=Object(o["createVNode"])("label",{for:"customFile",class:"form-label"},[Object(o["createTextVNode"])("或 上傳圖片 "),Object(o["createVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1),U={class:"col-sm-8"},_={class:"mb-3"},C=Object(o["createVNode"])("label",{for:"title",class:"form-label"},"標題",-1),$={class:"row gx-2"},S={class:"mb-3 col-md-6"},L=Object(o["createVNode"])("label",{for:"category",class:"form-label"},"分類",-1),T={class:"mb-3 col-md-6"},F=Object(o["createVNode"])("label",{for:"price",class:"form-label"},"單位",-1),J={class:"row gx-2"},I={class:"mb-3 col-md-6"},q=Object(o["createVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),z={class:"mb-3 col-md-6"},A=Object(o["createVNode"])("label",{for:"price",class:"form-label"},"售價",-1),E=Object(o["createVNode"])("hr",null,null,-1),G={class:"mb-3"},H=Object(o["createVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),K={class:"mb-3"},Q=Object(o["createVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),R={class:"mb-3"},W={class:"form-check"},X=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Y={class:"modal-footer"},Z=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ee(e,t,c,a,r,l){return Object(o["openBlock"])(),Object(o["createBlock"])("div",O,[Object(o["createVNode"])("div",f,[Object(o["createVNode"])("div",h,[Object(o["createVNode"])("div",N,[Object(o["createVNode"])("h5",g,[c.isNew?(Object(o["openBlock"])(),Object(o["createBlock"])("span",v,"新增產品")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",V,"編輯產品"))]),k]),Object(o["createVNode"])("div",y,[Object(o["createVNode"])("div",P,[Object(o["createVNode"])("div",x,[Object(o["createVNode"])("div",M,[w,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempProduct.imageUrl=e})},null,512),[[o["vModelText"],r.tempProduct.imageUrl]])]),Object(o["createVNode"])("div",B,[D,Object(o["createVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[2]||(t[2]=function(){return e.uploadFile&&e.uploadFile.apply(e,arguments)})},null,544)]),Object(o["createVNode"])("img",{class:"img-fluid",src:r.tempProduct.imageUrl},null,8,["src"])]),Object(o["createVNode"])("div",U,[Object(o["createVNode"])("div",_,[C,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.tempProduct.title=e})},null,512),[[o["vModelText"],r.tempProduct.title]])]),Object(o["createVNode"])("div",$,[Object(o["createVNode"])("div",S,[L,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.tempProduct.category=e}),placeholder:"請輸入分類"},null,512),[[o["vModelText"],r.tempProduct.category]])]),Object(o["createVNode"])("div",T,[F,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.tempProduct.unit=e})},null,512),[[o["vModelText"],r.tempProduct.unit]])])]),Object(o["createVNode"])("div",J,[Object(o["createVNode"])("div",I,[q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempProduct.origin_price=e}),placeholder:"請輸入原價"},null,512),[[o["vModelText"],r.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",z,[A,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempProduct.price=e}),placeholder:"請輸入售價"},null,512),[[o["vModelText"],r.tempProduct.price,void 0,{number:!0}]])])]),E,Object(o["createVNode"])("div",G,[H,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempProduct.description=e}),placeholder:"請輸入產品描述"},null,512),[[o["vModelText"],r.tempProduct.description]])]),Object(o["createVNode"])("div",K,[Q,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.tempProduct.content=e}),placeholder:"請輸入產品說明內容"},null,512),[[o["vModelText"],r.tempProduct.content]])]),Object(o["createVNode"])("div",R,[Object(o["createVNode"])("div",W,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.tempProduct.is_enabled=e}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["vModelCheckbox"],r.tempProduct.is_enabled]]),X])])])])]),Object(o["createVNode"])("div",Y,[Z,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[11]||(t[11]=function(t){return e.$emit("update-products",r.tempProduct)})}," 確認 ")])])])],512)}var te=c("9641"),ce={props:["product","isNew"],data:function(){return{tempProduct:{}}},watch:{product:function(){this.tempProduct=this.product}},mixins:[te["a"]]};ce.render=ee;var oe=ce,ae=c("6ff1"),re=c("1799"),le={data:function(){return{products:[],pagination:{},isNew:!1,isLoading:!1,tempProduct:{}}},components:{ProductModal:oe,Pagination:re["a"],DelModal:ae["a"]},methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/admin/products?page=").concat(t);this.isLoading=!0,this.$http.get(c).then((function(t){t.data.success&&(e.products=t.data.products,e.pagination=t.data.pagination,e.isLoading=!1)})).catch((function(e){console.log(e)}))},openModal:function(e,t){e?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object(j["a"])({},t),this.isNew=!1);var c=this.$refs.productModal;c.openModal()},updateProducts:function(e){var t=this;this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/admin/product"),o=this.$refs.productModal,a="post";this.isNew||(a="put",c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/admin/product/").concat(this.tempProduct.id)),this.$http[a](c,{data:this.tempProduct}).then((function(e){e.data.success&&(t.$sweetalert2(e),o.hideModal(),t.getProducts(t.pagination.current_page))})).catch((function(e){console.log(e)}))},delModal:function(e){this.tempProduct=Object(j["a"])({},e),this.$refs.dpModal.openModal()},updateDelete:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/admin/product/").concat(e);this.$http.delete(c).then((function(e){e.data.success&&(alert(e.data.message),t.getProducts(t.pagination.current_page),t.$refs.dpModal.hideModal())}))}},created:function(){this.getProducts()}};le.render=m;t["default"]=le},e01a:function(e,t,c){"use strict";var o=c("23e7"),a=c("83ab"),r=c("da84"),l=c("5135"),n=c("861d"),d=c("9bf2").f,i=c("e893"),s=r.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};i(p,s);var b=p.prototype=s.prototype;b.constructor=p;var m=b.toString,j="Symbol(test)"==String(s("test")),O=/^Symbol\((.*)\)[^)]+$/;d(b,"description",{configurable:!0,get:function(){var e=n(this)?this.valueOf():this,t=m.call(e);if(l(u,e))return"";var c=j?t.slice(7,-1):t.replace(O,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-611cdbc2.2bf772d7.js.map