import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//import Button from '@mui/material/Button';

export default function ControlledOpenSelect() {
  const [dle, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof dle>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}> */}
      {/* Denuo legal entity */}
      {/* </Button> */}
      <FormControl variant="filled" sx={{ m: 0, minWidth: 350 }}>
      <InputLabel id="demo-simple-select-helper-label">Denuo legal entity</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={dle}
          label="Denuo legal entity"
          onChange={handleChange}
        >
          <MenuItem value="">
          <em>Please select ...</em>
          </MenuItem>
          <MenuItem value='moscow'>Moscow</MenuItem>
          <MenuItem value='petersburg'>St. Petersburg</MenuItem>
          <MenuItem value='tbilisi'>Tbilisi</MenuItem>
          <MenuItem value='dubai'>Dubai</MenuItem>
          <MenuItem value='tashkent'>Tashkent</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}



















