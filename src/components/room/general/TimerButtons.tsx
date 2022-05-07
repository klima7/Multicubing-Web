import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useAppThunkDispatch, useAppSelector } from '../../../hooks';
import { Flag } from '../../../types/types';
import { startTimer, stopTimer, clearTimer, addTime } from '../../../redux/room/room-actions';

const TimerButtons = () => {

  const dispatch = useAppThunkDispatch();
  const timer = useAppSelector(state => state.room.timer);
  const flag = useAppSelector(state => state.room.flag);

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
  }

  function dnfButtonClick() {
    dispatch(addTime(Flag.DNF));
  }

  function okButtonClick() {
    dispatch(addTime(null));
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
    const activeStyle = { backgroundColor: '#1976D255' }

    return (
      <Box>
        <Button 
          variant="text" 
          onClick={okButtonClick}
          style={flag === null ? activeStyle : {}}
        >
          OK
        </Button>
        <Button 
          variant="text" 
          onClick={plus2ButtonClick}
          style={flag === Flag.PLUS2 ? activeStyle : {}}
        >
          +2
        </Button>
        <Button 
          variant="text" 
          onClick={dnfButtonClick}
          style={flag === Flag.DNF ? activeStyle : {}}
        >
          DNF
        </Button>
      </Box>
    );
  }

}

export default TimerButtons;
