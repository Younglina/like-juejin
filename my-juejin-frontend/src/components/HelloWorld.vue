<style>
.table-expand {
  font-size: 0;
}

.table-expand label {
  width: 90px;
  color: #99a9bf;
}

.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.table-expand .el-form-item:last-child {
  width: 100%;
}

.el-table .cell {
  white-space: nowrap !important;
}

.dataCharts {
  height: 500px;
  overflow-y: auto;
}
</style>

<template>
  <div class="hello">
    <el-table :data="dataList" border show-overflow-tooltip>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="标题">
              <span>
                <a :href="props.row.originalUrl">{{ props.row.title }}</a>
              </span>
            </el-form-item>
            <el-form-item label="包含标签">
              <span>{{ props.row.tags }}</span>
            </el-form-item>
            <el-form-item label="预览">
              <span>{{ props.row.summaryInfo }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="title" width="200" label="标题"></el-table-column>
      <el-table-column prop="username" label="作者名"></el-table-column>
      <el-table-column prop="viewsCount" label="阅读数"></el-table-column>
      <el-table-column prop="collectionCount" label="点赞数"></el-table-column>
      <el-table-column prop="commentsCount" label="评论数"></el-table-column>
      <el-table-column prop="createdAt" label="创建日期"></el-table-column>
    </el-table>
    <div style="text-align: center;">
      <el-pagination
        @current-change="changePageSkip"
        :current-page="currentPage"
        :total="100"
        layout="prev, pager, next"
        background
      ></el-pagination>
    </div>
    <div class="dataCharts">
      <ve-bar height="1800px" :data="juejin_tags" :settings="chartSettings" :extend="extendff"></ve-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      juejin_tags: {
        columns: ["name", "nums"]
      },
      dataList: [],
      chartSettings: {},
      extendff: {},
      currentPage: 1
    };
  },
  methods: {
    changePageSkip(val) {
      console.log(val);
      
      this.currentPage = val;
      this.fetchData();
    },
    fetchData(first) {
      this.axios({
        url: "/getJuejin",
        params: {
          offset: this.currentPage-1,
          first: first,
          category: 2
        },
        method: "get"
      }).then(res => {
        this.dataList = res.data.result.list;
        first && (this.juejin_tags["rows"] = res.data.result.rank)
      });
    },
    paintCharts() {
      this.chartSettings = {
        metrics: ["nums"],
        dataOrder: {
          label: "nums",
          order: "desc"
        },
        labelMap: {
          nums: "出现次数"
        },
        legendName: {
          nums: "出现次数"
        },
        opacity: 1
      };
      this.extendff = {
        series: {
          label: {
            show: true,
            position: "right"
          }
        }
      };
    }
  },
  mounted() {
    // this.axios.get('fetchJuejin');
    this.fetchData("first");
    this.$nextTick(()=>{
      this.paintCharts();
    })
  }
};
</script>

<style scoped lang="scss">
</style>
