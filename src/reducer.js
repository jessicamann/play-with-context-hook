export const reducer = (state, action) => {
  switch (action.type) {
    case actions.UpdatePrice:
      const bigList = state.bigList.map(item =>
        item.id === action.id
          ? {
              ...item,
              price: action.price,
              pristine: action.price ? false : true,
              valid:
                !action.price || Number.isInteger(parseFloat(action.price)),
            }
          : item
      );
      return { ...state, bigList };
    default:
      return state;
  }
};

export const actions = {
  UpdatePrice: 'update price',
};

const aBigList = Array(2000)
  .fill(null)
  .map((_item, idx) => ({
    id: `id${idx}`,
    name: `Thing #${idx}`,
  }));

export const initialState = {
  bigList: aBigList.map(thing => ({
    pristine: true,
    valid: true,
    ...thing,
  })),
};
