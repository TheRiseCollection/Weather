import React from "react"

class Form extends React.Component {
  state = this.props.initialState || {}

  render() {
    return (
      <form onSubmit = {this.props.loadWeather}>
      <input type="text" name="city" placeholder="City..."/>
      <input type="text" name="country" placeholder="Country..."/>
      <button>Get Weather</button>
  </form>
    )
  }
}

export default Form