<template>
  <div>
    <Table
      border
      :columns="columns12"
      :data="tableData"
      @on-selection-change="change"
    >
      <template slot-scope="{ row }" slot="category">
        <div v-if="row.category === '00'">指定会员</div>
        <div v-if="row.category === '01'">批量生成</div>
        <div v-if="row.category === '02'">主动领取</div>
        <div v-if="row.category === '03'">营销赠送</div>
      </template>

      <template slot-scope="{ row }" slot="status">
        <div v-if="row.status === '00'"><Tag color="green">启用</Tag></div>
        <div v-if="row.status === '01'"><Tag color="red">禁用</Tag></div>
      </template>

      <template slot-scope="{ row }" slot="effective">
        <div v-if="row.effective === '00'"><Tag color="green">正常</Tag></div>
        <div v-if="row.effective === '01'"><Tag color="red">作废</Tag></div>
      </template>

      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(row, index)"
          >编辑</Button
        >
        <Button type="error" size="small" @click="remove(row, index)"
          >删除</Button
        >
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      columns12: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "名称",
          key: "name",
          align: "center",
        },
        {
          title: "类型",
          slot: "category",
          width: 150,
          align: "center",
        },
        {
          title: "发放数",
          key: "issueNumber",
          align: "center",
        },
        {
          title: "优惠金额",
          key: "discountAmount",
          align: "center",
        },
        {
          title: "使用门槛",
          key: "threshold",
          align: "center",
        },
        {
          title: "状态",
          slot: "status",
          width: 150,
          align: "center",
        },
        {
          title: "是否有效",
          slot: "effective",
          width: 150,
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
    };
  },
  components: {},
  methods: {
    //表格尾部编辑按钮===========================================
    show(row, index) {
      console.log(row, index);
    },
    //表格尾部删除按钮===========================================
    remove(row, index) {
      console.log(row, index);
    },
    //表格前面选择框===============================================
    change(selection) {
      console.log(selection);
      this.$store.commit("change", selection);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
  filters: {},
};
</script>

<style lang='scss' scoped>
</style>