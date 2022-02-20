import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export const initThreeApp = () => {

  let container
  let renderer
  let scene
  let camera
  let controls

  container = document.getElementById("container")
  const w = container.offsetWidth
  const h = container.offsetHeight
  console.log("[init]", { w, h })

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(w, h)
  container.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  camera = new THREE.PerspectiveCamera(34, w / h, 1, 100)
  camera.position.set(3, 3, 6)
  camera.lookAt(new THREE.Vector3(0, 0, 0))
  scene.add(camera)

  window.addEventListener("resize", () => {
    console.log("[resize]", { offsetWidth: container.offsetWidth, offsetHeight: container.offsetHeight })
    renderer.setSize(container.offsetWidth, container.offsetHeight)
    camera.aspect = container.offsetWidth / container.offsetHeight
    camera.updateProjectionMatrix()
  })

  controls = new OrbitControls(camera, renderer.domElement)
  controls.minDistance = 5.0
  controls.maxDistance = 40.0
  controls.enableDamping = true
  controls.dampingFactor = 0.9
  controls.autoRotate = true
  controls.autoRotateSpeed = 1.0

  const cubeGeometry = new THREE.BoxGeometry()
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x000080 })
  const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
  scene.add(cubeMesh)

  const animate = () => {
    window.requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  animate()
}
