import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { useSettings } from "../contexts/Settings";
import {
  NetworkType,
  BeaconEvent,
  defaultEventCallbacks
} from "@airgap/beacon-dapp";
import { Button } from "@mui/material";

const ConnectButton = () => {

  const {
    Tezos,
    setContract,
    setContractFA12,
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
    contractAddress,
    contractAddressFA12
  }= useSettings()

  const setup = async (userAddress: string): Promise<void> => {
    setUserAddress(userAddress);
    // updates balance
    const balance = await Tezos.tz.getBalance(userAddress);
    setUserBalance(balance.toNumber());
    // creates contract instance
    const contract = await Tezos.wallet.at(contractAddress);
    const storage: any = await contract.storage();
    setContract(contract);
    setStorage(storage.toNumber());

    //create fa12 Smart Contract
    const contractFA12 = await Tezos.wallet.at(contractAddressFA12);
    setContract(contractFA12);
  };

  const connectWallet = async (): Promise<void> => {
    try {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
          rpcUrl: "https://ghostnet.ecadinfra.com"
        }
      });
      // gets user's address
      const userAddress = await wallet.getPKH();
      await setup(userAddress);
      setBeaconConnection(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      // creates a wallet instance
      const wallet = new BeaconWallet({
        name: "DApp.ME",
        preferredNetwork: NetworkType.GHOSTNET,
        disableDefaultEvents: false, 
        eventHandlers: {
          // To keep the pairing alert, we have to add the following default event handlers back
          [BeaconEvent.PAIR_INIT]: {
            handler: defaultEventCallbacks.PAIR_INIT
          },
          [BeaconEvent.PAIR_SUCCESS]: {
            handler: data => setPublicToken(data.publicKey)
          }
        }
      });
      Tezos.setWalletProvider(wallet);
      setWallet(wallet);
      // checks if wallet was connected before
      const activeAccount = await wallet.client.getActiveAccount();
      if (activeAccount) {
        const userAddress = await wallet.getPKH();
        await setup(userAddress);
        setBeaconConnection(true);
      }
    })();
  }, []);

  return (
      <Button variant="contained" onClick={connectWallet}>
           Connect wallet
      </Button>
  );
};

export default ConnectButton;
