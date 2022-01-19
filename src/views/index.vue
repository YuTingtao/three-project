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
            this.camera.position.set(0, 0, 0.01);
            // 渲染器
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
            });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            let pixelRatio = window.devicePixelRatio < 1.5 ? 1.5 : window.devicePixelRatio;
            this.renderer.setPixelRatio(pixelRatio);
            el.appendChild(this.renderer.domElement);
            // 控制器
            const controls = new OrbitControls(this.camera, this.renderer.domElement);
            controls.autoRotate = true; // 是否自动转动
            controls.autoRotateSpeed = 1.0;
			controls.enableDamping = true; // 是否惯性滑动
            controls.dampingFactor = 0.2;
            controls.rotateSpeed = 0.2;
            controls.enableZoom = true;
            // 停止操作2s后继续自动转动
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
            // 立方体
            const geometry = new THREE.BoxGeometry(50, 50, 50);
            geometry.scale(1, 1, -1); // 里外面反转
            // 加载贴图
            const texture = new THREE.CubeTextureLoader().setPath(this.getPath() + '/img/').load([
                'pano_l.jpg',
                'pano_r.jpg',
                'pano_d.jpg',
                'pano_u.jpg',
                'pano_f.jpg',
                'pano_b.jpg',
            ]);
            // 材质
            const material = new THREE.MeshPhongMaterial({
                envMap: texture, // 贴图
            });
            // 立方体网格
            const cube = new THREE.Mesh(geometry, material);
            this.scene.add(cube);
            // 环境光
            let ambient = new THREE.AmbientLight(0xffffff);
            this.scene.add(ambient);
            // 渲染
            const animate = () => {
                requestAnimationFrame(animate);
                controls.update();
                this.renderer.render(this.scene, this.camera);
			}
            animate();
        },
        // 响应窗口大小
        handleResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        },
        getPath() {
            return /github/gi.test(location.hostname)? '/three-project/dist' : '';
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
