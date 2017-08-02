<template>
<div >
    {{msg}}
    <div>
      传入参数为：{{id}}

    </div>
    <div>
      <el-button v-for='(item,index) in lists' :key='index'>{{item}}</el-button>

    </div>

</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
      return {
        msg:'this is Two !',
        id:''
      }
    },
    computed:Object.assign({},
        mapGetters(['lists'])
    ),
    beforeRouteEnter(to,from,next){
      // console.log(to.params.id);
      next((vm)=>{
        vm.id = to.params.id;
      })
    },
    beforeRouteUpdate(to,from,next){
      // console.log(to.params.id);
      this.id = to.params.id;
      next();
    },
    beforeRouteLeave(to,from,next){
      alert('我要离开了');
      next();
    }
}
</script>

<style>

</style>
