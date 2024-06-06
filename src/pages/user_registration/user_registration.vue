    <template>
        <article>
            <form action="date.html">
            <div class="mb-3">
            <div class="mb-3" v-bind:value="username" v-on:change="username_input">
                <label for="username_input" class="form-label font_all">Ім'я:</label><br>
                <input type="text" class="form-control" id="username_input" aria-describedby="name" name="firstname">   
            </div>
            <div class="mb-3" v-bind:value="usersurname" v-on:change="usersurname_input">
                <label for="usersurname_input" class="form-label font_all">Призвіще:</label><br>
                <input type="text" class="form-control" id="usersurname_input"  aria-describedby="surname" name="surname">
            </div> 
            <div class="mb-3" v-bind:value="email" v-on:change="email_input">
                <label for="email_input" class="form-label font_all">Email:</label><br>
                <input type="email" class="form-control" id="exampleInputEmail1 email_input" aria-describedby="emailHelp" name="email">
            </div>
            <div class="mb-3" >
                <label for="gender_input" class="form-label font_all">Стать:</label><br>
                <select v-bind:value="gender" v-model="gender" class="form-select font_all" aria-label="Default select example" name="gender">
                <option class="font_all" selected disabled value="">Виберіть стать</option>  
                <option class="font_all" value="female">Female</option>
                <option class="font_all" value="male">Male</option>
                </select>

                <div class="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div class="mb-3" v-bind:value="birthdate" v-on:change="birthdate_input">
                <label for="birthdate_input" class="form-label font_all"> Дата народження:</label><br>
                <input type="date" id="birthdate_input" class="form-control font_all" name="birthday">
            </div>
            <div class="mb-3">
                <label for="password_input" class="form-label font_all">Пароль:</label><br>
                <input v-bind:value="password" v-on:change="password_input" type="password" class="form-control" id="exampleInputPassword1 password_input" aria-describedby="passwordHelp" name="password" required>
                <div class="invalid-feedback">
                    Please provide a valid password.
                </div>
            </div>

            <div class="mb-3">
                <label for="repeat_password" class="form-label font_all">Повторити пароль:</label><br>
                <input v-bind:value="repeat_password" v-on:change="repeat_pass" type="password" class="form-control" id="exampleInputPassword1 repeat_password" aria-describedby="passwordHelp" name="password" required>
                <div class="invalid-feedback">
                    Please provide a valid password.
                </div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input font_all" id="exampleCheck1">
                <label class="form-check-label font_all" for="exampleCheck1">Перевірка</label>
            </div>
            <br>
            <button @click="register" type="button" id="register_button"  class="btn btn-primary but_1 font_all_white">Реєстрація</button><br>
            <a class="reg_log_a font_all" href="login_in.html">Вхід</a>
            </div>
        </form>
      
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
       import axios from "axios"
       export default {
           name: 'register',
           data() {
               return {
                   username: "",
                   usersurname: "",
                   birthdate: "",
                   gender: "",
                   email: "",
                   password: "",
                   repeat_password: "",
               }
           },
           methods: {
               username_input(event) {
                   this.username = event.target.value;
               },
               usersurname_input(event) {
                   this.usersurname = event.target.value;
               },
               birthdate_input(event) {
                   this.birthdate = event.target.value;
               },
               gender_input(event) {
                   this.gender = event.target.value;
               },
               email_input(event) {
                   this.email = event.target.value;
               },
               password_input(event) {
                   this.password = event.target.value;
               },
               repeat_pass(event) {
                   this.repeat_password = event.target.value;
               },
               signin() {
                   
               },
               register() {
                   axios
                   .post("http://localhost:3070/api/register", {
                       data: JSON.parse(JSON.stringify(this))
                   }).then(response => {
                       console.log(response.data)
                       window.location.href = "/profile.html?username=" + this.username + "&" + "password=" + this.password;
                   }).catch(err => {
                       throw err;
                   });
                   
               },
           },
           mounted() {
               
           },
       }
   </script>
   
   <style>
       
   </style>