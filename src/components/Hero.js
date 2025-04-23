import React, { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "/images/hero1.png",
    custom: true,
    topText: "cooking prep made simple",
    mainLines: "Pop. Drop. Done.",
    description:
      "Dorot Gardens pre-proportioned garlic, onions and herbs eliminate chopping and measuring, making it effortless to season and flavor your cooking",
  },
  {
    id: 2,
    image: "/images/hero2.png",
    custom: true,
    topText: "cooking prep made simple",
    mainLines: "Pop. Drop. Done.",
    description:
      "Dorot Gardens pre-proportioned garlic, onions and herbs eliminate chopping and measuring, making it effortless to season and flavor your cooking",
  },
  {
    id: 3,
    image: "/images/hero3.jpg",
    custom: true,
    topText: "cooking prep made simple",
    mainLines: "Pop. Drop. Done.",
    description:
      "Dorot Gardens pre-proportioned garlic, onions and herbs eliminate chopping and measuring, making it effortless to season and flavor your cooking",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt="Slide background"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start px-6 sm:px-10 md:px-20 lg:px-32">
            <div className="text-white max-w-xl space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl font-bold opacity-80">
                {slide.topText}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                {slide.mainLines}
              </h1>
              <p className="text-base sm:text-lg md:text-xl">
                {slide.description}
              </p>
              <button className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl font-bold py-3 sm:py-4 px-6 sm:px-10 bg-[#c178b4] hover:bg-[#d38ec0] rounded-full shadow-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "bg-white"
                : "bg-white bg-opacity-40 hover:bg-opacity-80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
