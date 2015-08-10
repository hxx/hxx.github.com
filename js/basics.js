$(function() {
  return $("body").keyup(function(event) {
    if (event.which === 37 && $(".paging .left > a").length) {
      return location.replace($(".paging .left >a").attr("href"));
    } else if (event.which === 39 && $(".paging .right > a").length) {
      return location.replace($(".paging .right >a").attr("href"));
    }
  });
});

$(window).scroll(function() {
  if($(window).scrollTop() == 0)
  {
    $("header").css("display", "none");
  }
  else {
    var headerOpacity = $(window).scrollTop() / 100;
    $("header").css("display", "block");
    $("header").css("opacity", headerOpacity);
  }
});
