import {IProduct} from '../../interfaces/product';
import {Dispatch} from 'redux';
import {Action} from '../actions';
import {ActionType} from '../action-types';

export const addProduct = (product: IProduct) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_PRODUCT,
      product: product,
    });
  };
};

export const removeProduct = (product: IProduct) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_PRODUCT,
      product: product,
    });
  };
};
