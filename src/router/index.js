import Vue from 'vue'
import Router from 'vue-router'
import RanQuote from '@/components/ranQuote'
import Books from '@/components/books'
import Films from '@/components/films'
import Characters from '@/components/characters'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'RanQuote',
		component: RanQuote
	}, {
		path: '/books',
		name: 'Books',
		component: Books
	}, {
		path: '/films',
		name: 'Films',
		component: Films
	}, {
		path: '/characters',
		name: 'Characters',
		component: Characters
	}, ]
})