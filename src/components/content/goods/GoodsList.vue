<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :goods-item="item" :key="item.type"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    },
  }
}
</script>

<style scoped>

</style>
