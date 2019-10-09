class gauntlet{
  constructor(){
    this.space = 0
    this.mind = 0
    this.reality = 0
    this.power = 0
    this.time = 0
    this.soul = 0
  }
}
const stones = document.querySelectorAll("#stone")
const gems = document.querySelectorAll(".gem")

stones[0].onclick = function(){take_stone(gauntlet, stones[0], gems[0])}
stones[1].onclick = function(){take_stone(gauntlet, stones[1], gems[1])}
stones[2].onclick = function(){take_stone(gauntlet, stones[2], gems[2])}
stones[3].onclick = function(){take_stone(gauntlet, stones[3], gems[3])}
stones[4].onclick = function(){take_stone(gauntlet, stones[4], gems[4])}
stones[5].onclick = function(){take_stone(gauntlet, stones[5], gems[5])}

function take_stone(gauntlet, stone, gem){
    stone.style.display = "none"
    switch(stone.className){
    case 'space':
	gauntlet.space = 1	
	gem.style.display = "initial"
	break
    case 'mind':
	gauntlet.mind = 1
	gem.style.display = "initial"
	break
    case 'reality':
	gauntlet.reality = 1
	gem.style.display = "initial"
	break
    case 'power':
	gauntlet.power = 1
	gem.style.display = "initial"
	break
    case 'time':
	gauntlet.time = 1
	gem.style.display = "initial"
	break
    case 'soul':
	gauntlet.soul = 1
	gem.style.display = "initial"
	break
    }
}

function snap(gauntlet){
    if (gauntlet.space == 1 && gauntlet.mind == 1 && gauntlet.reality == 1 && gauntlet.power == 1 && gauntlet.time == 1 && gauntlet.soul == 1)
	return (1)
}
