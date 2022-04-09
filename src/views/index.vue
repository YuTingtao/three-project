<template>
    <ThreeView class="three-box" :sceneUrl="sceneUrl" :modelUrl="modelUrl"></ThreeView>
</template>

<script>
import ThreeView from '../components/three/three-view.vue'

export default {
    components: { ThreeView },
    data() {
        return {
            sceneUrl: 'file/scene/mall.hdr',
            modelUrl: 'file/helicopter.gltf',
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
