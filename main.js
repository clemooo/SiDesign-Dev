const stones = document.querySelectorAll("#stone")
const gems = document.querySelectorAll(".gem")
const story = document.querySelectorAll("#story")

stones[0].onclick = function(){take_stone(stones[0], gems[0], story[0])}
stones[1].onclick = function(){take_stone(stones[1], gems[1], story[1])}
stones[2].onclick = function(){take_stone(stones[2], gems[2], story[2])}
stones[3].onclick = function(){take_stone(stones[3], gems[3], story[3])}
stones[4].onclick = function(){take_stone(stones[4], gems[4], story[4])}
stones[5].onclick = function(){take_stone(stones[5], gems[5], story[5])}

function take_stone(stone, gem, story){
    stone.style.display = "none"
    gem.style.display = "initial"
    story.play()
}

