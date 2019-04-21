<template>
  <div class="header">
      <!-- change test -->
      <div class="header-left">
          <span class="iconfont" >&#xe624;</span>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          景点</div>
      <div class="header-right">
          <router-link to="/sub"> {{ this.city }} </router-link>
          <span class="iconfont">&#xe62d;</span>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 将state中，定义的this.$store.state.city映射到this.city中
    ...mapState(['city'])
  }
}
</script>

// 使用scoped说明这个样式只对当前文件有效
<style rel="stylesheet/scss" lang="scss" scoped>
    @import '~styles/variable.scss';
    .header{
        height: 50px;
        background-color: $bgColor;
    }
    .header-left{
        float: left;
        line-height: 50px;
        height: 50px;
        width: 100px;
    }
    .header-input{
        /* background-color: antiquewhite; */
        margin: 5px;
        /* margin-bottom: 5px; */
        background-color: white;
        color: #999;
        line-height: 40px;
        height: 40px;
        float: left;
        flex: 1;
        width: 800px;
        border-radius: 15px;
    }
    .header-right{
        float: right;
        color: black;
        line-height: 50px;
        height: 50px;
        width: 150px;
    }

</style>
