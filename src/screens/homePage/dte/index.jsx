import "./index.css";
import { MasterBtn } from "../../../components";

const DTE = () => {
  return (
    <section className="py-20 xl:py-28 dte-bg-wrapper">
      <section className="max-w-screen-2xl md:mx-auto md:w-11/12 2xl:w-9/12  bg-white  font-regular text-green flex flex-wrap-reverse dte-master rounded-xl gap-y-3 gap-x-10 px-4 mx-2 ">
        <div className="flex-1 basis-[23rem] img-wrapper h-[25rem] lg:h-[35rem] xl:h-[35rem]"></div>
        <div className=" flex-1 basis-[28rem]  flex flex-col justify-center  items-start py-4 md:py-6 gap-2  md:px-2 lg:px-8 xl:px-10 ">
          <h1 className="font-regular font-bold md:py-4 py-3 DTE-heading">
            DigiGAI Digital Thawing Equipment {"("}DTE{")"}
          </h1>
          <span className="md:w-10/12 font-regular DTE-para">
            Boost your cattle's conception rate using digiGAI's DVE. Our Digital
            Vet Endoscope is designed to keep the biggest challenges of
            artificial insemination in mind. It helps you gain access to
            accurate insemination data and live streams the procedure to ensure
            100% accuracy and success rate.
          </span>
          <div className="my-9">
            <MasterBtn text="Read More" bgColor="brown" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default DTE;
