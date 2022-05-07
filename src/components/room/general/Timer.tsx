import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';

interface Props {
  roomSlug: string;
}

const Timer: FC<Props> = ({roomSlug}) => {

  const timer = useAppSelector(state => state.room.timer);
  const [time, setTime] = useState(0.0);

  useEffect(() => {

    // Cleared
    if (timer.start === null) {
      setTime(0);
    }

    // Running
    else if (timer.end === null) {
      let interval: ReturnType<typeof setInterval>;
      interval = setInterval(() => {
        const elapsed = +(new Date()) - +(timer.start!!);
        setTime(elapsed);
      }, 10);
      return () => clearInterval(interval);
    }

    // Paused
    else {
      const elapsed = +(timer.end!!) - +(timer.start!!);
      setTime(elapsed);
    }
  }, [timer]);

  function getTimeUnits(ms: number) {
    const allocate = (amount: number) => {
      const wholes = Math.floor(ms / amount);
      ms -= wholes * amount;
      return wholes;
    }
    return {
      minutes: allocate(60 * 1000),
      seconds: allocate(1000),
      ms: ms,
    }
  }

  function getTimeString(ms: number) {
    const timeUnits = getTimeUnits(ms);

    // minutes
    const minString = timeUnits.minutes > 0 ? timeUnits.minutes + ':' : '';

    // seconds
    const secPadding = timeUnits.minutes > 0 ? 2 : 0;
    const secString = String(timeUnits.seconds).padStart(secPadding, '0');

    // ms
    const msLimited = Math.floor(timeUnits.ms / 10)
    const msString = String(msLimited).padStart(2, '0');

    return minString + secString + '.' + msString
  }

  const timeString = getTimeString(time);
  const color = timer.loaded ? 'green' : 'inherit';

  return (
    <div>
      <span style={{
        fontFamily: 'monospace', 
        fontSize: '50pt',
        color: color,
        }}>
        { timeString }
      </span>
    </div>
  );

}

export default Timer;
