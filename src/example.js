import React from 'react'

export default class Example extends React.Component {
  constructor() {
    super()
    this._onDocumentClick = this._onDocumentClick.bind(this)
  }

  componentWillMount() {
    this.setState({ clicked: false })
    window.addEventListener('click', this._onDocumentClick)
  }

  _onDocumentClick() {
    const clicked = this.state.clicked || false
    this.setState({ clicked: !clicked })
  }


  render() {
    return <p>{JSON.stringify(this.state.clicked)}</p>
  }
}
