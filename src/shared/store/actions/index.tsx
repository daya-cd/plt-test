import {ActionType} from '../action-types';
import {IProduct} from '../types';

interface AddProduct {
  type: ActionType.ADD_PRODUCT;
  product: IProduct;
}

interface RemoveProduct {
  type: ActionType.REMOVE_PRODUCT;
  product: IProduct;
}

export type Action = AddProduct | RemoveProduct;
