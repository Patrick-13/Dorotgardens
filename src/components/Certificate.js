import React from "react"

export default function Certificate() {
  const images = [
    { label: "Farm Fresh", src: "/images/farmfresh.png" },
    { label: "Vegan", src: "/images/vegan.png" },
    { label: "Parve", src: "/images/Parve.png" },
    { label: "Gluten Free", src: "/images/Glutenfree.png" },
    { label: "Non Gmo", src: "/images/Nongmo.png" },
    { label: "Long Shelf Life", src: "/images/Longshelflife.png" },
    { label: "Halal", src: "/images/Halal.png" },
  ]

  return (
    <div className="bg-white py-10">
      <div className="flex justify-between gap-4 mx-auto px-4 w-full">
        {images.map(({ label, src }, index) => (
          <div key={index} className="flex-1 text-center">
            <img
              src={src}
              alt={label}
              className="w-[10rem] h-auto object-contain mx-auto mb-4"
            />
            <span className="text-2xl font-bold text-orchiddark">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
