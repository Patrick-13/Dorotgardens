import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
export default function cookingclass() {
  return (
    <Layout>
    <div>Welcome to cookingclass page</div>
    </Layout>
  )
}

export const Head = () => <Seo title="Cooking Class | Dorot Gardens" />