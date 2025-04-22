import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import Productcarousel from "../components/Productcarousel"
import StoreList from "../components/StoreList"


const IndexPage = () => (
  <Layout>
  <div className="w-full">
    <Hero />
    <Productcarousel />
    <Menu />
    <StoreList />
  </div>
</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
export const Head = () => <Seo title="Dorot Gardens - Home" />

export default IndexPage
