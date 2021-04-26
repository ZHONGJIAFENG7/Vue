import CustomDialog from './CustomDialog.js';
import { mapValues } from 'lodash';

export default function createDialog(Vue, options) {
  const instance = {};
  const openedDialogQueue = [];
  return propsData => {
    const uid = propsData.id || propsData.title;
    let inst = instance[uid];
    Vue.prototype.$closeDialog = () => {
      const currentInst = openedDialogQueue.pop();
      currentInst && currentInst.closeDialog();
    };
    if (inst) {
      inst.visible = true;
      // NOTE: 更新props
      const originPropsData = mapValues(
        inst.$options.props,
        value => value.default
      );
      Object.assign(inst.$props, originPropsData, propsData);
      // NOTE: 主要处理多个弹框打开后关闭的顺序
      openedDialogQueue.push(inst);
    } else {
      const DialogConstructor = Vue.extend(CustomDialog);
      inst = new DialogConstructor({
        propsData
      });
      inst.visible = true;
      inst.$mount();
      document.body.appendChild(inst.$el);
      openedDialogQueue.push(inst);
      instance[uid] = inst;
    }

    return inst;
  };
}
