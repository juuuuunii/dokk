

$(function() {
    var objRecentProd  = null;
    var mainContScroll = 0;

    // cate 열기
    $('body').on('openContGnb openCategory openMyMenu', function(e) {
        e.preventDefault();

        if ($('body').data('isContGnb') == 'Y') {
            $('body').trigger('closeContAll');
        } else {
            if ($('#container_page').css('display') == 'block') {
                mainContScroll = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
            }

            $('#container_page').hide();
            $('.hd_logo > .wh').css({"display":"none"}).stop().animate({"left":"220px"});
            $('.search_wrap > input[type=search]').css({"display":"none", "animation-name":""})
            $('.btn_search').css({"color":"#888"})
            $(".sch_back").hide();

            $('#container_mnu').show();


            setTimeout(function() {scrollTo(0, 0)}, 300);
        }

    // 검색창 열기
    }).on('openContSearch openSearch', function(e) {
        e.preventDefault();
        
        if ($('body').data('isContSearch') == 'Y') {
            $('body').trigger('closeContAll');
        } else {
            if ($('#container_page').css('display') == 'block') {
                mainContScroll = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
            }
            
            
            $('.hd_logo > .wh').css({"display":"block"}).stop().animate({"left":"70px"}, 200, "linear", function () {
                $('.search_wrap > input[type=search]').css({"display":"block", "animation-name":"schOpAni"})
                $('.btn_search').css({"color":"#fff"})
                $(".sch_back").show();
            });
            
        
            setTimeout(function() {
                scrollTo(0, 0);
                $('.search_wrap input[type=search]').focus();
            }, 300);
        }


    // cate 닫기
    }).on('closeContAll closeCategory closeMyMenu closeSearch', function(e) {
        e.preventDefault();

        $('#container_page').show();
        $('#container_mnu').hide();
        $('.hd_logo > .wh').css({"display":"none"}).stop().animate({"left":"220px"});
        $('.search_wrap > input[type=search]').css({"display":"none", "animation-name":""})
        $('.btn_search').css({"color":"#888"})
        $(".sch_back").hide();

        if (mainContScroll > 0) {
            var scrollSpeed = Math.ceil(mainContScroll / 1500) * 100;
            $('html, body').animate({scrollTop:mainContScroll}, scrollSpeed);
        }

    });

    //==========================================================================
    // cate Handling
    //==========================================================================

    // cate 열기 버튼 클릭 처리
    $('nav#basic_navi').on('touchstart click', '#side_bt', function(e) {
        e.preventDefault();
        $('body').trigger('openContGnb');
    });

    // cate 닫기 버튼 클릭 처리
    $('#container_mnu').on('touchstart click', '#side_close', function(e) {
        e.preventDefault();
        $('body').trigger('closeContAll');

    });


    //==========================================================================
    // Search Handling
    //==========================================================================

    var isSearchLock = 'N';

    // 검색창 열기 버튼 클릭 처리
    $('header.main_header').on('touchstart click', '.btn_search', function(e) {
        e.preventDefault();
        $('body').trigger('openContSearch');
    });

    // 검색창 닫기 버튼 클릭 처리
    $('.body-main').on('touchstart click', '.sch_back', function(e) {
        e.preventDefault();
        console.log("hihi")
        $('.hd_logo > .wh').css({"display":"none"}).stop().animate({"left":"220px"});
        $('.search_wrap > input[type=search]').css({"animation-name":"schClAni"}).hide();
        $('.btn_search').css({"color":"#888"})
        $(".sch_back").hide();

    // 검색 입력칸 리셋
    }).on('click', '.search_wrap #btn_reset', function(e) {
        e.preventDefault();
        $('.search_wrap input[type=search]').val('');
        $(this).fadeOut(300);
    });

    // 검색어 리셋버튼 처리
    $('.search_wrap input[type=search]').keydown(function(e){
        if ($(this).val().length > 0) {
            $(this).siblings('#btn_reset').fadeIn(300);
        } else {
            $(this).siblings('#btn_reset').fadeOut(300);
        }
    });

    //==========================================================================
    // Navi Handling
    //==========================================================================

    $(function(){
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $("#hd").outerHeight();
        
        $(window).scroll(function(event){
            if ($("body").hasClass("body-main")){
                didScroll = true;
            }
        });
    
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
    
        function hasScrolled() {
            var st = $(this).scrollTop();
            
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
    
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $("#hd").animate({'top':'-90px'}, 300, 'swing');
                $('nav.clsBottomNavi').animate({'bottom':'-100px'}, 100, 'swing');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $("#hd").animate({'top':'0'}, 300, 'swing');
                    $('nav.clsBottomNavi').animate({'bottom':'0'}, 300, 'swing');
                }
            }
            lastScrollTop = st;
        }
        
    });
});




//==========================================================================
// gnb Handling
//==========================================================================

$("#home_bt").click(function() {
    window.scrollTo(0, 0);
    $(".gcate_page").hide(10, function() {
        $("#home").show();
    });
    $(".menu > li").css({"background":"#fff", "color":"#222"});
}).trigger("click");

var aniRight = (function (){
    $("#container_mnu").animate({"right":"0"}, 500, "linear");
});
$("#side_bt").click(aniRight);


$("#side_close").click(function() {
    $("#container_mnu").stop().animate({"right":"100%"});
});



//==========================================================================
// footer
//==========================================================================
$("#comp_open").click(function() {
    $(".dokk_conpany").stop().slideToggle(300);
}).trigger("click");



// reset
$(".hd_logo").click(function() {
    window.scrollTo(0, 0);
});


