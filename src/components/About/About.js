import React from "react"
import cloudImage from "../../images/cohete-brands-agencia-de-publicidad-guadalajara-nubes.png"
import childrenImage from "../../images/children-32frox4aa3x5gy245mku8a@2x.png"

const about = () => {
  const cloudStyles = {
    backgroundImage: `url(${cloudImage})`,
  }
  return (
    <div className="about">
      <div className="about-cloud" style={cloudStyles} />
      <div className="container is-fluid">
        <div className="about-content">
          <div className="columns">
            <div className="column">
              <div className="about-content--item">
                <h2 className="about-content--item-title">Czym się zajmuję?</h2>
                <p className="about-content--item-desc">
                  W ramach zaspakajania indywidualnych potrzeb edukacyjnych
                  dzieci i młodzieży udzielam korepetycji na poziomie szkoły
                  podstawowej, tak aby wyrównać braki edukacyjne, ale również
                  wspieram edukacje uczniów zdolnych. Od podstaw uczę czytania
                  oraz pisania, a także pomagam rozwinąć już posiadane
                  umiejętności. Przeprowadzam zajęcia mające na celu poszerzanie
                  umiejętności komunikacyjnych i ułatwienie nawiązywania
                  relacji.
                </p>
                <p className="about-content--item-desc">
                  W pracy rozpoznaję i diagnozuję indywidualne potrzeby
                  rozwojowe, a także możliwości psychofizyczne jednostki. Dzięki
                  trafnej diagnozie współpraca ze mną przynosi wymierne
                  korzyści. Przeprowadzam treningi psychopedagogiczne, w które
                  umiejętnie wplatam metody coachingowe. Interweniuję w
                  przypadku kryzysów czy wycofania społecznego. Prowadzę
                  indywidualne oraz grupowe zajęcia uzależnione od potrzeb
                  jednostki czy grupy.
                </p>
                <p className="about-content--item-desc">
                  W razie jakichkolwiek pytań lub sugestii zapraszam do
                  <a href="#contact">kontaktu</a>.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="about-content--image">
                <img src={childrenImage} alt="Dzieci" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
