//==========================================================================
// gcate Handling swiper
//==========================================================================

$("#recom_bt").click(function() {
  window.scrollTo(0, 0);
  $("#home").hide();
  $(".menu > li").css({"background":"#fff", "color":"#222"});
  $(".gcate_page").show(10, function() {
    $(".gcate_page > div").hide();
    $("#grecom").show();
  })
 
  $(this).css({"background":"#666", "color":"#fff"});
});

$("#new_bt").click(function() {
  window.scrollTo(0, 0);
  $("#home").hide();
  $(".menu > li").css({"background":"#fff", "color":"#222"});
  $(".gcate_page").show(10, function() {
    $(".gcate_page > div").hide();
    $("#gnew").show();
  })
  $(this).css({"background":"#666", "color":"#fff"});
});

$("#popu_bt").click(function() {
  window.scrollTo(0, 0);
  $("#home").hide();
  $(".menu > li").css({"background":"#fff", "color":"#222"});
  $(".gcate_page").show(10, function() {
    $(".gcate_page > div").hide();
    $("#gpopu").show();
  })
  $(this).css({"background":"#666", "color":"#fff"});
});

$("#sale_bt").click(function() {
  window.scrollTo(0, 0);
  $("#home").hide();
  $(".menu > li").css({"background":"#fff", "color":"#222"});
  $(".gcate_page").show(10, function() {
    $(".gcate_page > div").hide();
    $("#gsale").show();
  })
  $(this).css({"background":"#666", "color":"#fff"});
});


var swiper = new Swiper('#gcate .swiper-container', {
  slidesPerView: 10,
  spaceBetween: 20,
  freeMode: true,
});

$("#all_bt").click(function() {
  $(".gsub > ul").hide();
  $(".gall").show();
}).trigger("click");

$("#beauty_bt").click(function() {
  $(".gsub > ul").hide();
  $(".gbeauty").show();
})  

$("#fashion_bt").click(function() {
  $(".gsub > ul").hide();
  $(".gfash").show();
})

$("#acc_bt").click(function() {
  $(".gsub > ul").hide();
  $(".gacc").show();
})

$("#digi_bt").click(function() {
  $(".gsub > ul").hide();
  $(".gdigi").show();
})