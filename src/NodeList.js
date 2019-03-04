import React, { Component } from 'react';
import { connect } from 'react-redux';
import NodeDescription from './NodeDescription';

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
    
class NodeList extends Component {
  constructor(props)  {
    
    super(props);

    this.state = {
      nodes: this.props.topologyReducer.nodes,
      edges: this.props.topologyReducer.edges,
    }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        nodes : nextProps.topologyReducer.nodes,
        edges: nextProps.topologyReducer.edges
    });
  }
    
    nodes(){
      
        const nodesItems = this.state.nodes.slice(1).map((node) =>
            <NodeDescription key= {node.id} id={node.id} nodeType={node.nodeType} imageType={node.imageType}/>
        );
        
        return (
            <>
                {nodesItems}
            </>
        );
    }

  
  
    
  render() {
     
    return (
     
        this.nodes().props.children
         
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeList);