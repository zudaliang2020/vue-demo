import Vuex from 'vuex'

export default Vuex.createStore({
	state: {
		text: 'word from vuex'
	},
	mutations: {
		setText(state, value) {
			state.text = value
		}
	},
	actions: {},
	modules: {}
});
