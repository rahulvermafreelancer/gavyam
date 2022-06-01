import "./index.css";
import { MasterBtn } from "../../../components";
const DVE = () => {
  return (
    <section className="py-20 xl:py-28  bg-gray">
      <section className=" max-w-screen-2xl mx-auto md:w-11/12 2xl:w-9/12 font-regular text-green flex flex-wrap dve-master rounded-xl gap-5 relative lg:min-h-[35rem] ">
        <div className=" basis-[45rem] flex flex-col justify-start py-4 gap-2 md:py-8 px-3 md:pl-8 lg:pl-14 ">
          <h1 className="font-title font-bold md:py-4 py-3">
            DigiGAI Digital Vet Endoscope {"("}DVE{")"}
          </h1>
          <span className="font-subtitle md:w-10/12 ">
            Boost your cattle's conception rate using digiGAI's DVE. Our Digital
            Vet Endoscope is designed to keep the biggest challenges of
            artificial insemination in mind. It helps you gain access to
            accurate insemination data and live streams the procedure to ensure
            100% accuracy and success rate.
          </span>
          <div className="my-9">
            <MasterBtn bgColor="brown" text="Read More" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default DVE;
