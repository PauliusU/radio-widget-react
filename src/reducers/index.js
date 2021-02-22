import {combineReducers} from 'redux';
import stationReducer from './station';

const allReducers = combineReducers({
  station: stationReducer,
});

export default allReducers;
