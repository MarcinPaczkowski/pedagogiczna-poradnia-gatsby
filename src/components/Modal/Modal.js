import React from "react"

const modal = props => {
  const modalClasses = ["modal", props.show ? "is-active" : ""]
  return (
    <div className={modalClasses.join(" ")}>
      <div className="modal-background" onClick={props.close} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title || "Tytuł testowy"}</p>
          <button className="delete" aria-label="close" onClick={props.close} />
        </header>
        <section className="modal-card-body">
          {props.desc ||
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rerum?"}
        </section>
      </div>
    </div>
  )
}

export default modal
