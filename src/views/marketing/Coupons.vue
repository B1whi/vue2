<template>
  <div style="overflow: hidden">
    <!-- 顶部搜索表单 -->
    <div class="top"><search></search></div>
    <!-- 按钮 -->
    <div class="btn"><butt></butt></div>
    <!-- 表格 -->
    <div><tables :tableData="tableData" v-if="tableData.length>0"></tables></div>
  </div>
</template>

<script>
import search from "../../components/coupons/Search";
import butt from "../../components/coupons/Btn";
import tables from "../../components/coupons/Tables";
import api from "../../http/api"
export default {
  name: "",
  props: {},
  data() {
    return {
      // 表格数据 =============================================================
      tableData:[],
    };
  },
  components: { search, butt,tables},
  methods: {
    getData() {
      api.coupons().then(res=>{
      if(res.code===200){
        this.tableData = res.data
        console.log(this.data);
        console.log(res);
      }
    }).catch(err=>{
      console.log(err);
    })
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {},
  filters: {},
};
</script>

<style lang='scss' scoped>
.top {
  position: fixed;
  border-bottom: 1px solid #cfd7e5;
  background:#fff;
  z-index: 500;
}
.btn {
  margin-top: 60px;
}
</style>