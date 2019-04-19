<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.img">
      </mt-swipe-item>
    </mt-swipe>
    <div class="grid">
      <my-ul>
        <my-li v-for='(grid,index) in grids' :key='index'>
          <router-link :to='grid.router'>
            <span :class="grid.className"></span>
            <span>{{grid.title}}</span>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [],
      grids: [
        {
          className: 'cms-news',
          title: '新闻资讯',
          router: {
            name: 'news.list'
          }
        },
        {
          className: 'cms-photo',
          title: '图文分享',
          router: {
            name: 'news.list'
          }
        },
        {
          className: 'cms-news',
          title: '商品展示',
          router: {
            name: 'news.list'
          }
        },
        {
          className: 'cms-news',
          title: '留言反馈',
          router: {
            name: 'news.list'
          }
        },
        {
          className: 'cms-news',
          title: '搜索资讯',
          router: {
            name: 'news.list'
          }
        },
        {
          className: 'cms-news',
          title: '联系我们',
          router: {
            name: 'news.list'
          }
        }
      ]
    }
  },
  created () {
    this.$axios
      .get('/api/getlunbo')
      .then(res => {
        this.imgs = res.data.message
        console.log(res.data.message)
      })
      .catch(err => console.log('轮播图片异常', err))
  }
}
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}

img {
  width: 100%;
  height: 100%;
}

a{
  display: flex;
  flex-direction: column;
  justify-content : center;
  align-items : center;
}
.cms-news{
  background-image: url(../../assets/img/shanghuzhinan.png);
  background-size: 60px;
  width: 60px;
  height: 60px;
}

.cms-photo{
  background-image: url(../../assets/img/fenxianghaibao.png);
  background-size: 60px;
  width: 60px;
  height: 60px;
}
</style>
