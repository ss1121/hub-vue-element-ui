<template>
  <div class="page-container abc" >
    <h1>{{foo}}</h1>
    <p class="p">{{bar}}</p>
    <ul class="xxx">
      <li><a class="mylink" href="https://www.github.com/webkixi/aotoo-hub" target="_blank">GITHUB</a></li>
      <li><a class="mylink" href="http://www.agzgz.com" target="_blank">官网</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        foo: 'Element-UI Vue项目演示',
        bar: '用起来不费力，搞起来很轻松。 By aotoo-hub'
      }
    },
    created(){
      console.log('====== xxxx');
    }
  }
</script>
