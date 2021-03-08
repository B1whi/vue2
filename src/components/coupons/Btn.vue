<template>
  <div>
    <div class="box">
      <div>
        <Button icon="ios-add" class="mar" @click="modal1 = true"
          >新增优惠券</Button
        >
        <Button icon="ios-checkmark">启用</Button>
        <Button icon="ios-close" class="mar">禁用</Button>
        <Button icon="ios-checkmark-circle-outline">正常</Button>
        <Button icon="ios-close-circle-outline" class="mar">作废</Button>
        <Button icon="ios-trash" @click="del">删除</Button>
      </div>
      <div>
        <Button
          icon="ios-tennisball-outline"
          style="margin-right: 20px"
        ></Button>
      </div>
    </div>

    <!-- 点击新增按钮弹出的modal框 -->
    <Modal footer-hide width="700px" v-model="modal1" title="新增优惠券">
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
        inline
      >
        <FormItem label="名称" prop="name">
          <Input
            v-model="formValidate.name"
            placeholder="请输入优惠券名称"
          ></Input>
        </FormItem>

        <FormItem label="类型" prop="category">
          <Select v-model="formValidate.category" placeholder="请选择">
            <Option value="00">指定会员</Option>
            <Option value="01">批量生成</Option>
            <Option value="02">主动领取</Option>
            <Option value="03">营销赠送</Option>
          </Select>
        </FormItem>

        <FormItem label="发放数" prop="issueNumber">
          <Input
            v-model="formValidate.issueNumber"
            placeholder="请输入发放数"
            type="number"
          ></Input>
        </FormItem>

        <FormItem label="优惠金额" prop="discountAmount">
          <Input
            v-model="formValidate.discountAmount"
            placeholder="请输入优惠金额"
            type="number"
          ></Input>
        </FormItem>

        <FormItem label="使用门槛" prop="threshold">
          <Input
            v-model="formValidate.threshold"
            placeholder="请输入使用门槛"
          ></Input>
        </FormItem>

        <FormItem label="状态" prop="status">
          <Select v-model="formValidate.status" placeholder="请选择">
            <Option value="00">启用</Option>
            <Option value="01">禁用</Option>
          </Select>
        </FormItem>
        <FormItem label="是否有效" prop="effective">
          <Select v-model="formValidate.effective" placeholder="请选择">
            <Option value="00">正常</Option>
            <Option value="01">作废</Option>
          </Select>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')"
            >确认</Button
          >
          <Button @click="handleReset('formValidate')" style="margin-left: 8px"
            >重置</Button
          >
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import api from "../../http/api";
export default {
  name: "",
  props: {},
  data() {
    return {
      // 隐藏新增优惠券modal框 =============================================================
      modal1: false,
      // 新增优惠券modal框 =============================================================
      formValidate: {
        name: "",
        category: "",
        issueNumber: "",
        discountAmount: "",
        threshold: "",
        status: "",
        effective: "",
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "名称不能为空",
            trigger: "blur",
          },
        ],

        issueNumber: [
          {
            required: true,
            message: "优惠金额不能为空",
            trigger: "blur",
          },
        ],

        discountAmount: [
          {
            required: true,
            message: "使用门槛不能为空",
            trigger: "blur",
          },
        ],

        threshold: [
          {
            required: true,
            message: "发放数不能为空",
            trigger: "blur",
          },
        ],

        category: [
          {
            required: true,
            message: "至少选择一项",
            trigger: "change",
          },
        ],

        status: [
          {
            required: true,
            message: "至少选择一项",
            trigger: "change",
          },
        ],

        effective: [
          {
            required: true,
            message: "至少选择一项",
            trigger: "change",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    // 新增优惠券modal框中的按钮 =============================================================
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          api
            .addCoupons({
              name: this.formValidate.name,
              category: this.formValidate.category,
              issueNumber: this.formValidate.issueNumber,
              discountAmount: this.formValidate.discountAmount,
              threshold: this.formValidate.threshold,
              status: this.formValidate.status,
              effective: this.formValidate.effective,
            })
            .then((res) => {
              if (res.code === 200) {
                this.$Message.success(res.msg);
                this.$parent.getData();
                this.modal1 = false;
                this.$refs[name].resetFields();
              } else {
                this.$Message.error(res.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
          //
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    // 点击删除按钮 =============================================================
    del(){
      console.log(1111);
    }
  },
  mounted() {},
  computed: {},
  watch: {},
  filters: {},
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
  justify-content: space-between;
}
</style>