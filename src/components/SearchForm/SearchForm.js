import React, { Component } from "react";
import PropTypes from "prop-types";
import swal from "sweetalert";
import s from "./SearchForm.module.css"

export default class SearchForm extends Component {
  state = {
    name: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.name.trim === "") {
      swal({
        title: "error",
        text: "Write your query",
        icon: "error",
      });
      return;
    }

    this.props.onSubmit(this.state.name);
  };

  handleInput = (Event) => {
    this.setState({ name: Event.target.value.toLowerCase() });
  };

  render() {
    return (
      <>
        <form className={s.search_form} onSubmit={this.onSubmit}>
          <label>Enter the films name</label>
          <input className={s.search_form_input} type="text" onChange={this.handleInput} />

          <button className={s.search_form_button} type="submit">Search</button>
        </form>
      </>
    );
  }
}

SearchForm.propTypes = {
  value: PropTypes.string,
};
