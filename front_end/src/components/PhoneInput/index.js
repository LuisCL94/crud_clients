import React, { Component } from "react";

import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { TextField } from "@material-ui/core";

const TextMaskCellNumber = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-',/\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}


const TextMaskOtherNumber = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, ' ',]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

var currentMask;

export default class PhoneInput extends Component {
  render() {
    if(this.props.tipo === "Celular")
      currentMask = TextMaskCellNumber;
    else
      currentMask = TextMaskOtherNumber;

    return (
      <TextField
        style={{ width: "295px" }}
        margin="normal"
        required
        label={this.props.label}
        value={this.props.value}
        onChange={this.props.onChange}
        variant="outlined"
        InputProps={{
          inputComponent: currentMask
        }}
      />
    );
  }
}