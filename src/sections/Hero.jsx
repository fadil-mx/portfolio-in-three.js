import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Ring } from "@react-three/drei";
import Hackerroom from "../components/Hackerroom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
import Targets from "../components/Targets";
import Reactlogo from "../components/reactlogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import Herocamera from "../components/Herocamera";
import Button from "../components/Button";

const Hero = () => {
  // const x = useControls("HAckerroom", {
  //   positionx: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positiony: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionz: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationx: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationy: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationz: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 2,
  //   },
  // });
  const mobile = useMediaQuery({ maxWidth: 768 });
  const tablet = useMediaQuery({ maxWidth: 1024 });
  const small = useMediaQuery({ maxWidth: 440 });
  const sizes = calculateSizes(mobile, tablet, small);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full max-auto flex flex-col sm:mt-36 mt-[180px]  c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans ">
          Hi, I am FADIL<span className="waving-hand">✋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className=" w-full h-full absolute inset-0 ">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 10, 50]} />
            <Herocamera mobile={mobile}>
              <Hackerroom
                scale={mobile ? 0.1 : 0.16}
                position={mobile ? [1, 0, 2] : [2, -4, 2]}
                rotation={[0, -Math.PI, 0]}
              />
            </Herocamera>

            <group>
              <Targets position={sizes.targetPosition} scale={2} />
              <Reactlogo
                position={sizes.reactLogoPosition}
                scale={mobile ? 0.6 : 1}
              />
              <Cube position={sizes.cubePosition} scale={mobile ? 1 : 2} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
        <a href="#about" className="w-fit">
          <Button
            isBeam
            text="Let's work together "
            buttonclass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
