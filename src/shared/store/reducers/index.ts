import {combineReducers} from 'redux';
import cardReducer from './cardReducer';

const reducers = combineReducers({
  shop: cardReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
