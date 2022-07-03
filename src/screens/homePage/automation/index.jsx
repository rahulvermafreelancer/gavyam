import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import "./index.css";

import "@splidejs/splide/css/core";
import dummy from "./assets/dummy.png";

const Automation = () => {
  const splideOptions = {
    type: "loop",
    perPage: 1,
    pagination: true,
    drag: true,
    autoplay: true,
    interval: 2000,
    arrows: true,
    breakpoints: {
      768: {
        arrows: false
      }
    }
  };

  return (
    <section className="bg-gray min-h-[10rem]  py-40 automation-master coursal-bg-image ">
      <h1 className="blade-title font-bold text-brown font-regular px-4 text-center pb-24">
        Embrace Automation
      </h1>
      <Splide
        options={splideOptions}
        className="font-regular md:w-10/12 2xl:w-9/12 md:mx-auto max-h-min  rounded-3xl max-w-screen-2xl mx-2  "
      >
        <SplideSlide className="md:flex flex-wrap px-3 bg-white">
          <div className="img-wrapper basis-80 flex-1  h-[18rem] lg:h-[30rem]  lg:p-4 ">
            <img
              src={dummy}
              alt=""
              className="object-cover rounded-2xl  h-full w-full"
            />
          </div>
          <div className="text-wrapper basis-80 flex-1 flex p-3 md:p-5 lg:px-10 justify-start flex-col flex-nowrap  gap-2 md:gap-5">
            <h1 className="font-title text-earth font-bold  py-2 pt-4   md:py-8 ">
              Milk Union
            </h1>
            <span className=" md:w-10/12 text-xl lg:text-2xl ">
              digiGAI helps milk unions & milk producers easily monitor the
              health of their herd and increases the accuracy of the breeding
              process with hi-tech breeding products. Milk producers can boost
              dairy production while minimizing input costs by optimizing their
              operations with our innovative solutions.
            </span>
          </div>
        </SplideSlide>

        <SplideSlide className="md:flex flex-wrap px-3 bg-color">
          <div className="img-wrapper basis-80 flex-1  h-[18rem] lg:h-[30rem]  lg:p-4 ">
            <img
              src={dummy}
              alt=""
              className="object-cover rounded-2xl  h-full w-full"
            />
          </div>
          <div className="text-wrapper basis-80 flex-1 flex p-3 md:p-5 lg:px-10 justify-start flex-col flex-nowrap  gap-2 md:gap-5">
            <h1 className="font-title text-white font-bold  py-2 pt-4 md:py-8 ">
              Milk Distributors/Dairy Farmers
            </h1>
            <span className=" md:w-10/12 text-xl lg:text-2xl text-white">
              Precision-based technology helps optimize cattle management
              practices and contributes to animal healthcare to enhance milk
              production sustainably. You can make informed decisions with
              accurate data using digiGAI's user-friendly health monitoring and
              breeding products.
            </span>
          </div>
        </SplideSlide>

        <SplideSlide className="md:flex flex-wrap px-3 bg-white">
          <div className="img-wrapper basis-80 flex-1  h-[18rem] lg:h-[30rem]  lg:p-4 ">
            <img
              src={dummy}
              alt=""
              className="object-cover rounded-2xl  h-full w-full"
            />
          </div>
          <div className="text-wrapper basis-80 flex-1 flex p-3 md:p-5 lg:px-10 justify-start flex-col flex-nowrap  gap-2 md:gap-5">
            <h1 className="font-title text-earth font-bold  py-2 pt-4   md:py-8 ">
              Veterinarians
            </h1>
            <span className=" md:w-10/12 text-xl lg:text-2xl ">
              No more errors! digiGAI offers the opportunity to access a
              reliable database about herd health and their breeding cycle to
              the veterinary doctors. With easy-to-use technology, veterinary
              specialists can gain real-time access to herd health data remotely
              and on-site.
            </span>
          </div>
        </SplideSlide>
        <SplideSlide className="md:flex flex-wrap px-3 bg-color">
          <div className="img-wrapper basis-80 flex-1  h-[18rem] lg:h-[30rem]  lg:p-4 ">
            <img
              src={dummy}
              alt=""
              className="object-cover rounded-2xl  h-full w-full"
            />
          </div>
          <div className="text-wrapper basis-80 flex-1 flex p-3 md:p-5 lg:px-10 justify-start flex-col flex-nowrap  gap-2 md:gap-5">
            <h1 className="font-title  font-bold  py-2 pt-4   md:py-8 text-white">
              NGOs
            </h1>
            <span className=" md:w-10/12 text-xl lg:text-2xl text-white">
              We help organizations optimize dairy production and animal
              healthcare by delivering affordable services and products. Our
              team of veterinarians also assists NGOs to integrate precision
              cattle management and breeding products and help them achieve a
              profitable milk yield.
            </span>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Automation;
