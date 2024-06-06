<template>
	<article>
		<div id="login_in">
		<form>
			<div class="mb-3">
				<div class="mb-3">
					<label for="username_input" class="form-label font_all">Email:</label>
					<input v-bind:value="username" v-on:change="username_input" type="text" class="form-control" id="exampleInputEmail1 email_input" aria-describedby="emailHelp">
					
				</div>
				<div class="mb-3">
					<label for="password_input" class="form-label font_all">Пароль:</label>
					<input v-bind:value="password" v-on:change="password_input" type="password" class="form-control" id="exampleInputPassword1 password_input">
					<div class="invalid-feedback">
						Please provide a password.
					</div>
				</div>
				<div class="mb-3 form-check">
					<input v-bind:value="remember_me" v-model="remember_me" type="checkbox" class="form-check-input" id="exampleCheck1" style="transform : scale(1.5);">
					<label class="form-check-label font_all" for="exampleCheck1">&nbsp; Перевірка</label>
				</div>
				<br><br>
				<button type="submit" class="btn btn-primary but_1" id="signin_button" @click="signin">Вхід</button><br>
				<a class="reg_log_a " href="user_registration.html">Реєстрація</a>
			</div>
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
	import axios from "axios"
	export default {
		name: 'login_in',
		data() {
			return {
				username: "",
				password: "",
				remember_me: false,
			}
		},
		methods: {
			username_input(event) {
				this.username = event.target.value;
			},
			password_input(event) {
				this.password = event.target.value;
			},
			remember_me_input(event) {
				this.remember_me = event.target.value;
			},
			login_in() {
				axios
				.get("http://localhost:3070/api/userdata", {
					params: {
						username: this.username,
						password: this.password,
					}
				}).then(response => {
					window.location.href = "/profile.html?username=" + this.username + "&" + "password=" + this.password;
				})
				.catch(err => {
					throw err;
				});
			},
			register() {
			},
		},
		mounted() {
			
		},
	}
</script>

<style>
	
</style>
