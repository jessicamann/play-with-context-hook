export const reducer = (state, action) => {
  switch (action.type) {
    case actions.UpdatePrice:
      // const bigList = state.bigList.map(item =>
      //   item.id === action.id
      //     ? {
      //         ...item,
      //         price: action.price,
      //         pristine: action.price ? false : true,
      //         valid:
      //           !action.price || Number.isInteger(parseFloat(action.price)),
      //       }
      //     : item
      // );
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

const aBigList = Array(3)
  .fill(null)
  .map((_item, idx) => ({
    id: `id${idx}`,
    name: `Thing #${idx}`,
  }));

// export const initialState = {
//   bigList: aBigList.map(thing => ({
//     pristine: true,
//     valid: true,
//     ...thing,
//   })),
// };

export const initialState = aBigList.reduce((valueObject, item) => {
  valueObject[item.id] = {
    ...item,
    pristine: true,
    valid: true,
  };
  return valueObject;
}, {});
