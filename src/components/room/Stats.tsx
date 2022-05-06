import { FC } from 'react';
import RoomPanel from './RoomPanel';
import RoomPanelHeader from './RoomPanelHeader';

interface Props {
  roomSlug: string;
}

const Stats: FC<Props> = ({roomSlug}) => {

  return (
    <RoomPanel>

      <RoomPanelHeader>Stats</RoomPanelHeader>

      <div style={{height: '100%'}}></div>

    </RoomPanel>
  );
}

export default Stats;
