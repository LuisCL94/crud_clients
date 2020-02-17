import React, { Component } from "react";

import MaskedInput from 'react-text-mask';
import { TextField } from "@material-ui/core";

const TextMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    // showMask
    />
  );
}

export default class CepInput extends Component {
  
  render() {  
    return (
      <TextField
      style={{ width: "120px", marginRight: "20px"}}
      margin="normal"
      required
      label="Cep"
      name={this.props.name}
      value={this.props.value}
      onChange={this.props.onChange}
      onBlur={this.props.onBlur} 
        variant="outlined"
        InputProps={{
          inputComponent: TextMask
        }}
      />
    );
  }
}