import React from "react"
import backgroundImage from "../../images/art-art-materials-artistic-286559.jpg"
import logoImage from "../../images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const info = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
  }

  return (
    <div className="info" style={backgroundStyles}>
      <div className="container is-fluid">
        <div className="info-wrapper">
          <div className="columns">
            <div className="column is-half">
              <div className="info-content">
                <img
                  src={logoImage}
                  alt="Logo pedagogiczna pora dnia"
                  className="info-content--logo"
                />
                <h1 className="info-content--title">Pedagogiczna Pora Dnia</h1>
                <h2 className="info-content--desc">
                  miejsce rozwoju nie tylko dla dziecka
                </h2>
                <hr className="info-content--divider" />
                <div className="info-content--icons">
                  <a
                    className="info-content--icons__item"
                    href="https://www.facebook.com/pedagogicznaporadnia/"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                  <a
                    className="info-content--icons__item"
                    href="mailto:biuro@pedagogicznaporadnia.pl"
                  >
                    <FontAwesomeIcon icon="envelope" />
                  </a>
                  <a
                    className="info-content--icons__item"
                    href="tel:+48 515-286-790"
                  >
                    <FontAwesomeIcon icon="phone-volume" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default info
