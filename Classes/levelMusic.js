const levelMusic = {
    run: ()=>{
        let songName = "easy_song.mp3"
        const audioHTML = `<div>
                        <audio id="audio">
                            <source src="../sources/${songName}" type="audio/mp3">
                        </audio>
                     </div>`
        document.body.innerHTML += audioHTML;

        let playMusic = 0;
    },
    playPause: () => {
        if(playMusic === 0){
            playMusic = 1;
            audio.play();
        }else{
           playMusic = 0;
           audio.pause();
        }
    }
}


/* let songName = "easy_song.mp3"
const audioHTML = `<div>
                        <audio id="audio">
                            <source src="../sources/${songName}" type="audio/mp3">
                        </audio>
                     </div>`
document.body.innerHTML += audioHTML;

let playMusic = 0;

function playPause(){
    if(playMusic === 0){
        playMusic = 1;
        audio.play();
    }else{
        playMusic = 0;
        audio.pause();
    }
} */
