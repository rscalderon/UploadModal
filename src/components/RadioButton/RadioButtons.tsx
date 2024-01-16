import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface RadioProps {
  groupLabel: string;
  labels: string[];
}

const theme = createTheme({
  typography: {
    fontSize: 10,
    fontWeightRegular: 500,
  },
});

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
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0.5,
          }}
        />
      }
      label={label}
      labelPlacement='end'
      key={`RadioButtonWithLabel${label}`}
    />
  ));
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <RadioGroup row aria-labelledby={groupLabel} name='position'>
          {RadioComponents}
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
}
