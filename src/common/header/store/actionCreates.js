import * as  constants from  './constant';
import axios from 'axios';
import {fromJS} from 'immutable';
export const changeIsFocus=()=>({
    type:constants.CHANGE_FOCUS,
});

export const changeIsBlur=()=>({
    type:constants.CHANGE_BLUR
});

export const isMouseEnter=()=>({
    type:constants.MOUSE_ENTER
});

export const isMouseLeave=()=>({
    type:constants.MOUSE_LEAVE
});

export const getSearchList=()=>{
    return (dispatch)=>{
        axios.get('/api/search.json').then(res=>{
            dispatch(get_search_list(res.data.data))
        })
    }
}


const get_search_list=(list)=>({
    type:constants.GET_SEATCH_LIST,
    list:fromJS(list)
})
