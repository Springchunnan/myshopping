<template>
  <div id="home">
    <!-- 头部导航开始 -->
    <HeadTop title="测试页"></HeadTop>
    <!-- 头部导航结束 -->
    <!-- 轮播图开始 -->
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in carouselData" :key="item.id">
          <img class="bg" :src="item.url" alt="" width="375px" height="200px"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图结束 -->
    <!-- 导航菜单开始 -->
    <div class="NavMenu">
      <div class="nav-cell" v-for="i in 9" :key="i">
        {{i}}
      </div>
    </div>
    <!-- 导航菜单结束 -->
    
  </div>
</template>

<script>
import HeadTop from "@/components/topHead";
import { Swipe, SwipeItem } from "mint-ui";
import img from "@/assets/images/bg.jpg"
export default {
  name: "home",
  data() {
    return {
      mag: "vue首页1111",
      carouselData:[
            {url:img,title:'你看我叼吗1',id:1},
            {url:require('../../assets/images/bg1.jpg'),title:'你看我叼吗2',id:2},
            {url:require('../../assets/images/bg4.jpg'),title:'你看我叼吗3',id:3},
            {url:require('../../assets/images/bg3.jpg'),title:'你看我叼吗3',id:4}
        ]
    };
  },
  components: {
    HeadTop,
    Swipe,
    SwipeItem
  }
};
</script>

<style lang="scss" scoped>
    #home{
      display: flex;
      flex-direction: column;
    }
    .swipe{
        width: 100%;
        height: 200px;
        .mint-swipe-indicator{
          opacity:0.6;
        }
    }
    .NavMenu{
      height: 200px;
      display: flex;
      flex-flow: row wrap;
      justify-content: left;
      align-items:center; 
      padding: 10px 15px;
      .nav-cell{
        border: 1px solid #666;
        width: 20%;
        height: 50px;
        margin: 5px 7px;
      }
    }
</style>