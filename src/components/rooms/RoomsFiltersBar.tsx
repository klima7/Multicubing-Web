import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import { useAppSelector, useAppThunkDispatch } from '../../hooks';
import { setRoomsFilters } from '../../redux/rooms/rooms-actions';
import { RoomsFilters } from '../../types/types';
import CubeFilter from "./CubeFilter";

export default function RoomsFiltersBar() {

  const filters = useAppSelector(state => state.rooms.filters);
  const dispatch = useAppThunkDispatch();

  function onCubeChange(cube: string) {
    dispatch(setRoomsFilters({filters: new RoomsFilters(cube, filters.publicOnly, filters.notEmpty)}))
  }

  function onPublicOnlyChange(event: any) {
    const publicOnly = event.target.checked
    dispatch(setRoomsFilters({filters: new RoomsFilters(filters.cube, publicOnly, filters.notEmpty)}))
  }

  function onNotEmptyChange(event: any) {
    const notEmpty = event.target.checked
    dispatch(setRoomsFilters({filters: new RoomsFilters(filters.cube, filters.publicOnly, notEmpty)}))
  }

  return (
    <Paper 
    elevation={0} 
    style={{border: 'solid 2px #1976D2'}}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Box sx={{my: 1}}>
          <CubeFilter value={filters.cube} onChange={onCubeChange} />
        </Box>
        <FormControlLabel 
        label="Public only"
        control={
          <Checkbox color="secondary" checked={filters.publicOnly} onChange={onPublicOnlyChange} />
          } />
        <FormControlLabel 
        label="Not empty" 
        control={
          <Checkbox color="secondary" checked={filters.notEmpty} onChange={onNotEmptyChange} />
        } />
      </Box>
    </Paper>
  );
}