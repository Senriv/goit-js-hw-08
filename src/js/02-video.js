import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('iframe'),
};
const player = new Player(refs.iframe);
const CURRENT_TIME = 'videoplayer-current-time';


player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);

const updateTime = time => localStorage.setItem(CURRENT_TIME, time.seconds);

player.on('timeupdate', throttle(updateTime, 1000));

console.log(refs.iframe)