import React from "react"

const categories = [
  { label: "Family Meals", image: "/images/Menu1.png" },
  { label: "Hearty Soups", image: "/images/Menu2.png" },
  { label: "Chicken", image: "/images/Menu3.png" },
  { label: "Fish", image: "/images/Menu4.png" },
  { label: "Vegetarian", image: "/images/Menu5.png" },
  { label: "Dips", image: "/images/Menu6.png" },
]

const Menu = () => {
  return (
    <div className="bg-orchid py-12 px-4 text-center min-h-screen">
      <h2 className="text-white mb-8">
        <span className="text-white text-xl font-bold mb-8">
          Explore our recipes and discover your new favorite dishes & flavor
          combinations!
        </span>
        <br />
        <span className="text-white text-2xl font-extrabold">
          Find Inspiration For Your Next
        </span>{" "}
        <br />
        <span className="text-white text-2xl font-extrabold">
          Culinary Masterpiece
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-2">
        {categories.map(({ label, image }) => (
          <div
            key={label}
            className="relative overflow-hidden cursor-pointer group shadow-2xl w-full aspect-[4/5]"
          >
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#70005a] text-white px-6 py-2.5 rounded-full text-base font-semibold shadow-md min-w-[150px] text-center">
              {label}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-[#70005a] text-white text-xl px-16 py-4 rounded-full  font-bold shadow-lg hover:bg-[#8f2074] hover:opacity-90 transition">
        Browse More Recipes
      </button>
    </div>
  )
}

export default Menu
