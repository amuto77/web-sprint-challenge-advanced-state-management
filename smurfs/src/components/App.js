import React, { Component } from "react";
import { getSmurfs } from '../actions/SmurfActions'
import SmurfContainer from './SmurfContainer'
import Form from './Form'
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! </h1>
        <Form />
        <SmurfContainer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getSmurfs }) (App);
