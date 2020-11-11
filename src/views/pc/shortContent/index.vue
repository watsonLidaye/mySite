<template>
  <div class="pcShortContent">
    <vue-particles
        color="#999"
        :particleOpacity="1"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="3"
        linesColor="#999"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="1"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
       
      </vue-particles>
      <div class="bg_plate ">
        <img src="https://picture-1252636416.cos.ap-chengdu.myqcloud.com/39b8c967fac57d715f50334f07f1e22c.jpg" alt="">
        <div>页面正在施工....</div>
      </div>
  </div>
</template>
<script lang="ts">

export default {
  data() {  
    return {  

    };
  },
  created(){

  },
  mounted(){
    
  },
  methods: {

  }
};
</script>
<style lang="scss">
@import "index.scss";
</style>
