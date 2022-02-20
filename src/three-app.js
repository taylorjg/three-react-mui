import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const threeApp = () => {

  let container
  let renderer
  let scene
  let camera
  let controls
  let cubeGeometry
  let cubeMaterial
  let cubeMesh

  const init = () => {
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
    camera.position.set(3, 3, 10)
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

    const cubeSize = 2.5
    cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
    cubeMaterial = new THREE.MeshBasicMaterial({ color: "blue" })
    cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cubeMesh)
  
    const animate = () => {
      window.requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
  
    animate()
  }

  const setCubeColour = color => {
    cubeMaterial.color = new THREE.Color(color)
  }

  const setAutoRotate = autoRotate => {
    controls.autoRotate = autoRotate
  }

  return {
    init,
    setCubeColour,
    setAutoRotate
  }
}

export default threeApp
