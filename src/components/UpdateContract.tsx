import React, { useState, Dispatch, SetStateAction } from "react";
import { TezosToolkit, WalletContract } from "@taquito/taquito";
import { Grid, Typography, Button } from "@mui/material";
import { useSettings } from "../contexts/Settings";
import ConnectButton from "./ConnectWallet";



const UpdateContract = () => {
  const {
    contract,
    contractAddress,
    Tezos,
    userAddress,
    setUserBalance,
    setStorage,
    storage
  } = useSettings()


  const [loadingIncrement, setLoadingIncrement] = useState<boolean>(false);
  const [loadingDecrement, setLoadingDecrement] = useState<boolean>(false);

  const increment = async (): Promise<void> => {
    setLoadingIncrement(true);
    try {
      const op = await contract.methods.increment(1).send();
      await op.confirmation();
      const newStorage: any = await contract.storage();
      if (newStorage) setStorage(newStorage.toNumber());
      setUserBalance(await Tezos.tz.getBalance(userAddress));
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingIncrement(false);
    }
  };

  const decrement = async (): Promise<void> => {
    setLoadingDecrement(true);
    try {
      const op = await contract.methods.decrement(1).send();
      await op.confirmation();
      const newStorage: any = await contract.storage();
      if (newStorage) setStorage(newStorage.toNumber());
      setUserBalance(await Tezos.tz.getBalance(userAddress));
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingDecrement(false);
    }
  };

  if (!contract && !userAddress) return (<Grid>
    <Typography variant="h4">Please connect your Wallet</Typography>
    <ConnectButton />
  </Grid>
  );
  return (

    <Grid container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={8}
      sx={{ borderBlockColor: 'inherit' }}
    >
      <Grid item>
        <Typography variant="h4">Smart Contract</Typography>
        <Typography>Current counter: {storage} </Typography>
      </Grid>
      <Grid container item direction="row" alignItems="center" justifyContent={"space-around"}>
        <Grid item >
          <Button
            variant="contained"
            onClick={decrement}
          >
            {loadingDecrement ? (

              <Typography>Please wait</Typography>

            ) : (

              <Typography>Decrement by 1</Typography>

            )}
          </Button>
          </Grid>
          <Grid item >
          <Button
            variant="contained"
            onClick={increment}
          >
            {loadingIncrement ? (

              <Typography>Please wait</Typography>

            ) : (

              <Typography>Increment by 1</Typography>

            )}
          </Button>
          </Grid>
        </Grid>
        <Grid item>

        </Grid>

        <Grid item>
          <p>
            <i className="far fa-file-code"></i>&nbsp;
            <a
              href={`https://better-call.dev/ghostnet/${contractAddress}/operations`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contractAddress}
            </a>
          </p>

        </Grid>


      </Grid>
      );
};

      export default UpdateContract;
