import HeroSection from "./hero-section";
import Recipes from "./recipes";
import Testimonials from "./Testimonials";

export default function page() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Showing quantity */}
      <div
        data-aos="fade-up"
        className="p-10 mb-[10vh] mt-24 sm:mt-32 md:mt-24 lg:mt-28 flex justify-between items-center flex-wrap"
      >
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

      {/* Popular Recipes */}
      <Recipes />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
