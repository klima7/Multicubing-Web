import { useState } from "react";
import { Cube, cubes, CubeId } from "../utils/cubes";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC } from 'react';
import Stack from '@mui/material/Stack';

interface Props {
  onChange?: (cube: number)  => void;
  value: number;
}

const CubeSelector: FC<Props> = ({value, onChange}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const cubeId = parseInt(event.target.value);
    onChange?.(cubeId);
  };

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cube</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={String(value)}
          label="Age"
          onChange={handleChange}
        >
          {cubes.map(cube => 
            <MenuItem key={cube.id} value={cube.id}>{cube.name}</MenuItem>
          )}
        </Select>
      </FormControl>
      <Box sx={{p: 2}}>
        <img src={cubes[value].image} alt="" style={{width: '100%'}} />
      </Box>
    </Stack>
  );
}

export default CubeSelector;
