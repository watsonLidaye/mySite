<template>
  <div class="pc">
      <div class="leftBar">
           <div class="leftBar">
               <div class="clear">
            <div  class="header">
                <img src="http://www.ergouzi.com.cn/images/normal/48bda875f9fc5d94908b941ff3507ae.jpg" alt="" srcset="" class='left_img'>
                <div>
                    <div style="margin-bottom:20px">李二狗子</div>
                    <div style="font-size:14px">摄影爱好者</div>
                </div>
            </div>
            </div>
            <ul class="left_menu">
                <li @click="jumpTo()">
                    瞎BB
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li>
                <li @click="jump()">
                    文章
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li>
                <li @click="jump()">
                    图集
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li>
                <li @click="jump()">
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
               <div class="more">
                   <a-button type="link" >
                    查看更多<a-icon type="double-right" />
                    </a-button>
                </div>
                <div class="title"><a-icon type="instagram" /> 最近瞎拍</div>
                <div class="photo_list" >
                    <div  class="photo_item" :style="{width:`${long}px`,height:`${long}px`,margin:`0 ${padding}px 30px`}" v-for="(item,index) in list" :key="index">
                        <img class="photo_img" :preview="index" :src="`${path}${item.image}`"></img>
                    </div>
                </div>
            </div>
           <div class="record">
               <div class="title"> <a-icon type="edit" style="margin-right:10px" />最近瞎BB</div> 
                <div>
                    <waterfall :col='col' :width="long33" :gutterWidth="gutterWidth"  :data="items"  >
                        <template >
                            <div class="cell-item" v-for="(item,index) in items">
                            <div class="item-body">
                                <div class="item-desc">
                                    <img :src="`${path}${item.image}`" alt="" srcset="" style="width:100%">
                                </div>
                                <div class="item-footer">
                                   {{item.shortContent}}
                                </div>
                            </div>
                            </div>
                        </template>
                    </waterfall>
                </div>
          </div>
           <div class="photo">
               <div class="title"> <a-icon type="snippets" style="margin-right:10px" />最新文章</div> 
          </div>
          <div class="record">
               <div class="title"><a-icon type="sound" style="margin-right:10px" />和我说几句</div> 
          </div>
     </div>
    <div class="preview_iew" :class="seePicture?'see_pic':'no_see'">
        <img :src="seePicture" alt="" class="see_pic_box">
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
        seePicture:'',
        long33:0,
        gutterWidth:0,
        col:4,
        items:[
        ]
    };
  },
  created(){

  },
  mounted(){
      this.long=document.getElementById('photo').clientWidth/4
      this.long33 = document.getElementById('vueWaterfall').clientWidth/4.2
      this.padding =document.getElementById('photo').clientWidth/40
      window.onresize = () => {
        return (() => {
           this.long=document.getElementById('photo').clientWidth/4
           this.padding =document.getElementById('photo').clientWidth/40
           this.long33 = document.getElementById('vueWaterfall').clientWidth/4.2
        })()
    }
    // 首页图片获取
       window.$utill.api.getImage().then(res => {
           this.list= res.data
      })
      .catch(res => {
      })
      //首页瞎评论获取
      window.$utill.api.getShortContent().then(res => {
         this.items = res.data
      })
      .catch(res => {
      })
  },
  methods: {
      showImg(img){
          this.seePicture=this.seePicture?'':this.path+img
      },
      jump(){
          console.log('点击')
           this.$notification.open({
        message: '温馨提示',
        description:
          '功能正在缓慢开发中，请耐心等待',
          duration: 1,   
      });
      }
  }
};
</script>
<style lang="scss">
@import "index.scss";
</style>
