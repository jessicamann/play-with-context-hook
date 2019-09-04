import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import styled from 'styled-components';
import { FormStateProvider } from './state';
import MyInput from './MyInput';
import SpySpan from './SpySpan';

const Row = styled.div`
  display: flex;
  flex-direction: row;

  span,
  input {
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 30px;
  }
`;

const aBigList = Array(5)
  .fill(null)
  .map((_item, idx) => ({
    id: `id${idx}`,
    name: `Thing #${idx}`,
  }));

export const initialState = aBigList.reduce((valueObject, item) => {
  valueObject[item.id] = {
    ...item,
    pristine: true,
    valid: true,
  };
  return valueObject;
}, {});

function App() {
  return (
    <FormStateProvider initialState={initialState}>
      {Object.entries(initialState || {}).map(([key, value]) => {
        return (
          <Row key={key}>
            <span>{key}</span>
            <span>{value.name}</span>
            <SpySpan fieldToSpy={key} />
            <MyInput fieldName={key} />
          </Row>
        );
      })}
    </FormStateProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
