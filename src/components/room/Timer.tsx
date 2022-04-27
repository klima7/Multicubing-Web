import { FC, useEffect, useState } from 'react';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import Button from '@mui/material/Button';
import { startTimer, stopTimer, clearTimer } from '../../redux/room/room-actions';

interface Props {
  roomSlug: string;
}

const Timer: FC<Props> = ({roomSlug}) => {

  const dispatch = useAppThunkDispatch();
  const timer = useAppSelector(state => state.room.timer);
  const [runTime, setRunTime] = useState(0.0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timer.start !== null && timer.end === null) {
      interval = setInterval(() => {
        const elapsed = +(new Date()) - +(timer.start!!);
        const seconds = elapsed / 1000;
        setRunTime(seconds);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [timer]);

  let timerView = null;
  if(timer.start === null) timerView = clearedTimer();
  else if(timer.end === null) timerView = runningTimer();
  else timerView = pausedTimer();


  return (
    <div>
      { timerView ?? <p></p> }
    </div>
  );

  function clearedTimer() {
    return (<span>0.00</span>)
  }

  function pausedTimer() {
    const elapsed = +(new Date()) - +(timer.start!!);
    const seconds = elapsed / 1000;
    return (<span>{ seconds }</span>)
  }
  
  function runningTimer() {
    return (<span>{ runTime }</span>)
  }

}

export default Timer;
