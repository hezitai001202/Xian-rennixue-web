(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ccd0a0f"],{"12ae":function(t,e,a){t.exports=a.p+"static/img/loading.3cbb0f40.gif"},"13bf":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"historyLessons"},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.historyLessons,expression:"historyLessons"}]},[o("transition",{attrs:{name:"el-fade-in-linear"}},[t.updataFiles?o("div",{staticClass:"maskLoading"},[o("div",{staticClass:"imgText"},[o("img",{staticStyle:{"margin-left":"40%"},attrs:{src:a("12ae"),alt:""}}),t._v(" "),o("p",[t._v("文件较大或上行网速较慢，请耐心等待上传。"),o("br"),t._v("过程中请不要关闭或刷新浏览器！避免上传失败。"),o("br"),t._v("上传成功后页面自动刷新")])])]):t._e()]),t._v(" "),o("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入姓名"},model:{value:t.tableDataName,callback:function(e){t.tableDataName=e},expression:"tableDataName"}}),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),o("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"5px"},attrs:{data:t.tableDataEnd,border:""}},[o("el-table-column",{attrs:{label:"订单号","show-overflow-tooltip":!0,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{color:"#409EFF",cursor:"pointer"},on:{click:function(a){return t.apply(e.row,e.$index)}}},[t._v(t._s(e.row.orderNo))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"总上课时长(min)",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(e.row.allSchooltime))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"总赠送时长(min)",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(e.row.allPresenterTime))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.uploadDropbox(e.row,e.$index)}}},[t._v("提交作业")])]}}])})],1),t._v(" "),o("el-dialog",{attrs:{visible:t.uploadDropBoxDialog,width:"50%","before-close":t.uploadDropBoxDialogClose},on:{"update:visible":function(e){t.uploadDropBoxDialog=e}}},[o("div",{staticStyle:{"padding-left":"25px","margin-top":"10px"}},[o("el-button",{attrs:{id:"selectfiles",type:"primary"}},[t._v("选择文件")]),t._v(" "),o("div",{staticStyle:{padding:"10px 0"},attrs:{id:"ossfile"}})],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{id:"postfiles",type:"primary"}},[t._v("上传")])],1)]),t._v(" "),o("el-pagination",{staticStyle:{"margin-top":"15px"},attrs:{"current-page":t.currentPage,"page-sizes":[15,20],"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},i=[],s=(a("7bc1"),a("7364"),a("d4d5"),a("0857"),a("7f3e")),n=a.n(s),l={data:function(){return{uploader:null,uploadFilesLength:[],uploadButtonEvent:null,uploadFilesArray:[],formdata:new FormData,updataFiles:!1,uploadImgTimes:0,uploadUseData:{},showUploadProgress:!1,uploadStatus:"exception",uploadPercent:20,dropboxLoading:!1,uploadDropBoxDialog:!1,tableDataBegin:[],tableDataName:"",tableDataEnd:[],currentPage:0,pageSize:0,modal:!1,modal_time:!1,total:0,limit:15,idss:[],courseId:"",val:1,page:"",ruleForm:{},historyLessons:!1}},multipleSelection:[],mounted:function(){this.getTableData(),console.log(this.$plup)},methods:{uploadDropbox:function(t,e){var a,o,i,s,l,r,d,u,p,c=this;function h(){this.date=new Date,"function"!==typeof this.newGUID&&(h.prototype.newGUID=function(){this.date=new Date;for(var t="",e=this.hexadecimal(this.getGUIDDate(),16),a=this.hexadecimal(this.getGUIDTime(),16),o=0;o<9;o++)t+=Math.floor(16*Math.random()).toString(16);t+=e,t+=a;while(t.length<32)t+=Math.floor(16*Math.random()).toString(16);return this.formatGUID(t)},h.prototype.getGUIDDate=function(){return this.date.getFullYear()+this.addZero(this.date.getMonth()+1)+this.addZero(this.date.getDay())},h.prototype.getGUIDTime=function(){return this.addZero(this.date.getHours())+this.addZero(this.date.getMinutes())+this.addZero(this.date.getSeconds())+this.addZero(parseInt(this.date.getMilliseconds()/10))},h.prototype.addZero=function(t){return"NaN"!=Number(t).toString()&&t>=0&&t<10?"0"+Math.floor(t):t.toString()},h.prototype.hexadecimal=function(t,e,a){return void 0!=a?parseInt(t.toString(),a).toString(e):parseInt(t.toString()).toString(e)},h.prototype.formatGUID=function(t){var e=t.slice(0,8)+"-",a=t.slice(8,12)+"-",o=t.slice(12,16)+"-",i=t.slice(16,20)+"-",s=t.slice(20);return e+a+o+i+s})}this.uploadDropBoxDialog=!0,this.uploadUseData=t,u=new h,p=0,d=4===this.uploadUseData.scTypeed?this.$api.baseURL+"api/oss/getAliOSSUploadSignWyard?dir=courseware/"+u.newGUID()+"/":this.$api.baseURL+"api/oss/getAliOSSUploadSign?dir=courseware/"+u.newGUID()+"/",this.$axios({url:d}).then(function(t){function e(t,e){r=encodeURIComponent(e),console.log(r),d(t,e,!1)}function d(t,n,r){r&&e(t,n);var d={key:l+n,policy:i,OSSAccessKeyId:a,success_action_status:"200",signature:s};t.setOption({url:o,multipart_params:d}),t.start()}a=t.data.body.accessid,o=t.data.body.host,i=t.data.body.policy,s=t.data.body.signature,l=t.data.body.dir;var u=c;c.uploader=new n.a.Uploader({runtimes:"html5,flash,silverlight,html4",browse_button:"selectfiles",flash_swf_url:"../../../public/libs/Moxie.swf",silverlight_xap_url:"../../../public/libs/Moxie.xap",url:"http://oss.aliyuncs.com",init:{PostInit:function(){document.getElementById("ossfile").innerHTML="",document.getElementById("postfiles").onclick=function(){return d(u.uploader,"",!1),!1}},FilesAdded:function(t,e){for(var a in console.log(e),e)u.uploadFilesLength.push(e[a]);console.log(u.uploadFilesLength.length),n.a.each(e,function(t){document.getElementById("ossfile").innerHTML+='<div id="'+t.id+'" style="padding: 10px 0;">'+t.name+" ("+n.a.formatSize(t.size).split(" ")[0]+n.a.formatSize(t.size).split(" ")[1].toUpperCase()+')<b></b><div class="progress" style="display:none;"><div class="progress-bar" style="width: 0%"></div></div></div>'})},BeforeUpload:function(t,e){d(t,e.name,!0)},UploadProgress:function(t,e){this.updataFiles=!0;var a=document.getElementById(e.id);a.getElementsByClassName("progress")[0].style.display="block",a.getElementsByTagName("b")[0].innerHTML='<span style="display:inline-block;padding-left:10px;">'+e.percent+"%</span>";var o=a.getElementsByTagName("div")[0],i=o.getElementsByTagName("div")[0];i.style.width=e.percent+"%",i.setAttribute("aria-valuenow",e.percent)},FileUploaded:function(t,e,a){if(200===a.status){p++,u.uploadFilesArray=[];var i={cdId:u.uploadUseData.courseId,groupId:0,name:e.name,url:o+"/"+l+r};u.uploadFilesArray.push(i),u.$axios({url:u.$api.baseURL+"api/teacher/courseware/saveWithOssUrl",method:"post",data:JSON.stringify(u.uploadFilesArray),headers:{"Content-Type":"application/json"}}).then(function(t){u.updataFiles=!1,200===t.data.status&&(u.$message({type:"success",message:"文件上传成功"}),p===u.uploadFilesLength.length&&setInterval(function(){window.location.reload()},1e3))}).catch(function(t){u.updataFiles=!1})}else document.getElementById(e.id).getElementsByTagName("b")[0].innerHTML=a.response},Error:function(t,e){u.$message({type:"error",message:"文件上传失败， 请刷新重试"}),u.updataFiles=!1,u.uploader=this.$plup.destroy(),u.uploadDropBoxDialog=!1,u.uploadFilesLength=[]}}}),c.uploader.init()}).catch(function(t){})},uploadDropBoxDialogClose:function(){this.uploadDropBoxDialog=!1,this.uploadFilesLength=[],this.uploader.destroy()},search:function(){this.getTableData()},getTableData:function(){var t=this;this.historyLessons=!0,this.$axios({url:this.$api.baseURL+"api/teacher/order/list",params:{page:this.val,limit:this.limit,statused:48,key:this.tableDataName}}).then(function(e){t.historyLessons=!1,t.tableDataEnd=e.data.body.list,t.total=e.data.body.totalCount,t.pageSize=e.data.body.totalCount,t.currentPage=e.data.body.currPage}).catch(function(e){t.historyLessons=!1})},apply:function(t,e){4==t.scTypeed?window.open("seller_detail-wy.html?id="+t.courseId+"&wyid="+t.offCourseName+"&iswy=true"):window.open("seller_detail.html?id="+t.courseId)},handleSizeChange:function(t){console.log("每页 ".concat(t," 条")),this.limit=t,this.getTableData()},handleCurrentChange:function(t){this.val=t,this.getTableData()}}},r=l,d=(a("6417"),a("c524"),a("17cc")),u=Object(d["a"])(r,o,i,!1,null,"6ee97a26",null);e["default"]=u.exports},6417:function(t,e,a){"use strict";var o=a("9ebe"),i=a.n(o);i.a},"9ebe":function(t,e,a){},c524:function(t,e,a){"use strict";var o=a("dc81"),i=a.n(o);i.a},dc81:function(t,e,a){}}]);