import Model_timer from './model.js';
import View_timer from './view.js';


export default class Controller_timer {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.timer_init();
  }

  timer_init() {
    const form_timer = document.getElementById("timerForm");
    form_timer.addEventListener("submit", this.start_timer_operat.bind(this));
    document.getElementById("stop_button").addEventListener("click", this.stop_timer_operat.bind(this));
    document.getElementById("pause_button").addEventListener("click", this.pause_timer_operat.bind(this));
  }

  start_timer_operat(op) {
    op.preventDefault();
    const hours = parseInt(document.getElementById("form_inp_hour").value) || 0;
    const minutes = parseInt(document.getElementById("form_inp_minute").value) || 0;
    const seconds = parseInt(document.getElementById("form_inp_seconds").value) || 0;
    const task = document.getElementById("name_timer").value || "Task not entered";
    this.model.time_start(hours, minutes, seconds, task);
  }
  
  pause_timer_operat() {
    this.model.time_pause();
  }


  stop_timer_operat() {
    this.model.time_stop();
    this.view.table_out();
  }
  
  
}


const model_timer = new Model_timer();
const view_timer = new View_timer(model_timer);
const timerController = new Controller_timer(model_timer, view_timer);
