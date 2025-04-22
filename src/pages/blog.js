import React from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Blog(){
  return (
    <Layout>
    <div>Welcome to Blog Page</div>
    </Layout>
  )
}
export const Head = () => <Seo title="The Dorot Gardens Blog | Dorot Gardens" />