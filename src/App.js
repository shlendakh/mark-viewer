import React from 'react';
import { connect } from 'react-redux';
import { updateMarkdown } from './redux/actions';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Editor value={this.props.markdown} onChange={this.props.updateMarkdown} />
        <Previewer value={this.props.markdown} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    markdown: state.markdown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateMarkdown: (e) => dispatch(updateMarkdown(e.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);