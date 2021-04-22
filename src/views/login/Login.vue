<template>
  <div class="box">
    <Form class="card" ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem class="te-cer">
        <img src="../../assets/logo.png" />
      </FormItem>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          v-model="formInline.password"
          placeholder="Password"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button class="btn" type="primary" @click="handleSubmit('formInline')"
          >登111录</Button
        >
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
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "密码不得少于6位",
            trigger: "blur",
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
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  position: relative;
  background-image: url(../../assets/login.jpg);
}
.card {
  position: absolute;
  left: 50%;
  margin-left: -200px;
  margin-top: 160px;
  padding: 20px;
  width: 400px;
  height: 400px;
  background-color: #726D80;
}
.btn {
  width: 360px;
}
</style>