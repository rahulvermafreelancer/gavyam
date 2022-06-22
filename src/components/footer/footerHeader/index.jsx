import React, { useState } from "react";
import "./index.css";
import * as emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import cowImg from "./assets/cow.png";

var SERVICE_ID = "service_qrp0wkk";
var TEMPLATE_ID = "template_d3jo752";
var USER_ID = "uLmnreJNpzx3y4Ivf";

const FooterHeader = () => {
  const [email, setEmail] = useState();

  const handleClick = () => {
    console.log(email);
    var data = {
      to_email: email
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      (response) => {
        console.log(response.status, response.text);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <section className="  footer-master max-w-screen-2xl sm:w-11/12 md:mx-auto font-regular bg-green lg:min-h-[20rem]  xl:min-h-[25rem] rounded-3xl xl:rounded-full text-white xl:w-10/12 2xl:w-9/12  overflow-hidden mx-3  xl:h-[20rem]  lg:h-[12rem] ">
      <section className="flex flex-wrap items-center justify-center w-11/12 mx-auto  xl:h-[25rem]  lg:h-[20rem] ">
        <div className="basis-[25rem]  w-11/12 ml-auto  flex flex-col flex-wrap justify-end  grow shrink max-w-2xl 2xl:max-w-3xl py-10  sm:px-4 lg:pl-16 pr-6">
          <h1 className="font-title  font-bold  ">Join The Revolution!</h1>
          <p className="font-subtitle mt-3  md:mt-4">Let's work together</p>
          <div className="flex flex-wrap justify-center  gap-2 py-6 lg:py-8">
            <input
              type="text"
              placeholder="Your Email Address"
              className="py-3 px-4   xl:text-xl bg-white text-green font-regular text-lg rounded-lg flex-1 outline-none "
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              className="font-regular text-white bg-brown px-10 rounded-lg text-lg lg:text-xl uppercase py-3 "
              onClick={handleClick}
            >
              Send
            </button>
          </div>
        </div>
        <div className=" h-full   grow shrink  w-[10rem]   xl:w-[14rem] imgWrapper hidden lg:flex ">
          <img
            alt=""
            src={cowImg}
            className=" xl:h-[25rem]  lg:h-[20rem] mx-auto h-4/6 my-10  w-full object-contain"
          />
        </div>
      </section>
    </section>
  );
};

export default FooterHeader;
