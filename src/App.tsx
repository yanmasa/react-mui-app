import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <Button variant="contained" color="success">
          Hello World
        </Button>
      </Grid>
      <Grid item xs={6} md={4}>
        <Button variant="text" color="error">
          Hello World
        </Button>
      </Grid>
      <Grid item xs={6} md={4}>
        <Button variant="contained" color="success">
          Hello World
        </Button>
      </Grid>
      <Grid item xs={6} md={8}>
        <Button variant="contained" color="success">
          Hello World
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
