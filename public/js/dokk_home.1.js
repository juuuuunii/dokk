//==========================================================================
// top_nav
//==========================================================================
$(".hd_wrapper").mouseenter(function() {
    $(".category").stop().slideDown(150);
})
$(".category").mouseleave(function() {
    $(".category").stop().slideUp(150);
})
//==========================================================================
// banner_swiper
//==========================================================================
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
    centeredSlides: true,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,

});

//==========================================================================
// best Handling
//==========================================================================
prdNum = 0;
prdNum = $(this).index();
$(".best_nav > li").mouseenter(function(){
    $(".best .scts").stop().animate({"top":"5rem", "opacity":0}, 500, function(){
        $(this).css({"display":"none"});
    });
    //console.log(this);
    prdNum = $(this).index();
    //console.log(prdNum);
    $(".best .scts").eq(prdNum).css({"display":"block"}).stop().animate({"top":0, "opacity":1}, 500);
    $(".best_nav > li").css({"color":"#222"});
    $(this).css({"color":"#c40000"});
    //console.log(prdNum);
    //console.log(this);
});
$(".best_nav > li").eq(0).trigger("mouseenter");



