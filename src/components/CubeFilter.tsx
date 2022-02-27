import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC } from 'react';
import { Cube } from '../types/types';
import { cubeVisualizations } from '../utils/cube-visualization';

const cubes: Cube[] = ['two', 'three', 'four', 'five'];

interface Props {
  onChange?: (cube: string)  => void;
  value: string;
}

const CubeFilter: FC<Props> = ({value, onChange}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const cube = event.target.value;
    onChange?.(cube);
  };

  return (
    <Box>
      <FormControlLabel label="Cube " labelPlacement="start" control={
      <FormControl size="small" style={{ paddingLeft: '10px' }}>
        <Select
          value={value}
          variant="outlined"
          onChange={handleChange}
          style={{color: 'white'}}
          sx={{ minWidth: 130 }}
        >
          <MenuItem key="all" value="all">All</MenuItem>
          {cubes.map(cube => (
            <MenuItem key={cube} value={cube}>{cubeVisualizations[cube]?.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      }  className="radio_label"/>
    </Box>
  );
}

export default CubeFilter;
