<template>
  <div class="pcIndex" >
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
                <li @click="jumpTo('/pc/shortContent')">
                    瞎BB
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li>
                <!-- <li @click="jumpTo('/pc/content')">
                    文章
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li> -->
                <li @click="jumpTo('/pc/images')">
                    图集
                    <div class="line_area">
                        <div class="line_bar">
                            <div class="line_scoss"></div>
                            <div class="line_ciclr"></div>
                            <div class="line_scoss"></div>
                        </div>
                    </div>
                </li>
                <li @click="jumpTo('/pc/lab')">
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
                        <img class="photo_img" :src="`${item.image}`" preview="1"></img>
                    </div>
                </div>
            </div>
           <div class="record">
               <div class="title"> <a-icon type="edit" style="margin-right:10px" />最近瞎BB</div> 
                <div>
                    <waterfall :col='col' :width="long33" :gutterWidth="gutterWidth"  :data="items"  >
                        <template >
                            <div class="cell-item" v-for="(item,index) in items" :key="index+'short'" >
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
                                        <img class="itemhover" :preview-text="item.shortContent" v-lazy="`${item.image}`" :preview="index+'bottom'"  alt="" srcset="" style="width:100%">
                                        
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
           <!-- <div class="photo">
               <div class="title"> <a-icon type="snippets" style="margin-right:10px" />最新文章</div> 
               <div class='content_item' v-for="(item,index) in words" :key="index+'words'">
                   <h2>{{item.title}}</h2>
                   <div>{{item.content}}</div>
               </div>
          </div> -->
          <div class="photo">
               <div class="title"><a-icon type="sound" style="margin-right:10px" />和我说几句</div>
               <div class="connect_me">
                   <div class="connect_input">
                       <a-input placeholder="请输入您的姓名" :maxLength="10"  v-model="name"  class="connect_item"  size="large" />
                       <a-input placeholder="请输入您的手机号码或者邮箱号码" :maxLength="30" v-model="connect" class="connect_item"  size="large" />
                   </div>
                   <div class="connect_input mt20">
                      <a-textarea placeholder="请输入您要说的话" :rows="4" allow-clear :maxLength='100' :autoSize='false' v-model="remake"  />
                      <div class="word_input">{{allowInput}}/100</div>
                   </div>
                    <div id="frozen-btn" @click="submit">
                    <button class="purple">发送</button>
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
        col:4,
        jum1:'1',
        name:'',
        connect:'',
        remake:'',
        items:[
        ],
        remark:'',
        allowInput:0,
        words:[]
    };
  },
  
  created(){
    //   if(window.localStorage.getItem('jum1')){
    //     //   location.reload();
          
    //     //   window.localStorage.setItem('jum1','')
    //   }else{
    //       this.jum1 = ''
    //   }

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
      this.getRecentWords()
  },
  methods: {
      showImg(img){
          this.seePicture=this.seePicture?'':img
      },
      onChange(e){
          console.log(e)
      },
      jumpShort(id,img){
          console.log(id)
          if(id==0){
              this.seePicture=this.seePicture?'':img
          }else{
              this.$router.push({path:'/pc/shortContent',query:{id:id}})
          }
      },
      getRecentWords(){
           window.$utill.api.getRecentWords().then(res => {
         this.words = res.data
      })
      .catch(res => {
      })
      },
      jumpTo(url){
        this.$router.push({path:url})
      },
      submit(){
        if(!this.name){
            this.$message.warning('请告诉我你的名字！');
            return false
        }
        if(!this.connect){
            this.$message.warning('请告诉我你的联系方式！');
            return false
        }
        if(!this.remake){
            this.$message.warning('听不清，请写内容');
            return false
        }
   
        if(!(/^1(3|4|5|6|7|8|9)\d{9}$/g.test(this.connect))){ 
             if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.connect))){
                this.$message.warning("请告诉我正确的邮箱号码");  
                return false
            }else if((/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.connect))){

            } else {
                this.$message.warning("请告诉我正确手机号码");  
                return false 
            }
            
        }
       
       let data ={
           name:this.name,
           connect:this.connect,
           remake:this.remake
       }
        window.$utill.api.addConnect(data).then(res => {
        
        if(res.code==0){
            this.name = ''
            this.remake = ''
            this.connect = ''
            this.$notification.success({
                message: '温馨提示',
                description:'Wow,感谢您的留言！',
                duration:3
            })
        }
      })
      .catch(res => {
      })
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
      remake(newVal){          
          this.allowInput= newVal.length
      }
  },
};
</script>
<style lang="scss">
@import "index.scss";
</style>
