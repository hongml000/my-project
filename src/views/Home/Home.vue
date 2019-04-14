<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// 导入模块，注意，在这里导入的是局部组件，所以要在逻辑内声明组件
import HomeHeader from './Header'
export default {
  // 导出的接口模块名
  name: 'home',
  components: {
    // ES6省略写法 HomeHeader: HomeHeader,
    HomeHeader
  }
}
</script>

<style>

</style>
