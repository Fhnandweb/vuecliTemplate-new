import router from '@/router'
import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import { Notification } from 'element-ui'
import store from '@/store/store'
// axios配置
const service = axios.create({
    baseURL: process.env.VUE_APP_API, // axios 基础地址
    withCredentials: true,
    // 请求超时时间
    timeout: 50000
})

// request 拦截器-------------------------------------------------------------
service.interceptors.request.use(
        config => {
            // 这里写所有请求之前都要执行的操作
            let token = store.state.login.token
            if (token) {
                config.headers.token = token
            } else {}

            return config
        },
        err => {
            return Promise.reject(err)
        }
    )
    // response 拦截器------------------------------------------------------------
service.interceptors.response.use(
        response => {
            // 这里写所有请求完成后都要执行的操作

            return response
        },
        error => {
            return Promise.reject(error)
        }
    )
    // ---------------------------------------------------------------------------
export default service