<template>
  <div class="box">
    <div class="top" @click="handle"><Icon :type="data1.icon" />&nbsp;{{ data1.authname }}</div>
    <ul class="context" v-show="flag">
      <li v-for="item in data1.children" :key="item.id" @click="jump(item)">
        <div class="left"><Icon :type="item.icon" /></div>
        <div class="right">
          <div class="authname">{{ item.authname }}</div>
          <div class="describe">{{ item.describe }}</div>
        </div>
      </li>
    </ul>
    <div class="top"  @click="handle1"><Icon :type="data2.icon" />&nbsp;{{ data2.authname }}</div>
    <ul class="context" v-show="flag1">
      <li v-for="item in data2.children" :key="item.id" @click="jump(item)">
        <div class="left"><Icon :type="item.icon" /></div>
        <div class="right">
          <div class="authname">{{ item.authname }}</div>
          <div class="describe">{{ item.describe }}</div>
        </div>
      </li>
    </ul>
    <div class="top" @click="handle2"><Icon :type="data3.icon" />&nbsp;{{ data3.authname }}</div>
    <ul class="context" v-show="flag2">
      <li v-for="item in data3.children" :key="item.id" @click="jump(item)">
        <div class="left"><Icon :type="item.icon" /></div>
        <div class="right">
          <div class="authname">{{ item.authname }}</div>
          <div class="describe">{{ item.describe }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../http/api";
export default {
  name: "",
  props: {},
  data() {
    return {
      data1: "",
      data2: "",
      data3: "",
      flag:true,
      flag1:true,
      flag2:true,
    };
  },
  components: {},
  methods: {
      // 获取数据请求 ============================================================= 
    getData() {
      api
        .market()
        .then((res) => {
          if (res.code == 200) {
            this.data1 = res.data[0];
            this.data2 = res.data[1];
            this.data3 = res.data[2];
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 点击是否显示 =============================================================
     handle(){
         this.flag = !this.flag;
      },
     handle1(){
         this.flag1 = !this.flag1;
      },
     handle2(){
         this.flag2 = !this.flag2;
      },
      // 跳路由 =============================================================
      jump(item){
        this.$router.push(item.path)
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
.box {
  padding: 0 30px;
}
.top,
.context {
  width: 100%;
}
.top {
  height: 49px;
  font-size: 18px;
  line-height: 49px;
  border-top: 1px solid #ebeef5;
  cursor: pointer;
}
.context,
li {
  display: flex;
  border-bottom: 1px solid #ebeef5;
  cursor: pointer;
}
.context {
  height: 82px;
}
li {
  margin-right: 10px;
  height: 100%;
  width: 308px;
  background: #f5f7fa;
}
.left,
.right {
  height: 100%;
}
.left {
  height: 100%;
  width: 82px;
  font-size: 50px;
  line-height: 82px;
  text-align: center;
}
.right {
  flex: 1;
  padding-left: 10px;
}
.authname {
  font-size: 20px;
  font-weight: bold;
}
.describe {
  font-size: 18px;
  margin-top: 5px;
}
</style>