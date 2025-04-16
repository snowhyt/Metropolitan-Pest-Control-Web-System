import React from "react";

import Navbar from "../components/navbar.jsx";

function HomePage() {
  return (
    
    <div>

      {/* Hero Section */}

      <div className="bg-blue-400 pb-20 pt-20">
        <div className="text-center text-[50px] text-white font-bold font-sans">
          <h1>Getting Rid of Pests Since 1992</h1>
        </div>
        <div className="text-center text-white font-sans mt-4">
          <p>
            METROPOLITAN PEST CONTROL CORPORATION® uses the latest technology
            that guarantees efficient Residential and Commercial Pest
            Management.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-10 mt-10">
          <a className="btn bg-white text-blue-500 py-3 px-8 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            Learn More
          </a>
          <a className="btn bg-white text-blue-500 py-3 px-8 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            Book Now!
          </a>
        </div>
      </div>

      {/* About Section */}
      <div>
        <div className="text-center text-[30px] text-white-400 mt-10 font-bold font-mono mb-10">
          <h1>Our Company</h1>
        </div>
        <div className="flex flex-col md:flex-row mx-5 md:mx-10 lg:mx-20 gap-10">

          <div className="text-center border-gray-300 p-8 rounded-lg flex-1 bg-white shadow-lg">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">

              Metropolitan Pest Control Corporation utilizes state-of-the-art
              equipment and the latest technology in the industry. We use only
              FDA-approved insecticides and chemicals to ensure responsible
              disposition. Since 1997, we meet and exceed industry expectations.
              MPCC is a high-profile pest control company that offers the most
              complete line of services. Our company is complemented by a team
              of highly trained technicians who are fully capable of providing
              services to our valued clients.
            </p>
            <div className="flex flex-start">
            <a className="btn  bg-blue-400 text-white pt-2 rounded-md mt-15 px-10 inline-block  hover:bg-blue-500 transition duration-300">
              Learn More
            </a>
            </div>
          </div>
          <div className="border-gray-300 rounded-lg mx-5 md:mx-10 flex flex-col items-center">
            <img src="/logo.png" alt="Company Logo" className="w-50 h-20" />
            <img
              src="/image.jpg"
              alt="Company Image"
              className="w-100 h-90 border-2 rounded-lg mt-4"
            />
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div>
        <h1 className="text-center text-[30px] text-white-400 mt-20 font-bold font-mono mb-5">
          Our Services
        </h1>
        <div>
          <p className="flex justify-center items-center text-center text-white w-full px-4 md:px-6 lg:px-10">
            Following is the complete list of quality services that are designed
            to suit the requirements of MPCC's valued clients.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center mt-10 px-4 md:px-6 lg:px-10">
            <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center text-white font-bold text-xl">
              Service 1
            </div>
            <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center text-white font-bold text-xl">
              Service 2
            </div>
            <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center text-white font-bold text-xl">
              Service 3
            </div>
            <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center text-white font-bold text-xl">
              Service 4
            </div>
            <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center text-white font-bold text-xl">
              Service 5
            </div>
            <div className="bg-gray-500 rounded-full w-40 h-40 flex items-center justify-center text-white font-bold text-xl">
              Service 6
            </div>
          </div>
          <div className="">
            <div className="bg-gray-500 h-90 w-90"></div>
            <div className="bg-gray-500 h-90 w-90"></div>
            <div className="bg-gray-500 h-90 w-90"></div>
            <div className="bg-gray-500 h-90 w-90"></div>
            <div className="bg-gray-500 h-90 w-90"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
