$('#open-invitation').click(function (){
    $('#overlay').addClass('hide-overlay');
    playAudio1();
    /*yang bagian floating button ada animasinya tapi karena ketutup dulu sama overlay jadinya gak nampak*/
    /*pengen pas di klik buka undangan baru jalan animasinya*/
    /*var c = document.getElementsByclass('right-sidebar');
    for (var i = 0; i < c.length; i++) {
        c[i].classList.add('animate');
    }*/
});

// List of testimonials
$.get( "https://api.github.com/repos/ngodingsolusi/the-wedding-of-rehan-maulidan/issues?state=all&per_page", function( data ) {
    for (let i = 0; i < data.length; i++){
        const item = `
            <a class="list-group-item">
                <div class="name"><span class="strong" style="font-size: 24px">${data[i].user.login}</span> <span class="label label-success">${data[i].labels.length > 0 ? data[i].labels[0].name : 'Tanpa Keterangan'}</span></div>
                <hr style="margin-top: 0;">
                <div class="comment">${new showdown.Converter().makeHtml(data[i].body)}</div>
            </a>
        `;

        $("#fh5co-testimonial .list-group").append(item);
    }
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