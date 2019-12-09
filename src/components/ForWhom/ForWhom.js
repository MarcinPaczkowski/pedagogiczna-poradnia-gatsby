import React from "react"
import backgroundImage from "../../images/activity-art-artistic-707193.jpg"
import ForWhomDetails from "./ForWhomDetails"
import childImamge from "../../images/adorable-baby-child-356192.jpg"
import youthImage from "../../images/artist-bagpipes-british-34692.jpg"
import parentImage from "../../images/affection-baby-baby-girl-377058.jpg"

const forWhom = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <div className="forWhom">
      <div className="forWhom-background" style={styles} />
      <div className="forWhom-content">
        <div className="container">
          <div className="forWhom-wrapper">
            <div className="columns">
              <div className="column">
                <div className="forWhom-content--title">Dla kogo?</div>
              </div>
            </div>
            <div className="forWhom-content--circles">
              <div className="columns">
                <div className="column">
                  <ForWhomDetails
                    title="Dzieci od 3 roku życia"
                    desc="Już od 3 roku życia dzieci mogą rozpocząć swoją naukę pisania czy czytania, a także poprzez zabawę mogą nabywać innych umiejętności niezbędnych w codziennym życiu. Od najmłodszych lat należy dbać o całościowy rozwój malucha."
                    more="Polecane są tutaj zajęcia z nauki czytania oraz pisania. W szczególnych przypadkach dla dzieci od 3 roku życia prowadzę zajęcia ogólnorozwojowe. Zajęcia te nastawione są na rozwijanie umiejętności językowych, muzycznych, koordynacji ruchowej czy zdolności interpersonalnych."
                    imgUrl={childImamge}
                  />
                </div>
                <div className="column">
                  <ForWhomDetails
                    title="Młodzież w wieku szkolnym"
                    desc=" Dzieci w wieku szkolnym rozwijają swoje umiejętności i dążą do osiągnięcia dojrzałości psychicznej. Szczególnie ważne jest wspieranie ich i towarzyszenie im w rozwoju oraz drodze do dorosłości, nie zapominając przy tym, że wciąż są dziećmi."
                    more="Polecane są tutaj zajęcia wspomagające naukę szkolną, edukacja uczniów zdolnych, nauka czytania i pisania. Dzieci i młodzież w wieku szkolnym mogą również skorzystać z treningu kompetencji komunikacyjnych, treningu kompetencji miękkich oraz kompleksowego treningu psychopedagogicznego, do czego szczególnie zachęcam."
                    imgUrl={youthImage}
                  />
                </div>
                <div className="column">
                  <ForWhomDetails
                    title="Rodzice"
                    desc="To właśnie na rodzicach spoczywa odpowiedzialność za prawidłowy rozwój dzieci i szczęście rodzinne. Jednak nie można zapominać, że rodzice to także odrębne jednostki, które poza byciem mamą czy tatą są także po prostu ludźmi."
                    more="Polecam kontakt w sprawie poradnictwa rodzinnego i wychowawczego, doradztwa w problemach edukacyjnych i wychowawczych, interwencję w sytuacji kryzysu, a także treningi kompetencji komunikacyjnych, kompetencji miękkich czy psychopedagogiczny. Zachęcam także do skorzystania z oferty, która skierowana jest bezpośrednio do Państwa dzieci."
                    imgUrl={parentImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default forWhom
