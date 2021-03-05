<template>
  <div class="goodsItem">
    <img :src="goodsItem.show.img" alt="">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
  </div>
</template>
<!--缺 CSS 明天搞-->
<script>
export default {
  name: "GoddsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }

    }
  }
}
</script>

<style scoped>

</style>
