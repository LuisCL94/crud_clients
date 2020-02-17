import React, { Component } from "react";

import { TextField } from "@material-ui/core";

var required;

export default class Input extends Component {


  render() {
    if(this.props.label !== "complemento")
      required = true;
    else
      required = false;
      
    return (
      <TextField
        style={{ width: this.props.width, marginLeft: "20px", marginRight: "20px" }}
        margin="normal"
        required={required}
        label={this.props.label}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        variant="outlined"
      />
    );
  }
}