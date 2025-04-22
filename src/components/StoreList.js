import React from "react"
import { IoLocationOutline } from "react-icons/io5"

const stores = [
  { name: "Walmart", logo: "/images/walmart.png" },
  { name: "Whole Foods", logo: "/images/wholefoods.png" },
  { name: "Trader Joe's", logo: "/images/traderjoes.png" },
  { name: "Wegmans", logo: "/images/wegmans.png" },
  { name: "Albertsons", logo: "/images/albertsons.png" },
  { name: "Wild Fork", logo: "/images/wildfork.png" },
  { name: "H-E-B", logo: "/images/heb.png" },
  { name: "ShopRite", logo: "/images/shoprite.png" },
]

export default function StoreList() {
  return (
    <div className="bg-ultraviolet py-12 px-4 text-white text-center w-full">
      <p className="mb-6 font-bold text-lichepurple text-2xl max-w-3xl mx-auto">
        Find the Dorot Gardens range at the freezer aisle at your local grocery,
        including these amazing stores:
      </p>

      {/* FLEX ROW, WRAPS ON SMALL SCREENS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {stores.map(store => (
          <div key={store.name} className="flex justify-center items-center">
            <img
              src={store.logo}
              alt={store.name}
              className="h-20 sm:h-24 md:h-28 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-[#70005a] hover:bg-[#8f2074] px-16 py-4 rounded-full font-bold shadow-lg  text-white text-2xl flex items-center transition">
          <IoLocationOutline className="mr-2" size={24} />
          <span>Find The Nearest Store</span>
        </button>
      </div>
    </div>
  )
}
