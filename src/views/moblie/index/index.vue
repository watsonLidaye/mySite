<template>
  <div class="moblieIndex">
      <div class="leftBar" :class="menuClick?'show_menu':'hide_menu'">
           <div class="leftBar_inner">
              <div  class="header_left">
                  <img src="http://www.ergouzi.com.cn/images/normal/48bda875f9fc5d94908b941ff3507ae.jpg" alt="" srcset="" class='left_img'>
                  <div>
                      <div style="margin-bottom:.20rem">李二狗子</div>
                      <div style="font-size:14px">摄影爱好者</div>
                  </div>
              </div>
              <ul class="left_menu">
                  <li @click="jumpTo('/moblie/shortContent')">
                      瞎BB
                      <div class="line_area">
                      </div>
                      <div class="line_area2">
                      </div>
                  </li>
                  <li @click="jumpTo('/moblie/content')">
                      文章
                      <div class="line_area">
                      </div>
                      <div class="line_area2">
                      </div>
                  </li>
                  <li @click="jumpTo('/moblie/images')">
                      图集
                      <div class="line_area">
                      </div>
                      <div class="line_area2">
                      </div>
                  </li>
                  <li @click="jumpTo('/moblie/lab')">
                      实验室
                      <div class="line_area">
                      </div>
                      <div class="line_area2">
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <div class="totalModal" @click="showMenu" v-if="menuClick"></div>
      <div class="header">
        <div class="header_title">Watson.Li</div>
        <div @click="showMenu" >
          <a-icon type="menu" class="tran3" :class="menuClick?'tagggle':''" />
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
                    <div  class="photo_item" :style="{width:`${long}px`,height:`${long}px`,padding:`0 ${padding}px 30px`}" v-for="(item,index) in list" :key="index">
                        <img class="photo_img" :preview="index" :src="`${item.image}`"></img>
                    </div>
                </div>
            </div>
           <div class="record">
               <div class="title"> <a-icon type="edit" style="margin-right:10px" />最近瞎BB</div> 
                <div>
                    <waterfall :col='col' :width="long33" :gutterWidth="gutterWidth"  :data="items"  >
                        <template >
                            <div class="cell-item" v-for="(item,index) in items" >
                            <div class="item-body">
                                <template v-if="item.shortContentId!=0">
                                   <div class="item-desc" @click="jumpShort(item.shortContentId,item.image)">
                                        <img :src="`${item.image}`" alt="" srcset="" style="width:100%">
                                        <div class="modal">
                                            
                                        </div>
                                        <div class="searhBar">
                                            <a-icon type="search" />
                                        </div>
                                    </div>
                                </template>
                                <template v-if="item.shortContentId==0">
                                    <div class="item-desc hoverSee" >
                                        <img class="itemhover" :preview-text="item.shortContent" :preview="index" v-lazy="`${item.image}`" alt="" srcset="" style="width:100%">
                                        
                                    </div>
                                </template>
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
               <div class='content_item'>
                   <h2>这是一个文章的标题1</h2>
                   <div>z这是文章的打开两打两控的康复灵栓看了那个肯定国内分两个那地方了刚拿到房了刚拿到房了拿过来的哪里哪里你发了哪里卡你发了弄好了发老客户烦恼弗兰克拿回来你领卡后那个离开你领卡哪里你的吉安市了煎得可氨基酸肯德基卡带来的</div>
               </div>
               <div class='content_item'>
                   <h2>这是一个文章的标题2</h2>
                   <div>z这是文章的打开两打两控的康复灵栓看了那个肯定国内分两个那地方了刚拿到房了刚拿到房了拿过来的哪里哪里你发了哪里卡你发了弄好了发老客户烦恼弗兰克拿回来你领卡后那个离开你领卡哪里你的吉安市了煎得可氨基酸肯德基卡带来的</div>
               </div>
               <div class='content_item'>
                   <h2>这是一个文章的标题3</h2>
                   <div>z这是文章的打开两打两控的康复灵栓看了那个肯定国内分两个那地方了刚拿到房了刚拿到房了拿过来的哪里哪里你发了哪里卡你发了弄好了发老客户烦恼弗兰克拿回来你领卡后那个离开你领卡哪里你的吉安市了煎得可氨基酸肯德基卡带来的</div>
               </div>
          </div>
          <div class="record">
               <div class="title"><a-icon type="sound" style="margin-right:10px" />和我说几句</div>
               <div class="connect_me">
                   <div class="connect_input">
                       <a-input placeholder="请输入您的姓名" class="connect_item"  size="large" />
                       <a-input placeholder="请输入您的邮箱号" class="connect_item"  size="large" />
                   </div>
                   <div class="connect_input mt20">
                      <a-textarea placeholder="请输入您要说的话" :rows="4" allow-clear maxlength='100' :autosize='false' v-model="remark"  @change="onChange"/>
                      <div class="word_input">{{allowInput}}/100</div>
                   </div>
                    <div id="frozen-btn">
                    <button class="purple">Hover me</button>
                </div>
               </div>
              
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
        seePicture:'',
        long33:0,
        gutterWidth:0,
        col:2,
        items:[
        ],
        remark:'',
        allowInput:0,
        menuClick:false
    };
  },
  
  created(){

  },
  mounted(){
      this.long=document.getElementById('photo').clientWidth/2
      this.long33 = document.getElementById('vueWaterfall').clientWidth/2
      this.padding =document.getElementById('photo').clientWidth/40
      window.onresize = () => {
        return (() => {
           this.long=document.getElementById('photo').clientWidth/2
           this.padding =document.getElementById('photo').clientWidth/2
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
    showMenu(){
      this.menuClick =!this.menuClick
    },
      showImg(img){
          this.seePicture=this.seePicture?'':img
      },
      onChange(e){
          console.log(e)
      },
      jumpShort(id,img){
          if(id==0){
              this.seePicture=this.seePicture?'':img
          }else{
              this.$router.push({path:'/pc/shortContent',param:{id:id}})
          }
      },
      jumpTo(url){
        this.$router.push({path:url})
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
  },

  watch:{
      remark(newVal){
          console.log(newVal)
          this.allowInput= newVal.length
      }
  },
};
</script>
<style lang="scss">
@import "index.scss";
</style>
