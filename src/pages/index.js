import * as React from "react"
import linkedinImage from "../images/linkedin.png"
import twitterImage from "../images/twitter.png"


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
  fontSize: "1.50rem"
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,

}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginRight: 50 
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const imageStyle = {
  maxWidth: 40
}

const divStyle={

}
// data
const links = [
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/erdemaydogdu/",
    color: "#1099A8",
    src: linkedinImage
  },
  {
    text: "Twitter",
    url: "https://twitter.com/erdemaydog",
    color: "#1099A8",
    src: twitterImage
  }
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Erdem Aydoğdu
        <br />
        <span style={headingAccentStyles}>Software Developer | Team Leader</span>
      </h1>
      <div style={divStyle}>
        {links.map(link => (
          <span key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
                target="_blank"
              >                
                <img alt={link.text} style={imageStyle} src={link.src}></img>
              </a>
            </span>
          </span>
        ))}
      </div>

    </main>
  )
}
export default IndexPage
