
function setup() {
  const video =  document.querySelector('.player__video');
  const playButton =  document.querySelector('.player__button');
  const volumeRange =  document.querySelector('.player__slider[name="volume"]');
  const rateRange =  document.querySelector('.player__slider[name="playbackRate"]');
  const skipButtons =  document.querySelectorAll('.player__button');
  const progressBar =  document.querySelector('.progress__filled');

  const togglePlay = () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    playButton.textContent = video.paused ? '►' : '❚ ❚';
  };

  playButton.addEventListener('click', togglePlay);
  volumeRange.addEventListener('change',
    () => video.volume = volumeRange.value)
  rateRange.addEventListener('change',
    () => video.playbackRate = rateRange.value);

}

setup();
