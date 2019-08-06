import React, { Component } from "react";
export default class DataLoader extends Component {
  state = { data: [] };
  componentDidMount() {
    fetch("http://localhost:3001/links/")
      .then(response => response.json())
      .then(data =>
        this.setState(() => {
          return { data };
        })
      );
  }
  render() {
    return this.props.render(this.state.data);
  }
}