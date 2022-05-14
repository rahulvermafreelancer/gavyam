
import explainer from "./explainer.svg"

export const CattleManagement = () =>{
    return (
        <section className="my-20 xl:my-28">
        <section className="max-w-screen-2xl flex flex-col gap-sm flex-nowrap font-regular">
            <section className="flex flex-col gap-6  lg:gap-12 lg:w-10/12 mx-auto px-4 py-6  ">
                <h1 className="font-title text-brown font-bold w-96">Cattle management made easy!</h1>
                <span className="mx-auto max-w-lg text-green para-text ">The digiGAI cattle management system simplifies monitoring a cattle's health and tracking all cattle-related data efficiently. Veterinary doctors and dairy farmers can access real-time information remotely with an interactive cloud-based dashboard to save time and effort.</span>
            </section>
            <section className="lg:w-10/12 mx-auto my-4 lg:my-10 px-4 xl:px-10 ">
                <img src={ explainer } alt="" className="mx-auto " />

            </section>
        </section>
        </section>
    )
}

export default CattleManagement