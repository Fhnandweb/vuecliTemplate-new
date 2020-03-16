import Vue from "vue";
import Router from "vue-router";
import { Notification } from "element-ui";
const index = () =>
    import ("./views/index/index.vue");

Vue.use(Router);

const routes = [{
        path: "/",
        component: index,
        meta: {
            title: '首页'
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];
const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [...routes]
});

// 页面 title 全局守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
        next();
    }
});


/**
 * 重写路由的push方法  解决 err 'Navigating to current location ("/") is not allowed'
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

export default router;