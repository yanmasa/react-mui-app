import React from "react";
import Button from "@mui/material/Button";
import { CssBaseline, Grid, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles'
import theme  from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <h1>Hello,World!</h1>
        <Typography variant="h1">Hello,World!</Typography>
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
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Grid>
      <Grid item xs={6} md={8}>
        <Button variant="contained" color="success">
          Hello World
        </Button>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}

export default App;
