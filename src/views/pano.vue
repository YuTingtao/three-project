<template>
  <ThreeView :sceneUrl="sceneUrl" :autoRotate="true"></ThreeView>
</template>

<script setup>
import ThreeView from '@/components/three/index.vue';

const sceneUrl = ref('/public/file/scene/house.jpg');
</script>

<style lang="scss" scoped></style>
