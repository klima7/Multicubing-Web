import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Logo from '../_reusable/Logo';

function AppBarLogo() {
  const history = useHistory();
  return (
    <div style={{display: 'flex', cursor: 'pointer'}} onClick={() => history.push('/')}>
      <Logo height='35pt' style={{ marginRight: '10pt' }} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Multicubing
      </Typography>
    </div>
  );
}

export default AppBarLogo;
