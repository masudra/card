import React from "react";
import mylogo from "../assets/apps.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  gap-6  mx-auto md:px-4  lg:px-4 px-3  md:py-20">
        <div className="p-6 bg-[#191919] text-white rounded-xl shadow-[0_40px_30px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 overflow-hidden m-2">
          <div>
            <div>
            <div 
  className=" h-64 bg-blue-500 bg-[url('/apps.jpg')] bg-cover bg-center bg-blend-lighten md:bg-blend-darken">
</div>
                 <div>
                <h2 className="text-2xl text-left font-bold text-blue-500 mt-6  ">
                Web Application Development
                </h2>
                <p className=" text-left text-sm mt-3 ">
                  Develop high-performance iOS and Android apps tailored for
                  businesses, startups, and enterprises, using React Native,
                  Flutter, or native development.
                </p>

                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {[
                    "JavaScript",
                    "Tailwind CSS",
                    "Bootstrap",
                    "React / Next JS",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-blue-600 text-lg"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md  shadow-[5px_5px_0_0_#008DBD] transition-transform duration-300 ease-in-out hover:scale-110">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#191919] text-white rounded-xl shadow-[0_40px_30px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 overflow-hidden m-2">
          <div>
            <div>
              <div>
                <img src={mylogo} alt="Project" className="rounded-[3px]" />
              </div>

              <div>
                <h2 className="text-2xl text-left font-bold text-blue-500 mt-6  ">
                Web Application Development
                </h2>
                <p className=" text-left text-sm mt-3 ">
                  Develop high-performance iOS and Android apps tailored for
                  businesses, startups, and enterprises, using React Native,
                  Flutter, or native development.
                </p>

                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {[
                    "JavaScript",
                    "Tailwind CSS",
                    "Bootstrap",
                    "React / Next JS",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-blue-600 text-lg"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md  shadow-[5px_5px_0_0_#008DBD] transition-transform duration-300 ease-in-out hover:scale-110">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#191919] text-white rounded-xl shadow-[0_40px_30px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 overflow-hidden m-2">
          <div>
            <div>
              <div>
                <img src={mylogo} alt="Project" className="rounded-[3px]" />
              </div>

              <div>
                <h2 className="text-2xl text-left font-bold text-blue-500 mt-6  ">
                Web Application Development
                </h2>
                <p className=" text-left text-sm mt-3 ">
                  Develop high-performance iOS and Android apps tailored for
                  businesses, startups, and enterprises, using React Native,
                  Flutter, or native development.
                </p>

                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {[
                    "JavaScript",
                    "Tailwind CSS",
                    "Bootstrap",
                    "React / Next JS",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-blue-600 text-lg"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md  shadow-[5px_5px_0_0_#008DBD] transition-transform duration-300 ease-in-out hover:scale-110">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
