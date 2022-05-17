import "./index.css";
import hero from "./cowImg.png";
import { MasterBtn } from "../../../components";
const Banner = () => {
  return (
    <section className=" bg-earth font-regular min-h-screen flex items-center">
      <section className=" w-10/12 lg:w-10/12 mx-auto  py-6 flex flex-wrap-reverse  items-center gap-6 justify-around d first-letter: ">
        <div className=" flex-1 basis-[20rem] flex flex-col justify-start  px-4 md:px-8 lg:px-14  h-[25rem]  xl:h-[30rem] py-4  d  banner_text_wrapper ">
          <h1
            className="font-title text-white  max-w-xl "
            style={{ fontWeight: "bold" }}
          >
            <span className="text-brown">INCREASE DAIRY PRODUCTION,</span>{" "}
            <br /> WITHOUT RISK OR ERRORS!
          </h1>
          <span className="font-subtitle text-white py-10 max-w-md">
            Digitizing the Herd Monitoring and Breeding System to Enhance Cattle
            Management/ Animal Welfare / Herd Efficiency / Farm Productivity
          </span>
          <div className="">
            <MasterBtn bgColor="brown" text="Read More" />
          </div>
        </div>
        <div className="flex-1 basis-[5rem] d  img-wrapper h-[30rem] px-4 lg:px-10 rounded-br-[5rem] xl:h-[35rem] relative   ">
          <img src={hero} alt="" className=" w-96" />
        </div>
      </section>
    </section>
  );
};

export default Banner;
