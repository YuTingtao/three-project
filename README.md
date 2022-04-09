# three-project

## 介绍
Vue.js + three.js实现的3D场景、3D模型web端展示，支持场景、模型切换、是否自动旋转、展示区域是否铺满浏览器

## 使用案例
```
<template>
    <ThreeView class="three-box" :sceneUrl="sceneUrl" :modelUrl="modelUrl"></ThreeView>
</template>

<script>
import ThreeView from '../components/three/three-view.vue'

export default {
    components: { ThreeView },
    data() {
        return {
            sceneUrl: '/file/scene/mall.hdr',
            modelUrl: '/file/helicopter.gltf',
        }
    }
};
</script>
```

## 配置参数
```
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
```