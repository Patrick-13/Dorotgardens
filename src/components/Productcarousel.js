import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

const products = [
  {
    name: "Garlic",
    image: "/images/Garlic.png",
    description:
      "Ginger tastes great, but it can be hard work to cook with... there's often lots of peeling, chopping, and crushing involved - unless you use a Dorot Gardens Ginger cube, that is!",
    color: "#bf4e9d",
  },
  {
    name: "Parsley",
    image: "/images/Parsley.png",
    description:
      "Parsley - the most abundant herb in the world, no less - is high in nutrition, and brings a unique taste to any dish where it is involved.",
    color: "#81ac3f",
  },
  {
    name: "Dill",
    image: "/images/Dill.png",
    description:
      "Dill is another member of the parsley family. As a result the two are often used in combination, and found together as part of many recipes - especially for vegetables and meats.",
    color: "#ebab1f",
  },
  {
    name: "Ginger",
    image: "/images/Ginger.png",
    description:
      "Ginger tastes great, but it can be hard work to cook with... there's often lots of peeling, chopping, and crushing involved - unless you use a Dorot Gardens Ginger cube, that is!",
    color: "#5ebbb0",
  },
  {
    name: "Basil",
    image: "/images/Basil.png",
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
    image: "/images/onion.avif",
    description:
      "Sauteed onions give an instantly-recognizable sweetness to any recipe that calls for them - and with Dorot Gardens you can get that sweetness with none of the prep time (or tears)!",
    color: "#e16184",
  },
]

const Productcarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative min-h-screen flex flex-col sm:px-6 md:px-10 justify-center items-center text-center px-4 bg-[#ca95c2] overflow-hidden bg-cover bg-center sm:bg-top lg:bg-center">
      {/* Petals */}
      <img
        src="/images/pink-top-right.webp"
        alt="petals"
        className="hidden lg:block absolute top-0 right-0 w-[30rem] opacity-80 pointer-events-none"
      />

      <img
        src="/images/pink-bottom-left.webp"
        alt="petals"
        className="hidden lg:block absolute bottom-[-1.5rem] left-0 w-[30rem] opacity-80 pointer-events-none"
      />

      {/* Headlines */}
      <div className="z-10 text-center m-20 mb-6 px-6 sm:px-12">
        <h2 className="text-[#740464] font-bold text-xl sm:text-xl mb-2">
          fresh new look
        </h2>
        <h2 className="text-white font-extrabold capitalize font-gelica text-2xl sm:text-2xl mb-4 leading-snug">
          Always Fresh Herbs.
          <br />
          From Our Farm To Your Freezer
        </h2>
      </div>

      {/* Swiper Carousel */}
      <div className="relative z-10 w-full mt-10 max-w-6xl">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          centeredSlides
          loop
          grabCursor
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          coverflowEffect={{
            rotate: 0,
            stretch: 40,
            depth: 200,
            modifier: 1.8,
            slideShadows: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full max-w-[90rem] relative"
        >
          {products.map((product, index) => {
            const isActive = index === activeIndex
            return (
              <SwiperSlide
                key={index}
                className="transition-all duration-500 flex justify-center items-center"
              >
                <div className="flex justify-center items-start h-[32rem] relative">
                  {" "}
                  {/* Fixed height */}
                  {isActive ? (
                    <div className="relative flex flex-col items-center w-full">
                      {/* Floating image */}
                      <div className="relative z-20 -mb-52">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-80 h-auto object-contain drop-shadow-2xl"
                        />
                      </div>

                      {/* Card */}
                      <div className="relative z-10 bg-orchiddark text-white text-center p-4 pt-60 rounded-2xl shadow-lg w-64 sm:w-[18rem] md:w-[20rem]">
                        <h3 className="text-xl font-bold mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm leading-snug max-h-[7rem] sm:max-h-[8rem] md:max-h-[8rem] overflow-y-auto">
                          {product.description}
                        </p>
                        <button
                          className="mt-4 px-5 py-2 text-white font-semibold rounded-full transition-all hover:opacity-90"
                          style={{ backgroundColor: product.color }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[18rem] sm:h-[20rem] lg:h-[22rem] object-contain scale-85 transition-transform duration-500"
                    />
                  )}
                </div>
              </SwiperSlide>
            )
          })}

          {/* Swiper Navigation Buttons */}
          <div className="swiper-button-prev !text-white !left-2 sm:!left-4 !z-50"></div>
          <div className="swiper-button-next !text-white !right-2 sm:!right-4 !z-50"></div>
        </Swiper>
      </div>
      {/* View All Products Button */}

      <div className="relative z-10 mt-16 mb-16">
        <button className="px-8 py-3 bg-orchiddark text-white rounded-full text-lg font-semibold shadow-md hover:bg-orchiddark">
          View All Products
        </button>
      </div>
    </div>
  )
}
export default Productcarousel
