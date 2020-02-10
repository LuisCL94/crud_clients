import React, { Component } from 'react';

import { TextField, InputAdornment } from "@material-ui/core";

import { Mail } from "@material-ui/icons";

// import { } from './styles';

export default class EmailInput extends Component {
  render() {
    return (
      <TextField
        style={{width: "295px"}}
        variant="outlined"
        margin="normal"
        required
        id="email"
        label={this.props.label}
        value={this.props.value}
        onChange={this.props.onChange}
        name="email"
        // autoComplete="email"
        // autoFocus
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Mail />
            </InputAdornment>
          )
        }}
      />
    );
  }
}