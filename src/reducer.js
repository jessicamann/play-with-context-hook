export const reducer = (state, action) => {
  switch (action.type) {
    case actions.UpdatePrice:
      state[action.id] = {
        ...state[action.id],
        price: action.price,
        pristine: action.price ? false : true,
        valid: !action.price || Number.isInteger(parseFloat(action.price)),
      };
      console.log('updating state', state);
      return { ...state };
    default:
      return state;
  }
};

export const actions = {
  UpdatePrice: 'update price',
};

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
