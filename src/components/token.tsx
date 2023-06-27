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
        <div className="main-box">
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
        
      </div>


    )
}