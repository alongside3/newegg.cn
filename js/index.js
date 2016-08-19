	
	//导航json数据导入
	
	
	$.ajax({
		type:"GET",
		url:"json/list.txt",
		async:true,
		cache:false,
		error:function(xhr){
			alert("错误码"+xhr.state)
		},
		success:function(str){
			var arr=eval(str);
			
			for(var i=0;i<arr.length;i++){
				var json=arr[i];
				var $div=$("<div></div>")
				var $ul=$("<ul class='menu_img'></ul>")
				var $ulh4=$("<h4>热门品牌</h4>")
				
				  
				  	$ul.append($ulh4)
				
				for(var j=0;j<json["brand"].length;j++){
				var $li=$('<li><a href="#"><img src="'+json["brand"][j]+'"/></a></li>');
				
					$ul.append($li)
				}
				
				
				var $dl=$("<dl></dl>")	
				for(var k=0;k<json["list"].length;k++){
					var json01= json["list"][k];
					
					var $dt=$('<dt>'+json01["cattitle"]+'</dt>')
					
					var $dd=$('<dd></dd>')
					var $dul=$('<ul></ul>')
					
					for (var j = 0; j < json01["catlist"].length; j++) {
						
						 var $li=$('<li><a href="html/list.html">'+json01["catlist"][j]+'</a></li>')
						 
						 $dul.append($li)
					};
					
					$dd.append($dul);
					
					$dl.append($dt);
					$dl.append($dd);
					
				}
			
			
				
				$div.append($dl)
				$div.append($ul)	
			
				$("#menu .menulist_right").append($div)
			}
			
			$(function(){
				
				
				$("#menu .menulist").mouseover(function(){
			
					$("#menu .menulist_right").show();
				}).find(".menulistdd").mouseover(function(){
					$(this).parent().addClass("menuactive")
					
					$("#menu .menulist_right div").eq($(this).index()).show().siblings().hide();
				})
				
				$("#menu .menulist .menulistdd").mouseout(function(){
					$(this).parent().removeClass("menuactive")
				})
				
				
				$("#menu .menulist").mouseout(function(){
					$("#menu .menulist_right").hide();
				})
				
				
				
			})
			
			
		}
	});
	
	
	//定时区域数据调用
	
	$.ajax({
	type:"GET",
	url:"json/timer.txt",
	async:true,
	cache:false,
	error:function(xhr){
		alert("错误码"+xhr.state)
	},
	success:function(str){
		var arr=eval(str);
		for(var i=0;i<arr.length;i++){
			var json=arr[i];
			var $li=$("<li></li>")
			
				var $liA=$('<a href="'+json["catHref"]+'" title="'+json["catDt"]+'"><img src="'+json["catImg"]+'" alt="'+json["catDt"]+'"/></a>');	
				var $liDl=$('<dl><dt><a href="'+json["catHref"]+'" title="'+json["catDt"]+'">'+json["catDt"]+'</a></dt><dd>'+json["catDd"]+' </dd></dl>')
				$li.append($liA)
				$li.append($liDl)
			$("#section .timer ul").append($li)
		}
	}
	});
	
	
	//热卖区数据导入
	
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
			var $li=$("<li></li>")
			
				var $liP=$('<p><a href="'+json["catHref"]+'" title="'+json["catAlt"]+'"><img src="'+json["catImg"]+'" alt="'+json["catAlt"]+'"/></a><strong><img src="'+json["catSpan"]+'"/></strong></p>');	
				var $liDl=$('<dl><dt><a href="'+json["catHref"]+'" title="'+json["catAlt"]+'">'+json["catDt"]+'</a></dt><dd>'+json["catDd"]+' <a href="#">抢购</a></dd></dl>')
				$li.append($liP)
				$li.append($liDl)
			$("#hot_sale .hot ul").append($li)
		}
	}
	});
	
	//选项卡数据调用
	
	$.ajax({
	type:"GET",
	url:"json/select_goods.txt",
	async:true,
	cache:false,
	error:function(xhr){
		alert("错误码"+xhr.state)
	},
	success:function(str){
		var arr=eval(str);
		
		function Tag(ele){
			$(ele).find('.goodsTop > span').mouseover(function(){
				var $index= $(this).index();
				
			$(ele).find('.goodsTop > span').removeClass("active").eq($index).addClass("active")	
			$(ele).find('.goodsList > ul').css({"display":"none"}).eq($index).css({"display":"block"})
			
			
			})
			
		}
		
		for(var i=0;i<arr.length;i++){
			var jsonArr=arr[i];
			var $ul=$("<ul></ul>")
			var $span=$("<span>"+jsonArr["catname"]+"</span>")
			
			
			for(var j=0;j<jsonArr["main"].length;j++){
				var json= jsonArr["main"][j];
				var $li=$("<li></li>")
				
				var $liP=$('<p><a href="'+json["catHref"]+'" title="'+json["catDt"]+'"><img src="'+json["catImg"]+'" alt="'+json["catDt"]+'"/></a><strong><img src="'+json["catSpan"]+'"/></strong></p>');	
				var $liDl=$('<dl><dt><a href="'+json["catHref"]+'" title="'+json["catDt"]+'">'+json["catDt"]+'</a></dt><dd>'+json["catDd"]+' </dd></dl>')
				
				$li.append($liP)
				$li.append($liDl)
				$ul.append($li)
				
			}
			
			$("#select_goods .goodsTop").append($span)
			$("#select_goods .goodsList").append($ul)
			
		};
		$("#select_goods").find('.goodsTop > span').removeClass("active").eq(0).addClass("active");
		$("#select_goods").find('.goodsList > ul').css({"display":"none"}).eq(0).css({"display":"block"});
		Tag("#select_goods");
	}
	});
	
	
	
	
	
	//主体区数据导入
	
	$.ajax({
	type:"GET",
	url:"json/subject.txt",
	async:true,
	cache:false,
	error:function(xhr){
		alert("错误码"+xhr.state)
	},
	success:function(str){
		var arr=eval(str);
		
		//封装轮播函数
		
		function codeslide(obj){
		var slide = new Slide(obj);
		
		slide.box.find("li").fadeOut().eq(0).fadeIn();
		
		slide.timer = setInterval(function(){
			slide.fnNext().fnChange();
		},2000);
		$(obj).mouseover(function(){
			clearInterval(slide.timer);
		})
		$(obj).mouseout(function(){
			slide.timer = setInterval(function(){
				slide.fnNext().fnChange();
			},2000);
		});
		$(obj).find(".dot span").mouseover(function(){
			slide.numChange(this);
		});
		
		}
		
		
		for(var i=0;i<arr.length;i++){
			
			var json=arr[i];

			
			var $div=$('<div class="subject'+(i+1)+'"><h2>'+arr[i]["catname"]+'</h2></div>')
			var $main=$('<ul class="main"></ul>')	
			
			
			var $slide=$('<div class="mainslide"><ul></ul></div>')	
			
			var $dot=$('<div class="dot"></div>')	
			
			
			
			var $bottom=$('<ul class="bottom"></ul>')	
			
			
			for(var j=0;j<json["main"].length;j++){
				
				if(j==1){
					for(var k=0;k<json["mainslide"].length;k++){
				
						var $span=$("<span>"+(k+1)+"</span>")
						var $slideLi=$('<li><a href="#"><img src="'+json["mainslide"][k]+'" width="100%"/></a></li>')
						
						$dot.append($span)
						$slide.append($slideLi)
					}
					$slide.append($dot)
					$main.append($slide)
				}
				
				var main=json["main"][j];

					var $li=$("<li></li>")
				
					var $liP=$('<p><a href="'+main["catHref"]+'" title="'+main["catDt"]+'"><img src="'+main["catImg"]+'" alt="'+main["catDt"]+'"/></a><strong><img src="'+main["catSpan"]+'"/></strong></p>');	
					var $liDl=$('<dl><dt><a href="'+main["catHref"]+'" title="'+main["catDt"]+'">'+main["catDt"]+'</a></dt><dd>'+main["catDd"]+'</dd></dl>')
					$li.append($liP)
					$li.append($liDl)
					
					
					
				$main.append($li)
			}
					
			for(var l=0;l<json["bottom"].length;l++){
				var $bottomli=$('<li><a href="#"><img src="'+json["bottom"][l]+'"/></a></li>')
				
				$bottom.append($bottomli)
			}
			

			$div.append($main)
			$div.append($bottom)
			
			$("#subject").append($div)
			
			codeslide($slide);
			
			
		}
		
	}
	});
	
	$(function(){
		
		//头部小功能
		
		
		$("#topbar .topsevice").mouseover(function(){	
			$("#topbar .sevice").css({"display":"block"});
			$("#topbar .topsevice").addClass("active")		
		});
				
		$("#topbar .topsevice").mouseout(function(){	
			$("#topbar .sevice").css({"display":"none"});
			$("#topbar .topsevice").removeClass("active")
		});
		
		$("#topbar .topegg").mouseover(function(){	
			$("#topbar .myegg").css({"display":"block"});
			$("#topbar .topegg").addClass("active")		
		});
				
		$("#topbar .topegg").mouseout(function(){	
			$("#topbar .myegg").css({"display":"none"});
			$("#topbar .topegg").removeClass("active")
		});
	
	
	
		$(".ad a").click(function(){
			$(".ad").css("display","none")
		});
		
		$(".search .searchText").click(function(){
			$(this).css({"border":0,"color":"#333"}).val("")
			
		});
		
		$("#infobook .email .emailText").click(function(){
			$(this).val("")
		})
		
		
		//头部轮播
		var leftSlide = new Slide("#section .leftSlide");
		
		leftSlide.box.find("li").fadeOut().eq(0).fadeIn();
		leftSlide.timer = setInterval(function(){
			leftSlide.fnNext().fnChange();
		},2000);
		$("#section .leftSlide .prev").click(function(){
			leftSlide.fnPrev().fnChange();
		});
		$("#section .leftSlide .next").click(function(){
			leftSlide.fnNext().fnChange();
		});
		$("#section .leftSlide").mouseover(function(){
			clearInterval(leftSlide.timer);
		})
		$("#section .leftSlide").mouseout(function(){
			leftSlide.timer = setInterval(function(){
				leftSlide.fnNext().fnChange();
			},2000);
		});
		$("#section .leftSlide .dot span").mouseover(function(){
			leftSlide.numChange(this);
		});
		
		
		//封装轮播函数
		
		function codeslide(obj){
		var slide = new Slide(obj);
		
		slide.box.find("li").fadeOut().eq(0).fadeIn();
		
		slide.timer = setInterval(function(){
			slide.fnNext().fnChange();
		},2000);
		$(obj).mouseover(function(){
			clearInterval(slide.timer);
		})
		$(obj).mouseout(function(){
			slide.timer = setInterval(function(){
				slide.fnNext().fnChange();
			},2000);
		});
		$(obj).find(".dot span").mouseover(function(){
			slide.numChange(this);
		});
		
		}
		//轮播函数调用
		
		codeslide("#section .rightSlide");
		codeslide("#select_goods .goodsSlide");
		codeslide("#subject .subject01 .mainslide");
		
		
		
		//定时器
		
		$("#section .timer .prev").click(function(){
				
				$("#section .timer  ul").animate({"left":0},500)	
		});
		
		$("#section .timer .next").click(function(){
			
				$("#section .timer  ul").animate({"left":-754},500)	
			
		});
		
		
		var iNew=new Date('August 20,2016 00:00:00');
		var timer=null
		var str=""
		
		
		fntimer();
			
		function fntimer(){
			var iNow=new Date()
			var t=(iNew-iNow)/1000
			var tian=Math.floor(t/86400);
			var hours=Math.floor(t%86400/3600);
			var min=Math.floor(t%86400%3600/60);
			var sec=Math.floor(t%60);
			
			$("#section .timer .hour").html(addZero(hours))
			$("#section .timer .minute").html(addZero(min))
			$("#section .timer .secend").html(addZero(sec))
			
	//		str=tian+"天"+addZero(hours)+"小时"+addZero(min)+"分钟"+addZero(sec)+"秒"
		
	
		
		}
		timer=setInterval(fntimer,1000)
			
		function addZero(m){
			return m<10 ? "0"+m :m;
		}
		
		//热卖区
		var changenum=0
		$("#hot_sale .hot .title .change").click(
			function(){
				changenum++
				if(changenum>3){
					changenum=0
					return $("#hot_sale .hot ul").css({"left":0})
				}
				$("#hot_sale .hot ul").animate({"left":(changenum*-958)},500)	
			}
		);
		
		
		//好评区特效
		$("#good_reviews .goods2").mouseover(function(){
		
			$("#good_reviews  .chlid2").css({"display":"block"});
			$("#good_reviews .chlid1").css({"display":"none"});
			
			$("#good_reviews .goods2").css({"width":675,"left":175});
			$("#good_reviews .goods2 .chlid2").css({"display":"none"});
			$("#good_reviews .goods2 .chlid1").css({"display":"block"});
				
			$("#good_reviews .goods1").css({"width":175,"left":0});
			$("#good_reviews .goods3").css({"width":175,"left":851});
			$("#good_reviews .goods4").css({"width":175,"left":1025});		
		});
		
		$("#good_reviews .goods1").mouseover(function(){
			
			$("#good_reviews  .chlid2").css({"display":"block"});
			$("#good_reviews .chlid1").css({"display":"none"});
			
			$("#good_reviews .goods1").css({"width":675,"left":0});
			$("#good_reviews .goods1 .chlid2").css({"display":"none"});
			$("#good_reviews .goods1 .chlid1").css({"display":"block"});
				
			$("#good_reviews .goods2").css({"width":175,"left":676});
			$("#good_reviews .goods3").css({"width":175,"left":851});
			$("#good_reviews .goods4").css({"width":175,"left":1026});		
		});
		
		$("#good_reviews .goods3").mouseover(function(){
			
			$("#good_reviews  .chlid2").css({"display":"block"});
			$("#good_reviews .chlid1").css({"display":"none"});
			
			$("#good_reviews .goods3").css({"width":675,"left":350});
			$("#good_reviews .goods3 .chlid2").css({"display":"none"});
			$("#good_reviews .goods3 .chlid1").css({"display":"block"});
				
			$("#good_reviews .goods1").css({"width":175,"left":0});
			$("#good_reviews .goods2").css({"width":175,"left":175});
			$("#good_reviews .goods4").css({"width":175,"left":1025});		
		});
		
		$("#good_reviews .goods4").mouseover(function(){
			
			$("#good_reviews  .chlid2").css({"display":"block"});
			$("#good_reviews .chlid1").css({"display":"none"});
			
			$("#good_reviews .goods4").css({"width":675,"left":525});
			$("#good_reviews .goods4 .chlid2").css({"display":"none"});
			$("#good_reviews .goods4 .chlid1").css({"display":"block"});
				
			$("#good_reviews .goods1").css({"width":175,"left":0});
			$("#good_reviews .goods2").css({"width":175,"left":175});
			$("#good_reviews .goods3").css({"width":175,"left":350});		
		});
		
		
	
			
	})
	
			
