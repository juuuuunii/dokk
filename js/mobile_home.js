
//==========================================================================
// banner
//==========================================================================    
var number = 1;
var interval2;

interval2 = setInterval(slide, 2500);
function slide() {
   $(".slides").stop().animate({"left":-(number*100)+"%"}, 500, function(){
      if(number == 3) {
         number = 0;
         $(this).css({"left":0});  
      }
      number++;
   });
}
$(".slides").hover(function(){
   clearInterval(interval2);
}, function(){
   interval2 = setInterval(slide,2500)
});

//==========================================================================
// sale_swiper
//==========================================================================
var swiper = new Swiper('#sale > .swiper-container', {
    slidesPerView: 2.2,
    spaceBetween: 0,
    freeMode: true
  });


//==========================================================================
// bestPrd Handling
//==========================================================================
prdNum = 0;
prdNum = $(this).index();
$(".prd_nav > li").click(function(){
    $(".prd_wrap").stop().animate({"top":"5rem", "opacity":0}, 500, function(){
        $(this).css({"display":"none"});
    });
    //console.log(prdNum);
    prdNum = $(this).index();
    $(".prd_wrap").eq(prdNum).css({"display":"block"}).stop().animate({"top":0, "opacity":1}, 500);
    $(".prd_nav > li").css({"color":"#666"});
    $(".prd_nav div").css({"width":0});
    $(this).css({"color":"#222"});
    $(this).children("div").css({"width":"100%"});
});
$(".prd_nav > li").hover(function(){
    if($(this).index() != prdNum) {
        $(this).css({"color":"#222"});
        $(this).children("div").stop().animate({"width":"100%"}, 100);
    }
},function(){
    if($(this).index() != prdNum) {
        $(this).css({"color":"#666"});
        $(this).children("div").stop().animate({"width":0}, 100);
    }
    
});
$(".prd_nav > li").eq(0).trigger("click");

$(".prd").mouseenter(function(){
    $(this).find(".no_hov").css({"opacity":0})
    $(this).find(".hov").show();
    
});
$(".prd").mouseleave(function(){
    $(this).find(".hov").hide();
    $(this).find(".no_hov").css({"opacity":1})
    
});
