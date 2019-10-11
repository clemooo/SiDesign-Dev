const stones = document.querySelectorAll("#stone")
const gauntlet = document.querySelector(".gauntlet")
const gems = document.querySelectorAll(".gem")
const story = document.querySelectorAll("#story")
const container = document.querySelector(".container-gant")
const origin = document.querySelector(".fond")
const background = document.querySelectorAll(".atmo")
const video = document.querySelector("video")

stones[0].onclick = function(){take_stone(stones, gems, story, background, 0)}
stones[1].onclick = function(){take_stone(stones, gems, story, background, 1)}
stones[2].onclick = function(){take_stone(stones, gems, story, background, 2)}
stones[3].onclick = function(){take_stone(stones, gems, story, background, 3)}
stones[4].onclick = function(){take_stone(stones, gems, story, background, 4)}
stones[5].onclick = function(){take_stone(stones, gems, story, background, 5)}

function take_stone(stones, gems, story, background, type){
    let i = 0

    origin.style.display = "none"
    background[type].style.display = "initial"
    for (i = 0; i <= 5; i++) {
        if (i != type)
            background[i].style.display = "none"
        story[i].pause()
    }
    stones[type].style.display = "none"
    gems[type].style.display = "initial"
    story[type].play()
    for (i = 0; i <= 5 && gems[i].style.display == "initial"; i++) {}
    if (i == 6) {
        setTimeout(function() {
            video.style.display = "initial"
            gauntlet.style.display = "none"
            for (i = 0; i <= 5; i++)
                gems[i].style.display = "none"
            video.play()
        }, story[type].duration * 1000);
    }
}


