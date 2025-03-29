import React from "react";
import Carousel from "../components/carousel.jsx";
function HomePage() {
  return (
    <div>
      <div className="bg-blue-400 pb-20 pt-20">
        <div className="text-center text-[50px] text-white font-bold font-sans">
          <h1>Company's Tagline</h1>
        </div>
        <div className="text-center text-white font-sans">
          <p>
            Following is the complete list of quality services that are designed
            to suit the requirements of MPCC’s valued client F
          </p>
        </div>
        <div className="flex justify-center items-center space-x-10 mt-10">
          <a className="btn">Learn More</a>
          <a className="btn">Book Now!</a>
        </div>
      </div>
      <div>
        <div className="text-center text-[30px] text-white font-bold font-sans underline mt-10">
          <h1>Our Company</h1>
        </div>
        <div>
          <div className="flex justify-end space-x-10 space-x6 mt-5 border-2 text-center text-white font-sans">
            <p>
              Metropolitan Pest Control Corporation utilizes state-of-the-art
              equipment and the latest technology in the industry.We use only
              FDA-approved insecticides and chemicals to ensure responsible
              disposition.​Since 1997, our mission has remained the same—to
              provide unparalleled service and allow our work to exceed all
              expectations of professionalism, integrity, and effectiveness.
              From the smallest and easiest job to the most strenuous, we make
              sure that we’re not finished until the satisfaction of our
              customers is met. We aim to finish each project in a timely manner
              and with the highest level of quality. With a focus on
              personalized service, competitive rates and customer satisfaction,
              we’re always striving to meet and exceed industry expectations.
            </p>
          </div>
          <div className="flex justify-end space-x-10 space-x6 mt-5 border-2 text-center text-white font-sans">
            <p>
              Metropolitan Pest Control Corporation utilizes state-of-the-art
              equipment and the latest technology in the industry.We use only
              FDA-approved insecticides and chemicals to ensure responsible
              disposition.​Since 1997, our mission has remained the same—to
              provide unparalleled service and allow our work to exceed all
              expectations of professionalism, integrity, and effectiveness.
              From the smallest and easiest job to the most strenuous, we make
              sure that we’re not finished until the satisfaction of our
              customers is met. We aim to finish each project in a timely manner
              and with the highest level of quality. With a focus on
              personalized service, competitive rates and customer satisfaction,
              we’re always striving to meet and exceed industry expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
