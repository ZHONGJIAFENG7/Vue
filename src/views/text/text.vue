<template>
  <table border="1">
    <thead>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>January</td>
        <td>
          <custom-text>
            hello, world!hello, world!hello, world!hello, world!hello, world!
          </custom-text>
        </td>
      </tr>
      <tr>
        <td>January</td>
        <td>
          <custom-text>
            hello, world
          </custom-text>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import CustomText from '../../components/Text/CustomText.vue';
export default {
  components: { CustomText }
};
</script>

<style lang="scss" scoped>
table {
  // width: 100%;
  // table-layout: fixed;
  border-spacing: 0;
}
tbody {
  td {
    width: 20px;
  }
}
</style>
