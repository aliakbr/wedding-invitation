// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player1;
function onYouTubeIframeAPIReady() {

    var ctrlq1 = document.getElementById("youtube-audio1");
    ctrlq1.innerHTML = '<img id="youtube-icon1" src=""/><div id="youtube-player1"></div>';
    ctrlq1.style.cssText = 'width:20px;margin:0 auto;cursor:pointer;cursor:hand;display:none';
    ctrlq1.onclick = toggleAudio1;

    player1 = new YT.Player('youtube-player1', {
        height: '0',
        width: '0',
        videoId: ctrlq1.dataset.video,
        playerVars: {
            autoplay: ctrlq1.dataset.autoplay,
            loop: ctrlq1.dataset.loop,
        },
        events: {
            'onReady': onPlayerReady1,
            'onStateChange': onPlayerStateChange1
        }
    });
}

function togglePlayButton1(play) {
    document.getElementById("youtube-icon1").src = play ? "https://ngodingsolusi.github.io/the-wedding-of-rehan-maulidan/images/audio/pause.png" : "https://ngodingsolusi.github.io/the-wedding-of-rehan-maulidan/images/audio/play.png";
}

function toggleAudio1() {
    if ( player1.getPlayerState() == 1 || player1.getPlayerState() == 3 ) {
        player1.pauseVideo();
        togglePlayButton1(false);
    } else {
        player1.playVideo();
        togglePlayButton1(true);
    }
}

function playAudio1() {
    if ( !(player1.getPlayerState() == 1 || player1.getPlayerState() == 3) ) {
        player1.playVideo();
        togglePlayButton1(true);
    }
}

function onPlayerReady1(event) {
    player1.setPlaybackQuality("small");
    document.getElementById("youtube-audio1").style.display = "block";
    togglePlayButton1(player1.getPlayerState() !== 5);
}

function onPlayerStateChange1(event) {
    if (event.data === 0) {
        togglePlayButton1(false);
    }
}