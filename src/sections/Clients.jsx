import React from "react";
import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear From My Clients </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {clientReviews.map((item, index) => (
          <div key={index} className=" client-review">
            <p className="text-white font-light">{item.review}</p>
            <div className="client-content">
              <div className="flex gap-3">
                <img
                  src={item.img}
                  alt=""
                  className="w-12 h-12  rounded-full"
                />
                <div className=" flex flex-col">
                  <p className="text-white-800 font-semibold">{item.name}</p>
                  <p className="text-white-500 md:text-base text-sm ">
                    {item.position}
                  </p>
                </div>
              </div>
              <div className="flex self-end items-center gap-2 ">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    src="/assets/star.png"
                    alt="star"
                    className="w-5 h-5"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
