import React from "react";
import mylogo from "../assets/apps.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4">
      <div className="rounded-lg shadow-lg shadow-amber-100 p-6">
        <img src={mylogo} />
        <h1 className="text-2xl text-blue-400  py-2 font-bold text-start  ">
          Custom Mobile App Development
        </h1>
        <p className="text-start text-xl">
          Develop high-performance iOS and Android apps tailored for businesses,
          startups, and enterprises, using React Native, Flutter, or native
          development.
        </p>
        <div className=" text-start  ">
          <ul className="space-y-2 mt-2 ">
         
            <div className="flex items-center">
              <FontAwesomeIcon className="green-500 text-blue-700 text-xl pe-2" icon={faCircleCheck}/>
              <li className="my-2 text-xl">Secure user authentication & payment integration </li>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon className="green-500 text-blue-700 text-xl pe-2" icon={faCircleCheck}/>
              <li className="my-2 text-xl">Secure user authentication & payment integration </li>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon className="green-500 text-blue-700 text-xl pe-2" icon={faCircleCheck}/>
              <li className="my-2 text-xl">Secure user authentication & payment integration </li>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon className="green-500 text-blue-700 text-xl pe-2" icon={faCircleCheck}/>
              <li className="my-2 text-xl">Secure user authentication & payment integration </li>
            </div>

          </ul>
        </div>
        <button class="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};
