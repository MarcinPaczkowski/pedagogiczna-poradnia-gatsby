import React, { Component } from "react"
import Modal from "../Modal/Modal"

class ForWhomDetails extends Component {
  state = {
    isModalActive: false,
  }

  show = () => {
    let updatedIsActive = {
      ...this.state.isModalActive,
    }
    updatedIsActive = true
    this.setState({ isModalActive: updatedIsActive })
  }

  close = () => {
    let updatedIsActive = {
      ...this.state.isModalActive,
    }
    updatedIsActive = false
    this.setState({ isModalActive: updatedIsActive })
  }

  render() {
    const styles = {
      backgroundImage: `url(${this.props.imgUrl})`,
    }

    return (
      <div className="forWhomDetails">
        <div className="forWhomDetails-circle" style={styles} />
        <h2 className="forWhomDetails-title">{this.props.title}</h2>
        <p className="forWhomDetails-desc">{this.props.desc}</p>
        <a className="button is-light is-outlined" onClick={() => this.show()}>
          Więcej
        </a>
        <Modal
          title={this.props.title}
          desc={this.props.more}
          show={this.state.isModalActive}
          close={() => this.close()}
        />
      </div>
    )
  }
}

export default ForWhomDetails
