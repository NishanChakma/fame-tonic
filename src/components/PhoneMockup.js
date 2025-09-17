import Image from "next/image";
import img from "../public/images/phone-mockup.png";

export default function PhoneMockup() {
  return (
    <div className="w-full max-w-sm md:max-w-lg">
      <Image
        src={img}
        alt="Phone Mockup"
        width={600}
        height={1200}
        priority // 👈 This is the fix for LCP
        className="w-full h-auto object-contain"
        draggable={false}
      />
    </div>
  );
}
