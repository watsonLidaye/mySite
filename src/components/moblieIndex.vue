<template>
    <div>
        <div class="leftBars" :class="menuClick?'show_menu':'hide_menu'">
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
                    <!-- <li @click="jumpTo('/moblie/content')">
                        文章
                        <div class="line_area">
                        </div>
                        <div class="line_area2">
                        </div>
                    </li> -->
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
        <div class="headers">
            <div class="header_title">Watson.Li</div>
            <div @click="showMenu" >
            <a-icon type="menu" class="tran3" :class="menuClick?'tagggle':''" />
            </div>
        </div>
    </div>
</template>
<script>
import { Component , Vue , Watch,Prop  } from 'vue-property-decorator'

@Component({})
export default class Slider extends Vue {
    @Prop(Boolean) collapsed
    keyValue = ''
    menuClick=false
    mounted() {
        this.keyValue=this.$route.name
    }
    showMenu(){
      this.menuClick =!this.menuClick
    }
    jumpTo(url){
        this.$router.push({path:url})
    }
}
</script>

<style lang="scss">
.leftBars{
    position: fixed;
    left: 0;
    transition: all ease-in-out .4s;
    width: 100%;
    height: 7rem;
    z-index: 10;
    background: url('http://www.ergouzi.com.cn/images/normal/_MG_3957.jpg'); 
    .leftBar_inner{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.7);
        box-sizing: border-box;
        padding: .2rem;
    }
    .clear:after{
        content: '';
        display: block;
        clear: both;
    }
    .tagggle{
        transform: rotate(90deg);
    }
    .header_left{
        text-align: center;
        display: flex;
        padding-bottom: .5rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color:  rgba(255,255,255,.6);
        border-bottom: 1px solid rgba(255,255,255,.4);
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: #fff;
        text-align: right;
        padding-bottom: .18rem;
        font-size: .22rem;
        line-height: .24rem;
        border-bottom: 1rem solid rgba(255,255,255,.4);
}
    .left_img{
        width: 1.00rem;
        height: 1.00rem;
        border: .04rem solid rgba(255,255,255,.6);
        border-radius: 50%;
    }
    .left_menu{
        padding-top: .60rem;
        font-size: .34rem;
        color:  rgba(255,255,255,.6);
        text-align: center;
        li{
            padding: .06rem 0;
            transition: all ease .3s;
            position: relative;
            overflow: hidden;
        }

        .line_area{
            transition: all ease .3s;
            width: .28rem;
            height: .03rem;
            background: #fff;
            position: absolute;
            right: -.10rem;
            top: .34rem;
            bottom: 0;
        }
        .line_area2{
            transition: all ease .3s;
            width: .28rem;
            height: .03rem;
            background: #fff;
            position: absolute;
            left: -.10rem;
            top: .34rem;
            bottom: 0;
        }
    }
}
.tagggle{
    transform: rotate(90deg);
}
.show_menu{
    top: .98rem;
}
.tran3{
    transition: all ease-out .3s;
}
.hide_menu{
    top: -10.98rem;
}
</style>
