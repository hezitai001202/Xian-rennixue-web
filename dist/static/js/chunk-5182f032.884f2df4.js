(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5182f032"],{2017:function(e,t,o){"use strict";var s=o("c789"),a=o.n(s);a.a},"6f3a":function(e,t,o){"use strict";var s=o("e6da"),a=o.n(s);a.a},"9ed6":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("万能讲师")])]),e._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),o("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登 录")])],1)],1)},a=[],n=o("5f87"),r={name:"Login",data:function(){return{loginForm:{username:"15500056918",password:"111111"},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){console.log(e),this.redirect=e.query&&e.query.redirect,console.log(this.redirect)},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},handleLogin:function(){var e=this;this.$axios({url:this.$api.baseURL+"api/teacher/login",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{mobile:this.loginForm.username,password:this.loginForm.password}}).then(function(t){200===t.data.status?(Object(n["e"])("teacinfo",JSON.stringify(t.data.body.teacUser)),Object(n["e"])("teactoken",t.data.body.token),e.loading=!0,e.$router.push({path:"/orders"}),e.loading=!1):e.$message({type:"error",message:t.data.body.msg})}).catch(function(t){e.loading=!1})}}},i=r,l=(o("2017"),o("6f3a"),o("17cc")),c=Object(l["a"])(i,s,a,!1,null,"1be39ff0",null);t["default"]=c.exports},c789:function(e,t,o){},e6da:function(e,t,o){}}]);