import TimerState from "./timerState.js";
import TimerView from "./timerView.js";
import { formatTime, calculateTime } from "./utils.js";

class Timer extends TimerView {
    constructor(container) {
       //Start
    // const timerView = new TimerView(container);
    super(container);
  
    const updateTimerText = (secondsElapsed) => {
      const { hours, minutes, seconds } = calculateTime(secondsElapsed);
      
      this.timerBox.textContent = `${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`;
      
    };
  
    const createLap = (lapNumber, lapTime) => {
      const { hours, minutes, seconds } = calculateTime(lapTime);
  
      const lapItemEl = document.createElement("div");
      lapItemEl.className = "lap-log";
  
      const lapNumberEl = document.createElement("span");
      lapNumberEl.textContent = `${lapNumber} Lap`;
  
      const lapTimeEl = document.createElement("span");
      lapTimeEl.textContent = `${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`;
  
      lapItemEl.append(lapNumberEl, lapTimeEl);
      this.lapContainer.append(lapItemEl);
    };
  
    const clearLaps = () => {
      this.lapContainer.innerHTML = "";
    };
  
    this.timerState = new TimerState({
      updateTime: updateTimerText,
      setLap: createLap,
      clearLaps: clearLaps,
    });
    this.bindButtonEvents();
  
    }
    bindButtonEvents() {
      this.startButton.addEventListener("click", () => {
        this.timerState.start();
       });
     
       this.stopButton.addEventListener("click", () => {
         this.timerState.stop();
       });
     
       this.resetButton.addEventListener("click", () => {
         this.timerState.reset();
       });
     
       this.lapButton.addEventListener("click", () => {
         this.timerState.lap();
       });
       //End
      }
  } 
  export default Timer;