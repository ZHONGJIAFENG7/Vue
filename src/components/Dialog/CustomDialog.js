export default {
  name: 'customDialog',
  props: {
    // 标题
    title: {
      type: String,
      default: '弹框'
    },
    // 宽度
    width: {
      type: String,
      default: '80%'
    },
    // class类
    className: {
      type: [String, Object],
      default: 'custom-dialog'
    },
    // 是否全屏
    fullscreen: {
      type: Boolean,
      default: false
    },
    // 返回jsx的函数
    component: {
      type: Function,
      required: true,
      default: () => {}
    },
    close: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    _component() {
      const fn = this.component;
      let VNode;
      const self = this;

      return {
        name: 'wrapper',
        render() {
          VNode = fn();

          if (!VNode.componentOptions) {
            return VNode;
          }

          const listeners =
            VNode.componentOptions.listeners ||
            (VNode.componentOptions.listeners = {});

          // 添加done
          const orginDoneHandler = listeners.done;
          listeners.done = function() {
            if (orginDoneHandler) orginDoneHandler();
            self.$closeDialog();
          };

          return VNode;
        }
      };
    }
  },
  mounted() {
    console.log(this.$closeDialog);
  },
  methods: {
    closeDialog() {
      Object.assign(this.$data, this.$options.data());
      this.close();
      this.$refs.component.$destroy();
    }
  },
  render() {
    return (
      <el-dialog
        visible={this.visible}
        fullscreen={this.fullscreen}
        before-close={this.$closeDialog}
        title={this.title}
        width={this.width}
        class={this.className}
        lock-scroll={true}
        append-to-body={true}
        close-on-click-modal={false}
        center={false}
      >
        <this._component style="padding: 10px;" ref="component" />
      </el-dialog>
    );
  }
};
