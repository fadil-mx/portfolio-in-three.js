import React, { Suspense, useEffect, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Computer from "../components/Computer";

const Projects = () => {
  const [selectedindex, setselectedindex] = useState(0);
  const currentProject = myProjects[selectedindex];
  const projectcount = myProjects.length;
  const handleClick = (direction) => {
    setselectedindex((prev) => {
      if (direction === "previous") {
        return prev == 0 ? projectcount - 1 : prev - 1;
      } else {
        return prev == projectcount - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <p className="head-text">MY WORKS</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl  shadow-black-200 ">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="light"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt=""
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className=" flex flex-col gap-5 text-white-600 my-5">
            <p className=" text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className=" animatedText">{currentProject.desc}</p>
            <p className=" animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt="img" />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              className="flex text-white-600 items-center gap-2 cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <p>Check live site</p>
              <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3 " />
            </a>
          </div>
          <div className=" flex items-center justify-between mt-7">
            <button
              className="arrow-btn "
              onClick={() => {
                handleClick("previous");
              }}
            >
              {" "}
              <img src="assets/left-arrow.png" alt="" className="w-4 h-4" />
            </button>
            <button
              className="arrow-btn "
              onClick={() => {
                handleClick("next");
              }}
            >
              {" "}
              <img src="assets/right-arrow.png" alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <Computer txt={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
