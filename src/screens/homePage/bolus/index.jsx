import "./index.css";
import { MasterBtn } from "../../../components";

const Bolus = () => {
  return (
    <section className="bolus-bg-wrapper">
      <section className="max-w-screen-xl md:mx-auto md:w-11/12 2xl:w-9/12  bg-green  font-regular text-white flex flex-wrap bolus-master rounded-xl gap-x-40 px-4 mx-2">
        <div className=" flex-1 basis-[28rem]  flex flex-col justify-center  items-start py-4 pt-6 md:py-6 gap-2  md:pl-2 lg:pl-6 xl:pl-16">
          <h1 className="font-title font-bold md:py-4 py-3">DigiGAI Bolus</h1>
          <span className="font-subtitle ">
            Identify any health issues and temperature fluctuations of the
            cattle efficiently, accurately, and in real-time. Herd informatics
            can help dairy farmers or veterinarians seamlessly monitor the
            entire herd individually on a cloud-based system.
          </span>
          <div className="mt-9">
            <MasterBtn bgColor="white" text="Read More" />
          </div>
        </div>
        <div className="flex-1 basis-[23rem] img-wrapper h-[25rem] lg:h-[35rem] xl:h-[35rem] "></div>
      </section>
    </section>
  );
};

export default Bolus;
