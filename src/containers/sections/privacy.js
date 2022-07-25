import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Privacy extends Component {
  constructor(props) {
    super(props);

    this.state = { privacy: null };
  }

  componentWillMount() {
    fetch("/PRIVACY.md")
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log("t", text);
        this.setState({ privacy: text });
      });
  }

  render() {
    return this.state.privacy ? (
      <div
        className="content"
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div className="markdown">
          <ReactMarkdown transformLinkUri={null}>
            {this.state.privacy}
          </ReactMarkdown>
        </div>
      </div>
    ) : null;
  }
}

export default Privacy;
