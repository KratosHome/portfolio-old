import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const ComputersCanvas = () => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <div>
            
        </div>
    );
};

export default ComputersCanvas;