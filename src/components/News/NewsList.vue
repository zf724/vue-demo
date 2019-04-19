<template>
  <div class='tmpl'>
    <div class="cms-s-header">
      <h1> </h1>
      <h1 class="page-title">Pull up</h1>
    </div>
    <div class="demo">
      <ul>
        <li v-for='news in newsList' :key='news.id'>
          <a href="#">
            <img :src="news.img_url" alt="">
            <div>
              <span>{{news.title}}</span>
              <div class='news-desc'>
                <p>点击数:{{news.click}}</p>
                <p>发表时间:{{news.add_time}}</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.$axios.get('/api/getnewslist')
      .then(res => {
        this.newsList = res.data.message
      })
      .catch(err => console.log('获取新闻列表异常', err))
  }
}
</script>
<style scoped>
img{
  height: 60px;
  width: 60px;
}
a{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
ul{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
