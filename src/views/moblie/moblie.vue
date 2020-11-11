<template>
  <div class="moblie">
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
    if(document.body.clientWidth>1100){
        this.$router.replace('/pc')
      }
  }
};
</script>
<style lang="scss">
@import "index.scss";
</style>
