import { FC, FocusEvent, KeyboardEvent, useRef, useEffect, useState } from 'react';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import { loadTimer, startTimer, stopTimer, nextFlag, prevFlag, addTimeNoFlag, switchSpectator } from '../../redux/room/room-actions';
import { TimerState } from '../../types/types';

interface Props {
  children: any;
}

const KeyboardInterceptor: FC<Props> = ({children}) => {

  const ref = useRef<HTMLDivElement>(null)
  const [chatFocused, setChatFocused] = useState(false);
  const dispatch = useAppThunkDispatch();
  const timerState = useAppSelector(state => state.room.timer.state);
  const timerLoaded = useAppSelector(state => state.room.timer.loaded);

  useEffect(() => {
    ref.current?.focus();
  }, [])

  function onKeyDown(e: KeyboardEvent) {
    if (e.repeat) return
    const key = e.key;

    if (chatFocused) {
      if (key === 'Escape') {
        ref.current?.focus();
      }
    }

    else {
      if (key === 't') {
        const field = document.getElementById('chat-send-field');
        e.preventDefault();
        field?.focus();
      }
      if (key === 'p') {
        dispatch(switchSpectator());
      }
      else if (key === ' ') {
        if (timerState === TimerState.Cleared && timerLoaded === false) {
          dispatch(loadTimer());
        }
        if (timerState === TimerState.Running) {
          dispatch(stopTimer());
        }
      }
      else if (key === 'Enter' && timerState === TimerState.Paused) {
        dispatch(addTimeNoFlag());
      }
      else if (key === 'ArrowLeft') {
        dispatch(prevFlag());
      }
      else if (key === 'ArrowRight') {
        dispatch(nextFlag());
      }
    }
  }

  function onKeyUp(e: KeyboardEvent) {
    if (e.repeat) return
    const key = e.key;

    if (chatFocused) {

    }

    else {
      if (key === ' ') {
        if (timerState === TimerState.Cleared) {
          dispatch(startTimer())
        }
      }
    }
  }

  function onBlur(e: FocusEvent) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      ref.current?.focus();
    }
  }

  function onFocus(e: FocusEvent) {
    const id = e.target.id;
    setChatFocused(id === 'chat-send-field')
  }

  return (
    <div 
      ref={ref}
      style={{outline: 'none'}}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {children}
    </div>
  );
}

export default KeyboardInterceptor;
