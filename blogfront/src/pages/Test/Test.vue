<template>
  <div id="Test">
    <!-- <div class="lv-search-div">
      <lv-search v-bind:width="width" :onClick="_onClick"></lv-search>
    </div>

    <div class="lv-pagination-div">
      <lv-pagination
      :selectedNum="selectedNum"
      :totalAmount="totalAmount"
      :page_size="page_size"
      :onClick="_onClick"
      ></lv-pagination>
    </div>

    <div class="lv-sort-strip-div">
      <lv-sort-strip
      :priDir="priDir"
      :hrefs="hrefs"
      :onChange="_onChange">
      </lv-sort-strip>
    </div>

    <div class="ele-auto-complete">
        <el-autocomplete
       class="inline-input"
       v-model="school"
       :fetch-suggestions="querySearch"
       placeholder="请输入学校"
       :trigger-on-focus="false"
       @select="handleSelect"
     ></el-autocomplete>
    </div> -->
    <el-progress type="circle" :percentage="progress" v-if="!status"></el-progress>
    <el-progress class="move-lvzu" type="circle" :percentage="100" status="success" v-if="status" width="150"></el-progress>

  </div>
</template>
<script>
import './cropbox.js'

import schools from './schools.js'
import Lvment from 'lvment'

var Search = Lvment.Search
var Pagination = Lvment.Pagination
var SortStrip = Lvment.SortStrip

export default {
  name: "Test",

  data(){
    return{
      //lv-search
      width:312,
      height:40,
      //lv-pagination
      selectedNum:1,
      page_size:15,
      totalAmount:100,
      //lv-sort-strip
      priDir:['首页','Lvment主页','注册登录','Lvment测试页面'],
      hrefs:['/#/','/#/main','/#/register','/#/test'],

      //element auto-complete
       school: '',
       schools:'',

      //图片上传测试
      file:'',

      progress:'0',
      status:false,
    }
  },

  components: {
    lvSearch:Search,
    lvPagination:Pagination,
    lvSortStrip:SortStrip,

  },

  methods: {

    _onChange(i) {
      console.log(i);
    },

    _onClick(i){
      console.log(i);
    },

    querySearch(queryString, cb) {
      var schools = this.schools;
      var results = queryString ? schools.filter(this.createFilter(queryString)) : schools;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (school) => {
        return (school.value.indexOf(queryString.toLowerCase()) === 0);
      };
    },

    _fileUpload(x){
      var img = new Image()
      img.url = x.target.value
      console.log(img);
    },

  },

  mounted() {
    const t = this
    setInterval(function () {
      if(t.progress == 100){
        t.status = true
      }
      t.progress++;
    },100)

  },

}
</script>


<style lang="scss" scoped>

#Test{
    margin: 0 auto;
    text-align: center;
}

.lv-search-div{
  margin: 20px 20%;
}

.lv-pagination-div{

  margin:50px 30%;
}

.lv-sort-strip-div{
  margin: 0 20%;
}

//*********
@charset "utf-8";
.container {
	width: 400px;
	margin: 40px auto 0 auto;
	position: relative;
	font-family: 微软雅黑;
	font-size: 12px;
}
.container p {
	line-height: 12px;
	line-height: 0px;
	height: 0px;
	margin: 10px;
	color: #bbb
}
.action {
	width: 400px;
	height: 30px;
	margin: 10px 0;
}
.cropped {
	position: absolute;
	right: -230px;
	top: 0;
	width: 200px;
	border: 1px #ddd solid;
	height: 460px;
	padding: 4px;
	box-shadow: 0px 0px 12px #ddd;
	text-align: center;
}
.imageBox {
	position: relative;
	height: 400px;
	width: 400px;
	border: 1px solid #aaa;
	background: #fff;
	overflow: hidden;
	background-repeat: no-repeat;
	cursor: move;
	box-shadow: 4px 4px 12px #B0B0B0;
}
.imageBox .thumbBox {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 200px;
	height: 200px;
	margin-top: -100px;
	margin-left: -100px;
	box-sizing: border-box;
	border: 1px solid rgb(102, 102, 102);
	box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);
	background: none repeat scroll 0% 0% transparent;
}
.imageBox .spinner {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	text-align: center;
	line-height: 400px;
	background: rgba(0,0,0,0.7);
}
.Btnsty_peyton{ float: right;
   width: 66px;
  display: inline-block;
  margin-bottom: 10px;
  height: 57px;
  line-height: 57px;
  font-size: 20px;
  color: #FFFFFF;
  margin:0px 2px;
  background-color: #f38e81;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0px 0px 5px #B0B0B0;
  border: 0px #fff solid;}
/*选择文件上传*/
.new-contentarea {
	width: 165px;
	overflow:hidden;
	margin: 0 auto;
	position:relative;float:left;
}
.new-contentarea label {
	width:100%;
	height:100%;
	display:block;
}
.new-contentarea input[type=file] {
	width:188px;
	height:60px;
	background:#333;
	margin: 0 auto;
	position:absolute;
	right:50%;
	margin-right:-94px;
	top:0;
	right/*\**/:0px\9;
	margin-right/*\**/:0px\9;
	width/*\**/:10px\9;
	opacity:0;
	filter:alpha(opacity=0);
	z-index:2;
}
a.upload-img{
	width:165px;
	display: inline-block;
	margin-bottom: 10px;
	height:57px;
	line-height: 57px;
	font-size: 20px;
	color: #FFFFFF;
	background-color: #f38e81;
	border-radius: 3px;
	text-decoration:none;
	cursor:pointer;
	border: 0px #fff solid;
	box-shadow: 0px 0px 5px #B0B0B0;
}
a.upload-img:hover{
	background-color: #ec7e70;
}

.tc{text-align:center;}


//切换界面时的animation
@-webkit-keyframes move-lvzu {
    0% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
//animation的使用类  绑定后会有切换的效果
.move-lvzu {
    -webkit-animation: move-lvzu .8s cubic-bezier(.4, 0, .2, 1) 0s 1;
    animation: move-lvzu .8s cubic-bezier(.4, 0, .2, 1) 0s 1;
}

</style>
