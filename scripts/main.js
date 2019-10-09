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

stones[0].onclick = function(){take_stone(gauntlet, stones[0])}
stones[1].onclick = function(){take_stone(gauntlet, stones[1])}
stones[2].onclick = function(){take_stone(gauntlet, stones[2])}
stones[3].onclick = function(){take_stone(gauntlet, stones[3])}
stones[4].onclick = function(){take_stone(gauntlet, stones[4])}
stones[5].onclick = function(){take_stone(gauntlet, stones[5])}

function take_stone(gauntlet, stone){
    stone.style.display = "none"
}

function snap(gauntlet){
    if (gauntlet.space == 1 && gauntlet.mind == 1 && gauntlet.reality == 1 && gauntlet.power == 1 && gauntlet.time == 1 && gauntlet.soul == 1)
	return (1)
}
