import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Lottie from "react-lottie";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import notFoundLottie from "../assets/lotties/not-found.json";
import "../assets/styles/Index.css";

function IndexPage() {
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
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          component={Link}
          to={"/"}
        >
          Go to Home Page
        </Button>
      </Grid>
    </Grid>
  );
}

export default IndexPage;
