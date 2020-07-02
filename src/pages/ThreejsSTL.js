import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
const STLLoader = require('three-stl-loader')(THREE)

function STL() {
  const wrapEle = useRef(null);
  const loader = new STLLoader()
  const scene = new THREE.Scene()
  const fileName = 'Menger_sponge_sample.stl'
  const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  camera.position.z = 1;

  useEffect(() => {
    loader.load(`/${fileName}`, function (geometry) {
      console.log(wrapEle)
      const material = new THREE.MeshNormalMaterial()
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      const renderer = new THREE.WebGLRenderer( { antialias: true } )
      renderer.setSize( window.innerWidth, window.innerHeight )
      wrapEle.current.appendChild( renderer.domElement )

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render( scene, camera )
    })
  }, [])

  return (
    <>
      <div id="tenten" ref={wrapEle} />
    </>
  )
}

export default STL
