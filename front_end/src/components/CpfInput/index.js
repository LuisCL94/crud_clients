import React, { Component } from "react";

import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { TextField } from "@material-ui/core";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/ ,/\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default class CpfInput extends Component {
  render() {
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
          inputComponent: TextMaskCustom
        }}
      />
    );
  }
}