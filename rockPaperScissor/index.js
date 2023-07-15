const rockSign = document.querySelector(".rockSign");
const paperSign = document.querySelector(".paperSign");
const scissorSign = document.querySelector(".scissorSign");
const content = document.querySelector(".content");
let userHasChosen = false;
let userChoice; // 1 = rock, 2 = paper, 3 = scissors
let pcChoice;

rockSign.addEventListener("click", (e) => {
  if (userHasChosen == false) {
    userHasChosen = true;
    rockSign.style.border = "solid 5px gold";
    console.log("you clicked the rock");
    userChoice = 1;
    do {
      pcChoice = pcPlay();
      // console.log("pcPlay()");
      if (pcChoice !== userChoice) {
        break;
      }
    } while (userHasChosen);
    handlePlay();
  }
});

paperSign.addEventListener("click", (e) => {
  if (userHasChosen == false) {
    userHasChosen = true;
    paperSign.style.border = "solid 5px gold";
    console.log("you clicked the paper");
    userChoice = 2;
    do {
      pcChoice = pcPlay();
      // console.log("pcPlay()");
      if (pcChoice !== userChoice) {
        break;
      }
    } while (userHasChosen);
    handlePlay();
  }
});

scissorSign.addEventListener("click", (e) => {
  if (userHasChosen == false) {
    userHasChosen = true;
    scissorSign.style.border = "solid 5px gold";
    console.log("you clicked the scissor");
    userChoice = 3;
    do {
      pcChoice = pcPlay();
      // console.log("pcPlay()");
      if (pcChoice !== userChoice) {
        break;
      }
    } while (userHasChosen);
    handlePlay();
  }
});

function pcPlay() {
  let pcChoice = Math.floor(Math.random() * 3) + 1;
  console.log(pcChoice);
  return pcChoice;
}

function handlePlay() {
  let countdown = document.createElement("div");
  countdown.classList.add("countdown");
  countdown.textContent = "3";

  setTimeout(() => {
    countdown.textContent = "2";
    setTimeout(() => {
      countdown.textContent = "1";
    }, 1000);
  }, 1000);

  content.append(countdown);
  setTimeout(() => {
    content.removeChild(countdown);
  }, 3000);

  setTimeout(() => {
    if (userChoice === 3 && pcChoice === 1) {
      console.log("u lost");
      let pcRockSign = document.createElement("div");
      pcRockSign.classList.add("pcRockSign");
      pcRockSign.innerHTML = `<i class="fa-sharp fa-regular fa-hand-back-fist"></i>`;
      let loseText = document.createElement("p");
      loseText.classList.add("loseText");
      loseText.textContent = "I'm sorry but you lost";
      content.append(pcRockSign);
      setTimeout(() => {
        content.append(loseText);
      }, 500);
    }

    if (userChoice === 3 && pcChoice === 2) {
      console.log("u won");
      let pcPaperSign = document.createElement("div");
      pcPaperSign.classList.add("pcPaperSign");
      pcPaperSign.innerHTML = `<i class="fa-sharp fa-regular fa-hand"></i>`;
      let winText = document.createElement("p");
      winText.classList.add("winText");
      winText.textContent = "Damn it you won!";
      content.append(pcPaperSign);
      setTimeout(() => {
        content.append(winText);
      }, 500);
    }

    if (userChoice === 1 && pcChoice === 3) {
      console.log("u won");
      let pcScissorSign = document.createElement("div");
      pcScissorSign.classList.add("pcScissorSign");
      pcScissorSign.innerHTML = `<i class="fa-sharp fa-regular fa-hand-scissors"></i>`;
      let winText = document.createElement("p");
      winText.classList.add("winText");
      winText.textContent = "Damn it you won!";
      content.append(pcScissorSign);
      setTimeout(() => {
        content.append(winText);
      }, 500);
    }

    if (userChoice === 1 && pcChoice === 2) {
      console.log("u lost");
      let pcPaperSign = document.createElement("div");
      pcPaperSign.classList.add("pcPaperSign");
      pcPaperSign.innerHTML = `<i class="fa-sharp fa-regular fa-hand"></i>`;
      let loseText = document.createElement("p");
      loseText.classList.add("loseText");
      loseText.textContent = "I'm sorry but you lost";
      content.append(pcPaperSign);
      setTimeout(() => {
        content.append(loseText);
      }, 500);
    }

    if (userChoice === 2 && pcChoice === 3) {
      console.log("u lost");
      let pcScissorSign = document.createElement("div");
      pcScissorSign.classList.add("pcScissorSign");
      pcScissorSign.innerHTML = `<i class="fa-sharp fa-regular fa-hand-scissors"></i>`;
      let loseText = document.createElement("p");
      loseText.classList.add("loseText");
      loseText.textContent = "I'm sorry but you lost";
      content.append(pcScissorSign);
      setTimeout(() => {
        content.append(loseText);
      }, 500);
    }

    if (userChoice === 2 && pcChoice === 1) {
      console.log("u won");
      let pcRockSign = document.createElement("div");
      pcRockSign.classList.add("pcRockSign");
      pcRockSign.innerHTML = `<i class="fa-sharp fa-regular fa-hand-back-fist"></i>`;
      let winText = document.createElement("p");
      winText.classList.add("winText");
      winText.textContent = "Damn it you won!";
      content.append(pcRockSign);
      setTimeout(() => {
        content.append(winText);
      }, 500);
    }
  }, 3000);
}
