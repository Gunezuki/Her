const envelope = document.getElementById("envelope");
const envelopeScreen = document.querySelector(".envelope-screen");
const letterScreen = document.querySelector(".letter-screen");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");
const danceDog = document.getElementById("dance-dog");
const heartDog = document.getElementById("heart-dog");
envelope.addEventListener("click", () => {
  envelopeScreen.classList.add("hidden");
  letterScreen.classList.remove("hidden");
});
let size = 1;

noBtn.addEventListener("click", () => {
  size += 0.2;
  yesBtn.style.transform = `scale(${size})`;
});
yesBtn.addEventListener("click", () => {

  question.innerText = "MY N WORD!!! 💕";

  // Hide dancing dog
  danceDog.classList.add("hidden");

  // Show heart dog
  heartDog.classList.remove("hidden");

  yesBtn.innerText = "I love you Yanyan 💖";
  noBtn.style.display = "none";
});
