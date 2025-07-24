<template>
  <ThreeView class="three-box" :sceneUrl="sceneUrl" :modelUrl="modelUrl"></ThreeView>
</template>

<script setup>
import { ref } from 'vue';
import ThreeView from '../components/three/index.vue';

const sceneUrl = ref('./file/scene/mall.hdr');
const modelUrl = ref('./file/helmet.glb');
// const modelUrl = ref('./file/helicopter.gltf');
</script>

<style lang="scss" scoped></style>
