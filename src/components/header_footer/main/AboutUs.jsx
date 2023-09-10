import snappy from "../../../assets/images/snappy.png"
import prices from "../../../assets/images/prices.png"
import people from "../../../assets/images/people.png"
import navLines4Fix from "../../../assets/images/navLines4-fix.svg"

const flexData = [
    {
        img: snappy,
        headline: "Snappy Process",
        desc: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
    },
    {
        img: prices,
        headline: "Affordable Prices",
        desc: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
    },
    {
        img: people,
        headline: "People First",
        desc: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
    },]

const AboutUs = () => {
  return (
    <section className='px-5 py-32 text-center sm:text-left' >
        <hr className='w-[9.375rem] text-[#C396C6] mb-10 mx-auto sm:mx-0'/>
        <h2 className='font-DM-Serif text-veryDarkViolet text-5xl mb-20 z-50'>We’re different</h2>
        <ul className="flex flex-col sm:flex-row gap-14 mb-[8.75rem]">
            {flexData.map((item,index) => (
                <div key={index} className="flex flex-col items-center sm:items-start">
                    <img src={item.img} alt={item.headline} className="mb-8"/>
                    <h3 className="font-DM-Serif text-2xl mb-4 text-veryDarkViolet">{item.headline}</h3>
                    <p className="font-Karla text-darkGrayishViolet">{item.desc}</p>
                </div>
            ))}
        </ul>

        <div className="bg-darkViolet text-veryLightGray py-[4.5rem] z-10 sm:flex sm:justify-between sm:items-center sm:text-left sm:px-20 sm:py-16 px-6 relative overflow-hidden">
            <h3 className="font-DM-Serif text-4xl mb-10">Find out more <br /> about how we work</h3>
            <button className="uppercase border-[1.5px] py-3 px-6 hover:bg-veryLightGray  hover:text-veryDarkViolet duration-300">How we work</button>
            <img src={navLines4Fix} alt="Nav lines 4" className="absolute top-0 right-0 -z-10 min-h-full"/>
        </div>
    </section>
  )
}

export default AboutUs