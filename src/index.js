import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import styled from "styled-components";
import { actions, initialState } from "./reducer";
import { AppStateProvider, useAppState } from "./the_state";

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
      {initialState.bigList.map((thing, index) => {
        console.log("rendering row ", index);
        return (
          <Row key={thing.id}>
            <span>{thing.id}</span>
            <span>{thing.name}</span>
            <SpySpan id={thing.id} />
            <CustomInput id={thing.id} />
          </Row>
        );
      })}
    </AppStateProvider>
  );
}

function SpySpan({ id }) {
  const [{ bigList }] = useAppState();
  const spiedItem = bigList.find(item => item.id === id);
  console.log("rendering spied span ", id); // optimize!
  return <span>{spiedItem.pristine ? "Yes" : "No"}</span>;
}

function CustomInput({ id }) {
  const [{ bigList }, dispatch] = useAppState();
  const item = bigList.find(thing => thing.id === id);

  console.log("rendering custom input ", id); // optimize!
  return (
    <input
      type="number"
      value={item.price}
      style={{ borderColor: item.valid ? "" : "red" }}
      onChange={event =>
        dispatch({
          type: actions.UpdatePrice,
          id: item.id,
          price: event.target.value
        })
      }
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
