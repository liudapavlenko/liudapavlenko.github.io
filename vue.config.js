const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true, 
	configureWebpack: {
		resolve: {
			alias: {
				vue: 'vue/dist/vue.esm-bundler.js',
			},
		},
	},
  pages: {
    
	  index: {
			entry: "./src/pages/index/index.js",
			template: "./src/pages/index/index.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "index"],
		},
    timer_clock: {
			entry: "./src/pages/timer_clock/timer_clock.js",
			filename: "timer_clock.html",
			template: "./src/pages/timer_clock/timer_clock.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "timer_clock"],
		},
		about_app: {
			entry: "./src/pages/about_app/about_app.js",
			filename: "about_app.html",
			template: "./src/pages/about_app/about_app.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "about_app"],
		},
		profile: {
			entry: "./src/pages/profile/profile.js",
			filename: "profile.html",
			template: "./src/pages/profile/profile.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "profile"],
		},
		user_registration: {
			entry: "./src/pages/user_registration/user_registration.js",
			filename: "user_registration.html",
			template: "./src/pages/user_registration/user_registration.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "user_registration"],
		},
		login_in: {
			entry: "./src/pages/login_in/login_in.js",
			filename: "login_in.html",
			template: "./src/pages/login_in/login_in.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "login_in"],
		},
  },
})
