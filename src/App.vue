<template>   
      <div id="app">
         <transition name="slide-fade" mode="out-in"  class="h_100">
            <router-view >
            </router-view>
         </transition>
      </div>
</template>
<script>

  export default {
    data() {
      return {

      }
    }
  }
</script>
<style lang="scss">
  @import './assets/css/cssrest.css';
  @import './assets/css/public.css';
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
 #nprogress .bar {
      background: #1890ff !important; //自定义颜色
    }
</style>
