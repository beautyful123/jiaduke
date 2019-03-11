//$(function(){
//  $("#he").load("header.html");
//})
$(function(){
	$.ajax({
		url:"header.html",
		type:"get",
		success:function(res){
//			动态添加<link>到head里引入header.css
			$("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
//			替代<header>
			$(res).replaceAll("#he");
		}
	})
})