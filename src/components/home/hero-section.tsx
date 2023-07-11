import Image from "next/image";
import photo from "@/assests/photo3.png";

export default function HeroSection() {
  return (
    <div className="w-full h-[60vh] lg:h-[73vh] pt-[15vh] md:pt-[13vh] px-10 flex flex-col lg:flex-row items-center justify-center bg-[#E4002B]">
      <div data-aos="fade-right" className="space-y-5 mb-5">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-50">
          Food Recipe
        </h1>
        <p className="text-slate-200">
          Helping you cook variety of dishes all over the world.
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="relative w-full md:w-1/2 h-full -mb-20 sm:-mb-32 md:-mb-44"
      >
        <Image
          priority
          src={photo}
          alt="hero section"
          layout="fill"
          className=" object-contain"
        />
      </div>
    </div>
  );
}
