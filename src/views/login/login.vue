<template>
  <div class="login">
    this is indexPage
    <div>
    <input type="text" v-model="name" style="border:1px solid #eee" />
    <input type="text" v-model="age" style="border:1px solid #eee" />
    </div>
    <!-- 修改了文件 -->
    <!-- 再一次尝试修改文件 -->
    <div @click="addUser">提交</div>
  </div>
</template>
<script lang="ts">
export default { 
  data() {
    return {  
        name:'',
        age:''
    };
  },
  methods: {
    addUser(){
      let data:any = {}
      data.name = this.name 
      data.age =this.age
      console.log(this.$Ajax)
      window.$Ajax.post('/api/user/addUser',data).then(res=>{
        console.log(res)
      })
    }
  },
};
</script>
<style lang="scss">
@import "index.scss";
</style>
