import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/containers/App.css";
import Content from "./content";
import Banner from "../components/banner";

import { connect } from "react-redux";

// Create app component
class App extends Component {
  // Render component
  render() {
    // Content depend on page
    let content = null;
    switch (this.props.page) {
      case "main":
        content = <Content />;
        break;

      default:
        content = <Content />;
    }
    // Display app
    return (
      <div className="App">
        <Banner />
        <Header />
        {content}
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
