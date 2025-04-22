import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import StoreList from "../components/StoreList"
import Certificate from "../components/Certificate"
import Seo from "../components/seo"

export default function Product() {
  return (
    <Layout>
      <img
        src="/images/ProductOuterHero.webp"
        alt="Dorot Gardens Logo"
        className="w-full h-auto cursor-pointer"
      />
      <Certificate />

      {/* Section with background image */}
      <div className="relative bg-orchid py-10 overflow-hidden">
        {/* Decorative Image - Top Right */}
        <img
          src="/images/pink.webp"
          alt="Design"
          className="absolute top-0 right-0 w-48 h-auto pointer-events-none select-none"
        />

        {/* Left-aligned content */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white font-extrabold text-5xl mb-6">
            See the whole lineup of <br />
            Dorot Gardens products here!
          </h2>

          <p className="text-white font-semibold text-2xl leading-relaxed max-w-4xl">
            Our flash-frozen pre-portioned garlic, onions, and herb packs give
            you all of the flavor of fresh ingredients, but without the pesky
            chopping and measuring. With Dorot Gardens products on your side,
            adding seasoning and flavor to any dish you make has never been
            easier!
          </p>
        </div>
      </div>

      <StoreList />
      <Menu />
    </Layout>
  )
}
export const Head = () => <Seo title="See the Whole Lineup of Dorot Gardens Products Here!" />
