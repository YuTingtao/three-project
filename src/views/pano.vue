<template>
    <ThreePano :sceneUrl="getPath() + sceneUrl" :autoRotate="true"></ThreePano>
</template>

<script>
import ThreePano from '../components/three/three-pano.vue'

export default {
    components: { ThreePano },
    data() {
        return {
            sceneUrl: '/file/pano/pano.jpg',
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
