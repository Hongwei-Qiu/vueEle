webpackJsonp([10],{"446P":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{menu:[],tableData:[]}},created:function(){this.roleMenu()},methods:{roleMenu:function(){var t=this.$route.query.id,e={headers:{"api-token":this.$sign(),Authorization:this.http.vtoken}};this.http.axios.get(this.http.role+"getMenu?id="+t,e).then(function(t){console.log(t.data.data)})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("div",{staticClass:"page-header"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("人员管理")]),t._v(" "),a("el-breadcrumb-item",[t._v("授权")])],1)],1),t._v(" "),a("div",{staticClass:"box"},[a("el-table",{staticStyle:{width:"1000px","margin-bottom":"20px"},attrs:{data:t.tableData,"row-key":"id",border:"","default-expand-all":"","tree-props":{children:"2",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),t._l(t.menu,function(t,e){return a("el-table-column",{attrs:{prop:t.name,label:"角色菜单",width:"180"}})})],2)],1)])},staticRenderFns:[]};var i=a("VU/8")(r,n,!1,function(t){a("tMcm")},"data-v-7a632500",null);e.default=i.exports},tMcm:function(t,e){}});
//# sourceMappingURL=10.b7e15f0fc55e5e3c55a7.js.map