<template>
  <div class="tabbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <!-- <img slot="icon" src="../assets/images/bg.jpg" style="width:100px; height:100px"  /> -->
        tab1
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <!-- <img slot="icon" src="../assets/images/bg1.jpg" style="width:100px; height:100px"  /> -->
        tab2
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <!-- <img slot="icon" src="../assets/images/bg3.jpg" style="width:100px; height:100px"  /> -->
        tab3
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <!-- <img slot="icon" src="../assets/images/bg4.jpg" style="width:100px; height:100px"  /> -->
        tab4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
  components: {
    Tabbar,
    TabItem
  },
  data(){
      return{
          selected:''
      }
  }
};
</script>

<style lang="scss" scoped>

</style>
