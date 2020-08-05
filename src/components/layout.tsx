import React from "react"
import { Helmet } from "react-helmet"
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
    <>
      <Helmet>
        <body className="relative font-sans bg-grey-light text-base text-charcoal leading-base tracking-base min-h-screen js-body" />
      </Helmet>
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href={siteUrl}>{author}</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
