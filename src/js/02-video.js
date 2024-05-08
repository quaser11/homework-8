const iframe = document.getElementById('vimeo-player')
const player = new Vimeo.Player(iframe)
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(timeTrack, 1000))

function timeTrack(e){
    const time = JSON.stringify(e)

    localStorage.setItem("videoplayer-current-time", time)
}

player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds)