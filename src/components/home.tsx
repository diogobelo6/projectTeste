import Typography from '@mui/material/Typography';
import { Box, Grid, Button} from '@mui/material';



export const HomePage=()=>{
    return(
      <Grid container rowSpacing={12} alignItems={'center'}  direction="column" marginTop={'10px'}>
          <Grid item xs={6}>
            <Typography variant="h2">Welcome to DApp.ME </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={20} >
              DApp.Me is a decentralized platform to showcase an implementation of transactions in a private Blockchain. You can connect your wallet and sart testing today!
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary"sx={{marginRight:'100px'}}>
              Get Started
            </Button>
            <Button variant="contained" color="secondary">
              Learn More
            </Button>
          </Grid>
        
    </Grid>
    )
}