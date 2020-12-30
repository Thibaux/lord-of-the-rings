import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
// import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	vuetify,
	router,
	components: {
		App
	},
	template: '<App/>'
})