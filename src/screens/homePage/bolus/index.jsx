import "./index.css";
import { MasterBtn } from "../../../components";

const Bolus = () => {
  return (
    <section className="bolus-bg-wrapper py-20 md:py-32 xl:py-40">
      <section className="max-w-screen-2xl md:mx-auto md:w-11/12 2xl:w-9/12 bg-green flex flex-wrap bolus-master rounded-xl gap-x-40 px-4 mx-2">
        <div className=" flex-1 flex flex-col justify-center items-start gap-2 md:pl-2 lg:pl-6 xl:pl-16">
          <h1 className="text-white md:py-3 py-2 DigiGAI-Bolus">
            DigiGAI Bolus
          </h1>
          <span className="text-white DigiGAI-Bolus-para">
            Identify any health issues and temperature fluctuations of the
            cattle efficiently, accurately, and in real-time. Herd informatics
            can help dairy farmers or veterinarians seamlessly monitor the
            entire herd individually on a cloud-based system.
          </span>
          <div className="my-9">
            <MasterBtn
              bgColor="white"
              text="Read More"
              link="/products/bolus"
            />
          </div>
        </div>
        <div className="flex-1 basis-[23rem] img-wrapper h-[25rem] lg:h-[35rem] xl:h-[35rem] "></div>
      </section>
    </section>
  );
};

export default Bolus;
