import * as React from 'react';import { FC, useState } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';

interface Props {
  roomSlug: string;
}

const Times: FC<Props> = ({roomSlug}) => {

  const dispatch = useAppThunkDispatch();
  const times = useAppSelector(state => state.room.times);
  const participants = useAppSelector(state => state.room.participants);

  return (
    <div style={{
      border: 'solid 2px black', 
      borderRadius: 10, 
      marginLeft: 10, 
      marginRight: 10, 
      textAlign: 'left',
      height: '100%',
      }}>

      <div style={{textAlign: 'center', borderBottom: 'solid 2px black'}}>
        <h2 style={{marginBottom: 0, marginTop: 0}}>Times</h2>
      </div>

      <div style={{height: '100%'}}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell width="15ex">Turn / User</TableCell>
              { participants.map(participant => (
                <TableCell width="15ex">{participant.user.username}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">1</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">3</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell align="right">5</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
      </div>

    </div>
  );
}

export default Times;
