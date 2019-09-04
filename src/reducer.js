export const reducer = (state, action) => {
  switch (action.type) {
    case actions.UpdatePrice:
      state[action.id] = {
        ...state[action.id],
        price: action.price,
        pristine: action.price ? false : true,
        valid: !action.price || Number.isInteger(parseFloat(action.price)),
      };
      return { ...state };
    default:
      return state;
  }
};

export const actions = {
  UpdatePrice: 'update price',
};
