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

      <FormItem label="方式" prop="status">
        <Select v-model="formValidate.status" placeholder="请选择">
          <Option value="00">启用</Option>
          <Option value="01">禁用</Option>
        </Select>
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
        <Button icon="ios-add" style="margin-right: 20px" @click="modal1 = true"
          >新增折扣</Button
        >
        <Button icon="md-checkmark">启用</Button>
        <Button icon="ios-close">禁用</Button>
        <Button icon="ios-trash" style="margin-left: 20px" @click="Delete"
          >删除</Button
        >
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
      <Table
        :loading="loading"
        :columns="columns1"
        stripe
        border
        :data="data"
        @on-select="select"
      >
      </Table>
    </div>

    <!-- 分页 -->

    <template>
      <Page
        :total="Number(total)"
        size="small"
        show-elevator
        show-sizer
        :page-size="30"
        show-total
      />
    </template>

    <!-- 点击新增折扣弹出的对话框 -->
    <Modal v-model="modal1" title="新增折扣" footer-hide>
      <Form
        ref="formValidate1"
        :model="formValidate1"
        :rules="ruleValidate1"
        :label-width="80"
      >
        <FormItem label="名称" prop="name">
          <Input
            v-model="formValidate1.name"
            placeholder="请输入折扣名称"
          ></Input>
        </FormItem>

        <FormItem label="开始日期">
          <Row>
            <Col span="11">
              <FormItem prop="date">
                <DatePicker
                  type="date"
                  placeholder="请选择折扣开始日期"
                  v-model="formValidate1.date"
                ></DatePicker>
              </FormItem>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <FormItem prop="time">
                <TimePicker
                  type="time"
                  placeholder="请选择折扣开始时间"
                  v-model="formValidate1.time"
                ></TimePicker>
              </FormItem>
            </Col>
          </Row>
        </FormItem>

        <FormItem label="折扣方式" prop="city">
          <Select v-model="formValidate1.city" placeholder="请选择">
            <Option value="打折">打折</Option>
            <Option value="减价">减价</Option>
            <Option value="固定价格">固定价格</Option>
            <Option value="送优惠券">送优惠券</Option>
          </Select>
        </FormItem>

        <FormItem label="方式" prop="status1">
          <Select v-model="formValidate1.status1" placeholder="请选择">
            <Option value="00">启用</Option>
            <Option value="01">禁用</Option>
          </Select>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="handleSubmit1('formValidate1')">{{
            sure
          }}</Button>
          <Button
            @click="handleReset1('formValidate1')"
            style="margin-left: 8px"
            >重置</Button
          >
        </FormItem>
      </Form>
    </Modal>

    <!-- 点击删除弹出的删除框 -->

    <Modal v-model="modal2" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>确定删除</span>
      </p>
      <div style="text-align: center">
        <p>此任务删除后将不能再恢复数据！！！</p>
        <p>倘若确定删除点击删除按钮</p>
      </div>
      <div slot="footer">
        <Button
          type="error"
          size="large"
          long
          :loading="modal_loading"
          @click="del"
          >删除</Button
        >
      </div>
    </Modal>
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
      sure: "确认",
      modal1: false,
      modal2: false,
      modal_loading: false,
      formValidate: {
        name: "",
        way: "",
        date: "",
        time: "",
        status: "",
      },

      formValidate1: {
        name: "",
        city: "",
        date: "",
        time: "",
        status1: "",
      },
      ruleValidate1: {
        name: [
          {
            required: true,
            message: "名称不能为空",
            trigger: "blur",
          },
        ],
        city: [
          {
            required: true,
            message: "请选择折扣方式",
            trigger: "change",
          },
        ],
        status1: [
          {
            required: true,
            message: "请选择状态",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change",
          },
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change",
          },
        ],
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
                      this.show(params.row);
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
                      this.remove(params.row);
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
      total: "",
      loading: true,
      arr: [],
    };
  },
  components: {},
  methods: {
    // 添加商品 =============================================================
    handleSubmit1(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          api
            .addTable({
              name: this.formValidate1.name,
              manner: this.formValidate1.city,
              startDate: this.formValidate1.date,
              status: this.formValidate1.status1,
            })
            .then((res) => {
              if (res.code === 200) {
                this.$Message.success(res.msg);
                this.getData();
              }
            })
            .catch((err) => {
              console.log(err);
            });
          this.modal1 = false;
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset1(name) {
      this.$refs[name].resetFields();
    },

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
            this.total = res.total;
            this.data = res.data;
            console.log(this.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 表格修改按钮 =============================================================
    show(row) {
      console.log(row);
    },
    // 表格删除按钮=============================================================
    remove(row) {
      console.log(row);
      api.delData({ _id: row._id }).then((res) => {
        console.log(res);
        this.getData();
      });
    },
    // 点击每一行前面的单选框 =============================================================
    select(row) {
      this.arr = row;
    },

    // 点击删除键====================================================================
    Delete() {
      if (this.arr.length === 0) {
        this.$Message.info("请选择要删除的选项");
      } else {
        this.modal2 = true;
      }
    },
    // 点击删除键弹出的modal框里面的删除键 =============================================================
    del() {
      this.arr.map((item) =>
        api
          .delData({ _id: item._id })
          .then((res) => {
            console.log(item._id), (this.modal_loading = false);
            this.modal2 = false;
            this.$Message.success("删除成功");
            this.getData();
          })
          .catch((err) => {
            console.log(err);
          })
      );
    },
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