import React, { useReducer, createContext } from 'react';

import quizData from 'Data/quiz';
import { SET_TOPICS } from './types';

export const AppContext = createContext();

const initialState = {
  topics: []
};

const reducer = (state, action) => {
  function compare( a, b ) {
    if ( a.tool_name < b.tool_name ) return -1;
    if ( a.tool_name > b.tool_name ) return 1;
    return 0;
  }

  switch (action.type) {
    case SET_TOPICS:
      return {
        ...state,
        topics: action.payload
                      .sort(compare),
      };
    default:
      return { ...state };
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
