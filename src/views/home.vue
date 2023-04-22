<template>
  <div class="vue_fabric">
    <!-- 侧边栏 -->
    <materialsCom />

    <!-- 画布 -->
    <canvanMainCom />

    <!-- 编辑栏 -->
    <editorCom />
  </div>
</template>
  
<script setup>
import materialsCom from "../components/materials/index.vue";
import editorCom from "../components/editor/index.vue";
import canvanMainCom from "../components/canvanMain/index.vue";
</script>
  
  
<style scoped lang="less">
.vue_fabric{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
  