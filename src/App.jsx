/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import LeftObj1 from "./assets/left_obj_1.svg";
import LeftObj2 from "./assets/left_obj_05.svg";
import LeftObj3 from "./assets/left_obj_03.svg";
import RightObj1 from "./assets/right_obj_1.svg";
import RightObj2 from "./assets/right_obj_03.svg";


function App() {
  return (
    <>
      <div className="container">
        <div className="flex mt-[86px] ">
          <div className="w-[43%]">
            <img src={LeftObj1} alt="left-figure-01" className="ml-[44px]" />
          </div>
          <div className="text-center w-full">
            <div className="flex flex-col items-center">
              <h2 className="text-[44px] font-extrabold mt-[45px] mb-[41px]">
                Web Development Services
              </h2>
              <p className="w-[352px] text-base font-light text-left">
                Finding a reliable and experienced web development agency can be
                quite a difficult task. With a team deeply rooted in industry
                knowledge and a passion for innovation, we've spent years
                perfecting the art of creating compelling, feature-rich
                websites.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="text-center w-full">
            <div className="flex flex-col items-center">
              <h2 className="text-[44px] font-extrabold mt-[45px] mb-[41px]">
                DevOps Services
              </h2>
              <p className="w-[352px] text-base font-light text-left">
                DevOps is a comprehensive approach that focuses on facilitating
                interdepartmental communication and collaboration. When
                development and operations teams work efficiently together, it
                results in faster development of high-quality products through
                automation
              </p>
            </div>
          </div>
          <div className="w-[43%]">
            <img src={RightObj2} alt="right-figure-01" className="ml-[44px]" />
          </div>
        </div>
        <div className="flex">
          <div className="w-[43%]">
            <img src={LeftObj2} alt="left-figure-02" className="ml-[44px]" />
          </div>
          <div className="text-center w-full">
            <div className="flex flex-col items-center">
              <h2 className="text-[44px] font-extrabold mt-[45px] mb-[41px]">
                Front-End Development Services
              </h2>
              <p className="w-[352px] text-base font-light text-left">
                We develop frontend for applications, websites, and web
                services. We take on interactive interfaces of any complexity,
                making them work smoothly and error-free. Our frontend
                developers team is ready to join your project at any stage. We
                can conduct a code{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="text-center w-full">
            <div className="flex flex-col items-center">
              <h2 className="text-[44px] font-extrabold mt-[45px] mb-[41px]">
                Front-End Development Services
              </h2>
              <p className="w-[352px] text-base font-light text-left">
                We develop frontend for applications, websites, and web
                services. We take on interactive interfaces of any complexity,
                making them work smoothly and error-free. Our frontend
                developers team is ready to join your project at any stage. We
                can conduct a code{" "}
              </p>
            </div>
          </div>
          <div className="w-[43%]">
            <img src={RightObj1} alt="right-figure-01" className="ml-[44px]" />
          </div>
        </div>
        <div className="flex">
          <div className="w-[43%]">
            <img src={LeftObj3} alt="left-figure-03" className="ml-[44px]" />
          </div>
          <div className="text-center w-full">
            <div className="flex flex-col items-center">
              <h2 className="text-[44px] font-extrabold mt-[45px] mb-[41px]">
                Backend Development Services
              </h2>
              <p className="w-[352px] text-base font-light text-left">
                We develop backend solutions for high-load, technically-complex
                products and startups. We design backend for custom ERP and CRM
                systems, eCommerce, and media and financial services. Our team
                is prepared to take on server software development at any stage,{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="container">
        <div className="relative flex items-center justify-center bg-footer-bg bg-no-repeat bg-contain  h-screen">
          <a className="text-white font-extrabold mb-[10%] mr-[10%] xl:mr-[20%] text-5xl absolute z-10">
            viclouds@viclouds.ru
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
