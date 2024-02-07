import Image from "next/image";
import image2 from "@/public/blue-wave.svg";
import image1 from "@/public/sponsor.webp";
const PageTitle = () => {
  return (
    <div>
      <div className="w-full relative -z-10 -mb-14">
        <Image src={image1} alt="Background image 1" className="w-screen" />
        <Image
          src={image2}
          alt="Background image 2"
          className="w-screen top-[42%] absolute"
        />
      </div>
      <div className="flex flex-col 2xl:left-[9%] 2xl:top-[35%] left-[6%] top-[30%] absolute ">
        <p className="2xl: text-4xl font-sans font-semibold text-[40px] text-robosub-yellow mb-3">
          Support Us
        </p>
        <p className="2xl: text-4xl italic font-thin text-[50px]">
          Keep Our Aquatic Legacy Flowing!
        </p>
      </div>
    </div>
  );
};

export default PageTitle;
