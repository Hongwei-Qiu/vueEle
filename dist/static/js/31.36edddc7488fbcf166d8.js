webpackJsonp([31],{AU5J:function(t,e){},Npni:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("BO1k"),i=n.n(a),r={data:function(){return{list:[{label:"角色ID",prop:"user_id"},{label:"操作内容",prop:"contents"},{label:"ip地址",prop:"ip"},{label:"ip所属位置",prop:"ip_city"},{label:"更改时间",prop:"created_at"}],loading:!0,query:"",table:[],arrPage:this.$store.state.showNum,num:"",page:"1",count:null,currentPage4:parseInt(localStorage.getItem("页数"))}},created:function(){this.sindex()},methods:{left:function(){alert(1)},search:function(){this.sindex()},handleSizeChange:function(t){this.num=t,this.sindex()},handleCurrentChange:function(t){this.page=t,localStorage.setItem("页数",this.page),this.sindex()},sindex:function(){var t=this,e=this,n=""==localStorage.getItem("页数")?1:localStorage.getItem("页数"),a=""==this.num?this.arrPage[0]:this.num,r=this.http.url+"logs/index?page="+n+"&&num="+a,s=this.query?r+"&&searchCondition=name:"+this.query+";":""+r,l={headers:{"api-token":this.$sign(),Authorization:this.http.vtoken}};this.http.axios.get(s,l).then(function(n){var a=n.data.data,r=a.collection;t.count=a.total,t.table=[];var s=!0,l=!1,o=void 0;try{for(var u,c=i()(r);!(s=(u=c.next()).done);s=!0){var d=u.value;t.table.push(d)}}catch(t){l=!0,o=t}finally{try{!s&&c.return&&c.return()}finally{if(l)throw o}}setTimeout(function(){e.loading=!1},500)})},update:function(t){this.$router.push({name:"userUpdate",query:{id:t}})},del:function(t){var e=this;this.$confirm("此操作将永久删除该信息, 是否继续?","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={headers:{"api-token":e.$sign(),Authorization:e.http.vtoken}};e.http.axios.get(e.http.url+"user/delete?id="+t,n).then(function(t){e.sindex(),e.$message.success("删除成功")})}).catch(function(){e.$message.warning("已取消删除")})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-body"},[n("div",{staticClass:"page-header"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",[t._v("站点管理")]),t._v(" "),n("el-breadcrumb-item",[t._v("人员列表")]),t._v(" "),n("router-link",{attrs:{to:{name:"userCreate"}}},[n("m-button",{staticClass:"add",attrs:{type:"success",size:"mini"}},[t._v("添加")])],1),t._v(" "),n("m-button",{staticClass:"search",attrs:{type:"success",size:"mini"},on:{click:t.search}},[t._v("查询")]),t._v(" "),n("m-input",{attrs:{placeholder:"请输入你要查找的名称",theme:"success"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.search()}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1),t._v(" "),n("div",{staticClass:"box"},[n("i"),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.table,"max-height":"550","default-sort":{prop:"created_at",order:"descending"},"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[n("el-table-column",{attrs:{label:"#",type:"index"}}),t._v(" "),t._l(t.list,function(t){return n("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop}})}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("m-button",{attrs:{type:"success",size:"mini"},on:{click:function(n){t.update(e.row.id)}}},[t._v("编辑")]),t._v(" "),n("m-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){t.del(e.row.id)}}},[t._v("删除")])]}}])})],2),t._v(" "),n("div",{staticClass:"block",staticStyle:{display:"flex","padding-top":"1%"}},[n("el-pagination",{staticStyle:{margin:"0 auto"},attrs:{"current-page":t.currentPage4,"page-sizes":t.arrPage,"page-size":3,size:20,layout:"total, sizes, prev, pager, next, jumper",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.left():null}}})],1)],1)])},staticRenderFns:[]};var l=n("VU/8")(r,s,!1,function(t){n("AU5J")},null,null);e.default=l.exports}});
//# sourceMappingURL=31.36edddc7488fbcf166d8.js.map