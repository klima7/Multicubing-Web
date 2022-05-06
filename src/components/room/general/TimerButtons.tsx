import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useAppThunkDispatch, useAppSelector } from '../../../hooks';
import { Flag } from '../../../types/types';
import { startTimer, stopTimer, clearTimer, addTime } from '../../../redux/room/room-actions';

const TimerButtons = () => {

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

  const buttons = timer.start ? (timer.end ? sendButtons() : stopButtons()) : startButtons()

  return (
    <Box>
      {buttons}
    </Box>
  );

  function startButtons() {
    return (
      <Button 
            variant="text" 
            onClick={timerButtonClick}
          >
            Start
        </Button>
    );
  }

  function stopButtons() {
    return (
      <Button 
            variant="text" 
            onClick={timerButtonClick}
          >
            Stop
        </Button>
    );
  }

  function sendButtons() {
    return (
      <Box>
        <Button 
          variant="text" 
          onClick={okButtonClick}
        >
          OK
        </Button>
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
      </Box>
    );
  }

}

export default TimerButtons;
