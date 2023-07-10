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
import DisconnectButton from './DisconnectWallet';
import { useSettings } from '../contexts/Settings';


  

export const Appbar=()=>{
  const {beaconConnection}= useSettings()
  
    return(
      <AppBar position="fixed" color='transparent'>
      <Toolbar>
      <TemporaryDrawer/>
        <Box sx={{ marginRight: 2 }}>
          <img src="logo.png" alt="Logo" height={60} width={135}/>
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1}} align='left' marginLeft={5}>
          
        </Typography>
        
        {beaconConnection? (
          <DisconnectButton/>
          ):(
            <ConnectButton/>
        
            )}
      </Toolbar>
    </AppBar>
    )
}
