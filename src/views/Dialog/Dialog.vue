<template>
  <div>
    <el-button
      type="text"
      @click="open"
    >点击打开 Dialog</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$dialog({
        title: '弹框',
        component: () => <div>Hello, world!</div>,
        close: () => {
          this.$closeDialog();
        }
      });
    }
  }
};
</script>
