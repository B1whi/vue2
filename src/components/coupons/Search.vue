<template>
  <div>
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
          placeholder="可输入优惠券名称"
        ></Input>
      </FormItem>

      <FormItem label="类型" prop="city">
        <Select v-model="formValidate.city" placeholder="请选择">
          <Option value="00">指定会员</Option>
          <Option value="01">批量生成</Option>
          <Option value="02">主动领取</Option>
          <Option value="03">营销赠送</Option>
        </Select>
      </FormItem>
      <FormItem label="状态" prop="status">
        <Select v-model="formValidate.status" placeholder="请选择">
          <Option value="00">启用</Option>
          <Option value="01">禁用</Option>
        </Select>
      </FormItem>
      <FormItem label="筛选有效" prop="effective">
        <Select v-model="formValidate.effective" placeholder="请选择">
          <Option value="00">正常</Option>
          <Option value="01">作废</Option>
        </Select>
      </FormItem>

       <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      formValidate: {
        name: "",
        city: "",
        status:"",
        effective:''
      },
      ruleValidate: {
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
            message: "请选择相应的类型",
            trigger: "change",
          },
        ],
        status: [
          {
            required: true,
            message: "请选择状态",
            trigger: "change",
          },
        ],
        effective: [
          {
            required: true,
            message: "请选择是否有效",
            trigger: "change",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
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