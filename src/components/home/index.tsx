import HeroSection from "./HeroSection";

export default function page() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Numbers Counting */}
      <div className="p-10 mt-20 md:mt-28 lg:mt-20 flex justify-between items-center flex-wrap">
        <div className="w-1/2 lg:w-1/4 mb-14 space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-rose-700">
            500+
          </h1>
          <h3 className="text-lg font-medium text-stone-700">Recipes</h3>
        </div>
        <div className="w-1/2 lg:w-1/4 mb-14 space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-rose-700">
            40+
          </h1>
          <h3 className="text-lg font-medium text-stone-700">Cuisines</h3>
        </div>
        <div className="w-1/2 lg:w-1/4 mb-14 space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-rose-700">
            20+
          </h1>
          <h3 className="text-lg font-medium text-stone-700">Diet Food</h3>
        </div>
        <div className="w-1/2 lg:w-1/4 mb-14 space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-rose-700">
            1K+
          </h1>
          <h3 className="text-lg font-medium text-stone-700">Contributor</h3>
        </div>
      </div>

      {/* Display Dishes */}

      {/* Testimonials */}

      {/* App */}
    </div>
  );
}
