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
    const [Tezos, setTezos] = useState<TezosToolkit>(
        new TezosToolkit("https://ghostnet.ecadinfra.com")
      );
      const [contract, setContract] = useState<any>(undefined);
      const [publicToken, setPublicToken] = useState<string | null>(null);
      const [wallet, setWallet] = useState<any>(null);
      const [userAddress, setUserAddress] = useState<string>("");
      const [userBalance, setUserBalance] = useState<number>(0);
      const [storage, setStorage] = useState<number>(0);
      const [copiedPublicToken, setCopiedPublicToken] = useState<boolean>(false);
      const [beaconConnection, setBeaconConnection] = useState<boolean>(false);
      const [activeTab, setActiveTab] = useState<string>("transfer");
    
      // Ghostnet Increment/Decrement contract
      const contractAddress: string = "KT1QMGSLynvwwSfGbaiJ8gzWHibTCweCGcu8";

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
        <ConnectButton
            Tezos={Tezos}
            setContract={setContract}
            setPublicToken={setPublicToken}
            setWallet={setWallet}
            setUserAddress={setUserAddress}
            setUserBalance={setUserBalance}
            setStorage={setStorage}
            contractAddress={contractAddress}
            setBeaconConnection={setBeaconConnection}
            wallet={wallet}
          />
      </Toolbar>
    </AppBar>
    )
}
