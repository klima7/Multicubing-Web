import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppSelector, useAppThunkDispatch } from '../utils/hooks';
import { clearAddRoomDialog } from '../actions/add-room-actions';
import CubeSelector from './CubeSelector';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Cube } from '../utils/cubes';
import { Form, Field } from 'react-final-form'
import { TextFieldAdapter, SwitchAdapter, Condition } from '../utils/form-adapters';
import Stack from '@mui/material/Stack';

const minValue = (min: number) => (value: string) =>
  value === undefined || value.length > min ? undefined : `Should be longer than ${min}`

export default function AddRoomDialog() {

  const dispatch = useAppThunkDispatch();
  const open = useAppSelector(state => state.addRoom.open);

  const handleClose = () => {
    dispatch(clearAddRoomDialog());
  };

  const handleAdd = () => {
    dispatch(clearAddRoomDialog());
  };

  const handleCubeChange = (cube: Cube) => {
    console.log(`Cube changed to ${cube}`)
  }

  const onSubmit = (values: any) => {
    console.log(values);
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Add room</DialogTitle>
      <DialogContent>
        <Box sx={{pt: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CubeSelector onChange={handleCubeChange} />
            </Grid>
            <Grid item xs={8}>
              <Form 
                onSubmit={onSubmit}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                  <form>
                    <Stack spacing={2}>
                      <Field
                        name="name"
                        component={TextFieldAdapter}
                        validate={minValue(10)}
                        label="Name" 
                        autoComplete="off"
                        helper=" "
                      />
                      <Field
                        name="description"
                        component={TextFieldAdapter}
                        validate={minValue(10)}
                        label="Description" 
                        autoComplete="off"
                        helper=" "
                      />
                      <Field
                        name="private"
                        type="checkbox"
                        component={SwitchAdapter}
                        validate={minValue(10)}
                        label="Private room" 
                      />
                      <Condition when="private" is={true}>
                        <Field
                          name="password"
                          type="password"
                          component={TextFieldAdapter}
                          validate={minValue(10)}
                          label="Password" 
                          autoComplete="off"
                          helper=" "
                        />
                      </Condition>
                    </Stack>
                    {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
                  </form>
                )
            } />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAdd}>Add</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
