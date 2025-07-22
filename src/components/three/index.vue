<template>
  <div ref="threeRef" class="threejs-container"></div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import ThreeCore from './core.js';

const props = defineProps({
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
  }
});

const threeRef = ref();
const threeCore = ref();

// 初始化ThreeCore
function initThreeCore() {
  threeCore.value = new ThreeCore(threeRef.value, {
    sceneUrl: props.sceneUrl,
    modelUrl: props.modelUrl,
    autoRotate: props.autoRotate,
    isFullBrowser: props.isFullBrowser
  });
}

onMounted(() => {
  // 初始化ThreeCore
  initThreeCore();
});

// 监听属性变化
watch(
  () => props.sceneUrl,
  val => {
    if (threeCore.value) {
      threeCore.value.loadScene(val);
    }
  }
);

watch(
  () => props.modelUrl,
  val => {
    if (threeCore.value) {
      threeCore.value.loadModel(val);
    }
  }
);

watch(
  () => props.autoRotate,
  val => {
    if (threeCore.value) {
      threeCore.value.controlsRotate(val);
    }
  }
);
</script>

<style lang="scss">
.threejs-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: grab;
}
</style>
