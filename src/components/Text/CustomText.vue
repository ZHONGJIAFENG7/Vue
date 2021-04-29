<script>
export default {
  name: 'customText',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hasToolTip: false
    };
  },
  updated() {
    this.updateToolTip();
  },
  methods: {
    updateToolTip() {
      this.hasToolTip =
        this.$refs['saveRef'].offsetWidth < this.$refs['saveRef'].scrollWidth;
    }
  },
  render() {
    const content = (
      <span
        class="content"
        id="saveRef"
        ref="saveRef"
        onMouseover={this.updateToolTip}
      >
        {this.$slots.default}
      </span>
    );
    const text =
      this.$slots.default[0].text ||
      this.$slots.default[0].children[0].text ||
      this.text;
    return this.hasToolTip ? (
      <el-tooltip
        content={text}
        class="item"
        effect="dark"
        placement="top-start"
      >
        {content}
      </el-tooltip>
    ) : (
      content
    );
  }
};
</script>

<style lang="scss" scoped>
.content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  cursor: pointer;
}
</style>
