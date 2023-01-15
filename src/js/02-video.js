import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const playerRef = document.querySelector("#vimeo-player");
console.log(playerRef);
const player = new Player(playerRef);
const CUR_TIME_KEY = "videoplayer-current-time";

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

let timeToSave = 0;
function getCurrentTime (curTime) {
    timeToSave = curTime.seconds;
    console.log(timeToSave);
    localStorage.setItem(CUR_TIME_KEY, timeToSave);
};
player.on('timeupdate', throttle(getCurrentTime, 1000));
setSavedTime();

function setSavedTime() {

    const savedTime = localStorage.getItem(CUR_TIME_KEY);

    if (savedTime) {
        player.setCurrentTime(savedTime);
        localStorage.removeItem(CUR_TIME_KEY);
    };  
};


