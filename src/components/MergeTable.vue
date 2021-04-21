<script>
import { forEach } from 'lodash';
export default {
  name: 'mergeTable',
  props: {
    tableData: {
      type: Array,
      default: () => [
        {
          month: 'January',
          frontEnd: 'Express',
          backEnd: 'Express',
          savings: '$100'
        },
        {
          month: 'February',
          frontEnd: 'Vue',
          backEnd: 'Java',
          savings: '$200'
        },
        { month: 'March', frontEnd: 'React', backEnd: 'Koa', savings: '$200' },
        { month: 'April', frontEnd: 'React', backEnd: 'Egg', savings: '$200' }
      ]
    },
    columns: {
      type: Array,
      default: () => [
        {
          prop: 'month',
          label: 'Month',
          align: 'center'
        },
        {
          prop: 'frontEnd',
          label: 'Front-end',
          align: 'center'
        },
        {
          prop: 'backEnd',
          label: 'Back-end',
          align: 'center'
        },
        {
          prop: 'savings',
          label: 'Savings',
          align: 'center'
        }
      ]
    }
  },
  data() {
    return {
      rowSpanInst: {}, // 记录每一列的合并信息
      rowPos: {}, // 记录每一列的位置，如果前后两项不合并在位置后移
      colSpanInst: [], // 记录每一行的合并信息
      colPos: [] // 记录每一行的位置，如果前后两项不合并在位置后移
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const self = this;
      forEach(this.columns, item => {
        self.getRowSpanArr(item.prop);
      });
      this.getColSpanArr();
    },
    // 比较每一列的前后两项
    getRowSpanArr(columnName) {
      const Len = this.tableData.length;
      // 初始化当前列存储数据
      if (this.rowSpanInst[columnName] == null) {
        this.rowSpanInst[columnName] = [];
      }
      // 初始化当前列锚点为0
      if (this.rowPos[columnName] == null) {
        this.rowPos[columnName] = 0;
      }
      for (let i = 0; i < Len; i++) {
        if (i === 0) {
          this.rowSpanInst[columnName].push(1);
        } else {
          const array1 = this.tableData[i - 1];
          const array2 = this.tableData[i];
          // 判断当前元素与上一个元素是否相同
          if (
            array1[columnName] &&
            array2[columnName] &&
            array1[columnName] === array2[columnName]
          ) {
            this.rowSpanInst[columnName][this.rowPos[columnName]] += 1;
            this.rowSpanInst[columnName].push(0);
          } else {
            this.rowSpanInst[columnName].push(1);
            this.rowPos[columnName] = i;
          }
        }
      }
    },
    // 比较每一行中的列
    getColSpanArr() {
      const Len = this.tableData.length;
      const columnsArray = this.columns.map(item => item.prop);
      for (let i = 0; i < Len; i++) {
        // 初始化当前行存储数据
        if (this.colSpanInst[i] == null) {
          this.colSpanInst[i] = {};
        }
        // 初始化当前列锚点为当前列名
        if (this.colPos[i] == null) {
          this.colPos[i] = columnsArray[i];
        }
        // 当前行数据
        const currentRow = this.tableData[i];
        // 从第二列开始逐个和前一列进行比较
        for (let j = 0; j < columnsArray.length; j++) {
          if (j === 0) {
            this.colSpanInst[i][columnsArray[j]] = 1;
          } else {
            const array1 = currentRow[columnsArray[j - 1]];
            const array2 = currentRow[columnsArray[j]];
            // 判断当前元素与上一个元素是否相同
            // NOTE: 解决行列单元格同时合并同一个单元格问题，加入行已经经过合并，则列不进行合并
            if (array1 && array2 && array1 === array2) {
              this.colSpanInst[i][this.colPos[i]] += 1;
              this.colSpanInst[i][columnsArray[j]] = 0;
            } else {
              this.colSpanInst[i][columnsArray[j]] = 1;
              this.colPos[i] = columnsArray[j];
            }
          }
        }
      }
    }
  },
  render(h) {
    return (
      <table class="raw-table">
        <thead>
          <tr>
            {this.columns.map(column => (
              <th>{column.label}</th>
            ))}
          </tr>
        </thead>
        {this.tableData.map((data, index) => {
          return (
            <tr key={data.prop}>
              {this.columns.map(column => {
                return (
                  <td
                    style={{
                      'text-align': column.align || 'center',
                      'vertical-align': 'middle'
                    }}
                    rowspan={this.rowSpanInst[column.prop][index]}
                    colspan={this.colSpanInst[index][column.prop]}
                    class={{
                      hide:
                        this.rowSpanInst[column.prop][index] === 0 ||
                        this.colSpanInst[index][column.prop] === 0
                    }}
                  >
                    {column.render
                      ? column.render(h, { row: data })
                      : data[column.prop]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    );
  }
};
</script>


<style scoped>
.hide {
  display: none;
}
.raw-table {
  width: 100%;
  margin-bottom: 10px;
  table-layout: fixed;
  border: 1px solid #dee2e6;
  border-bottom: none;
  border-spacing: 0;
}

td,
th {
  color: #333;
  font-size: 14px;
  word-wrap: break-word;
  padding: 12px;
  vertical-align: middle;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #dee2e6;
}
</style>
