import {ShoppingCartState} from '../types';
import {Action} from '../actions';
import {ActionType} from '../action-types';

const initialState = {
  items: [],
};
const reducer = (
  state: ShoppingCartState = initialState,
  action: Action,
): ShoppingCartState => {
  const {items} = state;
  const {product, type} = action;
  switch (type) {
    case ActionType.ADD_PRODUCT:
      const isItemInCart = items.find(item => item.id === product.id);
      if (isItemInCart) {
        return state;
      }
      const newItems = items.concat([product]);
      return {
        ...state,
        items: newItems,
      };

    case ActionType.REMOVE_PRODUCT:
      const findItem = items.find(item => item.id === product.id);
      const filteredItems = items.filter(item => item !== findItem);
      return {
        ...state,
        items: filteredItems,
      };
    default:
      return state;
  }
};

export default reducer;
