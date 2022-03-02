import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector, useAppThunkDispatch } from "../utils/hooks";
import { clearAddRoomDialog } from "../actions/add-room-actions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Form, Field } from "react-final-form";
import Stack from "@mui/material/Stack";
import {
  TextFieldAdapter,
  SwitchAdapter,
  CubeSelectorAdapter,
  Condition,
} from "../utils/form-adapters";
import { minLength, required, composeValidators } from "../utils/form-validators";
import { addRoom } from "../actions/add-room-actions";

const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 25;

const MAX_DESCRIPTION_LENGTH = 100;

const MIN_PASSWORD_LENGTH = 3;
const MAX_PASSWORD_LENGTH = 25;

export default function AddRoomDialog() {
  const dispatch = useAppThunkDispatch();
  const open = useAppSelector((state) => state.addRoom.open);
  const pending = useAppSelector((state) => state.addRoom.pending);
  const takenName = useAppSelector((state) => state.addRoom.takenName);

  const handleClose = () => {
    dispatch(clearAddRoomDialog());
  };

  const handleAdd = (values: any) => {
    dispatch(addRoom(values.name, values.description, values.cube, values.password));
  };

  const onReset = (form: any) => {
    form.reset();
    form.resetFieldState('name');
  }

  return (
    <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleClose}>
      <Form
        onSubmit={(values) => {}}
        initialValues={{cube: 'three'}}
        render={({ handleSubmit, form, submitting, pristine, values, invalid }) => (
          <>
            <DialogTitle>Add room</DialogTitle>
            <DialogContent>
              <Box sx={{ pt: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Field
                      name="cube"
                      component={CubeSelectorAdapter}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <form>
                      <Stack spacing={2}>
                        <Field
                          name="name"
                          component={TextFieldAdapter}
                          validate={composeValidators(required, minLength(MIN_NAME_LENGTH))}
                          label="Name *"
                          autoComplete="off"
                          helper={`Minimum ${MIN_NAME_LENGTH} characters`}
                          inputProps={{ maxLength: MAX_NAME_LENGTH }}
                        />
                        <Field
                          name="description"
                          component={TextFieldAdapter}
                          label="Description"
                          autoComplete="off"
                          helper=" "
                          inputProps={{ maxLength: MAX_DESCRIPTION_LENGTH }}
                        />
                        <Field
                          name="private"
                          type="checkbox"
                          component={SwitchAdapter}
                          label="Private room"
                        />
                        <Condition when="private" is={true}>
                          <Field
                            name="password"
                            type="password"
                            component={TextFieldAdapter}
                            validate={composeValidators(required, minLength(MIN_PASSWORD_LENGTH))}
                            label="Room password *"
                            autoComplete="off"
                            helper={`Minimum ${MIN_PASSWORD_LENGTH} characters`}
                            inputProps={{ maxLength: MAX_PASSWORD_LENGTH }}
                          />
                        </Condition>
                      </Stack>
                      {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
                    </form>
                    {takenName !== null && (
                      <span style={{color: 'red', fontWeight: 'bold'}}>Name {takenName} is taken</span>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
            <DialogActions>
              {!pending ? 
              (
                <>
                  <Button type="submit" disabled={invalid} onClick={() => handleAdd(values)}>
                    Add
                  </Button>
                  <Button disabled={submitting || pristine} onClick={() => onReset(form)}>
                    Reset
                  </Button>
                </>
              )
              :
              (
                <CircularProgress style={{width: 30, height: 30}}/>
              )
            }
            <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        )}
      />
    </Dialog>
  );
}
