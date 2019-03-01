import {SIMPLE_ACTION, CREATE_NODE} from './constants'

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
    })
   };

