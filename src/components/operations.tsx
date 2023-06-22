import { useSettings } from "../contexts/Settings";
import qrcode from "qrcode-generator";
import DisconnectButton from "./DisconnectWallet";
import Transfers from "./Transfers";
import UpdateContract from "./UpdateContract";

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
        <div className="main-box">
        <h1>Taquito Boilerplate</h1>
        <div id="tabs">
          <div
            id="transfer"
            className={activeTab === "transfer" ? "active" : ""}
            onClick={() => setActiveTab("transfer")}
          >
            Make a transfer
          </div>
          <div
            id="contract"
            className={activeTab === "contract" ? "active" : ""}
            onClick={() => setActiveTab("contract")}
          >
            Interact with a contract
          </div>
        </div>
        <div id="dialog">
          <div id="content">
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
          </div>
          <DisconnectButton/>
        </div>
        <div id="footer">
          <img src="built-with-taquito.png" alt="Built with Taquito" />
        </div>
      </div>

    )
}