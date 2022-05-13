
import { Splide, SplideSlide  } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import dummy from "./assets/dummy.png"

const Automation =  () =>{
    const splideOptions = {
        type:"loop",
        perPage:1,
        pagination:true,
        drag:true,
        autoplay:true,
        interval:1000,
        autoHeight:true,
        lazyLoad:"sequential",
        arrows:true,
        padding:0
    }


    return (
        <>
            <h1 className="blade-title font-bold text-brown font-regular px-4 text-center mb-10">Embrace Automation</h1>
            <section className='mx-auto max-w-screen-2xl '>
                <Splide options = { splideOptions }  className="banner-master font-regular ">
                    <SplideSlide className='flex flex-wrap'>
                        <div className='w-11/12 mx-auto flex flex-wrap'>
                            <div className='basis-56  grow shrink grid place-content-center '>
                                <img src={ dummy } className="object-contain  " alt="" />
                            </div>
                            <div className='basis-72 grow shrink flex items-start justify-center flex-col gap-4  '>
                                <h1 className='blade-title text-earth pb-10 '> Veterinarians</h1>
                                <span className='font-subtitle  text-green md:w-9/12  '>No more errors! digiGAI offers the opportunity to access a reliable database about herd health and their breeding cycle to the veterinary doctors. With easy-to-use technology, veterinary specialists can gain real-time access to herd health data remotely and on-site.</span>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </section>
        </> 
    )
}

export default Automation