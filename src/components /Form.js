import React from "react"

class Form extends React.Component {
  state = this.props.initialState || {}

  render() {
    return (
        <form>
            <label>
                  City:
           <input type="text" name="City" />
           </label>
           <label>
               Country:
               <input type="text" name="Country"/>
           </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form