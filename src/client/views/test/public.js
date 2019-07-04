// rem使用优化
!function(n){var e=n.document,t=e.documentElement,i=750,d=i/100,o="orientationchange"in n?"orientationchange":"resize",a=function(){var n=t.clientWidth||320;n>750&&(n=750),t.style.fontSize=n/d+"px"};e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))}(window);

//请求http地址

var local = "http://img.meipingmi.com.cn";// 测试
// var local = "http://img.yunyiku.com.cn";// 正式
var forUrl = "http://www.hzmeipingmi.cn";// 测试
// var forUrl = "https://www.hzmeipingmi.com";// 正式
var http='/apis/api';
var userId=8;	//测试临时用的用户id;
var telReg = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$";
var isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
var isIDCard2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/;

//提示函数
function webTip(txt,fn,time){
	if (document.getElementsByClassName("webTip").length > 0) {
		return;
	}
	var div=document.createElement("div");
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var app=document.body;
	var t;
	if(time){
		t=time;
	}else{
		t=1000;
	}
	div.style.cssText="display: inline-block;padding:0.24rem 0.4rem;background:rgba(114,114,114,0.8);font-size:15px;color:#fff;text-align:center;border-radius:0.08rem;-webkit-transition:all 0.3s;margin:auto;";
	// div2.className = 'xba-blank';
	div3.style.cssText="width:5.85rem;position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);z-index:99999;text-align: center;";
	div.className = 'webTip';
	div.innerHTML=txt;
	div3.appendChild(div);
	app.appendChild(div3);
	app.appendChild(div2);
	setTimeout(function(){
		//app.removeChild(div);
		app.removeChild(div2);
		app.removeChild(div3);
		if(fn) fn();
	},t)
}
//倒计时
function secondLess(num){
	var time=setInterval(function(){
		num--;
		vm.codeTimeOut=num;
		if(num<1){
			clearInterval(time);
		}
	},1000)
};

//获取地址栏参数
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

//获取地址栏的值
function UrlSearch()
{
	var name,value;
	var str=location.href; //取得整个地址栏
	var num=str.indexOf("?")
	str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

	var arr=str.split("&"); //各个参数放到数组里
	for(var i=0;i < arr.length;i++){
		num=arr[i].indexOf("=");
		if(num>0){
			name=arr[i].substring(0,num);
			value=decodeURI(arr[i].substr(num+1));
			this[name]=value;
		}
	}
}
//交互app
function setAccessType(type){
	window.localStorage.removeItem('accessType');
	window.localStorage.setItem('accessType',type);
}
function getUserAgent(){
	var userAgent = navigator.userAgent;
	if(userAgent.indexOf("iPhone") > 0){
		return "ios";
	}else if(userAgent.indexOf("Android") > 0){
		return "android";
	}else{
		return "other";
	}
}
function app(){
	if(window.localStorage.getItem('accessType')=='app'){
		return true;
	}else{
		return false;
	}
}
var pageSize = 10;
