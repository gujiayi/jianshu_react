import {fromJS} from 'immutable';
import * as  constants from  './constant';
const defaultStatus=fromJS({
    mouseIn:false,
    carouselr:[
        {picUrl:'http://upload.jianshu.io/admin_banners/web_images/4688/988b811a134c1ef20dfd44fcc9138e673272a547.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {picUrl:'http://upload.jianshu.io/admin_banners/web_images/4688/988b811a134c1ef20dfd44fcc9138e673272a547.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {picUrl:'http://upload.jianshu.io/admin_banners/web_images/4688/988b811a134c1ef20dfd44fcc9138e673272a547.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},

    ]
});

export default(state=defaultStatus,action)=>{
    switch(action.type){
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        default :
            return state;
    }

    
}