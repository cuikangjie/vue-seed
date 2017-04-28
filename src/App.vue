<template>
<div id="app">
    <el-row :gutter='10'>
        <el-col :span="18">
            <div class="grid-content bg-purple-dark">123</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-dark">123</div>
        </el-col>
    </el-row>

</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {

        }
    }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 1200px;
    margin: 0 auto;
    min-width: 1000px;
}
.grid-content{
  background: red;
}
</style>
