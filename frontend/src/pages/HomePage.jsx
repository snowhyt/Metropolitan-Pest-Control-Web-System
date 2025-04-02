import React from "react";
import Carousel from "../components/carousel.jsx";
function HomePage() {
  return (
    <div>
      <div className="bg-blue-400 pb-20 pt-20">
        <div className="text-center text-[50px] text-white font-bold font-sans">
          <h1>Getting Rid of Pest since 1992</h1>
        </div>
        <div className="text-center text-white font-sans">
          <p>
            METROPOLITAN PEST CONTROL CORPORATION® uses the lates technology
            that guarantees efficient Residential and Commercial Pest
            Management.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-10 mt-10">
          <a className="btn">Learn More</a>
          <a className="btn">Book Now!</a>
        </div>
      </div>
      <div>
        <div className="text-center text-[30px] text-white-400 mt-10 font-bold font-mono mb-10">
          <h1>METROPOLITAN PEST CONTROL CORPORATION®</h1>
        </div>
        <div className="flex flex-col md:flex-row mx-5 md:mx-10 lg:mx-20 gap-10">
          <div className=" text-center border-gray-300 p-8 rounded-lg flex-1">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
              Metropolitan Pest Control Corporation utilizes state-of-the-art
              equipment and the latest technology in the industry. We use only
              FDA-approved insecticides and chemicals to ensure responsible
              disposition. Since 1997,meet and exceed industry expectations.
              MPCC is a high profile pest control company that offers the most
              complete line of services. Our company is complemented by a team
              of highly trained technicians who are fully capable of providing
              services to our valued clients. Since 1997, our mission has
              remained the same—to provide unparalleled service and allow our
              work to exceed all expectations of professionalism, integrity, and
              effectiveness. From the smallest and easiest job to the most
              strenuous, we make sure that we're not finished until the
              satisfaction of our customers is met. We aim to finish each
              project in a timely manner and with the highest level of quality.
              With a focus on personalized service, competitive rates and
              customer satisfaction, we're always striving to meet and exceed
              industry expectations.
            </p>
            <a className="btn bg-blue-400 text-white pt-2 rounded-md mt-6 inline-block hover:bg-blue-500 transition duration-300">
              Learn More
            </a>
          </div>
          <div className=" border-gray-300 rounded-lg mx-5 md:mx-10 flex flex-col items-center">
            <img src="/logo.png" alt="Company Image" className="w-50 h-20" />
            <img src="/image.jpg" alt="image" className="w-100 h-90 border-2" />
          </div>
        </div>
        <div>
          <h1 className="text-center text-[30px] text-white-400 mt-20 font-bold font-mono mb-5">
            Service
          </h1>
          <div>
            <p className="flex justify-center items-center text-center text-white w-full px-4 md:px-6 lg:px-10">
              Following is the complete list of quality services that are
              designed to suit the requirements of MPCC's valued clients:
              afafafafaf Following is the complete list of quality services that
              are designed to suit the requirements of MPCC's valued clients: af
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center mt-10 px-4 md:px-6 lg:px-10">
              <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center">
                services
              </div>
              <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center">
                services
              </div>
              <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center">
                services
              </div>
              <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center">
                services
              </div>
              <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center">
                services
              </div>
            </div>
          </div>

          {/* delete h-200*/}
          <div className="bg-gray-600 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
              <div className="h-auto bg-blue-300 text-center rounded-lg p-4">
                <div className="flex justify-center">
                  <img
                    src="/dengue.jpg"
                    alt="dengueservice"
                    className="w-full md:w-80 h-auto mt-5"
                  />
                </div>
                <div className="font-extrabold mt-2 text-black">
                  Service Header 1
                </div>
                <div className="text-gray-500 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className="h-auto bg-blue-300 text-center rounded-lg p-4">
                <div className="flex justify-center">
                  <img
                    src="/dodent.jpg"
                    alt="rat"
                    className="w-full md:w-80 h-auto mt-5"
                  />
                </div>
                <div className="font-extrabold mt-2 text-black">
                  Service Header 2
                </div>
                <div className="text-gray-500 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className="h-auto bg-blue-300 text-center rounded-lg p-4">
                <div className="flex justify-center">
                  <img
                    src="/poopinpeace.jpg"
                    alt="cockroach"
                    className="w-full md:w-80 h-auto mt-5"
                  />
                </div>
                <div className="font-extrabold mt-2 text-black">
                  Service Header 3
                </div>
                <div className="text-gray-500 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
