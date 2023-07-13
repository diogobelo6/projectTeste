import { useSettings } from "../contexts/Settings";
import qrcode from "qrcode-generator";
import DisconnectButton from "./DisconnectWallet";
import Transfers from "./Transfers";
import UpdateContract from "./UpdateContract";
import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import FA12 from "./fa12";

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
                <ListItemText primary={"Storage Contract"}/>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton 
              onClick={() => setActiveTab("fa12")}>
                <ListItemText primary={"FA1.2 Contract"}/>
              </ListItemButton>
            </ListItem>
            </List>
            </Paper>
           
            </Grid>
            
            <Grid container item xs justifyContent={"center"}>
              
           
            {activeTab === "transfer" ? (
                <Grid item>
                 
                  <Transfers
                    Tezos={Tezos}
                    setUserBalance={setUserBalance}
                    userAddress={userAddress}
                  />
              </Grid>
              ) : activeTab==="contract" ? (
                
                <Grid item justifyContent={"center"}>
                  
                  <UpdateContract/>
                </Grid>
              ): activeTab==="fa12" ?(
                <Grid item justifyContent={"center"}>
                  <FA12/>
                </Grid>

              ):null
              
              }
            </Grid>
            
            <Grid container item xs={2}  justifyContent={"flex-start"} alignItems={"flex-start"}  >
            
              <Grid item  columnSpacing={4}>
                
                <Typography variant="h5"> Your Balance</Typography>
                <Typography variant="h6"> {(userBalance / 1000000).toLocaleString("en-US")} ꜩ </Typography>
                
              </Grid>
              
              
        </Grid>
        
      </Grid>

    )
}