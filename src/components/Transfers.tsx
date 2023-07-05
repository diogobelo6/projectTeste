import React, { useState, Dispatch, SetStateAction } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { Button, Grid, TextField, Typography } from "@mui/material";

const Transfers = ({
  Tezos,
  setUserBalance,
  userAddress
}: {
  Tezos: TezosToolkit;
  setUserBalance: Dispatch<SetStateAction<number>>;
  userAddress: string;
}): JSX.Element => {
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendTransfer = async (): Promise<void> => {
    if (recipient && amount) {
      setLoading(true);
      try {
        const op = await Tezos.wallet.transfer({ to: recipient, amount: parseInt(amount) }).send();
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


  return (
    <Grid container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={8}
      sx={{borderBlockColor:'inherit'}}
      >
        <Grid item>
        <Typography variant="h4">Make a transfer</Typography>
        </Grid>
        <Grid item xs={7}>
          <TextField
            type="text"
            id="recepient"
            label="Recepient"
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
      
      <Grid item>
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
     
        
    </Grid>
  );
};

export default Transfers;
