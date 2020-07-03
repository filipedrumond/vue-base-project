import Vue from 'vue';
// import router from './router';
import App from './App';
// import VueResource from 'vue-resource';
// import VueSession from 'vue-session';

window.$ = $;
window.jQuery = $;

Vue.config.productionTip = false;
// Vue.use(VueResource);
// Vue.use(VueSession);

window.Vue = new Vue({
    el: '#vue-app',
    // router,
    components: { App },
    template: '<App/>',
    created: function () {
        // this.$session.start();
    },
});
