<template>
<a-layout-sider v-model="collapsed" >
	   <div  class="logo">
		   <a-icon type="appstore" />
		   {{!collapsed?'社交电商后台管理系统':''}}
		</div>
        <a-menu theme="dark" :selectedKeys="[keyValue]" mode="inline" @click="menuItemClick">
            <template v-for="(item,index) in menu" >
                <a-sub-menu :key="index+'sub'" v-if="item.children&&item.meta.show">
                    <span slot="title">
                        <a-icon :type="item.meta.icon" />
                        <span>{{item.meta.title}}</span>
                    </span>
                    <template  v-for="citem in item.children" >
                        <a-menu-item :key="citem.name" v-if="citem.meta.show"  >
                        <a-icon :type="citem.meta.icon" />
                        {{citem.meta.title}}
                    </a-menu-item>
                    </template>
                </a-sub-menu>
                <a-menu-item :key="item.name" v-if="!item.children&&item.meta.show">
                    <a-icon :type="item.meta.icon" />
                    <span>{{item.meta.title}}</span>
                </a-menu-item>
            </template>
        </a-menu>
      </a-layout-sider>
</template>
<script>
import { Component , Vue , Watch,Prop  } from 'vue-property-decorator'

@Component({})
export default class Slider extends Vue {
    @Prop(Boolean) collapsed
    keyValue = ''
    mounted() {
        this.keyValue=this.$route.name
    }
    get menu(){
        return this.$router.options.routes[1].children
    }
    menuItemClick(e){
        if(this.$route.name !=e.key) this.$router.replace({name:e.key})
    }
    @Watch('$route') //watch监听
    onChangeValue(newVal) {
        this.keyValue =newVal.name
    }
}
</script>

<style lang="scss">

</style>
