(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-index"],{"066a":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.empty-content[data-v-13cc3a72]{box-sizing:border-box;width:100%;padding:%?140?% %?50?%;text-align:center}.empty-content .tips[data-v-13cc3a72]{font-size:%?26?%;color:grey;margin:%?40?% 0}.empty-content .empty-icon .image[data-v-13cc3a72]{width:%?280?%}',""]),t.exports=e},"2a5b":function(t,e,n){var a=n("6ac2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("38833cf8",a,!0,{sourceMap:!1,shadowMode:!1})},"369f":function(t,e,n){"use strict";var a=n("abcc"),i=n.n(a);i.a},"432f":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"addres-list"},t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"address-item"},[n("v-uni-view",{staticClass:"contacts"},[n("v-uni-text",{staticClass:"name"},[t._v(t._s(e.name))]),n("v-uni-text",{staticClass:"phone"},[t._v(t._s(e.phone))])],1),n("v-uni-view",{staticClass:"address"},[t._l(e.region,(function(e,a){return n("v-uni-text",{key:a,staticClass:"region"},[t._v(t._s(e))])})),n("v-uni-text",{staticClass:"detail"},[t._v(t._s(e.detail))])],2),n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"item-option"},[n("v-uni-view",{staticClass:"_left"},[n("v-uni-label",{staticClass:"item-radio",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.handleSetDefault(e.address_id)}}},[n("v-uni-radio",{staticClass:"radio",attrs:{color:"#fa2209",checked:e.address_id==t.defaultId}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(e.address_id==t.defaultId?"默认":"选择"))])],1)],1),n("v-uni-view",{staticClass:"_right"},[n("v-uni-view",{staticClass:"events"},[n("v-uni-view",{staticClass:"event-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleUpdate(e.address_id)}}},[n("v-uni-text",{staticClass:"iconfont icon-edit"}),n("v-uni-text",{staticClass:"title"},[t._v("编辑")])],1),n("v-uni-view",{staticClass:"event-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleRemove(e.address_id)}}},[n("v-uni-text",{staticClass:"iconfont icon-delete"}),n("v-uni-text",{staticClass:"title"},[t._v("删除")])],1)],1)],1)],1)],1)})),1),t.list.length?t._e():n("empty",{attrs:{isLoading:t.isLoading,tips:"亲，暂无收货地址"}}),n("v-uni-view",{staticClass:"footer-fixed"},[n("v-uni-view",{staticClass:"btn-wrapper"},[n("v-uni-view",{staticClass:"btn-item btn-item-main",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCreate()}}},[t._v("添加新地址")])],1)],1)],1)},s=[]},4440:function(t,e,n){"use strict";n.r(e);var a=n("c9d9"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},5226:function(t,e,n){"use strict";n.r(e);var a=n("8876"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"6ac2":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.addres-list[data-v-102c1be0]{padding-bottom:%?120?%}.address-item[data-v-102c1be0]{margin:%?20?% auto %?20?% auto;padding:%?30?% %?40?%;width:94%;box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);border-radius:%?16?%;background:#fff}.contacts[data-v-102c1be0]{font-size:%?30?%;margin-bottom:%?16?%}.contacts .name[data-v-102c1be0]{margin-right:%?16?%}.address[data-v-102c1be0]{font-size:%?28?%}.address .region[data-v-102c1be0]{margin-right:%?10?%}.line[data-v-102c1be0]{margin:%?20?% 0;border-bottom:%?1?% solid #f3f3f3}.item-option[data-v-102c1be0]{display:flex;justify-content:space-between;height:%?48?%}.item-option .item-radio[data-v-102c1be0]{font-size:%?28?%}.item-option .item-radio .radio[data-v-102c1be0]{vertical-align:middle;-webkit-transform:scale(.76);transform:scale(.76)}.item-option .item-radio .text[data-v-102c1be0]{vertical-align:middle}.item-option .events[data-v-102c1be0]{display:flex;align-items:center;line-height:%?48?%}.item-option .events .event-item[data-v-102c1be0]{font-size:%?28?%;margin-right:%?22?%;color:#4c4c4c}.item-option .events .event-item[data-v-102c1be0]:last-child{margin-right:0}.item-option .events .event-item .title[data-v-102c1be0]{margin-left:%?8?%}.footer-fixed[data-v-102c1be0]{position:fixed;bottom:var(--window-bottom);left:0;right:0;height:%?96?%;z-index:11;box-shadow:0 %?-4?% %?40?% 0 rgba(144,52,52,.1);background:#fff}.footer-fixed .btn-wrapper[data-v-102c1be0]{height:100%;display:flex;align-items:center;padding:0 %?20?%}.footer-fixed .btn-item[data-v-102c1be0]{flex:1;font-size:%?28?%;height:%?72?%;line-height:%?72?%;text-align:center;color:#fff;border-radius:%?50?%}.footer-fixed .btn-item-main[data-v-102c1be0]{background:linear-gradient(90deg,#f9211c,#ff6335)}',""]),t.exports=e},"6e1c":function(t,e,n){"use strict";var a=n("2a5b"),i=n.n(a);i.a},"7df7":function(t,e,n){"use strict";n.r(e);var a=n("432f"),i=n("4440");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("6e1c");var r,d=n("f0c5"),o=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,"102c1be0",null,!1,a["a"],r);e["default"]=o.exports},8616:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.remove=e.setDefault=e.edit=e.add=e.detail=e.defaultId=e.list=void 0;var i=a(n("2827")),s={list:"address/list",defaultId:"address/defaultId",detail:"address/detail",add:"address/add",edit:"address/edit",setDefault:"address/setDefault",remove:"address/remove"},r=function(t){return i.default.get(s.list,t)};e.list=r;var d=function(t){return i.default.get(s.defaultId,t)};e.defaultId=d;var o=function(t){return i.default.get(s.detail,{addressId:t})};e.detail=o;var c=function(t){return i.default.post(s.add,{form:t})};e.add=c;var u=function(t,e){return i.default.post(s.edit,{addressId:t,form:e})};e.edit=u;var l=function(t){return i.default.post(s.setDefault,{addressId:t})};e.setDefault=l;var f=function(t){return i.default.post(s.remove,{addressId:t})};e.remove=f},8876:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{isLoading:{type:Boolean,default:!0},customStyle:{type:Object,default:function(){return{}}},tips:{type:String,default:"亲，暂无相关数据"}},data:function(){return{}},methods:{}};e.default=a},abcc:function(t,e,n){var a=n("066a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("dbd4b84c",a,!0,{sourceMap:!1,shadowMode:!1})},ac59:function(t,e,n){"use strict";n.r(e);var a=n("d23f"),i=n("5226");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("369f");var r,d=n("f0c5"),o=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,"13cc3a72",null,!1,a["a"],r);e["default"]=o.exports},c9d9:function(t,e,n){"use strict";var a=n("4ea4"),i=n("dbce");n("4e82"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("8616")),r=a(n("ac59")),d={components:{Empty:r.default},data:function(){return{options:{},isLoading:!0,list:[],defaultId:null}},onLoad:function(t){this.options=t},onShow:function(){this.getPageData()},methods:{getPageData:function(){var t=this;t.isLoading=!0,Promise.all([t.getDefaultId(),t.getAddressList()]).then((function(){t.onReorder()})).finally((function(){return t.isLoading=!1}))},getAddressList:function(){var t=this;return new Promise((function(e,n){s.list().then((function(n){t.list=n.data.list,e(n)})).catch(n)}))},getDefaultId:function(){var t=this;return new Promise((function(e,n){var a=t;s.defaultId().then((function(t){a.defaultId=t.data.defaultId,e(t)})).catch(n)}))},onReorder:function(){var t=this;t.list.sort((function(e){return e.address_id==t.defaultId?-1:1}))},handleCreate:function(){this.$navTo("pages/address/create")},handleUpdate:function(t){this.$navTo("pages/address/update",{addressId:t})},handleRemove:function(t){var e=this;uni.showModal({title:"提示",content:"您确定要删除当前收货地址吗?",success:function(n){var a=n.confirm;a&&e.onRemove(t)}})},onRemove:function(t){var e=this;s.remove(t).then((function(t){e.getPageData()}))},handleSetDefault:function(t){var e=this;s.setDefault(t).then((function(n){e.defaultId=t,"checkout"===e.options.from&&uni.navigateBack()}))}}};e.default=d},d23f:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?t._e():n("v-uni-view",{staticClass:"empty-content",style:t.customStyle},[n("v-uni-view",{staticClass:"empty-icon"},[n("v-uni-image",{staticClass:"image",attrs:{src:"/static/empty.png",mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"tips"},[t._v(t._s(t.tips))]),t._t("slot")],2)},s=[]}}]);