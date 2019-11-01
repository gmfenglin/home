var htmlWidth = document.documentElement.clientWidth ||document.body.clientWidth;
var htmlDom = document.getElementsByTagName("html")[0];
htmlDom.style.fontSize = htmlWidth/10+ "px";
new Vue({
  el:'#app', // 
  template:'<div id="app"><img src="./img/inHome.png"></img></div>'
  });