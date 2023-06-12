import React from 'react';
import './Editor.scss'

class Editor extends React.Component {
  render() {
    return (
      <textarea id="editor" className="editor" value={this.props.value} onChange={this.props.onChange} />
    );
  }
}

export default Editor;