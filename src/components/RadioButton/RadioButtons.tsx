import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

interface RadioProps {}

export default function RadioButtons() {
  
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby='demo-form-control-label-placement'
        name='position'
        defaultValue='yes'
      >
        <FormControlLabel
          value='Yes'
          control={<Radio />}
          label='Yes'
          labelPlacement='end'
        />
        <FormControlLabel
          value='No'
          control={<Radio />}
          label='No'
          labelPlacement='end'
        />
      </RadioGroup>
    </FormControl>
  );
}
