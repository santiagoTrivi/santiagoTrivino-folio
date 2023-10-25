
import {
  RiStarFill,
} from "react-icons/ri";

export const Intro = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Hi there <br />
            I am Santiago, Backend Developer
            
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Help find solutions with intitutive and in accordance with client
            business goals. we provide a high-quality services.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-black text-white py-2 px-8 rounded-xl text-xl">
              Contact Us
            </button>
            
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="hero.png"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
                
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              120 + Employees
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> 5.0 (3.1k Reviews)
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
};

