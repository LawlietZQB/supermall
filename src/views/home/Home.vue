<template>
  <div id="home">
    <nav-bar>
      <div slot="center" >购物街</div>
    </nav-bar>
<!--    轮播图写法需要研究 这里v-for需要绑定key值 eslint检查 我们a标签超链接是动态绑定值 所以前面要加: -->
<!--    !!! 注意 home只写主要的逻辑 所以我们的代码需要抽离出去-->
<!--    动态绑定的数据都要加:-->
    <home-swiper :banners="banners"></home-swiper>
<!--    推荐首页内容-->
    <HomeRecommondView :recommends="recommends"></HomeRecommondView>
  </div>

</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from "./childCompontents/HomeSwiper";
import HomeRecommondView from "@/views/home/childCompontents/HomeRecommondView";
import {getHomeMuldata} from "network/home";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommondView
  },
  data() {
    return{
      banners :[],
      recommends: [],
      keywords: [],
      dKeywords:[]
    }
  },
  //创建好首页请求数据
  created() {
    getHomeMuldata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        this.keywords = res.data.keywords.list;
        this.dKeywords = res.data.dKeyword.list;
    })
  }
}
</script>
<!-- 文字布局在navbar操作 背景(包括文字)在这里操作 方便扩展-->
<style scoped>
#home{
  /*background: var(--color-tint);*/
  /*color: var(--color-background);*/
  height: 100vh;
}


</style>
