import {SIMPLE_ACTION, CREATE_NODE, CREATE_EDGE} from './constants'

export const simpleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
   };

   export const createNode = (nodeType) => dispatch => {
    dispatch({
     type: 'CREATE_NODE',
     nodeType,
    })
   };

   export const createEdge = (fromNode, toNode) => dispatch => {
    dispatch({
     type: 'CREATE_EDGE',
     toNode,
     fromNode,
    //  nodeLength: state.nodeLength++,
    })
   };

