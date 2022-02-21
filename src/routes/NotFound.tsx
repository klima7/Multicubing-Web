import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Lottie from "react-lottie";
import Stack from '@mui/material/Stack';
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useHistory } from "react-router-dom";
import notFoundLottie from "../assets/lotties/not-found.json";
import "../assets/styles/Index.css";

function IndexPage() {
  const history = useHistory();
  
  const defaultOptions = {
    loop: false,
    animationData: notFoundLottie,
  };

  return (
    <Grid container spacing={2} sx={{ my: 7 }} alignItems="center">
      <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
        <Lottie options={defaultOptions} width={400} />
      </Grid>
      <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
        <h1>Page not found</h1>

        <Stack direction="row" justifyContent="center" spacing={4}>
          <Button
            variant="text"
            startIcon={<HomeIcon />}
            component={Link}
            to={"/"}
          >
            Home
          </Button>

          <Button
            variant="text"
            startIcon={<ArrowBackIcon />}
            onClick={history.goBack}
          >
            Back
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default IndexPage;
