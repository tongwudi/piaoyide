import Loading from './index.vue';

let instance
export default {
    install(Vue) {
        if (!instance) {
            const LoadingComponent = Vue.extend(Loading)
            instance = new LoadingComponent();
            instance.$mount()

            document.body.appendChild(instance.$el)
        }

        instance.show = false

        Vue.prototype.$loading = {
            show() {
                instance.show = true;
            },
            hide() {
                instance.show = false;
            },
        }
    }
}
