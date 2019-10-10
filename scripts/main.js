const stones = document.querySelectorAll("#stone")
const gems = document.querySelectorAll(".gem")
const story = document.querySelectorAll("#story")
const container = document.querySelector(".container-gant")

stones[0].onclick = function(){take_stone(stones, gems, story, 0)}
stones[1].onclick = function(){take_stone(stones, gems, story, 1)}
stones[2].onclick = function(){take_stone(stones, gems, story, 2)}
stones[3].onclick = function(){take_stone(stones, gems, story, 3)}
stones[4].onclick = function(){take_stone(stones, gems, story, 4)}
stones[5].onclick = function(){take_stone(stones, gems, story, 5)}

function take_stone(stones, gems, story, type){
    let i = 0
    
    stones[type].style.display = "none"
    gems[type].style.display = "initial"
    story[type].play()
    container.style.pointerEvents = "none"
    setTimeout(function(){
	container.style.pointerEvents = "auto"
    }, story[type].duration * 1000);
    for (i = 0; i < 6 && gems[i].style.display == "initial"; i++) {}
    if (i == 6) {
	story[6].play()
	container.style.pointerEvents = "none"
	setTimeout(function(){
	    container.style.pointerEvents = "auto"
	}, story[type].duration * 1000);
    }
}

