let heads = 0;
let tails = 0;

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip");
let resetBtn = document.querySelector("#reset");

flipBtn.addEventListener("click", () => {
  let index = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (index) {
    setTimeout(() => {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(() => {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }

  setTimeout(updateStatistics, 3000);
  disableButton();
});

function updateStatistics() {
  document.querySelector("#headsCount").textContent = `Heads: ${heads}`;
  document.querySelector("#tailsCount").textContent = `Tails: ${tails}`;
}

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;
  }, 3500);
}

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStatistics();
});
