import { TezosToolkit } from '@taquito/taquito';
import React, { createContext, useContext, useState } from 'react';

interface SettingsProviderProps {
    children: React.ReactNode;
  }
const SettingsContext = createContext<any>(null);

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<SettingsProviderProps>= ({children}) => {
    const [Tezos,setTezos] = useState<TezosToolkit>(new TezosToolkit("https://ghostnet.ecadinfra.com"));
    const [contract, setContract] = useState<any>(undefined);
    const [contractFA12, setContractFA12] = useState<any>(undefined);
    const [publicToken, setPublicToken] = useState<string | null>(null);
    const [wallet, setWallet] = useState<any>(null);
    const [userAddress, setUserAddress] = useState<string>("");
    const [userBalance, setUserBalance] = useState<number>(0);
    const [storage, setStorage] = useState<number>(0);
    const [copiedPublicToken, setCopiedPublicToken] = useState<boolean>(false);
    const [beaconConnection, setBeaconConnection] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("contract");
    const contractAddress: string = "KT1QMGSLynvwwSfGbaiJ8gzWHibTCweCGcu8";
    const contractAddressFA12: string = "KT1L5FTSf1xRwwry9NNFeNPcxjVJGEN2PGC1";
    return (
      <SettingsContext.Provider
        value={{
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
          contractAddress,
          contractFA12,
          setContractFA12,
          contractAddressFA12
        }}
      >
        {children}
      </SettingsContext.Provider>
    );
  };