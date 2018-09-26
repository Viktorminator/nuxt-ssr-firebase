import Vue from 'vue';
import Vuex from 'vuex';
import api from "~/api/index"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        pages: []
    },
    mutations: {
        replaceMenu(state, n) {
            state.pages.data = n;
        },
    },
    actions: {
        async nuxtServerInit() {
            const { data } = await api.getPages();
            store.commit('replace', data);
        }
    }
});

(async () => {
    const { data } = await api.getPages();
    store.commit('replaceMenu', data);
})();

export default store;