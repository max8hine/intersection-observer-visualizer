import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  children: React.ReactNode | null
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          siteUrl
        }
      }
    }
  `)
  const { author, siteUrl } = data.site.siteMetadata
  return (
    <div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href={siteUrl}>{author}</a>
      </footer>
    </div>
  )
}

export default Layout
