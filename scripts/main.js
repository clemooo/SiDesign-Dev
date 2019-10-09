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
const stones = document.querySelectorAll('stone')

stones.onclick = function(stones){
  if stones.classList.contains(space) {
    gauntlet.space = 1
    stones.parentNode.removeChild(stones.0)
  } else if stones.classList.contains(mind) {
    gauntlet.mind = 1
    stones.parentNode.removeChild(stones.1)
  } else if stones.classList.contains(reality) {
    gauntlet.reality = 1
    stones.parentNode.removeChild(stones.2)
  } else if stones.classList.contains(power) {
    gauntlet.power = 1
    stones.parentNode.removeChild(stones.3)
  } else if stones.classList.contains(time) {
    gauntlet.time = 1
    stones.parentNode.removeChild(stones.4)
  } else if stones.classList.contains(soul) {
    gauntlet.soul = 1
    stones.parentNode.removeChild(stones.5)
  }
}
