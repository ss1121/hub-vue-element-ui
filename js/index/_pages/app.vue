<template>
  <div class="page-container" >
    <div class="router-menus">
      <router-link to="/foo" router-link-active='xxx'>{{pageName[0]}}</router-link>
      <router-link to="/_element/button">{{pageName[1]}}</router-link>
      <router-link to="/_element/form">{{pageName[2]}}</router-link>
    </div>
    <router-view class="router-content"></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        pageName: [
          '简述',
          'button',
          'form'
        ]
      }
    },
    created(){
      console.log('====== xxxx');
    }
  }
</script>

<style lang="stylus">
  // @font-face {
  //   font-family: 'iconfont';  /* project id 2218644 */
  //   src: url('//at.alicdn.com/t/font_2218644_muc2ysz5h68.eot');
  //   src: url('//at.alicdn.com/t/font_2218644_muc2ysz5h68.eot?#iefix') format('embedded-opentype'),
  //   url('//at.alicdn.com/t/font_2218644_muc2ysz5h68.woff2') format('woff2'),
  //   url('//at.alicdn.com/t/font_2218644_muc2ysz5h68.woff') format('woff'),
  //   url('//at.alicdn.com/t/font_2218644_muc2ysz5h68.ttf') format('truetype'),
  //   url('//at.alicdn.com/t/font_2218644_muc2ysz5h68.svg#iconfont') format('svg');
  // }
   
.mylink 
  display block
  margin-top 20px
a
  text-decoration: none
  color: #666
li
  list-style-type none
body
  padding 0
  margin 0
.page-container
  box-sizing border-box
  width 100%
  height 100vh
  display flex
  .router-menus
    width 200px
    display flex
    flex 1 0 auto
    flex-direction column
    box-sizing border-box
    padding 10px
    line-height 40px
    // a
    //   &[router-link-active='xxx']
    //     display none
    .router-link-active
      color: #000
  .router-content
    background-color #efefef
    box-sizing border-box
    padding 10px
    display block
.abc
  display flex!important
  flex-flow column
  align-items center
  justify-content center
.xxx
  display flex
  >li
    width 200px
    height 120px
    border: 1px solid
    border-radius: 4px
    display flex
    justify-content center
    align-items center
    margin-right 20px
    &:hover
      border-color: red
      cursor pointer
    .mylink
      margin 0
.p
  margin 0
</style>