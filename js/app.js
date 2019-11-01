
new Vue({
  el:'#app', // 
  template:'<div id="app"><img src="./img/inHome.png"></img></div>',
  mounted:function(){
	    var isMobile=/Android|webOS|iPhone|iPod|BlackBery/i.test(navigator.userAgent);
		if(isMobile){
			var htmlWidth = document.documentElement.clientWidth ||document.body.clientWidth;
			document.getElementById('app').style.width=htmlWidth;
		}else{
			
		}
  }
});