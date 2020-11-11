<template>
  <div class="pcPage">
      <router-view >
        </router-view>
  </div>
</template>
<script lang="ts">
export default { 
  data() {
    return {  

    };
  },
  methods: {
  },
  mounted(){
    if(document.body.clientWidth<=1100){
        this.$router.replace('/moblie')
      }
  }
};
</script>
<style lang="scss">
@import "index.scss";
</style>
