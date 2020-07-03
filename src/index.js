import Vue from 'vue';
// import router from './router';
import App from './App';


// import VueSession from 'vue-session';

window.$ = $;
window.jQuery = $;

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false;
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
