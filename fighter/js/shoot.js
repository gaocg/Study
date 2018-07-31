//创建子弹
function bullet(){
	var p = document.createElement("p");//子弹
	p.style.background = "red";
	p.style.width = 10 + "px";
	p.style.height = 10 + "px";
	p.style.position = "absolute";
	var dom = document.getElementById("fj");
	var l = dom.style.left;
	var t = dom.style.top;
	
	p.style.left = parseInt(l) + 50 + "px";
	p.style.top = t ;
	document.body.appendChild(p);
	shoot(p,5,t,l);//调用射击函数
	setTimeout(bullet,500);
	//console.log("p");
}
setTimeout(bullet,100);
//射击函数

var jifen = 0 ;
function shoot(selector,time,t,left){
	setTimeout(sht,time);

	var stp = parseInt(t);
	var dj = document.querySelectorAll(".dj");

	function sht(){
		stp = stp - 10 ;	
		selector.style.top = stp + "px";
		if(stp > 0){
			setTimeout(sht,time);
		}else{
			document.body.removeChild(selector);
		}
		//碰撞判断
		var st = parseInt(selector.style.top);
		var sp = parseInt(selector.style.left);
		for(var i = 0 ; i < dj.length; i++){
			/*判断子弹和敌机的坐标，同时判断子弹的display是否为none，同时满足则触发碰撞效果
			*/
			if(parseInt(dj[i].offsetTop) < st && (parseInt(dj[i].offsetTop)+parseInt(dj[i].style.height)) > st ){
				
				if(parseInt(dj[i].offsetLeft) < sp && (parseInt(dj[i].offsetLeft)+parseInt(dj[i].style.width)) > sp){
					if(selector.style.display != "none"){
					
						clearTimeout(setTimeout(sht,time));

						selector.style.display = "none";//直接removeChild 报错
						dj[i].style.display ="none";
						jifen++;

						//clearTimeout();
					}
					
					
				}
			}
		}
	}
}

