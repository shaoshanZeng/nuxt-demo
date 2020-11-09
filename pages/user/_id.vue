<template>
    <div>带参数的界面</div>
</template>
<script>
export default {
  middleware () {}, //服务端
  validate () {}, // 服务端
  asyncData () {}, //服务端
  fetch () {}, // store数据加载
  beforeCreate () { }, // 服务端和客户端都会执行
  created () {}, // 服务端和客户端都会执行 
  beforeMount () {}, 
  mounted () {} // 客户端
}
</script>