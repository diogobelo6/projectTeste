import React, { Dispatch, SetStateAction } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";
import { useSettings } from "../contexts/Settings";

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
    <div className="buttons">
      <button className="button" onClick={disconnectWallet}>
        <i className="fas fa-times"></i>&nbsp; Disconnect wallet
      </button>
    </div>
  );
};

export default DisconnectButton;
