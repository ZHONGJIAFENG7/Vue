// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {
  Dialog,
  Button,
  Select,
  Input,
  Option,
  Tree,
  Tooltip
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CustomDialog from './components/Dialog/index.js';
import CustomText from './components/Text/CustomText.vue';
import CustomTreeSelect from './components/TreeSelect/custom-tree-select.vue';
import ListScroll from './components/ListScroll/ListScroll.vue';

Vue.config.productionTip = false;

Vue.component(Dialog.name, Dialog);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Input.name, Input);
Vue.component(Option.name, Option);
Vue.component(Tree.name, Tree);
Vue.component(Tooltip.name, Tooltip);
Vue.component(CustomTreeSelect.name, CustomTreeSelect);
Vue.component(CustomText.name, CustomText);
Vue.component(ListScroll.name, ListScroll);
Vue.component(CustomText.name, CustomText);
Vue.use(CustomDialog);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
