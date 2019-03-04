import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetch} from 'whatwg-fetch';


const mapDispatchToProps = dispatch => ({
    
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class TopologySaver extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);

;
  }

      handleClick()
    {
        fetch('api/updatetopology', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             topology: this.props.topologyReducer
            })
})
    }
      // handleSubmit(e) {
      //   console.log('here first')
      //   e.preventDefault();
      //   console.log('here i am')
      //   console.log(this.props.topologyReducer.nodeLength+1)
      //   console.log(this.refs.imageType.value)
      //   this.props.createServerNode(1, this.props.topologyReducer.nodeLength+1, this.refs.imageType.value);
      // }
  
    render() {
      return (
          <div>
          <button onClick={this.handleClick}>Add a Router</button>
        </div>
        );
    }
    
}

  export default connect(mapStateToProps, mapDispatchToProps)(TopologySaver);