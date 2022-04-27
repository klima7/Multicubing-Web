import { FC } from 'react';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import Button from '@mui/material/Button';
import { startTimer, stopTimer, clearTimer } from '../../redux/room/room-actions';
import Timer from './Timer';

interface Props {
  roomSlug: string;
}

const ExtendedTimer: FC<Props> = ({roomSlug}) => {

  const dispatch = useAppThunkDispatch();
  const timer = useAppSelector(state => state.room.timer);

  function onButtonClick() {
    if(timer.start === null)
      dispatch(startTimer())
    else if(timer.end === null)
      dispatch(stopTimer())
    else
     dispatch(clearTimer())
  }

  function press(e: any) {
    onButtonClick()
  }


  return (
    <div tabIndex={0} onKeyPress={press}>
      <Timer roomSlug={roomSlug} />
      <Button 
          variant="text" 
          onClick={onButtonClick}
        >
          Click
        </Button>
    </div>
  );

}

export default ExtendedTimer;
