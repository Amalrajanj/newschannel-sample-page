let video = document.querySelectorAll('.video-news')
video.forEach((play)=>{
    play.addEventListener('click',()=>{
        play.classList.toggle('activeNews')
        play.setAttribute('controls',true)

        if(play.paused){
            play.play()
        }else{
            play.pause()
            play.currentTime = 0
        }
    })
})

