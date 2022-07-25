import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Terms extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: null };
  }

  componentWillMount() {
    fetch("/TOS.md")
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({ terms: text });
      });
  }

  render() {
    return this.state.terms ? (
      <div
        className="content"
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div className="markdown">
          <ReactMarkdown transformLinkUri={null}>
            {this.state.terms}
          </ReactMarkdown>
        </div>
      </div>
    ) : null;
  }
}

export default Terms;
