import { combineReducers } from 'redux'
import productReducers from './productReducers';
import cartReducers from './cartReducers';

const reducers = combineReducers({
    productReducers,
    cartReducers
})
export default reducers