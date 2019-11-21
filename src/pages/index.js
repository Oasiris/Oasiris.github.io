import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import GitHubIcon from '@material-ui/icons/GitHub'

import "../styles/bootstrap-grid.css"
import "../styles/default.css"
import "../styles/global.scss"
import "../styles/layout.scss"
import '../styles/index.scss'

const paragraphs = [
  `I'm David, a JavaScript wiz who loves to create.`,
  `Exploring the spaces between humanity and technology.`
]

const RESUME_LINK = 'https://drive.google.com/file/d/1CUcGrPRvtbIaT2Oj7yDgQx5AVZDTy4Hx/view?usp=sharing'

const ResumeButton = () => (
  <a href={RESUME_LINK} className="styleless" target="_blank">
    <div className={`resume-btn buttonLink`}>
      Resume
    </div>
  </a>
)

function handleClickResume() {
  alert("Coming soon!")
}

const HookText = () => (
  <div id="hook-section" className="row">
    <div id="blurb" className="col-sm-10">
      {paragraphs.map((text, idx) => (
        <p key={idx} data-key={idx} className="grow-slightest">{text}</p>
      ))}
    </div>
    <div className="resume-btn-wrapper col-sm-2">
      <ResumeButton className="resume-btn" />
    </div>
  </div>
)

const Work = ({ data }) => (
  <div id="work" className="row">
    <div className="col-md-2 list-section-title-md">
      <h3>Work</h3>
    </div>
    <div className="col-md-10">
      <ul id="work-list">
        {
          data.edges.map(edge => (
            <li key={edge.node.frontmatter.company} className="work-item" tabIndex="0">
              
              <div className="work-details">
                <div className="experience-list-header">
                  {edge.node.frontmatter.company}
                </div>
                <div className="work-dates">
                  <span className="work-start-date">
                    {edge.node.frontmatter.startDateString}
                  </span>
                  <span className="work-date-to">
                    —
                  </span>
                  <span className="work-end-date">
                    {edge.node.frontmatter.endDateString}
                  </span>
                </div>
              </div>

              <div className="work-title">
                {edge.node.frontmatter.title}
              </div>

              {edge.node.frontmatter.blurb && (
                <div className="work-blurb">{edge.node.frontmatter.blurb}</div>
              )}

            </li>
          ))
        }
      </ul>
    </div>
  </div>
)

const WIP = () => (
    <div className="tooltip unfocusable">
      <div className="project-wip-sticky" />
      <span className="tooltip-text">Work in progress</span>
    </div>
)
  
const Projects = ({ data }) => (
  <div id="projects" className="row">

    <div className="col-md-2 list-section-title-md">
      <h3>Projects</h3>
    </div>

    <div className="col-md-10">

      <ul id="projects-list">
        {data.edges.map(edge => {
            const { title, is_wip, date, type, blurb, tools } = edge.node.frontmatter

            return (
              <li key={title} className="project-item" tabIndex="0">
              <div className="project-header">
                <div className="experience-list-header">
                  {title}
                  {is_wip && <WIP />}
                </div>

                <div className="project-facts">
                  <div className="project-fact-date fact-tag grow-slight">
                    {date}
                  </div>
                  <div className="project-fact-type fact-tag grow-slight">
                    {type && type.toUpperCase()}
                  </div>
                </div>
              </div>

              {blurb && (
                <div className="project-blurb">{blurb}</div>
              )}

              {tools && (
                  <ul className="project-tools">
                    {tools.map(toolName => (
                      <li className="tool-name grow" key={`tool-${toolName}`}>{toolName}</li>
                    ))}
                  </ul>
                )}
            </li>
            )
          }
          )
        }
      </ul>
    </div>
  </div>
)


const Footer = () => (
  <article id="footer">
    <div className="row">
      <div className="col-md-4">
        Made with ♥ in 
        <a 
          href="https://www.gatsbyjs.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="styleless link-space-fix"> 
          Gatsby
        </a>.
      </div>
      <div className="col-md-4">
        David Hong, 2019.
      </div>
      <div className="col-md-4">
        <a className="standard" target="_blank" href="https://github.com/Oasiris">
          <GitHubIcon />
        </a>
      </div>
    </div>
  </article>
)



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HookText />
    <hr />
    <article className="section lean-section">
      <Work data={data.work} />
    </article>
    <article className="section">
      <Projects data={data.projects} />
    </article>

    <Footer />
  </Layout>
)
export default IndexPage

export const query = graphql`
{
  work: allMarkdownRemark(
    filter: { fileAbsolutePath: {  regex: "/work/" } },
    sort: { fields: [frontmatter___order], order: DESC }
  ) {
    edges {
      node {
        frontmatter {
          company
          title
          order
          startDateString
          endDateString
          blurb
          demo
        }
      }
    }
  }
  projects: allMarkdownRemark(
    filter: { fileAbsolutePath: {  regex: "/projects/" } },
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "YYYY")
          type
          tools
          blurb
          is_wip
        }
      }
    }
  }
}
`

