<template>
  <div class="pc">
      <!-- <!-- <div class="leftBar">
          <div  class="header"></div>
          <div>介绍</div>
          <ul>
              <li>
                  瞎评
              </li>
              <li>
                  文章
              </li>
              <li>
                  图集
              </li>
              <li>
                  实验室
              </li>
          </ul>
      </div>
      <div class="content">
          <div class="title">一些胡话</div>
          <div class="main">
               在如今这个快捷的时代，有人说这种表现形式过于老旧，你为啥偏要做一个博客类别的个人站，非要用这种费力不讨好的方式进行。可能就是因为快吧，想记录点什么东西，想留下点什么东西。
               想让思考慢一点。以一种自我表达的方式，记录下来发表出来。
          </div>
          <div class="main mb60">
                现如今各种朋友圈各种网络平台都有自己关系圈，很难说有一个发声的渠道，你知道有各种各样的眼睛正在盯着你浑身就不自在了，
    你在网络所发表的言论要么是关系圈中的好好先生，要么是各大平台极端的宣泄，可谓一点意思也没有，本站想以一种文字条目的方式，记录本人的兴趣方向积累。 
          </div>
          <div class="photo">
               <div class="title">最近瞎拍</div>
               <div class="photo_list" >
                   <div class="photo_item" v-for="(item,index) in list" :key="index">
                       <div class="photo_img"></div>
                   </div>
               </div>
          </div>
           <div class="record">
               <div class="title">瞎BB</div> 
          </div>
           <div class="photo">
               <div class="title">学习类别</div> 
          </div>
          <div class="record">
               <div class="title">和我说几句</div> 
          </div>
      </div>
    -->
  </div>
</template>
<script lang="ts">
export default { 
  data() {
    return {  
        list:[1,1,1,1,1,1]
    };
  },
  mounted(){

       window.$utill.api.getImage().then(res => {
           console.log(res)
      })
      .catch(res => {
      })
  },
  methods: {
  }
};
</script>
<style lang="scss">
@import "index.scss";
</style>
