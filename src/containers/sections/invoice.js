import HiveQRCode from "hive-qrcode";
import { decode } from "hive-uri";
import React, { useEffect } from "react";
const Invoice = () => {
  const to = window.location.href.replace(
    "http://localhost:3000/#invoice/",
    // "https://hive-keychain.com/#invoice/",
    "hive://sign/op/"
  );

  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <h1>Keychain Store Invoice</h1>
      <p>Scan this QR Code to pay for this invoice with Keychain:</p>
      <div style={{ flex: 1, justifyContent: "center" }}>
        {
          <HiveQRCode
            op={decode(to).tx.operations[0]}
            size={300}
            withLogo
            logoImage="img/keychainStore.png"
          ></HiveQRCode>
        }
      </div>
      <br />
      <a href={to}>Invoice link</a>
      <br />
      <p style={{ width: "80%", margin: "auto" }}>
        If you are already on your mobile and the App you are using didn't
        redirect you automatically to the Keychain App, select "Open on Browser"
        among your App options, or copy paste this link in your usual browser.
      </p>
      <br />
      <br />
    </div>
  );
};

export default Invoice;
