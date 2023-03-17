import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [userInputs, setUserInputs] = useState({});

  return (
    <StateContext.Provider value={{ userInputs, setUserInputs }}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  return useContext(StateContext);
}
