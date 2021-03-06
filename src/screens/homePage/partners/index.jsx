import edison from "./assets/demo1.svg";
import nutrafruit from "./assets/neutrafruit.png";
import "./index.css";

const Partners = () => {
  return (
    <section className="py-20 xl:py-28 min-h-[45rem] grid place-content-center">
      <h1 className="partners  text-brown px-4 text-center mb-10">
        Our Partners
      </h1>
      <section className=" mb-14  max-w-screen-2xl  lg:w-11/12 mx-auto flex flex-wrap items-start justify-center  px-4 h-full  xl:gap-4">
        <div className="item grid place-content-center  cursor-pointer  ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
        <div className="item grid place-content-center  cursor-pointer  ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
        <div className="item grid place-content-center  cursor-pointer  ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
        <div className="item grid place-content-center    cursor-pointer  ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
        <div className="item grid place-content-center   cursor-pointer   ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
        <div className="item grid place-content-center  cursor-pointer     ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
        <div className="item grid place-content-center  cursor-pointer  ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
        <div className="item grid place-content-center   cursor-pointer ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
        <div className="item grid place-content-center  cursor-pointer  ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
        <div className="item grid place-content-center   cursor-pointer   ">
          <img
            src={edison}
            alt=""
            className=" h-20 md:h-24 lg:h-24 grayscale hover:grayscale-0  object-cover"
          />
        </div>
      </section>
    </section>
  );
};
export default Partners;
