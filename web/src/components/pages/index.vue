<template>
    <div class="index">
        <div class="grid-box">
            <div class="first">first</div>
            <div class="second">second</div>
            <div class="third">third</div>
            <div class="fourth">fourth</div>
            <div class="fifth">
                <span id="light"></span>
                fifth
            </div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'indexPage',
  mounted () {
    document.addEventListener('mousemove', (ev) => {
      var rootDiv = document.getElementsByClassName('fifth')[0]
      var locationX = rootDiv.getBoundingClientRect().left + document.documentElement.scrollLeft
      var locationY = rootDiv.getBoundingClientRect().top + document.documentElement.scrollTop
      var X = (ev.clientX > locationX) ? (ev.clientX - locationX) : 0
      var Y = (ev.clientY > locationY) ? (ev.clientY - locationY) : 0
      X = X < rootDiv.clientWidth ? X : rootDiv.clientWidth
      Y = Y < rootDiv.clientWidth ? Y : rootDiv.clientHeight
      var target = document.getElementById('light')
      target.style.left = X - (target.clientWidth / 2) + 'px'
      target.style.top = Y - (target.clientHeight / 2) + 'px'
    })
  }
}
</script>
<style lang="css">
    .grid-box{
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
        grid-gap: 10px;
    }
    .grid-box div{
        background-color: #777777;
        height: 200px;
        box-sizing: border-box;
        line-height: 200px;
        font-size: 32px;
        color:white;
        box-sizing: border-box;
    }
    /* 边框环绕特效 */
    .first{
        position: relative;
        transition: background-color .5s 1s,color .5s 1s;
    }
    .first::before,.first::after{
        position: absolute;
        content: ' ';
        height: 0px;
        width: 0px;
        border-style: solid;
        border-color: transparent;
        box-sizing: border-box;
        border-width: 2px;
    }
    .first::before{
        top: 0;
        left: 0;
        transition:border-color 0s .8s,width .2s .6s,height .2s .4s;
    }
    .first::after{
        right: 0;
        bottom: 0;
        border-width: 0px;
        transition:border-color 0s .4s,width .2s .2s,height .2s 0s,border-width 0s .4s;
    }
    .first:hover::before{
        width:100%;
        height: 100%;
        border-top-color:#777;
        border-right-color: #777;
        transition: border-color 0s,width .2s,height .2s .2s;
    }
    .first:hover::after{
        width:100%;
        height: 100%;
        border-bottom-color:#777;
        border-left-color: #777;
        border-width: 2px;
    }
    .first:hover{
        background-color: white;
        color: #777;
        transition: background-color .5s,color .5s,;
    }

    /* 边框滑动特效 */
    .second{
        transition: border-width 0s .4s,border-color 0.4s,width .2s .4s,height .2s .6s;
        position: relative;
        box-sizing: border-box;
        transition: background-color .5s .2s,color .5s .2s;
    }
    .second::before,.second::after{
        content:'';
        position: absolute;
        width:0px;
        height: 100%;
        border-width: 2px;
        border-color: transparent;
        border-style: solid;
        box-sizing: border-box;
    }
    .second::before{
        top: 0px;
        left: 0px;
        border-top-color: #777;
        transition: width .2s;
    }
    .second::after{
        bottom: 0px;
        right: 0px;
        border-bottom-color: #777;
        transition: width .2s;
    }
    .second:hover{
        background: #fff;
        color:#777;
        transition: background-color .5s 0s,color .5s 0s;
    }
    .second:hover::before{
        width: 100%;
        transition:width .5s 0s;
    }
    .second:hover::after{
        width: 100%;
        transition:width .5s 0s;
    }

    /* 背景滑动特效 */
    .third{
        position: relative;
        box-sizing: border-box;
        background-color: #fff !important;
        border-left: 2px solid #777;
        border-right: 2px solid #777
    }
    .third:hover{
        color:#777;
        transition: background-color .5s,color .5s;
    }
    .third::before{
        content: 'third';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #777;
        left: 0;
        top: 0;
        border-left: 2px solid #777;
        border-right:2px solid #777;
        box-sizing: border-box;
        transition: height .5s;
    }
    .third:hover::before{
        height: 0;
        transition: height .5s;
    }

    /* 旋转特效 */
    @keyframes rotation{
        0%{
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    .fourth:hover{
        background-color: #fff;
        color:#777;
        animation: rotation 1s ease-in ;
        transition: background-color 2s,color 2s;
    }
    .fourth{
        transform: rotate(0deg);
        transition: transform 2s;
    }
    /* 旋转特效 */

    /* 探照灯效果 */
    .fifth{
        position: relative;
        overflow: hidden;
    }
    #light{
        display: inline-block;
  background-image: radial-gradient(transparent, #777);
        width: 120px;
        height: 120px;
        border-radius: 60px;
        position: absolute;
    }
    /* 探照灯效果 */
</style>
