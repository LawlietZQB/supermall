<template>
  <div class = "nav-bar">
    <div class = "left">
      <slot name="left"></slot>
    </div>
    <div class = "center">
      <slot name="center"></slot>
    </div>
    <div class = "right">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>
<!--line-height 需要内容才能撑开
width一般是60
box-shadow 设置阴影 参考learn-vue03
flex为1可以撑起剩余的部分
position:fixed 元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动：
z-index 位于z轴的多少
-->
<style scoped>

  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    text-align: center;
    background: var(--color-tint);
    color: var(--color-background);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .left,.right {
    width: 60px;
  }
  .center {
    flex: 1;
  }

</style>
