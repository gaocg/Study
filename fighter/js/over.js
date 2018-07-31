//游戏结束

function over(){
	m = 10*jifen;
	var oDiv = document.querySelectorAll(".dj");
	for(var j = 0 ; j<oDiv.length ; j++){
		
		if(parseInt(bj.offsetTop) > (parseInt(oDiv[j].offsetTop)-100) && parseInt(bj.offsetTop)<( parseInt(oDiv[j].offsetTop)+parseInt(oDiv[j].style.height))){
			if(parseInt(bj.offsetLeft) > (parseInt(oDiv[j].offsetLeft)-100) && parseInt(bj.offsetLeft)<(parseInt(oDiv[j].offsetLeft)+parseInt(oDiv[j].style.width)) ){
				s_Confirm(m);
			}
		}
	}
}

setInterval(over,100);

function s_Confirm(m){
	var conFirm = confirm("game over" + "   积分：" + m);
	if(conFirm == true){
		location.reload();
	}else{
		window.close();
	}
}

//积分
