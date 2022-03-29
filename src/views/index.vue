<template>
    <ThreeView :sceneUrl="getPath() + sceneUrl" :modelUrl="getPath() + modelUrl"></ThreeView>
</template>

<script>
import ThreeView from '../components/three/three-view.vue'

export default {
    components: { ThreeView },
    data() {
        return {
            sceneUrl: '/file/scene/house.jpg',
            modelUrl: '/file/helicopter.gltf'
        }
    },
    methods: {
        getPath() {
            return /github/gi.test(location.hostname)? '/three-project/dist' : '';
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
