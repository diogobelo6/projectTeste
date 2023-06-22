import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './Sidebar';
import { TezosToolkit } from '@taquito/taquito';
import { useState } from 'react';
import ConnectButton from './ConnectWallet';
import { Box, Button } from '@mui/material';



export const Appbar=()=>{
    return(
      <AppBar position="fixed" color='transparent'>
      <Toolbar>
      <TemporaryDrawer/>
        <Box sx={{ marginRight: 2 }}>
          <img src="" alt="Logo" />
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1}} align='left' marginLeft={5}>
          DApp.Me
        </Typography>
        <Button variant="outlined" color="primary" sx={{ marginRight: 2 }}>
          Sign Up
        </Button>
        <Button variant="contained" color="primary" >
          Sign In
        </Button>
        <ConnectButton/>
      </Toolbar>
    </AppBar>
    )
}
