import React, { useReducer } from "react";
export const AppContext = React.createContext();

export const FeatureProvider = ({ children }) => {
  const initial_state = {
    classes: [],
    teachers: [],
  };
  const [state, dispatch] = useReducer(userReducer, initial_state);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
