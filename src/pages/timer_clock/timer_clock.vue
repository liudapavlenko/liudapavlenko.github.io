<template>
  <article>
      <div class="timer_pos">
          <form id="timerForm" >
              <br><br>
              <div id="timer">{{ timerDisplay }}</div>
          <br><br>
          <h1 class="font_all1">Введіть час:</h1>
              <div class="timer_pos1">
                  <div class="circle_wrapper">
                      <div class="circle_type">
                          <input v-model.number="hours" type="number" id="form_inp_hour" name="form_inp_hour" min="0">
                      </div>
                      <label for="form_inp_hour">Години</label>
                  </div>
                  <div class="circle_wrapper">
                      <div class="circle_type">
                          <input v-model.number="minutes" type="number" id="form_inp_minute" name="form_inp_minute" min="0" max="59">
                      </div>
                      <label for="form_inp_minute">Хвилини</label>
                  </div>
                  <div class="circle_wrapper">
                      <div class="circle_type">
                          <input v-model.number="seconds" type="number" id="form_inp_seconds" name="form_inp_seconds" min="0" max="59">
                      </div>
                      <label for="form_inp_seconds">Секунди</label>
                  </div>
              </div>  
              <br><br>
              
              <div>
                  <label for="nameTimer" class="form-label font_all">Назва задачі:</label>
                  <input v-model="task" type="text" id="name_timer" class="form-control" aria-describedby="NameTimer"><br>
                  
                  <div class="but_orgn">
                    <button @click.prevent="start_timer_operat" type="button" id="start_button" class="btn btn-primary but_1">Запустити</button>
                    <button @click="pause_timer_operat" type="button" id="pause_button" class="btn btn-primary but_1">Призупинити/продовжити</button><br>
                    <button @click="stop_timer_operat" type="button" id="stop_button" class="btn btn-primary but_1">Зупинити</button><br>
                  </div>
                  <br><br>
                  <div id="table_date">
                      

                      <table class="table">
                          <thead>
                              <tr>
                              <th style="color:#A53C30" scope="col">Назва</th>
                              <th style="color:#A53C30" scope="col">Початок таймера</th>
                              <th style="color:#A53C30" scope="col">Завершення таймера</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="line in table_lines" :key="line.id">
                              <td>{{ line.name }}</td>
                              <td>{{ line.start }}</td>
                              <td>{{ line.end }}</td>
                              </tr>
                          </tbody>
                          </table>
                  </div>
              </div>
              
              <br><br>
          </form>
      </div>
  </article>

  <footer>
      <div cass="footer_link">
          <a class="nav-link" href="user_registration.html" style="color: white;">Реєстрація</a>
          <a class="nav-link" href="login_in.html" style="color: white;">Вхід</a>
          <a class="nav-link" href="profile.html" style="color: white;">Профіль</a>
          <a class="nav-link" href="about_app.html" style="color: white;">Про додаток</a>
          <a class="nav-link" href="index.html" style="color: white;">Облік робочого часу</a>
      </div>
  </footer> 
</template>

<script>
export default {
  name: "timer_clock",
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      task: '',
      timerDisplay: '00:00:00',
      table_lines: [],
      timer: null,
      startTime: null,
      endTime: null
    };
  },
  methods: {
    start_timer_operat() {
      const all_time = this.hours * 3600 + this.minutes * 60 + this.seconds;
      this.startTime = new Date();
      this.endTime = new Date(this.startTime.getTime() + all_time * 1000);
      this.updateTimerDisplay();
      this.timer = setInterval(() => this.updateTimer(), 1000);
      event.preventDefault();
    },
    updateTimer() {
      const now = new Date();
      if (now >= this.endTime) {
        this.stop_timer_operat();
      } else {
        this.updateTimerDisplay();
      }
    },
    updateTimerDisplay() {
      const now = new Date();
      const timeLeft = Math.max(0, this.endTime - now);
      const hours = Math.floor(timeLeft / 3600000);
      const minutes = Math.floor((timeLeft % 3600000) / 60000);
      const seconds = Math.floor((timeLeft % 60000) / 1000);
      this.timerDisplay = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
    pause_timer_operat() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.start_timer_operat();
      }
    },
    stop_timer_operat() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        this.timerDisplay = '00:00:00';
        this.table_lines.push({
          id: this.table_lines.length,
          name: this.task,
          start: this.startTime.toLocaleString(),
          end: new Date().toLocaleString()
        });
      }
    }
  },
  mounted() {
        
  },
}
</script>
