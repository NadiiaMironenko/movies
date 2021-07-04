import React, { Component } from "react";
import PropTypes from "prop-types";
import MoviesItems from "../components/MoviesItems";
// import axios from "axios";
import { FetchAll } from "../Services/fetch";

class HomePage extends Component {
  state = {
    films: [],
    };
    
    componentDidMount() {
         FetchAll().then((res) => {
           this.setState({ films: res.data.results });
         });
    }
  render() {
    return (
      <>
        <MoviesItems
          location={this.props.location}
          films={this.state.films}
        />
      </>
    );
  }
}

HomePage.propTypes = {
  films: PropTypes.array,
};

export default HomePage;
