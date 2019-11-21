/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"


// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           <main>{children}</main>
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
// export default Layout

const Title = () => (
  <Link className="styleless" to="/"><h1 id="title">
    David Hong
  </h1></Link>
)

const Nav = () => (
  <ul id="nav">
    <li>Hi</li>
  </ul>
)


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div id="root" 
      css={css`
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        padding-bottom: 0;
        @media (max-width: 767px) {
          padding: ${rhythm(1)};
          padding-bottom: 0;
        }
        @media (max-width: 550px) {
          padding: ${rhythm(0.5)};
          padding-bottom: 0;
        }
      `}
    >
      <div className="container">
        <header>
          {/* <Title /> */}
          <hr />
          {/* <Nav /> */}
        </header>
        {children}
      </div>
    </div>
  )


}



