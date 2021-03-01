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
  }
  .left,.right {
    width: 60px;
  }
  .center {
    flex: 1;
  }

</style>
