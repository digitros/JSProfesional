import MediaPlayer from '@digitros/platzimediaplayer';
import AutoPlay from '@digitros/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@digitros/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@digitros/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector("video");
const togglePlayButton: HTMLElement = document.getElementById("togglePlayButton");
const toggleMuteButton: HTMLElement = document.getElementById("toggleMuteButton");

const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads(),], 
});
togglePlayButton.onclick = () => player.togglePlay();
toggleMuteButton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}