
$(window).scroll(function(){
	var gap = $("html, body").scrollTop();
	if(gap > 150) {
        $("#gnb_1dul").css({"display":"none"});
        $(".top-nav").css({"position":"fixed", "top":"0"});
        Gnb();
    }
 	else {
        $(".top-nav").css({"position":"relative"});
    }
});

function Gnb() {
    $("#gnb > :first-child").mouseenter(function(){
        $("#gnb_1dul").stop().slideDown();
       
    });
    $("#gnb > :first-child").mouseleave(function(){
        $("#gnb_1dul").stop().slideUp();
    }) 
}
function gnbColor() {
    $("#gnb_1dul > li").mouseenter(function() {
        $(this).children("a").css({"color":"#c40000"});
    })
    $("#gnb_1dul > li").mouseleave(function() {
        $("#gnb_1dul > li > a").css({"color":"#888"});
    })
}
gnbColor();


//==========================================================================
// cate Handling
//==========================================================================

$(function (){
    var $category = $("#category");

    $("#menu_open").on("click", function() {
        $category.css("display","block");
    });

    $("#category .close_btn").on("click", function(){
        $category.css("display","none");
    });
});
$(document).mouseup(function (e){
	var container = $("#category");
	if( container.has(e.target).length === 0)
	container.hide();
});


$(function(){
    var hide_menu = false;
    var mouse_event = false;
    var oldX = oldY = 0;

    $(document).mousemove(function(e) {
        if(oldX == 0) {
            oldX = e.pageX;
            oldY = e.pageY;
        }

        if(oldX != e.pageX || oldY != e.pageY) {
            mouse_event = true;
        }
    });

    
    var $gnb = $(".gnb_1dli > a");
    $gnb.mouseover(function() {
        if(mouse_event) {
            $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
            $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
            hide_menu = false;
        }
    });

    $gnb.mouseout(function() {
        hide_menu = true;
        $gnb.parent().css({"background":"#fff"});
    });

    $(".gnb_2dli").mouseover(function() {
        hide_menu = false;
    });

    $(".gnb_2dli").mouseout(function() {
        hide_menu = true;
    });

    $gnb.focusin(function() {
        $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
        $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
        hide_menu = false;
    });

    $gnb.focusout(function() {
        hide_menu = true;
    });

    $(".gnb_2da").focusin(function() {
        $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
        var $gnb_li = $(this).closest(".gnb_1dli").addClass("gnb_1dli_over gnb_1dli_on");
        hide_menu = false;
    });

    $(".gnb_2da").focusout(function() {
        hide_menu = true;
    });

    $('#gnb_1dul>li').bind('mouseleave',function(){
        submenu_hide();
    });

    $(document).bind('click focusin',function(){
        if(hide_menu) {
            submenu_hide();
        }
    });
});

function submenu_hide() {
    $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
}
