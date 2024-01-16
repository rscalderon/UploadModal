import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface SelectProps {
  maxWidth?: number;
  label: string;
}

const theme = createTheme({
  palette: {
    text: { primary: 'rgb(19, 42, 74)', secondary: 'rgb(19, 42, 74)' },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontSize: 10,
    fontWeightRegular: 500,
  },
});

export default function BasicSelect({ label, maxWidth }: SelectProps) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={maxWidth ? { maxWidth: maxWidth } : { maxWidth: 1000 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
          <Select
            SelectDisplayProps={{
              style: { paddingTop: 0, paddingBottom: 0 },
            }}
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={value}
            label={label}
            onChange={handleChange}
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
