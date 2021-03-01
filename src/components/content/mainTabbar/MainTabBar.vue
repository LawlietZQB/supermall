<template>
  <tab-bar>
    <tab-bar-item path="/home" :active-color=UserColor>
<!--      这里必须加上～符号我们的路径才能生效 import不需要-->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="deeppink">
      <img slot="item-icon"  src="~assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="deeppink">
      <img slot="item-icon"  src="~assets/img/tabbar/cart.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="deeppink">
      <img slot="item-icon"  src="~assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
name: "MainTabBar",
components: {
  TabBar,
  TabBarItem
},
data() {
    return {
      UserColor : 'deeppink',//这里是请求的数据
    }
  }
}
</script>

<style scoped>

</style>
