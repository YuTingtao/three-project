<template>
  <div class="three3d-view">
    <div ref="threeRef" class="three3d-view-main"></div>
    <slot v-if="instance?.loading" name="loading" :percent="loadPercent">
      <div class="three3d-view-loading">加载中{{ loadPercent }}%...</div>
    </slot>
  </div>
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

const emit = defineEmits(['onProgress', 'onLoaded']);

const threeRef = ref();
const instance = ref();

const loadPercent = ref(0);
function onProgress(percent, obj) {
  loadPercent.value = percent;
  emit('onProgress', percent, obj);
}

// 初始化
function initThree3dView() {
  instance.value = new Three3dView(threeRef.value, {
    sceneUrl: props.sceneUrl,
    modelUrl: props.modelUrl,
    autoRotate: props.autoRotate,
    onProgress: onProgress,
    onLoaded: (model) => emit('onLoaded', model)
  });
}

onMounted(() => {
  initThree3dView();
});

// 监听属性变化
watch(
  () => props.sceneUrl,
  (val) => {
    instance.value?.loadScene(val);
  }
);

watch(
  () => props.modelUrl,
  (val) => {
    instance.value?.loadModel(val);
  }
);

watch(
  () => props.autoRotate,
  (val) => {
    instance.value?.controlsRotate(val);
  }
);
</script>

<style lang="scss">
.three3d-view {
  position: relative;
  width: 100%;
  height: 100%;
}
.three3d-view-main {
  width: 100%;
  height: 100%;
  cursor: grab;
}
.three3d-view-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #409eff;
  font-size: 14px;
}
</style>
