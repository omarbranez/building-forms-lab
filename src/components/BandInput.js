// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }
  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={this.handleOnChange}/>
            <input type="submit" value="Add Band"/>
          </form>
      </div>
    )
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: formData => dispatch({ type: "ADD_BAND", payload: formData})
//   }
// }
export default BandInput
