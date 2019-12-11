import React, { Component } from "react"
import SEO from "../components/seo"
import Info from "../components/Info/Info"
import About from "../components/About/About"
import ForWhom from "../components/ForWhom/ForWhom"
import Activities from "../components/Activities/Activities"
import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy"
import "../styles/styles.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faChevronDown,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Cookies from "universal-cookie"

library.add(fab, faChevronDown, faPhoneVolume, faEnvelope)

class IndexPage extends Component {
  componentWillMount() {
    this.cookies = new Cookies()
    const isAccepted = this.cookies.get("privacy-policy")
    this.setState({ isAccepted: isAccepted || false })
  }

  state = {
    isAccepted: true,
  }

  close = () => {
    let updatedIsAccepted = {
      ...this.state.isAccepted,
    }
    updatedIsAccepted = true
    this.setState({ isAccepted: updatedIsAccepted })
    this.cookies.set("privacy-policy", updatedIsAccepted, { path: "/" })
  }

  render() {
    return (
      <>
        <SEO title="Pedagogiczna Poradnia" />
        <Info />
        <About />
        <ForWhom />
        <Activities />
        <AboutMe />
        <Contact />
        <PrivacyPolicy
          isAccepted={this.state.isAccepted}
          close={() => this.close()}
        />
      </>
    )
  }
}

export default IndexPage
