<template>
  <div id="top">
    <h1>{{msg}}</h1>
    
  </div>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
  name: "Home",
  //vue  组件方法
  components: {
    Tabbar,
    TabItem
  },
  data() {
    return {
      msg: "Vue首页",
      selected:''
    };
  },
  //vue 自定义方法
  methods: {},
  //vue 过滤器
  filters: {},
  //vue 计算属性
  computed: {},
  //vue 深度监听
  watch: {}
};
</script>

<style>
</style>