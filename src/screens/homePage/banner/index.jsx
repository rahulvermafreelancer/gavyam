import "./index.css"
import hero from "../../../assets/banner/hero.png"
export default () =>{
    return (
        <section className="max-w-screen-2xl bg-earth font-regular ">
            <section className="lg:w-10/12 mx-auto  py-6 flex flex-wrap-reverse  items-start gap-6 ">
                <div className=" flex-1 basis-[20rem] flex flex-col justify-start  px-4 md:px-8 lg:px-14  h-[25rem]  xl:h-[30rem] py-4 xl:py-10">
                    <h1 className="font-title text-brown   " style={{fontWeight:"bold"}}>INCREASE DAIRY PRODUCTION, WITHOUT RISK OR ERRORS!</h1>
                    <span className="para-text text-white ">Digitizing the Herd Monitoring and Breeding System to Enhance Cattle Management/ Animal Welfare / Herd Efficiency / Farm Productivity</span>
                </div>
                <div className="flex-1 basis-[25rem] img-wrapper h-[30rem] px-10 rounded-br-[5rem] xl:h-[35rem] relative  ">
                    <div className=" d mx-auto corousel_wrapper  -mb-10 bg-brown flex items-end mt-auto  ">
                        <img src={ hero } alt="" className=" w-full" />
                    </div>
                </div>
            </section>
        </section>
    )
}