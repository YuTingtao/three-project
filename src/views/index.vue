<template>
  <Three3dView class="three-box" :sceneUrl="sceneUrl" :modelUrl="modelUrl"></Three3dView>
</template>

<script setup>
import { ref } from 'vue';
import Three3dView from '@/components/three3dView/index.vue';

const sceneUrl = ref('./file/scene/quarry.hdr');
const modelUrl = ref('./file/model/helmet.glb');
</script>

<style lang="scss" scoped>
.three-box {
  overflow: hidden;
}
</style>
