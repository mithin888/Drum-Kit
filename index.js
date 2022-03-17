const drumButtons = document.querySelectorAll(".drum");

for (i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function (event) {
    console.log(event);
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  animation(event.key);
});

function playSound(input) {
  switch (input) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
  }
}

function animation(input) {
  let activeButton = document.querySelector(`.${input}`);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
