import Vue from 'vue';
import Router from 'vue-router';
import MergeTable from '@/components/MergeTable';
import Dialog from '@/views/dialog/dialog.vue';
import Text from '@/views/text/text.vue';
import TreeSelect from '@/views/select/treeSelect.vue';
import ListScroll from '@/views/listScroll/listScroll.vue';

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
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/text',
      name: 'text',
      component: Text
    },
    {
      path: '/treeSelect',
      name: 'treeSelect',
      component: TreeSelect
    },
    {
      path: '/listScroll',
      name: 'listScroll',
      component: ListScroll
    }
  ]
});
