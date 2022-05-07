import SpectatorsList from './SpectatorsList';
import RoomPanel from '../RoomPanel';
import SpectatorButton from './SpectatorButton';
import Box from '@mui/material/Box';


const RoomBar = () => {

  return (
    <RoomPanel>
      <Box sx={{display: 'flex'}}>
        <Box 
          sx={{
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            paddingLeft: '10px', 
            justifyContent: 'center', color: 'white'
          }} 
          style={{
            // background: '#FF5722',
            color: 'inherit',
            // borderRight: 'solid 3px black'
          }}
          >
          <h4 style={{marginBottom: 0, marginTop: 0}}>Adolf</h4>
        </Box>
        <Box sx={{width: '30px'}}/>
        <SpectatorButton />
        <Box sx={{width: '30px'}}/>
        <SpectatorsList />
      </Box>
    </RoomPanel>
  );
}

export default RoomBar;
