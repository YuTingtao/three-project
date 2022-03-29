<template>
    <div class="three-container"></div>
</template>

<script>
import ThreeBase from './three-base.js'

export default {
    props: {
        // 场景纹理url
        sceneUrl: {
            type: String,
            required: true
        },
        // 是否自动旋转
        autoRotate: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            threePano: null
        }
    },
    watch: {
        sceneUrl(val) {
            this.threePano.loadScene(val);
        }
    },
    mounted() {
        this.threePano = new ThreeBase(this.$el, {
            sceneUrl: this.sceneUrl,
            autoRotate: this.autoRotate
        });
    },
    beforeDestroy() {
        this.threePano.removeWindowResize();
    }
};
</script>

<style>
.three-container{
    width: 100%;
    height: 100%;
    cursor: grab;
}
</style>
