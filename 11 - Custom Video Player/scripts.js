function setup () {
  const video = document.querySelector('.player__video');
  const playButton = document.querySelector('.player__button');
  const volumeRange = document.querySelector('.player__slider[name="volume"]');
  const rateRange = document.querySelector('.player__slider[name="playbackRate"]');
  const progressBar = document.querySelector('.progress__filled');

  const togglePlay = () => {
    const method = video.paused ? 'play' : 'pause'
    video[method]()
    playButton.textContent = video.paused ? '►' : '❚ ❚'
  };

  const updateProgress = () => {
    const duration = video.duration || 8000;
    const fraction = (video.currentTime / duration) * 100;
    progressBar.style.flexBasis = `${fraction}%`
  };

  playButton.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);
  volumeRange.addEventListener('change',
    () => video.volume = volumeRange.value);
  rateRange.addEventListener('change',
    () => video.playbackRate = rateRange.value);

  video.addEventListener('timeupdate', updateProgress)
}

setup();
