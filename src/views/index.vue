<template>
    <div class="three-container"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
    data() {
        return {
            scene: null, // 场景
            camera: null, // 摄像机
            renderer: null, // 渲染
        }
    },
    mounted() {
        this.init(this.$el);
        window.addEventListener('resize', this.handleResize);
    },
    methods: {
        // 初始化
        init(el) {
            // 场景
            this.scene = new THREE.Scene();
            // 相机
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
            this.camera.position.set(0, 0, 250);
            // 渲染器
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            el.appendChild(this.renderer.domElement);
            // 控制器
            const controls = new OrbitControls(this.camera, this.renderer.domElement);
			controls.enablePan = false; // 是否可平移
			controls.enableDamping = true; // 是否惯性滑动
            controls.rotateSpeed = 0.25;
            controls.zoomSpeed = 3;
            controls.maxDistance = 500;
            // 立方体
            const geometry = new THREE.BoxGeometry(1000, 1000, 1000);
            // 材质
            const material = new THREE.MeshNormalMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide
            });
            // 网格
            const mesh = new THREE.Mesh(geometry, material);
            this.scene.add(mesh);
            // 环境光
            let ambient = new THREE.AmbientLight(0xffffff);
            this.scene.add(ambient);
            // 渲染
            const render = () => {
                requestAnimationFrame(render);
                // mesh.rotation.y += 0.005;
                this.renderer.render(this.scene, this.camera);
			}
            render();
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
