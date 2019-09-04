import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const DumplingContext = createContext();

export const AppStateProvider = ({ initialState, children }) => (
  <DumplingContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DumplingContext.Provider>
);

export const useAppState = () => useContext(DumplingContext);
