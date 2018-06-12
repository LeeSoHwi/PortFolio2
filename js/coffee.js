$(document).ready(function(){
    
    /* 탑메뉴 hover */

    $("nav").on("mouseenter",function(){
        var i=$(window).width();
        if(i<=647){
            $("#subMenus").css({"height":"100%","left":"0%"});
        }else{
            $("#subMenus").css({"height":"210px","left":"0"});
            $("this").css({"height":"100%"});
        }
	});
	$("#subMenus").on("mouseenter",function(){
        var i=$(window).width();
        if(i<=647){
            $(this).css({"height":"100%"});    
        }else{
            $(this).css({"height":"210px"});
        }
		
	});
    $("#subMenus").on("mouseleave",function(){
		$(this).css({"height":"0"});
	});
    
	$("header").on("mouseleave",function(){
		$("#subMenus").css({"height":"0"});
	});

    $("nav li").on("mouseover",function(){
        var i=$(window).width();
        //console.log("width:"+i);
        var liIdx=$(this).index();
        //console.log(liIdx);
       
        if(i<=647 && liIdx==0){
            $("ul.sub").hide();
            $("ul.sub01").fadeIn();
        }else if(i<=647 && liIdx==1){
            $("ul.sub").hide();
            $("ul.sub02").fadeIn();
        }else if(i<=647 && liIdx==2){
            $("ul.sub").hide();
            $("ul.sub03").fadeIn();
        }else if(i<=647 && liIdx==3){
            $("ul.sub").hide();
            $("ul.sub04").fadeIn();			
        }else{
             $("ul.sub").css({"display":"block"});
        }
    });

    /* 탑메뉴버튼(모바일) */
	$("#btnMenu").click(function(){
		var strImg = $("img", this).attr("src");
        
		if (strImg.indexOf("btnMenu.png")>=0){
			$("img",this).attr({"src":"img/menu/btnMenu_click.png"}).css({"width":"45px"});
		}else{
			$("img",this).attr({"src":"img/menu/btnMenu.png"}).css({"width":"55px"});
		}
		$("nav").toggle(); 
	});
        
    /* 탑메뉴 Images 바꾸기 */
	$("ul").on("mouseover", function(){
		var idx=$(this).index();
		var strImg=$("#subMenus > img");
		
        var i=$(window).width();
        
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
        if(i<=1279 && i>=888){
            $(strImg).css({"padding":"10px 0 0 70px","width":"180px"});
        }
	});
    
    
    /* 더보기 클릭 */
    $(".more").click(function(){
        $("#coffeeList li").removeClass("hide");
        $(this).hide();
    });
    
    /* 메뉴 상세설명 보기 */
    $("#coffeeList li").click(function(){
        var Idx = $(this).index();
        //console.log(Idx);
        $(".explain").css({"display":"block"});
        
        switch(Idx){
            case 0:
                $(".details p:first").text("아메리카노");
                $(".details p:last").text("아라비카 100%의 부드럽고 깔끔한 아메리카노");
                $(".details img:first").attr({"src":"img/muffin/meltingchocola.png"});
                $(".details img:last").attr({"src":"img/muffin/NYcreamcheese.png"});
                break;    
            case 1:
                $(".details p:first").text("아이스 아메리카노");
                $(".details p:last").text("아라비카 100%의 부드럽고 깔끔한 아메리카노");
                $(".details img:first").attr({"src":"img/muffin/meltingchocola.png"});
                $(".details img:last").attr({"src":"img/muffin/NYcreamcheese.png"});
                break;
            case 2:
                $(".details p:first").text("카페라떼");
                $(".details p:last").text("에스프레소와 스팀밀크가 어우러진 커피");
                $(".details img:first").attr({"src":"img/muffin/NYcreamcheese.png"});
                $(".details img:last").attr({"src":"img/muffin/cookieandcream.png"});
                break;
            case 3:
                $(".details p:first").text("아이스 카페라떼");
                $(".details p:last").text("에스프레소와 스팀밀크가 어우러진 커피");
                $(".details img:first").attr({"src":"img/muffin/NYcreamcheese.png"});
                $(".details img:last").attr({"src":"img/muffin/cookieandcream.png"});
                break;
            case 4:
                $(".details p:first").text("카푸치노");
                $(".details p:last").text("에스프레소와 부드러운 스팀우유, 그리고 풍성한 우유 거품이 올려진 에스프레소 음료");
                $(".details img:first").attr({"src":"img/muffin/puremaple.png"});
                $(".details img:last").attr({"src":"img/muffin/NYcreamcheese.png"});
                break;    
            case 5:
                $(".details p:first").text("아이스 카푸치노");
                $(".details p:last").text("에스프레소와 부드러운 스팀우유, 그리고 풍성한 우유 거품이 올려진 에스프레소 음료");
                $(".details img:first").attr({"src":"img/muffin/puremaple.png"});
                $(".details img:last").attr({"src":"img/muffin/NYcreamcheese.png"});
                break;
            case 6:
                $(".details p:first").text("카페모카");
                $(".details p:last").text("초콜릿과 생크림의 감미로운 맛이 에스프레소와 어우러진 달콤한 커피");
                $(".details img:first").attr({"src":"img/muffin/cookieandcream.png"});
                $(".details img:last").attr({"src":"img/muffin/applemango.png"});
                break;
            case 7:
                $(".details p:first").text("아이스 카페모카");
                $(".details p:last").text("초콜릿과 생크림의 감미로운 맛이 에스프레소와 어우러진 달콤한 커피");
                $(".details img:first").attr({"src":"img/muffin/cookieandcream.png"});
                $(".details img:last").attr({"src":"img/muffin/applemango.png"});
                break;
            case 8:
                $(".details p:first").text("바닐라 라떼");
                $(".details p:last").text("달콤한 바닐라 향과 풍부한 에스프레소가 조화를 이룬 바닐라라떼");
                $(".details img:first").attr({"src":"img/muffin/applemango.png"});
                $(".details img:last").attr({"src":"img/muffin/applecinnamonenglish.png"});
                break;
            case 9:
                $(".details p:first").text("아이스 바닐라라떼");
                $(".details p:last").text("달콤한 바닐라 향과 풍부한 에스프레소가 조화를 이룬 바닐라라떼");
                $(".details img:first").attr({"src":"img/muffin/applemango.png"});
                $(".details img:last").attr({"src":"img/muffin/applecinnamonenglish.png"});
                break;
            case 10:
                $(".details p:first").text("티라미슈 라떼");
                $(".details p:last").text("한 잔으로 즐기는 티라미슈의 깊은 달콤함, 진한 마스카포네와 에스프레소 풍미를 즐기는 라떼");
                $(".details img:first").attr({"src":"img/muffin/hamuffin_danhohae.png"});
                $(".details img:last").attr({"src":"img/muffin/originalenglish.png"});
                break;
            case 11:
                $(".details p:first").text("아이스 티라미슈라떼");
                $(".details p:last").text("한 잔으로 즐기는 티라미슈의 깊은 달콤함, 진한 마스카포네와 에스프레소 풍미를 즐기는 라떼");
                $(".details img:first").attr({"src":"img/muffin/hamuffin_danhohae.png"});
                $(".details img:last").attr({"src":"img/muffin/originalenglish.png"});
                break;
            case 12:
                $(".details p:first").text("토피넛 라떼");
                $(".details p:last").text("달콤한 카라멜과 은은한 버터풍미에 헤이즐넛을 더한 리얼 토피넛라떼");
                $(".details img:first").attr({"src":"img/muffin/hamuffin_sunsuhae.png"});
                $(".details img:last").attr({"src":"img/muffin/caramelseedenglish.png"});
                break;
            case 13:
                $(".details p:first").text("아이스 토피넛라떼");
                $(".details p:last").text("달콤한 카라멜과 은은한 버터풍미에 헤이즐넛을 더한 리얼 토피넛라떼");
                $(".details img:first").attr({"src":"img/muffin/hamuffin_sunsuhae.png"});
                $(".details img:last").attr({"src":"img/muffin/caramelseedenglish.png"});
                break;
                    
        }
        
        
    });
    
    $(".explain a").click(function(){
        $(this).parents(".explain").css({"display":"none"});
    });
   

});

