import Avatar from '@mui/material/Avatar';
import { useAccount } from '../utils/hooks';
import Box from '@mui/material/Box';
import PersonIcon from "@mui/icons-material/Person";
import { deepOrange } from '@mui/material/colors';

function CurrentUserIndicator() {
  const account = useAccount();
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>
        <PersonIcon />
      </Avatar>
      <Box sx={{mr: 1}} />
      <span style={{fontWeight: 'bold'}}>{account.username}</span>
    </Box>
  );
}

export default CurrentUserIndicator;
