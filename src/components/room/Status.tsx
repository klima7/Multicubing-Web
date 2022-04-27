import { FC } from 'react';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import ExtendedTimer from './ExtendedTimer';

interface Props {
  roomSlug: string;
}

const Status: FC<Props> = ({roomSlug}) => {

  const turn_number = useAppSelector(state => state.room.turn?.number);
  const scramble = useAppSelector(state => state.room.turn?.scramble);

  return (
    <div style={{
      border: 'solid 2px black', 
      borderRadius: 10,
      marginLeft: 10, 
      marginRight: 10, 
      textAlign: 'left',
      height: '100%'
      }}>

      <div style={{textAlign: 'center', borderBottom: 'solid 2px black'}}>
        <h2 style={{marginBottom: 0, marginTop: 0}}>Status</h2>
      </div>

      <div style={{height: '100%'}}>
        <p>Turn number: {turn_number}</p>
        <p>Scramble: {scramble}</p>
        <ExtendedTimer roomSlug={roomSlug} />
      </div>

    </div>
  );
}

export default Status;
