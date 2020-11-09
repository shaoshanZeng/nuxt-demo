<template>
    <div>user
        <img src="~/assets/img/btn.png" alt="" srcset="">
        <div>{{title}}</div>
    </div>
</template>
<script>
import axios from 'axios'

  export default {
      data(){
          return {

          }
      },
      mounted(){

      },    
    async asyncData({ params }) {
        // c741d17518c44c899e32dd17e2e4941f
      let { data } = await axios.get(`https://wxapi.dq.anhuayw.com/service/getDeskByUserId?id=c741d17518c44c899e32dd17e2e4941f`)
      console.log(data.data)
      return { title: data.data[0].name }
    }
  }
</script>