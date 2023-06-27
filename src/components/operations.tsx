import { useSettings } from "../contexts/Settings";
import qrcode from "qrcode-generator";
import DisconnectButton from "./DisconnectWallet";
import Transfers from "./Transfers";
import UpdateContract from "./UpdateContract";
import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";

export const Operations=()=>{
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
    return(
<Grid container rowSpacing={6} marginTop={'10px'} direction={'row'} justifyContent="space-between">
            
            <Grid  item xs={2} >
              <Paper>
            <List>
            <ListItem  disablePadding>
              <ListItemButton 
              onClick={() => setActiveTab("transfer")}>
                <ListItemText primary={"Make a Transfer"}/>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton 
              onClick={() => setActiveTab("contract")}>
                <ListItemText primary={"Contract"}/>
              </ListItemButton>
            </ListItem>
            </List>
            </Paper>
           
            </Grid>
            
            <Grid container item xs={6}>
            {activeTab === "transfer" ? (
                <div id="transfers">
                  <h3 className="text-align-center">Make a transfer</h3>
                  <Transfers
                    Tezos={Tezos}
                    setUserBalance={setUserBalance}
                    userAddress={userAddress}
                  />
                </div>
              ) : (
                <div id="increment-decrement">
                  <h3 className="text-align-center">
                    Current counter: <span>{storage}</span>
                  </h3>
                  <UpdateContract
                    contract={contract}
                    setUserBalance={setUserBalance}
                    Tezos={Tezos}
                    userAddress={userAddress}
                    setStorage={setStorage}
                  />
                </div>
              )}
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
              <p>
                <i className="far fa-address-card"></i>&nbsp; {userAddress}
              </p>
              <p>
                <i className="fas fa-piggy-bank"></i>&nbsp;
                {(userBalance / 1000000).toLocaleString("en-US")} ꜩ
              </p>
              <DisconnectButton/>
            <Button variant="contained" color="primary">
                Get Started
              </Button>
  
            </Grid>
            <Grid container item xs direction={"column"} justifyContent={"flex-start"} alignItems={"center"} columnSpacing={5}>
            
              <Grid item justifyContent={"center"}>
                
                <Typography variant="h5"> Your Balance</Typography>
                <Typography variant="h6"> {(userBalance / 1000000).toLocaleString("en-US")} ꜩ </Typography>
                
              </Grid>
              <Grid item justifyContent={"center"}>
                
                <Typography variant="h5"> Your Address</Typography>
                <Typography variant="h6"> {beaconConnection ? (userAddress): "Not Connected"} </Typography>
                
              </Grid>
        </Grid>
        
      </Grid>

    )
}