<template>
  <div class="div">
    <!-- @click="changeHomeData" -->
    <div>{{ this.city }}</div>
    <button @click='changeHomeData("贵港")'>贵港</button>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  // 导出的接口模块名
  name: 'Sub',
  computed: {
    // 将this.$store.state.city映射为this.city
    ...mapState(['city'])
  },
  methods: {
    // 将this.$store.actions.change(context,city)映射为 this.change(city)，注意要写在方法里
    ...mapActions(['change']),

    changeHomeData (city) {
      console.log(city)
      // 这里就可以使用这个change(city)方法了
      this.change(city)
      this.$router.push('/')
    }
  }
}
</script>

// 使用scoped说明这个样式只对当前文件有效
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
