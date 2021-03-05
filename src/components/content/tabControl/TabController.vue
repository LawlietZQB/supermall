<template>
  <div class="tabController">
    <div v-for="(item,index) in titles" class="tab-control-item" :key="item"
         :class="{active: index ===currentIndex}" @click="btnColor(index)">
     <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabController",
  props:{
    titles:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0,
    }
  },
  methods: {
    btnColor(index){
      this.currentIndex = index;
    }
  }

}
</script>
<!--选中变红
padding:内边距
-->
<style scoped>
.tabController{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background: #ffffff;
}
.tab-control-item{
  flex: 1;

}

.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}

</style>
