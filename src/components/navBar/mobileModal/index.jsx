import "./index.css";
import { Link } from "react-router-dom";

const MobileModal = ({ isOpen, handler }) => {
  return (
    <>
      <section
        className={` ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 lg:hidden fixed right-0 top-20 bottom-0 flex flex-col flex-nowrap  bg-black bg-opacity-50 w-full pt-2`}
      ></section>
      <section
        className={` ${
          isOpen ? "translate-x-0" : "translate-x-full delay-100"
        } transition-transform duration-500 lg:hidden fixed right-0 top-20 bottom-0 flex flex-col flex-nowrap  bg-white w-full max-w-lg  pt-2  overflow-auto z-[100]`}
      >
        <div class="accordion mx-2">
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingOne">
              <button
                class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h3 className="text-2xl text-earth font-regular">Product</h3>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show border-gray"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="flex flex-col gap-2 px-5 py-4  text-xl text-green border-b border-gray "
                onClick={handler}
              >
                <Link to="/product/bolus">DigiGAI Bolus</Link>
                <Link to="/product/dte">DigiGAI DTE</Link>
                <Link to="/product/dve">DigiGAI DVE</Link>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white ">
            <h2 class="accordion-header mb-0" id="headingTwo">
              <button
                class="fill-green  accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left hover:fill-green active:fill-green bg-white border-0 rounded-none transition  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h3 className="text-2xl text-earth  font-regular">About Us</h3>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse border-gray"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="flex flex-col gap-2 px-6 text-xl text-green py-4 border-b border-gray  "
                onClick={handler}
              >
                <Link to="/product/bolus">Mision</Link>
                <Link to="/product/dte">Dummy Link</Link>
                <Link to="/product/dve">Dummy Link</Link>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header mb-0" id="headingThree">
              <button
                class=" accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base  bg-white border-0 rounded-none transition focus:outline-none "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h3 className="text-2xl text-earth  font-regular">Mission</h3>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse border-gray"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className="flex flex-col gap-2 px-6 text-xl text-green py-4 border-b border-gray"
                onClick={handler}
              >
                <Link to="/product/bolus">Mision</Link>
                <Link to="/product/dte">FAQs</Link>
                <Link to="/product/dve">Privacy Policy</Link>
                <Link to="/product/dve">Dummy Link</Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-3 text-xl text-green px-2 mx-2 pt-6 border-t border-gray"
          onClick={handler}
        >
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/contact">
            <span>Contact Us</span>
          </Link>
          <Link to="/resources">
            <span>Resources</span>
          </Link>
        </div>
        <div className="text-center py-4 mt-auto">
          <span>Gavyam &copy; All Rights Reserved.</span>
        </div>
      </section>
    </>
  );
};
export default MobileModal;
