(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0de64182"],{"009e":function(t,i,e){},"0688":function(t,i,e){},"7a22":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"block"},[t._v("网站信息")]),e("div",{staticClass:"block2"},[t._v("网站标题")]),e("div",{staticStyle:{"margin-bottom":"15px",width:"500px"}},[e("el-input",{attrs:{disabled:""},model:{value:t.form.siteTitle,callback:function(i){t.$set(t.form,"siteTitle",i)},expression:"form.siteTitle"}})],1),e("div",{staticClass:"block2"},[t._v("邮箱")]),e("div",{staticStyle:{"margin-bottom":"15px",width:"500px"}},[e("el-input",{attrs:{disabled:""},model:{value:t.form.mail,callback:function(i){t.$set(t.form,"mail",i)},expression:"form.mail"}})],1),e("div",{staticClass:"block2"},[t._v("备案号")]),e("div",{staticStyle:{"margin-bottom":"15px",width:"500px"}},[e("el-input",{attrs:{disabled:""},model:{value:t.form.icp,callback:function(i){t.$set(t.form,"icp",i)},expression:"form.icp"}})],1),e("el-divider"),e("div",{staticClass:"block"},[t._v("网站头像信息")]),e("div",{staticStyle:{"margin-bottom":"15px"}},[e("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.form.avatar}})],1),e("el-divider"),e("div",{staticClass:"block"},[t._v("网址图标信息")]),e("div",{staticClass:"block2"},[t._v("网址图标地址")]),e("div",{staticStyle:{"margin-bottom":"15px",width:"500px"}},[e("el-input",{attrs:{placeholder:"请输入图片地址",disabled:""},model:{value:t.form.favicon,callback:function(i){t.$set(t.form,"favicon",i)},expression:"form.favicon"}})],1),e("div",{staticClass:"block2"},[t._v("网址图标预览")]),e("div",{staticStyle:{"margin-bottom":"15px"}},[e("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.form.favicon}})],1),e("el-divider"),e("div",{staticClass:"block"},[t._v("github 信息")]),e("div",{staticClass:"block2"},[t._v("github 名字")]),e("div",{staticStyle:{"margin-bottom":"15px",width:"500px"}},[e("el-input",{attrs:{disabled:""},model:{value:t.form.githubName,callback:function(i){t.$set(t.form,"githubName",i)},expression:"form.githubName"}})],1),e("div",{staticClass:"block2"},[t._v("github 地址")]),e("div",{staticStyle:{"margin-bottom":"15px",width:"500px"}},[e("el-input",{attrs:{disabled:""},model:{value:t.form.github,callback:function(i){t.$set(t.form,"github",i)},expression:"form.github"}})],1),e("el-divider"),e("div",{staticClass:"block"},[t._v("QQ 信息")]),e("div",{staticClass:"block2"},[t._v("QQ 号码")]),e("div",{staticStyle:{"margin-bottom":"15px",width:"500px"}},[e("el-input",{attrs:{disabled:""},model:{value:t.form.qq,callback:function(i){t.$set(t.form,"qq",i)},expression:"form.qq"}})],1),e("div",{staticClass:"block2"},[t._v("QQ 二维码图片预览")]),e("div",{staticStyle:{"margin-bottom":"15px"}},[e("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.form.qqQrCode}})],1),e("el-divider"),e("div",{staticClass:"block"},[t._v("微信信息")]),e("div",{staticClass:"block2"},[t._v("微信号")]),e("div",{staticStyle:{"margin-bottom":"15px",width:"500px"}},[e("el-input",{attrs:{disabled:""},model:{value:t.form.weixin,callback:function(i){t.$set(t.form,"weixin",i)},expression:"form.weixin"}})],1),e("div",{staticClass:"block2"},[t._v("微信二维码图片预览")]),e("div",{staticStyle:{"margin-bottom":"15px"}},[e("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.form.weixinQrCode}})],1),e("el-divider"),e("el-button",{attrs:{type:"primary"},on:{click:t.openEditPanel}},[t._v("进入编辑模式")]),e("el-dialog",{attrs:{title:"请编辑信息",visible:t.dialogFormVisible,width:"50%",top:"5vh",fullscreen:""},on:{"update:visible":function(i){t.dialogFormVisible=i}}},[e("el-form",{attrs:{model:t.form}},[e("el-form-item",{attrs:{label:"网站标题"}},[e("el-input",{model:{value:t.form2.siteTitle,callback:function(i){t.$set(t.form2,"siteTitle",i)},expression:"form2.siteTitle"}})],1),e("el-form-item",{attrs:{label:"邮箱"}},[e("el-input",{model:{value:t.form2.mail,callback:function(i){t.$set(t.form2,"mail",i)},expression:"form2.mail"}})],1),e("el-form-item",{attrs:{label:"备案号"}},[e("el-input",{model:{value:t.form2.icp,callback:function(i){t.$set(t.form2,"icp",i)},expression:"form2.icp"}})],1),e("el-form-item",{attrs:{label:"网站头像地址"}},[e("Upload",{model:{value:t.form2.avatar,callback:function(i){t.$set(t.form2,"avatar",i)},expression:"form2.avatar"}})],1),e("el-form-item",{attrs:{label:"网站图标地址"}},[e("el-input",{model:{value:t.form2.favicon,callback:function(i){t.$set(t.form2,"favicon",i)},expression:"form2.favicon"}})],1),e("el-form-item",{attrs:{label:"github 名字"}},[e("el-input",{model:{value:t.form2.githubName,callback:function(i){t.$set(t.form2,"githubName",i)},expression:"form2.githubName"}})],1),e("el-form-item",{attrs:{label:"github 地址"}},[e("el-input",{model:{value:t.form2.github,callback:function(i){t.$set(t.form2,"github",i)},expression:"form2.github"}})],1),e("el-form-item",{attrs:{label:"QQ 号码"}},[e("el-input",{model:{value:t.form2.qq,callback:function(i){t.$set(t.form2,"qq",i)},expression:"form2.qq"}})],1),e("el-form-item",{attrs:{label:"QQ 二维码图片地址"}},[e("Upload",{model:{value:t.form2.qqQrCode,callback:function(i){t.$set(t.form2,"qqQrCode",i)},expression:"form2.qqQrCode"}})],1),e("el-form-item",{attrs:{label:"微信号"}},[e("el-input",{model:{value:t.form2.weixin,callback:function(i){t.$set(t.form2,"weixin",i)},expression:"form2.weixin"}})],1),e("el-form-item",{attrs:{label:"微信二维码图片地址"}},[e("Upload",{model:{value:t.form2.weixinQrCode,callback:function(i){t.$set(t.form2,"weixinQrCode",i)},expression:"form2.weixinQrCode"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(i){t.dialogFormVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.confirmEditSetting}},[t._v("确 定")])],1)],1)],1)},o=[],l=e("5530"),s=e("1da1"),r=(e("96cf"),e("b775"));function n(){return c.apply(this,arguments)}function c(){return c=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r["a"].get("/api/setting");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}function m(t){return Object(r["a"])({url:"/api/setting",method:"put",data:t})}var d=e("d443"),u=(e("ccb4"),{data:function(){return{form:{avatar:"",favicon:"",github:"",githubName:"",icp:"",id:"",mail:"",qq:"",qqQrCode:"",siteTitle:"",weixin:"",weixinQrCode:""},form2:{avatar:"",favicon:"",github:"",githubName:"",icp:"",id:"",mail:"",qq:"",qqQrCode:"",siteTitle:"",weixin:"",weixinQrCode:""},dialogFormVisible:!1}},components:{Upload:d["a"]},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;n().then((function(i){t.form=i.data,t.form2=Object(l["a"])({},t.form)}))},openEditPanel:function(){this.dialogFormVisible=!0},confirmEditSetting:function(){var t=this;m(this.form2).then((function(){t.dialogFormVisible=!1,t.fetchData(),t.$message.success("修改成功！")}))}}}),f=u,p=(e("c3d3"),e("2877")),b=Object(p["a"])(f,a,o,!1,null,"689a20de",null);i["default"]=b.exports},bb60:function(t,i,e){"use strict";e("0688")},c3d3:function(t,i,e){"use strict";e("009e")},ccb4:function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));var a="http://localhost:8080"},d443:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"block"},[t._v(t._s(t.uploadTitle))]),e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,headers:t.headers}},[t.value?e("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},o=[],l={props:["uploadTitle","value"],computed:{imageUrl:function(){if(this.value)return this.value},headers:function(){return{Authorization:"Bearer "+localStorage.getItem("adminToken")}}},methods:{handleAvatarSuccess:function(t){!t.code&&t.data&&this.$emit("input",t.data)}}},s=l,r=(e("bb60"),e("2877")),n=Object(r["a"])(s,a,o,!1,null,"2fab909e",null);i["a"]=n.exports}}]);