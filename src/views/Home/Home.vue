<template>
  <div>
    <home-header :msg="msg"></home-header>
  </div>
</template>

<script>
// 导入模块，注意，在这里导入的是局部组件，所以要在逻辑内声明组件
import HomeHeader from './Header'
import axios from 'axios'
export default {
  // 导出的接口模块名
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    // ES6省略写法 HomeHeader: HomeHeader,
    HomeHeader
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      this.msg = res.data.msg
    }
  },
  created () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
