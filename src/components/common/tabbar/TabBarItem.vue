<template>
  <!--控制属性来决定当前是否处于活跃 活跃则改变图片和字体-->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
<!--    <div v-bind:class="{active : isActive}"><slot name="item-text"></slot></div>-->
    <div v-bind:style="activeStyle"><slot name="item-text"></slot></div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor : {
      type : String,
      default : 'red'
    }
  },
  data(){
   return{
     //通过改变这个属性来决定我们需要显示哪一张图片和文字特效
     //那么如何来动态判断是否处于活跃呢？
     // isActive : true,
   }
  },
  methods:{
    itemClick(){
      this.$router.push( this.path);
    }
  },
  computed: {
    isActive(){
      //indexof 查找目标字符串 找到不为-1
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      //判断是否处理活跃 如果不是 则为空 为什么为空时默认color给了红色？？
      return this.isActive ? {color : this.activeColor} :{}
    }
  }
}
</script>

<style scoped>

.tab-bar-item{
  /*水平分布*/
  flex: 1;
  /*居中*/
  text-align: center;
  /*移动端开发一般只需要49px的高度*/
  height: 49px;
  font-size: 14px;
}
/*图片和文字之间的间距 vertical-align:middle是啥*/
.tab-bar-item img{
  width:24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/*动态改变颜色 这里就不能写死了*/
/*.active{*/
/*  color: red;*/
/*}*/
</style>