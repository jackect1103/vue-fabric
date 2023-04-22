<template>
  <div class="canvanMain">
    <canvas
    id="canvas"
    :width="canvasW"
    :height="canvasH"
    style="border: 1px solid #ccc"
  ></canvas>
  </div>
</template>

<script setup>
import { getCurrentInstance,onMounted,ref } from "vue";
import useInitFabric  from '@/hooks/useInitFabric'
const instance = getCurrentInstance()?.appContext.config.globalProperties
let canvasW = ref(window.innerWidth - 500)
let canvasH = ref(window.innerHeight - 50)

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
}
</style>