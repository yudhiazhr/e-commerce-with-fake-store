import WomanImg from "../assets/img/woman_autumn.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="h-[800px] w-full ">
        <div className="container mx-auto flex justify-around h-full">
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="absolute w-0 md:w-20 xl:w-32 h-[5px] left-0 md:top-[22%] bg-primary mr-3"></div>
              <h1 className="text-7xl mb-2">NEW</h1>
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4">
               Collection at our Autumn Sale!  <br />
            </h1>
            <h2 className="text-[32px] mb-4 italic font-secondary">Great Deals and Fashionable Finds!</h2>
            <Link
              to={"/"}
              className="self-start uppercase font-semibold border border-primary p-4 bg-primary text-white hover:bg-gray-700 transition duration-300"
            >
              Discover More
            </Link>
          </div>
          <div className=" -z-10 absolute w-[100%] md:w-[63.5%] right-0 h-[85%] bg-orange-100"></div>
          <div className="hidden lg:block">
            <img className="h-[90%] w-[100%]" src={WomanImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
