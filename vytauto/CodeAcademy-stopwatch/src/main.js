import Timer from "./timer.js"

const timerContainer = document.querySelector("#timer-container");
const addTimerButton = document.querySelector("#btn-add-timer");

// class Timer extends TimerView {
//   constructor(container) {
//      //Start
//   // const timerView = new TimerView(container);
//   super(container);

//   const updateTimerText = (secondsElapsed) => {
//     const { hours, minutes, seconds } = calculateTime(secondsElapsed);

//     this.timerView.timerBox.textContent = `${formatTime(hours)}:${formatTime(
//       minutes
//     )}:${formatTime(seconds)}`;
//   };

//   const createLap = (lapNumber, lapTime) => {
//     const { hours, minutes, seconds } = calculateTime(lapTime);

//     const lapItemEl = document.createElement("div");
//     lapItemEl.className = "lap-log";

//     const lapNumberEl = document.createElement("span");
//     lapNumberEl.textContent = `${lapNumber} Lap`;

//     const lapTimeEl = document.createElement("span");
//     lapTimeEl.textContent = `${formatTime(hours)}:${formatTime(
//       minutes
//     )}:${formatTime(seconds)}`;

//     lapItemEl.append(lapNumberEl, lapTimeEl);
//     this.timerView.lapContainer.append(lapItemEl);
//   };

//   const clearLaps = () => {
//     this.timerView.lapContainer.innerHTML = "";
//   };

//   this.state = new TimerState({
//     updateTime: updateTimerText,
//     setLap: createLap,
//     clearLaps: clearLaps,
//   });
//   this.bindButtonEvents();

//   }
//   bindButtonEvents() {
//     this.timerView.startButton.addEventListener("click", () => {
//       this.timerState.start();
//      });
   
//      this.timerView.stopButton.addEventListener("click", () => {
//        this.timerState.stop();
//      });
   
//      this.timerView.resetButton.addEventListener("click", () => {
//        this.timerState.reset();
//      });
   
//      this.timerView.lapButton.addEventListener("click", () => {
//        this.timerState.lap();
//      });
//      //End
//     }
// } 
 


addTimerButton.addEventListener("click", () => {
  new Timer(timerContainer);
});
