//创建本机及操控本机

var bj = document.createElement("div");
var bjImg = document.createElement("img");

bj.style.width = 100 + "px";
bj.style.height = 100 + "px";
bj.style.background = "red";
bj.style.top = 490 + "px";
bj.style.left = 490 + "px";
bj.style.position = "absolute";

bj.setAttribute("id","fj");
bjImg.src = "img/fj.jpg";
bjImg.style.width = 100 + "px";
bjImg.style.width = 100 + "px";


bj.appendChild(bjImg);
document.body.appendChild(bj);

document.onmousemove = function(){
		// var w = parseInt(document.getElementById("fj").style.left);
		// console.log(w);
		// var s = parseInt(document.getElementById("fj").style.top);
		if(event.clientX > 50 && event.clientX < 1850){
			document.getElementById("fj").style.left = event.clientX - 50 + "px";
		}
		if(event.clientY > 50 && event.clientY < 900){
			document.getElementById("fj").style.top = event.clientY - 50 + "px";
		}	
			
		}