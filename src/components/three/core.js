/* eslint-disable no-console */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

export default class Three {
  constructor(el, options) {
    this.dom = el; // 插入的dom
    // 配置参数
    this.opt = {
      sceneUrl: '', // 场景url
      modelUrl: '', // 模型url
      autoRotate: false, // 是否自动旋转
      isFullBrowser: true, // 生成的canvas是否铺满浏览器
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
    // 加载场景
    if (this.opt.sceneUrl) {
      this.loadScene(this.opt.sceneUrl);
    }
    // 加载模型
    if (this.opt.modelUrl) {
      this.loadModel(this.opt.modelUrl);
    }
    // 响应窗口大小改变
    if (this.opt.isFullBrowser) {
      window.addEventListener('resize', this.onWindowResize.bind(this));
    }
  }
  // 场景初始化
  sceneInit() {
    this.scene = new THREE.Scene();
    // 环境光
    let ambient = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambient);
  }
  // 相机初始化
  cameraInit() {
    this.camera = new THREE.PerspectiveCamera(
      70, // 摄像机视锥体垂直视野角度
      this.getWidth() / this.getHeight(), // 摄像机视锥体长宽比
      0.01, // 摄像机视锥体近端面
      2000 // 摄像机视锥体远端面
    );
    this.camera.position.set(0, 0, 1.8);
  }
  // 渲染器初始化
  renderInit() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true, // 抗锯齿
      alpha: true // canvas是否包含alpha
    });
    this.renderer.setSize(this.getWidth(), this.getHeight());
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
    this.controlsRotate(this.opt.autoRotate);
    this.controls.update();
  }
  // 控制器旋转
  controlsRotate(autoRotate) {
    this.controls.autoRotate = autoRotate || false;
    if (autoRotate) {
      // 停止操作3s后继续自动转动
      let timer = null;
      this.controls.addEventListener('start', () => {
        if (timer) {
          clearTimeout(timer);
        }
        this.controls.autoRotate = false;
      });
      this.controls.addEventListener('end', () => {
        timer = setTimeout(() => {
          this.controls.autoRotate = true;
          this.controls.update();
        }, 3000);
      });
    }
  }
  // 动画渲染
  animate() {
    requestAnimationFrame(() => {
      this.animate();
    });
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
  // 加载场景
  loadScene(url) {
    if (/\.hdr$/i.test(url)) {
      new RGBELoader().load(url, texture => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        this.scene.background = texture;
        this.scene.environment = texture;
      });
    } else if (/\.(jpg|jpeg|png|gif|bmp)$/i.test(url)) {
      new THREE.TextureLoader().load(url, texture => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        this.scene.background = texture;
        this.scene.environment = texture;
      });
    }
  }
  // 加载模型
  loadModel(url) {
    if (/\.(gltf|glb)$/i.test(url)) {
      // GLTF模型加载
      new GLTFLoader().load(
        url,
        gltf => {
          if (this.model) {
            this.scene.remove(this.model);
          }
          let model = gltf.scene;
          this.adjustModel(model);
          this.model = model;
          this.scene.add(this.model);
        },
        xhr => {
          // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        error => {
          console.error('模型加载失败:', error);
        }
      );
    } else if (/\.obj$/i.test(url)) {
      // OBJ模型加载
      new OBJLoader().load(
        url,
        obj => {
          if (this.model) {
            this.scene.remove(this.model);
          }
          this.adjustModel(obj);
          this.model = obj;
          this.scene.add(this.model);
        },
        xhr => {
          // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        error => {
          console.error('模型加载失败:', error);
        }
      );
    } else if (/\.fbx$/i.test(url)) {
      // FBX模型加载
      new FBXLoader().load(
        url,
        obj => {
          if (this.model) {
            this.scene.remove(this.model);
          }
          this.adjustModel(obj);
          this.model = obj;
          this.scene.add(this.model);
        },
        xhr => {
          // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        error => {
          console.error('模型加载失败:', error);
        }
      );
    }
  }
  // 根据模型调整相机position
  adjustModel(model) {
    // model.updateMatrixWorld();
    let box3 = new THREE.Box3().setFromObject(model);
    let vector3 = new THREE.Vector3();
    box3.getSize(vector3);
    model.position.y = vector3.y / 12;
    let distance = (vector3.x + vector3.y + vector3.z) / 3;
    this.camera.position.set(0, 0, distance);
    this.camera.updateProjectionMatrix();
  }
  // 响应窗口大小
  onWindowResize() {
    this.camera.aspect = this.getWidth() / this.getHeight();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.getWidth(), this.getHeight());
  }
  // 获取宽度
  getWidth() {
    return this.opt.isFullBrowser ? window.innerWidth : this.dom.offsetWidth;
  }
  // 获取高度
  getHeight() {
    return this.opt.isFullBrowser ? window.innerHeight : this.dom.offsetHeight;
  }
}
