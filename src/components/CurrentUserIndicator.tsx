import Avatar from "@mui/material/Avatar";
import { useAccount } from "../hooks";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import { deepOrange } from "@mui/material/colors";
import { useHistory } from 'react-router-dom';

function CurrentUserIndicator() {
  const account = useAccount();
  const history = useHistory();
  return (
    <Box
      onClick={() => history.push(`/user/${account.username}`)}
      sx={{ display: "inline-flex", alignItems: "center" }}
      style={{ cursor: "pointer" }}
    >
      <Avatar sx={{ bgcolor: deepOrange[500] }}>
        <PersonIcon />
      </Avatar>
      <Box sx={{ mr: 1 }} />
      <span style={{ fontWeight: "bold" }}>{account.username}</span>
    </Box>
  );
}

export default CurrentUserIndicator;
