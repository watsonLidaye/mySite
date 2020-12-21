<template>
  <div class="pcShortContent">
    <a-spin :spinning="loading">
    <div class="ss-header">

    </div>
      <div class="bg_plate ">
        <div class="left_plate">
          <div class="shortConteent_content" :ref="'list'+item.shortContentId" v-for="(item,index) in items" >
            <div class="ss_conntent_header">
              <div class="ss_content_detail">
                {{item.shortContent}}
              </div>
             
            </div>
             <div class="ss_content_main">
                <div class="ss_content_img" v-if="showIndex!==index">
                  <img  v-lazy="`${item.image}`"   alt="">
                </div>
                <div class="ss_content_detail_center" v-if="showIndex==index&&shortContentId==0">
                  <img    v-lazy="`${item.image}`" alt="">
                </div>
                <div class="ss_content_detail_center" v-if="showIndex==index&&shortContentId!=0">
                  <div v-for="(items,index) in detail" >
                    <img :preview="index+'ss_pc'" v-lazy="`${path}${items.content}`"  alt="" v-if="items.type=='image'">
                    <div class="ss_content_detail_text" v-if="items.type!=='image'">
                      {{items.content}}
                    </div>
                  </div>
                </div>
                 <div class="ss_content_showDetail" v-if="showIndex==index" @click="getShortDetail(item.shortContentId,index)">
                  <div class="ss_showmore">
                    收起来
                      <a-icon type="up" />
                    </div>
                </div>
                <div class="ss_content_showDetail" v-if="showIndex!==index" @click="getShortDetail(item.shortContentId,index)">
                  <div class="ss_showmore">
                    查看更多
                      <a-icon type="down" />
                    </div>
                </div>
             </div>
             <div class="ss_content_bottom">
               <div class="like" @click="addLike(index)">
                <a-icon type="like" />
                <span style="padding:0 6px">喜欢</span>  
                <span class="ss_number"> {{item.isLike}}</span>
                <div class="ss_add_one" :class="active==index?'showAct':''">+1</div>
               </div>
             </div>
          </div>
        </div>
        <div class="right_plate">
          <div class="right_plate_title"> 
            短文分类
          </div>
            <ul>
              <li   @click="clickMenu(-1)" :class="actIndex==-1?'act_hover':''">
                 全部({{totall}})
              </li>
              <li v-for="(item,index) in cateList"  @click="clickMenu(item.id,index)" :class="actIndex==index?'act_hover':''">
                  {{item.shortName}}({{item.count}})
              </li>
            </ul>
        </div>
      </div>
    </a-spin>
    <div class="backTop" v-show="gotop" @click="toTop">
      <a-icon type="vertical-align-top" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {  
    return {  
      show:false,
      items:[],
      active:-1,
      path:'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/',
      showAdd:false,
      showIndex:-1,
      detail:[],
      shortContentId:-1,
      cateList:[],
      loading:false,
      totall:0,
      actIndex:-1,
      id:0,
      gotop:false
    };
  },
  created(){
    this.show = true
  },
  destroyed(){
    this.show = false
    window.localStorage.setItem('jum1', '1')
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted(){
    console.log(this.$route.query.id)
    if(this.$route.query.id){
      // this.getShortDetail()
      this.getShortContent(this.$route.query.id) 
    }else{
      this.getShortContent() 
    }
     this.getCateList()
      window.addEventListener("scroll", this.handleScroll, true);
      
  },
  methods: {
    handleScroll(e){
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.gotop = true
      } else {
        that.gotop = false
      }

    },
     toTop() {
      
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    addLike(index){
      this.active = index
      console.log(index)
      console.log(this.items[index].id)
      this.items[index].isLike=(Number(this.items[index].isLike)+1).toString()
      console.log(Number(this.items[index].isLike))
      let data = {
        id:this.items[index].id,
        number:this.items[index].isLike
      }

      window.$utill.api.updateLike(data).then(res => {
        })
        .catch(res => {
        })
      setTimeout(()=>{
        this.active=-1
      },500)
    },
    getShortDetail(id,index){
      if(index==this.showIndex){
        this.showIndex = -1
        this.shortContentId=-1
        return
      }
      this.showIndex=index
      this.shortContentId = id
      let data = {id:''}
      data.id = id
      if(id==0){
        return false
      }
      console.log(data)
      window.$utill.api.getShortDetail(data).then(res => {
        this.detail = res.data
        console.log( this.$refs[`list${id}`][0].offsetTop)
        window.scrollTo(0,this.$refs[`list${id}`][0].offsetTop);
      })
      .catch(res => {
        console.log(res)
      })
    },
    getShortContent(id){
      this.loading= true
      window.$utill.api.getShortContent().then(res => {
         this.items = res.data
         this.loading= false
         
         if(id){
           let indexs =0
           this.items.forEach((item,index)=>{
             if(item.shortContentId == id){
               indexs = index
             }
           })
           this.getShortDetail(id,indexs)
         }
      })
      .catch(res => {
      })
    },
    getCateList(){
       window.$utill.api.getCateList().then(res => {
        this.cateList = res.data
        this.cateList.forEach(item=>{
          this.totall+= item.count
        })
        
      })
      .catch(res => {
      })
    },
    clickMenu(id,index){
      console.log(id)
      console.log(index)
      this.id = id
      if(id==-1){
        this.actIndex = -1
        this.getShortContent()
      }else{
        this.actIndex = index
        let data = {id:''}
        data.id = id
        this.items=[]
        this.loading= true
        window.$utill.api.getShortContent(data).then(res => {
          this.items = res.data
          this.loading= false
        })
        .catch(res => {
        })
      }
     
    }
  }
};
</script>
<style lang="scss">
@import "index.scss";
</style>
