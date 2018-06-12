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
                $(".details p:first").text("불고기퀸머핀");
                $(".details p:last").text("담백하고 촉촉한 잉글리쉬머핀에 매콤 달콤한 할라피뇨, 불고기 가득 머핀");
                $(".details img:first").attr({"src":"img/coffee/americano.png"});
                $(".details img:last").attr({"src":"img/coffee/americano_ice.png"});
                break;    
            case 1:
                $(".details p:first").text("햄&치즈 퀸머핀");
                $(".details p:last").text("담백하고 촉촉한 잉글리쉬머핀에 햄, 에그, 체다치즈를 얹은 마노핀 베스트셀러");
                $(".details img:first").attr({"src":"img/coffee/tiramisu_latte.png"});
                $(".details img:last").attr({"src":"img/coffee/americano_ice.png"});
                break;
            case 2:
                $(".details p:first").text("카라멜씨드 잉글리쉬머핀");
                $(".details p:last").text("슈퍼푸드 씨앗머핀 속 달콤한 카라멜 쫀득한 식감이 살아있는 꿀호떡머핀");
                $(".details img:first").attr({"src":"img/coffee/americano.png"});
                $(".details img:last").attr({"src":"img/coffee/capuccino_ice.png"});
                break;
            case 3:
                $(".details p:first").text("애플시나몬 잉글리쉬머핀");
                $(".details p:last").text("사과잼과 은은한 시나몬이 어우러져 입안 가득 기분 좋은 달콤머핀");
                $(".details img:first").attr({"src":"img/coffee/caffe_moka.png"});
                $(".details img:last").attr({"src":"img/coffee/cappuccino_ice.png"});
                break;
            case 4:
                $(".details p:first").text("오리지널잉글리쉬머널");
                $(".details p:last").text("담백하고 고소한 맛과 쫀득한 식감 커피와 잘 어울리는 오리지널머핀");
                $(".details img:first").attr({"src":"img/coffee/topinut.png"});
                $(".details img:last").attr({"src":"img/coffee/valilla_latte_ice.png"});
                break;    
            case 5:
                $(".details p:first").text("치즈해");
                $(".details p:last").text("치즈의 맛과 향이 부드럽게 느껴지는 치즈 해머핀");
                $(".details img:first").attr({"src":"img/coffee/ameriano.png"});
                $(".details img:last").attr({"src":"img/coffee/caffe_latte_ice.png"});
                break;
            case 6:
                $(".details p:first").text("순수해");
                $(".details p:last").text("카스텔라 느낌의 부드럽고 촉촉한 바닐라 해머핀");
                $(".details img:first").attr({"src":"img/coffee/caffe_latte.png"});
                $(".details img:last").attr({"src":"img/coffee/caffe_moka_ice.png"});
                break;
            case 7:
                $(".details p:first").text("NY크림치즈");
                $(".details p:last").text("뉴욕크림치즈케이크의 진한 풍미와 세련된 뉴욕감성의 크림치즈머핀");
                $(".details img:first").attr({"src":"img/coffee/caffe_moka.png"});
                $(".details img:last").attr({"src":"img/coffee/americano_ice.png"});
                break;
            case 8:
                $(".details p:first").text("멜팅쇼콜라");
                $(".details p:last").text("촉촉하게 녹아있는 가나슈크림 가득 한입 먹으면 행복해지는 코코아머핀");
                $(".details img:first").attr({"src":"img/coffee/caffe_latte.png"});
                $(".details img:last").attr({"src":"img/coffee/americano_ice.png"});
                break;
            case 9:
                $(".details p:first").text("쿠키 앤 크림");
                $(".details p:last").text("달콤쌉쌀한 다크초코머핀에 생크림 큼직한 초코쿠키까지 올린 달콤충전머핀");
                $(".details img:first").attr({"src":"img/coffee/americano.png"});
                $(".details img:last").attr({"src":"img/coffee/caffe_latte_ice.png"});
                break;
            case 10:
                $(".details p:first").text("순수메이플");
                $(".details p:last").text("향긋한 메이플머핀 속 촉촉한 달콤함 캐나다에서 온 순수한 단풍꿀머핀");
                $(".details img:first").attr({"src":"img/coffee/americano.png"});
                $(".details img:last").attr({"src":"img/coffee/capuccino_ice.png"});
                break;
            case 11:
                $(".details p:first").text("초코초코칩");
                $(".details p:last").text("다크초코머핀에 오독오독 씹히는 초코칩 달달함이 땡길 때 딱 좋은 초코머핀");
                $(".details img:first").attr({"src":"img/coffee/americano.png"});
                $(".details img:last").attr({"src":"img/coffee/americano_ice.png"});
                break;
             case 12:
                $(".details p:first").text("애플망고");
                $(".details p:last").text("열대과일의 붉은 여왕, 애플망고 진하고 달콤한 맛의 애플망고 머핀");
                $(".details img:first").attr({"src":"img/coffee/americano.png"});
                $(".details img:last").attr({"src":"img/coffee/americano_ice.png"});
                break;
                    
        }
        
        
    });
    
    $(".explain a").click(function(){
        $(this).parents(".explain").css({"display":"none"});
    });
   

});

