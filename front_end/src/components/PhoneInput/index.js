import React, { Component } from "react";

import MaskedInput from 'react-text-mask';
import { TextField } from "@material-ui/core";

const cellPhoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

const otherMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

const TextMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={currentMask}
      placeholderChar={'\u2000'}
      // showMask
    />
  );
}

let currentMask;

export default class PhoneInput extends Component {
  render() {
    if(this.props.type === "Celular")
      currentMask = cellPhoneMask;
    else
      currentMask = otherMask;

    return (
      <TextField
        style={{ width: "295px" }}
        margin="normal"
        required
        label="Telefone"
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        variant="outlined"
        InputProps={{
          inputComponent: TextMask
        }}
      />
    );
  }
}