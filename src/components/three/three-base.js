import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default class ThreeBase {
    constructor(el, options) {
        this.dom = el; // 插入的dom
         // 配置参数
        this.opt = {
            sceneUrl: '', // 场景url
            modelUrl: '', // 模型url
            autoRotate: false, // 是否自动旋转
            ...options
        };
        this.scene = null; // 场景
        this.camera = null; // 摄像机
        this.renderer = null; // 渲染器
        this.controls = null; // 控制器
        this.model = null; // 模型
        this.init();
    }
    // 初始化
    init() {
        this.sceneInit();
        this.cameraInit();
        this.renderInit();
        this.controlsInit();
        this.animate();
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }
    // 场景初始化
    sceneInit() {
        this.scene = new THREE.Scene();
        // 环境光
        let ambient = new THREE.AmbientLight(0xffffff);
        this.scene.add(ambient);
        // 加载场景
        if (this.opt.sceneUrl) {
            this.loadScene(this.opt.sceneUrl);
        }
        // 加载模型
        if (this.opt.modelUrl) {
            this.loadModel(this.opt.modelUrl);
        }
    }
    // 加载场景
    loadScene(url) {
        let texture = new THREE.TextureLoader().load(url);
        texture.mapping = THREE.EquirectangularReflectionMapping;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        this.scene.background = texture;
    }
    // 加载模型
    loadModel(url) {
        if (/\.gltf$/i.test(url)) { // GLTF模型加载
            new GLTFLoader().load(url, (gltf) => {
                if (this.model) {
                    this.scene.remove(this.model);
                }
                this.model = gltf.scene;
                this.scene.add(this.model);
            }, (xhr) => {
                // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            }, (error) => {
                console.error('模型加载失败:', error);
            });
        } else if (/\.obj$/i.test(url)) { // OBJ模型加载
            new OBJLoader().load(url, (obj) => {
                if (this.model) {
                    this.scene.remove(this.model);
                }
                this.model = obj;
                this.scene.add(this.model);
            }, (xhr) => {
                // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            }, (error) => {
                console.error('模型加载失败:', error);
            });
        }
    }
    // 相机初始化
    cameraInit() {
        this.camera = new THREE.PerspectiveCamera(
            70, // 摄像机视锥体垂直视野角度
            window.innerWidth / window.innerHeight, // 摄像机视锥体长宽比
            0.01, // 摄像机视锥体近端面
            2000, // 摄像机视锥体远端面
        );
        this.camera.position.set(0, 0.05, 1.7);
    }
    // 渲染器初始化
    renderInit() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true, // 抗锯齿
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.dom.appendChild(this.renderer.domElement);
    }
    // 控制器初始化
    controlsInit() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.autoRotateSpeed = 1.0; // 自动旋转速度
        this.controls.autoRotate = this.autoRotate; // 是否自动转动
        this.controls.enableDamping = true; // 是否惯性滑动
        this.controls.dampingFactor = 0.2;
        this.controls.rotateSpeed = 0.25; // 手动旋转速度
        this.controls.update();
        // 自动转动
        if (this.opt.autoRotate) {
            this.controlsRotate();
        }
    }
    // 控制器旋转
    controlsRotate() {
        this.controls.autoRotate = true;
        let timer = null;
        this.controls.addEventListener('start', () => {
            if (timer) {
                clearTimeout(timer);
            }
            this.controls.autoRotate = false;
        })
        // 停止操作3s后继续自动转动
        this.controls.addEventListener('end', () => {
            timer = setTimeout(() => {
                this.controls.autoRotate = true;
            }, 3000);
        })
        this.controls.update();
    }
    // 动画渲染
    animate() {
        requestAnimationFrame(() => {
            this.animate();
        });
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
    // 响应窗口大小
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    // 移除windowResize事件监听
    removeWindowResize() {
        window.removeEventListener('resize', this.onWindowResize);
    }
}