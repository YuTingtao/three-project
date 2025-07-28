# 介绍

Vue3 + ThreeJS 3D模型加载

## 包管理工具pnpm

pnpm i  
pnpm run dev  
pnpm run build

## 配置参数

```
  sceneUrl: '', // 场景url
  modelUrl: '', // 模型url
  autoRotate: false, // 是否自动旋转
  debounceDelay: 100, // 防抖延迟时间
```

## 方法

```
  loadScene(url) // 加载场景
  loadModel(url) // 加载模型
  controlsRotate(boolean) // 是否自动旋转
```
