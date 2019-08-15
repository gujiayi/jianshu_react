import {fromJS} from 'immutable';
const defaultState=fromJS({
    list:[
        {
            "id":1,
            "title":'除了Win，Office，微软还有哪些牛哄哄的产品',
            "content":"说起微软，那可流弊了，Windows 系统，Office 全套办公软件，随便说一个那是说起微软，那可流弊了，Windows 系统，Office 全套办公软件，随便说一个那是响当当的。那么，除了 Wi便说一个那是响当当的。那么，除了 Wi便说一个那是响当当响当当的。那么，除了 Wi便说一个那是响当当的。那么，除了 Wi便说一个那是响当当",
            "imgUrl":"http://upload-images.jianshu.io/upload_images/13841701-a87b03e6bfd381dc?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            "beta":60.4,
            "name":"sfsfsfsf",
            "mesage":5,
            "collect":14,
            "sang":2,
        },
        {
            "id":2,
            "title":'除了Win，Office，微软还有哪些牛哄哄的产品',
            "content":"说起微软，那可流弊了，Windows 系统，Office 全套办公软件，随便说一个那是说起微软，那可流弊了，Windows 系统，Office 全套办公软件，随便说一个那是响当当的。那么，除了 Wi便说一个那是响当当的。那么，除了 Wi便说一个那是响当当响当当的。那么，除了 Wi便说一个那是响当当的。那么，除了 Wi便说一个那是响当当",
            "beta":60.4,
            "name":"sfsfsfsf",
            "mesage":5,
            "collect":14
        },
        {
            "id":3,
            "title":'除了Win，Office，微软还有哪些牛哄哄的产品',
            "content":"说起微软，那可流弊了，Windows 系统，Office 全套办公软件，随便说一个那是说起微软，那可流弊了，Windows 系统，Office 全套办公软件，随便说一个那是响当当的。那么，除了 Wi便说一个那是响当当的。那么，除了 Wi便说一个那是响当当响当当的。那么，除了 Wi便说一个那是响当当的。那么，除了 Wi便说一个那是响当当",
            "imgUrl":"http://upload-images.jianshu.io/upload_images/13841701-a87b03e6bfd381dc?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            "beta":60.4,
            "name":"sfsfsfsf",
            "mesage":5,
            "collect":14
        }
    ]
})

export default(state=defaultState,action)=>{
    switch(action.type){

        default:
            return state;
    }
}