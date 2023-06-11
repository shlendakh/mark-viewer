import React from 'react';
import marked from 'marked';

class Previewer extends React.Component {
  getMarkdownText() {
    const rawMarkup = marked(this.props.value, {sanitize: true, breaks: true});
    return { __html: rawMarkup };
  }

  render() {
    return <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />;
  }
}

export default Previewer;