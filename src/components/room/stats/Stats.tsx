import { FC, CSSProperties } from 'react';
import RoomPanel from '../RoomPanel';
import RoomPanelHeader from '../RoomPanelHeader';
import Box from '@mui/material/Box';

interface Props {
  roomSlug: string;
}

const Stats: FC<Props> = ({roomSlug}) => {

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
            <td style={style1}><span>Average:</span></td>
            <td style={style2}>9.35</td>
          </tr>
          <tr>
            <td style={style1}><span>Best:</span></td>
            <td style={style2}>12.86</td>
          </tr>
          <tr>
            <td style={style1}><span>Solves:</span></td>
            <td style={style2}>23</td>
          </tr>
        </table>

        <table style={{margin: '10px'}}>
          <tr>
            <td style={style1}><span>Avg 5:</span></td>
            <td style={style2}>9.35</td>
          </tr>
          <tr>
            <td style={style1}><span>Avg 12:</span></td>
            <td style={style2}>12.86</td>
          </tr>
          <tr>
            <td style={style1}><span>Avg 50:</span></td>
            <td style={style2}>- - - -</td>
          </tr>
          <tr>
            <td style={style1}><span>Avg 100:</span></td>
            <td style={style2}>- - - -</td>
          </tr>
        </table>

      </Box>

    </RoomPanel>
  );
}

export default Stats;
