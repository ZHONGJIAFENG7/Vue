import Vue from 'vue';
import Router from 'vue-router';
import MergeTable from '@/components/MergeTable';
import Dialog from '@/components/Dialog.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MergeTable',
      component: MergeTable
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    }
  ]
});
