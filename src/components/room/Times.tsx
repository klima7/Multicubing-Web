import * as React from 'react';import { FC } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../hooks';
import { Time, Flag } from '../../types/types';

interface Props {
  roomSlug: string;
}

const Times: FC<Props> = ({roomSlug}) => {

  const tableParticipants = useAppSelector(state => state.room.tableParticipants);
  const tableTimes = useAppSelector(state => state.room.tableTimes);

  return (
    <Box 
      sx={{ display: 'flex', flexDirection: 'column'}}
      style={{
      border: 'solid 2px black', 
      borderRadius: 10, 
      textAlign: 'left',
      height: '100%',
      }}>

      <Box style={{textAlign: 'center', borderBottom: 'solid 2px black'}}>
        <h4 style={{marginBottom: 0, marginTop: 0}}>Times</h4>
      </Box>

      <Box sx={{ flex: 1 }}>
        <OverlayScrollbarsComponent
            style={{ height: '100%' }}
          >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell width="15ex">Turn / User</TableCell>
                  { tableParticipants.map(participant => (
                    <TableCell width="15ex">{participant.user.username}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                { tableTimes.slice(0).reverse().map((row, turn_no) => (
                  <TableRow
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"><b>{tableTimes.length-turn_no}</b></TableCell>
                    { row.map(time => (
                      <TableCell component="th" scope="row">{renderTime(time)}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </OverlayScrollbarsComponent>
      </Box>

    </Box>
  );

  function renderTime(time: Time | null) {
    if(time === null) {
      return '-----';
    }
    else if(time.flag === Flag.DNF) {
      return 'DNF';
    }
    else if(time.flag === Flag.PLUS2) {
      return `${roundTime(time.time + 2)} (+2)`;
    }
    else {
      return roundTime(time.time);
    }
  }

  function roundTime(number: number) {
    return number.toFixed(2);
  } 

}

export default Times;
