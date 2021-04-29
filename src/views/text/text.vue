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
            hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!
          </custom-text>
        </td>
      </tr>
      <tr>
        <td>Feburary</td>
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
export default {};
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  font-size: 16px;
  text-align: center;
  table-layout: fixed;

  thead,
  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  tbody {
    overflow-x: hidden;
    td {
      text-align: center;
      background: rgba(43, 104, 212, 0.15);
      width: 150px;
      font-size: 16px;
    }
  }
}
</style>
