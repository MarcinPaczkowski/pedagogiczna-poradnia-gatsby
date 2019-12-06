import React from "react"
import SEO from "../components/seo"
import Info from "../components/Info/Info"
import About from "../components/About/About"
import ForWhom from "../components/ForWhom/ForWhom"
import Activities from "../components/Activities/Activities"
import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"
import "../styles/styles.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faChevronDown,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab, faChevronDown, faPhoneVolume, faEnvelope)

const IndexPage = () => (
  <>
    <SEO title="Pedagogiczna Poradnia" />
    <Info />
    <About />
    <ForWhom />
    <Activities />
    <AboutMe />
    <Contact />
  </>
)

export default IndexPage
