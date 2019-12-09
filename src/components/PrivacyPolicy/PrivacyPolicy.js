import React from "react"
import privacyPolicyFile from "../../files/PolitykaPrywatnosci.pdf"

const privacyPolicy = ({ close, isAccepted }) => {
  if (isAccepted) return null
  return (
    <div className="notification is-info privacy-policy">
      <button className="delete" onClick={close}></button>
      Ta strona używa cookies. Dowiedz się więcej o{" "}
      <a href={privacyPolicyFile}> polityce prywatności</a>{" "}
      <strong>PedagogicznejPoradni</strong> i celu używania cookies.
    </div>
  )
}

export default privacyPolicy
