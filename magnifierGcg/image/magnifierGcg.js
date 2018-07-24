/**
		*@auther：Gacg

		在页面完全加载后调用该方法
		动态创建node
		selector 选择器 必填
		size 大图相对原图的倍率
		distance 距离原图的距离
		bgc 遮罩层底色
		opac 遮罩层透明度
		**/
	
			function magnifier(selector,size,distance,bgc,opac){

				var selector = selector || [];//selector 是原图片元素父元素
				var	selectorImg = selector.getElementsByTagName("img")[0];
				//获得selector dom的css样式
				var s_l = selectorImg.offsetLeft;//原图片到浏览器左侧距离
				var s_t = selectorImg.offsetTop;//原图片到浏览器顶部距离
				var s_w = selectorImg.width;//原图片宽度
				var s_h = selectorImg.height;//原图片高度
				var size = size || 2 ;//初始化放大倍数
				var distance = distance || 10 ;//距离原图的距离
				var h = (s_h)/(size);//遮罩层尺寸
				var wd = ((s_w)/(size));//遮罩层尺寸
				var bgc = bgc || "yellow";
				var opac = opac || 0.4 ;
				var eX,eY;//鼠标位置
			
			

			selector.onmouseover = function(){

				//创建遮罩层
				if(selector.querySelectorAll(".magnifierMask").length == 0 ){
					var mask = document.createElement("div");
					mask.setAttribute("class","magnifierMask");//给遮罩层赋予class
					mask.style.width = wd + "px";
					mask.style.height = h + "px";
					mask.style.position = "absolute";
					mask.style.zIndex = 999;
					mask.style.background = bgc;
					mask.style.opacity = opac;
					mask.style.display = "none";
					selector.appendChild(mask);
				};
				
				//创建大图区域
				if(document.querySelectorAll(".magnifierBigPic").length == 0 ){
					var d = document.createElement("div");
					d.setAttribute("class","magnifierBigPic");//给大图层赋予class
					d.style.width = s_w + "px";
					d.style.height = s_h +"px";
					d.style.overflow = "hidden";
					d.style.position = "absolute";
					d.style.top = s_t + "px";
					d.style.left = parseInt(s_l + s_w + distance) + "px";

					var img = document.createElement("img");
					img.style.width = (size)*(s_w) + "px";
					img.style.height = (size)*(s_h) + "px";
					img.style.position = "relative";
					img.src = selectorImg.src;
					d.appendChild(img);
					document.body.appendChild(d);
				};
				

			}
			selector.onmouseout = function(){
				selector.querySelectorAll(".magnifierMask")[0].style.display = "none";//删除相应节点
				document.body.removeChild(document.querySelectorAll(".magnifierBigPic")[0]);
			}
			
				

			selector.onmousemove = function(){
				//判断遮罩层是否隐藏
				var Mask = selector.querySelectorAll(".magnifierMask")[0];
				var BigPic = document.querySelectorAll(".magnifierBigPic")[0].getElementsByTagName("img")[0];
				if(Mask.style.display != "block"){
					Mask.style.display = "block";
				}
				//判断鼠标在小图中的位置
				eX = event.pageX - s_l;//距小图左侧
				eY = event.pageY - s_t;//距小图顶部
				//var wd = wd || 100;//遮罩层尺寸
				//var h = h || 100;
				eX = eX > wd/2 ? eX : wd/2;
				eY = eY > (h/2) ? eY : (h/2);

				eX = eX > (s_w - wd/2 ) ? (s_w - wd/2) : eX ;
				eY = eY > (s_h - h/2 ) ? (s_h - h/2) : eY ;

				//遮罩层赋予坐标
				Mask.style.top = s_t + eY - h/2 + "px";
				Mask.style.left = s_l + eX - wd/2 + "px";
				//大图相应显示区域
				BigPic.style.top = -(eY - h/2)*size + "px";
				BigPic.style.left = -(eX - wd/2)*size + "px";
			}
		}
