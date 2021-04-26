// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { Dialog, Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CustomDialog from './components/Dialog/index.js';

Vue.config.productionTip = false;

Vue.component(Dialog.name, Dialog);
Vue.component(Button.name, Button);
Vue.use(CustomDialog);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
