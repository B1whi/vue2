<template>
  <div class="box">
    <div class="new te-cer">新增商品</div>
    <Tabs value="name1">
      <TabPane label="基础设置" name="name1">
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="80"
        >
          <FormItem label="名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入商品名称" />
          </FormItem>
          <FormItem label="短名称" prop="shortname">
            <Input
              v-model="formValidate.shortname"
              placeholder="可输入商品短名称，适用于移动端显示"
            />
          </FormItem>
          <FormItem label="促销语" prop="salesPromotion">
            <Input
              v-model="formValidate.salesPromotion"
              placeholder="可输入商品促销语"
            />
          </FormItem>
          <FormItem label="分类" prop="sort">
            <Select v-model="formValidate.sort" placeholder="请选择商品分类">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          <FormItem label="品牌" prop="brand">
            <Select
              class="hex"
              v-model="formValidate.brand"
              placeholder="可选择商品品牌"
            >
              <Option value="beijing"> 长虹</Option>
              <Option value="shanghai">德光</Option>
              <Option value="shenzhen">电信</Option>
            </Select>
          </FormItem>
          <FormItem label="货号" prop="artNo">
            <Input
              v-model="formValidate.artNo"
              placeholder="可输入货号，为空系统将自动生成"
            />
          </FormItem>
          <FormItem label="SPU" prop="SPU">
            <Input v-model="formValidate.SPU" placeholder="可输入商品SPU" />
          </FormItem>
          <FormItem label="SKU" prop="SKU">
            <Input v-model="formValidate.SKU" placeholder="可输入商品SKU" />
          </FormItem>
          <FormItem label="条码" prop="barcode">
            <Input v-model="formValidate.barcode" placeholder="可输入条码" />
          </FormItem>
          <FormItem label="计量单位" prop="measurement">
            <Input
              v-model="formValidate.measurement"
              placeholder="可输入计量单位，例如：件，个"
            />
          </FormItem>
          <FormItem label="计量方式" prop="mode">
            <RadioGroup v-model="formValidate.mode">
              <Radio label="1">重量</Radio>
              <Radio label="2">计件</Radio>
              <Radio label="3">体积</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="商品计量" prop="metering">
            <Input class="hex" v-model="formValidate.metering" type="number" />
          </FormItem>
          <FormItem label="实际库存" prop="stock">
            <Input class="hex" v-model="formValidate.stock" type="number" />
          </FormItem>
          <FormItem label="排序值" prop="sortvalue">
            <Input class="hex" v-model="formValidate.sortvalue" type="number" />
          </FormItem>
          <FormItem label="上架状态" prop="onshelfstatus">
            <RadioGroup v-model="formValidate.onshelfstatus">
              <Radio label="0">出售中</Radio>
              <Radio label="1">已下架</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="是否推荐" prop="recommend">
            <RadioGroup v-model="formValidate.recommend">
              <Radio label="0">是</Radio>
              <Radio label="1">否</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="是否新品" prop="new">
            <RadioGroup v-model="formValidate.new">
              <Radio label="0">是</Radio>
              <Radio label="1">否</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="是否热卖" prop="hot">
            <RadioGroup v-model="formValidate.hot">
              <Radio label="0">是</Radio>
              <Radio label="1">否</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="市场价" prop="marketvalue">
            <Input
              class="hex"
              v-model="formValidate.marketvalue"
              type="number"
            />
          </FormItem>
          <FormItem label="本店价" prop="ourprice">
            <Input class="hex" v-model="formValidate.ourprice" type="number" />
          </FormItem>
          <FormItem label="最少起订" prop="minimumorder">
            <Input
              class="hex"
              v-model="formValidate.minimumorder"
              type="number"
            />
          </FormItem>
          <FormItem label="限购数量" prop="quota">
            <Input class="hex" v-model="formValidate.quota" type="number" />
          </FormItem>
          <FormItem label="是否包邮" prop="freeshipping">
            <RadioGroup v-model="formValidate.freeshipping">
              <Radio label="0">是</Radio>
              <Radio label="1">否</Radio>
            </RadioGroup>
          </FormItem>
        </Form>
      </TabPane>
      <TabPane label="规格属性" name="name2">标签二的内容</TabPane>
      <TabPane label="媒体设置" name="name3">标签三的内容</TabPane>
      <TabPane label="商品详情" name="name4">标签三的内容</TabPane>
      <TabPane label="积分结算" name="name5">标签三的内容</TabPane>
    </Tabs>
    <div style="height:60px"></div>
    <div class="btn">
      <div class="dex">
        <Button type="primary">确定</Button>
        <Button style="margin-left: 20px">取消</Button>
      </div>
    </div>
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
        shortname: "",
        salesPromotion: "",
        sort: "",
        brand: "",
        artNo: "",
        SPU: "",
        SKU: "",
        barcode: "",
        measurement: "",
        mode: "",
        metering: "",
        stock: "",
        sortvalue: "",
        onshelfstatus: "",
        recommend: "",
        new: "",
        hot: "",
        marketvalue: "",
        ourprice: "",
        minimumorder: "",
        quota: "",
        freeshipping: "",
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "名称不能为空",
            trigger: "blur",
          },
        ],
        sort: [
          {
            required: true,
            message: "分类不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  border: 1px solid #cfd7e5;
  position: relative;
  padding: 20px;
  height: 100%;
}
.new {
  height: 30px;
  width: 100%;
  font-size: 16px;
  border-bottom: 1px solid #cfd7e5;
  line-height: 30px;
}
.hex {
  width: 250px;
}
.btn {
  width: 100%;
  height: 60px;
  background-color: #fff;
  line-height: 60px;
  border-top: 1px solid #cfd7e5;
  position: fixed;
  left: 0;
  bottom: 0;
}
.dex {
  position: absolute;
  left: 220px;
}
</style>