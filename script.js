var video = document.getElementById("myVideo");
  var progressBar = document.getElementById("progressBar");
var percentage=document.getElementById("percentage");
  video.addEventListener("timeupdate", function() {
    var currentTime = video.currentTime;
    var duration = video.duration;
    progressBar.value = (currentTime / duration) * 100;
    percentage.innerText=Math.round(progressBar.value);
    
  });

  progressBar.addEventListener("input", function() {
     var seekTime = (progressBar.value / 100) * video.duration;
    video.currentTime = seekTime;
  });

var video = document.getElementById("myVideo");
var finishBtn = document.getElementById("finishBtn");
video.addEventListener("ended", function() {
  finishBtn.style.display = "block";
});
finishBtn.addEventListener("click", function() {
});
const videoListItems = document.querySelectorAll('.video-list .vid');
const mainVideo = document.getElementById('myVideo');
function handleVideoItemClick(event) {
  if (event.currentTarget.classList.contains('active')) {
    return; 
  }
  mainVideo.pause();
  mainVideo.currentTime = 0;
  videoListItems.forEach((item) => {
    item.classList.remove('active');
  });
  const clickedItem = event.currentTarget;
  clickedItem.classList.add('active');
  const videoSrc = clickedItem.querySelector('video').src;
  mainVideo.src = videoSrc;
  mainVideo.play();
  const finishButton = document.getElementById('finishBtn');
  finishButton.style.display = 'none';
}
videoListItems.forEach((item) => {
  item.addEventListener('click', handleVideoItemClick);
});

  

const finishButton = document.getElementById('finishBtn');
finishButton.addEventListener('click', function() {
  const mainVideoTitle = document.querySelector('.main-video .title').textContent;
  const videoListItems = document.querySelectorAll('.video-list .vid');
  videoListItems.forEach((videoListItem) => {
    const listItemTitle = videoListItem.querySelector('.title').textContent;
    const completeSpan = videoListItem.querySelector('.complete');
    const videoId = videoListItem.getAttribute('id');
    const videoNumber = videoId.replace('video', '');
    if (listItemTitle.includes(mainVideoTitle) && videoNumber) 
    {
      completeSpan.textContent = 'completed';
      completeSpan.style.fontSize = '15px';
    }
  });
});




  


    





  

 


  






 

 


 

  

