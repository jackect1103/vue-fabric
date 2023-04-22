<template>
  <div class="canvanMain">
    <div class="operation">
      <p>
        <span>画布大小：</span>
        <a-input v-model:value="value" placeholder="Basic usage" />
        <a-input v-model:value="value" placeholder="Basic usage" />
      </p>
    </div>
    <canvas
    id="canvas"
    :width="canvasW"
    :height="canvasH"
    style="border-radius: 5px;"
  ></canvas>
  </div>
</template>

<script setup>
import { getCurrentInstance,onMounted,ref } from "vue";
import useInitFabric  from '@/hooks/useInitFabric'
const instance = getCurrentInstance()?.appContext.config.globalProperties
let canvasW = ref(window.innerWidth - 500)
let canvasH = ref(window.innerHeight - 80)

onMounted(() => {
  const {canvas} = useInitFabric()
  instance.$canvas = canvas
  console.log('canvanMain',instance);

})
</script>

<style lang="less">
.canvanMain{
    width: calc(100vw -(350+250));
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
    .operation{
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      padding: 0 10px;
      box-sizing: border-box;
      margin-bottom: 10px;
    }
}
</style>