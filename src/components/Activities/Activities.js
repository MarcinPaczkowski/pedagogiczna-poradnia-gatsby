import React from "react"
import Activity from "./Activity"

const activities = () => {
  return (
    <div className="activities">
      <div className="container">
        <h2 className="activities-title">Zajęcia</h2>
        <div className="activities-wrapper">
          <div className="columns">
            <div className="column">
              <Activity
                title="zajęcia wspomagające naukę szkolną"
                desc="zajęcia przeznaczone dla dzieci, które mają trudności w szkole, pomagają wyrównać braki edukacyjne, ale także zapobiegać narastających problemom i eliminować już powstałe"
              />
            </div>
            <div className="column">
              <Activity
                title="edukacja uczniów zdolnych"
                desc="zajęcia przeznaczone dla dzieci szczególnie uzdolnionych, pomagają rozwinąć potencjał i pogłębiać zainteresowania, wspomagają rozwój psychofizyczny"
                color="#86abff"
              />
            </div>
            <div className="column">
              <Activity
                title="nauka czytania i pisania"
                desc="zajęcia przeznaczone dla dzieci, które chcą zacząć pisać i czytać oraz takich, które chcą doskonalić już posiadane umiejętności"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Activity
                title="trening kompetencji komunikacyjnych"
                desc="podczas zajęć uczymy się między innymi samoświadomości komunikacyjnej, aktywnego słuchania czy udzielania informacji zwrotnych"
                color="#86abff"
              />
            </div>
            <div className="column">
              <Activity
                title="trening kompetencji miękkich"
                desc="zajęcia polegają na trenowaniu umiejętności, które pomagają efektywnie zarządzać samym sobą np. asertywności, radzenia sobie ze stresem, inteligencji emocjonalnej, rozwiązywania konfliktów i wielu innych"
              />
            </div>
            <div className="column">
              <Activity
                title="doradztwo w problemach edukacyjnych i wychowawczych"
                desc="podczas zajęć rozwiązujemy problemy związane z edukacją i wychowaniem dzieci, takich jak np. przejawianie niepokojących zachowań, nieefektywna nauka szkolna czy nieumiejętność nawiązywania relacji z rówieśnikami"
                color="#86abff"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Activity
                title="poradnictwo rodzinne i wychowawcze"
                desc="celem zajęć jest diagnozowanie problemów rodzin, szczególnie rodzin z dziećmi oraz ich rozwiązywanie, a także przeciwdziałanie problemom, które mogą się pojawić, najczęściej z powodu złożoności przyjmuje formę procesu pomocy, a nie jednorazowej porady"
              />
            </div>
            <div className="column">
              <Activity
                title="trening psychopedagogiczny"
                desc="jest połączeniem poradnictwa, pomocy psychopedagogicznej, psychoedukacji z wykorzystaniem elementów coachingu, adresowany do osób sytuacji bezradności, ale również chcących rozwijać swój życiowy potencjał"
                color="#86abff"
              />
            </div>
            <div className="column">
              <Activity
                title="interwencja kryzysowa"
                desc="zajęcia nastawione na minimalizowanie negatywnych efektów pojawiających się problemów i zapobieganie ich rozwojowi w sytuacji wystąpienia objawów"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default activities
