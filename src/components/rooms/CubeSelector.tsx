import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Cube } from '../../types/types';
import { cubeVisualizations } from '../../utils/cube-visualization';
import CubeImage from '../_lib/CubeImage';

const cubes: Cube[] = ['two', 'three', 'four', 'five'];

interface Props {
  onChange?: (cube: string)  => void;
  value: string;
}

const CubeSelector: FC<Props> = ({value, onChange}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const cube = event.target.value;
    onChange?.(cube);
  };

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cube</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {cubes.map(cube => (
            <MenuItem key={cube} value={cube}>{cubeVisualizations[cube]?.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{p: 2}}>
        <CubeImage cube={value} />
      </Box>
    </Stack>
  );
}

export default CubeSelector;

export const CubeSelectorAdapter: FC<FieldRenderProps<string, HTMLElement>> = 
({ input, meta, ...rest }) => {
  return (
    <CubeSelector
      {...input}
      {...rest}
      onChange={(value) => input.onChange(value)} 
    />
  )
}
