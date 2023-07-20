console.log("Welcome to spotify");
//Initialize the variable
let songindex=0;

let audioelement = new Audio('dyk.mp3');
let masterplay= document.getElementById('masterplay');
let myProgressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    { songname: "Do you know",filePath:"dyk.mp3",coverpath:"bg.jpg"},
    { songname: "Yeh sham mastani",filePath:"ysm.mp3",coverpath:"bg.jpg"},
    { songname: "Do you know",filePath:"dyk.mp3",coverpath:"bg.jpg"},
    { songname: "Yeh Sham Mastani",filePath:"ysm.mp3",coverpath:"bg.jpg"}
   ]
   songitem.forEach((element,i)=>
   {
    element.getElementsByClassName("Songname")[0].innerText=songs[i].songname
   })
//audioelement.play();
masterplay.addEventListener('click',()=>{
if(audioelement.paused ||audioelement.currentTime<=0)
{
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity= 1;

}
else{
    audioelement.pause();
    
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity=0 ;


}
})

//Listen to events
audioelement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress);
    myProgressbar.value=progress;
    
})
myProgressbar.addEventListener('change',()=>{
    audioelement.currentTime=(myProgressbar.value*audioelement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
    {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')

    })
}

Array.from(document.getElementsByClassName('songitemplay')) .forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioelement.src='dyk.mp3';
        audioelement.play();
    })
})