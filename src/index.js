import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

// Font loader
WebFont.load({
  google: {
    families: ["Roboto:300", "Montserrat"]
  }
});

// Create reducer for redux
const navReducer = (
  state = {
    page: "main",
    activeFeature: 0,
    subMenu: "why-steemplus-?"
  },
  action
) => {
  switch (action.type) {
    case "SET_PAGE":
      state = {
        ...state,
        page: action.payload
      };
      break;
    case "SET_ACTIVE_FEATURE":
      state = {
        ...state,
        activeFeature: action.payload
      };
      break;
    case "SET_SUB_MENU":
      state = {
        ...state,
        subMenu: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

// Create store for redux
const store = createStore(
  combineReducers({ nav: navReducer }),
  {},
  applyMiddleware(logger)
);

// Render App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
