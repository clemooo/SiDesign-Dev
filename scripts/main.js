const stones = document.querySelectorAll("#stone");
const gems = document.querySelectorAll(".gem");
const story = document.querySelectorAll("#story");
const container = document.querySelector(".container-gant");
const origin = document.querySelector(".fond");
const background = document.querySelectorAll(".atmo");

stones[0].onclick = function() {
  take_stone(stones, gems, story, background, 0);
};
stones[1].onclick = function() {
  take_stone(stones, gems, story, background, 1);
};
stones[2].onclick = function() {
  take_stone(stones, gems, story, background, 2);
};
stones[3].onclick = function() {
  take_stone(stones, gems, story, background, 3);
};
stones[4].onclick = function() {
  take_stone(stones, gems, story, background, 4);
};
stones[5].onclick = function() {
  take_stone(stones, gems, story, background, 5);
};

function take_stone(stones, gems, story, background, type) {
  let i = 0;

  origin.style.display = "none";
  background[type].style.display = "initial";
  for (i = 0; i <= 5; i++) {
    if (i != type) background[i].style.display = "none";
    story[i].pause();
  }
  stones[type].style.display = "none";
  gems[type].style.display = "initial";
  story[type].play();
}

//music off 
const musicButton = document.querySelector(".intro-music");
const musicAudio = document.querySelector(".intro");
const OffOn2 = document.querySelector(".musicOffOn");
let switch2 = false;

musicButton.addEventListener("click", function() {
  if (switch2 == false) {
    musicAudio.pause();
    OffOn2.innerHTML = "Off";
  } else {
    musicAudio.play();
    OffOn2.innerHTML = "On";
  }
  switch2 = !switch2;
});
