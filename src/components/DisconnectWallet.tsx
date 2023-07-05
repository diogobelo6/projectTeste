import React, { Dispatch, SetStateAction } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";
import { useSettings } from "../contexts/Settings";
import { Button } from "@mui/material";

const DisconnectButton = () => {
  const {
    Tezos,
    setTezos,
    contract,
    setContract,
    publicToken,
    setPublicToken,
    wallet,
    setWallet,
    userAddress,
    setUserAddress,
    userBalance,
    setUserBalance,
    storage,
    setStorage,
    copiedPublicToken,
    setCopiedPublicToken,
    beaconConnection,
    setBeaconConnection,
    activeTab,
    setActiveTab,
    contractAddress
  }= useSettings()

  const disconnectWallet = async (): Promise<void> => {
    if (wallet) {
      await wallet.clearActiveAccount();
    }
    setUserAddress("");
    setUserBalance(0);
    setWallet(null);
    const tezosTK = new TezosToolkit("https://ghostnet.ecadinfra.com");
    setTezos(tezosTK);
    setBeaconConnection(false);
    setPublicToken(null);
  };

  return (
    
      <Button
      variant="outlined"  
      onClick={disconnectWallet}>
         Disconnect wallet
      </Button>
    
  );
};

export default DisconnectButton;
