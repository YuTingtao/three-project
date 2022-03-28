<template>
    <VueThree :sceneUrl="getPath() + sceneUrl" :modelUrl="getPath() + modelUrl"></VueThree>
</template>

<script>
import VueThree from '../components/vue-three/index.vue'

export default {
    components: { VueThree },
    data() {
        return {
            sceneUrl: '/img/pano.jpg',
            modelUrl: '/img/helicopter.gltf',
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
