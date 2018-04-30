
function setup() {
  const video =  document.querySelector('.player__video');
  const playButton =  document.querySelector('.player__button');
  const volumeRange =  document.querySelector('.player__slider[name="volume"]');
  const rateRange =  document.querySelector('.player__slider[name="playbackRate"]');
  const skipButtons =  document.querySelectorAll('.player__button');

  let isPlaying = false;
  const togglePlay = (e) => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      video.play();
    } else {
      video.pause()
    }
  }
    playButton.addEventListener('click', togglePlay);
}

setup();
