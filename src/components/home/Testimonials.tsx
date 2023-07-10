"use client";

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

import TestimonialCard from "./testimonial-card";

const testimonials = [
  {
    name: "Jennie Carroll",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Dale Silva",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Easter Howard",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Gape Peter",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Meghan Fleming",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
];

export default function Testimonials() {
  const plugins = [
    new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false }),
    new Pagination({
      type: "bullet",
    }),
  ];

  return (
    <div className="p-10" data-aos="zoom-in">
      <div className="text-center space-y-3 mb-9">
        <h1 className="text-2xl sm:text-3xl font-bold font-serif">
          What do they say about us
        </h1>
        <p className="text-slate-500">
          Lots of comments about us, here&apos;s what they said
        </p>
      </div>
      <Flicking
        plugins={plugins}
        viewportTag="div"
        cameraTag="div"
        cameraClass=""
        renderOnSameKey={false}
        align="prev"
        horizontal={true}
        circular={true}
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} name={t.name} image={t.image} />
        ))}
        <ViewportSlot>
          <div className="flicking-pagination"></div>
        </ViewportSlot>
      </Flicking>
    </div>
  );
}
