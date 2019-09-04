import React, { useMemo } from 'react';
import { useAppState } from '../state';

export default function SpySpan({ fieldToSpy: id }) {
  const [appContextValue] = useAppState();
  const spiedItem = appContextValue[id];

  return useMemo(() => {
    return <span>Pristine? {spiedItem.pristine ? 'Yes' : 'No'}</span>;
  }, [spiedItem]);
}
