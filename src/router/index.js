import Vue from 'vue';
import Router from 'vue-router';
import MergeTable from '@/components/MergeTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MergeTable',
      component: MergeTable
    }
  ]
});
