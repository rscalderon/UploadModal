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
      </RadioGroup>
    </FormControl>
  );
}
