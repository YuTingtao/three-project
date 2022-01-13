<template>
    <div class="three-container"></div>
</template>

<script>
import * as THREE from 'three';

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
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            el.appendChild(this.renderer.domElement);
            // 立方体
            const geometry = new THREE.BoxGeometry();
            const meshMaterial = new THREE.MeshBasicMaterial({color: 0x409EFF});
            const cube = new THREE.Mesh( geometry, meshMaterial );
            this.scene.add(cube);
            this.camera.position.set(0, 0, 4);
            this.camera.lookAt(0, 0, 0);
            // 旋转动画
            const animate = () => {
                requestAnimationFrame(animate);
                cube.rotation.y += 0.01;
                this.renderer.render(this.scene, this.camera);
            };
            animate();
        },
        // 响应窗口大小
        handleResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize( window.innerWidth, window.innerHeight );
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
};
</script>
