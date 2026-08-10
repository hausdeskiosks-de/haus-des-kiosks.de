const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const soundButton = document.querySelector('.teaser-sound');
const teaserVideo = document.querySelector('.teaser-video');
const teaserAudio = document.querySelector('.teaser-audio');

if (soundButton && teaserVideo && teaserAudio) {
  let userMuted = false;

  const setSoundState = (isPlaying) => {
    soundButton.setAttribute('aria-pressed', String(isPlaying));
  };

  const trySound = ({ restart = false } = {}) => {
    if (userMuted) return Promise.resolve(false);
    if (teaserAudio.ended && !restart) return Promise.resolve(false);
    if (restart) teaserAudio.currentTime = 0;

    return teaserAudio.play()
      .then(() => {
        setSoundState(true);
        return true;
      })
      .catch(() => {
        setSoundState(false);
        return false;
      });
  };

  setSoundState(false);
  trySound();

  const unlock = (event) => {
    if (event.target.closest?.('.teaser-sound')) return;

    trySound().then((started) => {
      if (!started) return;
      document.removeEventListener('pointerdown', unlock);
      document.removeEventListener('keydown', unlock);
    });
  };
  document.addEventListener('pointerdown', unlock);
  document.addEventListener('keydown', unlock);

  teaserAudio.addEventListener('ended', () => {
    setSoundState(false);
  });

  soundButton.addEventListener('click', () => {
    if (!teaserAudio.paused) {
      teaserAudio.pause();
      userMuted = true;
      setSoundState(false);
    } else {
      userMuted = false;
      trySound({ restart: true });
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      teaserAudio.pause();
      setSoundState(false);
    }
    else trySound();
  });
}
