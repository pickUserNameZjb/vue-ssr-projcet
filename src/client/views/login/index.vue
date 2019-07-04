<template>
  <div>
    <div>
      请输入密码<input type="text">
    </div>
   <div>
     请输入账号<input type="text">
   </div>
  <button>登入</button>
  </div>
</template>

<script>
export default {
name: "index",
  created() {
    console.log('login')
  }
}
</script>

<style scoped>

</style>
