import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useSettings } from "../contexts/Settings";
import qrcode from "qrcode-generator";

export const Token = () => {
  const {
    publicToken,
    copiedPublicToken,
    setCopiedPublicToken,
  } = useSettings()


  const generateQrCode = (): { __html: string } => {
    const qr = qrcode(0, "L");
    qr.addData(publicToken || "");
    qr.make();

    return { __html: qr.createImgTag(4) };
  };
  
  return (
    <div>
      <Typography
        variant="h3"
        style={{
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Your info
      </Typography>
      <div id="dialog">
        <Typography
          variant="subtitle1"
          style={{
            color: "darkgrey",
            textTransform: "capitalize"
          }}
        >
          Share this QrCode
        </Typography>
        <div id="content">
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
            <Typography
              variant="subtitle1"
              style={{
                color: "darkgrey",
                textTransform: "capitalize"
              }}
            >
              Public token: {publicToken}
            </Typography>
          </p>
          <p className="text-align-center">
            <img src="tezos.gif" alt="gif" />
          </p>
        </div>
      </div>

    </div>


  )
}