<template>
    <div class="card">
        <div class="title" v-if="title">{{title}}</div>
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'card',
  data: function () {
    return {

    }
  },
  props: {
    title: {
      default: null,
      type: String
    }
  }
}
</script>
<style lang="css" scoped>
    .card{
        height: 245px;
        margin-top: 50px;
        background-color: #fff;
        box-shadow: 2px 7px 17px lightslategrey;
        width: 95%;
        position: relative;
        box-sizing: border-box;
        transition: background-color .5s .4s,color .5s .4s;
    }
    .card:last-of-type{
        margin-bottom: 50px;
    }
    .card::before,.card::after{
        content: '';
        display: inline-block;
        position: absolute;
        width: 0;
        height: 0;
        box-sizing: border-box;
    }
    .card::before{
        top: 0;
        left: 0;
        border-top: 1px solid #777;
        border-right: 1px solid #777;
        transition: height .1s .2s,width .1s .3s;
    }
    .card::after{
        bottom: 0;
        right: 0;
        border-bottom: 1px solid #777;
        border-left: 1px solid #777;
        transition: height .1s,width .1s .1s;
    }
    .card:hover{
        background-color: #777;
        color: #fff;
        transition: background-color .5s .4s,color .5s .4s;
    }
    .card:hover::before{
        width: 100%;
        height: 100%;
        transition: width .1s ease-in,height .1s ease-in .1s;
    }
    .card:hover::after{
        width: 100%;
        height: 100%;
        transition: width .1s ease-in .2s,height .1s ease-in .3s;
    }
    .title{
        font-size: 22px;
        line-height: 55px;
        font-weight:lighter;
    }
    @media screen and (max-width: 800px){
        .card{
            margin-left: auto;
            margin-right: auto;
            width: 83%;
        }
        .card .title{
            font-size: 17px;
            line-height: 50px;
        }
    }
</style>
