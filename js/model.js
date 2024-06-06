export default class Model_timer {
    constructor() {
      this.start_t = null;
      this.finish_t = null;
      this.name_t = "";
      this.interv_t = null;
      this.flag_sf = true;
      this.time_r = null;
      this.table_line = null;
    }

    time_start(hours, minutes, seconds, task) {
      this.flag_sf = true;
      const all_time = hours * 3600 + minutes * 60 + seconds;
      this.start_t = new Date().getTime();
      this.finish_t = this.start_t + all_time * 1000;
      this.name_t = task; 
      this.interv_t = setInterval(this.time_work.bind(this), 1000);
    }
  
    time_work() {
      const real_time = new Date().getTime();
      const time_r2 = this.finish_t - real_time;
      
      if (time_r2 <= 0) {
        this.flag_sf = false;
        this.time_stop();
      } else {
        this.flag_sf = true;
        const hours = Math.floor(time_r2 / 3600000);
        const minutes = Math.floor((time_r2 % 3600000) / 60000);
        const seconds = Math.floor((time_r2 % 60000) / 1000);
        const timer_form = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById("timer").innerText = timer_form;
      }
    }

    time_pause() {
      if (this.flag_sf) {
        clearInterval(this.interv_t);
        this.flag_sf = false;
      } else {
        if (this.start_t && this.finish_t && this.name_t) {
          const real_time_2 = new Date().getTime();
          const all_seconds = (this.finish_t - real_time_2) / 1000;
          
          const hours = Math.floor(all_seconds / 3600000);
          const minutes = Math.floor((all_seconds % 3600000) / 60000);
          const seconds = Math.floor(all_seconds % 60000);
          this.time_start(hours, minutes, seconds, this.name_t);
        }
      }
    }
  
  
    time_stop() {
      clearInterval(this.interv_t);   
      const real_time_3 = new Date(); 
      const finish_time = real_time_3.toLocaleString(); 
      const start_time = new Date(this.start_t).toLocaleString();
      this.start_t = start_time;
      this.finish_t = finish_time;
      this.table_line = {name_t: this.name_t, start_t: this.start_t, finish_t: this.finish_t };

      document.getElementById("timer").innerText = "00:00:00";
      this.start_t = null;
      this.finish_t = null;
      this.name_t = "";
      this.interv_t = null;
    }
  }
