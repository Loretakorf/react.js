import Timer from "./timer.js";
import"../assets/normalize.css";
import"../assets/styles.css";

const timerContainer = document.querySelector("#timer-container");
const addTimerButton = document.querySelector("#btn-add-timer");

addTimerButton.addEventListener("click", () => {
  new Timer(timerContainer);
});
