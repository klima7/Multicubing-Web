import { FC } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import { startTimer, stopTimer, clearTimer, addTime } from '../../redux/room/room-actions';
import Timer from './Timer';
import { Flag } from '../../types/types';

interface Props {
  roomSlug: string;
}

const ExtendedTimer: FC<Props> = ({roomSlug}) => {

  const dispatch = useAppThunkDispatch();
  const timer = useAppSelector(state => state.room.timer);

  function timerButtonClick() {
    if(timer.start === null)
      dispatch(startTimer())
    else if(timer.end === null)
      dispatch(stopTimer())
    else
     dispatch(clearTimer())
  }

  function plus2ButtonClick() {
    dispatch(addTime(Flag.PLUS2));
    dispatch(clearTimer());
  }

  function dnfButtonClick() {
    dispatch(addTime(Flag.DNF));
    dispatch(clearTimer());
  }

  function okButtonClick() {
    dispatch(addTime(null));
    dispatch(clearTimer());
  }

  function press(e: any) {
    timerButtonClick()
  }

  return (
    <div tabIndex={0} onKeyPress={press}>
      <Timer roomSlug={roomSlug} />
      <Box sx={{ display: 'flex' }}>
        <Button 
            variant="text" 
            onClick={timerButtonClick}
          >
            Space
        </Button>
        { timer.end !== null ? sendButtons() : null }
      </Box>
    </div>
  );

  function sendButtons() {
    return (
      <Box>
        <Button 
          variant="text" 
          onClick={plus2ButtonClick}
        >
          +2
        </Button>
        <Button 
          variant="text" 
          onClick={dnfButtonClick}
        >
          DNF
        </Button>
        <Button 
          variant="text" 
          onClick={okButtonClick}
        >
          OK
        </Button>
      </Box>
    );
  }

}

export default ExtendedTimer;
