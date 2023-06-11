import React from 'react';

class Editor extends React.Component {
  render() {
    return (
      <textarea id="editor" value={this.props.value} onChange={this.props.onChange} />
    );
  }
}

export default Editor;