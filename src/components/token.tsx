import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useSettings } from "../contexts/Settings";
import qrcode from "qrcode-generator";

export const Token=()=>{
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


      const generateQrCode = (): { __html: string } => {
        const qr = qrcode(0, "L");
        qr.addData(publicToken || "");
        qr.make();
    
        return { __html: qr.createImgTag(4) };
      };
    return(
      <Grid container spacing={2} justifyContent={"space-between"} paddingLeft={10} paddingRight={10}>

      <Grid item xs={3}>
        <Card sx={{backgroundColor:'#37373a',
    border: '1px solid gray'}}>
          <CardContent>
          <div id="content">
            <Typography>Share this Token</Typography>
            <div
              dangerouslySetInnerHTML={generateQrCode()}
              className="text-align-center"
            ></div>
            <p id="public-token">
              {copiedPublicToken ? (
                <span id="public-token-copy__copied">
                  <i className="far fa-thumbs-up"></i>
                </span>
              ) : (
                <span
                  id="public-token-copy"
                  onClick={() => {
                    if (publicToken) {
                      navigator.clipboard.writeText(publicToken);
                      setCopiedPublicToken(true);
                      setTimeout(() => setCopiedPublicToken(false), 2000);
                    }
                  }}
                >
                  <i className="far fa-copy"></i>
                </span>
              )}
                <Typography variant="h5">Public Token:</Typography>
                </p>
                <Typography variant="h6">{publicToken}</Typography>
          </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card sx={{backgroundColor:'#37373a',
    border: '1px solid gray'}}>
          <CardContent>
           <Typography variant="h5">Wallet Address:</Typography>
           <Typography>{userAddress}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{backgroundColor:'#37373a',
    border: '1px solid gray'}}>
          <CardContent>
            {/* Conteúdo do terceiro card */}
          </CardContent>
        </Card>
      </Grid>
    
        
        <h1>Your info</h1>
        <div id="dialog">
          <header>Share this Token</header>
          <div id="content">
            <p className="text-align-center">
              <i className="fas fa-broadcast-tower"></i>&nbsp; Connecting to
              your wallet
            </p>
            <div
              dangerouslySetInnerHTML={generateQrCode()}
              className="text-align-center"
            ></div>
            <p id="public-token">
              {copiedPublicToken ? (
                <span id="public-token-copy__copied">
                  <i className="far fa-thumbs-up"></i>
                </span>
              ) : (
                <span
                  id="public-token-copy"
                  onClick={() => {
                    if (publicToken) {
                      navigator.clipboard.writeText(publicToken);
                      setCopiedPublicToken(true);
                      setTimeout(() => setCopiedPublicToken(false), 2000);
                    }
                  }}
                >
                  <i className="far fa-copy"></i>
                </span>
              )}

              <span>
                Public token: <span>{publicToken}</span>
              </span>
            </p>
            <p className="text-align-center">
              Status: {beaconConnection ? "Connected" : "Disconnected"}
            </p>
          </div>
        </div>
        
      
        </Grid>

    )
}