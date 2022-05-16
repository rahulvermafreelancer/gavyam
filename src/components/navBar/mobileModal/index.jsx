import "./index.css";
import { Link } from "react-router-dom";

const MobileModal = ({ isOpen }) => {
  return (
    <>
      <section
        className={` ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 lg:hidden fixed right-0 top-24 bottom-0 flex flex-col flex-nowrap  bg-black bg-opacity-50 w-full pt-2 `}
      ></section>
      <section
        className={` ${
          isOpen ? "translate-x-0" : "translate-x-full delay-100"
        } transition-transform duration-500 lg:hidden fixed right-0 top-24 bottom-0 flex flex-col flex-nowrap  bg-white w-full max-w-lg  pt-2 `}
      >
        <div className="flex flex-col gap-2  pt-4 pb-6 bg-gray mx-4 my-2 rounded-md">
          <h3 className="text-2xl text-green  font-semibold py-2 px-4">
            Product
          </h3>
          <div className="flex flex-col gap-4 px-6 text-xl  ">
            <Link to="/product/bolus">DigiGAI Bolus</Link>
            <Link to="/product/dte">DigiGAI DTE</Link>
            <Link to="/product/dve">DigiGAI DVE</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2  pt-4 pb-6 bg-gray mx-4 my-2 rounded-md">
          <h3 className="text-2xl text-green  font-semibold py-2 px-4">
            About Us
          </h3>
          <div className="flex flex-col gap-4 px-6 text-xl  ">
            <Link to="/product/bolus">Mision</Link>
            <Link to="/product/dte">Dummy Link</Link>
            <Link to="/product/dve">Dummy Link</Link>
          </div>
        </div>
        <Link to="/resources">
          <h4 className="text-2xl text-green px-8 py-2 ">Resources</h4>
        </Link>
        <Link to="/contact">
          <h4 className="text-2xl text-green px-8 py-2">Contact Us</h4>
        </Link>

        <div className="mt-auto py-4  text-center  text-lg   ">
          <span>Gavyam &copy; All Rights Reserved</span>
        </div>
      </section>
    </>
  );
};
export default MobileModal;
