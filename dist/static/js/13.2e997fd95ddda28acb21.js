webpackJsonp([13],{aWNf:function(t,e){},lnd6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("div",{staticClass:"page-header"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("人员管理")]),t._v(" "),a("el-breadcrumb-item",[t._v("角色更新")])],1)],1),t._v(" "),a("div",{staticClass:"box"},[a("el-form",{ref:"form",attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1),t._v(" "),a("div",{staticClass:"clear"}),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:t.onSubmit}},[t._v("立即创建")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)])},staticRenderFns:[]};var o=a("VU/8")({data:function(){return{form:{name:"",note:""}}},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this,e={headers:{"api-token":this.$sign(),Authorization:this.http.vtoken}};this.http.axios.get(this.http.role+"info?id="+this.$route.query.id,e).then(function(e){var a=e.data.data;t.form.name=a.name,t.form.note=a.remark})},onSubmit:function(){var t=this,e={id:this.$route.query.id,name:this.form.name,note:this.form.remark},a={headers:{"api-token":this.$sign(),Authorization:this.http.vtoken}};this.http.axios.post(this.http.role+"update",e,a).then(function(e){t.$message.success("修改成功"),t.$router.push({name:"roleIndex"})}).catch(function(e){var a=e.response.data;t.$message.info(a.message)})},reset:function(){for(var t in this.form)this.form[t]=""}}},r,!1,function(t){a("aWNf")},"data-v-485ad1c8",null);e.default=o.exports}});
//# sourceMappingURL=13.2e997fd95ddda28acb21.js.map