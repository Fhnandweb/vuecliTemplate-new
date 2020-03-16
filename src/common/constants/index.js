/**
 * 全局变量定义
 */
import Vue from 'vue'
// 存放全局变量，如正则表达式
const globalAA = "示例：我是全局变量";

// 导出
const ENUM = {
    globalAA,
}
Vue.prototype.gv = ENUM

export default ENUM