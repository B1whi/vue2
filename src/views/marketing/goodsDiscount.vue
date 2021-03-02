<template>
  <div class="container">
    <!-- 表单 -->
    <Form
      ref="formValidate"
      :model="formValidate"
      :label-width="40"
      inline
      class="box"
    >
      <!-- 名称 -->
      <FormItem label="名称" prop="name">
        <Input v-model="formValidate.name" placeholder="可输入折扣名称"></Input>
      </FormItem>
      <!-- 方式 -->
      <FormItem label="方式" prop="way">
        <Select v-model="formValidate.way" placeholder="请选择">
          <Option value="打折">打折</Option>
          <Option value="减价">减价</Option>
          <Option value="固定价格">固定价格</Option>
          <Option value="送优惠券">送优惠券</Option>
        </Select>
      </FormItem>
      <FormItem label="日期">
        <Row>
          <Col span="8">
            <FormItem prop="date">
              <DatePicker
                type="date"
                placeholder="折扣开始时期"
                v-model="formValidate.date"
              ></DatePicker>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem prop="time">
              <TimePicker
                type="time"
                placeholder="折扣开始时间"
                v-model="formValidate.time"
              ></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>

      <FormItem>
        <Row>
          <Col span="8">
            <FormItem prop="date">
              <DatePicker
                type="date"
                placeholder="折扣结束时期"
                v-model="formValidate.edddate"
              ></DatePicker>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem prop="time">
              <TimePicker
                type="time"
                placeholder="折扣结束时间"
                v-model="formValidate.eddtime"
              ></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>

      <FormItem>
        <Button
          type="primary"
          @click="handleSubmit('formValidate')"
          icon="ios-search"
          >查询</Button
        >
        <Button
          @click="handleReset('formValidate')"
          style="margin-left: 8px"
          icon="ios-crop-outline"
          >重置</Button
        >
      </FormItem>
    </Form>

    <!-- 按钮 -->
    <div class="center-button">
      <div>
        <Button icon="ios-add" style="margin-right: 20px">新增折扣</Button>
        <Button icon="md-checkmark">启用</Button>
        <Button icon="ios-close">禁用</Button>
        <Button icon="ios-trash" style="margin-left: 20px">删除</Button>
      </div>
      <div>
        <!-- <Icon type="ios-tennisball-outline" style="line-height:30px;"/> -->
        <Button
          icon="ios-tennisball-outline"
          style="margin-right: 20px"
        ></Button>
      </div>
    </div>

    <!-- 表格 -->
    <div>
      <Table :loading="loading" :columns="columns1" stripe border :data="data" > </Table>
    </div>

    <!-- 分页 -->

    <template>
      <Page :total=Number(total) size="small" show-elevator show-sizer :page-size=30 show-total on-change="change" />
    </template>
  </div>
</template>
  </div>
</template>

<script>
import api from "../../http/api";
export default {
  name: "goodsDiscount",
  props: {},
  data() {
    return {
      formValidate: {
        name: "",
        way: "",
        date: "",
        time: "",
        edddate: "",
        eddtime: "",
      },

      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        { title: "编号", type: "index", width: 80, align: "center" },
        {
          title: "名称",
          key: "name",
        },
        {
          title: "折扣方式",
          key: "manner",
        },
        {
          title: "折扣日期",
          key: "startDate",
          sortable: true,
        },
        {
          title: "状态",
          key: "status",
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    },
                  },
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    },
                  },
                },
                "删除"
              ),
            ]);
          },
        },
      ],
      data: [],
      total:'',
      loading: true
    };
  },
  components: {},
  methods: {
    // 点击查询 =============================================================
    handleSubmit(name) {
        // console.log(this.$refs[name]);
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
         
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    // 点击重置 =============================================================
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    // 获取表格数据 =============================================================
    getData() {
      api
        .table()
        .then((res) => {
          if (res.code === 200) {
            this.loading = false;
            console.log(res);
            this.total = res.total
            this.data = res.data;
            console.log(this.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    show(index) {
      
      console.log(index);
    },
    remove(index) {
      console.log(index);
    },

    change(){
      console.log(111);
    }
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {},
  filters: {},
};
</script>

<style lang='scss' scoped>
.container {
  position: relative;
  overflow: hidden;
}
.box {
  position: absolute;
  top: 0;
  z-index: 500;
  font-size: 14px;
  border-bottom: 1px solid #cfd7e5;
  background: #fff;
}
.center-button {
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
}
</style>