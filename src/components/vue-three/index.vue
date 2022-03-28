<template>
    <div class="three-container"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
    },
    data() {
        return {
            scene: null, // 场景
            camera: null, // 摄像机
            renderer: null, // 渲染器
            textureLoader: null, // 纹理加载器
            gltfLoader: null, // gltf模型加载器
            model: null, // 模型
        }
    },
    mounted() {
        this.init(this.$el);
        window.addEventListener('resize', this.handleResize);
    },
    watch: {
        sceneUrl(val) {
            if (val) {
                this.loadTexture();
            }
        },
        modelUrl(val) {
            if (val) {
                this.loadModel();
            }
        }
    },
    methods: {
        // 初始化
        init(el) {
            // 场景
            this.scene = new THREE.Scene();
            // 加载场景纹理
            this.loadTexture();
            // 加载模型
            this.loadModel();
            // 环境光
            let ambient = new THREE.AmbientLight(0xffffff);
            this.scene.add(ambient);
            // 相机
            this.camera = new THREE.PerspectiveCamera(
                70, // 摄像机视锥体垂直视野角度
                window.innerWidth / window.innerHeight, // 摄像机视锥体长宽比
                1, // 摄像机视锥体近端面
                1000, // 摄像机视锥体远端面
            );
            this.camera.position.set(0, 0.1, 1.7);
            // 渲染器
            this.renderer = new THREE.WebGLRenderer({
                antialias: true, // 抗锯齿
            });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio);
            el.appendChild(this.renderer.domElement);
            // 控制器
            const controls = new OrbitControls(this.camera, this.renderer.domElement);
            controls.autoRotate = this.autoRotate; // 是否自动转动
            controls.autoRotateSpeed = 1.0; // 自动旋转速度
			controls.enableDamping = true; // 是否惯性滑动
            controls.dampingFactor = 0.2;
            controls.rotateSpeed = 0.25; // 手动旋转速度
            controls.enableKeys = true; // 是否启用键盘控制
            controls.keys = {
                LEFT: 37, //left arrow
                UP: 38, // up arrow
                RIGHT: 39, // right arrow
                BOTTOM: 40 // down arrow
            };
            // 停止操作2s后继续自动转动
            if (this.autoRotate) {
                let timer = null;
                controls.addEventListener('start', () => {
                    if (timer) {
                        clearTimeout(timer);
                    }
                    controls.autoRotate = false;
                })
                controls.addEventListener('end', () => {
                    timer = setTimeout(() => {
                        controls.autoRotate = true;
                    }, 2000);
                })
                controls.update();
            }
            // 动画渲染
            const animate = () => {
                requestAnimationFrame(animate);
                controls.update();
                this.renderer.render(this.scene, this.camera);
			}
            animate();
        },
        // 加载场景纹理
        loadTexture() {
            if (!this.textureLoader) {
                this.textureLoader = new THREE.TextureLoader();
            }
            let texture = this.textureLoader.load(this.sceneUrl);
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            this.scene.background = texture;
        },
        // 加载模型
        loadModel() {
            if (!this.gltfLoader) {
                this.gltfLoader = new GLTFLoader();
            }
            if (this.modelUrl) {
                this.gltfLoader.load(this.modelUrl, (gltf) => {
                    if (this.model) {
                        this.scene.remove(this.model);
                    }
                    this.model = gltf.scene;
                    this.scene.add(this.model);
                }, undefined, (error) => {
                    console.error('gltf模型加载失败：', error);
                });
            }
        },
        // 响应窗口大小
        handleResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
};
</script>

<style lang="scss">
.three-container{
    cursor: grab;
}
</style>
