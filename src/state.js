import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';

export const FormContext = createContext();

export const FormStateProvider = ({ initialState, children }) => (
  <FormContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </FormContext.Provider>
);

export const useAppState = () => useContext(FormContext);
