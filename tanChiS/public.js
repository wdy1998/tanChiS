//碰撞检测
function pz(obj1,obj2){
		var L1 = obj1.offsetLeft;
		var R1 = obj1.offsetLeft + obj1.offsetWidth;
		var T1 = obj1.offsetTop;
		var B1 = obj1.offsetTop + obj1.offsetHeight;
		
		var L2 = obj2.offsetLeft;
		var R2 = obj2.offsetLeft + obj2.offsetWidth;
		var T2 = obj2.offsetTop;
		var B2 = obj2.offsetTop + obj2.offsetHeight;
		
		if( R1 < L2 || L1 > R2 || B1 < T2 || T1 > B2){//碰不上
			return false;
		}else{
			return true;
		}
	}
//任意数随机值
function getRand(min,max){
		return Math.round(Math.random()*(max-min)+min);
	}
//随机颜色
	function getColor(){
		var color="#";
		var str="0123456789abcde";
		for(var i=0;i<6;i++){
			var index=getRound(0,15);
			color+=str.charAt(index);
		}
		//alert(color);
		return color;
	}
	//获取当前时间函数
	function dateToString(sign){
		var now=new Date();
		sign=sign||"-";
		var y=toTow( now.getFullYear() );
		var m=toTow(now.getMonth()+1);
		var d=toTow(now.getDate());
		var h=toTow(now.getHours());
		var mint=toTow(now.getMinutes());
		var s=toTow(now.getSeconds());
		return y+sign+m+sign+d+" "+h+":"+mint+":"+s;
	}
	//小于10加个0
	function toTow(num){
		return num<10?"0"+num:num;
	}
	//字符串转时间日期格式
	function StringToDate(str){
		return new Date(str);
	}
	//时间差
	function diff(start,end){
		return Math.abs( start.getTime()-end.getTime() )/1000;//到秒
	}
	//根据id找元素
	function $(id){
		return document.getElementById(id);
	}
	//判断鼠标操作的是左键？右键？还是滚轮
	function getButton(evt){
		var e=evt||event
		if( evt ){
			return e.button;
		}else if( window.event ){
			switch(e.button){
				case 1:return 0;break;
				case 4:return 1;break;
				case 2:return 2;break;
				
			}
		}
	}
//dom操作创建元素
function create(ele){
	return document.createElement(ele);
}
