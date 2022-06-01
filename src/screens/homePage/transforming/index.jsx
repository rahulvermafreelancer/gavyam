import "./index.css";

const SubBanner = () => {
  return (
    <section className=" mx-auto  bg-gray px-4 py-28 pt-64 lg:pt-72 min-h-[20rem] text-earth font-regular ">
      <section className=" max-w-screen-lg mx-auto grid place-content-center gap-4 xl:gap-10 text-center ">
        <h1 className=" font-title transform-heading font-bold text-brown">
          We are Transforming the Dairy Industry!
        </h1>
        <span className=" max-w-screen-sm mx-auto para-text">
          Offering innovative solutions to optimize time-consuming and
          error-prone procedures in cattle breeding and management.
        </span>
      </section>
    </section>
  );
};
export default SubBanner;
