// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export const AboutMe = () => {
  return (
    <div id='aboutMe' className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Who I am
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
          lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
          turpis amet id posuere torto quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          
          <img
            src="profilepicture.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Santiago Triviño</h3>
          
        </div>
      </div>
    </div>
  );
};

