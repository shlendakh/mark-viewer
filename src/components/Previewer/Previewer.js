import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './Previewer.scss'

class Previewer extends React.Component {
  getMarkdownText() {
    let rawMarkup = marked(this.props.value, {breaks: true});
    let sanitizedHTML = DOMPurify.sanitize(rawMarkup);
    return { __html: sanitizedHTML };
  }

  render() {
    return <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />;
  }
}

export default Previewer;