import React from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Recipe(){
  return (
    <Layout>
    <div>Welcome to Recipe Page</div>
    </Layout>
  )
}

export const Head = () => <Seo title="The Dorot Gardens Recipe Page | Dorot Gardens" />