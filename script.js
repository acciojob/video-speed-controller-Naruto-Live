const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const progressFilled = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const skipButtons = document.querySelectorAll('[data-skip]');
const rewind = document.querySelectorAll('.rewind');
const forward = document.querySelectorAll('.forward');


function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

function scrub(e) {
  const scrubTime =
    (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleVolume() {
  video.volume = this.value;
}

function handleSpeed() {
  video.playbackRate = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handleSpeed);

progress.addEventListener('click', scrub);


rewind.addEventListener('click' , () => {
	video.currentTime -= 10;
});

forward.addEventListener('click' , () => {
	video.currentTime += 25;
});