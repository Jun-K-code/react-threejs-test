import { useEffect } from 'react';
import * as THREE from 'three';

import './App.css';

function App() {
  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      45, // 视角（数值越大，视野也就越大，看到的东西就越多）
      window.innerWidth / window.innerHeight, // 相机的宽高比
      0.1, // 近平面（相机 最近 能看到的物体是什么）
      1000 // 远平面（相机 最远 能看到的物体是什么）
    );

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染尺寸的大小
    document.body.appendChild(renderer.domElement);

    // 创建几何体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // 创建材质
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // 创建网格（就是创建物体）
    const cube = new THREE.Mesh(geometry, material);

    // 将网格添加到场景中
    scene.add(cube);

    // 设置相机位置
    // 设置Z轴为5（Z轴就是正对我们的轴，横向轴是X轴，垂直轴是Y轴）
    camera.position.z = 5;
    camera.lookAt(0, 0, 0); // 默认看向原点，这里不设置也可以

    // 渲染函数
    function animate() {
      requestAnimationFrame(animate);
      // 旋转
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      // 渲染
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return <div className="App"></div>;
}
export default App;
