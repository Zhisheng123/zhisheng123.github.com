(function(){
		'use strict';
	const leftImg = document.getElementById("left");
	const centerImg = document.getElementById("center");
	const rightImg = document.getElementById("right");
	document.body.onmousewheel = function(event) {
		let  scrollTopPost =  document.documentElement.scrollTop;
		let zoom=parseInt(centerImg.style.zoom,10)||100;
		zoom-=scrollTopPost*0.1;
		if(zoom>50) centerImg.style.zoom=zoom+'%';
		let leftImgZoom=parseInt(leftImg.style.zoom,10)||100;
		leftImgZoom=scrollTopPost*0.12;
		if(leftImgZoom>100) leftImg.style.zoom=leftImgZoom+'%';
		let rightImgZoom=parseInt(rightImg.style.zoom,10)||100;
		rightImgZoom=scrollTopPost*0.12;
		if(rightImgZoom>100) rightImg.style.zoom=rightImgZoom+'%';
	   
	};
	
	leftImg.addEventListener('click', function(){
			getImg(leftImg);
	})
	
	centerImg.addEventListener('click', function(){
		getImg(centerImg);
	})
	
	rightImg.addEventListener('click', function(){
		getImg(rightImg);
	})
	
	function getImg(realimg){
		let motai=document.getElementById('mo');
		let moimg=document.getElementById("moimg");
		let caption=document.getElementById("caption");
		let brief = document.getElementById("brief");
		let imgDesc1 = "Miami-Zhisheng Wang ,2020.MIAMI.";
		let imgDesc2 = "Miami-Zhisheng Wang,2020.MIAMI.";
		let imgDesc3 = "Miami-Zhisheng Wang,2020.MIAMI.";
		realimg.onclick=function(){
			motai.style.display="block"
			moimg.src=this.src
			caption.innerHTML=this.alt
			if(moimg.src=="./img/1.jpg"){
				brief.innerHTML=imgDesc1;
			}else if(moimg.src=="./img/2.jpg"){
				brief.innerHTML=imgDesc2;
			}else{
				brief.innerHTML=imgDesc3;
			}
		}
		
		let span=document.getElementById("close");
		span.onclick=function(){
			motai.style.display="none";
		}
		
	}
})();