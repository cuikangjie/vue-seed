<template>
<div class="main">
    <div>
        <h1>Vue-Seed</h1>
        <h3>By kin</h3>
    </div>
    <div>
      <el-button @click='jump("/one")'>one</el-button>
      <el-button @click='jump("/two/123")'>two</el-button>

    </div>
    <router-view ></router-view>

</div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style>
.main {
    width: 800px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}
.main>div{
margin-bottom: 20px;
}
</style>
