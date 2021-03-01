<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src=item.image>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
//之所以用index.js 封装 是因为我们不需要导出多个组件
import {Swiper,SwiperItem} from 'components/common/swiper/'
export default {
  name: "HomeSwiper",

  //父子组件通信 这样才能拿到banners的数据
  props: {
    banners: {
      type: Array,
      //默认返回值必须是一个函数
      default() {
        return [];
      }
    }

  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
