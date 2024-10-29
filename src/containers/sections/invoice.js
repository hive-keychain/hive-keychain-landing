import React, { useEffect } from "react";

const Invoice = () => {
  const to = window.location.href.replace(
    //   "http://localhost:3000/#invoice/",
    "https://hive-keychain.com/#invoice/",
    "hive://sign/op/"
  );

  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <h1>Keychain Store Invoice</h1>
      <p>
        If the App you are using didn't redirect you automatically to Keychain
        App, select "Open on Browser" among your app options, or copy paste this
        link in your usual browser.
        <br />
        <br />
        <a href={to}>Invoice link</a>
      </p>
    </div>
  );
};

export default Invoice;
