const image= document.querySelector('img');
const title= document.getElementById('title');
const artist= document.getElementById('artist');
const music=document.querySelector('audio');
const prevBtn=document.getElementById('prev');
const playBtn=document.getElementById('play');
const nextBtn=document.getElementById('next');

// Muisc
const songs=[
    {
        name:'jacinto-1',
        displayName:'Electric Chill Machine',
        artist:'Jacinto Design'
    },
    {
        name:'jacinto-2',
        displayName:'Seven Nation Army',
        artist:'Jacinto Design'
    },
    {
        name:'jacinto-3',
        displayName:'Front Row Remix',
        artist:'Metric/Jacinto Design'
    }
]

// check music is playing
let isPlaying=false;
// Play
function playSong(){
    isPlaying=true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','Pause')
    music.play();

}

// Pause
function pauseSong(){
    isPlaying=false;
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title','Play')
    music.pause();
}


// Play or Pause Event Listener

playBtn.addEventListener('click',()=>(isPlaying) ? pauseSong() :playSong())


// Update  Dom
function loadSong(song){
    title.textContent=song.displayName;
    artist.textContent=song.artist;
    music.src=`music/${song.name}.mp3`;
    image.src=`img/${song.name}.jpg`;
}

// cureent Song
let songIndex=0;

//on load -Select first song
loadSong(songs[songIndex]);

prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);