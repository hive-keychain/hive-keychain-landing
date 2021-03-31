import React from "react";

// Create banner component
const Banner = () => {
  const width = window.innerWidth;
  const styles = {
    container: { position: "relative" },
    banner: {
      width: "100%",
      height: width > 600 ? 400 : 200,
      background: "url(img/banner.png) 100% 100%",
    },
    title: {
      position: "relative",
      top: width > 600 ? 200 : 100,
      transform: "translateY(-50%)",
      maxWidth: "50%",
    },
  };
  return (
    <div style={styles.container}>
      <div id="banner" style={styles.banner}>
        <img
          id="title"
          style={styles.title}
          src="img/title.svg"
          alt="Keychain"
        />
      </div>
    </div>
  );
};

export default Banner;
