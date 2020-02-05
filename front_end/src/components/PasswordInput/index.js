import React, { Component } from "react";

import { FaKey } from "react-icons/fa";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";

export default class InputPassword extends Component {
  state = {
    showPassword: false,
    password: ""
  };

  handleClickShowPassword = e => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    return (
      <TextField
        id="outlined-password-input"
        variant="outlined"
        type={this.state.showPassword ? "text" : "password"}
        label={this.props.label}
        value={this.props.value}
        onChange={this.props.onChange}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaKey size={22} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ marginBottom: "10px", marginRight: "-10px" }}
            >
              <IconButton onClick={this.handleClickShowPassword}>
                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
        style={{ marginTop: "10px" }}
      />
    );
  }
}
