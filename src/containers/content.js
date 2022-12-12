import { Grid } from "@material-ui/core";
import Parser from "html-react-parser";
import React from "react";
import { connect } from "react-redux";
import CustomCarousel from "../components/carousel/customCarousel";
import MemberPanel from "../components/memberPanel";
import * as Data from "../jsons/data.json";
import * as Formatter from "../utils/formatter";
import "./content.css";
import CarouselSection from "./sections/carouselSection";
import Section from "./sections/section";

// const styleFeatureItem = {
//   backgroundColor: "rgba(33, 73, 108, 0.8)",
//   background: Const.BACKGROUND_FEATURE_COLOR_OPACITY,
//   zIndex: 1,
//   padding: "1.5rem",
//   borderRadius: "33px",
//   marginTop: "1.5rem",
//   fontFamily: "Roboto, sans-serif",
//   color: "white",
// };

const width = window.innerWidth;

const styleIconBrowser = {
  height: width > 600 ? "70px" : "50px",
  marginBottom: width > 600 ? "1rem" : "0.2rem",
};

const styleContactUsText = {
  color: "white",
  fontSize: 18,
};

const Content = ({ activeFeature }) => (
  <div>
    {/* create section why steemplus */}
    <Section
      title={Data.whySteemPlus.sectionTitle}
      tag={Formatter.tagFromTitle(Data.whySteemPlus.sectionTitle)}
      background="transparent url('img/bg_grey.png') 50% 50%"
    >
      <div style={{ width: width > 600 ? "50%" : "100%", margin: 0 }}>
        {Data.whySteemPlus.data.map((why, i) => (
          <p
            style={{
              font: "normal normal normal 22px",
              color: "white",
              textAlign: "left",
            }}
          >
            {why}
          </p>
        ))}
      </div>
      <div>
        <img src="img/why_hive.svg" alt="hive" />
      </div>
    </Section>
    {/* create feature section */}
    {/* <ImageSection
      title={Data.features.sectionTitle}
      tag={Formatter.tagFromTitle(Data.features.sectionTitle)}
      src={"bg_features.png"}
      justify={"flex-start"}
    >
      <CustomCarousel
        autoPlay={true}
        background={Const.BACKGROUND_FEATURE_COLOR}
        selectedItem={activeFeature}
        nbElem={1}
        sizeElement={6}
      >
        {Data.features.data.map((feature, i) => (
          <div
            key={i}
            className="my-slide secondary complex"
            style={styleFeatureItem}
          >
            <h2>
              {feature.title}
              {feature.platforms.map((p, i) => (
                <img
                  key={i}
                  src={`img/platforms/${p}`}
                  alt={p}
                  style={styleIconPlatform}
                />
              ))}
            </h2>
            <h3>{feature.content}</h3>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={feature.url}
              style={{ textDecoration: "none" }}
            >
              <CustomButton
                text="Read Article"
                color1={Const.TITLE_COLOR}
                color2="white"
              />
            </a>
          </div>
        ))}
      </CustomCarousel>
    </ImageSection> */}
    {/* create where section */}
    <Section
      title={Data.where.sectionTitle}
      tag={Formatter.tagFromTitle(Data.where.sectionTitle)}
      background="black"
    >
      <div className="browsers-container">
        {Data.where.browsers.map((browser, i) => (
          <div className="browser" key={i}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className="browser-item"
            >
              <div>
                <a href={browser.url} target="_blank" rel="noreferrer">
                  <img
                    src={`img/browsers/${browser.icon}.svg`}
                    alt={browser.name}
                    style={styleIconBrowser}
                  />
                </a>
                {browser.name && (
                  <div
                    style={{
                      color: "#B5B5B5",
                      fontSize: 20,
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
                  >
                    {browser.name}
                  </div>
                )}
              </div>
            </Grid>
          </div>
        ))}
      </div>
    </Section>
    {/* create screenshots section */}
    <CarouselSection
      title={Data.screenshots.sectionTitle}
      tag={Formatter.tagFromTitle(Data.screenshots.sectionTitle)}
      style={{ background: "linear-gradient(0.125turn,#17181c, #2d3337)" }}
    >
      <CustomCarousel autoPlay={true} nbElem={3} sizeElement={12}>
        <div>
          <img
            height={width > 600 ? 600 : 400}
            src="img/screenshots/1.png"
            alt="Intro"
          />
        </div>
        <div>
          <img
            height={width > 600 ? 600 : 400}
            src="img/screenshots/2.png"
            alt="Intro"
          />
        </div>
        <div>
          <img
            height={width > 600 ? 600 : 400}
            src="img/screenshots/3.png"
            alt="Intro"
          />
        </div>
        <div>
          <img
            height={width > 600 ? 600 : 400}
            src="img/screenshots/4.png"
            alt="Intro"
          />
        </div>
        <div>
          <img
            height={width > 600 ? 600 : 400}
            src="img/screenshots/5.png"
            alt="Intro"
          />
        </div>
        <div>
          <img
            height={width > 600 ? 600 : 400}
            src="img/screenshots/6.png"
            alt="Intro"
          />
        </div>
        <div>
          <img
            height={width > 600 ? 600 : 400}
            src="img/screenshots/7.png"
            alt="Intro"
          />
        </div>
        <div>
          <img
            height={width > 600 ? 600 : 400}
            src="img/screenshots/8.png"
            alt="Intro"
          />
        </div>
      </CustomCarousel>
    </CarouselSection>
    {/* create review section */}
    {/* <CarouselSection
      title={Data.reviews.sectionTitle}
      tag={Formatter.tagFromTitle(Data.reviews.sectionTitle)}
    >
      <CustomCarousel
        className="reviews"
        autoPlay={true}
        nbElem={3}
        sizeElement={12}
      >
        {Arrays.shuffle(Data.reviews.data).map((review, i) => (
          <ReviewPanel
            review={Parser(review.review)}
            username={review.username}
            key={i}
          />
        ))}
      </CustomCarousel>
    </CarouselSection> */}
    {/* create members section */}
    <Section
      title={Data.members.sectionTitle}
      tag={Formatter.tagFromTitle(Data.members.sectionTitle)}
      style={{ background: "black" }}
    >
      {Data.members.data.map((members, i) => (
        <MemberPanel
          name={members.name}
          position={members.position}
          username={members.username}
          key={i}
        />
      ))}
    </Section>
    <Section
      title={Data.contactUs.sectionTitle}
      tag={Formatter.tagFromTitle(Data.contactUs.sectionTitle)}
      background="transparent url('img/bg_grey.png') 50% 50%"
      padding="2rem"
      direction="column"
      marginBottom="0"
    >
      <p style={styleContactUsText}>
        {Parser(Data.contactUs.data.description)}
      </p>
      <p style={styleContactUsText}>Join our Discord!</p>
      <a href="https://discord.gg/3EM6YfRrGv">
        <img
          alt="discord"
          src="img/discord.png"
          style={{ height: 100, cursor: "pointer" }}
        />
      </a>
      <p style={styleContactUsText}>
        Or contact us at{" "}
        <a
          style={{ color: "white", fontWeight: "bold" }}
          href="mailto:contact@hive-keychain.com"
        >
          contact@hive-keychain.com
        </a>
      </p>
    </Section>
  </div>
);

// Setup redux

const mapStateToProps = (state) => {
  return {
    activeFeature: state.nav.activeFeature,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
