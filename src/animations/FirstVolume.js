import * as THREE from 'three';
import {FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import {TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
  
export default async function Volume(){

    const scene = new THREE.Scene();
  scene.background = null;
  
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true; // Enable shadows in the renderer
  
  document.querySelector(".volume").appendChild(renderer.domElement);
  
  // Create a loader for the font
  const fontLoader = new FontLoader();
  
  // Load a font and create a TextGeometry
  const font = await fontLoader.loadAsync('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json');
  const textGeometry = new TextGeometry('riolab', {
    font: font,
    size: 3.5,
    height: 0.2,
    curveSegments: 100,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelOffset: 0,
    bevelSegments: 5
  });
  
  const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }); // Set text color to white and reduce roughness
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-2, 0, -2); // Adjust position as needed
  textMesh.castShadow = true; // Enable shadows for the text mesh
  
  scene.add(textMesh);
  
  // Add a directional light to create shadows
  const light = new THREE.DirectionalLight(0xffffff, 2); // Increase light intensity
  light.position.set(1, 1, 1);
  light.castShadow = true; // Enable shadows for this light
  scene.add(light);

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0x404040, 2); // soft white light
  scene.add(ambientLight);
  
  // Adjust the camera position
  camera.position.z = 5;
  
  function animate() {
    requestAnimationFrame(animate);
  
    textMesh.rotation.x += 0.0001;
    textMesh.rotation.y += 0.0001;
  
    renderer.render(scene, camera);
  }
  
  animate();
}