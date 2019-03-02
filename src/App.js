import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction, createNode, createEdge } from './actions/simpleAction';
import TopologyFullView from './TopologyFullView';
import EdgeForm from './EdgeForm';
import MyNetwork from './MyNetwork';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  createNode: (nodeType) => dispatch(createNode(nodeType)),
  createEdge: (fromNode, toNode) => dispatch(createEdge(fromNode, toNode)),
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }
  createNode = (event) => {
    this.props.createNode();
  }
  createEdge = (event) => {
    this.props.createEdge();
  }
 render() {
  return (
   <div className="Topology">
    <MyNetwork/>
    <TopologyFullView/>
    <EdgeForm/>
    <button onClick={this.createNode}>Test adding a Node action</button>
    <button onClick={this.createEdge}>Test adding a Edge action</button>
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
    <pre>
      {
        JSON.stringify(this.props)
      }
      </pre>
    <button onClick={this.simpleAction}>Test redux action</button>
   
    
    
    </p>
   </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);