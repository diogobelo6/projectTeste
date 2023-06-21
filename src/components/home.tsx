import Typography from '@mui/material/Typography';
import { Box, Grid, Button, Paper } from '@mui/material';



export const HomePage=()=>{
    return(
        <Box>
      <Grid container justifyContent="center">
        <Grid item xs={6} md={10}>
          <Box textAlign="center" sx={{ marginLeft: 10}}>
            <Typography variant="h2">Welcome to DApp.ME </Typography>
          </Box>
          <Box sx={{ marginBottom: 6 }}>
            <Typography variant="body1">
              DApp.Me is a decentralized platform to showcase an implementation of transactions in a private Blockchain. You can connect your wallet and sart testing today!
            </Typography>
          </Box>
          <Box sx={{ marginBottom: 6 }}>
            <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
              Get Started
            </Button>
            <Button variant="contained" color="secondary">
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Paper variant="outlined">
        wdfewgregqhres
      </Paper>
    </Box>
    )
}