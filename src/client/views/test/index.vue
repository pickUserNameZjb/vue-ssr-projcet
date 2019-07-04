<template>
  <div>
    <img src="./img/defaultImg.png" alt="">
    <ul>
      <li v-for="item in 100">
        {{item}}
      </li>
    </ul>
    <table>
      <tr>
        <td>姓名</td>
        <td>年龄</td>
        <td>学历</td>
        <td>性别</td>
        <td>其他</td>
      </tr>
      <tr v-for="item in 100">
        <td>{{item}}</td>
        <td>{{item}}</td>
        <td>{{item}}</td>
        <td>{{item}}</td>
        <td>{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
name: "index",
  data () {
    return {

    }

  },
  created() {
  console.log('test')
  }

}
</script>

<style scoped>

</style>
