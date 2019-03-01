

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
// nodeLength: 4,
// data on the current battle
edges: [
  {
      id:1,
      fromNode: 1,
      toNode: 2,
  }
]
};

export default (state = InitialState, action) => {
    switch (action.type) {
     case 'CREATE_NODE':
     var newNode = {
      id:5,
      nodeType: "server"}
      return {
        ...state,
        nodes: [...state.nodes, newNode],

        // nodeLength: ...state.nodeLength++,
        }
      case 'CREATE_EDGE':
     var newEdge = {
      id:2,
      fromNode: 2,
      toNode: 4,
     }
      return {
        ...state,
        edges: [...state.edges, newEdge],
        }
      
     default:
      return state
    }
   }