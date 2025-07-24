<template>
  <ThreeView class="three-box" :sceneUrl="sceneUrl" :autoRotate="true"></ThreeView>
</template>

<script setup>
import { ref } from 'vue';
import ThreeView from '@/components/three/index.vue';

const sceneUrl = ref('./file/scene/house.jpg');
</script>

<style lang="scss" scoped>
.three-box {
  overflow: hidden;
}
</style>
