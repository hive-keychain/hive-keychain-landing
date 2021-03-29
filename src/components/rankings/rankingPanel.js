import React from "react";
import { Grid } from "@material-ui/core/";

import RankingTopUser from "./rankingTopUser";
import FullRanking from "./fullRanking";
import Countdown from "react-countdown-now";
import * as Const from "../../utils/const";

const styleCountdown = {
  color: Const.COLOR_COUNTDOWN_RANKING,
  fontSize: "1.5rem",
  marginBottom: "1.5rem",
  marginTop: "-1rem"
};

// Function used to create the top 3 users for each category
const getTop = (arrayItems, unit, keyUsername, keyValue) => {
  let top = [];
  for (let i = 0; i < 3; i++) {
    if (arrayItems[i] !== undefined) {
      const elem = (
        <RankingTopUser
          position={i + 1}
          username={arrayItems[i][keyUsername]}
          nbPoints={arrayItems[i][keyValue]}
          key={`top-${i + 1}`}
          unit={unit}
        />
      );
      top.push(elem);
    } else {
      const elem = (
        <RankingTopUser
          position={i + 1}
          username={"steem-plus"}
          nbPoints={"0"}
          key={`top-${i + 1}`}
          unit={unit}
        />
      );
      top.push(elem);
    }
  }
  return top;
};

// Function used to render the countdown until the end of the current week
const renderer = ({ days, hours, minutes, seconds }) => {
  let daysLabel, hoursLabel, minutesLabel, secondesLabel;
  if (days > 1) daysLabel = `${days} days `;
  else if (days === 1) daysLabel = `${days} day `;
  else daysLabel = "";

  if (hours > 1) hoursLabel = `${hours} hours `;
  else if (hours === 1) daysLabel = `${days} hours `;
  else hoursLabel = "0 hours ";

  if (minutes > 1) minutesLabel = `${minutes} minutes `;
  else if (minutes === 1) daysLabel = `${days} minute `;
  else minutesLabel = "0 minute ";

  if (seconds > 1) secondesLabel = `${seconds} seconds `;
  else if (seconds === 1) daysLabel = `${days} second `;
  else secondesLabel = "0 second ";
  return (
    <p style={styleCountdown}>
      {`Weekly ranking expires in ${daysLabel}${hoursLabel}${minutesLabel}${secondesLabel}`}
    </p>
  );
};

/**
 * @param data : Data to display
 * @param unit : could be SP or SPP
 * @param keyUsername : key for the username in data
 * @param keyValue : key for the number of points in data
 * @param endDate : date for the end of the week. Can be undefined
 */
const RankingPanel = ({ data, unit, keyUsername, keyValue, endDate }) => (
  <Grid container direction="column" justify="center" alignItems="center">
    {endDate !== undefined && (
      <Grid container direction="row" justify="center" alignItems="center">
        <Countdown date={new Date(endDate)} renderer={renderer} />
      </Grid>
    )}
    <Grid container direction="row" justify="center" alignItems="center">
      {getTop(data, unit, keyUsername, keyValue)}
    </Grid>
    <Grid container direction="row" justify="center" alignItems="center">
      <FullRanking
        data={data}
        unit={unit}
        keyUsername={keyUsername}
        keyValue={keyValue}
        isWeekly={endDate !== undefined}
      />
    </Grid>
  </Grid>
);

export default RankingPanel;
