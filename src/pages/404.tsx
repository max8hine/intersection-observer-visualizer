import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO />
    <h1>
      <span>404</span>
      <span>|</span>
      <span>Not Found</span>
    </h1>
  </Layout>
)

export default NotFoundPage
