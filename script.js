const image= document.querySelector('img');
const title= document.getElementById('title');
const artist= document.getElementById('artist');
const music=document.querySelector('audio');
const progessContainer =document.getElementById('progress-container');
const currentTiming= document.getElementById('current-time');
const durationTiming= document.getElementById('duration');
const progess =document.getElementById('progress');
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

// Prev Song
function prevSong(){
  
    songIndex--;
    if(songIndex<0)
    {
        songIndex=songs.length-1;
    }
    loadSong(songs[songIndex]);
    playSong();
}


// Next Song
function nextSong(){
   
    if(songIndex>songs.length)
    {
        songIndex=0;
    }
     songIndex++;
     loadSong(songs[songIndex]);
     playSong();
}

//on load -Select first song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e)
{
    if(isPlaying)
    {
      const{duration ,currentTime} = e.srcElement;
       
      const progressPercent=(currentTime/duration)*100;
      progess.style.width=`${progressPercent}%`;
    
      //Calculate Display for duration
     const durationMinutes= Math.floor(duration/60);
      let durationSeconds =Math.floor(duration%60);
     
      if(durationSeconds<10)
      {
          durationSeconds=`0${durationSeconds}`;
      }
     
    //   delay swtiching duration 
    if(durationSeconds){
        durationTiming.textContent=`${durationMinutes}:${durationSeconds}`;
    }
    
    // calculate display For Current 
    const  currentMinutes= Math.floor(currentTime/60);
    let currentSeconds =Math.floor(currentTime%60);
    if(currentSeconds<10)
    {
        currentSeconds=`0${currentSeconds}`;
    }

    currentTiming.textContent=`${currentMinutes}:${currentSeconds}`;



    }
}

// set progress Bar
function setProgessBar(e){
     const width =this.clientWidth;
     const clickX= e.offsetX;
    const{duration}=music;
     music.currentTime=(clickX/width)*duration;
}




prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
music.addEventListener('timeupdate',updateProgressBar);
music.addEventListener('ended',nextSong);
progessContainer.addEventListener('click',setProgessBar);
