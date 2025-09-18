import Image from "next/image";
import star from "../../public/images/star.png";
import Vector from "../../public/images/Vector.png";
import { textArr } from "@/utils";

export default function MainContent() {
  return (
    <div className="w-full mt-[300px] md:w-[516px] md:mt-[50px]">
      <p className="font-['Urbanist'] font-bold text-[35px] text-white leading-[100%] tracking-[0%] align-middle max-md:text-[25px] max-md:text-center max-md:pl-3 max-md:pr-3">
        Want to Turn Social Media Into a Profitable Career?
      </p>
      <p className="font-['Urbanist'] font-bold text-[25px] leading-[100%] tracking-[0%] align-middle text-[#00E7F9] [text-shadow:0_4px_4px_#FC004E,_0_0_10px_#FC004E] pt-[5px] pb-[20px] text-center md:text-[35px] md:pt-[20px] md:pb-[30px] md:text-left">
        Discover your way to success with Fametonic:
      </p>
      {textArr.map((item, i) => (
        <div key={i} className="flex items-center pb-[15px]">
          <Image src={star} alt="star" className="h-[22px] w-[22px]" />
          <p className="font-figtree font-semibold text-[16px] text-white leading-[22px] align-middle pl-[5px] max-md:text-[16px]">
            {item}
          </p>
        </div>
      ))}

      <div className="flex flex-col max-md:flex-col-reverse">
        <div>
          <button className="w-[313px] h-10 flex items-center justify-center bg-[#fc004e] rounded-lg shadow-[2px_2px_10px_#00e7f9] mt-5 transition-transform duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-[4px_4px_15px_#00e7f9] active:scale-[0.98] active:shadow-[1px_1px_6px_#00e7f9] max-md:w-full">
            <p className="text-white font-extrabold text-[20px] font-Figtree leading-[100%] tracking-[0%] pr-2 md:text-[20px]">
              GET STARTED
            </p>
            <Image src={Vector} alt=">" className="h-[11px] w-[7px]" />
          </button>
          <p className="text-white font-normal text-[12px] font-Figtree leading-[16px] tracking-normal w-[313px] py-[10px] pb-[20px] text-center max-md:w-full">
            1-minute quiz for personalized Insights
          </p>
        </div>
        <div>
          <p className="text-[#ababab] font-medium text-[12px] font-figtree leading-[100%] tracking-[0%] pt-5 sm:pt-2.5 max-sm:text-center max-w-[500px]">
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
          <p className="text-[#ababab] font-medium text-[12px] font-figtree leading-[100%] tracking-[0%] pt-5 sm:pt-2.5 max-sm:text-center">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
