<!--这里只关心我们的tab-bar而不是item-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>
#tab-bar{
  /*flex属性 水平分布 均等*/
  display: flex;
  /*添加背景颜色 灰色*/
  background: #f6f6f6;
  /*沉到底部
  fixed:元素的位置相对于浏览器窗口是固定位置,即使窗口是滚动的它也不会移动：
  下沉操作：左右给0
  bottom：把图像的底边缘设置在其包含元素底边缘之上
  */
  /*设置阴影
   好了，上代码。官方用语：     box-shadow:1px 2px 3px 4px #ccc inset；
   来分别看一下以上六个值的含义：
   1px  从原点开始，沿x轴正方向的长度（倘若为负值，为沿x轴负方向的长度）；
　　 2px  从原点开始，沿y轴正方向的长度；（倘若为负值，为沿y轴负方向的长度）；
　　 3px  阴影的模糊度，只允许为正值；
　　　　　　　　　　　　　　　　　  4px  阴影扩展半径；
　　　　　　　　　　　　　　　　　  #ccc  阴影颜色；
　　　　　　　　　　　　　　　　　  inset  设置为内阴影（如果不写这个值，默认为外阴影）；
 */
  position: fixed;
  left: 0;
  right: 0;
  bottom:0;
  box-shadow: 0px -2px 1px rgba(100,100,100,.2);
}

</style>
