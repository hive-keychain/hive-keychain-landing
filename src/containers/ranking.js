import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import * as Formatter from "../utils/formatter";
import Section from "../containers/sections/section";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as Const from "../utils/const";
import RankingPanel from "../components/rankings/rankingPanel";

import * as RankingsData from "../jsons/rankings.json";

// Inline style for circular progressbar
const styleCircularProgress = {
  root: {
    color: Const.COLOR_STATS
  }
};

// Create custom progressbar. Need to use withStyles because progressbar is a Material-UI component.
const CustomCircularProgress = withStyles(styleCircularProgress)(
  CircularProgress
);

// Create Ranking component
class Ranking extends Component {
  // Constructor
  constructor() {
    super();

    // Create local state
    this.state = {
      forever: [],
      monthly: [],
      weekly: [],
      delegations: [],
      endDate: undefined
    };
  }

  // Function executed when component is ready
  componentDidMount() {
    // Download ranking informatio
    fetch("https://api.steemplus.app/rankings", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
        mode: "cors"
      }
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        // Set state
        this.setState(data);
      });
  }
  // Render component
  render() {
    return (
      <div className="Ranking">
        <Section
          title={RankingsData.weekly.sectionTitle}
          tag={Formatter.tagFromTitle(RankingsData.weekly.sectionTitle)}
          marginBottom="0px"
        >
          {this.state.weekly.length === 0 ? (
            <CustomCircularProgress />
          ) : (
            <RankingPanel
              data={this.state.weekly}
              unit="SPP"
              keyUsername="name"
              keyValue="points"
              endDate={this.state.endDate}
            />
          )}
        </Section>
        <Section
          title={RankingsData.monthly.sectionTitle}
          tag={Formatter.tagFromTitle(RankingsData.monthly.sectionTitle)}
          marginBottom="0px"
        >
          {this.state.monthly.length === 0 ? (
            <CustomCircularProgress />
          ) : (
            <RankingPanel
              data={this.state.monthly}
              unit="SPP"
              keyUsername="name"
              keyValue="points"
            />
          )}
        </Section>
        <Section
          title={RankingsData.forever.sectionTitle}
          tag={Formatter.tagFromTitle(RankingsData.forever.sectionTitle)}
          marginBottom="0px"
        >
          {this.state.forever.length === 0 ? (
            <CustomCircularProgress />
          ) : (
            <RankingPanel
              data={this.state.forever}
              unit="SPP"
              keyUsername="name"
              keyValue="points"
            />
          )}
        </Section>
        <Section
          title={RankingsData.delegations.sectionTitle}
          tag={Formatter.tagFromTitle(RankingsData.delegations.sectionTitle)}
          marginBottom="0px"
        >
          {this.state.delegations.length === 0 ? (
            <CustomCircularProgress />
          ) : (
            <RankingPanel
              data={this.state.delegations}
              unit="SP"
              keyUsername="delegator"
              keyValue="sp"
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Ranking;
