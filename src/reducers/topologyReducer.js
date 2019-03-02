

const InitialState = {
  nodes: [
  {
      id:1,
      nodeType: "server",
  },
  {
      id:2,
      nodeType: "router",
  },
  {
      id: 3,
      nodeType: "server",
  },
  {
      id: 4,
      nodeType: "server",
  }
],
   nodeLength: 4,
// data on the current battle
edges: [
  {
      id:1,
      fromNode: 1,
      toNode: 2,
  }
],
  edgeLength: 1,
};

export default (state = InitialState, action) => {
    switch (action.type) {
     case 'CREATE_NODE':
     var newNode = {
      id:state.nodeLength+1,
      nodeType: "server",
      
    }
      return {
        ...state,
        nodes: [...state.nodes, newNode],
        nodeLength: state.nodeLength+1,
        // nodeLength: ...state.nodeLength++,
        }
      case 'CREATE_EDGE':
     var newEdge = {
      id: state.edgeLength + 1,
      fromNode: action.fromNode,
      toNode: action.toNode,
      
     }
     console.log(action.toNode, 'toNode')
     console.log(action.fromNode)
      return {
        ...state,
        edges: [...state.edges, newEdge],
        edgeLength: state.edgeLength+1,
        }
      
     default:
      return state
    }
   }