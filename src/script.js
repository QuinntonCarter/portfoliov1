import "./style.css";
// use to set marquees to from size based on screen width **
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  //   scrollPosition: window.scrollY,
};
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  console.log("sizes", sizes);
  //   // Update camera
  //   camera.aspect = sizes.width / sizes.height;
  //   camera.updateProjectionMatrix();

  //   // Update renderer
  //   renderer.setSize(sizes.width, sizes.height);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// window.addEventListener("scroll", () => {
//   sizes.scrollPosition = window.scrollY;
// });
// import * as THREE from "three";

// const canvas = document.querySelector("canvas.webGL");

// const scene = new THREE.Scene();

// // window resize watch
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// const camera = new THREE.PerspectiveCamera(
//   35,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
// const cameraGroup = new THREE.Group();
// cameraGroup.add(camera);
// scene.add(cameraGroup);

// const renderer = new THREE.WebGLRenderer({
//   canvas,
//   alpha: true,
// });

// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// //  particles
// const particleCount = 200;
// const objectsDistance = 2;
// // positions * 3 for xyz positions
// const particlePositions = new Float32Array(particleCount * 3);
// const colorsSelect = [
//   "#ffa8cf",
//   "#a6162b",
//   "#00b9e3",
//   "#006bd6",
//   "#ffaa00",
//   "#ff3c19",
// ];

// const getColor = () => {
//   let i = Math.round(Math.random() * 5);
//   return colorsSelect[i].toString();
// };
// // changes properties for each particle
// for (let i = 0; i < particleCount; i++) {
//   const i3 = i * 3;
//   particlePositions[i3 + 0] = (Math.random() - 0.5) * 10;
//   // influences position (spread) of particles on y axis (up and down)
//   particlePositions[i3 + 1] =
//     objectsDistance * 0.4 - Math.random() * objectsDistance;
//   particlePositions[i3 + 2] = (Math.random() - 0.5) * 10;
// }
// // geometry for particles
// const particlesGeometry = new THREE.BufferGeometry();
// particlesGeometry.setAttribute(
//   "position",
//   new THREE.BufferAttribute(particlePositions, 3)
// );
// const particleGroup = new THREE.Group();
// const groupDistance = 2;
// particleGroup.position.y = groupDistance * 0;
// scene.add(particleGroup);

// // material properties
// const particlesMaterial = new THREE.PointsMaterial({
//   color: getColor(),
//   sizeAttenuation: true,
//   size: 0.03,
// });

// const particles = new THREE.Points(particlesGeometry, particlesMaterial);
// scene.add(particles);

// window.addEventListener("resize", () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// const cursor = {
//   x: 0,
//   y: 0,
// };

// window.addEventListener("mousemove", (e) => {
//   cursor.x = e.clientX / sizes.width - 0.5;
//   cursor.y = e.clientY / sizes.height - 0.5;
// });

// const clock = new THREE.Clock();

// const tick = () => {
//   const deltaTime = clock.getDelta();

//   camera.position.y = (-scrollY / sizes.height) * objectsDistance;

//   const parallaxX = cursor.x;
//   const parallaxY = -cursor.y;
//   particleGroup.position.x +=
//     (parallaxX - particleGroup.position.x) * 0.05 * deltaTime;
//   particleGroup.position.y +=
//     (parallaxY - particleGroup.position.y) * 0.05 * deltaTime;

//   renderer.render(scene, camera);

//   // Call tick again on the next frame
//   window.requestAnimationFrame(tick);
// };
// tick();
