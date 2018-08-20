import React, { Component } from "react";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="row mt-5">
            <Posts />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
