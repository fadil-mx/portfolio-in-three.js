import { Float, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Targets = (props) => {
  const targetref = useRef();
  useGSAP(() => {
    gsap.to(targetref.current.position, {
      y: targetref.current.position.y + 1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  return (
    <mesh ref={targetref} {...props} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Targets;
