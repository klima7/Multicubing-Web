import { useTranslation } from 'react-i18next';
import { useParentUrl } from '../hooks';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Logo from '../components/_lib/Logo';
import '../assets/styles/Index.css'

function IndexPage() {
  useParentUrl(null);
  const [t] = useTranslation();

  return (
<Grid container spacing={2} alignItems="center">
  <Grid item xs={12} md={6} style={{textAlign: "center"}}>
    <Box sx={{mt: 10}}>
      <Logo width='300pt' style={{animation: 'logo-animation 3s infinite'}} />
      <h1>Multicubing</h1>
    </Box>
  </Grid>
  <Grid item xs={12} md={6} style={{textAlign: "center"}}>
    <Box sx={{mt: 10}}>
      <h2>{t("index_welcome")}</h2>
    </Box>
  </Grid>
</Grid>
  );
}

export default IndexPage;
