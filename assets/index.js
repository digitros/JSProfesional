import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const togglePlayButton = document.getElementById("togglePlayButton");
const toggleMuteButton = document.getElementById("toggleMuteButton");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });
togglePlayButton.onclick = () => player.togglePlay();
toggleMuteButton.onclick = () => player.toggleMute();