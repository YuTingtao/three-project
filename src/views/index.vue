<template>
    <ThreeModel :sceneUrl="getPath() + sceneUrl" :modelUrl="getPath() + modelUrl"></ThreeModel>
</template>

<script>
import ThreeModel from '../components/three/three-model.vue'

export default {
    components: { ThreeModel },
    data() {
        return {
            sceneUrl: '/img/pano.jpg',
            modelUrl: '/file/helicopter.gltf',
        }
    },
    methods: {
        getPath() {
            return /github/gi.test(location.hostname)? '/three-project/dist' : '';
        }
    }
};
</script>

<style lang="scss">
html, body {
    height: 100%;
}
</style>
