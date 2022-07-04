import explainer from "./explainer.svg";
import "./index.css";

export const CattleManagement = () => {
  return (
    <section className="my-20 xl:my-28">
      <section className="max-w-screen-2xl  lg:w-11/12 mx-auto flex flex-col gap-sm flex-nowrap font-regular ">
        <section className="flex flex-col gap-6 lg:gap-8 px-4 py-3 ">
          <h1 className="cattle-text-heading md:px-2 py-6 w-10/12  max-w-[32rem] leading-snug text-brown">
            Cattle management made easy!
          </h1>
          <span className="cattle-text-color">
            The digiGAI cattle management system simplifies monitoring a
            cattle's health and tracking all cattle-related data efficiently.
            Veterinary doctors and dairy farmers can access real-time
            information remotely with an interactive cloud-based dashboard to
            save time and effort.
          </span>
        </section>
        <section className="lg:w-10/12 mx-auto my-20 xl:my-28 px-4 xl:px-10 ">
          <img src={explainer} alt="" className="mx-auto " />
        </section>
      </section>
    </section>
  );
};

export default CattleManagement;
