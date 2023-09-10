import insure from "../../assets/images/inuserSvg.svg"
import navLines6 from "../../assets/images/navLines6.svg"

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
        <nav aria-label='footer_nav' className="w-[100%] flex flex-col sm:flex-row sm:justify-between items-center">
            <img src={insure} alt="Logo Insure" className="mb-8 max-w-[7rem]"/>
            <div className="text-darkGrayishViolet mb-10 duration-300 cursor-pointer">
                <FacebookIcon className="hover:text-veryDarkViolet " />
                <TwitterIcon className="hover:text-veryDarkViolet" />
                <PinterestIcon  className="hover:text-veryDarkViolet"/>
                <InstagramIcon className="hover:text-veryDarkViolet"/>
            </div>
        </nav>
        <hr className="min-w-full text-dadada mb-10"/>
        <section className="font-Karla min-w-full flex flex-col sm:flex-row sm:justify-between  uppercase font-bold tracking-widest gap-10">
            <div className="flex flex-col items-center sm:items-start ">
                <h6 className="text-darkGrayishViolet uppercase font-bold mb-9 ">Our Company</h6>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">How we work</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet ">Why insure?</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Check price</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Reviews</a>
            </div>
            <div className="flex flex-col items-center sm:items-start ">
                <h6 className="text-darkGrayishViolet uppercase font-bold mb-9 ">Help me</h6>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Faq</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Terms of use</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Privacy police</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Cookies</a>
            </div>
            <div className="flex flex-col items-center sm:items-start">
                <h6 className="text-darkGrayishViolet  uppercase font-bold mb-9 ">Contact</h6>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Sales</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Support</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Live chat</a>
            </div>
            <div className="flex flex-col items-center sm:items-start">
                <h6 className="text-darkGrayishViolet uppercase font-bold mb-9 ">Others</h6>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Careers</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Press</a>
                <a href="#" className="mb-4 hover:text-darkGrayishViolet">Licenses</a>
            </div>
        </section>
        <img src={navLines6} alt="Nav Lines 5" className="absolute top-0 left-0 -z-10" />
    </>
  )
}

export default Footer