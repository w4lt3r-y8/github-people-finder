import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  //initialState
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msgParam, typeParam) => {
    dispatch({
      type: SET_ALERT,
      payload: { message: msgParam, StyleType: typeParam },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert_InAlerState_value: setAlert,
      }}
    >
      {props.children} {/* Wrap our entire application in this provider. */}
      {/* {console.log(props.children)} */}
    </AlertContext.Provider>
  );
};

export default AlertState;
