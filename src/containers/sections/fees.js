import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Fees extends Component {
  constructor(props) {
    super(props);

    this.state = { fees: null };
  }

  componentWillMount() {
    fetch("/FEES.md")
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({ fees: text });
      });
  }

  render() {
    return this.state.fees ? (
      <div
        className="content"
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div className="markdown">
          <ReactMarkdown transformLinkUri={null}>
            {this.state.fees}
          </ReactMarkdown>
        </div>
      </div>
    ) : null;
  }
}

export default Fees;
