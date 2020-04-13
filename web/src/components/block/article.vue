<template>
    <div>
        <div v-for="(item,index) in articles" :key="index">{{item.title}}</div>
    </div>
</template>
<script>
export default {
  name: 'article',
  data: function () {
    return {
      articles: [
        {
          title: '文章1',
          description: '水水大大撒大苏打撒大苏打'
        }, {
          title: '文章1',
          description: '水水大大撒大苏打撒大苏打'
        }, {
          title: '文章1',
          description: '水水大大撒大苏打撒大苏打'
        }, {
          title: '文章1',
          description: '水水大大撒大苏打撒大苏打'
        }
      ]
    }
  }
}
</script>
<style lang="css">

</style>
