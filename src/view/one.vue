<template>
<div>
    {{msg}}{{ time | DateFormat('yyyy-MM-dd')}}
    <div>
        <el-input v-model='data' :size='"small"' placeholder="请添加内容">></el-input>
        <el-button @click='click'>添加</el-button>
        <div>
            <el-button v-for='(item,index) in lists' :key='index'>{{item}}</el-button>

        </div>
    </div>

</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            msg: 'this is One !',
            data: '',
            time: new Date().getTime()
        }
    },
    computed: Object.assign({},
        mapGetters(['lists'])
    ),
    methods: Object.assign({},
        mapActions(['addOne']),
        {
          click() {
            this.addOne(this.data)
            this.data = '';
        }
      }
    ),

}
</script>

<style>

</style>
