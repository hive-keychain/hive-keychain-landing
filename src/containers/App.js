import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Banner from "../components/banner";
import "../css/containers/App.css";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Fees from "./sections/fees";
import Privacy from "./sections/privacy";
import Terms from "./sections/terms";
// Create app component
class App extends Component {
  // Render component
  render() {
    // Display app
    return (
      <div
        className="App"
        style={{ display: "flex", flex: 1, flexDirection: "column" }}
      >
        <Banner />
        <Header />
        <Routes>
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="fees" element={<Fees />} />
          <Route path="/" element={<Content />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.nav.page,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
