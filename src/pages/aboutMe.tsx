// Icons
import { personalInfo } from "@/shared";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export const AboutMe = () => {
  return (
    <section id='aboutMe' className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Who I am
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          {personalInfo.mainDescription}
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          
          <img
            src="profilepicture.jpg"
            className="w-40 h-40 md:w-40 md:h-40 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Santiago Triviño</h3>
          
        </div>
      </div>
    </section>
  );
};

