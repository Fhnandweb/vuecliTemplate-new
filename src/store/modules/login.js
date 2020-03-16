import router from '@/router'

const state = {
    // token
    token: JSON.parse(sessionStorage.getItem("token")) || '',
};

const getters = {};

const mutations = {
    // 保存token
    saveToken(state, token) {
        sessionStorage.setItem("token", JSON.stringify(token));
        state.token = token;
    },
    // 注销
    logout(state) {
        state.token = ''
        sessionStorage.removeItem('token')
        router.push('/')
    }
};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};