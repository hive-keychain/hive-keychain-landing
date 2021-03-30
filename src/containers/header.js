import React from "react";
import { Toolbar, Avatar, Grid } from "@material-ui/core/";
import NavbarButton from "../components/buttons/navbarButton";
import TitleApp from "../components/labels/titleApp";
import "../css/containers/header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as Data from "../jsons/data.json";
import * as SPPData from "../jsons/spp.json";
import * as RankingsData from "../jsons/rankings.json";
import * as Formatter from "../utils/formatter";
import * as Const from "../utils/const";
import { connect } from "react-redux";
import ResponsiveMenu from "react-responsive-navbar";
import { Dehaze } from "@material-ui/icons";

// Inline style for anchors
const anchorStyle = {
  textDecoration: "none",
  textTransform: "uppercase",
  color: "white",
  fontSize: "0.875rem",
  fontWeight: "500",
  fontFamily: "Roboto",
  padding: "0.25rem",
};

// Inline style for navbar
const styleNavBar = {
  zIndex: 1,
  background: "black",
  color: "white",
  position: "relative",
  width: "100%",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
};

// Inline style for sticky navbar
const styleNavBarSticky = {
  zIndex: 1,
  position: "fixed",
  top: 0,
  background: "black",
  width: "100%",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  boxShadow:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
};

// Function use to close menu on click
// This function is called on click on navItem
const closeMenu = () => {
  // Get element
  const closeMenuButton = document.getElementById("close-menu-button");
  // If it's open close it
  if (closeMenuButton !== null) closeMenuButton.click();
};

// Create Sub Menu for home. Only appears if Home page is selected
const getHomeSubMenu = (navItems, activePage, setSubMenu, activeSubElement) => {
  if (activePage === "main") {
    // Loop on navItems
    return Object.keys(navItems).map((section, i) => (
      <Grid
        style={{
          paddingLeft: 50,
          paddingTop: 15,
          paddingBottom: 15,
          fontWeight: "bold",
        }}
        item
        xs={12}
        sm={12}
        md={12}
        lg="auto"
        key={i}
      >
        <AnchorLink
          offset={() => 100}
          href={`#${Formatter.tagFromTitle(navItems[section].sectionTitle)}`}
          style={anchorStyle}
        >
          <NavbarButton
            color1="black"
            color2="white"
            text={navItems[section].sectionTitle}
            float="left"
            itemVisible={activePage === "main"}
            active={
              Formatter.tagFromTitle(navItems[section].sectionTitle) ===
              activeSubElement
            }
            onClick={() => {
              setSubMenu(
                `${Formatter.tagFromTitle(navItems[section].sectionTitle)}`
              );
              closeMenu();
            }}
          />
        </AnchorLink>
      </Grid>
    ));
  }
};

// Create component Header
class Header extends React.Component {
  constructor(props) {
    super(props);
    // Init props
    this.page = props.page;
    this.setPage = props.setPage;
    this.setSubMenu = props.setSubMenu;
    this.subMenu = props.subMenu;

    this.isMainPage = this.page === "main";
    // Get data from Jsons
    this.navItems = Data.default;
    this.sppNavItems = SPPData.default;
    this.rankingsNavItems = RankingsData.default;

    // Set initial local state
    this.state = {
      activePage: this.page,
      activeSubElement: this.subMenu,
      sticky: false,
    };
    // Bind handleScroll function
    this.handleScroll = this.handleScroll.bind(this);
  }

  // Function used to handle scroll and change selected item in navbar on scroll
  handleScroll() {
    let currentItems;
    // Set currentItems
    if (this.state.activePage === "main") currentItems = this.navItems;
    else if (this.state.activePage === "spp") currentItems = this.sppNavItems;
    else if (this.state.activePage === "rankings")
      currentItems = this.rankingsNavItems;

    // Get banner
    const banner = document.getElementById("banner");
    const sticky = parseInt(banner.style.height);

    // if offset of the window > banner's height set the banner sticky
    console.log(window.pageYOffset, sticky, banner);
    if (window.pageYOffset >= sticky) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }

    // Get the titles of every section on the current page
    let keys = Object.keys(currentItems).filter(
      (k) => currentItems[k].sectionTitle !== undefined
    );
    // Find the section that is the closest to the top of the page
    let minDiff = window.pageYOffset;
    let currentSection = "";
    for (let i = keys.length - 1; i >= 0; i--) {
      const htmlItem = document.getElementById(
        `${Formatter.tagFromTitle(currentItems[keys[i]].sectionTitle)}`
      );
      const offset = htmlItem.offsetTop;
      const diff = Math.abs(window.pageYOffset - offset);
      if (minDiff > diff) {
        minDiff = diff;
        currentSection = Formatter.tagFromTitle(
          currentItems[keys[i]].sectionTitle
        );
      }
    }
    // Set active section
    this.setState({
      activeSubElement: currentSection,
    });
  }

  // When component update
  componentDidUpdate(prevProps) {
    // If props don't change don't set the state
    if (prevProps.page !== this.props.page)
      this.setState({ activePage: this.props.page });
    if (prevProps.subMenu !== this.props.subMenu)
      this.setState({ activeSubElement: this.props.subMenu });
  }

  // When component is ready add Event Listener on scroll
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  //Render header
  render() {
    return (
      <div
        id="navbar"
        style={this.state.sticky ? styleNavBarSticky : styleNavBar}
      >
        <ResponsiveMenu
          menuOpenButton={
            <NavbarButton color1="black" color2="white" itemVisible>
              <Dehaze />
            </NavbarButton>
          }
          menuCloseButton={
            <NavbarButton
              id="close-menu-button"
              color1="white"
              color2="black"
              itemVisible
            >
              <Dehaze />
            </NavbarButton>
          }
          changeMenuOn="1024px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {getHomeSubMenu(
                this.navItems,
                this.state.activePage,
                this.setSubMenu,
                this.state.activeSubElement,
                this.closeMenuButton
              )}
            </Grid>
          }
        />
      </div>
    );
  }
}

// Setup redux global state
const mapStateToProps = (state) => ({
  page: state.nav.page,
  subMenu: state.nav.subMenu,
});
const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => {
    dispatch({
      type: "SET_PAGE",
      payload: page,
    });
  },
  setSubMenu: (subMenu) => {
    dispatch({
      type: "SET_SUB_MENU",
      payload: subMenu,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
