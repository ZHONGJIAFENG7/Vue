<template>
  <custom-table
    :data="data"
    :columns="columns"
  >
  </custom-table>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          prop: 'name',
          label: '姓名',
          children: [
            {
              prop: 'age',
              label: '年龄',
              render: (h, { row }) => {
                return <span>{row.age + 10}</span>;
              }
            },
            {
              prop: 'address',
              label: '地址'
            }
          ]
        },
        {
          prop: 'profession',
          label: '职位',
          render: (h, { row }) => {
            return <span>{row.profession}</span>;
          }
        }
      ],
      data: [
        {
          age: 1,
          address: 2,
          profession:
            '3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd3asdadaddsadadasd'
        }
      ]
    };
  }
};
</script>
