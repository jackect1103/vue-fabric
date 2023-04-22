<template>
  <div class="editor">
    editor
  </div>
</template>

<script setup>
import { getCurrentInstance,onMounted,ref } from "vue";
const instance = getCurrentInstance()?.appContext.config.globalProperties

onMounted(() => {
  console.log('editor',instance);

})
</script>

<style lang="less">
.editor{
  display: flex;
  width: 250px;
  height: 100vh;
  background-color: #fff;
}
</style>