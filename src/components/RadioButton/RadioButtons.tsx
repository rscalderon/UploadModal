import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

interface RadioProps {
  labels: string[];
}

export default function RadioButtons({ labels }: RadioProps) {
  const RadioComponents = labels.map((label) => (
    <FormControlLabel
      value={label}
      control={<Radio />}
      label={label}
      labelPlacement='end'
    />
  ));
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby='demo-form-control-label-placement'
        name='position'
        defaultValue='yes'
      >
        {RadioComponents}
        {/* <FormControlLabel
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
        /> */}
      </RadioGroup>
    </FormControl>
  );
}
