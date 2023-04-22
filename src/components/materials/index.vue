<template>
  <div class="materials">
    <div v-for="item,index in 5" :key="index">
      <img class="item" src="../../assets/vue.svg" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let materialsList = ref([])
</script>

<style lang="less">
.materials{
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #fff;
  .item{
    flex: 1;
    width: 100%;
    height: 100px;
    margin: 10px 5px;
    cursor: pointer;
  }
}
</style>