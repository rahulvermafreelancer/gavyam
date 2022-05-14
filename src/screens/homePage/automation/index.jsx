
import { Splide, SplideSlide  } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import "./index.css"


// or other themes
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';

// or only core styles
import '@splidejs/splide/css/core';
import dummy from "./assets/dummy.png"

const Automation =  () =>{
    const splideOptions = {
        type:"loop",
        perPage:1,
        pagination:true,
        drag:true,
        autoplay:true,
        interval:2000,
        autoHeight:true,
        arrows:true,
        breakpoints:{
            768:{
                arrows:false,
            },
           
        }
       
    }


    return (
        <>
            <h1 className="blade-title font-bold text-brown font-regular px-4 text-center mb-10">Embrace Automation</h1>
            <section className='mx-auto  max-w-screen-2xl '>
                <Splide options = { splideOptions }  className="w-full  xl:w-10/12 mx-auto font-regular ">
                    <SplideSlide className='flex flex-wrap px-2 md:px-4 w-full  sm:w-11/12 xl:px-14'>
                           <div className="img-wrapper basis-80 flex-1  h-[24rem] lg:h-[30rem] p-2 lg:p-4 ">
                               <img src={ dummy } alt="" className="object-cover rounded-2xl  h-full w-full" />
                           </div>
                           <div className="text-wrapper basis-80 flex-1 flex p-3 md:p-5 lg:px-10 justify-center flex-col flex-nowrap gap-5">
                               <h1 className="font-title text-brown font-bold">Veterinarians</h1>
                               <span className="para-text w-10/12 ">No more errors! digiGAI offers the opportunity to access a reliable database about herd health and their breeding cycle to the veterinary doctors. With easy-to-use technology, veterinary specialists can gain real-time access to herd health data remotely and on-site.</span>
                           </div>
                    </SplideSlide>
                    {/* <SplideSlide className='flex flex-wrap px-4  lg:px-14'>
                           <div className="img-wrapper basis-80 flex-1 h-[24rem] lg:h-[30rem] p-2 lg:p-4">
                               <img src={ dummy } alt="" className="object-cover rounded-2xl  h-full w-full" />
                           </div>
                           <div className="text-wrapper basis-80 flex-1 flex p-5 lg:px-10 justify-center flex-col flex-nowrap gap-5">
                               <h1 className="font-title text-brown font-bold">Veterinarians</h1>
                               <span className="para-text w-10/12 ">No more errors! digiGAI offers the opportunity to access a reliable database about herd health and their breeding cycle to the veterinary doctors. With easy-to-use technology, veterinary specialists can gain real-time access to herd health data remotely and on-site.</span>
                           </div>
                    </SplideSlide>
                    <SplideSlide className='flex flex-wrap px-4  lg:px-14'>
                           <div className="img-wrapper basis-80 flex-1 h-[24rem] lg:h-[30rem] p-2 lg:p-4">
                               <img src={ dummy } alt="" className="object-cover rounded-2xl  h-full w-full" />
                           </div>
                           <div className="text-wrapper basis-80 flex-1 flex p-5 lg:px-10 justify-center flex-col flex-nowrap gap-5">
                               <h1 className="font-title text-brown font-bold">Veterinarians</h1>
                               <span className="para-text w-10/12 ">No more errors! digiGAI offers the opportunity to access a reliable database about herd health and their breeding cycle to the veterinary doctors. With easy-to-use technology, veterinary specialists can gain real-time access to herd health data remotely and on-site.</span>
                           </div>
                    </SplideSlide>
                     */}
                </Splide>
            </section>
        </> 
    )
}

export default Automation