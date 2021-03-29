import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Grid, Button, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

// Define inline style for the buttons
const buttonStyle = {
  root: {
    background: "#0000006b",
    border: "none",
    boxShadow: "none",
    color: "lightgrey",
    "&:hover": {
      background: "lightgrey",
      color: "white"
    }
  }
};
const ArrowButton = withStyles(buttonStyle)(Button);

// Create component custom carousel
class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    // Gert props
    // Nb elements on the row
    this.nbElem = props.nbElem;
    this.autoPlay = props.autoPlay;
    this.selectedItem = props.selectedItem;
    // Sixe of the carousel
    this.sizeElement = props.sizeElement;
    // Init local state
    this.state = { selectedFeature: props.selectedItem };
  }

  // When component is updated
  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem)
      this.setState({ selectedFeature: this.props.selectedItem });
  }

  // Render component
  render() {
    return (
      <Grid item xs={12} sm={10} md={8} lg={this.sizeElement}>
        <Grid container direction="row" justify="center" alignItems="center">
          {/* If screen is too small, hide prev button */}
          <Hidden only="xs">
            <Grid key={`prev`} sm={1} item>
              <ArrowButton
                variant="fab"
                aria-label="Prev"
                onClick={() => this.Carousel._slidePrev()}
              >
                <KeyboardArrowLeft />
              </ArrowButton>
            </Grid>
          </Hidden>

          <Grid key={`car`} xs={12} md={8} item>
            {/* Create carousel */}
            <AliceCarousel
              dotsDisabled={true}
              autoPlay={this.autoPlay}
              stopAutoPlayOnHover={true}
              duration={500}
              infinite={true}
              autoPlayInterval={5000}
              startIndex={this.state.selectedFeature}
              // Nb items displayed also depend on the size of the screen
              responsive={{
                0: {
                  items: 1
                },
                600: {
                  items: this.nbElem - 1
                },
                1024: {
                  items: this.nbElem
                }
              }}
              buttonsDisabled={true}
              ref={el => (this.Carousel = el)}
            >
              {this.props.children}
            </AliceCarousel>
          </Grid>
          {/* If screen too small, hide next button */}
          <Hidden only="xs">
            <Grid key={`next`} sm={1} item>
              <ArrowButton
                variant="fab"
                aria-label="Next"
                onClick={() => this.Carousel._slideNext()}
              >
                <KeyboardArrowRight />
              </ArrowButton>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    );
  }
}

export default CustomCarousel;
