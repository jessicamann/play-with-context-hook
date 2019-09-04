import React, { useMemo } from 'react';
import { useAppState } from '../state';
import { actions } from '../reducer';

export default function MyInput({ fieldName: id }) {
  const [appContextValue, dispatch] = useAppState();
  const item = appContextValue[id];

  return useMemo(() => {
    return (
      <input
        type="number"
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
