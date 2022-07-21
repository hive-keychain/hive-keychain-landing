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
      <div className="content" style={{ height: 300, backgroundColor: "grey" }}>
        <ReactMarkdown>
          Irure dolor commodo pariatur cupidatat cillum labore.Veniam cillum
          ipsum qui magna est. Adipisicing esse ut ipsum irure officia ut mollit
          aliqua ea sit culpa consectetur amet. Aliqua cupidatat occaecat eu
          deserunt aute do cupidatat. Ex non voluptate et fugiat ex est est enim
          excepteur occaecat sint. Enim consequat esse commodo adipisicing qui.
          Enim ut sint minim laborum tempor exercitation sint tempor. Dolore
          consequat sint ad nulla in in ex id aliqua eiusmod excepteur magna
          proident. Voluptate qui commodo nisi aliquip ex pariatur pariatur
          adipisicing veniam culpa proident labore. Incididunt culpa aliquip
          consectetur aliquip ex voluptate eu culpa eu irure occaecat. Occaecat
          irure pariatur mollit amet Lorem laborum commodo aute nulla. {""}
        </ReactMarkdown>
      </div>
    ) : null;
  }
}

export default Terms;
