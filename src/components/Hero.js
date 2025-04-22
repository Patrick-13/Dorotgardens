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
    <div className="relative h-[70vh] w-full overflow-hidden">
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
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-start px-14 md:px-20 pt-20 md:pt-32">
            <div className="text-white text-left max-w-md space-y-6 ml-8 md:ml-24">
              <p className="font-extrabold  text-3xl md:text-2xl  opacity-80">
                {slide.topText}
              </p>
              <div className="text-9xl md:text-9xl font-extrabold leading-tight">
                {slide.mainLines}
              </div>
              <p className="text-3xl md:text-xl">{slide.description}</p>
              <button className="mb-12 text-2xl font-bold py-6 px-24 bg-[#c178b4] hover:bg-[#d38ec0] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:opacity-90 transition self-center">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-4 w-4 rounded-full transition-all duration-300 ${
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
