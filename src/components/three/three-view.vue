<template>
    <div class="threejs-container"></div>
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
        // 模型url
        modelUrl: {
            type: String
        },
        // 是否自动旋转
        autoRotate: {
            type: Boolean,
            default: false
        },
        // 生成的canvas是否铺满浏览器
        isFullBrowser: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            threeView: null
        }
    },
    watch: {
        sceneUrl(val) {
            this.threeView.loadScene(val);
        },
        modelUrl(val) {
            this.threeView.loadModel(val);
        },
        autoRotate(val) {
            this.threeView.controlsRotate(val);
        }
    },
    mounted() {
        this.threeView = new ThreeBase(this.$el, {
            sceneUrl: this.sceneUrl,
            modelUrl: this.modelUrl,
            autoRotate: this.autoRotate,
            isFullBrowser: this.isFullBrowser
        });
    }
};
</script>

<style lang="scss">
.threejs-container{
    width: 100%;
    height: 100%;
    cursor: grab;
}
</style>
