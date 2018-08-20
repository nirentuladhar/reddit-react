import React, { Component } from "react";
import { setSubreddit } from "../actions/subredditActions";
import { connect } from "react-redux";

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }
  onInputChange = e => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Reddit
          <span className="navbar-text ml-3">
            r/
            {this.props.subreddit}
          </span>
        </span>
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={e => {
            this.props.dispatch(setSubreddit(this.state.inputValue));
            e.preventDefault();
          }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search subreddit"
            aria-label="Search"
            onChange={e => this.onInputChange(e)}
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Go
          </button>
        </form>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    subreddit: state.subreddit.name
  };
};

export default connect(mapStateToProps)(NavBar);
