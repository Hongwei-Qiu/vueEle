webpackJsonp([10],{N3aU:function(e,t){},StPV:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-body"},[r("div",{staticClass:"page-header"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),r("el-breadcrumb-item",[e._v("商家管理")]),e._v(" "),r("el-breadcrumb-item",[e._v("新增商家")])],1)],1),e._v(" "),r("div",{staticClass:"box"},[r("el-form",{ref:"form",attrs:{model:e.form}},[r("el-form-item",{attrs:{label:"商家名称"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"利率"}},[r("el-input",{model:{value:e.form.rate,callback:function(t){e.$set(e.form,"rate",t)},expression:"form.rate"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机"}},[r("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{palceholer:"格式为字母数字,大于6位小于20位"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("div",{staticClass:"clear"}),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"success"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)])},staticRenderFns:[]};var s=r("VU/8")({data:function(){return{form:{name:"",rate:"",phone:"",password:""}}},methods:{onSubmit:function(){var e=this,t={headers:{"api-token":this.$websitesign(),Authorization:this.http.wv_token}},r={name:this.form.name,mobile:this.form.phone,password:this.form.password,rate:this.form.rate};this.$axios.post(this.http.web+"business/create",r,t).then(function(t){var r=t.data;0!==r.errCode?e.$message.warning(r.message):(e.$message.success("添加成功"),e.$router.push({name:"w-list"}))}).catch(function(t){var r=t.response.data;e.$message.info(r.message)})},reset:function(){for(var e in this.form)this.form[e]=""}}},a,!1,function(e){r("N3aU")},"data-v-8ccb8386",null);t.default=s.exports}});
//# sourceMappingURL=10.08fe1ec84f184c585205.js.map