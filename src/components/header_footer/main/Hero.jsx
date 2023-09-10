import heroImg from "../../../assets/images/heroImg.png"


const Hero = () => {
  return (
    <section className="sm:flex  sm:flex-row-reverse sm:max-h-[37.5rem] bg-darkViolet text-veryLightGray sm:py-24 sm:px-10 lg:px-40" >
        <img src={heroImg} alt="Hero Image" className="sm:max-w-[540px] w-[100%] sm:h-[40rem] flex-shrink-[0.5] " />
        <div className=" sm:text-left sm:py-0  px-5 py-20 text-center ">
            <hr  className="w-[9.375rem] hidden mb-16 sm:flex"/>
            <h1 className="font-normal text-5xl font-DM-Serif mb-4">Humanizing <br /> your insurance.</h1>
            <p className="font-Karla mb-8 ">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
            <button className="border duration-300 font-Karla py-3 px-7 uppercase hover:bg-veryLightGray hover:text-veryDarkViolet">View plans</button>
        </div>
    </section>
  )
}

export default Hero