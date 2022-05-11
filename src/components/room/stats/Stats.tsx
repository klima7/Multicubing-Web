import { FC, CSSProperties } from 'react';
import Box from '@mui/material/Box';
import RoomPanel from '../RoomPanel';
import RoomPanelHeader from '../RoomPanelHeader';
import { useAppSelector } from '../../../hooks';

interface Props {
  roomSlug: string;
}

const Stats: FC<Props> = ({roomSlug}) => {

  const stats = useAppSelector(state => state.room.stats);

  const placeholder = <span>- - - -</span>

  const style1: CSSProperties = {
    textAlign: 'right',
    paddingRight: '10px',
    fontWeight: 'bold'
  };

  const style2: CSSProperties = {
    textAlign: 'right',
  };

  return (
    <RoomPanel>

      <RoomPanelHeader>Stats</RoomPanelHeader>

      <Box sx={{
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%', 
          alignItems: 'flex-end',
          justifyContent: 'space-around'
        }}>

        <table style={{margin: '10px'}}>
          <tr>
            <td style={style1}><span>Solves:</span></td>
            <td style={style2}>{stats.solves}</td>
          </tr>
          <tr>
            <td style={style1}><span>Average:</span></td>
            <td style={style2}>{stats.avg?.toFixed(2) ?? placeholder}</td>
          </tr>
          <tr>
            <td style={style1}><span>Best:</span></td>
            <td style={style2}>{stats.best?.toFixed(2) ?? placeholder}</td>
          </tr>
        </table>

        <table style={{margin: '10px'}}>
          <tr>
            <td style={style1}><span>Avg 5:</span></td>
            <td style={style2}>{stats.avg5?.toFixed(2) ?? placeholder}</td>
          </tr>
          <tr>
            <td style={style1}><span>Avg 12:</span></td>
            <td style={style2}>{stats.avg12?.toFixed(2) ?? placeholder}</td>
          </tr>
          <tr>
            <td style={style1}><span>Avg 50:</span></td>
            <td style={style2}>{stats.avg50?.toFixed(2) ?? placeholder}</td>
          </tr>
          <tr>
            <td style={style1}><span>Avg 100:</span></td>
            <td style={style2}>{stats.avg100?.toFixed(2) ?? placeholder}</td>
          </tr>
        </table>

      </Box>

    </RoomPanel>
  );
}

export default Stats;
