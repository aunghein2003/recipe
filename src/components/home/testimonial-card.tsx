import { forwardRef, ForwardedRef, HTMLAttributes } from "react";
import Image from "next/image";

interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  image: string;
}

const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ name, image, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        {...props}
        className="p-5 mb-8 flex flex-col w-full mx-1 md:w-[45%] md:mx-[5%] lg:w-[30%] lg:mx-[2.5%] space-y-3 rounded-md shadow-md bg-gray-200"
      >
        <div className="w-14 h-14 mx-auto relative">
          <Image
            fill
            className="object-contain rounded-full ring-4 ring-white"
            src={image}
            alt="profile"
          />
        </div>
        <h3 className="text-center text-lg font-semibold text-slate-400">
          {name}
        </h3>
        <p className="text-slate-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio culpa
          fugiat officia laboriosam, animi magni unde impedit dolorum
          praesentium, nam officiis illum soluta, veritatis nihil facilis
          incidunt quis adipisci ducimus.
        </p>
      </div>
    );
  }
);

TestimonialCard.displayName = "Testimonial";

export default TestimonialCard;
