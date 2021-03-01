<template>
  <div class="box">
    <div class="head">
      <nav-header></nav-header>
    </div>
    <div class="card">
      <div class="mid">
        <router-view></router-view>
      </div>
    </div>
    <div class="left">
      <nav-lefter></nav-lefter>
    </div>
  </div>
</template>

<script>
import NavHeader from "../../components/navHeader/NavHeader.vue";
import NavLefter from "../../components/navLefter/NavLefter.vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: { NavLefter, NavHeader },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
}
.head{
  position: fixed;
  width: 100%;
  z-index: 100;
}
.card{
  padding: 20px;
}
.mid {
  position: absolute;
  top: 110px;
  left: 220px;
  width: 1300px;
}
.left {
 position: fixed;
 top: 60px;
 left: 0;
}
</style>