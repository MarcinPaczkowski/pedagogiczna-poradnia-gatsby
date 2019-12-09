import React from "react"
import booksImage from "../../images/book-bookcase-books-1166657.jpg"
import profilPhotoImage from "../../images/MalgorzataPaczkowska.jpg"

const aboutMe = () => {
  const booksStyles = {
    backgroundImage: `url(${booksImage})`,
  }

  const profilPhotoStyles = {
    backgroundImage: `url(${profilPhotoImage})`,
  }

  return (
    <div className="aboutMe">
      <div className="aboutMe-background" style={booksStyles} />
      <div className="aboutMe-content">
        <div className="container">
          <div className="aboutMe-content--wrapper">
            <div className="columns">
              <div className="column">
                <h2 className="aboutMe-content--title">O mnie</h2>
                <div
                  className="aboutMe-content--photo"
                  style={profilPhotoStyles}
                />
                <div className="aboutMe-content--desc">
                  <h3 className="aboutMe-content--desc-name">
                    Małgorzata Paczkowska
                  </h3>
                  <p className="aboutMe-content--desc-desc">
                    Ukończyłam studia magisterskie na Uniwersytecie im. Adama
                    Mickiewicza. Jestem pedagogiem. W trakcie swojej edukacji
                    zdobywałam wiedzę w ramach trzech specjalności: komunikacji
                    społecznej, poradnictwa i pomocy psychopedagogicznej oraz
                    profilaktyki i interwencji kryzysowej.
                  </p>
                  <p className="aboutMe-content--desc-desc">
                    Posiadam kompetencje niezbędne do przeprowadzania treningu
                    psychologiczno-pedagogicznego dla osób w sytuacji
                    bezradności, ale także dla osób, które chcą rozpoznać i
                    wykorzystać swój potencjał rozwojowy. Potrafię
                    przeciwdziałać i zapobiegać problemom jednostek, a także ich
                    negatywnym konsekwencjom, które prowadzą do kryzysów,
                    patologii, marginalizacji czy wykluczenia społecznego.
                    Posiadam umiejętności potrzebne do diagnozowania potrzeb
                    oraz świadczenia pomocy i formalnego wsparcia dla dzieci,
                    młodzieży oraz osób dorosłych w funkcjonowaniu w
                    zróżnicowanych rolach społeczno-rodzinnych i pedagogicznych.
                    Potrafię projektować wieloaspektowe plany działania
                    wspierające jednostkę.
                  </p>
                  <p className="aboutMe-content--desc-desc">
                    Szczególnie interesuję się zagadnieniami związanymi z
                    komunikacją w rodzinie oraz coachingiem rozwoju osobistego.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default aboutMe
