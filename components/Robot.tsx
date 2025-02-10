"use client";

import { useEffect, useRef, useState } from "react";
import { useAnimations, useBounds } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function RobotModel() {
  const myModel = useLoader(GLTFLoader, "/robotmodel.glb");
  const modelRef = useRef<any>();
  const animations = myModel.animations;
  const { actions } = useAnimations(myModel.animations, modelRef);
  const [rotationOffset, setRotationOffset] = useState(0);
  const fixedRotation = Math.PI / -7;
  const bounds = useBounds();
  const [scale, setScale] = useState([40, 40, 40]);

  useEffect(() => {
    if (actions) {
      const action = actions["Take 001"];
      if (action) {
        action.timeScale = 0.6;
        action.play();
      }
    }
  }, [actions]);

  useEffect(() => {
    if (modelRef.current && bounds) {
      bounds.refresh(modelRef.current).fit();
    }
  }, [myModel, bounds]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const rotation = Math.sin(time) * 0.1; // Adjust the multiplier to control the rotation range
    const positionY = Math.sin(time * 0.1) * 0.1; // Adjust the multiplier to control the up-and-down range and speed
    setRotationOffset(rotation);
    if (modelRef.current) {
      modelRef.current.rotation.y = fixedRotation + rotationOffset; // Apply the fixed rotation and the rotation offset
      modelRef.current.position.y = positionY; // Apply the up-and-down position
    }
  });

  return (
    <primitive ref={modelRef} object={myModel.scene} scale={[40, 40, 40]} />
  );
}

function Robot() {
  return (
    <Canvas style={{ height: "100%", width: "100%" }}>
      <pointLight position={[-10, -10, -10]} color="#45ffe9" intensity={5000} />
      <pointLight position={[10, 10, 10]} color="#7d10b0" intensity={3000} />
      <RobotModel />
    </Canvas>
  );
}

export default Robot;
