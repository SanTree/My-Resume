// window.onload = function(){
// 	var cloud = document.getElementById('cloud');
// 	var navdong = document.getElementById('navdong');
// 	var lis = navdong.getElementsByTagName('li');
// 	var current = 0;
// 	for (var i = 0; i < lis.length; i++) 
// 	{
// 		lis[i].onmouseover = function()
// 		{
// 			target = this.offsetLeft;
// 		}
// 		lis[i].onmouseout = function()
// 		{
// 			target = current;
// 		}
// 		lis[i].onclick = function()
// 		{
// 			current = this.offsetLeft;
// 		}
// 	};
// 	var leader = 0,target = 0;
// 	setInterval(function(){
// 		leader = leader + (target - leader)/10;
// 		cloud.style.left = leader + "px";
// 	},10);
// }