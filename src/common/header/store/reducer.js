import {fromJS} from 'immutable';
import * as  constants from  './constant';
const defaultStatus=fromJS({
    isfoucs:false,
    mouseIn:false,
    list:[]
});

export default(state=defaultStatus,action)=>{
    switch(action.type){
        case constants.CHANGE_FOCUS:
            return state.set('isfoucs',true);
        case constants.CHANGE_BLUR:
            return state.set('isfoucs',false);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
         case constants.GET_SEATCH_LIST:
            return state.set('list',action.list);    
        default :
            return state;
    }

    
}