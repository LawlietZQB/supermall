<template>
  <div class="homeRecommond">
    <div v-for="item in recommends" :key="item.title" class="itemRecommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommondView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>
<!--
 text-align : 调整文字位置
 flex : 1 ==>均匀分布
 padding : 设置 p 元素的 4 个内边距 上 右 下 左
 border-bottom(border-bottom-width, border-bottom-style, border-bottom-color) solid 边框

-->
<style scoped>

  .homeRecommond{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 10px;
    padding: 10px 0 15px;
    border-bottom: 8px solid #eee;
  }
  .itemRecommends{
    flex: 1;
  }
  .itemRecommends img{
    height: 70px;
    width: 70px;
    margin-bottom: 10px;
  }

</style>
