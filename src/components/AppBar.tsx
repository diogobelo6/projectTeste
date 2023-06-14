import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './Sidebar';
import { TezosToolkit } from '@taquito/taquito';
import { useState } from 'react';
import ConnectButton from './ConnectWallet';



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
        <div style={{ height: '100vh', overflow: 'auto' } }>
      <AppBar position="fixed">
        <Toolbar>
         <TemporaryDrawer/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 4 }} align={'left'}>
            News
          </Typography>
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
    </div>
    )
}
