import React, { Component } from 'react';

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "Residencial",
    label: "Residencial"
  },
  {
    value: "Comercial",
    label: "Comercial"
  },
  {
    value: "Celular",
    label: "Celular"
  }
];


export default function MultilineTextFields(props) {
  
  const [currency, setCurrency] = React.useState("");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (

      <div>
        <TextField
          style={{width:"130px", marginRight:"10px"}}
          id="outlined-select-currency"
          select
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          // helperText="Please select your currency"
          variant="outlined"
          margin="normal"
        >
        {/* {console.log("esse e o valor: " + currency)} */}
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </div>
  );
}

