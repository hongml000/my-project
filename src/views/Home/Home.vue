<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// 导入模块，注意，在这里导入的是局部组件，所以要在逻辑内声明组件
import HomeHeader from './Header'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  // 导出的接口模块名
  name: 'home',
  data () {
    return {
      lastCity: ''
    }
  },
  components: {
    // ES6省略写法 HomeHeader: HomeHeader,
    HomeHeader
    // layout,

  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      console.log(this.city)
      console.log(this.$store.state.city)
      axios.get('/static/mock/index.json?city=' + this.city).then(() => { 'succ!' })
    }
    // getHomeInfoSucc (res) {
    //   this.city = res.data.msg
    //   // console.log(res)
    //   console.log(this.city)
    // }
  },
  created () {
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
    console.log('lastCity', this.lastCity, 'city', this.city)
    // 变成只执行一次而已
    console.log('created')
  }
  // 每次返回这个页面（主页），都会被执行
  // activated () {
  //   // 判断是不是跟上一次同一个城市，如果不是就重新加载一次
  //   if (this.lastCity !== this.city) {
  //     this.lastCity = this.city
  //     this.getHomeInfo()
  //     console.log('activated')
  //   }
  // }
}
</script>

<style>
</style>
