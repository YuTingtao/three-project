<template>
  <div ref="threeRef" class="threejs-container"></div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Three3dView from './three3dView.js';

defineOptions({
  name: 'Three3dView'
});

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
  }
});

const threeRef = ref();
const three3dView = ref();

// 初始化
function initThree3dView() {
  three3dView.value = new Three3dView(threeRef.value, {
    sceneUrl: props.sceneUrl,
    modelUrl: props.modelUrl,
    autoRotate: props.autoRotate
  });
}

onMounted(() => {
  initThree3dView();
});

// 监听属性变化
watch(
  () => props.sceneUrl,
  val => {
    if (three3dView.value) {
      three3dView.value.loadScene(val);
    }
  }
);

watch(
  () => props.modelUrl,
  val => {
    if (three3dView.value) {
      three3dView.value.loadModel(val);
    }
  }
);

watch(
  () => props.autoRotate,
  val => {
    if (three3dView.value) {
      three3dView.value.controlsRotate(val);
    }
  }
);
</script>

<style lang="scss">
.threejs-container {
  width: 100%;
  height: 100%;
  cursor: grab;
}
</style>
