import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormRadioGroup () {
  const [value, setValue] = React.useState('usd');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Currency</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="usd" control={<Radio />} label="USD" />
        <FormControlLabel value="eur" control={<Radio />} label="EUR" />
        <FormControlLabel value="rur" control={<Radio />} label="RUR" />
        <FormControlLabel value="aed" control={<Radio />} label="AED" />
      </RadioGroup>
    </FormControl>
  );
}