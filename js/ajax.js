$.ajax({
	type:"GET",
	url:"json/hot_sales.txt",
	async:true,
	cache:false,
	error:function(xhr){
		alert("错误码"+xhr.state)
	},
	success:function(str){
		var arr=eval(str);
		for(var i=0;i<arr.length;i++){
			var json=arr[i];
			console.log(json["catDd"])
			var $li=$("<li></li>")
			
			for(var j=0;j<json["catname"].length;j++){
				var $liA=$('<a href="#">'+json["catname"][j]+'</a>');			
//				if(j>0){
//					//var $liSpan=$("<span>、</span>")
//					$liA.before("<span>、</span>")
//				}
				$li.append($liA)
			}
			$("#hot_sale .hot ul").append($li)
			
//			var $div=$("<div></div>")
//			for(var k=0;k<json["data"].length;k++){
//				var json01= json["data"][k];
//				var $dl=$('<dl><dt>'+json01["cattitle"]+'</dt></dl>')
//				var $dd=$("<dd></dd>")
//				
//				for(var l=0;l<json01["catlist"].length;l++){
//					var $ddA=$('<a href="#">'+json01["catlist"][l]+'</a>');
//					$dd.append($ddA)
//				}
//				
//				$dl.append($dd)
//				$div.append($dl)
//			}
//			
//			
//			
//			
//			
//			$("#list .right").append($div)
//		}
//		$(function(){
//			$("#list .left").mouseover(function(){
//				$("#list .left").animate({"width":720});
//				$("#list .right").show();
//			}).find("li").mouseover(function(){
//				$("#list .left").css({"width":720})
//				$("#list .right div").eq($(this).index()).show().siblings().hide();
//			})
//					
//			$("#list .left").mouseout(function(){
//				$("#list .left").animate({"width":170});
//				$("#list .right").hide();
//			})
//		})
	}
});
