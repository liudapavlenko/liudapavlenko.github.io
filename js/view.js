
export default class View_timer {
  constructor(model) {
    this.model = model;
    this.timer_place = document.getElementById("timer");
    this.table_place = document.querySelector("#table_date tbody");
  }

  timer_out(str_timer) {
    this.timer_place.innerText = str_timer;
  }

  create_row_table(name, start_t, end_t) {
    let create_elem = document.createElement('tr');
    create_elem.innerHTML = `<td>${name}</td><td>${start_t}</td><td>${end_t}</td>`;
    this.table_place.appendChild(create_elem);
  }

  delete_t() {
    this.table_place.innerHTML = '';
  }

  table_out() {
    const line_cr_t = this.model.table_line;
      if (line_cr_t) {
        this.create_row_table(line_cr_t.name_t, line_cr_t.start_t, line_cr_t.finish_t);
      }
  }
}