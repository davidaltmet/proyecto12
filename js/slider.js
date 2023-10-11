if (window.matchMedia("(max-width: 768px)").matches) {
  $(document).ready(function () {
    $("#section3_info").slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $("#items_persons").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: "#section3_info",
      dots: false,
    });
    $("#section3_info").on(
      "afterChange",
      function (event, slick, currentSlide) {
        $(".item_person").removeClass("active");
        $(".item_person").eq(currentSlide).addClass("active");
      }
    );
  });
}
