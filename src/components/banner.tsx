import { Box, CardMedia, Container, Grid, makeStyles, Paper, Typography } from "@mui/material";





export function Banner() {
  

  return (
    <Box sx={{backgroundImage:"url(banner2.jpg)", backgroundSize:"cover"}}>
        
      <Grid container height={400} display={"flex"} flexDirection={"column"} paddingTop={25} justifyContent={"space-around"}  >
        <Grid item display={"flex"} height={"40%"} flexDirection={"column"} justifyContent={"center"} textAlign={"center"}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 30,
            }}
          >
            DApp.Me
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize"
            }}
          >
            Get started and make some transactions
          </Typography>
        </Grid>
      </Grid>
      </Box>
  );
}