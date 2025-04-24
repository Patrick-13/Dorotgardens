import { motion } from "framer-motion"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageGrid from "../components/Imagegrids"
import Aboutproductcarousel from "../components/Aboutproductcarousel"

export default function About() {
  const products = [
    { name: "Parsley", image: "/images/Parsley.png" },
    { name: "Dill", image: "/images/Dill.png" },
    { name: "Garlic", image: "/images/Garlic.png" },
    { name: "Ginger", image: "/images/Ginger.png" },
    { name: "Basil", image: "/images/Basil.png" },
    { name: "Cilantro", image: "/images/Cilantro.png" },
    { name: "Onions", image: "/images/onions.png" },
  ]

  return (
    <Layout>
      <section>
        <div className="relative min-h-screen sm:h-screen text-white">
          <img
            src="/images/mobile_banner.png"
            alt="Mobile Banner"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <img
              src="/images/logo.png"
              alt="Dorot Gardens"
              className="mb-6 w-60"
            />

            <h1 className="text-3xl sm:text-4xl font-extrabold">
              <span className="px-2 py-1 rounded">
                Same high quality freshness.
              </span>
              <br />
              <span className="px-2 py-1 rounded">Brand new look.</span>
            </h1>
          </div>

          {/* Scrolling product bar */}
          <motion.div
            className="absolute bottom-0 flex w-[200%] gap-8 sm:gap-16 md:gap-32 py-4 px-2 sm:px-6 md:px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {/* Original Product Images */}
            <div className="flex gap-8 sm:gap-16 md:gap-32 w-full">
              {products.map((product, index) => (
                <motion.div
                  key={`original-${index}`}
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-auto flex justify-center items-center relative z-10 cursor-pointer product-image"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-auto max-h-20 sm:max-h-24 md:max-h-28"
                  />
                </motion.div>
              ))}
            </div>

            {/* Duplicate Product Images */}
            <div className="flex gap-8 sm:gap-16 md:gap-32 w-full">
              {products.map((product, index) => (
                <motion.div
                  key={`dupl-${index}`}
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-auto flex justify-center items-center relative z-10 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-auto max-h-20 sm:max-h-24 md:max-h-28"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Top Left - Image */}
          <div
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(/images/farm.webp)` }}
          ></div>

          {/* Top Right - Text */}
          <div className="bg-[#CC4AA7] text-white p-10 flex flex-col justify-center">
            <h3 className="text-sm font-bold uppercase">
              always fresh, always available
            </h3>
            <h2 className="text-2xl font-extrabold mt-2 mb-4">
              Dorot Gardens products are truly one-of-a-kind!
            </h2>
            <p className="text-sm leading-relaxed">
              Dorot Gardens was initially established in 1992, and is owned by
              Kibbutz Dorot in the southern part of Israel.
              <br />
              <br />
              The kibbutz has more than 3,500 acres of field crops which are
              picked, and then immediately chopped, packaged and frozen in a
              unique fast freeze process. This ensures that they maintain their
              taste, freshness and nutritive value.
              <br />
              <br />
              Behind that process and the great-tasting products it creates, the
              company has grown and expanded well over the years – to the point
              where today it is the largest supplier of fresh frozen seasoning
              products in Israel.
            </p>
          </div>

          {/* Bottom Left - Text */}
          <div className="bg-[#CC4AA7] text-white p-10 flex flex-col justify-center">
            <h3 className="text-sm font-bold uppercase">
              keeping fresh using advanced machinery
            </h3>
            <h2 className="text-2xl font-extrabold mt-2 mb-4">
              Modern and Automated Production Facility
            </h2>
            <p className="text-sm leading-relaxed">
              Our production facility is fully automated and equipped with
              top-of-the-line machinery. The plant operates three different
              production lines: the unique individual product packaging trays,
              product jars for private home use, and the larger pails for the
              food service and industrial markets. All told we can produce about
              4,000 trays per hour, and the overall annual turnout reaches
              several million trays and jars.
              <br />
              <br />
              At the same time, our R&D department invests considerable time and
              resources into developing new products, keeping the company in a
              constant state of growth and moving towards achieving new
              objectives as they are set.
            </p>
          </div>

          {/* Bottom Right - Image */}
          <div
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(/images/factory.webp)` }}
          ></div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#720062] text-white">
          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold">
              Some of our quality standards & certifications
            </h3>
          </div>
          <div className="p-10 flex flex-col justify-center space-y-5">
            <h4 className="text-2xl font-bold">
              ISO 22000 Food Safety Management System
            </h4>
            <h4 className="text-2xl font-bold">
              US Food & Drug Administration HACCP
            </h4>
            <h4 className="text-2xl font-bold">
              Kosher standards set by the Court of Justice of the Jewish
              Orthodox Community
            </h4>
            <h4 className="text-2xl font-bold">Non GMO</h4>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#BD7AB3] py-16 px-4 text-white text-center">
          <h3 className="text-lg font-semibold mb-2">
            from our company&apos;s past to our future
          </h3>
          <h2 className="text-3xl font-extrabold mb-12">
            The Dorot gardens Story So Far...
          </h2>

          <div className="flex justify-center">
            <picture>
              <source
                srcSet="/images/timeline_mobile.png"
                media="(max-width: 640px)"
              />
              <img
                src="/images/timeline.webp"
                alt="Dorot Gardens Story Timeline"
                className="w-full max-w-4xl h-auto"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#CC4AA7] text-white">
          <div className="flex justify-center">
            <img
              src="/images/ouplans.png"
              alt="Dorot Garden Plans"
              className="w-full max-w-4xl h-full"
            />
          </div>
          <div className="p-10 flex flex-col justify-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold">
                Our plans for the years to come…
              </h1>
            </div>
            <p className="text-lg font-bold">
              Dorot Gardens is committed to constant innovation through keeping
              a close eye on the market and listening to its needs. Our
              pre-portioned packaging is a great example of this.
            </p>
            <p className="text-lg font-bold">
              For us, in Dorot, this spells innovation, and this innovative
              spirit keeps on opening doors to new markets – as evidenced by the
              fact that in most parts of the world, Dorot Gardens’ frozen
              seasoning products introduce into the market a young, sometimes
              totally new, category. The combination of freshness and great
              taste together with the convenience and availability is a surefire
              win, which without doubt has proved itself, and will surely go on
              doing so in the future.
            </p>
            <p className="text-lg font-bold">
              The company is also positive that it owes its success to this
              commitment and the strict strategic planning that goes with that
              commitment. This is why we have invested in a future enlargement
              of our production facilities – such an expansion will allow us to
              increase production power even further, and realize the growth
              potential that we anticipate in the coming years.
            </p>
          </div>
        </div>
      </section>

      <section>
        <ImageGrid />
      </section>
      <section>
        <Aboutproductcarousel />
      </section>
    </Layout>
  )
}
export const Head = () => (
  <Seo title="About Dorot Gardens: Our Fresh Approach to Innovation" />
)
