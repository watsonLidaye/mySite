<template>
  <div class="pc">
      <div class="leftBar">
           <div class="leftBar">
               <div class="clear">
            <div  class="header">
                <img src="http://www.ergouzi.com.cn/images/normal/48bda875f9fc5d94908b941ff3507ae.jpg" alt="" srcset="" class='left_img'>
                <div>
                    <div>李二狗子</div>
                    <div>摄影爱好者</div>
                </div>
            </div>
            </div>
            <ul class="left_menu">
                <li>
                    瞎评
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li>
                <li>
                    文章
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li>
                <li>
                    图集
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li>
                <li>
                    实验室
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li>
          </ul>
          </div>
      </div>
      <div class="content">
            <div class="first_sceen">
                <div class="title1">一些胡话</div>
                <div class="main">
                    在如今这个快捷的时代，有人说这种表现形式过于老旧，你为啥偏要做一个博客类别的个人站，非要用这种费力不讨好的方式。
                    
                </div>
                <div class="main">
                    可能就是因为快吧，想记录点什么东西，想留下点什么东西,想让思考慢一点，记录一点点有用的东西。
                </div>
            </div>
           <div class="photo" id='photo'>
                <div class="title">最近瞎拍</div>
                <div class="photo_list" >
                    <div class="photo_item" :style="{width:`${long}px`,height:`${long}px`,margin:`0 ${padding}px 30px`}" v-for="(item,index) in list" :key="index">
                        <img class="photo_img" :src="`${path}${item.image}`"></img>
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

  </div>
</template>
<script lang="ts">
export default { 
  data() {
    return {  
        list:[1,1,1,1,1,1],
        path:'http://www.ergouzi.com.cn',
        long:0,
        padding:10,
    };
  },
  created(){

  },
  mounted(){
      this.long=document.getElementById('photo').clientWidth/4
      this.padding =document.getElementById('photo').clientWidth/40
      window.onresize = () => {
        return (() => {
           this.long=document.getElementById('photo').clientWidth/4
           this.padding =document.getElementById('photo').clientWidth/40
        })()
    }
       window.$utill.api.getImage().then(res => {
           this.list= res.data
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
