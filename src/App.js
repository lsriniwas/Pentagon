import React from "react"
import './App.css';
import {Routes} from "./Routes/Routes"
export class App extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()

  }


  render() {
    return (
      <div className="App">
        <Routes></Routes>
      </div>
    )
  }
}



export default App

