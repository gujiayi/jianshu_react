import {combineReducers} from 'redux-immutable';
import  {reducer as headerReducer} from '../common/header/store';
import {reducer as swiperReducer} from '../common/swiper/store';
import {reducer as homeReducer } from '../page/home/store'
const reducer=combineReducers({
    header:headerReducer,
    swiper:swiperReducer,
    home:homeReducer,
});
export default reducer;
