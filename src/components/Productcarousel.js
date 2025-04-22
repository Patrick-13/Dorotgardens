import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

const products = [
  {
    name: "Garlic",
    image: "/images/garlic.png",
    description:
      "Ginger tastes great, but it can be hard work to cook with... there's often lots of peeling, chopping, and crushing involved - unless you use a Dorot Gardens Ginger cube, that is!",
    color: "#bf4e9d",
  },
  {
    name: "Parsley",
    image: "/images/parsley.png",
    description:
      "Parsley - the most abundant herb in the world, no less - is high in nutrition, and brings a unique taste to any dish where it is involved.",
    color: "#81ac3f",
  },
  {
    name: "Dill",
    image: "/images/dill.png",
    description:
      "Dill is another member of the parsley family. As a result the two are often used in combination, and found together as part of many recipes - especially for vegetables and meats.",
    color: "#ebab1f",
  },
  {
    name: "Ginger",
    image: "/images/ginger.png",
    description:
      "Ginger tastes great, but it can be hard work to cook with... there's often lots of peeling, chopping, and crushing involved - unless you use a Dorot Gardens Ginger cube, that is!",
    color: "#5ebbb0",
  },
  {
    name: "Basil",
    image: "/images/basil.png",
    description:
      "Ah, the king of herbs! You can add basil to almost any dish and take the flavor to the next level. Fish, pasta, soups and more can all benefit from having a basil cube or two in the mix!",
    color: "#bf2125",
  },
  {
    name: "Turmeric",
    image: "/images/Tumeric.png",
    description:
      "You'll find Turmeric called for in recipes for many different types of dishes, as well as in sauces and marinades - and even better, some people believe that is has health benefits too!",
    color: "#3b9dc9",
  },
  {
    name: "Sauteed glazed Onions",
    image: "/images/onions.png",
    description:
      "Sauteed onions give an instantly-recognizable sweetness to any recipe that calls for them - and with Dorot Gardens you can get that sweetness with none of the prep time (or tears)!",
    color: "#e16184",
  },
]

const Productcarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-[#ca95c2] overflow-hidden bg-cover bg-center sm:bg-top lg:bg-center">
      {/* Petals */}
      <img
        src="/images/pinktop.webp"
        alt="petals"
        className="absolute top-0 right-0 w-[20rem] sm:w-[30rem] opacity-80 pointer-events-none"
      />
      <img
        src="/images/pink.webp"
        alt="petals"
        className="absolute bottom-[-1.5rem] left-0 w-[20rem] sm:w-[30rem] opacity-80 pointer-events-none"
      />

      {/* Headlines */}
      <div className="z-10 text-center mb-6 px-6 sm:px-12">
        <h2 className="text-[#740464] font-bold text-2xl sm:text-3xl mb-2">
          fresh new look
        </h2>
        <h2 className="text-white font-extrabold text-4xl sm:text-5xl mb-4 leading-snug">
          Always Fresh Herbs.
          <br />
          From Our Farm To Your Freezer
        </h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        centeredSlides
        slidesPerView={3}
        loop
        grabCursor
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.8,
          slideShadows: false,
        }}
        className="w-full max-w-[90rem] relative"
      >
        {products.map((product, index) => {
          const isActive = index === activeIndex;
          return (
            <SwiperSlide
              key={index}
              className="transition-all duration-500 flex justify-center items-center"
            >
              {isActive ? (
                <div className="bg-[#70005a] text-white rounded-xl overflow-hidden p-6 flex flex-col justify-between h-[40rem] sm:h-[45rem] lg:h-[50rem] w-[25rem] sm:w-[28rem] lg:w-[32rem] shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto mb-4 h-72 sm:h-80 lg:h-96 object-contain"
                  />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">{product.name}</h3>
                  <p className="text-lg sm:text-xl lg:text-2xl text-center leading-snug mb-6">{product.description}</p>
                  <button
                    className="text-xl sm:text-2xl lg:text-3xl font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition self-center"
                    style={{ backgroundColor: product.color }}
                  >
                    Learn More
                  </button>
                </div>
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[18rem] sm:h-[20rem] lg:h-[22rem] object-contain opacity-70 scale-90 transition-transform duration-500"
                />
              )}
            </SwiperSlide>
          );
        })}

        {/* Swiper Navigation Buttons */}
        <div className="swiper-button-prev !text-white !left-0 !z-50"></div>
        <div className="swiper-button-next !text-white !right-0 !z-50"></div>
      </Swiper>

      {/* View All Products Button */}
      <div className="z-10 mt-10">
        <button className="bg-[#70005a] text-white text-xl sm:text-2xl lg:text-3xl px-12 py-4 rounded-full font-bold shadow-lg hover:bg-[#8f2074] hover:opacity-90 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};
export default Productcarousel