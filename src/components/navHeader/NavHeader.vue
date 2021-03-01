<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem class="img te-cer" name="1">
        <img style="height: 50px" src="../../assets/all.png" />
      </MenuItem>
      <MenuItem name="1">
        <Icon type="ios-home" />
        首页
      </MenuItem>
      <MenuItem name="2">
        <Icon type="md-cart" />
        商品
      </MenuItem>
      <MenuItem name="3">
        <Icon type="ios-clipboard" />
        订单
      </MenuItem>
      <MenuItem name="4">
        <Icon type="ios-basket" />
        营销
      </MenuItem>
      <MenuItem name="5">
        <Icon type="md-people" />
        会员
      </MenuItem>
      <MenuItem name="6">
        <Icon type="logo-usd" />
        财务
      </MenuItem>
      <MenuItem name="7"
        ><Icon type="md-analytics" />
        数据
      </MenuItem>
      <MenuItem name="8">
        <Icon type="md-card" />
        店铺
      </MenuItem>
      <MenuItem name="9">
        <Icon type="ios-construct" />
        设置
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.img {
  width: 200px;
}
</style>