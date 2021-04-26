import createDialog from './createDialog.js';

export default {
  install(Vue, options = {}) {
    const dialogFunc = createDialog(Vue, options);
    Vue.prototype.$dialog = obj => dialogFunc(obj);
  }
};
