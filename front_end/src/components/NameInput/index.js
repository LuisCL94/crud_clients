import React, { Component } from 'react';

import {TextField, InputAdornment } from "@material-ui/core";

import { FaUser } from "react-icons/fa";

export default class NameInput extends Component {
  render() {
    return (
        <TextField
          style={{width: "295px"}}
          variant="outlined"
          margin="normal"
          required
          label="Nome"
          name = {this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          type="text"
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaUser size={20} />
              </InputAdornment>
            )
          }}
        />
    );
  }
}