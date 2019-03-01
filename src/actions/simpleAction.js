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
     nodeType: nodeType,
    //  nodeLength: state.nodeLength++,
    })
   };

   export const createEdge = (from, to) => dispatch => {
    dispatch({
     type: 'CREATE_EDGE',
     fromNode: from,
     toNode: to,
    //  nodeLength: state.nodeLength++,
    })
   };

