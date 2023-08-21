const videoElement = document.getElementById("video");
const videoSourceElement = document.getElementById("video-source");
let currentVideoIndex = 0;

function loadNextVideo() {
    const videoFileName = videos[currentVideoIndex];
    videoSourceElement.src = `videos/${videoFileName}`;
    videoElement.load();
    videoElement.play();
}

videoElement.addEventListener("ended", onVideoEnded);

function onVideoEnded() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;

    // Preload the next video
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    const nextVideoFileName = videos[nextVideoIndex];
    const nextVideoUrl = `videos/${nextVideoFileName}`;
    const nextVideo = new Audio(nextVideoUrl); // Use Audio element for preloading

    loadNextVideo(currentVideoIndex);
}


loadNextVideo();
