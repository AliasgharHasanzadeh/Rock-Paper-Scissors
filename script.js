// select the buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerchoose = document.getElementById("playerchoose");
const computerchoose = document.getElementById("computerchoose");
const start = document.querySelector(".start");
//
rock.addEventListener("click", function () {
  playerchoose.src = "img/rock.png";
  let c = computer();
  ifrock(c);
});
paper.addEventListener("click", function () {
  playerchoose.src = "img/paper.png";
  let c = computer();
  ifpaper(c);
});
scissors.addEventListener("click", function () {
  playerchoose.src = "img/scissors.png";
  let c = computer();
  ifscissors(c);
});
// functions
function computer() {
  let i = Math.trunc(Math.random() * 3 + 1);
  switch (i) {
    case 1:
      computerchoose.src = "img/rock.png";
      break;
    case 2:
      computerchoose.src = "img/paper.png";
      break;
    case 3:
      computerchoose.src = "img/scissors.png";
      break;

    default:
      break;
  }
  return i;
}
function ifrock(i) {
  switch (i) {
    case 1:
      start.innerHTML = "its a draw 🍻";
      break;
    case 2:
      start.innerHTML = "you lost🚽";
      break;
    case 3:
      start.innerHTML = "you win🏆";
      break;

    default:
      break;
  }
}
function ifpaper(i) {
  switch (i) {
    case 1:
      start.innerHTML = "you win🏆";
      break;
    case 2:
      start.innerHTML = "its a draw 🍻";
      break;
    case 3:
      start.innerHTML = "you lost🚽";
      break;

    default:
      break;
  }
}
function ifscissors(i) {
  switch (i) {
    case 1:
      start.innerHTML = "you lost🚽";
      break;
    case 2:
      start.innerHTML = "you win🏆";
      break;
    case 3:
      start.innerHTML = "its a draw 🍻";
      break;

    default:
      break;
  }
}
