import * as React from "react"
import * as UniUX from "uniux"

class Page extends React.Component {
  render() {
    return <>
      <h1>OOPS.... Seems like your lost.</h1>
      <UniUX.Link to="/">Go Back To Home Page.</UniUX.Link>
    </>
  }
}
