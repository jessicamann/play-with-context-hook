import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import styled from 'styled-components';
import { actions, initialState } from './reducer';
import { AppStateProvider, useAppState, DumplingContext } from './state';

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

function App() {
  return (
    <AppStateProvider initialState={initialState}>
      {Object.entries(initialState || {}).map(([key, value]) => {
        console.log('rendering row ', key);
        return (
          <Row key={key}>
            <span>{key}</span>
            <span>{value.name}</span>
            <SpySpan id={key} />
            <CustomInput id={key} />
          </Row>
        );
      })}
    </AppStateProvider>
  );
}

function SpySpan({ id }) {
  const [appContextValue] = useAppState();
  const spiedItem = appContextValue[id];

  return useMemo(() => {
    console.log('re-rendering spied item', spiedItem.id);
    return <span>{spiedItem.pristine ? 'Yes' : 'No'}</span>;
  }, [spiedItem]);
}

function CustomInput({ id }) {
  const [appContextValue, dispatch] = useAppState();
  const item = appContextValue[id];

  return useMemo(() => {
    console.log('rendering custom input ', id); // optimize!
    return (
      <input
        type="number"
        // value={item.price}
        style={{ borderColor: item.valid ? '' : 'red' }}
        onChange={event =>
          dispatch({
            type: actions.UpdatePrice,
            id: item.id,
            price: event.target.value,
          })
        }
      />
    );
  }, [item]);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
