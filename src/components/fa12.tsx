import React, { useState, Dispatch, SetStateAction } from "react";
import { TezosToolkit, WalletContract } from "@taquito/taquito";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { useSettings } from "../contexts/Settings";
import ConnectButton from "./ConnectWallet";
import { parseJsonText } from "typescript";



const FA12 = () => {
  const {
    contractFA12,
    contractAddressFA12,
    Tezos,
    userAddress,
    setUserBalance,
    setStorage,
    storage
  }= useSettings()

  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  

  const sendTransfer = async (): Promise<void> => {
    if (recipient && amount) {
      setLoading(true);
      try {
        const op = await contractFA12.methods.transfer( userAddress, recipient, parseInt(amount)).send();
        await op.confirmation();
        setRecipient("");
        setAmount("");
        const balance = await Tezos.tz.getBalance(userAddress);
        setUserBalance(balance.toNumber());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };
  if (!contractFA12 && !userAddress) return (<Grid>
  <Typography variant="h4">Please connect your Wallet</Typography>
  <ConnectButton/>
  </Grid>
  );
  return (
    
    <Grid container
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={8}
    sx={{borderBlockColor:'inherit'}}
    >
      <Grid item>
      <Typography variant="h4">FA1.2 Smart Contract</Typography>
      </Grid>

      <Grid item>
      
      <TextField
            type="text"
            id="recepient"
            label="Destination"
            variant="outlined"
            onChange={e => setRecipient(e.target.value)}
            focused
            InputProps={{
              style: { color: 'inherit' }
            }}
          />
      </Grid>
      <Grid item>
      
      <TextField
            type="number"
            id="amount"
            label="Amount"
            variant="outlined"
            onChange={e => setAmount(e.target.value)}
            focused
            InputProps={{
              style: { color: 'inherit' }
            }}
          />
      </Grid>
      <Grid item >
      <Button
        variant="contained"
        disabled={!recipient && !amount}
        onClick={sendTransfer}
      >
        {loading ? (
          
            <Typography>Please wait</Typography> 
          
        ) : (
          
             <Typography>Send</Typography>
          
        )}
      </Button>
      </Grid>
      <Grid item>
        
      </Grid>
    
    <Grid item>
          <p>
                <i className="far fa-file-code"></i>&nbsp;
                <a
                  href={`https://better-call.dev/ghostnet/${contractAddressFA12}/operations`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contractAddressFA12}
                </a>
              </p>
    
    </Grid>
   
      
  </Grid>
  );
};

export default FA12;
