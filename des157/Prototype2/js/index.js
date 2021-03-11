(function(){
	'use strict';
	const leftImg = document.getElementById("left");
	const centerImg = document.getElementById("center");
	const rightImg = document.getElementById("right");
	 window.onscroll = function() {
	   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	   console.log("滚动距离" + scrollTop);
	   setImg(scrollTop);
	 }
	 
	 
	function setImg(scrollTopPost){

		
		let zoom=parseInt(centerImg.style.zoom);
		let sideZoom=parseInt(centerImg.style.zoom);
		let imgLeft = parseInt(centerImg.offsetLeft);
		let topLeft = parseInt(centerImg.offsetTop);
		let imgWidth = document.body.clientWidth;
 
		if(isNaN(zoom)){
			zoom=100;
		}
		if(isNaN(sideZoom)){
			sideZoom=100;
		}
		if(scrollTopPost>200){
			scrollTopPost = 200;
		}
		zoom = 100 - scrollTopPost*0.3;
		sideZoom= 100 + scrollTopPost*0.3;
		
		leftImg.style.zoom=sideZoom+'%';
		centerImg.style.zoom=zoom+'%';
		rightImg.style.zoom=sideZoom+'%';
	}
	
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
		let imgDesc1 = "China-Daming Lake Traditional Architecture,2015.";
		let imgDesc2 = "China-Lotus pond moonlight,2015.";
		let imgDesc3 = "China-Old menu,2015.";
		realimg.onclick=function(){
			motai.style.display="block"
			moimg.src=this.src
			caption.innerHTML=this.alt
			if(moimg.src.includes("1.jpg")){
				brief.innerHTML=imgDesc1;
			}else if(moimg.src.includes("2.jpg")){
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