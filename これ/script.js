$(nav).on("click", function () {
  var $el = $(this),
    id = $el.attr("href");
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - headerH,
    },
    500
  );
  if (winW < 890) {
    $("#menuWrap").next().slideToggle();
    $("#menuBtn").removeClass("close");
  }
  return false;
});

