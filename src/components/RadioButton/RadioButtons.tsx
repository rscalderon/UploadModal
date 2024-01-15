import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

interface RadioProps {
  groupLabel: string;
  labels: string[];
}

export default function RadioButtons({ groupLabel, labels }: RadioProps) {
  const RadioComponents = labels.map((label) => (
    <FormControlLabel
      className='radio-buttons'
      value={label}
      control={
        <Radio
          sx={{
            '&.Mui-checked': {
              color: '#132a4a',
            },
          }}
        />
      }
      label={label}
      labelPlacement='end'
      key={`RadioButtonWithLabel${label}`}
    />
  ));
  return (
    <FormControl>
      <RadioGroup row aria-labelledby={groupLabel} name='position'>
        {RadioComponents}
      </RadioGroup>
    </FormControl>
  );
}
