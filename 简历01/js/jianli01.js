window.onload = function(){
	function $(id){
		return document.getElementById(id);
	}
	// 筋斗云跟随
	var cloud = document.getElementById('cloud');
	var navdong = document.getElementById('navdong');
	var lis = navdong.getElementsByTagName('li');
	var current = 0;
	for (var i = 0; i < lis.length; i++) 
	{
		lis[i].onmouseover = function()
		{
			target = this.offsetLeft;
		}
		lis[i].onmouseout = function()
		{
			target = current;
		}
		lis[i].onclick = function()
		{
			current = this.offsetLeft;
		}
	};
	var leader = 0,target = 0;
	setInterval(function(){
		leader = leader + (target - leader)/10;
		cloud.style.left = leader + "px";
	},30);


	// 轮播部分
	var col = $("screen");
	var ul = col.children[0];
	var ol = col.children[1];
	var ulBoxLis = ul.children;
	var imgWidth = col.offsetWidth;
	var timer = null;
	for (var i = 0; i < ulBoxLis.length; i++) 
	{
		var li = document.createElement("li");
		li.innerHTML = i+1;
		ol.appendChild(li);
	};
	var olBoxLis = ol.children;
	olBoxLis[0].className = "current";
	var firstImg = ulBoxLis[0].cloneNode(true);
	ul.appendChild(firstImg);
	console.log(ul);
	for (var j = 0; j < olBoxLis.length; j++) 
	{
		olBoxLis[j].index = j;
		olBoxLis[j].onmouseover = function(){
			for (var k = 0; k < olBoxLis.length; k++) 
			{
				olBoxLis[k].className = "";
				clearInterval(timer);
			};
			this.className = "current";
			var target = -this.index*imgWidth;
			animate(ul,target);
			pic = this.index;
			square = this.index;
		}
	};
	$("box").onmouseover = function()
	{
       $("arr").style.display = "block";
       clearInterval(timer);
	}
	$("box").onmouseout = function(){
       $("arr").style.display = "none";
       timer = setInterval(playNext,2000);
	}
	var pic = 0,square = 0;
    $("right").onclick = function(){
    	playNext();
    }
    $("left").onclick = function(){
    	if (pic == 0) 
    		{
    			pic = ulBoxLis.length-1;
    			ul.style.left = -(ulBoxLis.length-1)*imgWidth+"px";
    		};
    		pic--;
    		var target = -pic*imgWidth;
    		animate(ul,target);
    		if (square>0) 
    			{square--}else{
    				square = olBoxLis.length-1;
    			}
    			for (var i = 0; i < olBoxLis.length; i++) 
    			{
    				olBoxLis[i].className = "";
    			};
    			olBoxLis[square].className = "current";
    }
    timer = setInterval(playNext,2000);
    function playNext(){
    	if (pic == ulBoxLis.length-1) 
    		{
    			ul.style.left = 0;
    			pic = 0;
    		};
    		pic++;
    		var target = -pic*imgWidth;
    		animate(ul,target);
    		if (square<olBoxLis.length-1) 
    			{
    				square++;
    			}else{
    				square = 0;
    			}
    			for (var i = 0; i < olBoxLis.length; i++) 
    			{
    				olBoxLis[i].className = "";
    			};
    			olBoxLis[square].className = "current";
    }
    function animate(obj,target){
    	clearInterval(obj.timer);
    	obj.timer = setInterval(function(){
    		var step = 25;
    		var step = obj.offsetLeft<target?step:-step;
    		if (Math.abs(obj.offsetLeft-target)>Math.abs(step)) 
    			{
    				obj.style.left = obj.offsetLeft+step+"px";
    			}else{
                   obj.style.left = target+"px";
                   clearInterval(obj.timer);
    			}
    	},15)
    }
}