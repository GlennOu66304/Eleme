(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8aee9bf8"],{"037c":function(t,e,s){},"0418":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLeft,expression:"isLeft"}],staticClass:"header_button is-left"},[s("i",{staticClass:"fa fa-chevron-left"}),s("button",{staticClass:"text",on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])]),s("h1",{staticClass:"header-title"},[t._v(t._s(t.title))])])},n=[],r={name:"Header",props:{title:String,isLeft:{type:Boolean,default:!1}}},o=r,c=(s("71db"),s("2877")),i=Object(c["a"])(o,a,n,!1,null,"2eba6dcc",null);e["a"]=i.exports},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1dde":function(t,e,s){var a=s("d039"),n=s("b622"),r=s("2d00"),o=n("species");t.exports=function(t){return r>=51||!a((function(){var e=[],s=e.constructor={};return s[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3f60":function(t,e,s){"use strict";s("f9c9")},4208:function(t,e,s){"use strict";s("ab62")},"71db":function(t,e,s){"use strict";s("af11")},8418:function(t,e,s){"use strict";var a=s("c04e"),n=s("9bf2"),r=s("5c6c");t.exports=function(t,e,s){var o=a(e);o in t?n.f(t,o,r(0,s)):t[o]=s}},"841c":function(t,e,s){"use strict";var a=s("d784"),n=s("825a"),r=s("1d80"),o=s("129f"),c=s("14c3");a("search",(function(t,e,s){return[function(e){var s=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s):new RegExp(e)[t](String(s))},function(t){var a=s(e,this,t);if(a.done)return a.value;var r=n(this),i=String(t),d=r.lastIndex;o(d,0)||(r.lastIndex=0);var l=c(r,i);return o(r.lastIndex,d)||(r.lastIndex=d),null===l?-1:l.index}]}))},8804:function(t,e,s){"use strict";s("037c")},"99af":function(t,e,s){"use strict";var a=s("23e7"),n=s("d039"),r=s("e8b5"),o=s("861d"),c=s("7b0b"),i=s("50c4"),d=s("8418"),l=s("65f0"),u=s("1dde"),f=s("b622"),h=s("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=h>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=u("concat"),x=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},_=!m||!b;a({target:"Array",proto:!0,forced:_},{concat:function(t){var e,s,a,n,r,o=c(this),u=l(o,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],x(r)){if(n=i(r.length),f+n>v)throw TypeError(g);for(s=0;s<n;s++,f++)s in r&&d(u,f,r[s])}else{if(f>=v)throw TypeError(g);d(u,f++,r)}return u.length=f,u}})},a994:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"addAddress"},[s("Header",{attrs:{title:t.title,isLeft:!0}}),s("div",{staticClass:"viewbody"},[s("div",{staticClass:"content"},[s("FormBlock",{attrs:{label:"联系人",placeholder:"姓名",tags:t.sexes,sex:t.addressInfo.sex},on:{checkSex:t.checkSex},model:{value:t.addressInfo.name,callback:function(e){t.$set(t.addressInfo,"name",e)},expression:"addressInfo.name"}}),s("FormBlock",{attrs:{label:"电话",placeholder:"手机号码"},model:{value:t.addressInfo.phone,callback:function(e){t.$set(t.addressInfo,"phone",e)},expression:"addressInfo.phone"}}),s("FormBlock",{attrs:{label:"地址",placeholder:"小区/写字楼/学校等",icon:"angle-right"},on:{click:function(e){t.showSearch=!0}},model:{value:t.addressInfo.address,callback:function(e){t.$set(t.addressInfo,"address",e)},expression:"addressInfo.address"}}),s("FormBlock",{attrs:{label:"门牌号",placeholder:"10号楼5单元404",icon:"edit",texarea:"textarea"},model:{value:t.addressInfo.bottom,callback:function(e){t.$set(t.addressInfo,"bottom",e)},expression:"addressInfo.bottom"}}),s("div",{staticClass:"formblock"},[s("div",{staticClass:"label-wrap"},[t._v("标签")]),s("TabTags",{attrs:{tags:t.tags,selectTag:t.addressInfo.tag},on:{checkTag:t.checkTag}})],1)],1),s("div",{staticClass:"form-button-wrap"},[s("button",{staticClass:"form-button",on:{click:t.handleSave}},[t._v("确定")])])]),s("AddressSearch",{attrs:{showSearch:t.showSearch,addressInfo:t.addressInfo},on:{close:function(e){t.showSearch=!1}}})],1)},n=[],r=(s("b0c0"),s("99af"),s("0418")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"formblock"},[s("div",{staticClass:"label-wrap"},[t._v(" "+t._s(t.label)+" ")]),s("div",{staticClass:"input-group-wrap"},[s("div",{staticClass:"input-wrap"},[t.textarea?s("textarea",{attrs:{type:t.type,placeholder:t.placeholder,rows:"2",maxlength:"100"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):s("input",{attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},click:function(e){return t.$emit("click")}}}),t.icon?s("i",{class:"fa fa-"+t.icon}):t._e()]),t.tags?s("TabTags",{attrs:{tags:t.tags,selectTag:t.sex},on:{checkTag:t.checkTag}}):t._e()],1)])},c=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-wrap"},t._l(t.tags,(function(e,a){return s("span",{key:a,staticClass:"form-span",class:{checked:t.selectTag==e},on:{click:function(s){return t.$emit("checkTag",e)}}},[t._v(" "+t._s(e)+" ")])})),0)},d=[],l={name:"TabTags",props:{tags:Array,selectTag:String},created:function(){console.log(this.tags)}},u=l,f=(s("8804"),s("2877")),h=Object(f["a"])(u,i,d,!1,null,"5433de7c",null),p=h.exports,v={name:"FormBlock",props:{type:{type:String,default:"text"},label:String,value:String,placeholder:String,icon:String,textarea:String,tags:Array,sex:String},methods:{checkTag:function(t){this.$emit("checkSex",t)}},components:{TabTags:p}},g=v,m=(s("3f60"),Object(f["a"])(g,o,c,!1,null,"6c82eb30",null)),b=m.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showSearch?s("div",{staticClass:"addressSearch"},[s("div",{staticClass:"search-view"},[s("div",{staticClass:"search-box"},[s("div",{staticClass:"search-box-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_address,expression:"search_address"}],attrs:{type:"text",placeholder:"请输入小区/写字楼/学校"},domProps:{value:t.search_address},on:{input:function(e){e.target.composing||(t.search_address=e.target.value)}}})]),s("button",{staticClass:"search-box-btn",on:{click:function(e){return t.$emit("close")}}},[t._v("取消")])]),s("ul",{staticClass:"search-list"},t._l(t.areaList,(function(e,a){return s("li",{key:a,staticClass:"search-row",on:{click:function(s){return t.selectAddress(e)}}},[s("p",{staticClass:"search-row-title"},[t._v(t._s(e.name))]),s("p",{staticClass:"search-row-location"},[t._v(t._s(e.district))])])})),0)])]):t._e()},_=[],w=(s("ac1f"),s("841c"),{name:"AddressSearch",data:function(){return{search_address:"",areaList:[]}},props:{showSearch:Boolean,addressInfo:Object},watch:{search_address:function(t){this.searchPlace(t)}},computed:{city:function(){return this.$store.getters.location.addressComponent.city||this.$store.getters.location.addressComponent.province}},methods:{searchPlace:function(t){var e=this;console.log(this.city),AMap.plugin("AMap.Autocomplete",(function(){var s={city:e.city},a=new AMap.Autocomplete(s);a.search(t,(function(t,s){console.log(s),e.areaList=s.tips}))}))},selectAddress:function(t){console.log(t),this.addressInfo.address=t.name+t.district+t.address,this.$emit("close")}}}),k=w,I=(s("4208"),Object(f["a"])(k,x,_,!1,null,"52574e94",null)),S=I.exports,C=s("76a0"),y={name:"Addaddress",data:function(){return{title:"",tags:["家","公司","学校","其他"],sexes:["先生","女士"],addressInfo:{},showSearch:!1}},beforeRouteEnter:function(t,e,s){s((function(e){e.addressInfo=t.params.addressInfo,e.title=t.params.title}))},methods:{checkTag:function(t){this.addressInfo.tag=t},checkSex:function(t){this.addressInfo.sex=t},handleSave:function(){this.addressInfo.name?this.addressInfo.phone?this.addressInfo.address?this.addressInfo.bottom?"添加地址"==this.title?this.addAddress():this.editAddress():this.showMsg("请输入门牌号"):this.showMsg("请输入地址"):this.showMsg("请输入手机号"):this.showMsg("请输入联系人")},showMsg:function(t){Object(C["Toast"])({message:t,position:"bottom",duration:2e3})},addAddress:function(){var t=this;this.$axios.post("/api/user/add_address/".concat(localStorage.ele_login),this.addressInfo).then((function(e){t.$store.getters.userInfo||t.$store.dispatch("setUserInfo",t.addressInfo),t.$router.push("/myAddress")})).catch((function(t){console.log(t)}))},editAddress:function(){var t=this;this.$axios.post("/api/user/edit_address/".concat(localStorage.ele_login,"/").concat(this.addressInfo._id),this.addressInfo).then((function(e){t.$router.push("/myAddress")})).catch((function(t){console.log(t)}))}},components:{Header:r["a"],FormBlock:b,TabTags:p,AddressSearch:S}},$=y,T=(s("e295"),Object(f["a"])($,a,n,!1,null,"73ec0b2a",null));e["default"]=T.exports},ab62:function(t,e,s){},af11:function(t,e,s){},b0c0:function(t,e,s){var a=s("83ab"),n=s("9bf2").f,r=Function.prototype,o=r.toString,c=/^\s*function ([^ (]*)/,i="name";a&&!(i in r)&&n(r,i,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},d8ad:function(t,e,s){},e295:function(t,e,s){"use strict";s("d8ad")},f9c9:function(t,e,s){}}]);
//# sourceMappingURL=chunk-8aee9bf8.02e155d9.js.map