/* eslint no-console:0, react/no-multi-comp:0, react/prop-types: 0 */

import Animate from 'rc-animate';
import React from 'react';
import ReactDOM from 'react-dom';

import './assets/slow.less';

const Box = props => {
  console.log('render', props.visible);
  const style = {
    display: props.visible ? 'block' : 'none',
    marginTop: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: 'red',
  };
  return (<div style={style}/>);
};

class Demo extends React.Component {
  state = {
    visible: true,
  }

  onAppear = (key) => {
    console.log('appear', key);
  }

  onEnter = (key) => {
    console.log('enter', key);
  }

  onLeave = (key) => {
    console.log('leave', key);
  }

  toggleAnimate = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleAnimate}>toggle</button>
        <Animate
          component=""
          showProp="visible"
          onAppear={this.onAppear}
          onEnter={this.onEnter}
          onLeave={this.onLeave}
          transitionAppear
          transitionName="fade"
        >
          <Box visible={this.state.visible}/>
        </Animate>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
