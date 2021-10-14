import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  // renderBands = () => this.props.bands.map( (band, id) => <li key={id}>{band.name}</li>)
  render() {
    return(
      <div>
        {/* BandsContainer */}
          {this.props.bands.map((band, id) => {
            return <li key={id}>{band.name}</li>
          })}

        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({ type: "ADD_BAND", name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
