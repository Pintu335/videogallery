var video = document.getElementById("Video");
  var progressBar = document.getElementById("progressBar");

  video.addEventListener("timeupdate", function() {
    var currentTime = video.currentTime;
    var duration = video.duration;
    progressBar.value = (currentTime / duration) * 100;
  });

  progressBar.addEventListener("input", function() {
    var seekTime = (progressBar.value / 100) * video.duration;
    video.currentTime = seekTime;
  });