(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5fb2"],{OCHI:function(e,t,i){},jFMQ:function(e,t,i){"use strict";var n=i("OCHI");i.n(n).a},ju0u:function(e,t,i){"use strict";i.r(t);var n={data:function(){return{dynamicValidateForm:{notices:[]},munites:[{id:"0",name:"立刻"},{id:"1",name:"1分钟后"},{id:"2",name:"2分钟后"},{id:"5",name:"5分钟后"},{id:"10",name:"10分钟后"},{id:"15",name:"15分钟后"},{id:"30",name:"30分钟后"},{id:"60",name:"1小时后"},{id:"120",name:"2小时后"},{id:"240",name:"4小时后"},{id:"480",name:"8小时后"},{id:"1440",name:"24小时后"}]}},created:function(){this.dynamicValidateForm.notices.push({id:this.dynamicValidateForm.notices.length,way:"0",munites:null})},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){return e?(t.$message({type:"success",message:"保存成功!"}),!1):(t.$message({type:"warning",message:"输入错误，请修正后再试！"}),!1)})},resetForm:function(e){this.$refs[e].resetFields()},addNotice:function(){if(5===this.dynamicValidateForm.notices.length)return this.$message({type:"warning",message:"最多添加5条！"}),!1;this.dynamicValidateForm.notices.push({id:this.dynamicValidateForm.notices.length,way:"0",munites:null})},removeNotice:function(e){this.dynamicValidateForm.notices.splice(e,1)}}},a=(i("jFMQ"),i("KHd+")),s=Object(a.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{ref:"dynamicValidateForm",staticStyle:{"margin-left":"17%"},attrs:{inline:!0,model:e.dynamicValidateForm}},e._l(e.dynamicValidateForm.notices,function(t,n){return i("div",{key:t.id},[i("el-form-item",{attrs:{label:"通知方式"}},[i("el-radio-group",{model:{value:t.way,callback:function(i){e.$set(t,"way",i)},expression:"notice.way"}},[i("el-radio-button",{attrs:{label:"0"}},[e._v("QQ")]),e._v(" "),i("el-radio-button",{attrs:{label:"1"}},[e._v("邮件")]),e._v(" "),i("el-radio-button",{attrs:{label:"2"}},[e._v("短信")])],1),e._v(" "),i("el-select",{staticStyle:{width:"120px"},attrs:{rules:[{required:!0,message:"请输入通知时间",trigger:"blur"}],placeholder:"请选择..."},model:{value:t.munites,callback:function(i){e.$set(t,"munites",i)},expression:"notice.munites"}},e._l(e.munites,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),0==n?i("span",{staticClass:"clickable",on:{click:function(t){e.addNotice()}}},[i("svg-icon",{attrs:{"icon-class":"plus-square"}})],1):e._e(),e._v(" "),n>=1?i("span",{staticClass:"clickable",on:{click:function(t){e.removeNotice(n)}}},[i("svg-icon",{attrs:{"icon-class":"minus-square"}})],1):e._e()],1)],1)})),e._v(" "),i("el-row",{staticStyle:{"margin-left":"40%"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("dynamicValidateForm")}}},[e._v("提交")]),e._v(" "),i("el-button",{on:{click:function(t){e.resetForm("dynamicValidateForm")}}},[e._v("重置")])],1)],1)},[],!1,null,null,null);s.options.__file="Multi.vue";t.default=s.exports}}]);