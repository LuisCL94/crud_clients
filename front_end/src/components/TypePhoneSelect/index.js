import React from 'react';

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
  
  return (

      <div>
        <TextField
          style={{width:"130px", marginRight:"10px"}}
          id="outlined-select-currency"
          select
          label="Tipo"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          variant="outlined"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </div>
  );
}

