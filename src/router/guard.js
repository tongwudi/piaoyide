import router from './index'
import store from '../store/index'

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    window.scroll(0, 0);
    // const token = store.state.login.token
    // console.log(token);

    // if (token) {
    //     console.log('存在');
    //     next()
    // } else {
    //     console.log('不存在');
    //     if (to.path == '/login') {
    next()
    //     } else {
    //         next('/login')
    //     }
    // }

    // if (to.meta.requireAuth) {
    // if (token) {
    //     next()
    // } else {
    //     if (to.path == '/login') {
    //         next()
    //     } else {
    //         next('/login')
    //     }
    // }
    // } else {
    //     next()
    // }
})
