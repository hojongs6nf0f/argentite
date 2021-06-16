import Vue from 'vue'
import Vuex from 'vuex'

import manager from './manager.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		manager
	}
})