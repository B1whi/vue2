<template>
  <div class="box">
    <!-- 顶部表单 -->
    <div class="top">
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
        inline
        style="background: #fff"
      >
        <FormItem label="名称" prop="name">
          <Input
            v-model.trim="formValidate.name"
            placeholder="可输入促销名称"
          ></Input>
        </FormItem>

        <FormItem label="编号" prop="number">
          <Input
            v-model.trim.trim="formValidate.number"
            placeholder="输入商品编号"
            type="number"
          ></Input>
        </FormItem>

        <FormItem label="Date">
          <Row>
            <Col span="11">
              <FormItem prop="date">
                <DatePicker
                  type="date"
                  placeholder="促销开始日期"
                  v-model.trim="formValidate.date"
                ></DatePicker>
              </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="状态" prop="status">
          <Select v-model.trim="formValidate.status" placeholder="请选择">
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
            icon="ios-git-compare"
            >重置</Button
          >
        </FormItem>
      </Form>
    </div>
    <!-- 中间按钮 -->
    <div class="btn">
      <div>
        <Button type="default" icon="ios-add" @click="modal1 = true"
          >新增促销</Button
        >
        <Button type="default" style="margin-left: 20px" icon="ios-checkmark"
          >启用</Button
        >
        <Button type="default" icon="ios-close">禁用</Button>
        <Button
          type="default"
          style="margin-left: 20px"
          icon="ios-trash"
          @click="Delete"
          >删除</Button
        >
      </div>
      <div>
        <Button
          icon="ios-tennisball-outline"
          style="margin-right: 20px"
        ></Button>
      </div>
    </div>
    <!-- 表格 -->
    <div class="table">
      <Table
        border
        :columns="columns12"
        :data="data"
        @on-selection-change="selectChange"
      >
        <template slot-scope="{ row }" slot="status">
          <div v-if="row.status === '01'"><Tag color="red">禁用</Tag></div>
          <div v-if="row.status === '00'"><Tag color="green">启用</Tag></div>
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

    <!-- 分页 -->
    <div class="paging">
      <template>
        <Page
          :total="Number(total)"
          show-total
          size="small"
          show-elevator
          show-sizer
        />
      </template>
    </div>

    <!-- modal框里面的表单 -->
    <Modal v-model.trim="modal1" title="新增促销" footer-hide width="500">
      <Form
        ref="formValidate1"
        :model="formValidate1"
        :rules="ruleValidate1"
        :label-width="80"
      >
        <FormItem label="名称" prop="name">
          <Input
            v-model.trim="formValidate1.name"
            placeholder="输入促销名称"
          ></Input>
        </FormItem>
        <FormItem label="编号" prop="number">
          <Input
            v-model.trim="formValidate1.number"
            placeholder="输入编号"
            type="number"
            :max="10"
          ></Input>
        </FormItem>

        <FormItem label="日期">
          <Row>
            <Col span="11">
              <FormItem prop="date">
                <DatePicker
                  type="date"
                  placeholder="选择日期"
                  v-model.trim="formValidate1.date"
                ></DatePicker>
              </FormItem>
            </Col>
          </Row>
        </FormItem>

        <FormItem label="状态" prop="status">
          <Select v-model.trim="formValidate1.status" placeholder="选择状态">
            <Option value="00">启用</Option>
            <Option value="01">禁用</Option>
          </Select>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="handleSubmit1('formValidate1')"
            >确认</Button
          >
          <Button
            @click="handleReset1('formValidate1')"
            style="margin-left: 8px"
            >重置</Button
          >
        </FormItem>
      </Form>
    </Modal>

    <!-- 点击删除弹出的modal框 -->
    <Modal v-model="modal2" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>你确定要删除已选择的选项吗？</span>
      </p>
      <div style="text-align: center">
        <p>点击删除后数据将不会再恢复，请慎重。</p>
        <p>确定删除请点击下方的删除按钮</p>
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

    <!-- 点击表格内部的编辑按钮 -->
    <Modal v-model="modal6" title="编辑促销" :loading="loading1" @on-ok="asyncOK">
      
    </Modal>
  </div>
</template>


<script>
import api from "../../http/api";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  data() {
    return {
      modal_loading: false,
      modal2: false,
      formValidate1: {
        name: "",
        number: "",
        date: "",
        status: "",
      },
      ruleValidate1: {
        name: [
          {
            required: true,
            message: "名称不能为空",
            trigger: "blur",
          },
        ],

        number: [
          {
            required: true,
            message: "编号不能为空",
            trigger: "blur",
          },
        ],

        status: [
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
            message: "请选择日期",
            trigger: "change",
          },
        ],
      },

      // #### =============================================================
      modal1: false,
      columns12: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "编号",
          key: "number",
          width: 100,
          align: "center",
          sortable: true,
        },
        {
          title: "名称",
          key: "name",
        },
        {
          title: "促销日期",
          key: "time",
          sortable: true,
        },
        {
          title: "状态",
          slot: "status",
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

      formValidate: {
        name: "",
        city: "",
        date: "",
        time: "",
        status: "",
        number: "",
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "名称不能为空",
            trigger: "blur",
          },
        ],
        number: [
          {
            required: true,
            message: "编号不能为空",
            trigger: "blur",
            min: 0,
          },
        ],
        city: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        status: [
          {
            required: true,
            message: "还未选择状态",
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
      data: [],
      total: "",
      arr: [],
      modal6: false,
      loading1: true,
    };
  },
  components: {},
  methods: {
    // 点击顶部的查询按钮 =============================================================
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    // 点击顶部的重置按钮 =============================================================
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    // 点击表格内部的编辑按钮 =============================================================
    show(row, index) {
      console.log(row, index);
      this.modal6 = true;
    },
    asyncOK() {
      setTimeout(() => {
        this.modal6 = false;
      }, 2000);
    },
    // 点击表格内部删除按钮 =============================================================
    remove(row, index) {
      console.log(row, index);
    },
    // 获取表格数据 =============================================================
    getData() {
      api
        .getOrder()
        .then((res) => {
          if (res.code === 200) {
            this.data = res.data;
            this.total = res.total;
            this.data.map((item) => {
              // console.log(item.startDate);
              item.time = dayjs(Number(item.startDate)).format(
                "YYYY-MM-DD  HH:mm:ss"
              );
              // console.log(item.time);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //表格选项发生变化 =============================================================
    selectChange(selection) {
      this.arr = selection;
      console.log(this.arr);
    },

    //新增促销modal框中的确认按钮=======================================================
    handleSubmit1(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // console.log(this.formValidate1.date);
          // 时间转换为时间戳=============================================================
          let date = new Date(this.formValidate1.date);
          //  console.log(date.getTime(date));
          api
            .addPromotion({
              name: this.formValidate1.name,
              number: this.formValidate1.number,
              status: this.formValidate1.status,
              startDate: date.getTime(date),
            })
            .then((res) => {
              if (res.code === 200) {
                this.getData();
                this.$Message.success(res.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.$Message.error("Fail!");
        }
      });
    },

    //新增促销modal框中的重置按钮=======================================================
    handleReset1(name) {
      this.$refs[name].resetFields();
    },

    // 点击屏幕上的删除按钮 =============================================================
    Delete() {
      if (this.arr.length === 0) {
        this.$Message.info("您还未选择要删除的选项，请选择");
      } else {
        this.modal2 = true;
      }
    },

    del() {
      this.modal_loading = true;

      this.arr.map((item) => {
        api
          .deleteOrder({ _id: item._id })
          .then((res) => {
            if (res.code === 200) {
              this.modal_loading = false;
              this.modal2 = false;
              this.$Message.success(res.msg);
              this.getData();
            } else {
              this.$Message.error(res.msg);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
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
.box {
  padding-left: 30px;
  overflow: hidden;
}
.top {
  position: fixed;
  z-index: 50;
  border-bottom: 1px solid #cfd7e5;
  display: flex;
}
.btn {
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
}
.paging {
  position: fixed;
  bottom: 0;
  z-index: 5000;
  background-color: white;
  height: 50px;
  width: 100%;
}
.table {
  margin-bottom: 60px;
}
</style>