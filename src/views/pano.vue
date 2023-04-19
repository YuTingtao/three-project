<template>
  <ThreeView :sceneUrl="sceneUrl" :autoRotate="true"></ThreeView>
</template>

<script>
import ThreeView from '../components/three/three-view.vue'

export default {
  components: { ThreeView },
  data() {
    return {
      sceneUrl: 'file/scene/house.jpg'
    }
  }
}
</script>

<style lang="scss" scoped></style>
