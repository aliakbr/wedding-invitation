var music = new Audio('music/love-letter.mp3');
var state = 1; // 0 : Played ; 1: Muted

function playMusic(){
    if (state == 0) {
        music.play();
    } else {
        music.pause();
    }
}

$('#open-invitation').click(function (){
    $('#overlay').addClass('hide-overlay');
    playMusic();
});

function scrollToElement(el) {
    $("html, body").animate({ scrollTop: $(`#${el}`).offset().top }, 1000);
}

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fade-in-scroll-animation");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });