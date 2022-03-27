<template>
    <VueThree :textureUrl="getPath() + '/img/pano.jpg'"></VueThree>
</template>

<script>
import VueThree from '../components/vue-three/index.vue'

export default {
    components: { VueThree },
    data() {
        return {
            
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
