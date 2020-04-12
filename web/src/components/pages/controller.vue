<template>
    <div class="controller-page">
        {{title}}

    </div>
</template>
<script>
export default {
  name: 'controllerPage',
  data () {
    return {
      title: '这里是控制页面'
    }
  },
  mounted () {
    console.log(navigator)
  }
}
</script>
<style lang="css">
.controller-page{
}
</style>
