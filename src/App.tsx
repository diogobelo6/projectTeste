import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import "./App.css";
import ConnectButton from "./components/ConnectWallet";
import DisconnectButton from "./components/DisconnectWallet";
import qrcode from "qrcode-generator";
import UpdateContract from "./components/UpdateContract";
import Transfers from "./components/Transfers";
import { Appbar } from "./components/AppBar";
import { ThemeOptions, ThemeProvider, createTheme}  from "@mui/material/styles";
import { TabBar } from "./components/Tab";
import { HomePage } from "./components/home";
import { useSettings } from "./contexts/Settings";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#fbca01',
    },
    secondary: {
      main: '#c009e2',
      dark: '#cf08f1',
    },
    background: {
      default: 'rgba(19,9,28,0.76)',
      paper: '#211e31',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: '#6b2913',
    },
  },
  typography: {
    fontFamily: 'Roboto Mono',
  },
};

const theme = createTheme(themeOptions)

enum BeaconConnection {
  NONE = "",
  LISTENING = "Listening to P2P channel",
  CONNECTED = "Channel connected",
  PERMISSION_REQUEST_SENT = "Permission request sent, waiting for response",
  PERMISSION_REQUEST_SUCCESS = "Wallet is connected"
}

const App = () => {
 
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
  // Ghostnet Increment/Decrement contract
  

  const generateQrCode = (): { __html: string } => {
    const qr = qrcode(0, "L");
    qr.addData(publicToken || "");
    qr.make();

    return { __html: qr.createImgTag(4) };
  };

  
    return (
      <ThemeProvider theme={theme}>
        <Appbar/>
        <TabBar/>
        <HomePage/>
        <ConnectButton/>
        </ThemeProvider>
      
    );
};

export default App;
