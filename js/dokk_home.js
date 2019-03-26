

//==========================================================================
// banner_swiper
//==========================================================================
var swiper = new Swiper('#banner > .swiper-container', {
    slidesPerView: 'auto',
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
},
    speed: 1000,
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
// tab Handling
//==========================================================================
$(".tab").hide();
$(".tab:first").show();

$(".tab_nav > li").click(function() {
    $(".tab_nav > li").css({"color":"#232323","font-weight":"300", "font-size":"14px"})
    $(this).css({"color":"#c40000","font-weight":"600", "font-size":"16px"})
    $(".tab").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
});
$(".tab_nav > li").eq(0).trigger("click");



//==========================================================================
// majang
//==========================================================================
var swiper = new Swiper('#majang > .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });