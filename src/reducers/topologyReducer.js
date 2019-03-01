

const InitialState = {
  nodes: [
  {
      id:1,
      nodeType: "server",
  },
  {
      id:2,
      nodeType: "server",
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
// data on the current battle
links: [
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
      id:1,
      nodeType: "server"}
      return {
        ...state,
        nodes: [...state.nodes, newNode],
        
       }
      
     default:
      return state
    }
   }