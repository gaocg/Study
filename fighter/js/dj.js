/*
			通过定时任务创造出随机速度随机位置的dom元素作为目标靶，
			创建一个dom 该dom跟随鼠标位置并且可以发射子弹，
			子弹遇到目标靶就和该目标靶同时消失
		*/
		function createDom() {
			var m = Math.random();
			var d = document.createElement("div");
			var img = document.createElement("img");

			img.style.width = "50px";
			img.style.height = "50px";
			img.src =" img/dj.png";
			d.style.top = 0 + "px";
			d.style.width = "50px";
			d.style.height = "50px";
			d.appendChild(img);
			d.style.position = "absolute";
			d.setAttribute("class","dj");
			d.style.left = (m*2000 > screen.availWidth) ? (m*2000 - screen.availWidth) : (m*2000) + "px"; 
			//d.style.top += m*100 + "px";
			
			setTimeout(speed(10,d,m),100);
			// var create = setInterval(speed(10,d),100);
			document.body.appendChild(d);
				setTimeout(createDom,1000);
		
		}
		setTimeout(createDom,1000);

		//定义靶元素运动速度
		function speed(time,selector,math){
			setTimeout(spd,100);
			
			
			function spd(){
				time += Math.random()*10;
				
				selector.style.top = time + "px" ;
				var lef = parseInt(selector.style.left);
				if(math >= 0.6){
					selector.style.left = lef - 10 + "px";
					if(lef <= 0 ){
						selector.style.left = lef + 20 + "px";
					}
				}else{
					selector.style.left = lef + 10 + "px";
					if(lef >= 900){
						selector.style.left = lef - 20 + "px";
					}
				}
				
				if(parseInt(selector.style.top) < 500){
					setTimeout(spd,100);
				}else{
				 document.body.removeChild(selector);
				 //clearInterval(create);
				}
			};
			
		}