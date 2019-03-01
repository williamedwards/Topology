import React, { Component } from 'react';
import { Network, Node, Edge } from '@lifeomic/react-vis-network';
import { connect } from 'react-redux';
import store from './store';
import initialState from './initialstate';
import PropTypes from 'prop-types';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
    
  })
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    nodes: state.nodes,
    edges: state.edges,
    ...state
  })
  
  
  const CustomIcon = ({ icon, color = '#5596ed' }) => {
  const viewBox = 36;
  const iconSize = 20;
  const pad = (viewBox - iconSize) / 2;
  const center = viewBox / 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <g>
        <circle cx={center} cy={center} r={16} fill={color} />
        <g transform={`translate(${pad}, ${pad})`}>
          {React.createElement(icon, { color: 'white', size: iconSize })}
        </g>
      </g>
    </svg>
  );
};

var options = {
  "layout": {
      "hierarchical": {
          "direction": "UD",
          "sortMethod": "directed",
          "nodeSpacing": 200,
          "treeSpacing": 400
      }
  },
  "edges": {
      "smooth": {
          "type": "continuous"
      }
  }};
  // console.log(this.props.nodes)
  // console.log(this.props)
  // console.log(this.props.nodes)
class MyNetwork extends Component {
  constructor(props)  {
    
    super(props);
    }
    
    
    nodes(){
      
      const nodesItems = this.props.topologyReducer.nodes.map((node) =>
          <Node key= {node.index} id={node.id} label={node.nodeType}/>
      );
      console.log(this.edges())
      return (
          <>
              {nodesItems}
          </>
      );
  }

  edges(){
      
      const edgesItems = this.props.topologyReducer.edges.map((edge) =>
          <Edge key = {edge.index} id={edge.id} from={edge.fromNode}  to={edge.toNode}         />
      );
      // console.log(this.nodes().props.children,"nodes");
      console.log(React.version)
      return (
          <>
              {edgesItems}
          </>
      );
  }
  
    
  render() {
    return (
      <Network options={options}>
      {/* <Node id="vader" label="Darth Vader" />
        <Node id="luke" label="Luke Skywalker" />
        <Node id="leia" label="Leia Organa" /> */}
        {/* <Edge id="1" from="vader" to="luke" />
        <Edge id="2" from="vader" to="leia" /> */}
        {/* (
  <>
    {stations.map(station => (
      <div className="station" key={station.call}>{station.call}</div>
    ))}
  </>
);  */}
         {this.nodes().props.children}
         {this.edges().props.children}
      </Network>
    );
  }
}

console.log("we made it this far")
export default connect(mapStateToProps, mapDispatchToProps)(MyNetwork);