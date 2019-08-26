<template>
  <div id="topheader">
      <div class= "th-l" @click="backAction"><</div>
      <div class = "th-title">{{title}}</div>
      <div class = "th-r">
          <slot name = "r"></slot>
      </div>   
  </div>
</template>

<script>
export default {
  name: "topheader",
  props:["title","backUrl"],
  //vue  组件方法
  components: {
  
  },
  data() {
    return {
      msg: "Vue首页",
      selected: "",
      result: []
    };
  },
  //vue 自定义方法
  methods: {
      backAction(){
          if(this.backUrl){
              this.$router.push(this.backUrl);
          }else{
              this.$router.go(-1);
          }
      }
  },
  //vue 过滤器
  filters: {},
  //vue 计算属性
  computed: {},
  //vue 深度监听
  watch: {}
};
</script>

<style lang="scss" scoped>
    #topheader{
        display:flex;
        justify-content:space-between;
        height:42px;
        line-height:42px;
        color:#fff;
        font-size:18px;
        background-color:#000000;
         .th-l{
            padding-left:15px;
        }
        .th-title{
            text-align:center;
            flex:1 1 auto;
        }
        .th-r{
            padding-right:15px;
        } 
    }
</style>