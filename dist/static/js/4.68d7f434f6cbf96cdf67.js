webpackJsonp([4],{Luci:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("NYxO");var a={name:"login",data:function(){return{username:"",password:"",isLoging:!1}},methods:{handleLogin:function(){var e=this;if(this.isLoging=!0,!this.username||!this.password)return this.$message.warning("用户名和密码不能为空");if(this.password.length<6)return this.$message.warning("密码最少为6个字符");var t=[s("mtWM"),{username:this.username,password:this.password},{headers:{"api-token":this.$sign()}}],a=t[1],i=t[2];t[0].post("http://retail.caidj.cn/api/login",a,i).then(function(t){var s=t.data;e.isLoging=!0,e.$message.success("登录成功"),localStorage.setItem("刷新token",s.data.refresh_token),localStorage.setItem("访问token",s.data.access_token),e.$router.push({name:"home"})}).catch(function(t){var s=t.response.data;s.errCode&&e.$message.info(s.message)});var n=this;setTimeout(function(){n.isLoging=!1},1500)}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fullscreen"},[s("div",{staticClass:"login-box"},[e._m(0),e._v(" "),s("p",{staticClass:"text-tips"},[e._v("你好，欢迎登录")]),e._v(" "),s("form",{staticClass:"login-form",attrs:{action:""}},[s("div",{staticClass:"m-list-group"},[s("div",{staticClass:"m-list-group-item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"m-input",attrs:{type:"text",placeholder:"请输入用户名","prefix-icon":"el-icon-user"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"m-list-group-item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"m-input",attrs:{type:"password","prefix-icon":"el-icon-shopping-bag-2",placeholder:"请输入密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),s("button",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoging,expression:"isLoging"}],staticClass:"m-btn sub select-none",on:{click:function(t){t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])]),e._v(" "),s("div",{staticStyle:{"margin-top":"50px"}})])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticClass:"logo",attrs:{src:s("T/FE"),alt:""}})])}]};var n=s("VU/8")(a,i,!1,function(e){s("mDXJ")},null,null);t.default=n.exports},"T/FE":function(e,t,s){e.exports=s.p+"static/img/caidj_logo.c4e04de.jpg"},mDXJ:function(e,t){}});
//# sourceMappingURL=4.68d7f434f6cbf96cdf67.js.map