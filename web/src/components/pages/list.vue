<template>
    <div class="list-page">
        <div class="header">
            <div class="icon">JESSONZZ</div>
            <div class="top-nav">
                <div>首页</div>
                <div>文章</div>
            </div>
        </div>
        <div class="main">
            <div class="center">
                <div class="left"></div>
                <div class="content">
                    <div class="page">
                    </div>
                </div>
                <div class="right"></div>
            </div>
            <div class="bottom">这里是底部栏</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'listPage',
  data () {
    return {
      title: '这里是列表页'
    }
  }
}
</script>
<style>

html,body{
    width: 100%;
    height: 100%;
}
.list-page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header{
    flex: 0 0 60px;
    background: #777;
    color: #fff;
    line-height: 60px;
    overflow: hidden;
    display: flex;
}
.header .icon{
    flex:0 0 100px
}
.header .top-nav{
    flex:1;
    display: flex;
    justify-content: flex-end;
}
.header .top-nav>div{
    display: inline-block;
    flex: 0 0 100px;
}
.main{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
}
.center{
    flex: 1;
    display: flex;
}
.left{
    flex:0 0 250px;
    background: transparent;
}
.content{
    flex: 1;
    background: #eee;
    overflow: hidden;
}
.right{
    flex:0 0 250px;
    background: transparent;
}
.bottom{
    background: #777;
    flex:0 0 70px;
    line-height: 70px;
    color: #fff;
}
.page{
    width: 100%;
    height: 850px;
}
@media screen and (max-width: 800px) {
    .left {
        display: none
    }
    .right{
        display: none
    }
}
</style>
