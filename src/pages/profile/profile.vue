<template>
	<article>
		<table class="table table-striped table-danger" id="aboutmeTable">
		
		<tbody>
			<tr v-for="userattr in userattrs" :key="userattr.id" scope="row">
				
				<td>{{ userattr.key }}</td>
				<td>{{ userattr.value }}</td>
			</tr>
		</tbody>
		</table>
	</article>
	
	<footer>
      <div cass="footer_link">
        <a class="nav-link" href="user_registration.html" style="color: white;">Реєстрація</a>
        <a class="nav-link" href="login_in.html" style="color: white;">Вхід</a> 
        <a class="nav-link" href="profile.html" style="color: white;">Профіль</a>
        <a class="nav-link" href="about_app.html" style="color: white;">Про додаток</a>
        <a class="nav-link" href="index.html" style="color: white;">Облік робочого часу</a>
		<a class="nav-link font_all_white" href="timer_clock.html">Timer</a>
    </div>
    </footer>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				userattrs: [],
			}
		},
		mounted() {
			var url = new URL(window.location.href);
			console.log(url)
			var username = url.searchParams.get("username")
			var password = url.searchParams.get("password")
			axios
			.get("http://localhost:3070/api/userdata", {
				params: {
					username: username,
					password: password,
				}
			}).then(response => {
				console.log(response.data)
				this.results = response.data[1];
				console.log(this.results);
				Object.entries(response.data).forEach((v, i, a) => {
					this.userattrs.push({
						id: i,
						key: v[0],
						value: v[1],
					});
				});
			})
			.catch(err => {
  				console.error('Error fetching user data:', err);
			});
		},
	}
</script>

<style>
	
</style>
