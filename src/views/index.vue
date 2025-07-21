<template>
  <ThreeView class="three-box" :sceneUrl="sceneUrl" :modelUrl="modelUrl"></ThreeView>
</template>

<script setup>
import { ref } from 'vue';
import ThreeView from '../components/three/index.vue';

const sceneUrl = ref('/public/file/scene/mall.hdr');
const modelUrl = ref('/public/file/helmet.glb');
// const sceneUrl = ref('/public/file/scene/house.jpg');
// const modelUrl = ref('/public/file/helicopter.gltf');
</script>

<style lang="scss" scoped></style>
