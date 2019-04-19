<template>
  <div>
    <mt-header title="信息管理系统"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/home.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/img/huangguan-VIP.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="./assets/img/gouwuche.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/fangdajing.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected (newV, oldV) {
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>
<style>
</style>
