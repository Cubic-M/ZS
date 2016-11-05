$( document ).ready(function() {

  scroller();
  headerMove();
  dropDown();

});


function scroller(){
  var $root = $('html, body');

$('a[href*=#]').click(function(e) {
    e.preventDefault();
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});
}

function headerMove() {
  var $header = $("header");
  var $height = $(window).height();
  var fromTop = $(document).scrollTop();
  $header.toggleClass("down", (fromTop > ($height * 0.9)));
  $(window).scroll(function() {
    var fromTop = $(document).scrollTop();
    $header.toggleClass("down", (fromTop > ($height * 0.9)));
  });
}
function dropDown() {
  var $p = $(".hide");
  var $btn = $("#ddbtn");
  var $svg = $("#ddSvg");
  $btn.click(function() {
    $p.toggleClass("hide");
    toggleSvgClass($svg,"mirror");
  });

}

function toggleSvgClass(object, className ) {
  if (object.attr("class") == className) {
    object.attr("class","");

  }else {
    object.attr("class", className);
  }

}
