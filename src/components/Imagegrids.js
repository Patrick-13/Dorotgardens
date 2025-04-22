import React from "react"

const products = [
  {
    img: "/images/image1.jpeg",
    title: "Herbed Matzo Ball Soup",
    description:
      "Garlic adds big flavor to everything, but let's be honest... the peeling, chopping, and sticky fingers? Not so fun. That's why Dorot Gardens pre-portioned, fresh...",
  },
  {
    img: "/images/image2.jpeg",
    title: "Braised Short Rib",
    description: "This isn't you average turkey juicy, buttery, and packed with flavor thanks to our Garlic, Glazed Onions & Cilantro flash-frozen cubes. No chopping. No sauteing....",
  },
  {
    img: "/images/image3.jpeg",
    title: "Sauteed Glazed",
    description: "Why chop when you can pop? Let's be real, nobody loves chopping onions. The mess. The tears. The lingering smell on your hands. That's why we made it...",
  },
  {
    img: "/images/image4.jpeg",
    title: "Braised Short Rib",
    description: `comment "RECIPE" to get this Cantonese short rib recipe to your inbox! @dorotgardens makes it so easy to bring big flavor to every meal. I used their pre-...`,
  },
  {
    img: "/images/image5.jpeg",
    title: "Braised Short Rib",
    description: "Fluffy, herby, and oh-so-cozy! This Herbed Matzo Ball Soup is Passover perfection, made easy with Dorot Garden's pre-portioned, frozen Parsley...",
  },
  {
    img: "/images/image6.jpeg",
    title: "Braised Short Rib",
    description: "Homemade treats = happy pups! These DIY Dorot Gardens Parsley dog treats are easy, healthy, and perfect for fresh breath. No artificial ingredients, jus...",
  },
  {
    img: "/images/image7.jpeg",
    title: "Braised Short Rib",
    description: "A little pop of ginger, no prep required! Our flash-frozen, pre-portioned ginger makes it easy to add fresh flavor (without the hassle of mincing or grating). Just Po...",
  },
  {
    img: "/images/image8.jpeg",
    title: "Spring Flavors",
    description: "Spring flavors, simplified. This Dorot Gardens Herb Ricotta Toast is fresh, light, and packed with flavor, without all the chopping or cleanup just Pop. Drop. Don...",
  },
  // Add 6 more product items here
]

const ImageGrid = () => {
  return (
    <div className="flex flex-col items-center bg-[#c16ab1] py-12">
      <div className="text-center text-[#720062] mb-8 max-w-xl">
        <p className="font-semibold">
          Explore our recipes and discover your new favorite dishes & flavor
          combinations!
        </p>
        <h2 className="text-3xl font-extrabold">Follow Us on Instagram</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
  {products.map((item, index) => (
    <div
      key={index}
      className="relative group w-[325px] h-[225px] overflow-hidden"
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />

      {/* Semi-black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />

      {/* Description text */}
      <div className="absolute bottom-0 left-0 w-full bg-[#720062] bg-opacity-70 text-white px-2 py-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <p className="text-[15px] leading-tight">{item.description}</p>
      </div>
    </div>
  ))}
</div>

     
    </div>
  )
}

export default ImageGrid
