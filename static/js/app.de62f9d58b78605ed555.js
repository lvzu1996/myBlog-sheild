webpackJsonp([1],{164:function(t,e,s){"use strict";var n=s(3),i=s.n(n),r=s(284),a=s(269),o=s.n(a),c=s(270),l=s.n(c),u=s(271),h=s.n(u),v=s(272),d=s.n(v),m=s(273),_=s.n(m);i.a.use(r.a),e.a=new r.a({routes:[{path:"/hello",name:"Hello",component:o.a},{path:"/",name:"Home",component:l.a},{path:"/register",name:"Register",component:d.a},{path:"/main",name:"Main",component:h.a},{path:"/test",name:"Test",component:_.a}]})},166:function(t,e){},167:function(t,e,s){function n(t){s(254)}var i=s(4)(s(194),s(278),n,null,null);t.exports=i.exports},191:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"lv-pagination",props:["selectedNum","totalAmount","page_size"],data:function(){return{selected:1,total:0,amount:9,move:0,_seven:!1,leftpoint_condition:!1,rightpoint_condition:!1}},components:{},mounted:function(){if(this.selected=this.selectedNum,this.total=Math.ceil(this.totalAmount/this.page_size),this.total<7)return this._seven=!0,void(this.amount=this.total+2);this._seven=!1},updated:function(){console.log(this.selected),this.$emit("selected_num",this.selected)},methods:{showWhich:function(t){var e=this.amount,s=this.total,n=this.selected;return this._seven?1==t?"":2==t?"1":t==e?"":(t-1).toString():1==t?"":2==t?"1":3==t?this.leftpoint_condition?"<<":"...":t==e-1?s:t==e?"":n<5?t==e-2?this.rightpoint_condition?">>":"...":t-2:n>=s-4?s+1+t-e:t==e-2?this.rightpoint_condition?">>":"...":n+t-5},item_onClick:function(t){var e=this.selected,s=this.total,n=this.amount;if(this._seven){if(1!=t&&t!=n)return void(this.selected=t-1);if(1==t&&1!=e)return void this.selected--;if(t==n&&e!=s)return void this.selected++}else if(e<=4){if(t==n)return void this.selected++;if(t==n-2)return void(this.selected+=3);if(1==t){if(1==e)return;return void this.selected--}if(t>=4&&t<=6)return void(this.selected=t-2);if(t==n-1)return void(this.selected=s);if(2==t)return void(this.selected=1)}else if(e>=s-4){if(1==t)return void this.selected--;if(3==t)return void(this.selected-=3);if(t==n){if(e==s)return;return void this.selected++}if(t>=4&&t<=n-1)return void(this.selected=s-8+t);if(2==t)return void(this.selected=1)}else{if(1==t)return void this.selected--;if(2==t)return void(this.selected=1);if(3==t)return void(this.selected-=3);if(t==n)return void this.selected++;if(t==n-1)return void(this.selected=s);if(t==n-2)return void(this.selected+=3);if(4==t||6==t){if(4==t)return void this.selected--;if(6==t)return void this.selected++}}},isSelected:function(t){var e=this.selected,s=this.total,n=this.amount;if(this._seven){if(1==t||t==n)return!1;if(t==e+1)return!0}else if(e<=4){if(2==t&&1==e)return!0;if(t>=4&&t<=6&&t==e+2)return!0}else if(e>=s-4){if(s-e==n-t-1)return!0}else if(5==t)return!0},move_isShow:function(t){return!!this._seven||!(3==t&&this.selected<5)},canNotClick:function(t){return 1==t?1==this.selected:t==this.amount?this.selected==this.total:void 0},point_hover:function(t){2==t&&this.selected},change_condition:function(t){if(this.leftpoint_condition||this.rightpoint_condition)return this.leftpoint_condition=!1,void(this.rightpoint_condition=!1);if(t==t||t==this.amount-2)return 3==t&&this.selected>4?void(this.leftpoint_condition=!0):t==this.amount-2&&this.selected<this.total-4?void(this.rightpoint_condition=!0):void 0},isLeftArrow:function(t){return 1==t},isRightArrow:function(t){return t==this.amount}}}},192:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"lv-search",props:["width","height"],data:function(){return{i_style:{lineHeight:this.height+"px"},input_style:{width:this.width+"px",height:this.height+"px"},button_style:{height:this.height+"px"}}}}},193:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"lv-sort-strip",props:["priDir","height","selectedNum","onChange","hrefs"],data:function(){return{selected:0,secFlags:[],strip_style:{height:(this.height||"47")+"px"}}},mounted:function(){var t=this;t.selected=t.selectedNum||1,t.secFlags=Array(t.priDir.length).fill(!1)},methods:{_selected:function(t){return t+1==this.selected},_onClick:function(t){this.selected=t+1},_showSec:function(t){this.secFlags[t]=!0},_hideSec:function(t){this.secFlags[t]=!1},_secIsShowed:function(t){return!!this.secFlags[t]}}}},194:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{width:312,height:32}}}},195:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myfooter",data:function(){return{}}}},196:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},197:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(31),i=s.n(n),r=s(0),a=s.n(r);e.default={name:"home",data:function(){return{question_str:"what do you want to do ?",user_name:"",now_time:a()().format("h:mm:ss a"),show_welcome:!1,show_name:!1,show_question:!1,show_comments:!1,show_chat:!1,show_choices:!1,show_time:!1,comment_str:"",chat_str:"",comment_interval_flag:!0,picList:[],bg_url:"",overlay_url:"",hostname:"47.94.129.112"}},mounted:function(){var t=this;if(setInterval(function(){t.now_time=a()().format("h:mm:ss a")},1e3),fetch("http://"+t.hostname+"/api/get_pic_urls",{method:"get"}).then(function(t){return t.json()}).then(function(e){var s=!0,n=!1,r=void 0;try{for(var a,o=i()(e.list);!(s=(a=o.next()).done);s=!0){var c=a.value;t.picList.push({pic_name:c.fields.pic_name,pic_url:c.fields.pic_url}),"background"==c.fields.pic_name&&(t.bg_url=c.fields.pic_url),"overlay"==c.fields.pic_name&&(t.overlay_url=c.fields.pic_url)}}catch(t){n=!0,r=t}finally{try{!s&&o.return&&o.return()}finally{if(n)throw r}}var l=new Image;l.src=t.bg_url,l.onload=function(){$(".mine-home").css("background-position","center"),$(".mine-home").css("height",$(window).height()),$(".overlay").css("height",$(window).height())}}),"true"==localStorage.isVisited&&localStorage.username)return t.show_welcome=!1,t.show_question=!0,t.show_choices=!0,void(t.show_time=!0);localStorage.isVisited=!0,t.show_welcome=!0,setTimeout(function(){t.show_welcome=!1},3e3),setTimeout(function(){t.show_name=!0},4600)},methods:{_conmment:function(){if(this.chat_str="",this.question_str="what do you want to do ?",!this.show_chat)return void(this.show_comments=!0);var t=this;this.show_chat=!1,setTimeout(function(){t.show_comments=!0},500)},_submitComment:function(t){var e=this,s=this;return""==t.target.value?void this.$message({showClose:!0,message:"评论请勿为空"}):0==this.comment_interval_flag?void this.$message({showClose:!0,message:"请勿短时间提交多次评论！"}):(this.show_comments=!1,this.comment_str="",this.comment_interval_flag=!1,setTimeout(function(){s.comment_interval_flag=!0},5e3),void fetch("http://"+s.hostname+"/api/comment?user="+localStorage.username+"&comment="+t.target.value,{method:"get"}).then(function(t){return t.json()}).then(function(t){"success"==t.msg&&e.$message({showClose:!0,message:"评论已成功送到lvzu那边了😂！"})}))},_submitName:function(t){var e=this;if(""==t.target.value)return void this.$message({showClose:!0,message:"姓名请勿为空"});localStorage.username=t.target.value,this.show_name=!1,setTimeout(function(){e.show_choices=!0,e.show_time=!0,e.show_question=!0},1e3)},_chat:function(){if(this.comment_str="",!this.show_comments)return void(this.show_chat=!0);var t=this;this.show_comments=!1,setTimeout(function(){t.show_chat=!0},1e3)},_submitChat:function(){var t=this;fetch("http://www.tuling123.com/openapi/api?key=add0513d906d4febabfd0ce2a42102ef&info="+t.chat_str+"&userid="+localStorage.username,{}).then(function(t){return t.json()}).then(function(e){if(console.log(e.text.substr(0,20)),e.text.length>20){var s=e.text.substr(0,17);s+="...",t.question_str=s}else t.question_str=e.text}),this.chat_str=""}}}},198:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(268),i=s.n(n);e.default={name:"Main",components:{myfooter:i.a},data:function(){return{typingStr1:"只为守护世界和平",typingStr2:"只为让你少加班",typingStr3:"只为这样的你：",peopleType:["产品设计师","交互设计师","视觉设计师","产品经理","前端工程师"],str1:""}},beforeMount:function(){!function(t,e){var s=t.documentElement,n="orientationchange"in window?"orientationchange":"resize",i=function(){var t=s.clientWidth;t&&(s.style.fontSize=t/1920*16+"px")};t.addEventListener&&(e.addEventListener(n,i,!1),t.addEventListener("DOMContentLoaded",i,!1))}(document,window),window.onscroll=function(){var t=document.body.scrollTop/212;$("#header-fa").css("background-color","rgba(32, 160, 255,"+t+")")}},mounted:function(){var t=this,e=1;t.str1=" ",$("#typing1").css("height","3rem"),setTimeout(function(){$("#typing1").css("height","auto");var s=setInterval(function(){t.str1=t.typingStr1.substring(0,e),++e>t.typingStr1.length&&clearInterval(s)},130)},2500),setTimeout(function(){var s=setInterval(function(){t.str1=t.typingStr1.substring(0,e),--e<2&&(clearInterval(s),e++)},120)},4800),setTimeout(function(){var s=setInterval(function(){t.str1=t.typingStr2.substring(0,e),++e>t.typingStr2.length&&clearInterval(s)},150)},7e3),setTimeout(function(){var s=setInterval(function(){t.str1=t.typingStr2.substring(0,e),--e<0&&(clearInterval(s),e+=2,$("#typing1").css("height","3rem"))},120)},9200),setTimeout(function(){$("#typing1").css("height","auto");var s=setInterval(function(){t.str1=t.typingStr3.substring(0,e),++e>t.typingStr3.length&&clearInterval(s)},120)},11e3),setTimeout(function(){var s=0,n=!0,i=!1;e=0;setInterval(function(){i||(t.str1=t.typingStr3+t.peopleType[s].substring(0,e),n?++e==t.peopleType[s].length+1&&(n=!1,e--,i=!i,setTimeout(function(){i=!i},2e3)):-1==--e&&(n=!0,e++,i=!i,setTimeout(function(){i=!i},2e3),5==++s&&(s=0)))},120)},13e3)},methods:{changeEn:function(){$("#lang-en").css({"font-weight":"bold",color:"#fff"}),$("#lang-cn").css({"font-weight":"normal",color:"#e7e3e3"})},changeCn:function(){$("#lang-cn").css({"font-weight":"bold",color:"#fff"}),$("#lang-en").css({"font-weight":"normal",color:"#e7e3e3"})}}}},199:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(31),i=s.n(n),r=s(202);e.default={name:"Register",data:function(){return{picList:[],bg_url:"",log_username:"",log_password:"",register_nickname:"",register_username:"",register_password:"",register_verifycode:"",isLog:!1,remember:!1,login_icon_hrefs:["#icon-ziyuan","#icon-shejiao-instagram","#icon-shejiao-github","#icon-shejiao1","#icon-shejiao-facebook"],register_icon_hrefs:["#icon-ziyuan","#icon-weibo","#icon-shejiao-twitter","#icon-shejiao1","#icon-shejiao-github"],user_msg_showing:!1,verify_code_show:!1,hostname:"47.94.129.112"}},mounted:function(){var t=this;fetch("http://"+t.hostname+"/api/get_pic_urls",{method:"get"}).then(function(t){return t.json()}).then(function(e){var s=!0,n=!1,r=void 0;try{for(var a,o=i()(e.list);!(s=(a=o.next()).done);s=!0){var c=a.value;t.picList.push({pic_name:c.fields.pic_name,pic_url:c.fields.pic_url}),"background"==c.fields.pic_name&&(t.bg_url=c.fields.pic_url)}}catch(t){n=!0,r=t}finally{try{!s&&o.return&&o.return()}finally{if(n)throw r}}})},methods:{setLog:function(){if(!this.isLog)return this.setNull(),this.isLog=!0,void(this.verify_code_show=!1)},setReg:function(){if(this.isLog)return this.setNull(),void(this.isLog=!1)},setNull:function(){this.log_username="",this.log_password="",this.register_nickname="",this.register_username="",this.register_password="",this.register_verifycode=""},_login:function(){var t=this,e=this;if(11!=e.log_username.length)return this.$message.error("您的手机号输入有误，请重新输入"),void(e.log_username="");fetch("http://"+e.hostname+"/api/account_login",{method:"post",body:"username="+e.log_username+"&password="+e.log_password,headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){return t.json()}).then(function(s){return"success"==s.msg?(t.$message({message:"登录成功！",type:"success"}),void setTimeout(function(){e.$router.push({path:"/main"})},2500)):"passwordError"==s.msg?(t.$message.error("账号密码有误，请重新输入"),void(e.log_password="")):"notRegisterd"==s.msg?(t.$message({message:"此用户名未注册，请先注册",type:"warning"}),void e.setReg()):void 0})},_verify:function(){var t=this;if(11!=t.register_username.length){if(0==t.register_username.length)return;return this.$message.error("您的手机号输入有误，请重新输入"),void(t.register_username="")}$(".main-part").css("height","600px"),$("#after-move").css("transform","translateY(25px)"),t.verify_code_show=!0},_getVerifyCode:function(){var t=this;if(11!=t.register_username.length)return this.$message.error("您的手机号输入有误，请重新输入"),void(t.register_username="");setTimeout(function(){t.register_verifycode=r.a._generateVCode()},3e3)},_register:function(){var t=this,e=this;return e.register_nickname.length<7?void this.$message.error("您输入的昵称过短，长度应大于6"):11!=e.register_username.length?void this.$message.error("您的手机号输入有误，请重新输入"):6!=e.register_verifycode.length?void this.$message.error("您的验证码有误,请重新获取"):void fetch("http://"+e.hostname+"/api/account_register",{method:"post",body:"username="+e.register_username+"&password="+e.register_password+"&nickname="+e.register_nickname,headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){return t.json()}).then(function(s){"success"==s.msg?(t.$message({message:"恭喜您，注册成功！",type:"success"}),setTimeout(function(){e.isLog=!0},1e3)):"registerd username"==s.msg&&t.$message({message:"该用户名已被注册",type:"warning"})})}}}},200:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(260),i=n.a.Search,r=n.a.Pagination,a=n.a.SortStrip;e.default={name:"Test",data:function(){return{width:312,height:40,selectedNum:1,page_size:15,totalAmount:100,priDir:["首页","Lvment主页","注册登录","Lvment测试页面"],hrefs:["/#/","/#/main","/#/register","/#/test"]}},components:{lvSearch:i,lvPagination:r,lvSortStrip:a},methods:{_onChange:function(t){console.log(t)}}}},201:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),i=s.n(n),r=s(167),a=s.n(r),o=s(164),c=s(165),l=s.n(c),u=s(168),h=s(166);s.n(h);i.a.config.productionTip=!1,i.a.use(l.a),i.a.use(u.a),new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},202:function(t,e,s){"use strict";e.a={_generateVCode:function(){for(var t="",e=0;e<6;e++)t+=Math.floor(10*Math.random());return t}}},250:function(t,e){},251:function(t,e){},252:function(t,e){},253:function(t,e){},254:function(t,e){},255:function(t,e){},256:function(t,e){},257:function(t,e){},258:function(t,e){},259:function(t,e){},264:function(t,e,s){function n(t){return s(i(t))}function i(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":48,"./af.js":48,"./ar":55,"./ar-dz":49,"./ar-dz.js":49,"./ar-kw":50,"./ar-kw.js":50,"./ar-ly":51,"./ar-ly.js":51,"./ar-ma":52,"./ar-ma.js":52,"./ar-sa":53,"./ar-sa.js":53,"./ar-tn":54,"./ar-tn.js":54,"./ar.js":55,"./az":56,"./az.js":56,"./be":57,"./be.js":57,"./bg":58,"./bg.js":58,"./bn":59,"./bn.js":59,"./bo":60,"./bo.js":60,"./br":61,"./br.js":61,"./bs":62,"./bs.js":62,"./ca":63,"./ca.js":63,"./cs":64,"./cs.js":64,"./cv":65,"./cv.js":65,"./cy":66,"./cy.js":66,"./da":67,"./da.js":67,"./de":70,"./de-at":68,"./de-at.js":68,"./de-ch":69,"./de-ch.js":69,"./de.js":70,"./dv":71,"./dv.js":71,"./el":72,"./el.js":72,"./en-au":73,"./en-au.js":73,"./en-ca":74,"./en-ca.js":74,"./en-gb":75,"./en-gb.js":75,"./en-ie":76,"./en-ie.js":76,"./en-nz":77,"./en-nz.js":77,"./eo":78,"./eo.js":78,"./es":80,"./es-do":79,"./es-do.js":79,"./es.js":80,"./et":81,"./et.js":81,"./eu":82,"./eu.js":82,"./fa":83,"./fa.js":83,"./fi":84,"./fi.js":84,"./fo":85,"./fo.js":85,"./fr":88,"./fr-ca":86,"./fr-ca.js":86,"./fr-ch":87,"./fr-ch.js":87,"./fr.js":88,"./fy":89,"./fy.js":89,"./gd":90,"./gd.js":90,"./gl":91,"./gl.js":91,"./gom-latn":92,"./gom-latn.js":92,"./he":93,"./he.js":93,"./hi":94,"./hi.js":94,"./hr":95,"./hr.js":95,"./hu":96,"./hu.js":96,"./hy-am":97,"./hy-am.js":97,"./id":98,"./id.js":98,"./is":99,"./is.js":99,"./it":100,"./it.js":100,"./ja":101,"./ja.js":101,"./jv":102,"./jv.js":102,"./ka":103,"./ka.js":103,"./kk":104,"./kk.js":104,"./km":105,"./km.js":105,"./kn":106,"./kn.js":106,"./ko":107,"./ko.js":107,"./ky":108,"./ky.js":108,"./lb":109,"./lb.js":109,"./lo":110,"./lo.js":110,"./lt":111,"./lt.js":111,"./lv":112,"./lv.js":112,"./me":113,"./me.js":113,"./mi":114,"./mi.js":114,"./mk":115,"./mk.js":115,"./ml":116,"./ml.js":116,"./mr":117,"./mr.js":117,"./ms":119,"./ms-my":118,"./ms-my.js":118,"./ms.js":119,"./my":120,"./my.js":120,"./nb":121,"./nb.js":121,"./ne":122,"./ne.js":122,"./nl":124,"./nl-be":123,"./nl-be.js":123,"./nl.js":124,"./nn":125,"./nn.js":125,"./pa-in":126,"./pa-in.js":126,"./pl":127,"./pl.js":127,"./pt":129,"./pt-br":128,"./pt-br.js":128,"./pt.js":129,"./ro":130,"./ro.js":130,"./ru":131,"./ru.js":131,"./sd":132,"./sd.js":132,"./se":133,"./se.js":133,"./si":134,"./si.js":134,"./sk":135,"./sk.js":135,"./sl":136,"./sl.js":136,"./sq":137,"./sq.js":137,"./sr":139,"./sr-cyrl":138,"./sr-cyrl.js":138,"./sr.js":139,"./ss":140,"./ss.js":140,"./sv":141,"./sv.js":141,"./sw":142,"./sw.js":142,"./ta":143,"./ta.js":143,"./te":144,"./te.js":144,"./tet":145,"./tet.js":145,"./th":146,"./th.js":146,"./tl-ph":147,"./tl-ph.js":147,"./tlh":148,"./tlh.js":148,"./tr":149,"./tr.js":149,"./tzl":150,"./tzl.js":150,"./tzm":152,"./tzm-latn":151,"./tzm-latn.js":151,"./tzm.js":152,"./uk":153,"./uk.js":153,"./ur":154,"./ur.js":154,"./uz":156,"./uz-latn":155,"./uz-latn.js":155,"./uz.js":156,"./vi":157,"./vi.js":157,"./x-pseudo":158,"./x-pseudo.js":158,"./yo":159,"./yo.js":159,"./zh-cn":160,"./zh-cn.js":160,"./zh-hk":161,"./zh-hk.js":161,"./zh-tw":162,"./zh-tw.js":162};n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id=264},265:function(t,e,s){function n(t){s(256)}var i=s(4)(s(191),s(280),n,"data-v-790a1ad9",null);t.exports=i.exports},266:function(t,e,s){function n(t){s(253)}var i=s(4)(s(192),s(277),n,"data-v-27f1b8ce",null);t.exports=i.exports},267:function(t,e,s){function n(t){s(252)}var i=s(4)(s(193),s(276),n,"data-v-12727162",null);t.exports=i.exports},268:function(t,e,s){function n(t){s(250)}var i=s(4)(s(195),s(274),n,"data-v-0cbe3266",null);t.exports=i.exports},269:function(t,e,s){function n(t){s(255)}var i=s(4)(s(196),s(279),n,"data-v-745e36f9",null);t.exports=i.exports},270:function(t,e,s){function n(t){s(251)}var i=s(4)(s(197),s(275),n,"data-v-1142081a",null);t.exports=i.exports},271:function(t,e,s){function n(t){s(258)}var i=s(4)(s(198),s(282),n,"data-v-d899579a",null);t.exports=i.exports},272:function(t,e,s){function n(t){s(259)}var i=s(4)(s(199),s(283),n,"data-v-f318371a",null);t.exports=i.exports},273:function(t,e,s){function n(t){s(257)}var i=s(4)(s(200),s(281),n,"data-v-7edce3d3",null);t.exports=i.exports},274:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("span",[t._v("Lvment 1.4.3 Boron")]),t._v(" "),t._m(0),t._v(" "),s("div",{attrs:{id:"wechat-div"}},[s("svg",{staticClass:"icon",attrs:{id:"wechat","aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-weixin"}})])]),t._v(" "),s("div",{attrs:{id:"github-div"}},[s("svg",{staticClass:"icon",attrs:{id:"github","aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-github"}})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suggest"},[s("a",{attrs:{href:"/#/main"}},[t._v("反馈建议")]),t._v(" "),s("a",{attrs:{href:"/#/main"}},[t._v("贡献指南")]),t._v(" "),s("a",{attrs:{href:"/#/main"}},[t._v("Lvment-React")])])}]}},275:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"mine-home",style:{backgroundImage:"url("+t.bg_url+")"}},[s("div",{staticClass:"overlay",style:{backgroundImage:"url("+t.overlay_url+")"}},[s("transition",{attrs:{name:"fade"}},[t.show_welcome?s("div",{staticClass:"welcome1 move-lvzu"},[t._v("\n          Hello, welcome !\n        ")]):t._e()]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.show_name?s("div",{staticClass:"welcome1"},[t._v("\n            what is your name ?\n            "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user_name,expression:"user_name"}],staticClass:"comment-input",attrs:{type:"text"},domProps:{value:t.user_name},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t._submitName(e)},input:function(e){e.target.composing||(t.user_name=e.target.value)}}})])]):t._e()]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.show_time?s("div",{staticClass:"my-time"},[t._v("\n          "+t._s(t.now_time)+"\n        ")]):t._e()]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.show_question?s("div",{staticClass:"welcome"},[s("span",[t._v(t._s(t.question_str))])]):t._e()]),t._v(" "),t.show_choices?s("div",{staticClass:"choices move-lvzu"},[s("a",{attrs:{href:"#/register"}},[t._v("Sign up & Login")]),t._v(" "),s("span",[t._v("|")]),t._v(" "),s("span",{staticClass:"comment-button",on:{click:t._chat}},[t._v(" Chat  ")]),t._v(" "),s("span",[t._v("|")]),t._v(" "),s("span",{staticClass:"comment-button",on:{click:t._conmment}},[t._v(" Comment ")])]):t._e(),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.show_comments?s("div",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.comment_str,expression:"comment_str"}],staticClass:"comment-input",attrs:{type:"text"},domProps:{value:t.comment_str},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t._submitComment(e)},input:function(e){e.target.composing||(t.comment_str=e.target.value)}}})]):t._e()]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.show_chat?s("div",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chat_str,expression:"chat_str"}],staticClass:"comment-input",attrs:{type:"text"},domProps:{value:t.chat_str},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t._submitChat(e)},input:function(e){e.target.composing||(t.chat_str=e.target.value)}}})]):t._e()])],1)])])},staticRenderFns:[]}},276:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:t.strip_style},[s("div",{attrs:{id:"lv-sort-strip"}},t._l(t.priDir,function(e,n){return s("a",{key:e.key,class:{selected:t._selected(n)},attrs:{href:t.hrefs[n]},on:{click:function(e){t._onClick(n),t.onChange(n)},mouseenter:function(e){t._showSec(n)},mouseleave:function(e){t._hideSec(n)}}},[t._v(t._s(e)+"\n    ")])}))])},staticRenderFns:[]}},277:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lv-search"},[s("input",{staticClass:"lvzu-search-input",style:t.input_style,attrs:{type:"text"}}),t._v(" "),s("button",{staticClass:"lvzu-search-button",style:t.button_style},[s("i",{style:t.i_style})])])},staticRenderFns:[]}},278:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},279:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},280:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},t._l(t.amount,function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.move_isShow(e),expression:"move_isShow(i)"}],staticClass:"square-item",class:{"isSelected-class":t.isSelected(e),"canNotClick-class":t.canNotClick(e),"left-arrow":t.isLeftArrow(e),"right-arrow":t.isRightArrow(e)},on:{mouseenter:function(s){t.change_condition(e)},mouseleave:function(s){t.change_condition(e)},click:function(s){t.item_onClick(e)}}},[t._v("\n    "+t._s(t.showWhich(e)))])}))},staticRenderFns:[]}},281:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"Test"}},[s("div",{staticClass:"lv-search-div"},[s("lv-search",{attrs:{width:t.width,height:t.height}})],1),t._v(" "),s("div",{staticClass:"lv-pagination-div"},[s("lv-pagination",{attrs:{selectedNum:t.selectedNum,page_size:t.page_size,totalAmount:t.totalAmount}})],1),t._v(" "),s("div",{staticClass:"lv-sort-strip-div"},[s("lv-sort-strip",{attrs:{priDir:t.priDir,onChange:t._onChange,hrefs:t.hrefs}})],1)])},staticRenderFns:[]}},282:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"Main"}},[s("div",{attrs:{id:"header-fa"}},[s("div",{attrs:{id:"header"}},[t._m(0),t._v(" "),s("div",{attrs:{id:"header-tabs"}},[s("a",{staticClass:"tab-single",attrs:{href:"/#/main"}},[t._v("\n          指南\n        ")]),t._v(" "),s("a",{staticClass:"tab-single",attrs:{href:"/#/main"}},[t._v("\n          组件\n        ")]),t._v(" "),s("a",{staticClass:"tab-single",attrs:{href:"/#/main"}},[t._v("\n          资源\n        ")]),t._v(" "),s("div",{staticClass:"tab-single"},[s("span",{attrs:{id:"lang-cn"},on:{click:function(e){t.changeCn()}}},[t._v("中文")]),t._v(" "),s("span",[t._v("/")]),t._v(" "),s("span",{attrs:{id:"lang-en"},on:{click:function(e){t.changeEn()}}},[t._v("En")])])])])]),t._v(" "),s("div",{attrs:{id:"banner"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"container"},[s("h2",{staticClass:"title"},[t._v("\n      网站快速成型工具\n    ")]),t._v(" "),s("div",{staticClass:"caret",attrs:{id:"typing1"}},[t._v("\n      "+t._s(t.str1)+"\n    ")])]),t._v(" "),s("div",{attrs:{id:"intro_str"}},[t._v("\n    Lvment，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型\n  ")]),t._v(" "),t._m(3),t._v(" "),s("myfooter")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"http://ovfey247f.bkt.clouddn.com/main/tubiao.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"banner-stars"}},[s("img",{attrs:{src:"http://ovfey247f.bkt.clouddn.com/main/banner_star.png",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{id:"banner-pic",src:"http://ovfey247f.bkt.clouddn.com/main/banner_pic",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"intro_info"},[s("li",{staticClass:"intro_info_single"},[s("img",{attrs:{src:"http://ovfey247f.bkt.clouddn.com/main/zhinan.png"}}),t._v(" "),s("h3",[t._v("指南")]),t._v(" "),s("p",[t._v("了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。")]),t._v(" "),s("a",{attrs:{href:"/#/main"}},[t._v("查看详情")])]),t._v(" "),s("li",{staticClass:"intro_info_single"},[s("img",{attrs:{src:"http://ovfey247f.bkt.clouddn.com/main/zujian.png"}}),t._v(" "),s("h3",[t._v("组件")]),t._v(" "),s("p",[t._v("使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。")]),t._v(" "),s("a",{attrs:{href:"/#/main"}},[t._v("查看详情")])]),t._v(" "),s("li",{staticClass:"intro_info_single"},[s("img",{attrs:{src:"http://ovfey247f.bkt.clouddn.com/main/ziyuan.png"}}),t._v(" "),s("h3",[t._v("资源")]),t._v(" "),s("p",[t._v("下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。")]),t._v(" "),s("a",{attrs:{href:"/#/main"}},[t._v("查看详情")])])])}]}},283:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-vue"},[s("div",{staticClass:"main-part"},[s("div",{staticClass:"ope"},[s("a",{staticClass:"normal",class:{active:t.isLog},on:{click:t.setLog}},[t._v("登录")]),t._v(" "),s("b",{staticClass:"point"},[t._v("·")]),t._v(" "),s("a",{staticClass:"normal",class:{active:!t.isLog},on:{click:t.setReg}},[t._v("注册")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLog,expression:"isLog"}],staticClass:"if-class",class:{"move-lvzu":t.isLog}},[s("div",{staticClass:"login-input"},[s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-yonghuming1"}})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.log_username,expression:"log_username"}],staticClass:"us-pd-input",attrs:{maxlength:"11",spellcheck:"false",placeholder:"手机号"},domProps:{value:t.log_username},on:{input:function(e){e.target.composing||(t.log_username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-mima"}})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.log_password,expression:"log_password"}],staticClass:"us-pd-input",attrs:{maxlength:"16",type:"password",placeholder:"密码"},domProps:{value:t.log_password},on:{input:function(e){e.target.composing||(t.log_password=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"clarify"},[s("el-checkbox",{model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}}),t._v(" "),s("span",{staticClass:"remember"},[t._v(" 记住我 ")]),t._v(" "),s("span",{staticClass:"login-problem"},[t._v("登录遇到问题?")])],1),t._v(" "),s("div",{staticClass:"button"},[s("el-button",{staticClass:"login-button",attrs:{type:"info",size:"large"},on:{click:t._login}},[t._v("登 录")])],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"other-icons"},t._l(4,function(e){return s("svg",{staticClass:"icon icons",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.login_icon_hrefs[e]}})])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLog,expression:"!isLog"}],staticClass:"el-class",class:{"move-lvzu":!t.isLog}},[s("div",{staticClass:"register-input"},[s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-nicheng"}})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register_nickname,expression:"register_nickname"}],staticClass:"us-pd-input",attrs:{maxlength:"16",spellcheck:"false",placeholder:"你的昵称"},domProps:{value:t.register_nickname},on:{input:function(e){e.target.composing||(t.register_nickname=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-shouji"}})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register_username,expression:"register_username"}],staticClass:"us-pd-input",attrs:{maxlength:"11",spellcheck:"false",placeholder:"手机号"},domProps:{value:t.register_username},on:{blur:t._verify,input:function(e){e.target.composing||(t.register_username=e.target.value)}}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.verify_code_show,expression:"verify_code_show"}],staticClass:"us-pw-input-pre",class:{"move-lvzu-2":t.verify_code_show}},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-yanzhengma"}})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register_verifycode,expression:"register_verifycode"}],staticClass:"us-pd-input",staticStyle:{width:"100px",float:"left","margin-left":"8px"},attrs:{maxlength:"6",type:"text",spellcheck:"false",placeholder:"验证码"},domProps:{value:t.register_verifycode},on:{input:function(e){e.target.composing||(t.register_verifycode=e.target.value)}}}),t._v(" "),s("el-button",{staticClass:"get-verifycode",attrs:{type:"info"},on:{click:t._getVerifyCode}},[t._v("获取验证码")])],1),t._v(" "),s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-mima1"}})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register_password,expression:"register_password"}],staticClass:"us-pd-input",attrs:{maxlength:"22",type:"password",spellcheck:"false",placeholder:"密码"},domProps:{value:t.register_password},on:{input:function(e){e.target.composing||(t.register_password=e.target.value)}}})])]),t._v(" "),s("div",{attrs:{id:"after-move"}},[s("div",{staticClass:"button"},[s("el-button",{staticClass:"login-button",attrs:{id:"reg_but",type:"info",size:"large"},on:{click:t._register}},[t._v("注 册")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"other-icons"},t._l(4,function(e){return s("svg",{staticClass:"icon icons",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.register_icon_hrefs[e]}})])}))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"others"},[s("h6",{staticClass:"social-text"},[t._v("社交账号登录")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"sign-up-msg"},[t._v("点击 “注册” 即表示您同意并愿意遵守"),s("br"),t._v(" "),s("a",{staticStyle:{color:"#58B7FF"},attrs:{href:"#"}},[t._v("用户协议")]),t._v("和\n      "),s("a",{staticStyle:{color:"#58B7FF"},attrs:{href:"#"}},[t._v("隐私政策")]),t._v("。\n    ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"others"},[s("h6",{staticClass:"social-text"},[t._v("社交账号注册")])])}]}},288:function(t,e){}},[201]);
//# sourceMappingURL=app.de62f9d58b78605ed555.js.map