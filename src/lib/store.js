import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            user: null,
        };
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
    },
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        },
    },
    getters: {
        getUser: (state) => state.user,
    },
});

export default store;