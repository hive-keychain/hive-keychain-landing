import React from "react";

const styles = {
  container: { position: "relative" },
  banner: {
    width: "100%",
    height: 400,
    background: "url(public/img/banner.png) 100% 100%",
  },
  title: {
    position: "relative",
    top: 200,
    transform: "translateY(-50%)",
    maxWidth: "50%",
  },
};

// Create banner component
const Banner = () => (
  <div style={styles.container}>
    <div id="banner" style={styles.banner}>
      <img
        id="title"
        style={styles.title}
        src="public/img/title.svg"
        alt="Keychain"
      />
    </div>
  </div>
);

export default Banner;
