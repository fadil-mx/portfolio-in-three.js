import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { easing } from "maath";
const Herocamera = ({ children, mobile }) => {
  const groupref = useRef();

  useFrame((state, delta) => {
    if (!mobile) {
      easing.dampE(
        groupref.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.025,
        delta
      );
    }
  });

  return <group ref={groupref}>{children}</group>;
};

export default Herocamera;
