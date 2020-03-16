import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import cookies from 'js-cookie'
import gm from '@/common/methods'
import qs from 'qs'

// js-cookie
Vue.prototype.cookies = cookies

// axios发送对象，使用this.qs.stringify(obj)
Vue.prototype.qs = qs

// 非父子组件传值bus，绑定接收：this.bus.$on('handleMsg', function (data) {
// console.log(data)
// })
// 触发、传值 this.bus.$emit('handleMsg', '我是b传给a的值')
Vue.prototype.bus = new Vue()

Vue.use(ElementUI)

// 全局方法，使用this.方法名，ex:this.exMethod
Vue.use(gm)