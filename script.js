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


// Get all the videos from the video list
const videoList = document.querySelectorAll('.vid video');

// Function to update the completion percentage
function updatePercentage(videoId) {
  const mainVideo = document.getElementById('myVideo');
  const progressBar = document.getElementById('progressBar');
  const percentage = document.getElementById('percentage');
  const finishBtn = document.getElementById('finishBtn');

  // Calculate the completion percentage
  const currentTime = mainVideo.currentTime;
  const duration = mainVideo.duration;
  const percent = (currentTime / duration) * 100;

  // Update the progress bar and percentage display
  progressBar.value = percent;
  percentage.textContent = percent.toFixed(0) + '%';

  // Update the completion percentage for the respective video in the video list
  const completeSpan = document.querySelector(`#${videoId} .complete`);
  if (completeSpan) {
    completeSpan.textContent = percent.toFixed(0) + '% completed';
  }

  // Show/hide the "Finish" button based on the completion percentage
  if (percent >= 100) {
    finishBtn.style.display = 'block';
  } else {
    finishBtn.style.display = 'none';
  }
}

// Function to handle the "Finish" button click
function handleFinishButtonClick() {
    const activeVideo = document.querySelector('.vid.active');
    const videoId = activeVideo.getAttribute('id');
    const completeSpan = activeVideo.querySelector('.complete');
    completeSpan.textContent = 'completed';
    updatePercentage(videoId);
  
    // Play the next video
    const nextVideoId = parseInt(videoId.substr(5)) + 1;
    const nextVideo = document.getElementById(`video${nextVideoId}`);
    if (nextVideo) {
      const src = nextVideo.querySelector('video').getAttribute('src');
      const title = nextVideo.querySelector('.title').textContent.trim();
      nextVideo.classList.add('active');
      const mainVideo = document.getElementById('myVideo');
      mainVideo.src = src;
      const mainVideoTitle = document.querySelector('.main-video .title');
      mainVideoTitle.textContent = title;
      mainVideo.play();
    }
  }
  

 


// Add event listeners to update the completion percentage
const mainVideo = document.getElementById('myVideo');
mainVideo.addEventListener('timeupdate', function () {
  const activeVideo = document.querySelector('.vid.active');
  const videoId = activeVideo.getAttribute('id');
  updatePercentage(videoId);
});
mainVideo.addEventListener('ended', function () {
  const activeVideo = document.querySelector('.vid.active');
  const videoId = activeVideo.getAttribute('id');
  const completeSpan = activeVideo.querySelector('.complete');
  completeSpan.textContent = 'completed';
  updatePercentage(videoId);
});

// Add click event listener to each video in the video list
videoList.forEach((video) => {
  video.addEventListener('click', function () {
    // Get the source and title of the clicked video
    const src = this.getAttribute('src');
    const title = this.nextElementSibling.textContent.trim();
    const videoId = this.parentNode.getAttribute('id');
  
    // Update the main video with the clicked video
    const mainVideo = document.getElementById('myVideo');
    mainVideo.src = src;

    // Update the title of the main video
    const mainVideoTitle = document.querySelector('.main-video .title');
    mainVideoTitle.textContent = title;

    // Remove the 'active' class from all videos in the video list
    const activeVideos = document.querySelectorAll('.vid.active');
    activeVideos.forEach((activeVideo) => {
      activeVideo.classList.remove('active');
    });

    // Add the 'active' class to the clicked video
    this.parentNode.classList.add('active');
  });
});


