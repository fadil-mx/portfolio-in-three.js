import React from "react";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1  xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="image "
              className=" w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm max</p>
              <p className="grid-subtext">
                I'm Fadil, a software developer who's all about building cool
                stuff and figuring out new ways to solve problems. Fresh out of
                B Tech, I’m diving into the tech world, always on the lookout
                for the next challenge. Whether it’s coding up a project or
                learning the latest in tech, I’m in my zone when I’m creating
                something that works and makes an impact
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="" />
            <div>
              <p className="grid-headtext">Hi, I'm max</p>
              <p className="grid-subtext">
                I'm Fadil, a software developer who's all about building cool
                stuff and figuring out new ways to solve problems. Fresh o{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full h-fit sm:h-[362px] flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
