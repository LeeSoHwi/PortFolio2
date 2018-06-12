$(document).ready(function(){
	
/* PC */

	/* 탑메뉴 hover */
	$("nav").on("mouseenter",function(){
		$("#subMenus").css({"height":"210px"});
	});
	$("#subMenus").on("mouseleave",function(){
		$(this).css({"height":"0"});
	});
	$("header").on("mouseleave",function(){
		$("#subMenus").css({"height":"0"});
	});
	
	/* 탑메뉴 Images 바꾸기 */
	$("ul").on("mouseover", function(){
		var idx=$(this).index();
		var strImg="#subMenus > img";
		
		switch(idx){
			case 0:
				$(strImg).attr({"src":"img/menu/muffin01.png"}).css({"margin-top":"30px"});
				break;
			case 1:
				$(strImg).attr({"src":"img/menu/muffin02.png","alt":"머핀이미지2"}).css({"margin-top":"30px"});
				break;
			case 2:
				$(strImg).attr({"src":"img/menu/store.png","alt":"매장이미지"}).css({"margin-top":"30px"});
				break;
			case 3:
				$(strImg).attr({"src":"img/menu/news.png","alt":"이벤트 뉴스란 이미지"}).css({"margin-top":"10px"});
				break;
			default:;	
		}
	});


	/* 프로모션 펼치고 닫기 */
	$(".promDown").on("click",function(){
		$(this).hide();
		$(".promUp").show();
		$("#proBanner").slideDown();
	});
	$(".promUp").on("click",function(){
		$(this).hide();
		$(".promDown").show();
		$("#proBanner").slideUp();
	});

	/* 프로모션 배너 */
	var idxImg=0;
	$("#proBanner span:first").click(function(){
		idxImg;
		console.log(idxImg);
		if(idxImg==3){
			$("#proBanner ul").animate({"margin-left":"+=100%"},1000);
		}else if(idxImg==2){
			$("#proBanner ul").animate({"margin-left":"+=100%"},1000);
			idxImg=1;
		}else if(idxImg==1){
			$("#proBanner ul").animate({"margin-left":"+=100%"},1000);
			idxImg=0;
		}		
	});


	$("#proBanner span:last").click(function(){
		idxImg++;
		console.log(idxImg);
		if(idxImg==1 ||idxImg==2){
			$("#proBanner ul").animate({"margin-left":"-=100%"},1000);
		}else if(idxImg>=3){
		 idxImg=2;
		}		
	});


	$(window).on("scroll",function(){
		var scroll=$(this).scrollTop();
	/* 신메뉴 */
		if(scroll>=350){
			$("#new img").addClass("on");
			$("#new div").addClass("on");
			$("#new div p").addClass("on");
			$("#new div span").addClass("on");
		}else{
			$("#new img").removeClass("on");
			$("#new div").removeClass("on");
			$("#new div p").removeClass("on");
			$("#new div span").removeClass("on");
		}
	/* 브랜드 소개 */
		if(scroll>=700){
			$("#brand div").addClass("on");
		}else{
			$("#brand div").removeClass("on");
		}

	/* 메뉴 */
		if(scroll>=1000){
			$(".menuInfo p").addClass("on");
			$(".menuInfo span").addClass("on");
		}else{
			$(".menuInfo p").removeClass("on");
			$(".menuInfo span").removeClass("on");
		}
	});

    
	var i=$(window).width();
	console.log("width:"+i);
	var scroll=$(window).scrollTop();
    console.log(scroll);
    
/* (min-width:888px) and (max-width:1279px) 에서 탑메뉴 Image 
	if(i<=1279 && i>=888){
		$("ul").on("mouseover", function(){
			var idx=$(this).index();
			var strImg="#subMenus > img";
			
			switch(idx){
				case 0:
					$(strImg).attr({"src":"img/menu/muffin01.png"}).css({"width":"180px","margin-top":"30px","margin-left":"30px","padding-right":"0px"});
					break;
				case 1:
					$(strImg).attr({"src":"img/menu/muffin02.png","alt":"머핀이미지2"}).css({"width":"180px","margin-top":"30px","margin-left":"30px","padding-right":"0px"});
					break;
				case 2:
					$(strImg).attr({"src":"img/menu/store.png","alt":"매장이미지"}).css({"width":"180px","margin-top":"35px","margin-left":"30px","padding-right":"0px"});
					break;
				case 3:
					$(strImg).attr({"src":"img/menu/news.png","alt":"이벤트 뉴스란 이미지"}).css({"width":"180px","margin-top":"20px","margin-left":"30px","padding-right":"0px"});
					break;
				default:;	
			}
		});
	}
*/
    
    /* TOP 사이드바 */
    
    $("aside").click(function(){
        $("html, body").stop().animate({"scrollTop":"0px"},1000,function(){
            $("aside").stop().animate({"opacity":"0"},500);
            
        });
    });
    
    $(window).on("scroll",function(){
        var topScr = $(window).scrollTop();
        console.log(topScr);
        
        if(topScr>=500){
            $("aside").stop().animate({"opacity":"1"},600);
        }
    }); 
        
	
/* 모바일에서(width:647px 이하) */

	/* 탑메뉴버튼 */
	$("#btnMenu").click(function(){
		var strImg = $(this).children().attr("src");
		if (strImg.indexOf("btnMenu.png")>=0){
			$("img",this).attr({"src":"img/menu/btnMenu_click.png"}).css({"width":"45px"});
		}else{
			$("img",this).attr({"src":"img/menu/btnMenu.png"}).css({"width":"55px"});
		}
		$("nav").toggle();
	});

	if(i<=647){

	/* 탑메뉴 내용 */
		$("nav").hover(function(){
			$("header #subMenus").css({"height":"100%","left":"0%"});
		},function(){
			$("header #subMenus").css({"height":"0%","left":"-60%"});
		});

		$("header #subMenus").hover(function(){
			$(this).css({"height":"100%","left":"0%"});
		},function(){
			$(this).css({"height":"0%","left":"-60%"});
		});

		$("nav li").on("mouseover", function(){
			var idx=$(this).index();
			if(idx==0){
				$("ul.sub").hide();
				$("ul.sub01").fadeIn();
			}else if(idx==1){
				$("ul.sub").hide();
				$("ul.sub02").fadeIn();
			}else if(idx==2){
				$("ul.sub").hide();
				$("ul.sub03").fadeIn();
			}else{
				$("ul.sub").hide();
				$("ul.sub04").fadeIn();			
			}
		});	

	/* 프로모션 배너 */
		$("#promotion").find("p").click(function(){
			$("#proBanner").slideToggle();	
		});
	
	
		$(window).on("scroll",function(){
			var scroll=$(this).scrollTop();
			console.log(scroll);
		/* 신메뉴 소개 */
			if(scroll>=100){
				$("#new img").addClass("on");
				$("#new div").addClass("on");
				$("#new div p").addClass("on");
				$("#new div span").addClass("on");
				
			}else{
				$("#new img").removeClass("on");
				$("#new div").removeClass("on");
				$("#new div p").removeClass("on");
				$("#new div span").removeClass("on");
			}

		/* 브랜드 소개 */
			if(scroll>=380){
				$("#brand div").addClass("on");
			}else{
				$("#brand div").removeClass("on");
			}

		/* 메뉴 */
			if(scroll>=720){
				$(".menuInfo p").addClass("on");
				$(".menuInfo span").addClass("on");
			}else{
				$(".menuInfo p").removeClass("on");
				$(".menuInfo span").removeClass("on");
			}
		});

	}


	/* 메인배너 높이지정 */
	$(window).resize(function(){
		var strHeight = $("#mainVisual img").height();
		console.log("imgheight : "+strHeight);
		$("#mainVisual").height(strHeight);
	});
	
	/* 메인배너 자동활성화 */
	var timer=setInterval("banner()",3000);
    
    /* 메인배너 비활성화 */
	$("#mainVisual").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval("banner()",3000);
	});
    $("#btnPrev #btnNext").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval("banner()",3000);
	});
	
	/* 메인배너 클릭으로 활성화 */
	$("#btnPrev").click(function(){
		clearInterval(timer);
        bannerReverse();
	});
	$("#btnNext").click(function(){
		clearInterval(timer);
        banner();
	});
	

	
	/* 공지사항 롤링 */
	var rolling=setInterval("noticeRoll()",3000);
    

});





/* 메인배너를 위한 함수 */
function banner(){
	var firstImg = $("#mainVisual img:eq(0)");

	firstImg.animate({"margin-left":"-=1280px"},2000,function(){
		$("#mainVisual div").append(firstImg);
        
        var strImg = $("#mainVisual img").attr("src");
        if(strImg.indexOf("01")>=0){
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(1)").addClass("active");
        }else if(strImg.indexOf("02")>=0){
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(2)").addClass("active");
        }else if(strImg.indexOf("03")>=0){
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(3)").addClass("active");
        }else if(strImg.indexOf("04")>=0){
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(4)").addClass("active");
        }else{
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(0)").addClass("active");
        }      
        
		firstImg.css({"margin-left":"0"});
	});
};

/* 메인 배너 Reverse를 위한 함수 */
function bannerReverse(){
    var firstImg = $("#mainVisual img:eq(0)");
    var lastImg = $("#mainVisual img:eq(4)");
    
    firstImg.stop().animate({"margin-left":"20%"},2000,function(){
        $("#mainVisual div").prepend(lastImg);
        
        var strImg = $("#mainVisual img").attr("src");
        if(strImg.indexOf("01")>=0){
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(1)").addClass("active");
        }else if(strImg.indexOf("02")>=0){
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(2)").addClass("active");
        }else if(strImg.indexOf("03")>=0){
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(3)").addClass("active");
        }else if(strImg.indexOf("04")>=0){
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(4)").addClass("active");
        }else{
            $("#mainVisual li").removeClass("active");
            $("#mainVisual li:eq(0)").addClass("active");
        }      
        
        firstImg.css({"margin-left":"0px"});
    });	
};


/* 공지사항 롤링을 위한 함수 */
function noticeRoll(){
	var showList = $("#notice ul li:eq(0)");
	var nextList = $("#notice ul li:eq(1)");
    nextList.css({"opacity":"0"});
    nextList.animate({"opacity":"1"},3500);
	showList.animate({"margin-top":"-70px","opacity":"0"},3000,function(){
        $("#notice ul").append(showList);
		showList.css({"margin-top":"0","opacity":"1"});
	});
};
