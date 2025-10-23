<template>
  <div class="page-three">
    <Three3dView :sceneUrl="sceneUrl" :modelUrl="modelUrl" @onProgress="onProgress" @onLoaded="onLoaded"></Three3dView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Three3dView from '@/components/three3dView/index.vue';

const baseUrl = import.meta.env.BASE_URL === '/' ? '.' : import.meta.env.BASE_URL;
// const sceneUrl = ref(baseUrl + '/file/scene/mall.hdr');
const modelUrl = ref(baseUrl + '/file/model/helmet.glb');

// 加载进度
function onProgress(percent, obj) {
  // console.log(percent, obj);
}

// 加载完成
function onLoaded(model) {
  console.log(model);
}
</script>

<style lang="scss" scoped>
.page-three {
  height: 100%;
  overflow: hidden;
}
</style>
