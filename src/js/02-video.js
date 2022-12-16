import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(setLocalStorage, 1000));

function setLocalStorage(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

const time = localStorage.getItem(STORAGE_KEY);

// player.setCurrentTime(time);

player
  .setCurrentTime(time)
  .then(function (seconds) {
    seconds = time;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(error.name);
        break;
    }
  });
