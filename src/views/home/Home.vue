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
<!--    精选content-->
    <feature-view></feature-view>

    <TabController class="tab-control" :titles="['流行','精选','新款']"></TabController>
    <GoodsList :goods="goods['pop'].list"></GoodsList>
<!--     ul>li{列表$}*10 $表示依次递增 -->
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
    </ul>

  </div>

</template>

<script>
// 公共组件
import NavBar from '@/components/common/navbar/NavBar'
import TabController from "@/components/content/tabControl/TabController";
// 父子组件
import HomeSwiper from "./childCompontents/HomeSwiper";
import HomeRecommondView from "@/views/home/childCompontents/HomeRecommondView";
import FeatureView from "@/views/home/childCompontents/FeatureView";
import GoodsList from "@/components/content/goods/GoodsList";
import {getHomeMuldata,getHomeGoods} from "network/home";



export default {
  name: "Home",
  components: {
    NavBar,
    TabController,
    HomeSwiper,
    HomeRecommondView,
    FeatureView,
    GoodsList
  },
  data() {
    return{
      banners :[],
      recommends: [],
      keywords: [],
      dKeywords:[],
      goods: {
        pop: {page:0,list:[]},
        new: {page:0,list:[]},
        sell: {page:0,list:[]}
      }

    }
  },
  //创建好首页请求数据
  created() {
    //created中只写具体逻辑代码
    //请求多个数据
    this._getHomeMuldata();
    //请求商品数据
    this._getHomeGoods('pop');
    this._getHomeGoods('new');
    this._getHomeGoods('sell');
  },
  methods: {
    _getHomeMuldata(){
      getHomeMuldata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        this.keywords = res.data.keywords.list;
        this.dKeywords = res.data.dKeyword.list;
      });
    },
    _getHomeGoods(type){
      //动态传参
      //提高复用性 page不是写死 也就是下拉第三次时候应该是第四页的数据
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        console.log(res);
        //特殊写法 把list的数据解析出来然后依次push进去
        this.goods[type].list.push(...res.data.list);
        console.log(this.goods[type].list);
        //然后page要加1
        this.goods[type].page += 1;
      });

    }
  }
}
</script>
<!-- 文字布局在navbar操作 背景(包括文字)在这里操作 方便扩展
padding-top : 设置元素的上内边距：
息停：没达到位置之前 position是static 达到后内部自动改成fixed 但是很多浏览器不兼容
position: sticky;
  top: 40px;
-->
<style scoped>
#home{
  /*background: var(--color-tint);*/
  /*color: var(--color-background);*/
  /*height: 100vh;*/
  padding-top: 44px;
}

.tab-control{
  position: sticky;
  top: 40px;
}


</style>
